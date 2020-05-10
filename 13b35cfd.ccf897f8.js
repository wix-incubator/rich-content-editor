(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{105:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(1),o=n(6),i=(n(0),n(160)),a={id:"general",title:"General",sidebar_label:"General"},c={id:"plugin-development-guidelines/general",title:"General",description:"## Motivation",source:"@site/docs/plugin-development-guidelines/General.md",permalink:"/rich-content/docs/plugin-development-guidelines/general",sidebar_label:"General",sidebar:"devs",next:{title:"Modal Dialogs",permalink:"/rich-content/docs/plugin-development-guidelines/modals"}},l=[{value:"Motivation",id:"motivation",children:[]},{value:"Source Code",id:"source-code",children:[]},{value:"Contribution Policy",id:"contribution-policy",children:[]}],p={rightToc:l};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"motivation"},"Motivation"),Object(i.b)("p",null,"In opposite to the original ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/draft-js-plugins/draft-js-plugins"}),"draft-js-plugins")," principle of complete plugin separation and independency, the ",Object(i.b)("inlineCode",{parentName:"p"},"wix-rich-content")," project is created with an intention to provide a solid yet flexible foundation that helps to extend the editor functionality. On other hand, it means that a plugin should be developed in a certain way."),Object(i.b)("h2",{id:"source-code"},"Source Code"),Object(i.b)("p",null,"Basically, there is no limitation on plugin source code hosting. At the moment, all the plugins are hosted in this repo, under the /packages dir."),Object(i.b)("h2",{id:"contribution-policy"},"Contribution Policy"),Object(i.b)("p",null,"TBD"))}u.isMDXComponent=!0},160:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),u=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},d=function(e){var t=u(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),b=r,f=d["".concat(a,".").concat(b)]||d[b]||s[b]||i;return n?o.a.createElement(f,c({ref:t},p,{components:n})):o.a.createElement(f,c({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var p=2;p<i;p++)a[p]=n[p];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);