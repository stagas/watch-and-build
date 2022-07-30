import { spawn } from 'cross-spawn'
import { arg, decarg } from 'decarg'
import * as fs from 'fs'
import * as path from 'path'
import treeKill from 'tree-kill'

export class Options {
  @arg('[paths]', 'Paths to watch')
  paths: string[] = []

  @arg('--', '[command with args]', 'Command to execute')
  command: string[] = []

  @arg('-t', '--timeout', 'Timeout in seconds after which to kill command')
  timeoutSeconds = 60 * 5

  @arg('--kill-signal', 'Kill signal')
  killSignal: NodeJS.Signals = 'SIGTERM'

  constructor(options: Partial<Options> = {}) {
    Object.assign(this, options)
  }
}

class Proc {
  timeout: any
  proc: any
  onexit?: () => void

  constructor(
    public target: string,
    public command: string[],
    public timeoutSeconds: number,
    public killSignal: NodeJS.Signals,
  ) {}

  debounceKill() {
    clearTimeout(this.timeout)
    this.timeout = setTimeout(this.kill, this.timeoutSeconds * 1000)
  }

  spawn() {
    this.proc = spawn(this.command[0], this.command.slice(1), {
      cwd: path.dirname(this.target),
      env: process.env,
      stdio: [process.stdin, process.stdout, process.stderr],
    })
    this.proc.on('exit', () => {
      this.onexit?.()
    })
  }

  kill = () => {
    treeKill(this.proc.pid, this.killSignal)
  }
}

export const run = async (options: Options) => {
  const procs = new Map()

  if (!options.command.length || !options.paths.length)
    decarg(new Options(), process.argv.slice(1).concat(['--help']))
  else {
    for (const target of options.paths) {
      const watcher = () => {
        console.log('changed:', target)
        if (procs.has(target)) {
          procs.get(target).debounceKill()
          return
        }
        console.log('executing "%s":', options.command.join(' '), target)
        const proc = new Proc(
          target,
          options.command,
          options.timeoutSeconds,
          options.killSignal
        )
        procs.set(target, proc)
        proc.onexit = () => {
          console.log('exited:', target)
          procs.delete(target)
        }
        proc.spawn()
      }

      const dirs = fs
        .readdirSync(target, { withFileTypes: true })
        .filter(x => x.isDirectory())
        .map(x => path.join(target, x.name))
        .concat([target])

      for (const dir of dirs) {
        console.log('watching:', dir)
        fs.watch(dir, watcher)
      }
    }
  }
}
