(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{"5YRn":function(e,t,n){"use strict";var r=n("63Ad");t.__esModule=!0,t.default=void 0;var o=r(n("8VmE")),i=r(n("QKC2")),a=n("mXGw"),l=(r(n("lPWr")),r(n("6lSW")),r(n("QQ1a"))),u=function(e){return function(t){var n=(0,a.createFactory)(t);return function(t){function r(){for(var n,r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(n=t.call.apply(t,[this].concat(o))||this).handlers=(0,l.default)("function"==typeof e?e(n.props):e,(function(e){return function(){var t=e(n.props);return t.apply(void 0,arguments)}})),n}return(0,i.default)(r,t),r.prototype.render=function(){return n((0,o.default)({},this.props,this.handlers))},r}(a.Component)}};t.default=u},"5c/x":function(e,t,n){"use strict";n.r(t);n("1c7q");var r=n("mXGw"),o=n.n(r),i=n("PWxN"),a=n.n(i),l=n("J2oK"),u=n("xkHO"),c=n("ZS2m"),d=n("0l5g"),s=n.n(d),f=n("doP5"),y=n("UZ39"),p={margin:{top:40,right:160,bottom:40,left:50},layout:"horizontal",align:"justify",sort:"auto",colors:{scheme:"category10"},nodeOpacity:1,nodeHoverOpacity:1,nodeThickness:18,nodeInnerPadding:3,nodeSpacing:24,nodeBorderWidth:0,nodeBorderColor:{from:"color",modifiers:[["darker",.8]]},linkOpacity:.5,linkHoverOpacity:.6,linkHoverOthersOpacity:.1,linkContract:0,linkBlendMode:"multiply",enableLinkGradient:!0,enableLabels:!0,labelPosition:"outside",labelOrientation:"vertical",labelPadding:16,labelTextColor:{from:"color",modifiers:[["darker",1]]},animate:!0,motionStiffness:140,motionDamping:13,isInteractive:!0,legends:[{anchor:"bottom-right",direction:"column",translateX:130,itemWidth:100,itemHeight:14,itemDirection:"right-to-left",itemsSpacing:2,itemTextColor:"#999",symbolSize:14,onClick:function(e){alert(JSON.stringify(e,null,"    "))},effects:[{on:"hover",style:{itemTextColor:"#000"}}]}]},h=function(){return Object(l.i)({nodeCount:6,maxIterations:8})};t.default=function(){return o.a.createElement(c.a,{name:"Sankey",meta:s.a.Sankey,icon:"sankey",flavors:s.a.flavors,currentFlavor:"svg",properties:y.a,initialProperties:p,defaultProperties:u.b,propertiesMapper:f.a,generateData:h},(function(e,t,n,r){return o.a.createElement(u.a,Object.assign({data:t},e,{theme:n,onClick:function(e){var t;t=e.id?"[node] "+e.id+": "+e.value:"[link] "+e.source.id+" > "+e.target.id+": "+e.value,r({type:"click",label:t,data:a()(e,["sourceLinks","targetLinks","source.sourceLinks","source.targetLinks","target.sourceLinks","target.targetLinks"])})}}))}))}},"7hCh":function(e,t,n){"use strict";n("kBzq"),n("sdqY");var r=n("aNYv"),o=(n("RqWj"),n("gZHo"),n("Fdmb"),n("VlJN"),n("ZY1c"),n("IYjZ"),n("yvkl"),n("abGl"),function(e,t){return e<t?-1:e>t?1:e>=t?0:NaN});var i,a;1===(i=o).length&&(a=i,i=function(e,t){return o(a(e),t)}),n("lLrm"),n("xl0S"),n("6CzD"),n("YjJN");n("apM1");var l=Array.prototype;l.slice,l.map,Math.sqrt(50),Math.sqrt(10),Math.sqrt(2);n("ASFo"),n("NthX"),n("wcNg");function u(e,t){var n;if(void 0===t){var r=!0,o=!1,i=void 0;try{for(var a,l=e[Symbol.iterator]();!(r=(a=l.next()).done);r=!0){var u=a.value;null!=u&&u>=u&&(void 0===n||n>u)&&(n=u)}}catch(v){o=!0,i=v}finally{try{r||null==l.return||l.return()}finally{if(o)throw i}}}else{var c=-1,d=!0,s=!1,f=void 0;try{for(var y,p=e[Symbol.iterator]();!(d=(y=p.next()).done);d=!0){var h=y.value;null!=(h=t(h,++c,e))&&h>=h&&(void 0===n||n>h)&&(n=h)}}catch(v){s=!0,f=v}finally{try{d||null==p.return||p.return()}finally{if(s)throw f}}}return n}function c(e,t){var n=0;if(void 0===t){var r=!0,o=!1,i=void 0;try{for(var a,l=e[Symbol.iterator]();!(r=(a=l.next()).done);r=!0){var u=a.value;(u=+u)&&(n+=u)}}catch(v){o=!0,i=v}finally{try{r||null==l.return||l.return()}finally{if(o)throw i}}}else{var c=-1,d=!0,s=!1,f=void 0;try{for(var y,p=e[Symbol.iterator]();!(d=(y=p.next()).done);d=!0){var h=y.value;(h=+t(h,++c,e))&&(n+=h)}}catch(v){s=!0,f=v}finally{try{d||null==p.return||p.return()}finally{if(s)throw f}}}return n}function d(e){return e.target.depth}function s(e){return e.depth}function f(e,t){return t-1-e.height}function y(e,t){return e.sourceLinks.length?e.depth:t-1}function p(e){return e.targetLinks.length?e.depth:e.sourceLinks.length?u(e.sourceLinks,d)-1:0}function h(e){return function(){return e}}function v(e,t){return g(e.source,t.source)||e.index-t.index}function m(e,t){return g(e.target,t.target)||e.index-t.index}function g(e,t){return e.y0-t.y0}function b(e){return e.value}function k(e){return e.index}function x(e){return e.nodes}function O(e){return e.links}function w(e,t){var n=e.get(t);if(!n)throw new Error("missing: "+t);return n}function C(e){var t=e.nodes,n=!0,r=!1,o=void 0;try{for(var i,a=t[Symbol.iterator]();!(n=(i=a.next()).done);n=!0){var l=i.value,u=l.y0,c=u,d=!0,s=!1,f=void 0;try{for(var y,p=l.sourceLinks[Symbol.iterator]();!(d=(y=p.next()).done);d=!0){var h=y.value;h.y0=u+h.width/2,u+=h.width}}catch(O){s=!0,f=O}finally{try{d||null==p.return||p.return()}finally{if(s)throw f}}var v=!0,m=!1,g=void 0;try{for(var b,k=l.targetLinks[Symbol.iterator]();!(v=(b=k.next()).done);v=!0){var x=b.value;x.y1=c+x.width/2,c+=x.width}}catch(O){m=!0,g=O}finally{try{v||null==k.return||k.return()}finally{if(m)throw g}}}}catch(O){r=!0,o=O}finally{try{n||null==a.return||a.return()}finally{if(r)throw o}}}function L(){var e,t,n=0,o=0,i=1,a=1,l=24,d=8,s=k,f=y,p=x,L=O,S=6;function T(){var t={nodes:p.apply(null,arguments),links:L.apply(null,arguments)};return function(e){var t=e.nodes,n=e.links,o=!0,i=!1,a=void 0;try{for(var l,u=t.entries()[Symbol.iterator]();!(o=(l=u.next()).done);o=!0){var c=Object(r.a)(l.value,2),d=c[0],f=c[1];f.index=d,f.sourceLinks=[],f.targetLinks=[]}}catch(L){i=!0,a=L}finally{try{o||null==u.return||u.return()}finally{if(i)throw a}}var y=new Map(t.map((function(e,n){return[s(e,n,t),e]}))),p=!0,h=!1,v=void 0;try{for(var m,g=n.entries()[Symbol.iterator]();!(p=(m=g.next()).done);p=!0){var b=Object(r.a)(m.value,2),k=b[0],x=b[1];x.index=k;var O=x.source,C=x.target;"object"!=typeof O&&(O=x.source=w(y,O)),"object"!=typeof C&&(C=x.target=w(y,C)),O.sourceLinks.push(x),C.targetLinks.push(x)}}catch(L){h=!0,v=L}finally{try{p||null==g.return||g.return()}finally{if(h)throw v}}}(t),function(e){var t=e.nodes,n=!0,r=!1,o=void 0;try{for(var i,a=t[Symbol.iterator]();!(n=(i=a.next()).done);n=!0){var l=i.value;l.value=Math.max(c(l.sourceLinks,b),c(l.targetLinks,b))}}catch(u){r=!0,o=u}finally{try{n||null==a.return||a.return()}finally{if(r)throw o}}}(t),function(e){var t=e.nodes,n=t.length,r=new Set(t),o=new Set,i=0;for(;r.size;){var a=!0,l=!1,u=void 0;try{for(var c,d=r[Symbol.iterator]();!(a=(c=d.next()).done);a=!0){var s=c.value;s.depth=i;var f=!0,y=!1,p=void 0;try{for(var h,v=s.sourceLinks[Symbol.iterator]();!(f=(h=v.next()).done);f=!0){var m=h.value.target;o.add(m)}}catch(g){y=!0,p=g}finally{try{f||null==v.return||v.return()}finally{if(y)throw p}}}}catch(g){l=!0,u=g}finally{try{a||null==d.return||d.return()}finally{if(l)throw u}}if(++i>n)throw new Error("circular link");r=o,o=new Set}}(t),function(e){var t=e.nodes,n=t.length,r=new Set(t),o=new Set,i=0;for(;r.size;){var a=!0,l=!1,u=void 0;try{for(var c,d=r[Symbol.iterator]();!(a=(c=d.next()).done);a=!0){var s=c.value;s.height=i;var f=!0,y=!1,p=void 0;try{for(var h,v=s.targetLinks[Symbol.iterator]();!(f=(h=v.next()).done);f=!0){var m=h.value.source;o.add(m)}}catch(g){y=!0,p=g}finally{try{f||null==v.return||v.return()}finally{if(y)throw p}}}}catch(g){l=!0,u=g}finally{try{a||null==d.return||d.return()}finally{if(l)throw u}}if(++i>n)throw new Error("circular link");r=o,o=new Set}}(t),function(t){var r=function(t){var r=t.nodes,o=function(e,t){var n;if(void 0===t){var r=!0,o=!1,i=void 0;try{for(var a,l=e[Symbol.iterator]();!(r=(a=l.next()).done);r=!0){var u=a.value;null!=u&&u>=u&&(void 0===n||n<u)&&(n=u)}}catch(v){o=!0,i=v}finally{try{r||null==l.return||l.return()}finally{if(o)throw i}}}else{var c=-1,d=!0,s=!1,f=void 0;try{for(var y,p=e[Symbol.iterator]();!(d=(y=p.next()).done);d=!0){var h=y.value;null!=(h=t(h,++c,e))&&h>=h&&(void 0===n||n<h)&&(n=h)}}catch(v){s=!0,f=v}finally{try{d||null==p.return||p.return()}finally{if(s)throw f}}}return n}(r,(function(e){return e.depth}))+1,a=(i-n-l)/(o-1),u=new Array(o),c=!0,d=!1,s=void 0;try{for(var y,p=r[Symbol.iterator]();!(c=(y=p.next()).done);c=!0){var h=y.value,v=Math.max(0,Math.min(o-1,Math.floor(f.call(null,h,o))));h.layer=v,h.x0=n+v*a,h.x1=h.x0+l,u[v]?u[v].push(h):u[v]=[h]}}catch(O){d=!0,s=O}finally{try{c||null==p.return||p.return()}finally{if(d)throw s}}if(e){var m=!0,g=!1,b=void 0;try{for(var k,x=u[Symbol.iterator]();!(m=(k=x.next()).done);m=!0){k.value.sort(e)}}catch(O){g=!0,b=O}finally{try{m||null==x.return||x.return()}finally{if(g)throw b}}}return u}(t);!function(e){var t=u(e,(function(e){return(a-o-(e.length-1)*d)/c(e,b)})),n=!0,r=!1,i=void 0;try{for(var l,s=e[Symbol.iterator]();!(n=(l=s.next()).done);n=!0){var f=l.value,y=o,p=!0,h=!1,v=void 0;try{for(var m,g=f[Symbol.iterator]();!(p=(m=g.next()).done);p=!0){var k=m.value;k.y0=y,k.y1=y+k.value*t,y=k.y1+d;var x=!0,O=!1,w=void 0;try{for(var C,L=k.sourceLinks[Symbol.iterator]();!(x=(C=L.next()).done);x=!0){var S=C.value;S.width=S.value*t}}catch(j){O=!0,w=j}finally{try{x||null==L.return||L.return()}finally{if(O)throw w}}}}catch(j){h=!0,v=j}finally{try{p||null==g.return||g.return()}finally{if(h)throw v}}y=(a-y+d)/(f.length+1);for(var T=0;T<f.length;++T){var q=f[T];q.y0+=y*(T+1),q.y1+=y*(T+1)}B(f)}}catch(j){r=!0,i=j}finally{try{n||null==s.return||s.return()}finally{if(r)throw i}}}(r);for(var s=0;s<S;++s){var y=Math.pow(.99,s),p=Math.max(1-y,(s+1)/S);j(r,y,p),q(r,y,p)}}(t),C(t),t}function q(t,n,r){for(var o=1,i=t.length;o<i;++o){var a=t[o],l=!0,u=!1,c=void 0;try{for(var d,s=a[Symbol.iterator]();!(l=(d=s.next()).done);l=!0){var f=d.value,y=0,p=0,h=!0,v=!1,m=void 0;try{for(var b,k=f.targetLinks[Symbol.iterator]();!(h=(b=k.next()).done);h=!0){var x=b.value,O=x.source,w=x.value*(f.layer-O.layer);y+=R(O,f)*w,p+=w}}catch(L){v=!0,m=L}finally{try{h||null==k.return||k.return()}finally{if(v)throw m}}if(p>0){var C=(y/p-f.y0)*n;f.y0+=C,f.y1+=C,P(f)}}}catch(L){u=!0,c=L}finally{try{l||null==s.return||s.return()}finally{if(u)throw c}}void 0===e&&a.sort(g),E(a,r)}}function j(t,n,r){for(var o=t.length-2;o>=0;--o){var i=t[o],a=!0,l=!1,u=void 0;try{for(var c,d=i[Symbol.iterator]();!(a=(c=d.next()).done);a=!0){var s=c.value,f=0,y=0,p=!0,h=!1,v=void 0;try{for(var m,b=s.sourceLinks[Symbol.iterator]();!(p=(m=b.next()).done);p=!0){var k=m.value,x=k.target,O=k.value*(x.layer-s.layer);f+=F(s,x)*O,y+=O}}catch(C){h=!0,v=C}finally{try{p||null==b.return||b.return()}finally{if(h)throw v}}if(y>0){var w=(f/y-s.y0)*n;s.y0+=w,s.y1+=w,P(s)}}}catch(C){l=!0,u=C}finally{try{a||null==d.return||d.return()}finally{if(l)throw u}}void 0===e&&i.sort(g),E(i,r)}}function E(e,t){var n=e.length>>1,r=e[n];N(e,r.y0-d,n-1,t),M(e,r.y1+d,n+1,t),N(e,a,e.length-1,t),M(e,o,0,t)}function M(e,t,n,r){for(;n<e.length;++n){var o=e[n],i=(t-o.y0)*r;i>1e-6&&(o.y0+=i,o.y1+=i),t=o.y1+d}}function N(e,t,n,r){for(;n>=0;--n){var o=e[n],i=(o.y1-t)*r;i>1e-6&&(o.y0-=i,o.y1-=i),t=o.y0-d}}function P(e){var n=e.sourceLinks,r=e.targetLinks;if(void 0===t){var o=!0,i=!1,a=void 0;try{for(var l,u=r[Symbol.iterator]();!(o=(l=u.next()).done);o=!0){l.value.source.sourceLinks.sort(m)}}catch(p){i=!0,a=p}finally{try{o||null==u.return||u.return()}finally{if(i)throw a}}var c=!0,d=!1,s=void 0;try{for(var f,y=n[Symbol.iterator]();!(c=(f=y.next()).done);c=!0){f.value.target.targetLinks.sort(v)}}catch(p){d=!0,s=p}finally{try{c||null==y.return||y.return()}finally{if(d)throw s}}}}function B(e){if(void 0===t){var n=!0,r=!1,o=void 0;try{for(var i,a=e[Symbol.iterator]();!(n=(i=a.next()).done);n=!0){var l=i.value,u=l.sourceLinks,c=l.targetLinks;u.sort(m),c.sort(v)}}catch(d){r=!0,o=d}finally{try{n||null==a.return||a.return()}finally{if(r)throw o}}}}function R(e,t){var n=e.y0-(e.sourceLinks.length-1)*d/2,r=!0,o=!1,i=void 0;try{for(var a,l=e.sourceLinks[Symbol.iterator]();!(r=(a=l.next()).done);r=!0){var u=a.value,c=u.target,s=u.width;if(c===t)break;n+=s+d}}catch(k){o=!0,i=k}finally{try{r||null==l.return||l.return()}finally{if(o)throw i}}var f=!0,y=!1,p=void 0;try{for(var h,v=t.targetLinks[Symbol.iterator]();!(f=(h=v.next()).done);f=!0){var m=h.value,g=m.source,b=m.width;if(g===e)break;n-=b}}catch(k){y=!0,p=k}finally{try{f||null==v.return||v.return()}finally{if(y)throw p}}return n}function F(e,t){var n=t.y0-(t.targetLinks.length-1)*d/2,r=!0,o=!1,i=void 0;try{for(var a,l=t.targetLinks[Symbol.iterator]();!(r=(a=l.next()).done);r=!0){var u=a.value,c=u.source,s=u.width;if(c===e)break;n+=s+d}}catch(k){o=!0,i=k}finally{try{r||null==l.return||l.return()}finally{if(o)throw i}}var f=!0,y=!1,p=void 0;try{for(var h,v=e.sourceLinks[Symbol.iterator]();!(f=(h=v.next()).done);f=!0){var m=h.value,g=m.target,b=m.width;if(g===t)break;n-=b}}catch(k){y=!0,p=k}finally{try{f||null==v.return||v.return()}finally{if(y)throw p}}return n}return T.update=function(e){return C(e),e},T.nodeId=function(e){return arguments.length?(s="function"==typeof e?e:h(e),T):s},T.nodeAlign=function(e){return arguments.length?(f="function"==typeof e?e:h(e),T):f},T.nodeSort=function(t){return arguments.length?(e=t,T):e},T.nodeWidth=function(e){return arguments.length?(l=+e,T):l},T.nodePadding=function(e){return arguments.length?(d=+e,T):d},T.nodes=function(e){return arguments.length?(p="function"==typeof e?e:h(e),T):p},T.links=function(e){return arguments.length?(L="function"==typeof e?e:h(e),T):L},T.linkSort=function(e){return arguments.length?(t=e,T):t},T.size=function(e){return arguments.length?(n=o=0,i=+e[0],a=+e[1],T):[i-n,a-o]},T.extent=function(e){return arguments.length?(n=+e[0][0],i=+e[1][0],o=+e[0][1],a=+e[1][1],T):[[n,o],[i,a]]},T.iterations=function(e){return arguments.length?(S=+e,T):S},T}var S=n("aBO9");function T(e){return[e.source.x1,e.y0]}function q(e){return[e.target.x0,e.y1]}var j=function(){return Object(S.w)().source(T).target(q)};n.d(t,"a",(function(){return L})),n.d(t,"b",(function(){return p})),n.d(t,"d",(function(){return s})),n.d(t,"f",(function(){return f})),n.d(t,"c",(function(){return y})),n.d(t,"e",(function(){return j}))},QQ1a:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;var r=function(e,t){var n={};for(var r in e)e.hasOwnProperty(r)&&(n[r]=t(e[r],r));return n};t.default=r},UZ39:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));n("VlJN"),n("YjJN"),n("Eb4t"),n("Fdmb"),n("IYjZ"),n("yvkl"),n("abGl"),n("kBzq");var r=n("xkHO"),o=n("RQLE");var i,a=[{key:"data",group:"Base",help:"Chart data.",description:"\n            Chart data, which must conform to this structure:\n            ```\n            {\n                nodes: Array<{\n                    id: string | number\n                }>,\n                links: Array<{\n                    source: string | number, // ref to node id\n                    target: string | number, // ref to node id\n                    value:  number\n                }}>\n            }\n            ```\n        ",type:"{ nodes: object[], links: object[] }",required:!0},{key:"layout",help:"Control sankey layout direction.",type:"string",required:!1,defaultValue:r.b.layout,controlType:"radio",group:"Base",controlOptions:{choices:[{label:"horizontal",value:"horizontal"},{label:"vertical",value:"vertical"}]}},{key:"align",group:"Base",help:"Node alignment method.",description:"\n            Defines node alignment method.\n            Please have a look at the\n            [official d3 documentation](https://github.com/d3/d3-sankey#sankey_nodeAlign)\n            for further information.\n        ",type:"string",required:!1,defaultValue:r.b.align,controlType:"choices",controlOptions:{choices:r.c.map((function(e){return{label:e,value:e}}))}},{key:"sort",description:"\n            Defines node sorting method. Must be one of:\n\n            - **'auto'** order of nodes within each\n              column is determined automatically by the layout.\n            - **'input'** order is fixed by the input.\n            - **'ascending'** node with lower values on top.\n            - **'descending'** node with higher values on top.\n            - `(nodeA, nodeB) => number` user defined function.\n\n            Please have a look at the\n            [official d3 documentation](https://github.com/d3/d3-sankey#sankey_nodeSort)\n            for further information.\n        ",help:"Node sorting method.",type:"string | Function",required:!1,defaultValue:r.b.sort,controlType:"choices",group:"Base",controlOptions:{choices:["auto","input","ascending","descending"].map((function(e){return{label:e,value:e}}))}},{key:"colors",help:"Defines how to compute nodes color.",type:"string | Function | string[]",required:!1,defaultValue:r.b.colors,controlType:"ordinalColors",group:"Base"},{key:"width",enableControlForFlavors:["api"],description:"\n            not required if using\n            `<ResponsiveSankey/>`.\n        ",help:"Chart width.",type:"number",required:!0,controlType:"range",group:"Base",controlOptions:{unit:"px",min:100,max:1200,step:5}},{key:"height",enableControlForFlavors:["api"],description:"\n            not required if using\n            `<ResponsiveSankey/>`.\n        ",help:"Chart height.",type:"number",required:!0,controlType:"range",group:"Base",controlOptions:{unit:"px",min:100,max:1200,step:5}},{key:"margin",help:"Chart margin.",type:"object",required:!1,controlType:"margin",group:"Base"},{key:"nodeThickness",help:"Node thickness.",required:!1,defaultValue:r.b.nodeThickness,type:"number",controlType:"range",group:"Nodes",controlOptions:{unit:"px",min:2,max:100}},{key:"nodeOpacity",help:"Node opacity (0~1).",required:!1,defaultValue:r.b.nodeOpacity,type:"number",controlType:"opacity",group:"Nodes"},{key:"nodeHoverOpacity",flavors:["svg"],help:"Node opacity on hover (0~1).",required:!1,defaultValue:r.b.nodeHoverOpacity,type:"number",controlType:"opacity",group:"Nodes"},{key:"nodeSpacing",help:"Spacing between nodes at an identical level.",required:!1,defaultValue:r.b.nodeSpacing,type:"number",controlType:"range",group:"Nodes",controlOptions:{unit:"px",min:0,max:60}},{key:"nodeInnerPadding",help:"Node inner padding, distance from link, substracted from nodeThickness.",required:!1,defaultValue:r.b.nodePaddingX,type:"number",controlType:"range",group:"Nodes",controlOptions:{unit:"px",min:0,max:20}},{key:"nodeBorderWidth",help:"Node border width.",required:!1,defaultValue:r.b.nodeBorderWidth,type:"number",controlType:"lineWidth",group:"Nodes"},{key:"nodeBorderColor",description:"\n            how to compute node border color,\n            [see dedicated documentation](self:/guides/colors).\n        ",help:"Method to compute node border color.",type:"string | object | Function",required:!1,defaultValue:r.b.nodeBorderColor,controlType:"inheritedColor",group:"Nodes"},{key:"linkOpacity",help:"Link opacity (0~1).",required:!1,defaultValue:r.b.linkOpacity,type:"number",controlType:"opacity",group:"Links"},{key:"linkHoverOpacity",flavors:["svg"],help:"Link opacity on hover(0~1).",required:!1,defaultValue:r.b.linkHoverOpacity,type:"number",controlType:"opacity",group:"Links"},{key:"linkContract",help:"Contract link width.",required:!1,defaultValue:r.b.linkContract,type:"number",controlType:"range",group:"Links",controlOptions:{unit:"px",min:0,max:60}},{key:"linkBlendMode",flavors:["svg"],help:"Defines CSS mix-blend-mode property for links.",description:"\n            Defines CSS `mix-blend-mode` property for links, see\n            [MDN documentation](https://developer.mozilla.org/fr/docs/Web/CSS/mix-blend-mode).\n        ",type:"string",required:!1,defaultValue:r.b.linkBlendMode,controlType:"blendMode",group:"Links"},{key:"enableLinkGradient",help:"Enable/disable gradient from source/target nodes instead of plain color.",type:"boolean",required:!1,defaultValue:r.b.enableLinkGradient,controlType:"switch",group:"Links"},{key:"enableLabels",help:"Enable/disable labels.",type:"boolean",required:!1,defaultValue:r.b.enableLabels,controlType:"switch",group:"Labels"},{key:"labelPosition",help:"Label position.",type:"string",required:!1,defaultValue:r.b.labelPosition,controlType:"radio",group:"Labels",controlOptions:{choices:["inside","outside"].map((function(e){return{label:e,value:e}}))}},{key:"labelPadding",help:"Label padding from node.",required:!1,defaultValue:r.b.labelPadding,type:"number",controlType:"range",group:"Labels",controlOptions:{unit:"px",min:0,max:60}},{key:"labelTextColor",help:"Method to compute label text color.",description:"\n            how to compute label text color,\n            [see dedicated documentation](self:/guides/colors).\n        ",type:"string | object | Function",required:!1,defaultValue:r.b.labelTextColor,controlType:"inheritedColor",group:"Labels"},{key:"labelOrientation",help:"Label orientation.",type:"string",required:!1,defaultValue:r.b.labelOrientation,controlType:"radio",group:"Labels",controlOptions:{choices:["horizontal","vertical"].map((function(e){return{label:e,value:e}}))}},{key:"isInteractive",flavors:["svg"],help:"Enable/disable interactivity.",type:"boolean",required:!1,defaultValue:r.b.isInteractive,controlType:"switch",group:"Interactivity"}].concat(function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(i=Object(o.e)(["svg"],r.b))||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(i)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()),l=Object(o.d)(a)},doP5:function(e,t,n){"use strict";var r=n("nLLr");t.a=Object(r.b)({})},fLcH:function(e,t,n){"use strict";var r=n("63Ad");t.__esModule=!0,t.default=void 0;var o=r(n("8VmE")),i=r(n("QKC2")),a=n("mXGw"),l=(r(n("lPWr")),r(n("6lSW")),function(e,t,n){return function(r){var l=(0,a.createFactory)(r);return function(r){function a(){for(var e,t=arguments.length,o=new Array(t),i=0;i<t;i++)o[i]=arguments[i];return(e=r.call.apply(r,[this].concat(o))||this).state={stateValue:"function"==typeof n?n(e.props):n},e.updateStateValue=function(t,n){return e.setState((function(e){var n=e.stateValue;return{stateValue:"function"==typeof t?t(n):t}}),n)},e}return(0,i.default)(a,r),a.prototype.render=function(){var n;return l((0,o.default)({},this.props,((n={})[e]=this.state.stateValue,n[t]=this.updateStateValue,n)))},a}(a.Component)}});t.default=l},xkHO:function(e,t,n){"use strict";n.d(t,"a",(function(){return $})),n.d(t,"b",(function(){return P})),n.d(t,"c",(function(){return M}));n("n2Yz"),n("/qG3"),n("Zrjq"),n("1c7q"),n("yvkl"),n("kBzq"),n("abGl"),n("gZHo"),n("Fdmb"),n("Ir+3");var r=n("bAmA"),o=n.n(r),i=n("mXGw"),a=n.n(i),l=n("NxE3"),u=n("L3zu"),c=n("W0B4"),d=n.n(c),s=n("7hCh"),f=n("62qY"),y=n("oek1"),p=n.n(y),h=n("ZXVz"),v=n.n(h),m=n("fLcH"),g=n.n(m),b=n("Cg+6"),k=n.n(b),x=n("bBnb"),O=n.n(x),w=n("yEOx"),C=n.n(w),L=n("wMFK"),S=n("5YRn"),T=n.n(S),q=n("INlx"),j=n("aBO9"),E={center:s.b,justify:s.c,start:s.d,end:s.f},M=Object.keys(E),N=d.a.oneOf(M),P=(d.a.shape({nodes:d.a.arrayOf(d.a.shape({id:d.a.oneOfType([d.a.string,d.a.number]).isRequired})).isRequired,links:d.a.arrayOf(d.a.shape({source:d.a.oneOfType([d.a.string,d.a.number]).isRequired,target:d.a.oneOfType([d.a.string,d.a.number]).isRequired})).isRequired}).isRequired,d.a.oneOf(["horizontal","vertical"]).isRequired,N.isRequired,d.a.oneOfType([d.a.oneOf(["auto","input","ascending","descending"]),d.a.func]).isRequired,f.p.isRequired,d.a.number.isRequired,d.a.number.isRequired,d.a.number.isRequired,d.a.number.isRequired,d.a.number.isRequired,d.a.number.isRequired,d.a.number.isRequired,f.k,d.a.number.isRequired,d.a.number.isRequired,d.a.number.isRequired,d.a.number.isRequired,l.u.isRequired,d.a.bool.isRequired,d.a.bool.isRequired,d.a.oneOf(["inside","outside"]).isRequired,d.a.number.isRequired,d.a.oneOf(["horizontal","vertical"]).isRequired,f.k,d.a.func.isRequired,d.a.oneOfType([d.a.string,d.a.func]).isRequired,d.a.oneOfType([d.a.string,d.a.func]),d.a.func.isRequired,d.a.func,d.a.func,d.a.bool.isRequired,d.a.func.isRequired,d.a.oneOfType([d.a.func,d.a.string]),d.a.arrayOf(d.a.shape(u.o)).isRequired,{layout:"horizontal",align:"center",sort:"auto",colors:{scheme:"nivo"},nodeOpacity:.75,nodeHoverOpacity:1,nodeHoverOthersOpacity:.15,nodeThickness:12,nodeSpacing:12,nodeInnerPadding:0,nodeBorderWidth:1,nodeBorderColor:{from:"color",modifiers:[["darker",.5]]},linkOpacity:.25,linkHoverOpacity:.6,linkHoverOthersOpacity:.15,linkContract:0,linkBlendMode:"multiply",enableLinkGradient:!1,enableLabels:!0,label:"id",labelPosition:"inside",labelPadding:9,labelOrientation:"horizontal",labelTextColor:{from:"color",modifiers:[["darker",.8]]},isInteractive:!0,onClick:l.V,legends:[]}),B=function(e){return e.id},R=O()(v()(["node","theme","tooltip"],(function(e){var t=e.node,n=e.theme,r=e.tooltip;return r?{tooltip:a.a.createElement(q.a,{id:r(t),enableChip:!1,theme:n})}:{tooltip:a.a.createElement(q.a,{id:t.label,enableChip:!0,color:t.color,theme:n})}})),v()(["onClick","node"],(function(e){var t=e.onClick,n=e.node;return{onClick:function(e){return t(n,e)}}})),T()({handleMouseEnter:function(e){var t=e.showTooltip,n=e.setCurrent,r=e.node,o=e.tooltip;return function(e){n(r),t(o,e)}},handleMouseMove:function(e){var t=e.showTooltip,n=e.tooltip;return function(e){t(n,e)}},handleMouseLeave:function(e){var t=e.hideTooltip,n=e.setCurrent;return function(){n(null),t()}}}),p.a)((function(e){var t=e.x,n=e.y,r=e.width,o=e.height,i=e.color,l=e.opacity,u=e.borderWidth,c=e.borderColor,d=e.handleMouseEnter,s=e.handleMouseMove,f=e.handleMouseLeave,y=e.onClick;return a.a.createElement("rect",{x:t,y:n,width:r,height:o,fill:i,fillOpacity:l,strokeWidth:u,stroke:c,strokeOpacity:l,onMouseEnter:d,onMouseMove:s,onMouseLeave:f,onClick:y})}));function F(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){V(e,t,n[t])}))}return e}function V(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var H=p()((function(e){var t=e.nodes,n=e.nodeOpacity,r=e.nodeHoverOpacity,o=e.nodeHoverOthersOpacity,l=e.nodeBorderWidth,u=e.getNodeBorderColor,c=e.animate,d=e.motionDamping,s=e.motionStiffness,y=e.showTooltip,p=e.hideTooltip,h=e.setCurrentNode,v=e.currentNode,m=e.currentLink,g=e.isCurrentNode,b=e.onClick,k=e.tooltip,x=e.theme,O=function(e){return v||m?g(e)?r:o:n};if(!c)return a.a.createElement(i.Fragment,null,t.map((function(e){return a.a.createElement(R,{key:e.id,node:e,x:e.x,y:e.y,width:e.width,height:e.height,color:e.color,opacity:O(e),borderWidth:l,borderColor:u(e),showTooltip:y,hideTooltip:p,setCurrent:h,onClick:b,tooltip:k,theme:x})})));var w={damping:d,stiffness:s};return a.a.createElement(L.TransitionMotion,{styles:t.map((function(e){return{key:e.id,data:e,style:F({x:Object(L.spring)(e.x,w),y:Object(L.spring)(e.y,w),width:Object(L.spring)(e.width,w),height:Object(L.spring)(e.height,w),opacity:Object(L.spring)(O(e),w)},Object(f.l)(e.color,w))}}))},(function(e){return a.a.createElement(i.Fragment,null,e.map((function(e){var t=e.key,n=e.style,r=e.data,o=Object(f.i)(n);return a.a.createElement(R,{key:t,node:r,x:n.x,y:n.y,width:Math.max(n.width,0),height:Math.max(n.height,0),color:o,opacity:n.opacity,borderWidth:l,borderColor:u(F({},r,{color:o})),showTooltip:y,hideTooltip:p,setCurrent:h,onClick:b,tooltip:k,theme:x})})))}))}));function z(){return(z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var A=Object(i.memo)((function(e){var t=e.id,n=e.layout,r=e.startColor,o=e.endColor,i={};return"horizontal"===n?(i.x1="0%",i.x2="100%",i.y1="0%",i.y2="0%"):(i.x1="0%",i.x2="0%",i.y1="0%",i.y2="100%"),a.a.createElement("linearGradient",z({id:t,spreadMethod:"pad"},i),a.a.createElement("stop",{offset:"0%",stopColor:r}),a.a.createElement("stop",{offset:"100%",stopColor:o}))}));A.displayName="SankeyLinkGradient";var W={container:{display:"flex",alignItems:"center"},sourceChip:{marginRight:7},targetChip:{marginLeft:7,marginRight:7}},D=function(e){var t=e.link,n=e.format;return a.a.createElement("span",{style:W.container},a.a.createElement(q.b,{color:t.source.color,style:W.sourceChip}),a.a.createElement("strong",null,t.source.label)," > ",a.a.createElement("strong",null,t.target.label),a.a.createElement(q.b,{color:t.target.color,style:W.targetChip}),a.a.createElement("strong",null,n?n(t.value):t.value))},I=O()(v()(["link","theme","tooltip","tooltipFormat"],(function(e){var t=e.link,n=e.theme,r=e.tooltip,o=e.tooltipFormat;return r?{tooltip:a.a.createElement(q.a,{id:r(t),enableChip:!1,theme:n})}:{tooltip:a.a.createElement(q.a,{id:a.a.createElement(D,{format:o,link:t}),theme:n})}})),v()(["onClick","link"],(function(e){var t=e.onClick,n=e.link;return{onClick:function(e){return t(n,e)}}})),T()({handleMouseEnter:function(e){var t=e.showTooltip,n=e.setCurrent,r=e.link,o=e.tooltip;return function(e){n(r),t(o,e)}},handleMouseMove:function(e){var t=e.showTooltip,n=e.tooltip;return function(e){t(n,e)}},handleMouseLeave:function(e){var t=e.hideTooltip,n=e.setCurrent;return function(){n(null),t()}}}),p.a)((function(e){var t=e.link,n=e.layout,r=e.path,o=e.color,l=e.opacity,u=e.blendMode,c=e.enableGradient,d=e.handleMouseEnter,s=e.handleMouseMove,f=e.handleMouseLeave,y=e.onClick,p="".concat(t.source.id,".").concat(t.target.id);return a.a.createElement(i.Fragment,null,c&&a.a.createElement(A,{id:p,layout:n,startColor:t.startColor||t.source.color,endColor:t.endColor||t.target.color}),a.a.createElement("path",{fill:c?"url(#".concat(encodeURI(p),")"):o,d:r,fillOpacity:l,onMouseEnter:d,onMouseMove:s,onMouseLeave:f,onClick:y,style:{mixBlendMode:u}}))}));function G(){return(G=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var Z=p()((function(e){var t,n=e.links,r=e.layout,o=e.linkOpacity,u=e.linkHoverOpacity,c=e.linkHoverOthersOpacity,d=e.linkContract,s=e.linkBlendMode,f=e.enableLinkGradient,y=e.animate,p=e.motionDamping,h=e.motionStiffness,v=e.showTooltip,m=e.hideTooltip,g=e.setCurrentLink,b=e.currentNode,k=e.currentLink,x=e.isCurrentLink,O=e.onClick,w=e.tooltipFormat,C=e.tooltip,L=e.theme,S=function(e){return b||k?x(e)?u:c:o},T="horizontal"===r?(t=Object(j.u)().curve(j.o),function(e,n){var r=Math.max(1,e.thickness-2*n)/2,o=.12*(e.target.x0-e.source.x1),i=[[e.source.x1,e.pos0-r],[e.source.x1+o,e.pos0-r],[e.target.x0-o,e.pos1-r],[e.target.x0,e.pos1-r],[e.target.x0,e.pos1+r],[e.target.x0-o,e.pos1+r],[e.source.x1+o,e.pos0+r],[e.source.x1,e.pos0+r],[e.source.x1,e.pos0-r]];return t(i)+"Z"}):function(){var e=Object(j.u)().curve(j.p);return function(t,n){var r=Math.max(1,t.thickness-2*n)/2,o=.12*(t.target.y0-t.source.y1),i=[[t.pos0+r,t.source.y1],[t.pos0+r,t.source.y1+o],[t.pos1+r,t.target.y0-o],[t.pos1+r,t.target.y0],[t.pos1-r,t.target.y0],[t.pos1-r,t.target.y0-o],[t.pos0-r,t.source.y1+o],[t.pos0-r,t.source.y1],[t.pos0+r,t.source.y1]];return e(i)+"Z"}}();if(!0!==y)return a.a.createElement("g",null,n.map((function(e){return a.a.createElement(I,{key:"".concat(e.source.id,".").concat(e.target.id),link:e,layout:r,path:T(e,d),color:e.color,opacity:S(e),blendMode:s,enableGradient:f,showTooltip:v,hideTooltip:m,setCurrent:g,onClick:O,tooltip:C,theme:L,tooltipFormat:w})})));var q={stiffness:h,damping:p};return a.a.createElement(i.Fragment,null,n.map((function(e){return a.a.createElement(l.k,{key:"".concat(e.source.id,".").concat(e.target.id),style:function(t){return{path:t(T(e,d),q),color:t(e.color,q),opacity:t(S(e),q)}}},(function(t){return a.a.createElement(I,G({link:e,layout:r},t,{blendMode:s,enableGradient:f,showTooltip:v,hideTooltip:m,setCurrent:g,onClick:O,tooltip:C,theme:L,tooltipFormat:w}))}))})))}));function Y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){J(e,t,n[t])}))}return e}function J(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var X=p()((function(e){var t=e.nodes,n=e.layout,r=e.width,o=e.height,l=e.labelPosition,u=e.labelPadding,c=e.labelOrientation,d=e.getLabelTextColor,s=e.theme,y=e.animate,p=e.motionDamping,h=e.motionStiffness,v="vertical"===c?-90:0,m=t.map((function(e){var t,i,a;return"horizontal"===n?(i=e.y+e.height/2,e.x<r/2?"inside"===l?(t=e.x1+u,a="vertical"===c?"middle":"start"):(t=e.x-u,a="vertical"===c?"middle":"end"):"inside"===l?(t=e.x-u,a="vertical"===c?"middle":"end"):(t=e.x1+u,a="vertical"===c?"middle":"start")):"vertical"===n&&(t=e.x+e.width/2,e.y<o/2?"inside"===l?(i=e.y1+u,a="vertical"===c?"end":"middle"):(i=e.y-u,a="vertical"===c?"start":"middle"):"inside"===l?(i=e.y-u,a="vertical"===c?"start":"middle"):(i=e.y1+u,a="vertical"===c?"end":"middle")),{id:e.id,label:e.label,x:t,y:i,textAnchor:a,color:d(e)}}));if(!y)return a.a.createElement("g",null,m.map((function(e){return a.a.createElement("text",{key:e.id,dominantBaseline:"central",textAnchor:e.textAnchor,transform:"translate(".concat(e.x,", ").concat(e.y,") rotate(").concat(v,")"),style:Y({},s.labels.text,{fill:e.color})},e.label)})));var g={damping:p,stiffness:h};return a.a.createElement(L.TransitionMotion,{styles:m.map((function(e){return{key:e.id,data:e,style:Y({x:Object(L.spring)(e.x,g),y:Object(L.spring)(e.y,g),rotation:Object(L.spring)(v,g)},Object(f.l)(e.color,g))}}))},(function(e){return a.a.createElement(i.Fragment,null,e.map((function(e){var t=e.key,n=e.style,r=e.data,o=Object(f.i)(n);return a.a.createElement("text",{key:t,transform:"translate(".concat(n.x,", ").concat(n.y,") rotate(").concat(n.rotation,")"),dominantBaseline:"central",textAnchor:r.textAnchor,style:Y({},s.labels.text,{fill:o,pointerEvents:"none"})},r.label)})))}))}));function _(){return(_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var Q,K=(Q=function(e){var t=e.nodes,n=e.links,r=e.layout,i=e.margin,c=e.width,d=e.height,s=e.outerWidth,f=e.outerHeight,y=e.nodeOpacity,p=e.nodeHoverOpacity,h=e.nodeHoverOthersOpacity,v=e.nodeBorderWidth,m=e.getNodeBorderColor,g=e.setCurrentNode,b=e.currentNode,k=e.linkOpacity,x=e.linkHoverOpacity,O=e.linkHoverOthersOpacity,w=e.linkContract,C=e.linkBlendMode,L=e.enableLinkGradient,S=e.setCurrentLink,T=e.currentLink,q=e.enableLabels,j=e.labelPosition,E=e.labelPadding,M=e.labelOrientation,N=e.getLabelTextColor,P=e.theme,B=e.nodeTooltip,R=e.linkTooltip,F=e.animate,V=e.motionDamping,z=e.motionStiffness,A=e.isInteractive,W=e.onClick,D=e.tooltipFormat,I=e.legends,G=e.legendData,Y=function(){return!1},J=function(){return!1};if(T&&(Y=function(e){var t=e.id;return t===T.source.id||t===T.target.id},J=function(e){var t=e.source,n=e.target;return t.id===T.source.id&&n.id===T.target.id}),b){var Q=[b.id];n.filter((function(e){var t=e.source,n=e.target;return t.id===b.id||n.id===b.id})).forEach((function(e){var t=e.source,n=e.target;Q.push(t.id),Q.push(n.id)})),Q=o()(Q),Y=function(e){var t=e.id;return Q.includes(t)},J=function(e){var t=e.source,n=e.target;return t.id===b.id||n.id===b.id}}return a.a.createElement(l.b,{isInteractive:A,theme:P,animate:F,motionDamping:V,motionStiffness:z},(function(e){var o=e.showTooltip,A=e.hideTooltip;return a.a.createElement(l.l,{width:s,height:f,margin:i,theme:P},a.a.createElement(Z,{links:n,layout:r,linkContract:w,linkOpacity:k,linkHoverOpacity:x,linkHoverOthersOpacity:O,linkBlendMode:C,enableLinkGradient:L,showTooltip:o,hideTooltip:A,setCurrentLink:S,currentNode:b,currentLink:T,isCurrentLink:J,onClick:W,tooltip:R,theme:P,tooltipFormat:D,animate:F,motionDamping:V,motionStiffness:z}),a.a.createElement(H,{nodes:t,nodeOpacity:y,nodeHoverOpacity:p,nodeHoverOthersOpacity:h,nodeBorderWidth:v,getNodeBorderColor:m,showTooltip:o,hideTooltip:A,setCurrentNode:g,currentNode:b,currentLink:T,isCurrentNode:Y,onClick:W,tooltip:B,theme:P,tooltipFormat:D,animate:F,motionDamping:V,motionStiffness:z}),q&&a.a.createElement(X,{nodes:t,layout:r,width:c,height:d,labelPosition:j,labelPadding:E,labelOrientation:M,getLabelTextColor:N,theme:P,animate:F,motionDamping:V,motionStiffness:z}),I.map((function(e,t){return a.a.createElement(u.j,_({key:t},e,{containerWidth:c,containerHeight:d,data:G,theme:P}))})))}))},O()(k()(P),g()("currentNode","setCurrentNode",null),g()("currentLink","setCurrentLink",null),Object(l.wb)(),Object(l.tb)(),Object(l.vb)(),v()(["colors"],(function(e){var t=e.colors;return{getColor:Object(f.j)(t,"id"),getLinkColor:Object(f.j)(t,"source.id")}})),v()(["nodeBorderColor","theme"],(function(e){var t=e.nodeBorderColor,n=e.theme;return{getNodeBorderColor:Object(f.h)(t,n)}})),v()(["labelTextColor","theme"],(function(e){var t=e.labelTextColor,n=e.theme;return{getLabelTextColor:Object(f.h)(t,n)}})),v()(["label","labelFormat"],(function(e){var t=e.label,n=e.labelFormat;return{getLabel:Object(l.K)(t,n)}})),v()(["sort"],(function(e){var t=e.sort,n=t;return"auto"===t?n=void 0:"input"===t?n=null:"ascending"===t?n=function(e,t){return e.value-t.value}:"descending"===t&&(n=function(e,t){return t.value-e.value}),{sortFunction:n}})),v()(["align"],(function(e){var t,n=e.align;return{alignFunction:(t=n,E[t])}})),v()(["data","layout","alignFunction","sortFunction","nodeThickness","nodeSpacing","nodeInnerPadding","width","height","getColor","getLinkColor","getLabel"],(function(e){var t=e.data,n=e.layout,r=e.alignFunction,o=e.sortFunction,i=e.nodeThickness,a=e.nodeSpacing,l=e.nodeInnerPadding,u=e.width,c=e.height,d=e.getColor,f=e.getLinkColor,y=e.getLabel,p=Object(s.a)().nodeAlign(r).nodeSort(o).nodeWidth(i).nodePadding(a).size("horizontal"===n?[u,c]:[c,u]).nodeId(B),h=C()(t);return p(h),h.nodes.forEach((function(e){if(e.color=d(e),e.label=y(e),"horizontal"===n)e.x=e.x0+l,e.y=e.y0,e.width=Math.max(e.x1-e.x0-2*l,0),e.height=Math.max(e.y1-e.y0,0);else{e.x=e.y0,e.y=e.x0+l,e.width=Math.max(e.y1-e.y0,0),e.height=Math.max(e.x1-e.x0-2*l,0);var t=e.x0,r=e.x1;e.x0=e.y0,e.x1=e.y1,e.y0=t,e.y1=r}})),h.links.forEach((function(e){e.color=f(e),e.pos0=e.y0,e.pos1=e.y1,e.thickness=e.width,delete e.y0,delete e.y1,delete e.width})),h})),v()(["nodes"],(function(e){return{legendData:e.nodes.map((function(e){return{id:e.id,label:e.label,color:e.color}}))}})),p.a)(Q));function U(){return(U=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}K.displayName="Sankey";var $=function(e){return a.a.createElement(l.j,null,(function(t){var n=t.width,r=t.height;return a.a.createElement(K,U({width:n,height:r},e))}))}},yEOx:function(e,t,n){var r=n("0711"),o=1,i=4;e.exports=function(e){return r(e,o|i)}}}]);
//# sourceMappingURL=component---src-pages-sankey-index-js-48cb7da3aef63a953cd5.js.map