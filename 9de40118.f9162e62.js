(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{124:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var i=n(0),r=n.n(i);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),s=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=s(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),b=s(n),u=i,m=b["".concat(o,".").concat(u)]||b[u]||d[u]||a;return n?r.a.createElement(m,l(l({ref:t},c),{},{components:n})):r.a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},99:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return s}));var i=n(2),r=n(6),a=(n(0),n(124)),o={id:"FlowTypes",title:"Flow Types",sidebar_label:"Flow Types"},l={unversionedId:"plugin-development-guidelines/FlowTypes",id:"plugin-development-guidelines/FlowTypes",isDocsHomePage:!1,title:"Flow Types",description:"Flow Types",source:"@site/docs/plugin-development-guidelines/FlowTypes.md",permalink:"/rich-content/docs/plugin-development-guidelines/FlowTypes",sidebar_label:"Flow Types"},p=[{value:"Motivation",id:"motivation",children:[]},{value:"Infrastructure",id:"infrastructure",children:[]},{value:"Available Types",id:"available-types",children:[{value:"Plugin related types:",id:"plugin-related-types",children:[]},{value:"<code>RichContentEditor</code> configuration related types:",id:"richcontenteditor-configuration-related-types",children:[]}]},{value:"References and examples",id:"references-and-examples",children:[]}],c={rightToc:p};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"flow-types"},"Flow Types"),Object(a.b)("h2",{id:"motivation"},"Motivation"),Object(a.b)("p",null,"In order to make the plugin development easier, some major public API types are defined. The type definitions are implemened with the ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"https://flow.org/"}),"flow")," type system."),Object(a.b)("p",null,"This document describes the ",Object(a.b)("inlineCode",{parentName:"p"},"flow")," types available at the moment, which is subject of changes."),Object(a.b)("h2",{id:"infrastructure"},"Infrastructure"),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"flow")," type system is added to the project root (",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"https://www.npmjs.com/package/flow-bin"}),"flow-bin")," package). The type definitions are found in the default location (",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/wix-incubator/rich-content/blob/develop/flow-typed"}),Object(a.b)("inlineCode",{parentName:"a"},"/flow-typed"))," directory)."),Object(a.b)("p",null,"In addition, all the CSS modules are typed now. The types are generated automatically by ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"https://www.npmjs.com/package/css-modules-flow-types-cli"}),"css-modules-flow-types-cli"),", within ",Object(a.b)("inlineCode",{parentName:"p"},"npm test")," step."),Object(a.b)("p",null,"At the moment, the type definitions are not deployed."),Object(a.b)("h2",{id:"available-types"},"Available Types"),Object(a.b)("h3",{id:"plugin-related-types"},"Plugin related types:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"CreateInlineButtons")," type validates the plugin toolbar button definitions"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"CreateInsertButtons")," type validates the plugin insertion button definitions"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"TextButtonMapper")," type validates the plugin text toolbar button definitions"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"PluginTypeMapper")," type validates the type mapper functions used with ",Object(a.b)("inlineCode",{parentName:"li"},"RichContentViewer"))),Object(a.b)("h3",{id:"richcontenteditor-configuration-related-types"},Object(a.b)("inlineCode",{parentName:"h3"},"RichContentEditor")," configuration related types:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"GetToolbarSettings")," type validates the ",Object(a.b)("inlineCode",{parentName:"li"},"RichContentEditor"),"'s ",Object(a.b)("inlineCode",{parentName:"li"},"config")," prop ",Object(a.b)("inlineCode",{parentName:"li"},"getToolbarSettings")," value (see ",Object(a.b)("a",Object(i.a)({parentName:"li"},{href:"https://github.com/wix-incubator/rich-content/blob/develop/docs/ToolbarCustomization.md"}),"Toolbar Customization")," for details)")),Object(a.b)("h2",{id:"references-and-examples"},"References and examples"),Object(a.b)("p",null,"All the mentioned types are used in existing plugins code. We prefer to use the ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"https://flow.org/en/docs/types/comments/"}),"comment type annotations")," to keep it less intrusive."))}s.isMDXComponent=!0}}]);