import{_ as t,r as o,o as l,c as r,a,b as s,F as i,e as c,d as e}from"./app.d411e3b3.js";const p={},d=c(`<h1 id="debugging-solana-programs" tabindex="-1"><a class="header-anchor" href="#debugging-solana-programs" aria-hidden="true">#</a> Debugging Solana Programs</h1><p>Solana Program\uC744 \uD14C\uC2A4\uD2B8\uD558\uACE0 \uB514\uBC84\uAE45\uD558\uAE30 \uC704\uD55C \uBA87 \uAC00\uC9C0 \uC120\uD0DD\uC9C0\uC640 \uB3C4\uAD6C\uB4E4\uC774 \uC874\uC7AC\uD569\uB2C8\uB2E4.</p><h2 id="facts" tabindex="-1"><a class="header-anchor" href="#facts" aria-hidden="true">#</a> Facts</h2><div class="custom-container tip"><p class="custom-container-title">Fact Sheet</p><ul><li>crate <code>solana-program-test</code>\uB294 \uB2F9\uC2E0\uC758 \uD504\uB85C\uADF8\uB7A8\uC744 interatively \uD14C\uC2A4\uD2B8\uD558\uACE0 \uB514\uBC84\uAE45 \uD560 \uC218 \uC788\uAC8C \uD558\uB294 <strong><em>local runtime</em></strong> \uC0AC\uC6A9\uC744 \uAC00\uB2A5\uD558\uAC8C \uD574\uC90D\uB2C8\uB2E4. (e.g. in vscode).</li><li>crate <code>solana-validator</code>\uB294 **<em>local validator node</em>**\uC5D0\uC11C \uC77C\uC5B4\uB098\uB294 \uB354 \uC644\uC131\uB41C \uD14C\uC2A4\uD2B8\uB97C \uC704\uD55C <code>solana-test-validator</code> \uAD6C\uD604\uC758 \uC0AC\uC6A9\uC744 \uAC00\uB2A5\uD558\uAC8C \uD574\uC90D\uB2C8\uB2E4.</li><li>CLI tool <code>solana-test-validator</code>\uB294 \uB2F9\uC2E0\uC758 \uD504\uB85C\uADF8\uB7A8\uC744 \uC2E4\uD589\uC2DC\uD0A4\uACE0 command line Rust Application \uB610\uB294 web3\uB97C \uC0AC\uC6A9\uD558\uB294 Javascript/Typescript Application \uC73C\uB85C\uBD80\uC758 Transaction\uC744 \uCC98\uB9AC\uD569\uB2C8\uB2E4. \uC704 \uBCF4\uB4E0 \uAC83\uB4E4\uC744 \uC704\uD574, \uBA3C\uC800 \uB2F9\uC2E0\uC758 Program\uC5D0\uC11C<code>msg!</code> \uB9E4\uD06C\uB85C \uC0AC\uC6A9\uD558\uC2DC\uACE0 \uD14C\uC2A4\uD2B8 \uD568\uC5D0 \uB530\uB77C \uADF8\uAC83\uB4E4\uC744 \uC9C0\uC6B0\uAE38 \uCD94\uCC9C\uD569\uB2C8\uB2E4. <code>msg!</code>\uAC00 \uCEF4\uD4E8\uD130 \uC790\uC6D0\uC744 \uC18C\uBE44\uD55C\uB2E4\uB294 \uAC83\uC744 \uAE30\uC5B5\uD558\uC138\uC694. \uAC11\uC790\uAE30 \uB2F9\uC2E0\uC758 \uD504\uB85C\uADF8\uB7A8\uC744 \uC2E4\uD328\uD558\uAC8C \uB9CC\uB4E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</li></ul></div><p>\uC544\uB798 \uC139\uC158\uC758 \uB2E8\uACC4\uB4E4\uC740 <a href="#resources">solana-program-bpf-template</a>\uB97C \uC0AC\uC6A9\uD569\uB2C8\uB2E4. \uB2F9\uC2E0\uC758 \uCEF4\uD4E8\uD130\uC5D0 Clone \uD558\uC138\uC694:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> clone git@github.com:mvines/solana-bpf-program-template.git
<span class="token builtin class-name">cd</span> solana-bpf-program-template
code <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="runtime-testing-and-debugging-in-editor" tabindex="-1"><a class="header-anchor" href="#runtime-testing-and-debugging-in-editor" aria-hidden="true">#</a> Runtime Testing and Debugging in editor</h2><p>Open the file <code>src/lib.rs</code></p><p>\uB2F9\uC2E0\uC740 \uC774 \uD504\uB85C\uADF8\uB7A8\uC774 \uB418\uAC8C \uB2E8\uC21C\uD558\uACE0 \uB2E8\uC9C0 Program entrypoint function\uC778 <code>process_instruction</code>\uC5D0 \uC758\uD574 \uC218\uC2E0\uB41C \uB0B4\uC6A9\uC744 \uAE30\uB85D\uD558\uB294 \uAC83\uC784\uC744 \uC54C \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><ol><li><code>#[cfg(test)]</code> \uC139\uC158\uC73C\uB85C \uAC00\uC11C <code>Run Tests</code>\uB97C \uD074\uB9AD\uD558\uC138\uC694. \uC774\uAC83\uC740 Program\uC744 \uBE4C\uB4DC\uD560 \uAC83\uC774\uACE0 <code>async fn test_transaction()</code> \uD14C\uC2A4\uD2B8\uB97C \uC2E4\uD589\uD560 \uAC83\uC785\uB2C8\uB2E4. \uB2F9\uC2E0\uC740 \uC544\uB798\uC5D0 vscode \uD130\uBBF8\uB110\uC5D0\uC11C \uB85C\uADF8 \uBA54\uC2DC\uC9C0\uB4E4\uC744 \uBCFC \uAC83\uC785\uB2C8\uB2E4.</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>running <span class="token number">1</span> <span class="token builtin class-name">test</span>
<span class="token string">&quot;bpf_program_template&quot;</span> program loaded as native code
Program 4uQeVj5tqViQh7yWWGStvkEG1Zmhx6uasJtWCJziofM invoke <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
Program log: process_instruction: 4uQeVj5tqViQh7yWWGStvkEG1Zmhx6uasJtWCJziofM: <span class="token number">1</span> accounts, <span class="token assign-left variable">data</span><span class="token operator">=</span><span class="token punctuation">[</span><span class="token number">1</span>, <span class="token number">2</span>, <span class="token number">3</span><span class="token punctuation">]</span>
Program 4uQeVj5tqViQh7yWWGStvkEG1Zmhx6uasJtWCJziofM success
<span class="token builtin class-name">test</span> test::test_transaction <span class="token punctuation">..</span>. ok
<span class="token builtin class-name">test</span> result: ok. <span class="token number">1</span> passed<span class="token punctuation">;</span> <span class="token number">0</span> failed<span class="token punctuation">;</span> <span class="token number">0</span> ignored<span class="token punctuation">;</span> <span class="token number">0</span> measured<span class="token punctuation">;</span> <span class="token number">0</span> filtered out<span class="token punctuation">;</span> finished <span class="token keyword">in</span> <span class="token number">33</span>.41s
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><ol start="2"><li>Program\uC758 <code>msg!</code> line (11)\uC5D0 breakpoint\uB97C \uAC70\uC138\uC694.</li><li>test \uBAA8\uB4C8\uB85C \uB3CC\uC544\uC640, <code>Debug</code>\uB97C \uD074\uB9AD\uD558\uBA74 \uBA87 \uCD08 \uC548\uC5D0 \uB514\uBC84\uAC70\uAC00 breakpoint\uC5D0\uC11C \uBA48\uCD9C \uAC83\uC785\uB2C8\uB2E4. \uADF8\uB9AC\uACE0 \uB2F9\uC2E0\uC740 \uB370\uC774\uD130\uC640 \uD568\uC218\uB4E4\uB97C \uD3EC\uD568\uD55C \uC5EC\uB7EC\uAC00\uC9C0\uB97C \uC870\uC0AC\uD574\uBCFC \uC218 \uC788\uC2B5\uB2C8\uB2E4.</li></ol><p>\uC774 \uD14C\uC2A4\uD2B8\uB4E4\uC740 comman line\uC73C\uB85C\uB3C4 \uC2E4\uD589\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4: <code>cargo test</code> or <code>cargo test-bpf</code>. \uBB3C\uB860 \uC5EC\uAE30\uC5D0\uC120 breakpoint\uAC00 \uBB34\uC2DC\uB429\uB2C8\uB2E4.</p><div class="custom-container tip"><p class="custom-container-title">Note</p><p>\uB2F9\uC2E0\uC774 validator \uB178\uB4DC\uB97C \uC0AC\uC6A9\uD558\uACE0 \uC788\uC9C0 \uC54A\uB2E4\uB294 \uAC83\uC744 \uBA85\uC2EC\uD558\uC138\uC694. \uADF8\uB798\uC11C \uAE30\uBCF8 Program\uB4E4, blockhash\uB4E4, \uAE30\uB2E4 \uB4F1\uB4F1\uC740 \uB098\uD0C0\uB098\uC9C0 \uC54A\uACE0 \uC2E4\uC81C Validator \uB178\uB4DC\uB97C \uC2E4\uD589\uD558\uACE0 \uC788\uC744 \uB584 \uCC98\uB7FC \uD589\uB3D9 \uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. This is why the gang at Solana gave us Local Validator Node testing!</p></div><h2 id="local-validator-node-testing-in-editor" tabindex="-1"><a class="header-anchor" href="#local-validator-node-testing-in-editor" aria-hidden="true">#</a> Local Validator Node Testing in editor</h2><p>local validator node\uC758 \uC790\uB3D9 \uB85C\uB529\uC744 \uC0AC\uC6A9\uD55C \uD1B5\uD569\uD14C\uC2A4\uD2B8\uB294 <code>tests/integration.rs</code> \uD30C\uC77C\uC5D0 \uC815\uC758\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4.</p><p>\uAE30\uBCF8\uC801\uC73C\uB85C, template repo \uD1B5\uD569 \uD14C\uC2A4\uD2B8\uB294 command line\uC5D0\uC11C <code>cargo test-bpf</code>\uB97C \uC0AC\uC6A9\uD574\uC11C\uB9CC \uC2E4\uD589\uC2DC\uD0AC \uC218 \uC788\uC744 \uAC83\uC785\uB2C8\uB2E4. \uC544\uB798 \uB2E8\uACC4\uB4E4\uC740 \uB2F9\uC2E0\uC774 \uC5D0\uB514\uD130\uC5D0\uC11C \uC2E4\uD589\uD558\uB294 \uAC83\uC744 \uAC00\uB2A5\uD558\uAC8C \uD574\uC904 \uBFD0\uB9CC\uC544\uB2C8\uB77C, program validator log\uB4E4\uACFC <code>msg!</code> \uACB0\uACFC\uB4E4\uC744 \uBCF4\uC5EC\uC904 \uAC83\uC785\uB2C8\uB2E4:</p><ol><li>\uD504\uB85C\uC81D\uD2B8 \uACBD\uB85C\uC5D0\uC11C \uC0D8\uD50C \uD504\uB85C\uADF8\uB7A8\uC744 \uBE4C\uB4DC\uD558\uAE30 \uC704\uD574 <code>cargo build-bpf</code>\uB97C \uC2E4\uD589\uD558\uC138\uC694.</li><li>\uC5D0\uB514\uD130\uC5D0\uC11C <code>tests/integration.rs</code>\uB97C \uC5EC\uC138\uC694.</li><li>line 1\uC744 \uC8FC\uC11D\uCC98\uB9AC\uD558\uC138\uC694. -&gt; <code>// #![cfg(feature = &quot;test-bpf&quot;)]</code></li><li>line 19\uB97C \uBCC0\uACBD\uD558\uC138\uC694: <code>.add_program(&quot;target/deploy/bpf_program_template&quot;, program_id)</code></li><li>line 22\uC5D0 \uCD94\uAC00\uD558\uC138\uC694. <code>solana_logger::setup_with_default(&quot;solana_runtime::message=debug&quot;);</code></li><li><code>test_validator_transaction()</code> \uD568\uC218 \uC704\uC5D0 <code>Run Test</code>\uB97C \uD074\uB9AD\uD558\uC138\uC694.</li></ol><p>\uC774\uAC83\uC740 validator \uB178\uB4DC\uB97C \uB85C\uB4DC\uD560 \uAC83\uC774\uACE0 \uB2F9\uC2E0\uC774 Transaction\uC744 \uC0DD\uC131\uD558\uB3C4\uB85D \uD560 \uAC83\uC774\uBA70 <code>RpcClient</code>\uB97C \uC0AC\uC6A9\uD574 \uB178\uB4DC\uC5D0\uAC8C \uBCF4\uB0BC \uAC83\uC785\uB2C8\uB2E4.</p><p>\uD504\uB85C\uADF8\uB7A8\uC758 \uACB0\uACFC\uAC00 \uC5ED\uC2DC \uC5D0\uB514\uD130\uC758 \uD130\uBBF8\uB110\uC5D0 \uCD9C\uB825\uB420 \uAC83\uC785\uB2C8\uB2E4. \uAC04\uB2E8\uD55C \uC608\uC2DC:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>running <span class="token number">1</span> <span class="token builtin class-name">test</span>
Waiting <span class="token keyword">for</span> fees to stabilize <span class="token number">1</span><span class="token punctuation">..</span>.
Waiting <span class="token keyword">for</span> fees to stabilize <span class="token number">2</span><span class="token punctuation">..</span>.
Program 4uQeVj5tqViQh7yWWGStvkEG1Zmhx6uasJtWCJziofM invoke <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
Program log: process_instruction: 4uQeVj5tqViQh7yWWGStvkEG1Zmhx6uasJtWCJziofM: <span class="token number">1</span> accounts, <span class="token assign-left variable">data</span><span class="token operator">=</span><span class="token punctuation">[</span><span class="token number">1</span>, <span class="token number">2</span>, <span class="token number">3</span><span class="token punctuation">]</span>
Program 4uQeVj5tqViQh7yWWGStvkEG1Zmhx6uasJtWCJziofM consumed <span class="token number">13027</span> of <span class="token number">200000</span> compute <span class="token function">units</span>
Program 4uQeVj5tqViQh7yWWGStvkEG1Zmhx6uasJtWCJziofM success

<span class="token builtin class-name">test</span> test_validator_transaction <span class="token punctuation">..</span>. ok
<span class="token builtin class-name">test</span> result: ok. <span class="token number">1</span> passed<span class="token punctuation">;</span> <span class="token number">0</span> failed<span class="token punctuation">;</span> <span class="token number">0</span> ignored<span class="token punctuation">;</span> <span class="token number">0</span> measured<span class="token punctuation">;</span> <span class="token number">0</span> filtered out<span class="token punctuation">;</span> finished <span class="token keyword">in</span> <span class="token number">6</span>.40s
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\uB514\uBC84\uAE45\uD558\uB294\uAC83\uC740 \uB2F9\uC2E0\uC774 <strong><em>test body</em></strong> \uC5D0\uC11C \uC0AC\uC6A9\uB418\uB294 \uD568\uC218\uC640 \uBA54\uC18C\uB4DC\uB4E4\uC744 \uB514\uBC84\uADF8\uD558\uB3C4\uB85D \uD574\uC904\uAC83 \uC774\uC9C0\uB9CC breakpoint\uB294 \uB3D9\uC791\uD558\uC9C0 \uC54A\uC744 \uAC83\uC785\uB2C8\uB2E4.</p><h2 id="local-validator-node-testing-from-client-apps" tabindex="-1"><a class="header-anchor" href="#local-validator-node-testing-from-client-apps" aria-hidden="true">#</a> Local Validator Node Testing from Client Apps</h2><p>\uB9C8\uC9C0\uB9C9\uC73C\uB85C, \uB2F9\uC2E0\uC740 comman line\uC758 <code>solana-test-validator</code>\uB97C \uC0AC\uC6A9\uD574 local validating node\uB97C \uC2E4\uD589\uD560 \uC218 \uC788\uACE0 \uB2F9\uC2E0\uC758 \uD504\uB85C\uADF8\uB7A8\uACFC Account\uB4E4\uC744 \uB85C\uB4DC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><p>\uC5EC\uAE30\uC5D0\uC11C \uB2F9\uC2E0\uC740 Rust\uC758 <a href="#resources">RcpClient</a>\uB97C \uC0AC\uC6A9\uD558\uAC70\uB098 <a href="#resources">JavaScript or Typescript clients</a>\uC5D0 \uC788\uB294 client application\uC774 \uD544\uC694\uD560 \uAC83\uC785\uB2C8\uB2E4.</p><p><code>solana-test-validator --help</code>\uB97C \uC0AC\uC6A9\uD558\uBA74 \uB354 \uC790\uC138\uD55C \uB0B4\uC6A9\uACFC \uC635\uC158\uB4E4\uC744 \uBCFC \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC608\uC81C \uD504\uB85C\uADF8\uB7A8\uC744 \uC704\uD55C \uB2E8\uACC4\uB294 \uC5EC\uAE30\uC788\uC2B5\uB2C8\uB2E4:</p><ol><li>\uD504\uB85C\uC81D\uD2B8 \uACBD\uB85C\uC5D0\uC11C \uD130\uBBF8\uB110\uC744 \uC5FD\uB2C8\uB2E4.</li><li>local\uB85C \uC124\uC815\uD558\uAE30 \uC704\uD574 <code>solana config set -ul</code>\uC744 \uC2E4\uD589\uD569\uB2C8\uB2E4.</li><li><code>solana-test-validator --bpf-program target/deploy/bpf_program_template-keypair.json target/deploy/bpf_program_template.so</code>\uC744 \uC2E4\uD589\uD569\uB2C8\uB2E4.</li><li>\uB610 \uB2E4\uB978 \uD130\uBBF8\uB110\uC744 \uC5F4\uACE0 log streamer\uB97C \uC2DC\uC791\uD558\uAE30 \uC704\uD574 <code>solana logs</code>\uB97C \uC2E4\uD589\uD569\uB2C8\uB2E4.</li><li>\uB2F9\uC2E0\uC740 \uC774\uC81C Client Program\uC744 \uC2E4\uD589\uD560 \uC218 \uC788\uACE0 \uD504\uB85C\uADF8\uB7A8 \uACB0\uACFC\uB97C log streamer\uB97C \uC2E4\uD589\uD55C \uD130\uBBF8\uB110\uC5D0\uC11C \uD655\uC778\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</li></ol><h2 id="resources" tabindex="-1"><a class="header-anchor" href="#resources" aria-hidden="true">#</a> Resources</h2>`,28),u={href:"https://github.com/mvines/solana-bpf-program-template",target:"_blank",rel:"noopener noreferrer"},m=e("solana-program-bpf-template"),b={href:"https://docs.rs/solana-client/latest/solana_client/rpc_client/struct.RpcClient.html",target:"_blank",rel:"noopener noreferrer"},g=e("RcpClient"),k={href:"https://solana-labs.github.io/solana-web3.js/",target:"_blank",rel:"noopener noreferrer"},h=e("JavaScript/Typescript Library");function f(v,_){const n=o("ExternalLinkIcon");return l(),r(i,null,[d,a("p",null,[a("a",u,[m,s(n)])]),a("p",null,[a("a",b,[g,s(n)])]),a("p",null,[a("a",k,[h,s(n)])])],64)}var W=t(p,[["render",f]]);export{W as default};