



<!DOCTYPE html>
<html>
<head>
 <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" >
 <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" >
 
 <meta name="ROBOTS" content="NOARCHIVE">
 
 <link rel="icon" type="image/vnd.microsoft.icon" href="https://ssl.gstatic.com/codesite/ph/images/phosting.ico">
 
 
 <script type="text/javascript">
 
 
 
 
 var codesite_token = "ABZ6GAd94h5SOtyTy7LsrTuPRFcAerSv1Q:1411672194306";
 
 
 var CS_env = {"relativeBaseUrl": "", "projectName": "google-maps-utility-library-v3", "assetHostPath": "https://ssl.gstatic.com/codesite/ph", "assetVersionPath": "https://ssl.gstatic.com/codesite/ph/16315335801608708296", "domainName": null, "profileUrl": "/u/100664424769225160989/", "projectHomeUrl": "/p/google-maps-utility-library-v3", "loggedInUserEmail": "diazruy@gmail.com", "token": "ABZ6GAd94h5SOtyTy7LsrTuPRFcAerSv1Q:1411672194306"};
 var _gaq = _gaq || [];
 _gaq.push(
 ['siteTracker._setAccount', 'UA-18071-1'],
 ['siteTracker._trackPageview']);
 
 _gaq.push(
 ['projectTracker._setAccount', 'UA-12846745-3'],
 ['projectTracker._trackPageview']);
 
 (function() {
 var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
 ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
 (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(ga);
 })();
 
 </script>
 
 
 <title>infobubble-compiled.js - 
 google-maps-utility-library-v3 -
 
 
 Open source project to be a central repository of utility libraries that can be used with the Google Maps API JavaScript v3. - Google Project Hosting
 </title>
 <link type="text/css" rel="stylesheet" href="https://ssl.gstatic.com/codesite/ph/16315335801608708296/css/core.css">
 
 <link type="text/css" rel="stylesheet" href="https://ssl.gstatic.com/codesite/ph/16315335801608708296/css/ph_detail.css" >
 
 
 <link type="text/css" rel="stylesheet" href="https://ssl.gstatic.com/codesite/ph/16315335801608708296/css/d_sb.css" >
 
 
 
<!--[if IE]>
 <link type="text/css" rel="stylesheet" href="https://ssl.gstatic.com/codesite/ph/16315335801608708296/css/d_ie.css" >
<![endif]-->
 <style type="text/css">
 .menuIcon.off { background: no-repeat url(https://ssl.gstatic.com/codesite/ph/images/dropdown_sprite.gif) 0 -42px }
 .menuIcon.on { background: no-repeat url(https://ssl.gstatic.com/codesite/ph/images/dropdown_sprite.gif) 0 -28px }
 .menuIcon.down { background: no-repeat url(https://ssl.gstatic.com/codesite/ph/images/dropdown_sprite.gif) 0 0; }
 
 
 
  tr.inline_comment {
 background: #fff;
 vertical-align: top;
 }
 div.draft, div.published {
 padding: .3em;
 border: 1px solid #999; 
 margin-bottom: .1em;
 font-family: arial, sans-serif;
 max-width: 60em;
 }
 div.draft {
 background: #ffa;
 } 
 div.published {
 background: #e5ecf9;
 }
 div.published .body, div.draft .body {
 padding: .5em .1em .1em .1em;
 max-width: 60em;
 white-space: pre-wrap;
 white-space: -moz-pre-wrap;
 white-space: -pre-wrap;
 white-space: -o-pre-wrap;
 word-wrap: break-word;
 font-size: 1em;
 }
 div.draft .actions {
 margin-left: 1em;
 font-size: 90%;
 }
 div.draft form {
 padding: .5em .5em .5em 0;
 }
 div.draft textarea, div.published textarea {
 width: 95%;
 height: 10em;
 font-family: arial, sans-serif;
 margin-bottom: .5em;
 }

 
 .nocursor, .nocursor td, .cursor_hidden, .cursor_hidden td {
 background-color: white;
 height: 2px;
 }
 .cursor, .cursor td {
 background-color: darkblue;
 height: 2px;
 display: '';
 }
 
 
.list {
 border: 1px solid white;
 border-bottom: 0;
}

 
 </style>
</head>
<body class="t4">
<script type="text/javascript">
 window.___gcfg = {lang: 'en'};
 (function() 
 {var po = document.createElement("script");
 po.type = "text/javascript"; po.async = true;po.src = "https://apis.google.com/js/plusone.js";
 var s = document.getElementsByTagName("script")[0];
 s.parentNode.insertBefore(po, s);
 })();
</script>
<div class="headbg">

 <div id="gaia">
 

 <span>
 
 
 
 <a href="#" id="multilogin-dropdown" onclick="return false;"
 ><u><b>diazruy@gmail.com</b></u> <small>&#9660;</small></a>
 
 
 | <a href="/u/100664424769225160989/" id="projects-dropdown" onclick="return false;"
 ><u>My favorites</u> <small>&#9660;</small></a>
 | <a href="/u/100664424769225160989/" onclick="_CS_click('/gb/ph/profile');"
 title="Profile, Updates, and Settings"
 ><u>Profile</u></a>
 | <a href="https://www.google.com/accounts/Logout?continue=https%3A%2F%2Fcode.google.com%2Fp%2Fgoogle-maps-utility-library-v3%2Fsource%2Fbrowse%2Ftrunk%2Finfobubble%2Fsrc%2Finfobubble-compiled.js" 
 onclick="_CS_click('/gb/ph/signout');"
 ><u>Sign out</u></a>
 
 </span>

 </div>

 <div class="gbh" style="left: 0pt;"></div>
 <div class="gbh" style="right: 0pt;"></div>
 
 
 <div style="height: 1px"></div>
<!--[if lte IE 7]>
<div style="text-align:center;">
Your version of Internet Explorer is not supported. Try a browser that
contributes to open source, such as <a href="http://www.firefox.com">Firefox</a>,
<a href="http://www.google.com/chrome">Google Chrome</a>, or
<a href="http://code.google.com/chrome/chromeframe/">Google Chrome Frame</a>.
</div>
<![endif]-->



 <table style="padding:0px; margin: 0px 0px 10px 0px; width:100%" cellpadding="0" cellspacing="0"
 itemscope itemtype="http://schema.org/CreativeWork">
 <tr style="height: 58px;">
 
 
 
 <td id="plogo">
 <link itemprop="url" href="/p/google-maps-utility-library-v3">
 <a href="/p/google-maps-utility-library-v3/">
 
 <img src="https://ssl.gstatic.com/codesite/ph/images/defaultlogo.png" alt="Logo" itemprop="image">
 
 </a>
 </td>
 
 <td style="padding-left: 0.5em">
 
 <div id="pname">
 <a href="/p/google-maps-utility-library-v3/"><span itemprop="name">google-maps-utility-library-v3</span></a>
 </div>
 
 <div id="psum">
 <a id="project_summary_link"
 href="/p/google-maps-utility-library-v3/"><span itemprop="description">Open source project to be a central repository of utility libraries that can be used with the Google Maps API JavaScript v3.</span></a>
 
 </div>
 
 
 </td>
 <td style="white-space:nowrap;text-align:right; vertical-align:bottom;">
 
 <form action="/hosting/search">
 <input size="30" name="q" value="" type="text">
 
 <input type="submit" name="projectsearch" value="Search projects" >
 </form>
 
 </tr>
 </table>

</div>

 
<div id="mt" class="gtb"> 
 <a href="/p/google-maps-utility-library-v3/" class="tab ">Project&nbsp;Home</a>
 
 
 
 
 
 
 <a href="/p/google-maps-utility-library-v3/w/list" class="tab ">Wiki</a>
 
 
 
 
 
 <a href="/p/google-maps-utility-library-v3/issues/list"
 class="tab ">Issues</a>
 
 
 
 
 
 <a href="/p/google-maps-utility-library-v3/source/checkout"
 class="tab active">Source</a>
 
 
 
 
 
 
 
 
 <div class=gtbc></div>
</div>
<table cellspacing="0" cellpadding="0" width="100%" align="center" border="0" class="st">
 <tr>
 
 
 
 
 
 
 <td class="subt">
 <div class="st2">
 <div class="isf">
 
 


 <span class="inst1"><a href="/p/google-maps-utility-library-v3/source/checkout">Checkout</a></span> &nbsp;
 <span class="inst2"><a href="/p/google-maps-utility-library-v3/source/browse/">Browse</a></span> &nbsp;
 <span class="inst3"><a href="/p/google-maps-utility-library-v3/source/list">Changes</a></span> &nbsp;
 
 
 
 
 
 
 
 </form>
 <script type="text/javascript">
 
 function codesearchQuery(form) {
 var query = document.getElementById('q').value;
 if (query) { form.action += '%20' + query; }
 }
 </script>
 </div>
</div>

 </td>
 
 
 
 <td align="right" valign="top" class="bevel-right"></td>
 </tr>
</table>


<script type="text/javascript">
 var cancelBubble = false;
 function _go(url) { document.location = url; }
</script>
<div id="maincol"
 
>

 




<div class="expand">
<div id="colcontrol">
<style type="text/css">
 #file_flipper { white-space: nowrap; padding-right: 2em; }
 #file_flipper.hidden { display: none; }
 #file_flipper .pagelink { color: #0000CC; text-decoration: underline; }
 #file_flipper #visiblefiles { padding-left: 0.5em; padding-right: 0.5em; }
</style>
<table id="nav_and_rev" class="list"
 cellpadding="0" cellspacing="0" width="100%">
 <tr>
 
 <td nowrap="nowrap" class="src_crumbs src_nav" width="33%">
 <strong class="src_nav">Source path:&nbsp;</strong>
 <span id="crumb_root">
 
 <a href="/p/google-maps-utility-library-v3/source/browse/">svn</a>/&nbsp;</span>
 <span id="crumb_links" class="ifClosed"><a href="/p/google-maps-utility-library-v3/source/browse/trunk/">trunk</a><span class="sp">/&nbsp;</span><a href="/p/google-maps-utility-library-v3/source/browse/trunk/infobubble/">infobubble</a><span class="sp">/&nbsp;</span><a href="/p/google-maps-utility-library-v3/source/browse/trunk/infobubble/src/">src</a><span class="sp">/&nbsp;</span>infobubble-compiled.js</span>
 
 


 </td>
 
 
 <td nowrap="nowrap" width="33%" align="center">
 <a href="/p/google-maps-utility-library-v3/source/browse/trunk/infobubble/src/infobubble-compiled.js?edit=1"
 ><img src="https://ssl.gstatic.com/codesite/ph/images/pencil-y14.png"
 class="edit_icon">Edit file</a>
 </td>
 
 
 <td nowrap="nowrap" width="33%" align="right">
 <table cellpadding="0" cellspacing="0" style="font-size: 100%"><tr>
 
 
 <td class="flipper">
 <ul class="leftside">
 
 <li><a href="/p/google-maps-utility-library-v3/source/browse/trunk/infobubble/src/infobubble-compiled.js?r=350" title="Previous">&lsaquo;r350</a></li>
 
 </ul>
 </td>
 
 <td class="flipper"><b>r473</b></td>
 
 </tr></table>
 </td> 
 </tr>
</table>

<div class="fc">
 
 
 
<style type="text/css">
.undermouse span {
 background-image: url(https://ssl.gstatic.com/codesite/ph/images/comments.gif); }
</style>
<table class="opened" id="review_comment_area"
><tr>
<td id="nums">
<pre><table width="100%"><tr class="nocursor"><td></td></tr></table></pre>
<pre><table width="100%" id="nums_table_0"><tr id="gr_svn473_1"

><td id="1"><a href="#1">1</a></td></tr
><tr id="gr_svn473_2"

><td id="2"><a href="#2">2</a></td></tr
><tr id="gr_svn473_3"

><td id="3"><a href="#3">3</a></td></tr
><tr id="gr_svn473_4"

><td id="4"><a href="#4">4</a></td></tr
><tr id="gr_svn473_5"

><td id="5"><a href="#5">5</a></td></tr
><tr id="gr_svn473_6"

><td id="6"><a href="#6">6</a></td></tr
><tr id="gr_svn473_7"

><td id="7"><a href="#7">7</a></td></tr
><tr id="gr_svn473_8"

><td id="8"><a href="#8">8</a></td></tr
><tr id="gr_svn473_9"

><td id="9"><a href="#9">9</a></td></tr
><tr id="gr_svn473_10"

><td id="10"><a href="#10">10</a></td></tr
><tr id="gr_svn473_11"

><td id="11"><a href="#11">11</a></td></tr
><tr id="gr_svn473_12"

><td id="12"><a href="#12">12</a></td></tr
><tr id="gr_svn473_13"

><td id="13"><a href="#13">13</a></td></tr
><tr id="gr_svn473_14"

><td id="14"><a href="#14">14</a></td></tr
><tr id="gr_svn473_15"

><td id="15"><a href="#15">15</a></td></tr
><tr id="gr_svn473_16"

><td id="16"><a href="#16">16</a></td></tr
><tr id="gr_svn473_17"

><td id="17"><a href="#17">17</a></td></tr
><tr id="gr_svn473_18"

><td id="18"><a href="#18">18</a></td></tr
><tr id="gr_svn473_19"

><td id="19"><a href="#19">19</a></td></tr
><tr id="gr_svn473_20"

><td id="20"><a href="#20">20</a></td></tr
><tr id="gr_svn473_21"

><td id="21"><a href="#21">21</a></td></tr
><tr id="gr_svn473_22"

><td id="22"><a href="#22">22</a></td></tr
><tr id="gr_svn473_23"

><td id="23"><a href="#23">23</a></td></tr
><tr id="gr_svn473_24"

><td id="24"><a href="#24">24</a></td></tr
><tr id="gr_svn473_25"

><td id="25"><a href="#25">25</a></td></tr
><tr id="gr_svn473_26"

><td id="26"><a href="#26">26</a></td></tr
><tr id="gr_svn473_27"

><td id="27"><a href="#27">27</a></td></tr
><tr id="gr_svn473_28"

><td id="28"><a href="#28">28</a></td></tr
><tr id="gr_svn473_29"

><td id="29"><a href="#29">29</a></td></tr
><tr id="gr_svn473_30"

><td id="30"><a href="#30">30</a></td></tr
><tr id="gr_svn473_31"

><td id="31"><a href="#31">31</a></td></tr
><tr id="gr_svn473_32"

><td id="32"><a href="#32">32</a></td></tr
><tr id="gr_svn473_33"

><td id="33"><a href="#33">33</a></td></tr
><tr id="gr_svn473_34"

><td id="34"><a href="#34">34</a></td></tr
><tr id="gr_svn473_35"

><td id="35"><a href="#35">35</a></td></tr
><tr id="gr_svn473_36"

><td id="36"><a href="#36">36</a></td></tr
><tr id="gr_svn473_37"

><td id="37"><a href="#37">37</a></td></tr
><tr id="gr_svn473_38"

><td id="38"><a href="#38">38</a></td></tr
></table></pre>
<pre><table width="100%"><tr class="nocursor"><td></td></tr></table></pre>
</td>
<td id="lines">
<pre><table width="100%"><tr class="cursor_stop cursor_hidden"><td></td></tr></table></pre>
<pre class="prettyprint lang-js"><table id="src_table_0"><tr
id=sl_svn473_1

><td class="source">(function(){<br></td></tr
><tr
id=sl_svn473_2

><td class="source">var b=void 0,g;<br></td></tr
><tr
id=sl_svn473_3

><td class="source">function k(a){this.extend(k,google.maps.OverlayView);this.b=[];this.d=null;this.g=100;this.m=!1;a=a||{};if(a.backgroundColor==b)a.backgroundColor=this.z;if(a.borderColor==b)a.borderColor=this.A;if(a.borderRadius==b)a.borderRadius=this.B;if(a.borderWidth==b)a.borderWidth=this.C;if(a.padding==b)a.padding=this.F;if(a.arrowPosition==b)a.arrowPosition=this.u;a.disableAutoPan==b&amp;&amp;(a.disableAutoPan=!1);a.disableAnimation==b&amp;&amp;(a.disableAnimation=!1);if(a.minWidth==b)a.minWidth=this.D;if(a.shadowStyle==b)a.shadowStyle=<br></td></tr
><tr
id=sl_svn473_4

><td class="source">this.G;if(a.arrowSize==b)a.arrowSize=this.v;if(a.arrowStyle==b)a.arrowStyle=this.w;l(this);this.setValues(a)}window.InfoBubble=k;g=k.prototype;g.v=15;g.w=0;g.G=1;g.D=50;g.u=50;g.F=10;g.C=1;g.A=&quot;#ccc&quot;;g.B=10;g.z=&quot;#fff&quot;;g.extend=function(a,c){return function(a){for(var c in a.prototype)this.prototype[c]=a.prototype[c];return this}.apply(a,[c])};<br></td></tr
><tr
id=sl_svn473_5

><td class="source">function l(a){var c=a.c=document.createElement(&quot;DIV&quot;);c.style.position=&quot;absolute&quot;;c.style.zIndex=a.g;(a.i=document.createElement(&quot;DIV&quot;)).style.position=&quot;relative&quot;;var d=a.l=document.createElement(&quot;IMG&quot;);d.style.position=&quot;absolute&quot;;d.style.width=n(12);d.style.height=n(12);d.style.border=0;d.style.zIndex=a.g+1;d.style.cursor=&quot;pointer&quot;;d.src=&quot;http://maps.gstatic.com/intl/en_us/mapfiles/iw_close.gif&quot;;google.maps.event.addDomListener(d,&quot;click&quot;,function(){a.close();google.maps.event.trigger(a,&quot;closeclick&quot;)});<br></td></tr
><tr
id=sl_svn473_6

><td class="source">var e=a.e=document.createElement(&quot;DIV&quot;);e.style.overflowX=&quot;auto&quot;;e.style.overflowY=&quot;auto&quot;;e.style.cursor=&quot;default&quot;;e.style.clear=&quot;both&quot;;e.style.position=&quot;relative&quot;;var f=a.j=document.createElement(&quot;DIV&quot;);e.appendChild(f);f=a.L=document.createElement(&quot;DIV&quot;);f.style.position=&quot;relative&quot;;var i=a.n=document.createElement(&quot;DIV&quot;),h=a.k=document.createElement(&quot;DIV&quot;),j=q(a);i.style.position=h.style.position=&quot;absolute&quot;;i.style.left=h.style.left=&quot;50%&quot;;i.style.height=h.style.height=&quot;0&quot;;i.style.width=h.style.width=<br></td></tr
><tr
id=sl_svn473_7

><td class="source">&quot;0&quot;;i.style.marginLeft=n(-j);i.style.borderWidth=n(j);i.style.borderBottomWidth=0;j=a.a=document.createElement(&quot;DIV&quot;);j.style.position=&quot;absolute&quot;;c.style.display=j.style.display=&quot;none&quot;;c.appendChild(a.i);c.appendChild(d);c.appendChild(e);f.appendChild(i);f.appendChild(h);c.appendChild(f);c=document.createElement(&quot;style&quot;);c.setAttribute(&quot;type&quot;,&quot;text/css&quot;);a.h=&quot;_ibani_&quot;+Math.round(1E4*Math.random());c.textContent=&quot;.&quot;+a.h+&quot;{-webkit-animation-name:&quot;+a.h+&quot;;-webkit-animation-duration:0.5s;-webkit-animation-iteration-count:1;}@-webkit-keyframes &quot;+<br></td></tr
><tr
id=sl_svn473_8

><td class="source">a.h+&quot; {from {-webkit-transform: scale(0)}50% {-webkit-transform: scale(1.2)}90% {-webkit-transform: scale(0.95)}to {-webkit-transform: scale(1)}}&quot;;document.getElementsByTagName(&quot;head&quot;)[0].appendChild(c)}g.ca=function(a){this.set(&quot;backgroundClassName&quot;,a)};k.prototype.setBackgroundClassName=k.prototype.ca;k.prototype.M=function(){this.j.className=this.get(&quot;backgroundClassName&quot;)};k.prototype.backgroundClassName_changed=k.prototype.M;k.prototype.oa=function(a){this.set(&quot;tabClassName&quot;,a)};<br></td></tr
><tr
id=sl_svn473_9

><td class="source">k.prototype.setTabClassName=k.prototype.oa;k.prototype.ra=function(){t(this)};k.prototype.tabClassName_changed=k.prototype.ra;k.prototype.ba=function(a){this.set(&quot;arrowStyle&quot;,a)};k.prototype.setArrowStyle=k.prototype.ba;k.prototype.K=function(){this.p()};k.prototype.arrowStyle_changed=k.prototype.K;function q(a){return parseInt(a.get(&quot;arrowSize&quot;),10)||0}k.prototype.aa=function(a){this.set(&quot;arrowSize&quot;,a)};k.prototype.setArrowSize=k.prototype.aa;k.prototype.p=function(){this.r()};<br></td></tr
><tr
id=sl_svn473_10

><td class="source">k.prototype.arrowSize_changed=k.prototype.p;k.prototype.$=function(a){this.set(&quot;arrowPosition&quot;,a)};k.prototype.setArrowPosition=k.prototype.$;k.prototype.J=function(){this.n.style.left=this.k.style.left=(parseInt(this.get(&quot;arrowPosition&quot;),10)||0)+&quot;%&quot;;u(this)};k.prototype.arrowPosition_changed=k.prototype.J;k.prototype.setZIndex=function(a){this.set(&quot;zIndex&quot;,a)};k.prototype.setZIndex=k.prototype.setZIndex;k.prototype.getZIndex=function(){return parseInt(this.get(&quot;zIndex&quot;),10)||this.g};<br></td></tr
><tr
id=sl_svn473_11

><td class="source">k.prototype.ta=function(){var a=this.getZIndex();this.c.style.zIndex=this.g=a;this.l.style.zIndex=a+1};k.prototype.zIndex_changed=k.prototype.ta;k.prototype.ma=function(a){this.set(&quot;shadowStyle&quot;,a)};k.prototype.setShadowStyle=k.prototype.ma;<br></td></tr
><tr
id=sl_svn473_12

><td class="source">k.prototype.pa=function(){var a=&quot;&quot;,c=&quot;&quot;,d=&quot;&quot;;switch(parseInt(this.get(&quot;shadowStyle&quot;),10)||0){case 0:a=&quot;none&quot;;break;case 1:c=&quot;40px 15px 10px rgba(33,33,33,0.3)&quot;;d=&quot;transparent&quot;;break;case 2:c=&quot;0 0 2px rgba(33,33,33,0.3)&quot;,d=&quot;rgba(33,33,33,0.35)&quot;}this.a.style.boxShadow=this.a.style.webkitBoxShadow=this.a.style.MozBoxShadow=c;this.a.style.backgroundColor=d;if(this.m)this.a.style.display=a,this.draw()};k.prototype.shadowStyle_changed=k.prototype.pa;<br></td></tr
><tr
id=sl_svn473_13

><td class="source">k.prototype.qa=function(){this.set(&quot;hideCloseButton&quot;,!1)};k.prototype.showCloseButton=k.prototype.qa;k.prototype.P=function(){this.set(&quot;hideCloseButton&quot;,!0)};k.prototype.hideCloseButton=k.prototype.P;k.prototype.Q=function(){this.l.style.display=this.get(&quot;hideCloseButton&quot;)?&quot;none&quot;:&quot;&quot;};k.prototype.hideCloseButton_changed=k.prototype.Q;k.prototype.da=function(a){a&amp;&amp;this.set(&quot;backgroundColor&quot;,a)};k.prototype.setBackgroundColor=k.prototype.da;<br></td></tr
><tr
id=sl_svn473_14

><td class="source">k.prototype.N=function(){var a=this.get(&quot;backgroundColor&quot;);this.e.style.backgroundColor=a;this.k.style.borderColor=a+&quot; transparent transparent&quot;;t(this)};k.prototype.backgroundColor_changed=k.prototype.N;k.prototype.ea=function(a){a&amp;&amp;this.set(&quot;borderColor&quot;,a)};k.prototype.setBorderColor=k.prototype.ea;<br></td></tr
><tr
id=sl_svn473_15

><td class="source">k.prototype.O=function(){var a=this.get(&quot;borderColor&quot;),c=this.e,d=this.n;c.style.borderColor=a;d.style.borderColor=a+&quot; transparent transparent&quot;;c.style.borderStyle=d.style.borderStyle=this.k.style.borderStyle=&quot;solid&quot;;t(this)};k.prototype.borderColor_changed=k.prototype.O;k.prototype.fa=function(a){this.set(&quot;borderRadius&quot;,a)};k.prototype.setBorderRadius=k.prototype.fa;function w(a){return parseInt(a.get(&quot;borderRadius&quot;),10)||0}<br></td></tr
><tr
id=sl_svn473_16

><td class="source">k.prototype.q=function(){var a=w(this),c=x(this);this.e.style.borderRadius=this.e.style.MozBorderRadius=this.e.style.webkitBorderRadius=this.a.style.borderRadius=this.a.style.MozBorderRadius=this.a.style.webkitBorderRadius=n(a);this.i.style.paddingLeft=this.i.style.paddingRight=n(a+c);u(this)};k.prototype.borderRadius_changed=k.prototype.q;function x(a){return parseInt(a.get(&quot;borderWidth&quot;),10)||0}k.prototype.ga=function(a){this.set(&quot;borderWidth&quot;,a)};k.prototype.setBorderWidth=k.prototype.ga;<br></td></tr
><tr
id=sl_svn473_17

><td class="source">k.prototype.r=function(){var a=x(this);this.e.style.borderWidth=n(a);this.i.style.top=n(a);var a=x(this),c=q(this),d=parseInt(this.get(&quot;arrowStyle&quot;),10)||0,e=n(c),f=n(Math.max(0,c-a)),i=this.n,h=this.k;this.L.style.marginTop=n(-a);i.style.borderTopWidth=e;h.style.borderTopWidth=f;0==d||1==d?(i.style.borderLeftWidth=e,h.style.borderLeftWidth=f):i.style.borderLeftWidth=h.style.borderLeftWidth=0;0==d||2==d?(i.style.borderRightWidth=e,h.style.borderRightWidth=f):i.style.borderRightWidth=h.style.borderRightWidth=<br></td></tr
><tr
id=sl_svn473_18

><td class="source">0;2&gt;d?(i.style.marginLeft=n(-c),h.style.marginLeft=n(-(c-a))):i.style.marginLeft=h.style.marginLeft=0;i.style.display=0==a?&quot;none&quot;:&quot;&quot;;t(this);this.q();u(this)};k.prototype.borderWidth_changed=k.prototype.r;k.prototype.la=function(a){this.set(&quot;padding&quot;,a)};k.prototype.setPadding=k.prototype.la;function y(a){return parseInt(a.get(&quot;padding&quot;),10)||0}k.prototype.X=function(){this.e.style.padding=n(y(this));t(this);u(this)};k.prototype.padding_changed=k.prototype.X;function n(a){return a?a+&quot;px&quot;:a}<br></td></tr
><tr
id=sl_svn473_19

><td class="source">function z(a){var c=&quot;mousedown,mousemove,mouseover,mouseout,mouseup,mousewheel,DOMMouseScroll,touchstart,touchend,touchmove,dblclick,contextmenu,click&quot;.split(&quot;,&quot;),d=a.c;a.s=[];for(var e=0,f;f=c[e];e++)a.s.push(google.maps.event.addDomListener(d,f,function(a){a.cancelBubble=!0;a.stopPropagation&amp;&amp;a.stopPropagation()}))}k.prototype.onAdd=function(){this.c||l(this);z(this);var a=this.getPanes();a&amp;&amp;(a.floatPane.appendChild(this.c),a.floatShadow.appendChild(this.a))};k.prototype.onAdd=k.prototype.onAdd;<br></td></tr
><tr
id=sl_svn473_20

><td class="source">k.prototype.draw=function(){var a=this.getProjection();if(a){var c=this.get(&quot;position&quot;);if(c){var d=0;if(this.d)d=this.d.offsetHeight;var e=A(this),f=q(this),i=parseInt(this.get(&quot;arrowPosition&quot;),10)||0,i=i/100,a=a.fromLatLngToDivPixel(c);if(c=this.e.offsetWidth){var h=a.y-(this.c.offsetHeight+f);e&amp;&amp;(h-=e);var j=a.x-c*i;this.c.style.top=n(h);this.c.style.left=n(j);switch(parseInt(this.get(&quot;shadowStyle&quot;),10)){case 1:this.a.style.top=n(h+d-1);this.a.style.left=n(j);this.a.style.width=n(c);this.a.style.height=<br></td></tr
><tr
id=sl_svn473_21

><td class="source">n(this.e.offsetHeight-f);break;case 2:c*=0.8,this.a.style.top=e?n(a.y):n(a.y+f),this.a.style.left=n(a.x-c*i),this.a.style.width=n(c),this.a.style.height=n(2)}}}else this.close()}};k.prototype.draw=k.prototype.draw;k.prototype.onRemove=function(){this.c&amp;&amp;this.c.parentNode&amp;&amp;this.c.parentNode.removeChild(this.c);this.a&amp;&amp;this.a.parentNode&amp;&amp;this.a.parentNode.removeChild(this.a);for(var a=0,c;c=this.s[a];a++)google.maps.event.removeListener(c)};k.prototype.onRemove=k.prototype.onRemove;k.prototype.R=function(){return this.m};<br></td></tr
><tr
id=sl_svn473_22

><td class="source">k.prototype.isOpen=k.prototype.R;k.prototype.close=function(){if(this.c)this.c.style.display=&quot;none&quot;,this.c.className=this.c.className.replace(this.h,&quot;&quot;);if(this.a)this.a.style.display=&quot;none&quot;,this.a.className=this.a.className.replace(this.h,&quot;&quot;);this.m=!1};k.prototype.close=k.prototype.close;k.prototype.open=function(a,c){var d=this;window.setTimeout(function(){B(d,a,c)},0)};<br></td></tr
><tr
id=sl_svn473_23

><td class="source">function B(a,c,d){C(a);c&amp;&amp;a.setMap(c);d&amp;&amp;(a.set(&quot;anchor&quot;,d),a.bindTo(&quot;anchorPoint&quot;,d),a.bindTo(&quot;position&quot;,d));a.c.style.display=a.a.style.display=&quot;&quot;;a.get(&quot;disableAnimation&quot;)||(a.c.className+=&quot; &quot;+a.h,a.a.className+=&quot; &quot;+a.h);u(a);a.m=!0;a.get(&quot;disableAutoPan&quot;)||window.setTimeout(function(){a.o()},200)}k.prototype.open=k.prototype.open;k.prototype.setPosition=function(a){a&amp;&amp;this.set(&quot;position&quot;,a)};k.prototype.setPosition=k.prototype.setPosition;k.prototype.getPosition=function(){return this.get(&quot;position&quot;)};<br></td></tr
><tr
id=sl_svn473_24

><td class="source">k.prototype.getPosition=k.prototype.getPosition;k.prototype.Y=function(){this.draw()};k.prototype.position_changed=k.prototype.Y;k.prototype.o=function(){var a=this.getProjection();if(a&amp;&amp;this.c){var c=this.c.offsetHeight+A(this),d=this.get(&quot;map&quot;),e=d.getDiv().offsetHeight,f=this.getPosition(),i=a.fromLatLngToContainerPixel(d.getCenter()),f=a.fromLatLngToContainerPixel(f),c=i.y-c,e=e-i.y,i=0;0&gt;c&amp;&amp;(i=(-1*c+e)/2);f.y-=i;f=a.fromContainerPixelToLatLng(f);d.getCenter()!=f&amp;&amp;d.panTo(f)}};<br></td></tr
><tr
id=sl_svn473_25

><td class="source">k.prototype.panToView=k.prototype.o;function D(a){var a=a.replace(/^\s*([\S\s]*)\b\s*$/,&quot;$1&quot;),c=document.createElement(&quot;DIV&quot;);c.innerHTML=a;if(1==c.childNodes.length)return c.removeChild(c.firstChild);for(a=document.createDocumentFragment();c.firstChild;)a.appendChild(c.firstChild);return a}function E(a){if(a)for(var c;c=a.firstChild;)a.removeChild(c)}k.prototype.setContent=function(a){this.set(&quot;content&quot;,a)};k.prototype.setContent=k.prototype.setContent;k.prototype.getContent=function(){return this.get(&quot;content&quot;)};<br></td></tr
><tr
id=sl_svn473_26

><td class="source">k.prototype.getContent=k.prototype.getContent;function C(a){if(a.j){E(a.j);var c=a.getContent();if(c){&quot;string&quot;==typeof c&amp;&amp;(c=D(c));a.j.appendChild(c);for(var c=a.j.getElementsByTagName(&quot;IMG&quot;),d=0,e;e=c[d];d++)google.maps.event.addDomListener(e,&quot;load&quot;,function(){var c=!a.get(&quot;disableAutoPan&quot;);u(a);c&amp;&amp;(0==a.b.length||0==a.d.index)&amp;&amp;a.o()});google.maps.event.trigger(a,&quot;domready&quot;)}u(a)}}<br></td></tr
><tr
id=sl_svn473_27

><td class="source">function t(a){if(a.b&amp;&amp;a.b.length){for(var c=0,d;d=a.b[c];c++)F(a,d.f);a.d.style.zIndex=a.g;c=x(a);d=y(a)/2;a.d.style.borderBottomWidth=0;a.d.style.paddingBottom=n(d+c)}}<br></td></tr
><tr
id=sl_svn473_28

><td class="source">function F(a,c){var d=a.get(&quot;backgroundColor&quot;),e=a.get(&quot;borderColor&quot;),f=w(a),i=x(a),h=y(a),j=n(-Math.max(h,f)),f=n(f),p=a.g;c.index&amp;&amp;(p-=c.index);var d={cssFloat:&quot;left&quot;,position:&quot;relative&quot;,cursor:&quot;pointer&quot;,backgroundColor:d,border:n(i)+&quot; solid &quot;+e,padding:n(h/2)+&quot; &quot;+n(h),marginRight:j,whiteSpace:&quot;nowrap&quot;,borderRadiusTopLeft:f,MozBorderRadiusTopleft:f,webkitBorderTopLeftRadius:f,borderRadiusTopRight:f,MozBorderRadiusTopright:f,webkitBorderTopRightRadius:f,zIndex:p,display:&quot;inline&quot;},m;for(m in d)c.style[m]=<br></td></tr
><tr
id=sl_svn473_29

><td class="source">d[m];m=a.get(&quot;tabClassName&quot;);m!=b&amp;&amp;(c.className+=&quot; &quot;+m)}function G(a,c){c.S=google.maps.event.addDomListener(c,&quot;click&quot;,function(){H(a,this)})}k.prototype.na=function(a){(a=this.b[a-1])&amp;&amp;H(this,a.f)};k.prototype.setTabActive=k.prototype.na;<br></td></tr
><tr
id=sl_svn473_30

><td class="source">function H(a,c){if(c){var d=y(a)/2,e=x(a);if(a.d){var f=a.d;f.style.zIndex=a.g-f.index;f.style.paddingBottom=n(d);f.style.borderBottomWidth=n(e)}c.style.zIndex=a.g;c.style.borderBottomWidth=0;c.style.marginBottomWidth=&quot;-10px&quot;;c.style.paddingBottom=n(d+e);a.setContent(a.b[c.index].content);C(a);a.d=c;u(a)}else a.setContent(&quot;&quot;),C(a)}k.prototype.ia=function(a){this.set(&quot;maxWidth&quot;,a)};k.prototype.setMaxWidth=k.prototype.ia;k.prototype.U=function(){u(this)};k.prototype.maxWidth_changed=k.prototype.U;<br></td></tr
><tr
id=sl_svn473_31

><td class="source">k.prototype.ha=function(a){this.set(&quot;maxHeight&quot;,a)};k.prototype.setMaxHeight=k.prototype.ha;k.prototype.T=function(){u(this)};k.prototype.maxHeight_changed=k.prototype.T;k.prototype.ka=function(a){this.set(&quot;minWidth&quot;,a)};k.prototype.setMinWidth=k.prototype.ka;k.prototype.W=function(){u(this)};k.prototype.minWidth_changed=k.prototype.W;k.prototype.ja=function(a){this.set(&quot;minHeight&quot;,a)};k.prototype.setMinHeight=k.prototype.ja;k.prototype.V=function(){u(this)};k.prototype.minHeight_changed=k.prototype.V;<br></td></tr
><tr
id=sl_svn473_32

><td class="source">k.prototype.H=function(a,c){var d=document.createElement(&quot;DIV&quot;);d.innerHTML=a;F(this,d);G(this,d);this.i.appendChild(d);this.b.push({label:a,content:c,f:d});d.index=this.b.length-1;d.style.zIndex=this.g-d.index;this.d||H(this,d);d.className=d.className+&quot; &quot;+this.h;u(this)};k.prototype.addTab=k.prototype.H;k.prototype.sa=function(a,c,d){if(this.b.length&amp;&amp;!(0&gt;a||a&gt;=this.b.length)){a=this.b[a];if(c!=b)a.f.innerHTML=a.label=c;if(d!=b)a.content=d;this.d==a.f&amp;&amp;(this.setContent(a.content),C(this));u(this)}};<br></td></tr
><tr
id=sl_svn473_33

><td class="source">k.prototype.updateTab=k.prototype.sa;k.prototype.Z=function(a){if(this.b.length&amp;&amp;!(0&gt;a||a&gt;=this.b.length)){var c=this.b[a];c.f.parentNode.removeChild(c.f);google.maps.event.removeListener(c.f.S);this.b.splice(a,1);delete c;for(var d=0,e;e=this.b[d];d++)e.f.index=d;if(c.f==this.d)this.d=this.b[a]?this.b[a].f:this.b[a-1]?this.b[a-1].f:b,H(this,this.d);u(this)}};k.prototype.removeTab=k.prototype.Z;<br></td></tr
><tr
id=sl_svn473_34

><td class="source">function I(a,c,d){var e=document.createElement(&quot;DIV&quot;);e.style.display=&quot;inline&quot;;e.style.position=&quot;absolute&quot;;e.style.visibility=&quot;hidden&quot;;&quot;string&quot;==typeof a?e.innerHTML=a:e.appendChild(a.cloneNode(!0));document.body.appendChild(e);a=new google.maps.Size(e.offsetWidth,e.offsetHeight);if(c&amp;&amp;a.width&gt;c)e.style.width=n(c),a=new google.maps.Size(e.offsetWidth,e.offsetHeight);if(d&amp;&amp;a.height&gt;d)e.style.height=n(d),a=new google.maps.Size(e.offsetWidth,e.offsetHeight);document.body.removeChild(e);delete e;return a}<br></td></tr
><tr
id=sl_svn473_35

><td class="source">function u(a){var c=a.get(&quot;map&quot;);if(c){var d=y(a);x(a);w(a);var e=q(a),f=c.getDiv(),i=2*e,c=f.offsetWidth-i,f=f.offsetHeight-i-A(a),i=0,h=a.get(&quot;minWidth&quot;)||0,j=a.get(&quot;minHeight&quot;)||0,p=a.get(&quot;maxWidth&quot;)||0,m=a.get(&quot;maxHeight&quot;)||0,p=Math.min(c,p),m=Math.min(f,m),v=0;if(a.b.length)for(var r=0,o;o=a.b[r];r++){var s=I(o.f,p,m);o=I(o.content,p,m);if(h&lt;s.width)h=s.width;v+=s.width;if(j&lt;s.height)j=s.height;if(s.height&gt;i)i=s.height;if(h&lt;o.width)h=o.width;if(j&lt;o.height)j=o.height}else if(r=a.get(&quot;content&quot;),<br></td></tr
><tr
id=sl_svn473_36

><td class="source">&quot;string&quot;==typeof r&amp;&amp;(r=D(r)),r){o=I(r,p,m);if(h&lt;o.width)h=o.width;if(j&lt;o.height)j=o.height}p&amp;&amp;(h=Math.min(h,p));m&amp;&amp;(j=Math.min(j,m));h=Math.max(h,v);h==v&amp;&amp;(h+=2*d);h=Math.max(h,2*e);h&gt;c&amp;&amp;(h=c);j&gt;f&amp;&amp;(j=f-i);if(a.i)a.t=i,a.i.style.width=n(v);a.e.style.width=n(h);a.e.style.height=n(j)}w(a);d=x(a);c=2;a.b.length&amp;&amp;a.t&amp;&amp;(c+=a.t);e=2+d;(f=a.e)&amp;&amp;f.clientHeight&lt;f.scrollHeight&amp;&amp;(e+=15);a.l.style.right=n(e);a.l.style.top=n(c+d);a.draw()}<br></td></tr
><tr
id=sl_svn473_37

><td class="source">function A(a){return a.get(&quot;anchor&quot;)&amp;&amp;(a=a.get(&quot;anchorPoint&quot;))?-1*a.y:0}k.prototype.I=function(){this.draw()};k.prototype.anchorPoint_changed=k.prototype.I;<br></td></tr
><tr
id=sl_svn473_38

><td class="source">})();<br></td></tr
></table></pre>
<pre><table width="100%"><tr class="cursor_stop cursor_hidden"><td></td></tr></table></pre>
</td>
</tr></table>

 
<script type="text/javascript">
 var lineNumUnderMouse = -1;
 
 function gutterOver(num) {
 gutterOut();
 var newTR = document.getElementById('gr_svn473_' + num);
 if (newTR) {
 newTR.className = 'undermouse';
 }
 lineNumUnderMouse = num;
 }
 function gutterOut() {
 if (lineNumUnderMouse != -1) {
 var oldTR = document.getElementById(
 'gr_svn473_' + lineNumUnderMouse);
 if (oldTR) {
 oldTR.className = '';
 }
 lineNumUnderMouse = -1;
 }
 }
 var numsGenState = {table_base_id: 'nums_table_'};
 var srcGenState = {table_base_id: 'src_table_'};
 var alignerRunning = false;
 var startOver = false;
 function setLineNumberHeights() {
 if (alignerRunning) {
 startOver = true;
 return;
 }
 numsGenState.chunk_id = 0;
 numsGenState.table = document.getElementById('nums_table_0');
 numsGenState.row_num = 0;
 if (!numsGenState.table) {
 return; // Silently exit if no file is present.
 }
 srcGenState.chunk_id = 0;
 srcGenState.table = document.getElementById('src_table_0');
 srcGenState.row_num = 0;
 alignerRunning = true;
 continueToSetLineNumberHeights();
 }
 function rowGenerator(genState) {
 if (genState.row_num < genState.table.rows.length) {
 var currentRow = genState.table.rows[genState.row_num];
 genState.row_num++;
 return currentRow;
 }
 var newTable = document.getElementById(
 genState.table_base_id + (genState.chunk_id + 1));
 if (newTable) {
 genState.chunk_id++;
 genState.row_num = 0;
 genState.table = newTable;
 return genState.table.rows[0];
 }
 return null;
 }
 var MAX_ROWS_PER_PASS = 1000;
 function continueToSetLineNumberHeights() {
 var rowsInThisPass = 0;
 var numRow = 1;
 var srcRow = 1;
 while (numRow && srcRow && rowsInThisPass < MAX_ROWS_PER_PASS) {
 numRow = rowGenerator(numsGenState);
 srcRow = rowGenerator(srcGenState);
 rowsInThisPass++;
 if (numRow && srcRow) {
 if (numRow.offsetHeight != srcRow.offsetHeight) {
 numRow.firstChild.style.height = srcRow.offsetHeight + 'px';
 }
 }
 }
 if (rowsInThisPass >= MAX_ROWS_PER_PASS) {
 setTimeout(continueToSetLineNumberHeights, 10);
 } else {
 alignerRunning = false;
 if (startOver) {
 startOver = false;
 setTimeout(setLineNumberHeights, 500);
 }
 }
 }
 function initLineNumberHeights() {
 // Do 2 complete passes, because there can be races
 // between this code and prettify.
 startOver = true;
 setTimeout(setLineNumberHeights, 250);
 window.onresize = setLineNumberHeights;
 }
 initLineNumberHeights();
</script>

 
 
 <div id="log">
 <div style="text-align:right">
 <a class="ifCollapse" href="#" onclick="_toggleMeta(this); return false">Show details</a>
 <a class="ifExpand" href="#" onclick="_toggleMeta(this); return false">Hide details</a>
 </div>
 <div class="ifExpand">
 
 
 <div class="pmeta_bubble_bg" style="border:1px solid white">
 <div class="round4"></div>
 <div class="round2"></div>
 <div class="round1"></div>
 <div class="box-inner">
 <div id="changelog">
 <p>Change log</p>
 <div>
 <a href="/p/google-maps-utility-library-v3/source/detail?spec=svn473&amp;r=357">r357</a>
 by c...@google.com
 on Jan 1, 2012
 &nbsp; <a href="/p/google-maps-utility-library-v3/source/diff?spec=svn473&r=357&amp;format=side&amp;path=/trunk/infobubble/src/infobubble-compiled.js&amp;old_path=/trunk/infobubble/src/infobubble-compiled.js&amp;old=350">Diff</a>
 </div>
 <pre>Update compiled version of Info Bubble</pre>
 </div>
 
 
 
 
 
 
 <script type="text/javascript">
 var detail_url = '/p/google-maps-utility-library-v3/source/detail?r=357&spec=svn473';
 var publish_url = '/p/google-maps-utility-library-v3/source/detail?r=357&spec=svn473#publish';
 // describe the paths of this revision in javascript.
 var changed_paths = [];
 var changed_urls = [];
 
 changed_paths.push('/trunk/infobubble/src/infobubble-compiled.js');
 changed_urls.push('/p/google-maps-utility-library-v3/source/browse/trunk/infobubble/src/infobubble-compiled.js?r\x3d357\x26spec\x3dsvn473');
 
 var selected_path = '/trunk/infobubble/src/infobubble-compiled.js';
 
 
 function getCurrentPageIndex() {
 for (var i = 0; i < changed_paths.length; i++) {
 if (selected_path == changed_paths[i]) {
 return i;
 }
 }
 }
 function getNextPage() {
 var i = getCurrentPageIndex();
 if (i < changed_paths.length - 1) {
 return changed_urls[i + 1];
 }
 return null;
 }
 function getPreviousPage() {
 var i = getCurrentPageIndex();
 if (i > 0) {
 return changed_urls[i - 1];
 }
 return null;
 }
 function gotoNextPage() {
 var page = getNextPage();
 if (!page) {
 page = detail_url;
 }
 window.location = page;
 }
 function gotoPreviousPage() {
 var page = getPreviousPage();
 if (!page) {
 page = detail_url;
 }
 window.location = page;
 }
 function gotoDetailPage() {
 window.location = detail_url;
 }
 function gotoPublishPage() {
 window.location = publish_url;
 }
</script>

 
 <style type="text/css">
 #review_nav {
 border-top: 3px solid white;
 padding-top: 6px;
 margin-top: 1em;
 }
 #review_nav td {
 vertical-align: middle;
 }
 #review_nav select {
 margin: .5em 0;
 }
 </style>
 <div id="review_nav">
 <table><tr><td>Go to:&nbsp;</td><td>
 <select name="files_in_rev" onchange="window.location=this.value">
 
 <option value="/p/google-maps-utility-library-v3/source/browse/trunk/infobubble/src/infobubble-compiled.js?r=357&amp;spec=svn473"
 selected="selected"
 >...ubble/src/infobubble-compiled.js</option>
 
 </select>
 </td></tr></table>
 
 
 



 
 </div>
 
 
 </div>
 <div class="round1"></div>
 <div class="round2"></div>
 <div class="round4"></div>
 </div>
 <div class="pmeta_bubble_bg" style="border:1px solid white">
 <div class="round4"></div>
 <div class="round2"></div>
 <div class="round1"></div>
 <div class="box-inner">
 <div id="older_bubble">
 <p>Older revisions</p>
 
 
 <div class="closed" style="margin-bottom:3px;" >
 <a class="ifClosed" onclick="return _toggleHidden(this)"><img src="https://ssl.gstatic.com/codesite/ph/images/plus.gif" ></a>
 <a class="ifOpened" onclick="return _toggleHidden(this)"><img src="https://ssl.gstatic.com/codesite/ph/images/minus.gif" ></a>
 <a href="/p/google-maps-utility-library-v3/source/detail?spec=svn473&r=350">r350</a>
 by c...@google.com
 on Dec 7, 2011
 &nbsp; <a href="/p/google-maps-utility-library-v3/source/diff?spec=svn473&r=350&amp;format=side&amp;path=/trunk/infobubble/src/infobubble-compiled.js&amp;old_path=/trunk/infobubble/src/infobubble-compiled.js&amp;old=349">Diff</a>
 <br>
 <pre class="ifOpened">Update compiled version of InfoBubble</pre>
 </div>
 
 <div class="closed" style="margin-bottom:3px;" >
 <a class="ifClosed" onclick="return _toggleHidden(this)"><img src="https://ssl.gstatic.com/codesite/ph/images/plus.gif" ></a>
 <a class="ifOpened" onclick="return _toggleHidden(this)"><img src="https://ssl.gstatic.com/codesite/ph/images/minus.gif" ></a>
 <a href="/p/google-maps-utility-library-v3/source/detail?spec=svn473&r=349">r349</a>
 by c...@google.com
 on Dec 7, 2011
 &nbsp; <a href="/p/google-maps-utility-library-v3/source/diff?spec=svn473&r=349&amp;format=side&amp;path=/trunk/infobubble/src/infobubble-compiled.js&amp;old_path=/trunk/infobubble/src/infobubble-compiled.js&amp;old=306">Diff</a>
 <br>
 <pre class="ifOpened">update compiled version of infobubble</pre>
 </div>
 
 <div class="closed" style="margin-bottom:3px;" >
 <a class="ifClosed" onclick="return _toggleHidden(this)"><img src="https://ssl.gstatic.com/codesite/ph/images/plus.gif" ></a>
 <a class="ifOpened" onclick="return _toggleHidden(this)"><img src="https://ssl.gstatic.com/codesite/ph/images/minus.gif" ></a>
 <a href="/p/google-maps-utility-library-v3/source/detail?spec=svn473&r=306">r306</a>
 by c...@google.com
 on May 29, 2011
 &nbsp; <a href="/p/google-maps-utility-library-v3/source/diff?spec=svn473&r=306&amp;format=side&amp;path=/trunk/infobubble/src/infobubble-compiled.js&amp;old_path=/trunk/infobubble/src/infobubble-compiled.js&amp;old=269">Diff</a>
 <br>
 <pre class="ifOpened">update compiled infobubble</pre>
 </div>
 
 
 <a href="/p/google-maps-utility-library-v3/source/list?path=/trunk/infobubble/src/infobubble-compiled.js&start=357">All revisions of this file</a>
 </div>
 </div>
 <div class="round1"></div>
 <div class="round2"></div>
 <div class="round4"></div>
 </div>
 
 <div class="pmeta_bubble_bg" style="border:1px solid white">
 <div class="round4"></div>
 <div class="round2"></div>
 <div class="round1"></div>
 <div class="box-inner">
 <div id="fileinfo_bubble">
 <p>File info</p>
 
 <div>Size: 15558 bytes,
 38 lines</div>
 
 <div><a href="//google-maps-utility-library-v3.googlecode.com/svn/trunk/infobubble/src/infobubble-compiled.js">View raw file</a></div>
 </div>
 
 <div id="props">
 <p>File properties</p>
 <dl>
 
 <dt>svn:mime-type</dt>
 <dd>text/javascript</dd>
 
 <dt>svn:executable</dt>
 <dd>*</dd>
 
 </dl>
 </div>
 
 </div>
 <div class="round1"></div>
 <div class="round2"></div>
 <div class="round4"></div>
 </div>
 </div>
 </div>


</div>

</div>
</div>

<script src="https://ssl.gstatic.com/codesite/ph/16315335801608708296/js/prettify/prettify.js"></script>
<script type="text/javascript">prettyPrint();</script>


<script src="https://ssl.gstatic.com/codesite/ph/16315335801608708296/js/source_file_scripts.js"></script>

 <script type="text/javascript" src="https://ssl.gstatic.com/codesite/ph/16315335801608708296/js/kibbles.js"></script>
 <script type="text/javascript">
 var lastStop = null;
 var initialized = false;
 
 function updateCursor(next, prev) {
 if (prev && prev.element) {
 prev.element.className = 'cursor_stop cursor_hidden';
 }
 if (next && next.element) {
 next.element.className = 'cursor_stop cursor';
 lastStop = next.index;
 }
 }
 
 function pubRevealed(data) {
 updateCursorForCell(data.cellId, 'cursor_stop cursor_hidden');
 if (initialized) {
 reloadCursors();
 }
 }
 
 function draftRevealed(data) {
 updateCursorForCell(data.cellId, 'cursor_stop cursor_hidden');
 if (initialized) {
 reloadCursors();
 }
 }
 
 function draftDestroyed(data) {
 updateCursorForCell(data.cellId, 'nocursor');
 if (initialized) {
 reloadCursors();
 }
 }
 function reloadCursors() {
 kibbles.skipper.reset();
 loadCursors();
 if (lastStop != null) {
 kibbles.skipper.setCurrentStop(lastStop);
 }
 }
 // possibly the simplest way to insert any newly added comments
 // is to update the class of the corresponding cursor row,
 // then refresh the entire list of rows.
 function updateCursorForCell(cellId, className) {
 var cell = document.getElementById(cellId);
 // we have to go two rows back to find the cursor location
 var row = getPreviousElement(cell.parentNode);
 row.className = className;
 }
 // returns the previous element, ignores text nodes.
 function getPreviousElement(e) {
 var element = e.previousSibling;
 if (element.nodeType == 3) {
 element = element.previousSibling;
 }
 if (element && element.tagName) {
 return element;
 }
 }
 function loadCursors() {
 // register our elements with skipper
 var elements = CR_getElements('*', 'cursor_stop');
 var len = elements.length;
 for (var i = 0; i < len; i++) {
 var element = elements[i]; 
 element.className = 'cursor_stop cursor_hidden';
 kibbles.skipper.append(element);
 }
 }
 function toggleComments() {
 CR_toggleCommentDisplay();
 reloadCursors();
 }
 function keysOnLoadHandler() {
 // setup skipper
 kibbles.skipper.addStopListener(
 kibbles.skipper.LISTENER_TYPE.PRE, updateCursor);
 // Set the 'offset' option to return the middle of the client area
 // an option can be a static value, or a callback
 kibbles.skipper.setOption('padding_top', 50);
 // Set the 'offset' option to return the middle of the client area
 // an option can be a static value, or a callback
 kibbles.skipper.setOption('padding_bottom', 100);
 // Register our keys
 kibbles.skipper.addFwdKey("n");
 kibbles.skipper.addRevKey("p");
 kibbles.keys.addKeyPressListener(
 'u', function() { window.location = detail_url; });
 kibbles.keys.addKeyPressListener(
 'r', function() { window.location = detail_url + '#publish'; });
 
 kibbles.keys.addKeyPressListener('j', gotoNextPage);
 kibbles.keys.addKeyPressListener('k', gotoPreviousPage);
 
 
 }
 </script>
<script src="https://ssl.gstatic.com/codesite/ph/16315335801608708296/js/code_review_scripts.js"></script>
<script type="text/javascript">
 function showPublishInstructions() {
 var element = document.getElementById('review_instr');
 if (element) {
 element.className = 'opened';
 }
 }
 var codereviews;
 function revsOnLoadHandler() {
 // register our source container with the commenting code
 var paths = {'svn473': '/trunk/infobubble/src/infobubble-compiled.js'}
 codereviews = CR_controller.setup(
 {"relativeBaseUrl": "", "projectName": "google-maps-utility-library-v3", "assetHostPath": "https://ssl.gstatic.com/codesite/ph", "assetVersionPath": "https://ssl.gstatic.com/codesite/ph/16315335801608708296", "domainName": null, "profileUrl": "/u/100664424769225160989/", "projectHomeUrl": "/p/google-maps-utility-library-v3", "loggedInUserEmail": "diazruy@gmail.com", "token": "ABZ6GAd94h5SOtyTy7LsrTuPRFcAerSv1Q:1411672194306"}, '', 'svn473', paths,
 CR_BrowseIntegrationFactory);
 
 codereviews.registerActivityListener(CR_ActivityType.REVEAL_DRAFT_PLATE, showPublishInstructions);
 
 codereviews.registerActivityListener(CR_ActivityType.REVEAL_PUB_PLATE, pubRevealed);
 codereviews.registerActivityListener(CR_ActivityType.REVEAL_DRAFT_PLATE, draftRevealed);
 codereviews.registerActivityListener(CR_ActivityType.DISCARD_DRAFT_COMMENT, draftDestroyed);
 
 
 
 
 
 
 
 var initialized = true;
 reloadCursors();
 }
 window.onload = function() {keysOnLoadHandler(); revsOnLoadHandler();};

</script>
<script type="text/javascript" src="https://ssl.gstatic.com/codesite/ph/16315335801608708296/js/dit_scripts.js"></script>

 
 
 
 <script type="text/javascript" src="https://ssl.gstatic.com/codesite/ph/16315335801608708296/js/ph_core.js"></script>
 
 
 
 
</div> 

<div id="footer" dir="ltr">
 <div class="text">
 <a href="/projecthosting/terms.html">Terms</a> -
 <a href="http://www.google.com/privacy.html">Privacy</a> -
 <a href="/p/support/">Project Hosting Help</a>
 </div>
</div>
 <div class="hostedBy" style="margin-top: -20px;">
 <span style="vertical-align: top;">Powered by <a href="http://code.google.com/projecthosting/">Google Project Hosting</a></span>
 </div>

 
 


 
 </body>
</html>

