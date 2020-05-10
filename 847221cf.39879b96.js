(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{135:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return p})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return g})),n.d(t,"default",(function(){return b}));var i=n(1),s=n(6),a=(n(0),n(160)),o=n(316),r=n(757),c=n(759),d=n(760),l=(n(93),n(94),n(95),n(765)),m=n(766),p={id:"adding-a-viewer",title:"Introducing the rich content viewer",sidebar_label:"Add a viewer"},u={id:"ricos/adding-a-viewer",title:"Introducing the rich content viewer",description:"Now that you have an editor, let's add a viewer to display the content it creates.",source:"@site/docs/ricos/adding-a-viewer.mdx",permalink:"/rich-content/docs/ricos/adding-a-viewer",sidebar_label:"Add a viewer",sidebar:"ricos",previous:{title:"Quick Start",permalink:"/rich-content/docs/ricos/quick-start"},next:{title:"Migrating from rich-content",permalink:"/rich-content/docs/ricos/migrating-from-rich-content"}},g=[],h={rightToc:g};function b(e){var t=e.components,n=Object(s.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},h,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Now that you have an editor, let's add a viewer to display the content it creates."),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-bash"}),"npm i ricos-viewer // TODO: complete the required package list\n")),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-jsx"}),'import { RicosViewer } from "ricos-viewer";\n\nconst content = {\n  blocks: [\n    {\n      key: "d79aa",\n      text: "Hi there! I\'m Ricos, your rich content framework. \ud83d\udc7e",\n      type: "header-two",\n      depth: 0,\n      inlineStyleRanges: [],\n      entityRanges: [],\n      data: {}\n    }\n  ],\n  entityMap: {},\n  VERSION: "7.5.0"\n};\n\n<RicosViewer initialState={content} />\n')),Object(a.b)("div",{className:"card"},Object(a.b)(o.a,{mdxType:"RichContentWrapper"},Object(a.b)(r.a,{initialState:l,mdxType:"RichContentViewer"}))),Object(a.b)("p",null,"Now let's add some plugins to add ability of displaying plugin content."),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-bash"}),"npm i wix-rich-content-plugin-video wix-rich-content-plugin-divider\n")),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-jsx"}),'import { WixRichContent } from "@wix/rich-content";\nimport { RichContentEditor } from "wix-rich-content-editor";\n\nimport { pluginVideo } from "wix-rich-content-plugin-video/dist/module.viewer.cjs";\nimport "wix-rich-content-plugin-video/dist/styles.min.css";\n\nimport { pluginDivider } from "wix-rich-content-plugin-divider/dist/module.viewer.cjs";\nimport "wix-rich-content-plugin-divider/dist/styles.min.css";\n\n<RicosViewer\n  initialState={contentWithPlugins}\n  plugins={[pluginDivider(), pluginVideo()]}\n/>\n')),Object(a.b)("div",{className:"card"},Object(a.b)(o.a,{plugins:[Object(c.pluginDivider)(),Object(d.pluginVideo)()],mdxType:"RichContentWrapper"},Object(a.b)(r.a,{initialState:m,mdxType:"RichContentViewer"}))))}b.isMDXComponent=!0},389:function(e,t,n){var i={"./messages_ar.json":[436,63],"./messages_bg.json":[437,64],"./messages_cs.json":[438,65],"./messages_da.json":[439,66],"./messages_de.json":[440,67],"./messages_el.json":[441,68],"./messages_en.json":[210],"./messages_es.json":[442,69],"./messages_fi.json":[443,70],"./messages_fr.json":[444,71],"./messages_he.json":[445,72],"./messages_hi.json":[446,73],"./messages_hu.json":[447,74],"./messages_id.json":[448,75],"./messages_it.json":[449,76],"./messages_ja.json":[450,77],"./messages_ko.json":[451,78],"./messages_lt.json":[452,79],"./messages_ms.json":[453,80],"./messages_nl.json":[454,81],"./messages_no.json":[455,82],"./messages_pl.json":[456,83],"./messages_pt.json":[457,84],"./messages_ro.json":[458,85],"./messages_ru.json":[459,86],"./messages_sv.json":[460,87],"./messages_th.json":[461,88],"./messages_tl.json":[462,89],"./messages_tr.json":[463,90],"./messages_uk.json":[464,91],"./messages_zh.json":[465,92]};function s(e){if(!n.o(i,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=i[e],s=t[0];return Promise.all(t.slice(1).map(n.e)).then((function(){return n.t(s,3)}))}s.keys=function(){return Object.keys(i)},s.id=389,e.exports=s},765:function(e){e.exports=JSON.parse('{"blocks":[{"key":"d79aa","text":"Hi there! I\'m Ricos, your rich content framework. \ud83d\udc7e","type":"header-two","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{},"VERSION":"7.5.0"}')},766:function(e){e.exports=JSON.parse('{"blocks":[{"key":"d79aa","text":"Hi there! I\'m Ricos, your rich content framework. \ud83d\udc7e","type":"header-two","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"fnevk","text":" ","type":"atomic","depth":0,"inlineStyleRanges":[],"entityRanges":[{"offset":0,"length":1,"key":0}],"data":{}},{"key":"8o7bs","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"6dc41","text":" ","type":"atomic","depth":0,"inlineStyleRanges":[],"entityRanges":[{"offset":0,"length":1,"key":1}],"data":{}},{"key":"2ke8","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{"0":{"type":"wix-draft-plugin-divider","mutability":"IMMUTABLE","data":{"type":"single","config":{"size":"large","alignment":"center","textWrap":"nowrap"}}},"1":{"type":"wix-draft-plugin-video","mutability":"IMMUTABLE","data":{"config":{"size":"content","alignment":"center"},"tempData":false,"src":"https://youtu.be/oCBpJkG6ngE","metadata":{"version":"1.0","thumbnail_url":"https://i.ytimg.com/vi/jhXlnvYZZQs/hqdefault.jpg","provider_url":"https://www.youtube.com/","thumbnail_height":360,"provider_name":"YouTube","width":480,"title":"Wix.com Official 2018 Big Game Ad with Rhett & Link \u2014 Extended Version","author_url":"https://www.youtube.com/user/Wix","html":"<iframe width=\\"480\\" height=\\"270\\" src=\\"https://www.youtube.com/embed/jhXlnvYZZQs?feature=oembed\\" frameborder=\\"0\\" allow=\\"autoplay; encrypted-media\\" allowfullscreen></iframe>","height":270,"author_name":"Wix.com","thumbnail_width":480,"type":"video","video_url":"https://youtu.be/jhXlnvYZZQs"}}}},"VERSION":"7.5.0"}')}}]);