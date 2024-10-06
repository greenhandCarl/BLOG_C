const str = `
<!DOCTYPE html>
<!-- saved from url=(0065)file:///C:/Users/86188/AppData/Local/Temp/MarkdownPadPreview.html -->
<html><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Cookie的SameSite和SameParty</title>

<style type="text/css">
/* GitHub stylesheet for MarkdownPad (http://markdownpad.com) */
/* Author: Nicolas Hery - http://nicolashery.com */
/* Version: b13fe65ca28d2e568c6ed5d7f06581183df8f2ff */
/* Source: https://github.com/nicolahery/markdownpad-github */

/* RESET
=============================================================================*/

html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
}

/* BODY
=============================================================================*/

body {
  font-family: Helvetica, arial, freesans, clean, sans-serif;
  font-size: 14px;
  line-height: 1.6;
  color: #333;
  background-color: #fff;
  padding: 20px;
  max-width: 960px;
  margin: 0 auto;
}

body>*:first-child {
  margin-top: 0 !important;
}

body>*:last-child {
  margin-bottom: 0 !important;
}

/* BLOCKS
=============================================================================*/

p, blockquote, ul, ol, dl, table, pre {
  margin: 15px 0;
}

/* HEADERS
=============================================================================*/

h1, h2, h3, h4, h5, h6 {
  margin: 20px 0 10px;
  padding: 0;
  font-weight: bold;
  -webkit-font-smoothing: antialiased;
}

h1 tt, h1 code, h2 tt, h2 code, h3 tt, h3 code, h4 tt, h4 code, h5 tt, h5 code, h6 tt, h6 code {
  font-size: inherit;
}

h1 {
  font-size: 28px;
  color: #000;
}

h2 {
  font-size: 24px;
  border-bottom: 1px solid #ccc;
  color: #000;
}

h3 {
  font-size: 18px;
}

h4 {
  font-size: 16px;
}

h5 {
  font-size: 14px;
}

h6 {
  color: #777;
  font-size: 14px;
}

body>h2:first-child, body>h1:first-child, body>h1:first-child+h2, body>h3:first-child, body>h4:first-child, body>h5:first-child, body>h6:first-child {
  margin-top: 0;
  padding-top: 0;
}

a:first-child h1, a:first-child h2, a:first-child h3, a:first-child h4, a:first-child h5, a:first-child h6 {
  margin-top: 0;
  padding-top: 0;
}

h1+p, h2+p, h3+p, h4+p, h5+p, h6+p {
  margin-top: 10px;
}

/* LINKS
=============================================================================*/

a {
  color: #4183C4;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

/* LISTS
=============================================================================*/

ul, ol {
  padding-left: 30px;
}

ul li > :first-child, 
ol li > :first-child, 
ul li ul:first-of-type, 
ol li ol:first-of-type, 
ul li ol:first-of-type, 
ol li ul:first-of-type {
  margin-top: 0px;
}

ul ul, ul ol, ol ol, ol ul {
  margin-bottom: 0;
}

dl {
  padding: 0;
}

dl dt {
  font-size: 14px;
  font-weight: bold;
  font-style: italic;
  padding: 0;
  margin: 15px 0 5px;
}

dl dt:first-child {
  padding: 0;
}

dl dt>:first-child {
  margin-top: 0px;
}

dl dt>:last-child {
  margin-bottom: 0px;
}

dl dd {
  margin: 0 0 15px;
  padding: 0 15px;
}

dl dd>:first-child {
  margin-top: 0px;
}

dl dd>:last-child {
  margin-bottom: 0px;
}

/* CODE
=============================================================================*/

pre, code, tt {
  font-size: 12px;
  font-family: Consolas, "Liberation Mono", Courier, monospace;
}

code, tt {
  margin: 0 0px;
  padding: 0px 0px;
  white-space: nowrap;
  border: 1px solid #eaeaea;
  background-color: #f8f8f8;
  border-radius: 3px;
}

pre>code {
  margin: 0;
  padding: 0;
  white-space: pre;
  border: none;
  background: transparent;
}

pre {
  background-color: #f8f8f8;
  border: 1px solid #ccc;
  font-size: 13px;
  line-height: 19px;
  overflow: auto;
  padding: 6px 10px;
  border-radius: 3px;
}

pre code, pre tt {
  background-color: transparent;
  border: none;
}

kbd {
    -moz-border-bottom-colors: none;
    -moz-border-left-colors: none;
    -moz-border-right-colors: none;
    -moz-border-top-colors: none;
    background-color: #DDDDDD;
    background-image: linear-gradient(#F1F1F1, #DDDDDD);
    background-repeat: repeat-x;
    border-color: #DDDDDD #CCCCCC #CCCCCC #DDDDDD;
    border-image: none;
    border-radius: 2px 2px 2px 2px;
    border-style: solid;
    border-width: 1px;
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
    line-height: 10px;
    padding: 1px 4px;
}

/* QUOTES
=============================================================================*/

blockquote {
  border-left: 4px solid #DDD;
  padding: 0 15px;
  color: #777;
}

blockquote>:first-child {
  margin-top: 0px;
}

blockquote>:last-child {
  margin-bottom: 0px;
}

/* HORIZONTAL RULES
=============================================================================*/

hr {
  clear: both;
  margin: 15px 0;
  height: 0px;
  overflow: hidden;
  border: none;
  background: transparent;
  border-bottom: 4px solid #ddd;
  padding: 0;
}

/* TABLES
=============================================================================*/

table th {
  font-weight: bold;
}

table th, table td {
  border: 1px solid #ccc;
  padding: 6px 13px;
}

table tr {
  border-top: 1px solid #ccc;
  background-color: #fff;
}

table tr:nth-child(2n) {
  background-color: #f8f8f8;
}

/* IMAGES
=============================================================================*/

img {
  max-width: 100%
}
</style>
</head>
<body>
<p><a href="https://mp.weixin.qq.com/s/sr1k6xgA6yMPnGuBvWTpjQ">原文地址</a></p>
<ol>
<li>什么是三方cookie</li>
<li>same-site的变化是什么</li>
<li>为什么有了same-site还要same-party</li>
</ol>
<h2>三方cookies</h2>
<p>三方指的是非同站，同站和同源协议中的源origin不同，它的要求更宽松</p>
<p>同源协议中的源是由「协议+域名+端口」三者一起定义的，有一个不同就不算同源，而同站只受域名的约束，并且还不要求一模一样——只要「有效顶级域名+二级域名」相同，都算同站</p>
<p>有效顶级域名是由Mozilla维护的一份表格，其中包括.com、.co.uk、.github.io等。所以ai.taobao.com和www.taobao.com是同站的，因为它们的顶级域名（.com）+二级域名（.taobao）相同。</p>
<p>现在知道了什么是站，就可以很简单区分了：
<img src="./Cookie的SameSite和SameParty_files/WEBRESOURCE8bf09d7ec7592413316389c26bf163ba" alt="202204191006.png">
打开开发者工具的application，domain一列中显示和当前域名不同的就是三方cookie</p>
<h3>如何携带三方cookie</h3>
<p>cookie的携带是浏览器自动的操作，规则是「不认来源，只看目的」，下面会讲清这句话的意思。</p>
<h3>cookie下发</h3>
<p>首先，需要先了解cookie的下发，服务端会将其下发到浏览器，方法是通过响应头中的set-cookie字段
<img src="./Cookie的SameSite和SameParty_files/WEBRESOURCE52bbcda4a90e18b61103eb8fe20d8360" alt="202204191011.png">
里面还包括一些配置属性，关键的是其中的domain</p>
<h4>domain</h4>
<p>指定cookie未来使用时，可以被携带到哪些域名。其值可以设置为当前服务端的父级域名或其本身，比如ai.taobao.com设置的cookie的domain可以为.taobao.com，所设置值的所有子域名都可以使用，比如www.taobao.com</p>
<p>如果不设置，会默认为当前域名ai.taobao.com，并且只有自己可以使用，子域名sub.ai.taobao.com都不能使用，适用范围就小了很多，所以一般都会设置</p>
<p>但是不能设置为跨站点的.baidu.com，也不能是顶级域名.com。</p>
<p>其余的属性还有这些：
1. path：指定cookie未来使用时，可以被携带到合法域名的哪些URI。和domain很像，也只能设置为当前路径的父级路径或其本身,设置值的所有子路径都可以访问。
2. expire/max-age: 指定cookie的有效期，其中expire是一个绝对时间，max-age是相对时间，单位是秒，两者同时存在时，max-age优先级更高；如果两者都没有，则为会话级别的cookie，即用户关闭浏览器时失效。</p>
<p><code>Set-Cookie: id=nian; Expires=Wed, 30 Aug 2022 00:00:00 GMT; Max-Age=3600</code>
3. secure：只能在HTTPS环境中被下发以及携带
4. http-only：禁止客户端脚本通过 document.cookie 获取 cookie，避免 XSS 攻击。
5. 还有下面会重点讲解的same-site和same-party</p>
<h3>cookie携带</h3>
<p>上面提到，cookie的domain字段很关键，它规定请求哪些域名才会携带，注意，这里指的是请求目的地的域名。</p>
<p>举个例子，首先我通过响应头在浏览器中设置了一个cookie，domain是.a.com</p>
<p><code>set-cookie: id=nian; domain=.a.com;</code></p>
<p>现在有三个请求：</p>
<ol>
<li>网页www.a.com/index.html的前端页面，去请求接口www.b.com/api</li>
<li>网页www.b.com/index.html的前端页面，去请求接口www.a.com/api</li>
<li>网页www.a.com/index.html的前端页面，去请求接口www.a.com/api</li>
</ol>
<p>有点绕，可以暂停思考10秒，哪个请求会带上之前设置的cookie呢？</p>
<p>答案是2、3都会带上cookie，因为cookie的取用规则是去看请求的目的地，2、3请求的都是www.a.com/api命中domain=.a.com规则。</p>
<p>这就是「不认来源，只看目的」的意思，不管请求来源是哪里，只要请求的目的是a站，cookie都会携带上。</p>
<p>通过这个案例也可以再回顾一下：3的这种情况的叫第一方cookie，2的这种情况叫第三方cookie。</p>
<h2>限制三方cookie的携带</h2>
<p>「不认来源，只看目的」规矩在2020年开始被打破，这种变化体现在浏览器将same-site:lax设置为默认属性。</p>
<p>chrome操作比较平缓，目前可以手动设置same-site:none恢复之前规则
但在safari中如果这样设置，会被当作same-site:strict
<img src="./Cookie的SameSite和SameParty_files/WEBRESOURCE50bb86291d70451d86a5179118cf493d" alt="202204191019.png"></p>
<p>可以看到，在safari中使用的全是第一方cookie，直观的体验就是在天猫登录完，打开淘宝，还需要再登录一次。</p>
<p>也就是说现在cookie的取用是「既看来源，又看目的」了</p>
<h2>SameSite</h2>
<p>上面提到的same-site是cookie的一个属性，它制约第三方cookie的携带，其值有三个none、strict、lax。</p>
<ol>
<li>strict代表完全禁止三方cookie，这是最严格防护，可以避免被CSRF攻击，但缺点也很明显，像天猫、淘宝这种同属一个主体运营的网站不得不重复登录；</li>
<li>none代表完全不做限制，即之前「不认来源，只看目的」的cookie取用原则；</li>
<li>Lax则是折中，在某些情况下会限制三方cookie的携带，某些情况又放行，这也是浏览器的默认值（包括safari）。</li>
<li>在safari，same-site的默认值是lax，如果把它设置为same-site:none，会适得其反，被当作strict处理</li>
</ol>
<h3>SameSite的修改</h3>
<p>可以这么理解，浏览器将same-site的默认值从none调整到了lax</p>
<p>same-site:lax的具体规则如下：
|类型|例子|	是否发送|
|---|---|---|
|a链接|&lt;a href="..."&gt;&lt;/a&gt;|发送|
|预加载|&lt;link rel="prerender" href="..."/&gt;|发送|
|GET 表单|&lt;form method="GET" action="..."&gt;|发送|
|POST 表单|&lt;form method="POST" action="..."&gt;|不发送|
|iframe|&lt;iframe src="..."&gt;&lt;/iframe&gt;|不发送|
|AJAX|axios.post|不发送|
|图片|&lt;img src="..."&gt;&lt;/img&gt;|不发送|</p>
<p>而在这之前是会全部发送的。</p>
<h3>SameSite修改带来的影响</h3>
<p>像a链接这种，没有受到影响，依旧会带上三方cookie，这样可以保证从百度搜索中打开淘宝，是有登录状态的。</p>
<p>但是对大部分业务的影响是巨大的，比如监控埋点系统。</p>
<p>埋点监控SDK是用图片的src去做请求的发送的，从上面的表格可知，变成lax后默认不发送了，这时用户的身份便无法确认，UV也没法统计了。</p>
<p><code>为什么埋点监控用会图片的src</code></p>
<p>为了解决这些问题，大部分公司目前的解决方案是设置same-site:none并且配合secure，就可以像以往一样，继续携带第三方cookie。</p>
<p>但这不是版本答案。</p>
<h2>SameParty</h2>
<p>上面说到，为了绕开浏览器对三方cookie的限制，保障业务的正常，我们的解决方式是把same-site又设置回none。</p>
<p>但这不是长久之策，一来，浏览器把same-site的默认值从从none调整到lax可以避免CSRF攻击，保障安全，可我们为了业务正常运行，却又走了回头路；二来，chrome承诺2022年，也就是今年，会全面禁用三方cookie，届时和在safari一样，我们没法再用这种方法去hack。</p>
<p>如果我们不想使用same-site:none，或者说，未来用不了这种方式了，same-party将是我们的唯一选择。</p>
<h2>什么SameParty</h2>
<p>继续沿用阿里系的例子，same-party可以把.taobao.com、.tmall.com和.alimama.com三个站合起来，它们设置的cookie在这个集合内部不会被当作第三方cookie对待。</p>
<p>首先需要定义First-Party集合：在.taobao.com、.tmall.com和.alimama.com三个站的服务器下都加一个配置文件，放在/.well-know/目录下，命名为first-party-set。</p>
<p>其中一个是“组长”，暂定为.taobao.com，在它的的服务器下写入
<code>// /.well-know/first-party-set
{
  "owner": ".taobao.com",
  "members": [".tmall.com", ".alimama.com"]
}</code>
另外两个是组员：
<code>// /.well-know/first-party-set
{
  "owner": ".taobao.com",
}</code>
并且，在下发cookie时，需要注明same-party属性：
<code>Set-Cookie: id=nian; SameParty; Secure; SameSite=Lax; domain=.taobao.com</code>
这样，我们打开.tmall.com的网站，向.taobao.com发起AJAX请求，都会带上这个cookie，即使当前的same-site属性是lax，因为这集合中的三个域名都会被当作一个站对待，也就是说，在浏览器眼中，这个cookie现在就是第一方cookie。</p>
<p>而不在集合中的baidu.com发起的AJAX请求则不会带上。</p>
<p>需要注意的是，使用same-party属性时，必须要同时使用https(secure属性)，并且same-site不能是strict。</p>
<h2>总结</h2>
<p>对三方cookie的限制一是为了浏览器安全，但在国外推动的更重要原因是个人的隐私安全。但不论是出于什么目的，这种改变都会对当前的业务架构造成很大的影响。</p>
<p>same-site:lax变成默认是一个暂时的预警，它限制了特定场景下的第三方cookie使用。目前处于比较柔和的过渡期，因为在大部分浏览器中，我们可以简单地将它调整回same-site:none来解除这些限制，和以前一样畅通无阻。</p>
<p>但未来这项限制终将无法脱下，same-party才是版本答案，有了它，我们可以灵活定义哪些站属于业务意义上的“第一方”，哪些才是我们想要的“第三方”。</p>



<!-- This document was created with MarkdownPad, the Markdown editor for Windows (http://markdownpad.com) -->
</body></html>
`

export default str;