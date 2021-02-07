(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{107:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return a})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(7),i=(n(0),n(150)),c={id:"testing",title:"Testing",sidebar_label:"Testing"},a={unversionedId:"dev/testing",id:"dev/testing",isDocsHomePage:!1,title:"Testing",description:"Test Environment",source:"@site/docs/dev/testing.md",slug:"/dev/testing",permalink:"/ricos/docs/dev/testing",editUrl:"https://github.com/wix/ricos/edit/master/website/docs/dev/testing.md",version:"current",sidebar_label:"Testing",sidebar:"dev",previous:{title:"Release Instructions",permalink:"/ricos/docs/dev/release_instructions"}},s=[{value:"Test Environment",id:"test-environment",children:[]},{value:"Cypress",id:"cypress",children:[]}],l={toc:s};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"test-environment"},"Test Environment"),Object(i.b)("p",null,"Start with:"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"npm run e2e:app:dev")),Object(i.b)("p",null,"and open ",Object(i.b)("inlineCode",{parentName:"p"},"http://localhost:3002/rce/")," for empty content state"),Object(i.b)("p",null,"or ",Object(i.b)("inlineCode",{parentName:"p"},"http://localhost:3002/rce/<FIXTURE_NAME>")," for initial fixture (e.g. ",Object(i.b)("inlineCode",{parentName:"p"},"http://localhost:3002/rce/gallery")),Object(i.b)("h2",{id:"cypress"},"Cypress"),Object(i.b)("p",null,"TBD"))}p.isMDXComponent=!0},150:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),b=r,f=u["".concat(c,".").concat(b)]||u[b]||d[b]||i;return n?o.a.createElement(f,a(a({ref:t},l),{},{components:n})):o.a.createElement(f,a({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=b;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:r,c[1]=a;for(var l=2;l<i;l++)c[l]=n[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);