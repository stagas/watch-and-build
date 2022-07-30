<h1>
@stagas/watch-and-build <a href="https://npmjs.org/package/@stagas/watch-and-build"><img src="https://img.shields.io/badge/npm-v0.0.1-F00.svg?colorA=000"/></a> <a href="src"><img src="https://img.shields.io/badge/loc-86-FFF.svg?colorA=000"/></a> <a href="https://cdn.jsdelivr.net/npm/@stagas/watch-and-build@0.0.1/dist/@stagas/watch-and-build.min.js"><img src="https://img.shields.io/badge/brotli-7K-333.svg?colorA=000"/></a> <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-F0B.svg?colorA=000"/></a>
</h1>

<p></p>

watch a list of directories and run build commands when files change

<h4>
<table><tr><td title="Triple click to select and copy paste">
<code>npm i @stagas/watch-and-build -g</code>
</td><td title="Triple click to select and copy paste">
<code>pnpm add @stagas/watch-and-build -g</code>
</td><td title="Triple click to select and copy paste">
<code>yarn global add @stagas/watch-and-build</code>
</td></tr></table>
</h4>

## API

<p>  <details id="Options$1" title="Class" open><summary><span><a href="#Options$1">#</a></span>  <code><strong>Options</strong></code>    </summary>  <a href="src/runner.ts#L7">src/runner.ts#L7</a>  <ul>        <p>  <details id="constructor$2" title="Constructor" ><summary><span><a href="#constructor$2">#</a></span>  <code><strong>constructor</strong></code><em>(options)</em>    </summary>  <a href="src/runner.ts#L16">src/runner.ts#L16</a>  <ul>    <p>  <details id="new Options$3" title="ConstructorSignature" ><summary><span><a href="#new Options$3">#</a></span>  <code><strong>new Options</strong></code><em>()</em>    </summary>    <ul><p><a href="#Options$1">Options</a></p>      <p>  <details id="options$4" title="Parameter" ><summary><span><a href="#options$4">#</a></span>  <code><strong>options</strong></code>  <span><span>&nbsp;=&nbsp;</span>  <code>{}</code></span>  </summary>    <ul><p><span>Partial</span>&lt;<a href="#Options$1">Options</a>&gt;</p>        </ul></details></p>  </ul></details></p>    </ul></details><details id="command$6" title="Property" ><summary><span><a href="#command$6">#</a></span>  <code><strong>command</strong></code>  <span><span>&nbsp;=&nbsp;</span>  <code>[]</code></span>  </summary>  <a href="src/runner.ts#L10">src/runner.ts#L10</a>  <ul><p>string  []</p>        </ul></details><details id="killSignal$8" title="Property" ><summary><span><a href="#killSignal$8">#</a></span>  <code><strong>killSignal</strong></code>  <span><span>&nbsp;=&nbsp;</span>  <code>'SIGTERM'</code></span>  </summary>  <a href="src/runner.ts#L14">src/runner.ts#L14</a>  <ul><p><span>Signals</span></p>        </ul></details><details id="paths$5" title="Property" ><summary><span><a href="#paths$5">#</a></span>  <code><strong>paths</strong></code>  <span><span>&nbsp;=&nbsp;</span>  <code>[]</code></span>  </summary>  <a href="src/runner.ts#L8">src/runner.ts#L8</a>  <ul><p>string  []</p>        </ul></details><details id="timeoutSeconds$7" title="Property" ><summary><span><a href="#timeoutSeconds$7">#</a></span>  <code><strong>timeoutSeconds</strong></code>  <span><span>&nbsp;=&nbsp;</span>  <code>...</code></span>  </summary>  <a href="src/runner.ts#L12">src/runner.ts#L12</a>  <ul><p>number</p>        </ul></details></p></ul></details><details id="run$9" title="Function" open><summary><span><a href="#run$9">#</a></span>  <code><strong>run</strong></code><em>(options)</em>    </summary>  <a href="src/runner.ts#L54">src/runner.ts#L54</a>  <ul>    <p>    <details id="options$11" title="Parameter" ><summary><span><a href="#options$11">#</a></span>  <code><strong>options</strong></code>    </summary>    <ul><p><a href="#Options$1">Options</a></p>        </ul></details>  <p><strong>run</strong><em>(options)</em>  &nbsp;=&gt;  <ul><span>Promise</span>&lt;void&gt;</ul></p></p>    </ul></details></p>

## Credits

- [cross-spawn](https://npmjs.org/package/cross-spawn) by [André Cruz](https://github.com/moxystudio) &ndash; Cross platform child_process#spawn and child_process#spawnSync
- [decarg](https://npmjs.org/package/decarg) by [stagas](https://github.com/stagas) &ndash; decorator based cli arguments parser
- [tree-kill](https://npmjs.org/package/tree-kill) by [Peteris Krumins](http://www.catonmat.net) &ndash; kill trees of processes

## Contributing

[Fork](https://github.com/stagas/watch-and-build/fork) or [edit](https://github.dev/stagas/watch-and-build) and submit a PR.

All contributions are welcome!

## License

<a href="LICENSE">MIT</a> &copy; 2022 [stagas](https://github.com/stagas)
