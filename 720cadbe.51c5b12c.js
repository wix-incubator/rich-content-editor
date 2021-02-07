(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{150:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return g}));var i=t(0),r=t.n(i);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=r.a.createContext({}),l=function(e){var n=r.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=l(e.components);return r.a.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},d=r.a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(t),d=i,g=u["".concat(c,".").concat(d)]||u[d]||m[d]||o;return t?r.a.createElement(g,a(a({ref:n},s),{},{components:t})):r.a.createElement(g,a({ref:n},s))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,c=new Array(o);c[0]=d;var a={};for(var p in n)hasOwnProperty.call(n,p)&&(a[p]=n[p]);a.originalType=e,a.mdxType="string"==typeof e?e:i,c[1]=a;for(var s=2;s<o;s++)c[s]=t[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},89:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return a})),t.d(n,"toc",(function(){return p})),t.d(n,"default",(function(){return l}));var i=t(3),r=t(7),o=(t(0),t(150)),c={id:"migrating-from-rich-content",title:"Migrating from rich-content",sidebar_label:"RichContent -> Ricos"},a={unversionedId:"ricos/migrations/migrating-from-rich-content",id:"ricos/migrations/migrating-from-rich-content",isDocsHomePage:!1,title:"Migrating from rich-content",description:"This section is intended for users of the legacy RichContentEditor & RichContentViewer API.",source:"@site/docs/ricos/migrations/migrating-from-rich-content.md",slug:"/ricos/migrations/migrating-from-rich-content",permalink:"/ricos/docs/ricos/migrations/migrating-from-rich-content",editUrl:"https://github.com/wix/ricos/edit/master/website/docs/ricos/migrations/migrating-from-rich-content.md",version:"current",sidebar_label:"RichContent -> Ricos",sidebar:"ricos",previous:{title:"Migrating to Version 7",permalink:"/ricos/docs/ricos/migrations/v6-to-v7"}},p=[{value:"Motivation",id:"motivation",children:[]},{value:"Getting started",id:"getting-started",children:[{value:"Existing consumers",id:"existing-consumers",children:[]},{value:"Examples",id:"examples",children:[]},{value:"Wrapping the RCV",id:"wrapping-the-rcv",children:[]}]}],s={toc:p};function l(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(i.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This section is intended for users of the legacy RichContentEditor & RichContentViewer API."),Object(o.b)("h2",{id:"motivation"},"Motivation"),Object(o.b)("p",null,"The motivation behind this project is to provide a better user experience for ",Object(o.b)("inlineCode",{parentName:"p"},"rich-content")," consumers."),Object(o.b)("p",null,"The core idea is to wrap the ",Object(o.b)("inlineCode",{parentName:"p"},"RichContentEditor"),"/",Object(o.b)("inlineCode",{parentName:"p"},"RichContentViewer"),' with a "transparent" wrapper which would provide convenient default configuration to its child component, while maintaining it fully backwards-compatible for existing applications. The three main goals are:'),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"simpler API and configuration"),Object(o.b)("li",{parentName:"ul"},"less breaking changes"),Object(o.b)("li",{parentName:"ul"},"reduced amount of code duplication between consumers via providing a default implementation")),Object(o.b)("h2",{id:"getting-started"},"Getting started"),Object(o.b)("h3",{id:"existing-consumers"},"Existing consumers"),Object(o.b)("p",null,"Existing consumers can gradually integrate Ricos into their code. The Ricos wrapper provides a configuration to its children based on its own properties. Any props that are passed directly to the child override the wrapper's ones."),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)("h4",{id:"wrapping-the-rce-with-ricos"},"Wrapping the RCE with Ricos"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-jsx"}),"import { RicosEditor } from 'ricos-editor';\nimport { RichContentEditor } from 'wix-rich-content-editor';\n\nimport { pluginGiphy } from 'wix-rich-content-plugin-giphy';\nimport { pluginImage } from 'wix-rich-content-plugin-image';\nimport { pluginVideo } from 'wix-rich-content-plugin-video';\n\n...\n\nclass App extends Component {\n\n  render() {\n  ...\n    return (\n      <RicosEditor\n        content={initialState}\n        theme={{ palette: site_palette }}\n        locale={'he'}\n        plugins={[pluginVideo(), pluginImage(), pluginGiphy({ giphySdkApiKey: 'secret_key' })]}\n        isMobile={mobile}\n      >\n        <RichContentEditor placeholder={'Type here!'} />\n      </RicosEditor>\n    );\n  }\n}\n")),Object(o.b)("h3",{id:"wrapping-the-rcv"},"Wrapping the RCV"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-jsx"}),"import { RicosViewer } from 'ricos-viewer';\nimport { RichContentViewer} from 'wix-rich-content-viewer';\n\nimport { pluginGiphy } from 'wix-rich-content-plugin-giphy/viewer';\nimport { pluginImage } from 'wix-rich-content-plugin-image/viewer';\nimport { pluginVideo } from 'wix-rich-content-plugin-video/viewer';\n\n...\n\nclass App extends Component {\n\n  render() {\n  ...\n    return (\n      <RicosViewer\n        content={initialState}\n        locale={'he'}\n        plugins={[pluginVideo(), pluginImage(), pluginGiphy()]}\n        isMobile={mobile}\n      >\n        <RichContentViewer />\n      </RicosViewer>\n    );\n  }\n}\n")),Object(o.b)("p",null,Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"../ricos-api"}),"API Reference Here")))}l.isMDXComponent=!0}}]);