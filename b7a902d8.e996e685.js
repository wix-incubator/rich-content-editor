(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{107:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return b}));var r=t(3),i=t(7),o=(t(0),t(148)),a={id:"v6-to-v7",title:"Migrating to Version 7",sidebar_label:"v.6 => v.7"},c={unversionedId:"ricos/migrations/v6-to-v7",id:"ricos/migrations/v6-to-v7",isDocsHomePage:!1,title:"Migrating to Version 7",description:"V7 breaking change - draft-js moved from RCE peerDependency to dependencies",source:"@site/docs/ricos/migrations/migrating-to-v7.md",slug:"/ricos/migrations/v6-to-v7",permalink:"/ricos/docs/ricos/migrations/v6-to-v7",version:"current",sidebar_label:"v.6 => v.7",sidebar:"ricos",previous:{title:"Migrating to Version 8",permalink:"/ricos/docs/ricos/migrations/v7-to-v8"},next:{title:"Migrating from rich-content",permalink:"/ricos/docs/ricos/migrations/migrating-from-rich-content"}},s=[],p={toc:s};function b(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"V7 breaking change - ",Object(o.b)("inlineCode",{parentName:"p"},"draft-js")," moved from RCE ",Object(o.b)("inlineCode",{parentName:"p"},"peerDependency")," to ",Object(o.b)("inlineCode",{parentName:"p"},"dependencies")),Object(o.b)("p",null,"Consumers, therefore, should stop including ",Object(o.b)("inlineCode",{parentName:"p"},"draft-js")," in their dependencies (in dependencies, resolveAlias, code usage, etc...)."),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"This is not a proper breaking change, but will cause bundle bloat on the editor in case you keep ",Object(o.b)("inlineCode",{parentName:"p"},"draft-js")," as a dependency."))),Object(o.b)("p",null,"This is a preparation step. The next step is switching to the ",Object(o.b)("inlineCode",{parentName:"p"},"@wix/draft-js")," fork which solves many issues in the mobile web for Android and provides a more seamless experience for consumers."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"rich-content-editor-common")," package is ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/wix/ricos/blob/5f81918551b09406bfc5bfbbb6a33770bc4d0156/packages/editor-common/web/src/index.ts#L107"}),"exposing")," any ",Object(o.b)("inlineCode",{parentName:"p"},"draft-js")," functionality needed - please let us know if you consume ",Object(o.b)("inlineCode",{parentName:"p"},"draft-js")," in any other way."))}b.isMDXComponent=!0},148:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return u}));var r=t(0),i=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=i.a.createContext({}),b=function(e){var n=i.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},d=function(e){var n=b(e.components);return i.a.createElement(p.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},m=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=b(t),m=r,u=d["".concat(a,".").concat(m)]||d[m]||l[m]||o;return t?i.a.createElement(u,c(c({ref:n},p),{},{components:t})):i.a.createElement(u,c({ref:n},p))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=m;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var p=2;p<o;p++)a[p]=t[p];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);