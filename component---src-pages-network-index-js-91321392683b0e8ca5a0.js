(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{"4KPy":function(t,n,e){"use strict";e.d(n,"a",(function(){return o}));e("VlJN"),e("YjJN");var r=e("JCgZ"),i=e.n(r),o=function(t){var n=void 0===t?{}:t,e=n.rootNodeRadius,r=void 0===e?12:e,o=n.minMidNodes,a=void 0===o?6:o,u=n.maxMidNodes,c=void 0===u?16:u,l=n.midNodeRadius,s=void 0===l?8:l,f=n.minLeaves,h=void 0===f?4:f,d=n.maxLeaves,y=void 0===d?16:d,p=n.leafRadius,v=void 0===p?4:p,g={id:"0",radius:r,depth:0,color:"rgb(244, 117, 96)"},m=Array.from({length:i()(a,c)},(function(t,n){return{id:""+(n+1),radius:s,depth:1,color:"rgb(97, 205, 187)"}})),b=[],x=[];return m.forEach((function(t){b.push({source:"0",target:t.id,distance:50}),m.forEach((function(n){Math.random()<.04&&b.push({source:t.id,target:n.id,distance:70})})),Array.from({length:i()(h,y)},(function(n,e){x.push({id:t.id+"."+e,radius:v,depth:2,color:"rgb(232, 193, 160)"}),b.push({source:t.id,target:t.id+"."+e,distance:30})}))})),m.push(g),{nodes:m=m.concat(x),links:b}}},"4owV":function(t,n,e){"use strict";e.r(n);e("1c7q"),e("XQVo");var r=e("mXGw"),i=e.n(r),o=e("sqb/"),a=e("ZS2m"),u=e("hvUk"),c=e.n(u),l=e("kNwl"),s=e("4KPy"),f=Object.freeze({margin:{top:0,right:0,bottom:0,left:0},linkDistance:30,repulsivity:6,iterations:60,nodeColor:function(t){return t.color},nodeBorderWidth:1,nodeBorderColor:{from:"color",modifiers:[["darker",.8]]},linkColor:o.c.linkColor,linkThickness:function(t){return 2*(2-t.source.depth)},isInteractive:!0,animate:!0,motionStiffness:160,motionDamping:12});n.default=function(){return i.a.createElement(a.a,{name:"Network",meta:c.a.Network,icon:"network",flavors:c.a.flavors,currentFlavor:"svg",properties:l.a,initialProperties:f,defaultProperties:o.c,generateData:s.a,getDataSize:function(t){return t.nodes.length}},(function(t,n,e,r){return i.a.createElement(o.d,Object.assign({nodes:n.nodes,links:n.links},t,{theme:e}))}))}},BORk:function(t,n,e){"use strict";var r=function(t,n){var e;function r(){var r,i,o=e.length,a=0,u=0;for(r=0;r<o;++r)a+=(i=e[r]).x,u+=i.y;for(a=a/o-t,u=u/o-n,r=0;r<o;++r)(i=e[r]).x-=a,i.y-=u}return null==t&&(t=0),null==n&&(n=0),r.initialize=function(t){e=t},r.x=function(n){return arguments.length?(t=+n,r):t},r.y=function(t){return arguments.length?(n=+t,r):n},r};e("p0JG");function i(t,n,e,r){if(isNaN(n)||isNaN(e))return t;var i,o,a,u,c,l,s,f,h,d=t._root,y={data:r},p=t._x0,v=t._y0,g=t._x1,m=t._y1;if(!d)return t._root=y,t;for(;d.length;)if((l=n>=(o=(p+g)/2))?p=o:g=o,(s=e>=(a=(v+m)/2))?v=a:m=a,i=d,!(d=d[f=s<<1|l]))return i[f]=y,t;if(u=+t._x.call(null,d.data),c=+t._y.call(null,d.data),n===u&&e===c)return y.next=d,i?i[f]=y:t._root=y,t;do{i=i?i[f]=new Array(4):t._root=new Array(4),(l=n>=(o=(p+g)/2))?p=o:g=o,(s=e>=(a=(v+m)/2))?v=a:m=a}while((f=s<<1|l)==(h=(c>=a)<<1|u>=o));return i[h]=d,i[f]=y,t}var o=function(t,n,e,r,i){this.node=t,this.x0=n,this.y0=e,this.x1=r,this.y1=i};function a(t){return t[0]}function u(t){return t[1]}function c(t,n,e){var r=new l(null==n?a:n,null==e?u:e,NaN,NaN,NaN,NaN);return null==t?r:r.addAll(t)}function l(t,n,e,r,i,o){this._x=t,this._y=n,this._x0=e,this._y0=r,this._x1=i,this._y1=o,this._root=void 0}function s(t){for(var n={data:t.data},e=n;t=t.next;)e=e.next={data:t.data};return n}var f=c.prototype=l.prototype;f.copy=function(){var t,n,e=new l(this._x,this._y,this._x0,this._y0,this._x1,this._y1),r=this._root;if(!r)return e;if(!r.length)return e._root=s(r),e;for(t=[{source:r,target:e._root=new Array(4)}];r=t.pop();)for(var i=0;i<4;++i)(n=r.source[i])&&(n.length?t.push({source:n,target:r.target[i]=new Array(4)}):r.target[i]=s(n));return e},f.add=function(t){var n=+this._x.call(null,t),e=+this._y.call(null,t);return i(this.cover(n,e),n,e,t)},f.addAll=function(t){var n,e,r,o,a=t.length,u=new Array(a),c=new Array(a),l=1/0,s=1/0,f=-1/0,h=-1/0;for(e=0;e<a;++e)isNaN(r=+this._x.call(null,n=t[e]))||isNaN(o=+this._y.call(null,n))||(u[e]=r,c[e]=o,r<l&&(l=r),r>f&&(f=r),o<s&&(s=o),o>h&&(h=o));if(l>f||s>h)return this;for(this.cover(l,s).cover(f,h),e=0;e<a;++e)i(this,u[e],c[e],t[e]);return this},f.cover=function(t,n){if(isNaN(t=+t)||isNaN(n=+n))return this;var e=this._x0,r=this._y0,i=this._x1,o=this._y1;if(isNaN(e))i=(e=Math.floor(t))+1,o=(r=Math.floor(n))+1;else{for(var a,u,c=i-e,l=this._root;e>t||t>=i||r>n||n>=o;)switch(u=(n<r)<<1|t<e,(a=new Array(4))[u]=l,l=a,c*=2,u){case 0:i=e+c,o=r+c;break;case 1:e=i-c,o=r+c;break;case 2:i=e+c,r=o-c;break;case 3:e=i-c,r=o-c}this._root&&this._root.length&&(this._root=l)}return this._x0=e,this._y0=r,this._x1=i,this._y1=o,this},f.data=function(){var t=[];return this.visit((function(n){if(!n.length)do{t.push(n.data)}while(n=n.next)})),t},f.extent=function(t){return arguments.length?this.cover(+t[0][0],+t[0][1]).cover(+t[1][0],+t[1][1]):isNaN(this._x0)?void 0:[[this._x0,this._y0],[this._x1,this._y1]]},f.find=function(t,n,e){var r,i,a,u,c,l,s,f=this._x0,h=this._y0,d=this._x1,y=this._y1,p=[],v=this._root;for(v&&p.push(new o(v,f,h,d,y)),null==e?e=1/0:(f=t-e,h=n-e,d=t+e,y=n+e,e*=e);l=p.pop();)if(!(!(v=l.node)||(i=l.x0)>d||(a=l.y0)>y||(u=l.x1)<f||(c=l.y1)<h))if(v.length){var g=(i+u)/2,m=(a+c)/2;p.push(new o(v[3],g,m,u,c),new o(v[2],i,m,g,c),new o(v[1],g,a,u,m),new o(v[0],i,a,g,m)),(s=(n>=m)<<1|t>=g)&&(l=p[p.length-1],p[p.length-1]=p[p.length-1-s],p[p.length-1-s]=l)}else{var b=t-+this._x.call(null,v.data),x=n-+this._y.call(null,v.data),k=b*b+x*x;if(k<e){var w=Math.sqrt(e=k);f=t-w,h=n-w,d=t+w,y=n+w,r=v.data}}return r},f.remove=function(t){if(isNaN(o=+this._x.call(null,t))||isNaN(a=+this._y.call(null,t)))return this;var n,e,r,i,o,a,u,c,l,s,f,h,d=this._root,y=this._x0,p=this._y0,v=this._x1,g=this._y1;if(!d)return this;if(d.length)for(;;){if((l=o>=(u=(y+v)/2))?y=u:v=u,(s=a>=(c=(p+g)/2))?p=c:g=c,n=d,!(d=d[f=s<<1|l]))return this;if(!d.length)break;(n[f+1&3]||n[f+2&3]||n[f+3&3])&&(e=n,h=f)}for(;d.data!==t;)if(r=d,!(d=d.next))return this;return(i=d.next)&&delete d.next,r?(i?r.next=i:delete r.next,this):n?(i?n[f]=i:delete n[f],(d=n[0]||n[1]||n[2]||n[3])&&d===(n[3]||n[2]||n[1]||n[0])&&!d.length&&(e?e[h]=d:this._root=d),this):(this._root=i,this)},f.removeAll=function(t){for(var n=0,e=t.length;n<e;++n)this.remove(t[n]);return this},f.root=function(){return this._root},f.size=function(){var t=0;return this.visit((function(n){if(!n.length)do{++t}while(n=n.next)})),t},f.visit=function(t){var n,e,r,i,a,u,c=[],l=this._root;for(l&&c.push(new o(l,this._x0,this._y0,this._x1,this._y1));n=c.pop();)if(!t(l=n.node,r=n.x0,i=n.y0,a=n.x1,u=n.y1)&&l.length){var s=(r+a)/2,f=(i+u)/2;(e=l[3])&&c.push(new o(e,s,f,a,u)),(e=l[2])&&c.push(new o(e,r,f,s,u)),(e=l[1])&&c.push(new o(e,s,i,a,f)),(e=l[0])&&c.push(new o(e,r,i,s,f))}return this},f.visitAfter=function(t){var n,e=[],r=[];for(this._root&&e.push(new o(this._root,this._x0,this._y0,this._x1,this._y1));n=e.pop();){var i=n.node;if(i.length){var a,u=n.x0,c=n.y0,l=n.x1,s=n.y1,f=(u+l)/2,h=(c+s)/2;(a=i[0])&&e.push(new o(a,u,c,f,h)),(a=i[1])&&e.push(new o(a,f,c,l,h)),(a=i[2])&&e.push(new o(a,u,h,f,s)),(a=i[3])&&e.push(new o(a,f,h,l,s))}r.push(n)}for(;n=r.pop();)t(n.node,n.x0,n.y0,n.x1,n.y1);return this},f.x=function(t){return arguments.length?(this._x=t,this):this._x},f.y=function(t){return arguments.length?(this._y=t,this):this._y};var h=function(t){return function(){return t}},d=function(){return 1e-6*(Math.random()-.5)};function y(t){return t.x+t.vx}function p(t){return t.y+t.vy}var v=function(t){var n,e,r=1,i=1;function o(){for(var t,o,u,l,s,f,h,v=n.length,g=0;g<i;++g)for(o=c(n,y,p).visitAfter(a),t=0;t<v;++t)u=n[t],f=e[u.index],h=f*f,l=u.x+u.vx,s=u.y+u.vy,o.visit(m);function m(t,n,e,i,o){var a=t.data,c=t.r,y=f+c;if(!a)return n>l+y||i<l-y||e>s+y||o<s-y;if(a.index>u.index){var p=l-a.x-a.vx,v=s-a.y-a.vy,g=p*p+v*v;g<y*y&&(0===p&&(g+=(p=d())*p),0===v&&(g+=(v=d())*v),g=(y-(g=Math.sqrt(g)))/g*r,u.vx+=(p*=g)*(y=(c*=c)/(h+c)),u.vy+=(v*=g)*y,a.vx-=p*(y=1-y),a.vy-=v*y)}}}function a(t){if(t.data)return t.r=e[t.data.index];for(var n=t.r=0;n<4;++n)t[n]&&t[n].r>t.r&&(t.r=t[n].r)}function u(){if(n){var r,i,o=n.length;for(e=new Array(o),r=0;r<o;++r)i=n[r],e[i.index]=+t(i,r,n)}}return"function"!=typeof t&&(t=h(null==t?1:+t)),o.initialize=function(t){n=t,u()},o.iterations=function(t){return arguments.length?(i=+t,o):i},o.strength=function(t){return arguments.length?(r=+t,o):r},o.radius=function(n){return arguments.length?(t="function"==typeof n?n:h(+n),u(),o):t},o};e("RqWj"),e("abGl"),e("gZHo"),e("Fdmb"),e("VlJN"),e("ZY1c");function g(t){return t.index}function m(t,n){var e=t.get(n);if(!e)throw new Error("missing: "+n);return e}var b=function(t){var n,e,r,i,o,a=g,u=function(t){return 1/Math.min(i[t.source.index],i[t.target.index])},c=h(30),l=1;function s(r){for(var i=0,a=t.length;i<l;++i)for(var u,c,s,f,h,y,p,v=0;v<a;++v)c=(u=t[v]).source,f=(s=u.target).x+s.vx-c.x-c.vx||d(),h=s.y+s.vy-c.y-c.vy||d(),f*=y=((y=Math.sqrt(f*f+h*h))-e[v])/y*r*n[v],h*=y,s.vx-=f*(p=o[v]),s.vy-=h*p,c.vx+=f*(p=1-p),c.vy+=h*p}function f(){if(r){var u,c,l=r.length,s=t.length,f=new Map(r.map((function(t,n){return[a(t,n,r),t]})));for(u=0,i=new Array(l);u<s;++u)(c=t[u]).index=u,"object"!=typeof c.source&&(c.source=m(f,c.source)),"object"!=typeof c.target&&(c.target=m(f,c.target)),i[c.source.index]=(i[c.source.index]||0)+1,i[c.target.index]=(i[c.target.index]||0)+1;for(u=0,o=new Array(s);u<s;++u)c=t[u],o[u]=i[c.source.index]/(i[c.source.index]+i[c.target.index]);n=new Array(s),y(),e=new Array(s),p()}}function y(){if(r)for(var e=0,i=t.length;e<i;++e)n[e]=+u(t[e],e,t)}function p(){if(r)for(var n=0,i=t.length;n<i;++n)e[n]=+c(t[n],n,t)}return null==t&&(t=[]),s.initialize=function(t){r=t,f()},s.links=function(n){return arguments.length?(t=n,f(),s):t},s.id=function(t){return arguments.length?(a=t,s):a},s.iterations=function(t){return arguments.length?(l=+t,s):l},s.strength=function(t){return arguments.length?(u="function"==typeof t?t:h(+t),y(),s):u},s.distance=function(t){return arguments.length?(c="function"==typeof t?t:h(+t),p(),s):c},s},x=(e("Tw+y"),e("jr56"),e("6IHZ"),e("7qNv"),e("kr69"),{value:function(){}});function k(){for(var t,n=0,e=arguments.length,r={};n<e;++n){if(!(t=arguments[n]+"")||t in r)throw new Error("illegal type: "+t);r[t]=[]}return new w(r)}function w(t){this._=t}function _(t,n){return t.trim().split(/^|\s+/).map((function(t){var e="",r=t.indexOf(".");if(r>=0&&(e=t.slice(r+1),t=t.slice(0,r)),t&&!n.hasOwnProperty(t))throw new Error("unknown type: "+t);return{type:t,name:e}}))}function O(t,n){for(var e,r=0,i=t.length;r<i;++r)if((e=t[r]).name===n)return e.value}function j(t,n,e){for(var r=0,i=t.length;r<i;++r)if(t[r].name===n){t[r]=x,t=t.slice(0,r).concat(t.slice(r+1));break}return null!=e&&t.push({name:n,value:e}),t}w.prototype=k.prototype={constructor:w,on:function(t,n){var e,r=this._,i=_(t+"",r),o=-1,a=i.length;if(!(arguments.length<2)){if(null!=n&&"function"!=typeof n)throw new Error("invalid callback: "+n);for(;++o<a;)if(e=(t=i[o]).type)r[e]=j(r[e],t.name,n);else if(null==n)for(e in r)r[e]=j(r[e],t.name,null);return this}for(;++o<a;)if((e=(t=i[o]).type)&&(e=O(r[e],t.name)))return e},copy:function(){var t={},n=this._;for(var e in n)t[e]=n[e].slice();return new w(t)},call:function(t,n){if((e=arguments.length-2)>0)for(var e,r,i=new Array(e),o=0;o<e;++o)i[o]=arguments[o+2];if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(o=0,e=(r=this._[t]).length;o<e;++o)r[o].value.apply(n,i)},apply:function(t,n,e){if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(var r=this._[t],i=0,o=r.length;i<o;++i)r[i].value.apply(n,e)}};var N,M,C=k,E=(e("a+rV"),0),q=0,A=0,T=1e3,S=0,P=0,R=0,W="object"==typeof performance&&performance.now?performance:Date,D="object"==typeof window&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(t){setTimeout(t,17)};function B(){return P||(D(I),P=W.now()+R)}function I(){P=0}function Y(){this._call=this._time=this._next=null}function F(t,n,e){var r=new Y;return r.restart(t,n,e),r}function X(){P=(S=W.now())+R,E=q=0;try{!function(){B(),++E;for(var t,n=N;n;)(t=P-n._time)>=0&&n._call.call(null,t),n=n._next;--E}()}finally{E=0,function(){var t,n,e=N,r=1/0;for(;e;)e._call?(r>e._time&&(r=e._time),t=e,e=e._next):(n=e._next,e._next=null,e=t?t._next=n:N=n);M=t,L(r)}(),P=0}}function V(){var t=W.now(),n=t-S;n>T&&(R-=n,S=t)}function L(t){E||(q&&(q=clearTimeout(q)),t-P>24?(t<1/0&&(q=setTimeout(X,t-W.now()-R)),A&&(A=clearInterval(A))):(A||(S=W.now(),A=setInterval(V,T)),E=1,D(X)))}Y.prototype=F.prototype={constructor:Y,restart:function(t,n,e){if("function"!=typeof t)throw new TypeError("callback is not a function");e=(null==e?B():+e)+(null==n?0:+n),this._next||M===this||(M?M._next=this:N=this,M=this),this._call=t,this._time=e,L()},stop:function(){this._call&&(this._call=null,this._time=1/0,L())}};function z(t){return t.x}function J(t){return t.y}var H=10,Z=Math.PI*(3-Math.sqrt(5)),G=function(t){var n,e=1,r=.001,i=1-Math.pow(r,1/300),o=0,a=.6,u=new Map,c=F(s),l=C("tick","end");function s(){f(),l.call("tick",n),e<r&&(c.stop(),l.call("end",n))}function f(r){var c,l,s=t.length;void 0===r&&(r=1);for(var f=0;f<r;++f)for(e+=(o-e)*i,u.forEach((function(t){t(e)})),c=0;c<s;++c)null==(l=t[c]).fx?l.x+=l.vx*=a:(l.x=l.fx,l.vx=0),null==l.fy?l.y+=l.vy*=a:(l.y=l.fy,l.vy=0);return n}function h(){for(var n,e=0,r=t.length;e<r;++e){if((n=t[e]).index=e,null!=n.fx&&(n.x=n.fx),null!=n.fy&&(n.y=n.fy),isNaN(n.x)||isNaN(n.y)){var i=H*Math.sqrt(e),o=e*Z;n.x=i*Math.cos(o),n.y=i*Math.sin(o)}(isNaN(n.vx)||isNaN(n.vy))&&(n.vx=n.vy=0)}}function d(n){return n.initialize&&n.initialize(t),n}return null==t&&(t=[]),h(),n={tick:f,restart:function(){return c.restart(s),n},stop:function(){return c.stop(),n},nodes:function(e){return arguments.length?(t=e,h(),u.forEach(d),n):t},alpha:function(t){return arguments.length?(e=+t,n):e},alphaMin:function(t){return arguments.length?(r=+t,n):r},alphaDecay:function(t){return arguments.length?(i=+t,n):+i},alphaTarget:function(t){return arguments.length?(o=+t,n):o},velocityDecay:function(t){return arguments.length?(a=1-t,n):1-a},force:function(t,e){return arguments.length>1?(null==e?u.delete(t):u.set(t,d(e)),n):u.get(t)},find:function(n,e,r){var i,o,a,u,c,l=0,s=t.length;for(null==r?r=1/0:r*=r,l=0;l<s;++l)(a=(i=n-(u=t[l]).x)*i+(o=e-u.y)*o)<r&&(c=u,r=a);return c},on:function(t,e){return arguments.length>1?(l.on(t,e),n):l.on(t)}}},K=function(){var t,n,e,r,i=h(-30),o=1,a=1/0,u=.81;function l(r){var i,o=t.length,a=c(t,z,J).visitAfter(f);for(e=r,i=0;i<o;++i)n=t[i],a.visit(y)}function s(){if(t){var n,e,o=t.length;for(r=new Array(o),n=0;n<o;++n)e=t[n],r[e.index]=+i(e,n,t)}}function f(t){var n,e,i,o,a,u=0,c=0;if(t.length){for(i=o=a=0;a<4;++a)(n=t[a])&&(e=Math.abs(n.value))&&(u+=n.value,c+=e,i+=e*n.x,o+=e*n.y);t.x=i/c,t.y=o/c}else{(n=t).x=n.data.x,n.y=n.data.y;do{u+=r[n.data.index]}while(n=n.next)}t.value=u}function y(t,i,c,l){if(!t.value)return!0;var s=t.x-n.x,f=t.y-n.y,h=l-i,y=s*s+f*f;if(h*h/u<y)return y<a&&(0===s&&(y+=(s=d())*s),0===f&&(y+=(f=d())*f),y<o&&(y=Math.sqrt(o*y)),n.vx+=s*t.value*e/y,n.vy+=f*t.value*e/y),!0;if(!(t.length||y>=a)){(t.data!==n||t.next)&&(0===s&&(y+=(s=d())*s),0===f&&(y+=(f=d())*f),y<o&&(y=Math.sqrt(o*y)));do{t.data!==n&&(h=r[t.data.index]*e/y,n.vx+=s*h,n.vy+=f*h)}while(t=t.next)}}return l.initialize=function(n){t=n,s()},l.strength=function(t){return arguments.length?(i="function"==typeof t?t:h(+t),s(),l):i},l.distanceMin=function(t){return arguments.length?(o=t*t,l):Math.sqrt(o)},l.distanceMax=function(t){return arguments.length?(a=t*t,l):Math.sqrt(a)},l.theta=function(t){return arguments.length?(u=t*t,l):Math.sqrt(u)},l},Q=function(t){var n,e,r,i=h(.1);function o(t){for(var i,o=0,a=n.length;o<a;++o)(i=n[o]).vx+=(r[o]-i.x)*e[o]*t}function a(){if(n){var o,a=n.length;for(e=new Array(a),r=new Array(a),o=0;o<a;++o)e[o]=isNaN(r[o]=+t(n[o],o,n))?0:+i(n[o],o,n)}}return"function"!=typeof t&&(t=h(null==t?0:+t)),o.initialize=function(t){n=t,a()},o.strength=function(t){return arguments.length?(i="function"==typeof t?t:h(+t),a(),o):i},o.x=function(n){return arguments.length?(t="function"==typeof n?n:h(+n),a(),o):t},o},U=function(t){var n,e,r,i=h(.1);function o(t){for(var i,o=0,a=n.length;o<a;++o)(i=n[o]).vy+=(r[o]-i.y)*e[o]*t}function a(){if(n){var o,a=n.length;for(e=new Array(a),r=new Array(a),o=0;o<a;++o)e[o]=isNaN(r[o]=+t(n[o],o,n))?0:+i(n[o],o,n)}}return"function"!=typeof t&&(t=h(null==t?0:+t)),o.initialize=function(t){n=t,a()},o.strength=function(t){return arguments.length?(i="function"==typeof t?t:h(+t),a(),o):i},o.y=function(n){return arguments.length?(t="function"==typeof n?n:h(+n),a(),o):t},o};e.d(n,"a",(function(){return r})),e.d(n,"b",(function(){return v})),e.d(n,"c",(function(){return b})),e.d(n,"d",(function(){return K})),e.d(n,"e",(function(){return G})),e.d(n,"f",(function(){return Q})),e.d(n,"g",(function(){return U}))},kNwl:function(t,n,e){"use strict";e.d(n,"a",(function(){return c}));e("VlJN"),e("YjJN"),e("Eb4t"),e("Fdmb"),e("IYjZ"),e("yvkl"),e("abGl");var r,i=e("sqb/"),o=e("RQLE");var a,u=[{key:"width",enableControlForFlavors:["api"],help:"Chart width.",description:"\n            Not required if using responsive component.\n        ",type:"number",required:!0,controlType:"range",group:"Base",controlOptions:{unit:"px",min:100,max:1e3,step:5}},{key:"height",enableControlForFlavors:["api"],help:"Chart height.",description:"\n            Not required if using responsive component.\n        ",type:"number",required:!0,controlType:"range",group:"Base",controlOptions:{unit:"px",min:100,max:1e3,step:5}},{key:"pixelRatio",flavors:["canvas"],help:"Adjust pixel ratio, useful for HiDPI screens.",defaultValue:"Depends on device",type:"number",controlType:"range",group:"Base",controlOptions:{min:1,max:2}},(r={key:"margin",group:"Base",type:"object",help:"Chart margin.",controlType:"margin"},r.group="Base",r),{key:"linkDistance",group:"Simulation",type:"number | string | (link: Link) => number",help:"Control links' distance.",description:"\n            If you set a **number**, this value will be used for all links.\n\n            If you use a **string**, this will be used to pick the distance\n            from the corresponding link property, thus, this property\n            should exist on each link.\n\n            If you use a **function**, it will receive a link and must return \n            the desired distance.\n        "},{key:"repulsivity",group:"Simulation",type:"number",help:"Control how nodes repel each other.",description:"\n            This value will also affect the strength\n            of `distanceMin` and `distanceMax`.\n        ",controlType:"range",controlOptions:{min:1,max:100},defaultValue:i.c.repulsivity},{key:"distanceMin",group:"Simulation",type:"number",help:"Sets the minimum distance between nodes for the many-body force.",defaultValue:i.c.distanceMin},{key:"distanceMax",group:"Simulation",help:"Sets the maximum distance between nodes for the many-body force.",defaultValue:i.c.distanceMax},{key:"iterations",group:"Simulation",help:"Adjust the simulation quality.",description:"\n            Increasing this number will result in a **more accurate simulation**,\n            however it will also involve more computing.\n        ",type:"number",defaultValue:i.c.iterations,controlType:"range",controlOptions:{min:60,max:260}},{key:"nodeColor",group:"Nodes",type:"string | (node: Node) => string",help:"Control nodes' color."},{key:"nodeBorderWidth",group:"Nodes",type:"number | (node: Node) => number",help:"Control nodes' border width.",defaultValue:i.c.nodeBorderWidth,controlType:"lineWidth"},{key:"nodeBorderColor",group:"Nodes",type:"string | object | (link: Link) => string",help:"Control nodes' border color.",defaultValue:i.c.nodeBorderColor,controlType:"inheritedColor"},{key:"linkThickness",enableControlForFlavors:["canvas"],group:"Links",type:"number | (link: Link) => number",help:"Control links' thickness.",defaultValue:i.c.linkThickness,controlType:"lineWidth"},{key:"linkColor",group:"Links",type:"string | (link: Link) => string",help:"Control links' color.",defaultValue:i.c.linkColor,controlType:"inheritedColor",controlOptions:{inheritableProperties:["source.color","target.color"]}},{key:"layers",group:"Customization",help:"Defines the order of layers and add custom layers.",required:!1,defaultValue:i.c.layers}].concat(function(t){if(Array.isArray(t)){for(var n=0,e=new Array(t.length);n<t.length;n++)e[n]=t[n];return e}}(a=Object(o.e)(["svg"],i.c))||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(a)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()),c=Object(o.d)(u)},"sqb/":function(t,n,e){"use strict";(function(t){e.d(n,"a",(function(){return F})),e.d(n,"b",(function(){return w})),e.d(n,"c",(function(){return k})),e.d(n,"d",(function(){return V})),e.d(n,"e",(function(){return G}));e("xl0S"),e("1c7q"),e("p0JG"),e("Zrjq"),e("IYjZ"),e("yvkl"),e("abGl"),e("gZHo"),e("Fdmb"),e("Ir+3");var r=e("mXGw"),i=e.n(r),o=e("NxE3"),a=e("62qY"),u=e("W0B4"),c=e.n(u),l=e("edSL"),s=e.n(l),f=e("4e1R"),h=e.n(f),d=e("XQLF"),y=e.n(d),p=e("BORk"),v=e("wMFK");function g(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{},r=Object.keys(e);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(e).filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})))),r.forEach((function(n){m(t,n,e[n])}))}return t}function m(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var b={nodes:c.a.arrayOf(c.a.shape({id:c.a.string.isRequired})).isRequired,links:c.a.arrayOf(c.a.shape({source:c.a.string.isRequired,target:c.a.string.isRequired})).isRequired,layers:c.a.arrayOf(c.a.oneOfType([c.a.oneOf(["links","nodes"]),c.a.func])).isRequired,linkDistance:c.a.oneOfType([c.a.string,c.a.func,c.a.number]).isRequired,repulsivity:c.a.number.isRequired,distanceMin:c.a.number.isRequired,distanceMax:c.a.number.isRequired,iterations:c.a.number.isRequired,nodeColor:c.a.oneOfType([c.a.string,c.a.func]).isRequired,nodeBorderWidth:c.a.oneOfType([c.a.number,c.a.func]).isRequired,nodeBorderColor:a.k.isRequired,linkThickness:c.a.oneOfType([c.a.number,c.a.func]).isRequired,linkColor:a.k.isRequired,isInteractive:c.a.bool.isRequired},x=(g({},b,o.U),g({pixelRatio:c.a.number.isRequired},b),{layers:["links","nodes"],linkDistance:30,repulsivity:10,distanceMin:1,distanceMax:1/0,iterations:90,nodeBorderWidth:0,nodeBorderColor:{from:"color"},linkThickness:1,linkColor:{from:"source.color"},isInteractive:!0}),k=g({},x,{animate:!0,motionStiffness:90,motionDamping:15}),w=g({},x,{pixelRatio:t.window&&t.window.devicePixelRatio?t.window.devicePixelRatio:1});function _(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{},r=Object.keys(e);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(e).filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})))),r.forEach((function(n){O(t,n,e[n])}))}return t}function O(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function j(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var e=[],r=!0,i=!1,o=void 0;try{for(var a,u=t[Symbol.iterator]();!(r=(a=u.next()).done)&&(e.push(a.value),!n||e.length!==n);r=!0);}catch(c){i=!0,o=c}finally{try{r||null==u.return||u.return()}finally{if(i)throw o}}return e}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var N=function(t){var n=t.nodes,e=t.links,i=t.linkDistance,o=t.repulsivity,a=t.distanceMin,u=t.distanceMax,c=t.center,l=t.iterations,f=j(Object(r.useState)([]),2),d=f[0],v=f[1],g=j(Object(r.useState)([]),2),m=g[0],b=g[1];return Object(r.useEffect)((function(){var t=function(t){var n,e=t.linkDistance,r=t.repulsivity,i=t.distanceMin,o=t.distanceMax,a=t.center;return"function"==typeof e?n=e:y()(e)?n=e:h()(e)&&(n=function(t){return s()(t,e)}),{link:Object(p.c)().id((function(t){return t.id})).distance(n),charge:Object(p.d)().strength(-r).distanceMin(i).distanceMax(o),center:Object(p.a)(a[0],a[1])}}({linkDistance:i,repulsivity:o,distanceMin:a,distanceMax:u,center:c}),r=n.map((function(t){return _({},t)})),f=e.map((function(t){return _({id:"".concat(t.source,".").concat(t.target)},t)})),g=Object(p.e)(r).force("link",t.link.links(f)).force("charge",t.charge).force("center",t.center).stop();return g.tick(l),v(r),b(f.map((function(t){return t.previousSource=d.find((function(n){return n.id===t.source.id})),t.previousTarget=d.find((function(n){return n.id===t.target.id})),t}))),function(){g.stop()}}),[n,e,i,o,a,u,l,c[0],c[1]]),[d,m]},M=function(t){return Object(r.useMemo)((function(){return"function"==typeof t?t:function(){return t}}),[t])},C=function(t){return Object(r.useMemo)((function(){return"function"==typeof t?t:function(){return t}}),[t])},E=Object(r.memo)((function(t){var n=t.x,e=t.y,r=t.radius,o=t.color,a=t.borderWidth,u=t.borderColor,c=t.scale,l=void 0===c?1:c;return i.a.createElement("circle",{transform:"translate(".concat(n,",").concat(e,") scale(").concat(l,")"),r:r,fill:o,strokeWidth:a,stroke:u})})),q=function(t){var n=t.style;return{x:n.x.val,y:n.y.val,radius:n.radius.val,scale:0}},A=function(t){return function(n){var e=n.style;return{x:e.x,y:e.y,radius:e.radius,scale:Object(v.spring)(0,t)}}},T=Object(r.memo)((function(t){var n=t.nodes,e=t.color,r=t.borderWidth,a=t.borderColor,u=Object(o.ob)().springConfig;return i.a.createElement(v.TransitionMotion,{willEnter:q,willLeave:A(u),styles:n.map((function(t){return{key:t.id,data:t,style:{x:Object(v.spring)(t.x,u),y:Object(v.spring)(t.y,u),radius:Object(v.spring)(t.radius,u),scale:Object(v.spring)(1,u)}}}))},(function(t){return i.a.createElement(i.a.Fragment,null,t.map((function(t){var n=t.key,o=t.style,u=t.data;return i.a.createElement(E,{key:n,node:u,x:o.x,y:o.y,radius:Math.max(o.radius,0),color:e(u),borderWidth:r,borderColor:a(u),scale:Math.max(o.scale,0)})})))}))})),S=Object(r.memo)((function(t){var n=t.nodes,e=t.color,r=t.borderWidth,o=t.borderColor;return n.map((function(t){return i.a.createElement(E,{key:t.id,node:t,x:t.x,y:t.y,radius:t.radius,color:e(t),borderWidth:r,borderColor:o(t)})}))})),P=Object(r.memo)((function(t){var n=t.sourceX,e=t.sourceY,r=t.targetX,o=t.targetY,a=t.thickness,u=t.color;return i.a.createElement("line",{stroke:u,strokeWidth:a,strokeLinecap:"round",x1:n,y1:e,x2:r,y2:o})})),R=function(t){var n=t.style,e=t.data,r=e.previousSource?e.previousSource.x:n.sourceX.val,i=e.previousSource?e.previousSource.y:n.sourceY.val;return{sourceX:r,sourceY:i,targetX:r,targetY:i}},W=Object(r.memo)((function(t){var n=t.links,e=t.linkThickness,r=t.linkColor,a=Object(o.ob)().springConfig;return i.a.createElement(v.TransitionMotion,{willEnter:R,styles:n.map((function(t){return{key:t.id,data:t,style:{sourceX:Object(v.spring)(t.source.x,a),sourceY:Object(v.spring)(t.source.y,a),targetX:Object(v.spring)(t.target.x,a),targetY:Object(v.spring)(t.target.y,a)}}}))},(function(t){return i.a.createElement(i.a.Fragment,null,t.map((function(t){var n=t.key,o=t.style,a=t.data;return i.a.createElement(P,{key:n,link:a,color:r(a),thickness:e(a),sourceX:o.sourceX,sourceY:o.sourceY,targetX:o.targetX,targetY:o.targetY})})))}))})),D=Object(r.memo)((function(t){var n=t.links,e=t.linkThickness,r=t.linkColor;return n.map((function(t){return i.a.createElement(P,{key:t.id,link:t,color:r(t),thickness:e(t),sourceX:t.source.x,sourceY:t.source.y,targetX:t.target.x,targetY:t.target.y})}))}));function B(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function I(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var e=[],r=!0,i=!1,o=void 0;try{for(var a,u=t[Symbol.iterator]();!(r=(a=u.next()).done)&&(e.push(a.value),!n||e.length!==n);r=!0);}catch(c){i=!0,o=c}finally{try{r||null==u.return||u.return()}finally{if(i)throw o}}return e}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var Y=function(t){var n=t.width,e=t.height,u=t.margin,c=t.nodes,l=t.links,s=t.linkDistance,f=t.repulsivity,h=t.distanceMin,d=t.distanceMax,y=t.iterations,p=t.layers,v=t.nodeColor,g=t.nodeBorderWidth,m=t.nodeBorderColor,b=t.linkThickness,x=t.linkColor,k=Object(o.nb)(n,e,u),w=k.margin,_=k.innerWidth,O=k.innerHeight,j=k.outerWidth,E=k.outerHeight,q=Object(o.ob)().animate,A=Object(o.pb)(),P=M(v),R=Object(a.r)(m,A),Y=C(b),F=Object(a.r)(x,A),X=I(N({nodes:c,links:l,linkDistance:s,repulsivity:f,distanceMin:h,distanceMax:d,iterations:y,center:[_/2,O/2]}),2),V=X[0],L=X[1],z={links:i.a.createElement(!0===q?W:D,{key:"links",links:L,linkThickness:Y,linkColor:F}),nodes:i.a.createElement(!0===q?T:S,{key:"nodes",nodes:V,color:P,borderWidth:g,borderColor:R})};return i.a.createElement(o.l,{width:j,height:E,margin:w},p.map((function(n,e){return"function"==typeof n?i.a.createElement(r.Fragment,{key:e},n(function(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{},r=Object.keys(e);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(e).filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})))),r.forEach((function(n){B(t,n,e[n])}))}return t}({},t,{innerWidth:_,innerHeight:O,nodes:V,links:L}))):z[n]})))};Y.defaultProps=k;var F=Object(o.rb)(Y);function X(){return(X=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t}).apply(this,arguments)}var V=function(t){return i.a.createElement(o.j,null,(function(n){var e=n.width,r=n.height;return i.a.createElement(F,X({width:e,height:r},t))}))};function L(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function z(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var e=[],r=!0,i=!1,o=void 0;try{for(var a,u=t[Symbol.iterator]();!(r=(a=u.next()).done)&&(e.push(a.value),!n||e.length!==n);r=!0);}catch(c){i=!0,o=c}finally{try{r||null==u.return||u.return()}finally{if(i)throw o}}return e}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var J=function(t){var n=t.width,e=t.height,u=t.margin,c=t.pixelRatio,l=t.nodes,s=t.links,f=t.linkDistance,h=t.repulsivity,d=t.distanceMin,y=t.distanceMax,p=t.iterations,v=t.layers,g=t.nodeColor,m=t.nodeBorderWidth,b=t.nodeBorderColor,x=t.linkThickness,k=t.linkColor,w=t.isInteractive,_=Object(r.useRef)(null),O=Object(o.nb)(n,e,u),j=O.margin,E=O.innerWidth,q=O.innerHeight,A=O.outerWidth,T=O.outerHeight,S=z(N({nodes:l,links:s,linkDistance:f,repulsivity:h,distanceMin:d,distanceMax:y,iterations:p,center:[E/2,q/2]}),2),P=S[0],R=S[1],W=Object(o.pb)(),D=M(g),B=Object(a.r)(b,W),I=C(x),Y=Object(a.r)(k,W);return Object(r.useEffect)((function(){_.current.width=A*c,_.current.height=T*c;var n=_.current.getContext("2d");n.scale(c,c),n.fillStyle=W.background,n.fillRect(0,0,A,T),n.translate(j.left,j.top),v.forEach((function(e){"links"===e?R.forEach((function(t){n.strokeStyle=Y(t),n.lineWidth=I(t),n.beginPath(),n.moveTo(t.source.x,t.source.y),n.lineTo(t.target.x,t.target.y),n.stroke()})):"nodes"===e?P.forEach((function(t){n.fillStyle=D(t),n.beginPath(),n.arc(t.x,t.y,t.radius,0,2*Math.PI),n.fill(),m>0&&(n.strokeStyle=B(t),n.lineWidth=m,n.stroke())})):"function"==typeof e&&e(n,function(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{},r=Object.keys(e);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(e).filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})))),r.forEach((function(n){L(t,n,e[n])}))}return t}({},t,{nodes:P,links:R}))}))}),[_,A,T,v,W,P,R,D,m,B,I,Y]),i.a.createElement("canvas",{ref:_,width:A*c,height:T*c,style:{width:A,height:T,cursor:w?"auto":"normal"}})};J.defaultProps=w;var H=Object(o.rb)(J);function Z(){return(Z=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t}).apply(this,arguments)}var G=function(t){return i.a.createElement(o.j,null,(function(n){var e=n.width,r=n.height;return i.a.createElement(H,Z({width:e,height:r},t))}))}}).call(this,e("pCvA"))}}]);
//# sourceMappingURL=component---src-pages-network-index-js-91321392683b0e8ca5a0.js.map