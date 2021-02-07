(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{150:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=i.a.createContext({}),b=function(e){var t=i.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=b(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=b(n),m=a,h=d["".concat(r,".").concat(m)]||d[m]||s[m]||o;return n?i.a.createElement(h,c(c({ref:t},p),{},{components:n})):i.a.createElement(h,c({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var p=2;p<o;p++)r[p]=n[p];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},87:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return b}));var a=n(3),i=n(7),o=(n(0),n(150)),r={id:"RichContentPreviewAPI",title:"rich-content-preview",sidebar_label:"Rich Content Preview"},c={unversionedId:"rcp_api/RichContentPreviewAPI",id:"rcp_api/RichContentPreviewAPI",isDocsHomePage:!1,title:"rich-content-preview",description:"Introduction",source:"@site/docs/rcp_api/rich-content-preview.md",slug:"/rcp_api/RichContentPreviewAPI",permalink:"/ricos/docs/rcp_api/RichContentPreviewAPI",editUrl:"https://github.com/wix/ricos/edit/master/website/docs/rcp_api/rich-content-preview.md",version:"current",sidebar_label:"Rich Content Preview",sidebar:"api",previous:{title:"UnsupportedBlocks Plugin",permalink:"/ricos/docs/plugins_api/UnsupportedBlocksPlugin"}},l=[{value:"Introduction",id:"introduction",children:[]},{value:"Architecture",id:"architecture",children:[{value:"Content State Analyzer",id:"content-state-analyzer",children:[]},{value:"Content State Builder",id:"content-state-builder",children:[]},{value:"Rule Engine",id:"rule-engine",children:[]},{value:"Preview Interactions",id:"preview-interactions",children:[]}]},{value:"APIs",id:"apis",children:[{value:"getContentStateMetadata",id:"getcontentstatemetadata",children:[]},{value:"ContentStateBuilder",id:"contentstatebuilder",children:[]}]},{value:"ContentStateTransformation",id:"contentstatetransformation",children:[{value:"Content Interactions",id:"content-interactions",children:[]}]}],p={toc:l};function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"introduction"},"Introduction"),Object(o.b)("p",null,"The Preview project comes to meet the requirement for a brief content preview; similar concept could be found in social media applications."),Object(o.b)("h2",{id:"architecture"},"Architecture"),Object(o.b)("p",null,"The core idea is to transform the content state and to display it within ",Object(o.b)("inlineCode",{parentName:"p"},"RichContentViewer"),". This transformation is a product of content state metadata and a set of rules defined by the consumer. This section discusses the main logic elements required to perform such a transformation."),Object(o.b)("h3",{id:"content-state-analyzer"},"Content State Analyzer"),Object(o.b)("p",null,"The content state analyzer retrives content metadata containing the info regarding the data rather draft block and entity structure."),Object(o.b)("p",null,"For example, the metadata could provide the following details:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"number of images and videos"),Object(o.b)("li",{parentName:"ul"},"length of text (in total and per block)"),Object(o.b)("li",{parentName:"ul"},"lists and code-blocks consisting of multiple sequential blocks are retrieved as a whole")),Object(o.b)("h3",{id:"content-state-builder"},"Content State Builder"),Object(o.b)("p",null,"The content state builder provides a way to create a preview content state using the retrieved metadata. The preview state then can be rendered by ",Object(o.b)("inlineCode",{parentName:"p"},"RichContentViewer"),"."),Object(o.b)("h3",{id:"rule-engine"},"Rule Engine"),Object(o.b)("p",null,"The rule engine provides a way to define transformation rules and to apply them on a given ",Object(o.b)("inlineCode",{parentName:"p"},"ContentState")," according to the metadata."),Object(o.b)("h4",{id:"transformation-rule"},"Transformation Rule"),Object(o.b)("p",null,"The transformation rule consists of condition and transform action."),Object(o.b)("p",null,"Example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"\n  if: metadata => metadata.images.length >= 4\n  then: (metadata, preview) => preview.gallery({\n      items: metadata.images.slice(0, 4),\n      config: { layout: 'grid', imageWidth: 40 }\n  })\n\n")),Object(o.b)("h3",{id:"preview-interactions"},"Preview Interactions"),Object(o.b)("p",null,"The preview interactons allow to expand hidden content. The ",Object(o.b)("inlineCode",{parentName:"p"},"rich-content")," repo introduces 3 predefined intertactions. The Content State Builder exposes methods to add interactions to the preview state, and the ",Object(o.b)("inlineCode",{parentName:"p"},"RichContentViewer")," renders the interacton components."),Object(o.b)("h4",{id:"read-more"},"'Read More'"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"Read More")," interacton relies on ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/xiaody/react-lines-ellipsis"}),"react-lines-ellipsis")," package. It displays required number of lines appended by an ellipsis. Although the package is capable to handle the HTML content, this feature is experimental. The current interacton is limited to work with plain text only. Mouse click expands the full post."),Object(o.b)("h4",{id:"see-full-post"},"'See Full Post'"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"See Full Post")," displays a text label over an overlay. Mouse click expands the full post."),Object(o.b)("h4",{id:"image-counter"},"Image Counter"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"Image Counter")," renders hidden image counter. By default, the counter label placed above the last visible image element. The image elements are selected by ",Object(o.b)("inlineCode",{parentName:"p"},"role='img'")," attribute."),Object(o.b)("h2",{id:"apis"},"APIs"),Object(o.b)("h3",{id:"getcontentstatemetadata"},"getContentStateMetadata"),Object(o.b)("p",null,"The metadata is derived from ContentState and exposes its details:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const metadata = getContentStateMetadata(contentState);\n")),Object(o.b)("p",null,"These details are categorized by content type rather actual ContentState structure."),Object(o.b)("h4",{id:"contentstatemetadataalltext"},"ContentStateMetadata.allText"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"ContentStateMetadata.allText")," exposes all the textual content a string array."),Object(o.b)("h4",{id:"contentstatemetadataplain"},"ContentStateMetadata.plain"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"ContentStateMetadata.plain")," exposes the textual content extracted from the ",Object(o.b)("inlineCode",{parentName:"p"},"unstyled")," blocks as a string array."),Object(o.b)("h4",{id:"contentstatemetadataol"},"ContentStateMetadata.ol"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"ContentStateMetadata.ol")," exposes the textual content extracted from the ordered list blocks as a string array."),Object(o.b)("h4",{id:"contentstatemetadataul"},"ContentStateMetadata.ul"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"ContentStateMetadata.ul")," exposes the textual content extracted from the unordered list blocks as a string array."),Object(o.b)("h4",{id:"contentstatemetadataquotes"},"ContentStateMetadata.quotes"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"ContentStateMetadata.quotes")," exposes the textual content extracted from the ",Object(o.b)("inlineCode",{parentName:"p"},"blockquote")," blocks as a string array."),Object(o.b)("h4",{id:"contentstatemetadatacode"},"ContentStateMetadata.code"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"ContentStateMetadata.code")," exposes the textual content extracted from the ",Object(o.b)("inlineCode",{parentName:"p"},"code-block")," blocks as a string array."),Object(o.b)("h4",{id:"contentstatemetadatah1h2h3h4h5h6"},"ContentStateMetadata.h1/h2/h3/h4/h5/h6"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"ContentStateMetadata.h1/h2/h3/h4/h5/h6")," exposes the textual content extracted from the heading blocks as a string array."),Object(o.b)("h4",{id:"contentstatemetadataimages"},"ContentStateMetadata.images"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"ContentStateMetadata.images")," exposes the data extracted from ",Object(o.b)("inlineCode",{parentName:"p"},"image")," / ",Object(o.b)("inlineCode",{parentName:"p"},"gallery")," / ",Object(o.b)("inlineCode",{parentName:"p"},"giphy")," entities.\nThe image data object structure is:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"\n{\n  url: string,\n  width: integer,\n  height: integer,\n  thumbnail?: string,\n  link?: {\n      url: string,\n      target: string,\n      rel: string,\n  },\n  metadata?: {\n      alt: string,\n      caption: string,\n  }\n}\n\n")),Object(o.b)("p",null,"The properties marked with ",Object(o.b)("inlineCode",{parentName:"p"},"?")," are optional and relevant only for some of the image entities."),Object(o.b)("h4",{id:"contentstatemetadatavideos"},"ContentStateMetadata.videos"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"ContentStateMetadata.videos")," exposes the data extracted from ",Object(o.b)("inlineCode",{parentName:"p"},"video")," / ",Object(o.b)("inlineCode",{parentName:"p"},"sound-cloud")," / ",Object(o.b)("inlineCode",{parentName:"p"},"youtube")," entities."),Object(o.b)("p",null,"The video data object structure is:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"\n{\n  url: string,\n  width: integer,\n  height: integer,\n}\n\n")),Object(o.b)("h4",{id:"contentstatemetadatafiles"},"ContentStateMetadata.files"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"ContentStateMetadata.files")," exposes the data extracted from ",Object(o.b)("inlineCode",{parentName:"p"},"file-upload")," entities."),Object(o.b)("p",null,"The file object structure:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"\n{\n  name: string,\n  fileType: string,\n  url: string,\n}\n\n")),Object(o.b)("h4",{id:"contentstatemetadatamaps"},"ContentStateMetadata.maps"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"ContentStateMetadata.maps")," exposes the data extracted from ",Object(o.b)("inlineCode",{parentName:"p"},"google-map")," entities. The map data structure is similar to ",Object(o.b)("inlineCode",{parentName:"p"},"mapSettings")," object structure (found in the map entity data)."),Object(o.b)("h3",{id:"contentstatebuilder"},"ContentStateBuilder"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"ContentStateBuilder")," exposes API for ContentState generation, based on the Builder design pattern."),Object(o.b)("h4",{id:"content-generation-methods"},"Content generation methods"),Object(o.b)("p",null,"The basic ",Object(o.b)("inlineCode",{parentName:"p"},"ContentStateBuilder")," methods allow to add content elements to the constructed ContentState. The methods named after the content type being added, e.g. is ",Object(o.b)("inlineCode",{parentName:"p"},"image")," method allows to add an image, and ",Object(o.b)("inlineCode",{parentName:"p"},"plain")," method adds plain text. The methods could be chained:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const previewState = new ContentStateBuilder(initialState)\n  .image(imageData, config)\n  .gallery(items, config)\n  .plain(text);\n")),Object(o.b)("h5",{id:"contentstatebuilderplaintext-config"},"ContentStateBuilder.plain(text, config)"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"ContentStateBuilder.plain")," method appends an ",Object(o.b)("inlineCode",{parentName:"p"},"unstyled")," block with given ",Object(o.b)("inlineCode",{parentName:"p"},"text"),". If the ",Object(o.b)("inlineCode",{parentName:"p"},"text")," param is a string array, then it will append block for each string. The optional ",Object(o.b)("inlineCode",{parentName:"p"},"config")," is merged to the block data."),Object(o.b)("h5",{id:"contentstatebuilderultext-config"},"ContentStateBuilder.ul(text, config)"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"ContentStateBuilder.ul")," method appends an ",Object(o.b)("inlineCode",{parentName:"p"},"unordered-list-item")," block with given ",Object(o.b)("inlineCode",{parentName:"p"},"text"),". If the ",Object(o.b)("inlineCode",{parentName:"p"},"text")," param is a string array, then it will append block for each string. The optional ",Object(o.b)("inlineCode",{parentName:"p"},"config")," is merged to the block data."),Object(o.b)("h5",{id:"contentstatebuilderoltext-config"},"ContentStateBuilder.ol(text, config)"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"ContentStateBuilder.ol")," method appends an ",Object(o.b)("inlineCode",{parentName:"p"},"ordered-list-item")," block with given ",Object(o.b)("inlineCode",{parentName:"p"},"text"),". If the ",Object(o.b)("inlineCode",{parentName:"p"},"text")," param is a string array, then it will append block for each string. The optional ",Object(o.b)("inlineCode",{parentName:"p"},"config")," is merged to the block data."),Object(o.b)("h5",{id:"contentstatebuildercodetext-config"},"ContentStateBuilder.code(text, config)"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"ContentStateBuilder.code")," method appends a ",Object(o.b)("inlineCode",{parentName:"p"},"code-block")," block with given ",Object(o.b)("inlineCode",{parentName:"p"},"text"),". If the ",Object(o.b)("inlineCode",{parentName:"p"},"text")," param is a string array, then it will append block for each string. The optional ",Object(o.b)("inlineCode",{parentName:"p"},"config")," is merged to the block data."),Object(o.b)("h5",{id:"contentstatebuilderquotetext-config"},"ContentStateBuilder.quote(text, config)"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"ContentStateBuilder.quote")," method appends a ",Object(o.b)("inlineCode",{parentName:"p"},"blockquote")," block with given ",Object(o.b)("inlineCode",{parentName:"p"},"text"),". If the ",Object(o.b)("inlineCode",{parentName:"p"},"text")," param is a string array, then it will append block for each string. The optional ",Object(o.b)("inlineCode",{parentName:"p"},"config")," is merged to the block data."),Object(o.b)("h5",{id:"contentstatebuilderh1h2h3h4h5h6text-config"},"ContentStateBuilder.h1/h2/h3/h4/h5/h6(text, config)"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"ContentStateBuilder.h1/h2/h3/h4/h5/h6")," methods append a header block with given ",Object(o.b)("inlineCode",{parentName:"p"},"text"),". If the ",Object(o.b)("inlineCode",{parentName:"p"},"text")," param is a string array, then it will append block for each string. The optional ",Object(o.b)("inlineCode",{parentName:"p"},"config")," is merged to the block data."),Object(o.b)("h5",{id:"contentstatebuilderimage-mediainfo-config-overrides-"},"ContentStateBuilder.image({ mediaInfo, config, overrides })"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"ContentStateBuilder.image")," method appends an ",Object(o.b)("inlineCode",{parentName:"p"},"atomic")," block to the ",Object(o.b)("inlineCode",{parentName:"p"},"blocks")," and a ",Object(o.b)("inlineCode",{parentName:"p"},"wix-draft-plugin-image")," entity to the ",Object(o.b)("inlineCode",{parentName:"p"},"entityMap"),". The optional params ",Object(o.b)("inlineCode",{parentName:"p"},"config")," and ",Object(o.b)("inlineCode",{parentName:"p"},"overrides")," are merged with the ",Object(o.b)("inlineCode",{parentName:"p"},"entity.data.config")," and ",Object(o.b)("inlineCode",{parentName:"p"},"entity.data"),", respectively.\nThe ",Object(o.b)("inlineCode",{parentName:"p"},"mediaInfo")," param is expected to be an image data object returned by ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/ricos/docs/rcp_api/RichContentPreviewAPI#contentstatemetadataimages"}),"ContentStateMetadata.images")," method."),Object(o.b)("h5",{id:"contentstatebuildergiphy-mediainfo-config-overrides-"},"ContentStateBuilder.giphy({ mediaInfo, config, overrides })"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"ContentStateBuilder.giphy")," method appends an ",Object(o.b)("inlineCode",{parentName:"p"},"atomic")," block to the ",Object(o.b)("inlineCode",{parentName:"p"},"blocks")," and a ",Object(o.b)("inlineCode",{parentName:"p"},"wix-draft-plugin-giphy")," entity to the ",Object(o.b)("inlineCode",{parentName:"p"},"entityMap"),". The optional params ",Object(o.b)("inlineCode",{parentName:"p"},"config")," and ",Object(o.b)("inlineCode",{parentName:"p"},"overrides")," are merged with the ",Object(o.b)("inlineCode",{parentName:"p"},"entity.data.config")," and ",Object(o.b)("inlineCode",{parentName:"p"},"entity.data"),", respectively.\nThe ",Object(o.b)("inlineCode",{parentName:"p"},"mediaInfo")," param is expected to be an image data object returned by ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/ricos/docs/rcp_api/RichContentPreviewAPI#contentstatemetadataimages"}),"ContentStateMetadata.images")," method."),Object(o.b)("h5",{id:"contentstatebuildergallery-mediainfo-config-overrides-"},"ContentStateBuilder.gallery({ mediaInfo, config, overrides })"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"ContentStateBuilder.gallery")," method appends an ",Object(o.b)("inlineCode",{parentName:"p"},"atomic")," block to the ",Object(o.b)("inlineCode",{parentName:"p"},"blocks")," and a ",Object(o.b)("inlineCode",{parentName:"p"},"wix-draft-plugin-gallery")," entity to the ",Object(o.b)("inlineCode",{parentName:"p"},"entityMap"),". The optional params ",Object(o.b)("inlineCode",{parentName:"p"},"config")," and ",Object(o.b)("inlineCode",{parentName:"p"},"overrides")," are merged with the ",Object(o.b)("inlineCode",{parentName:"p"},"entity.data.config")," and ",Object(o.b)("inlineCode",{parentName:"p"},"entity.data"),", respectively.\nThe ",Object(o.b)("inlineCode",{parentName:"p"},"items")," param is expected to be an array of image data objects returned by ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/ricos/docs/rcp_api/RichContentPreviewAPI#contentstatemetadataimages"}),"ContentStateMetadata.images")," method."),Object(o.b)("h5",{id:"contentstatebuildervideo-mediainfo-config-overrides-"},"ContentStateBuilder.video({ mediaInfo, config, overrides })"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"ContentStateBuilder.video")," method appends an ",Object(o.b)("inlineCode",{parentName:"p"},"atomic")," block to the ",Object(o.b)("inlineCode",{parentName:"p"},"blocks")," and a ",Object(o.b)("inlineCode",{parentName:"p"},"wix-draft-plugin-video")," entity to the ",Object(o.b)("inlineCode",{parentName:"p"},"entityMap"),". The optional params ",Object(o.b)("inlineCode",{parentName:"p"},"config")," and ",Object(o.b)("inlineCode",{parentName:"p"},"overrides")," are merged with the ",Object(o.b)("inlineCode",{parentName:"p"},"entity.data.config")," and ",Object(o.b)("inlineCode",{parentName:"p"},"entity.data"),", respectively.\nThe ",Object(o.b)("inlineCode",{parentName:"p"},"mediaInfo")," param is expected to be a video data object returned by ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/ricos/docs/rcp_api/RichContentPreviewAPI#contentstatemetadatavideos"}),"ContentStateMetadata.videos")," method."),Object(o.b)("h5",{id:"contentstatebuildersoundcloud-mediainfo-config-overrides-"},"ContentStateBuilder.soundCloud({ mediaInfo, config, overrides })"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"ContentStateBuilder.soundCloud")," method appends an ",Object(o.b)("inlineCode",{parentName:"p"},"atomic")," block to the ",Object(o.b)("inlineCode",{parentName:"p"},"blocks")," and a ",Object(o.b)("inlineCode",{parentName:"p"},"wix-draft-plugin-sound-cloud")," entity to the ",Object(o.b)("inlineCode",{parentName:"p"},"entityMap"),". The optional params ",Object(o.b)("inlineCode",{parentName:"p"},"config")," and ",Object(o.b)("inlineCode",{parentName:"p"},"overrides")," are merged with the ",Object(o.b)("inlineCode",{parentName:"p"},"entity.data.config")," and ",Object(o.b)("inlineCode",{parentName:"p"},"entity.data"),", respectively.\nThe ",Object(o.b)("inlineCode",{parentName:"p"},"mediaInfo")," param is expected to be a video data object returned by ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/ricos/docs/rcp_api/RichContentPreviewAPI#contentstatemetadatavideos"}),"ContentStateMetadata.videos")," method."),Object(o.b)("h5",{id:"contentstatebuilderfile-mediainfo-config-overrides-"},"ContentStateBuilder.file({ mediaInfo, config, overrides })"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"ContentStateBuilder.file")," method appends an ",Object(o.b)("inlineCode",{parentName:"p"},"atomic")," block to the ",Object(o.b)("inlineCode",{parentName:"p"},"blocks")," and a ",Object(o.b)("inlineCode",{parentName:"p"},"wix-draft-plugin-file-upload")," entity to the ",Object(o.b)("inlineCode",{parentName:"p"},"entityMap"),". The optional params ",Object(o.b)("inlineCode",{parentName:"p"},"config")," and ",Object(o.b)("inlineCode",{parentName:"p"},"overrides")," are merged with the ",Object(o.b)("inlineCode",{parentName:"p"},"entity.data.config")," and ",Object(o.b)("inlineCode",{parentName:"p"},"entity.data"),", respectively.\nThe ",Object(o.b)("inlineCode",{parentName:"p"},"mediaInfo")," param is expected to be a file data object returned by ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/ricos/docs/rcp_api/RichContentPreviewAPI#contentstatemetadatafiles"}),"ContentStateMetadata.files")," method."),Object(o.b)("h5",{id:"contentstatebuildermap-mediainfo-config-overrides-"},"ContentStateBuilder.map({ mediaInfo, config, overrides })"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"ContentStateBuilder.map")," method appends an ",Object(o.b)("inlineCode",{parentName:"p"},"atomic")," block to the ",Object(o.b)("inlineCode",{parentName:"p"},"blocks")," and a ",Object(o.b)("inlineCode",{parentName:"p"},"wix-draft-plugin-map")," entity to the ",Object(o.b)("inlineCode",{parentName:"p"},"entityMap"),". The optional params ",Object(o.b)("inlineCode",{parentName:"p"},"config")," and ",Object(o.b)("inlineCode",{parentName:"p"},"overrides")," are merged with the ",Object(o.b)("inlineCode",{parentName:"p"},"entity.data.config")," and ",Object(o.b)("inlineCode",{parentName:"p"},"entity.data"),", respectively.\nThe ",Object(o.b)("inlineCode",{parentName:"p"},"mediaInfo")," parameter is expected to be a map data object returned by ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/ricos/docs/rcp_api/RichContentPreviewAPI#contentstatemetadatamaps"}),"ContentStateMetadata.maps")," method."),Object(o.b)("h2",{id:"contentstatetransformation"},"ContentStateTransformation"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"ContentStateTransformation")," represents a rule to be applied on content state in order to achieve the desired preview state:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const transformation = new ContentStateTransformation({ _if, _then, initialPreviewState });\nconst previewState = transformation.apply(contentState);\n")),Object(o.b)("p",null,"In the code fragment above, the ",Object(o.b)("inlineCode",{parentName:"p"},"_if")," and ",Object(o.b)("inlineCode",{parentName:"p"},"_then")," arguments are functions following the convention:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"_if = ContentStateMetadata => boolean;\n\n_then = (ContentStateMetadata, ContentStateBuilder) => ContentStateBuilder;\n")),Object(o.b)("p",null,"The optional argument ",Object(o.b)("inlineCode",{parentName:"p"},"initialPreviewState")," allows to pass an initial preview state."),Object(o.b)("p",null,'The following fragment demonstrates the "if content images > 3 => add a gallery with 3 items" rule definition:'),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const transformation = new ContentStateTransformation({\n  _if: metadata => metadata.images.length > 3,\n  _then: (metadata, preview) =>\n    preview.gallery({\n      mediaInfo: metadata.images.slice(0, 3),\n    }),\n});\nconst preview = transformation.apply(contentState);\n")),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"rule")," method allows to chain multiple rules. They will be applied one after another:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"\nconst transformation = new ContentStateTransformation({ _if: ..., _then: ... })\n  .rule({ _if: ..., _then: ... })\n  .rule({ _if: ..., _then: ... });\n\n")),Object(o.b)("h3",{id:"content-interactions"},"Content Interactions"),Object(o.b)("p",null,"The content interaction indicate that the preview content is collapsed, and provide a way to expand it. Content interactions work at the block level. Every interaction consists of the following elements:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("em",{parentName:"p"},"ContentStateBuilder API")," allows a consumer to add an interaction to the preview state and configure it. These APIs can be chained just like any other ContentStateBuilder method:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"\n  builder.plain('some looong text').readMore({ lines: 5 }).image({ mediaInfo: {...} })\n\n")),Object(o.b)("p",{parentName:"li"},"In this example, the ",Object(o.b)("inlineCode",{parentName:"p"},"readMore")," interaction is being applied to the previous ",Object(o.b)("inlineCode",{parentName:"p"},"plain")," block.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("em",{parentName:"p"},"block data interactions array")," contains configuration data for all the interactions applied to the block")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("em",{parentName:"p"},"UI component")," defines the appearance of the interaction element"))),Object(o.b)("h4",{id:"predefined-interactions"},"Predefined Interactions"),Object(o.b)("h5",{id:"readmore"},"ReadMore"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"ReadMore")," component comes to display a portion of a long text, appending it an ellipsis symbol (",Object(o.b)("inlineCode",{parentName:"p"},"\u2026"),") and label (by default, those are '\u2026 read more').\nThe ContentStateBuilder exposes ",Object(o.b)("inlineCode",{parentName:"p"},"readMore")," API that accepts configuration object:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"\n  {\n    lines: number,\n    label: string,\n    onClick: function,\n    text: string,\n  }\n")),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"text")," field allows to specify the text to be displayed. By default, the text is taken from the wrapped children.\nThe ",Object(o.b)("inlineCode",{parentName:"p"},"onClick")," field is common for all the interactions. It defines the ineraction click behavior, by intercepting the expansion click."),Object(o.b)("h5",{id:"seefullpost"},"SeeFullPost"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"SeeFullPost")," interaction adds an overlay containing a link-like label (by default, it says ",Object(o.b)("inlineCode",{parentName:"p"},"See Full Post"),"). The click on label expands the full content. The settings object:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"  {\n    label: string,\n    overlayStyle: object,\n    labelStyle: object,\n    onClick: function,\n  }\n\n")),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"ContentStateBuilder")," exposes ",Object(o.b)("inlineCode",{parentName:"p"},"seeFullPost")," method that applies the interaction on the previous block data."),Object(o.b)("h5",{id:"imagecounter"},"ImageCounter"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"ImageCounter")," serves as a counter of media entities in collapsed content. The configuration object structure:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"\n  {\n    counter: number,\n    formatLabel: number => string,\n    imageSelector: Array<image> => Array<image>,\n    style: object,\n    onClick: function,\n  }\n\n")),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"counter")," field is self-explanatory, the ",Object(o.b)("inlineCode",{parentName:"p"},"formatLabel")," defines the format of the label. The default implementation is:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"\n  counter => `+ ${ counter }`\n\n")),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"imageSelector")," function selects images that should be decorated by the counter label, among the images found within ",Object(o.b)("inlineCode",{parentName:"p"},"ImageCounter")," children. By default, last image is selected."),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"ContentStateBuilder")," exposes ",Object(o.b)("inlineCode",{parentName:"p"},"imageCounter")," method that applies the interaction on previous block data."),Object(o.b)("h4",{id:"richcontentviewer-integration"},"RichContentViewer Integration"),Object(o.b)("p",null,"RichContentViewer ",Object(o.b)("inlineCode",{parentName:"p"},"config")," prop now allows to pass the preview related configuration, by adding the following entry:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"\n  config: {\n    PREVIEW: {\n      contentInteractionMappers: [ () => Component, ... ],\n      onPreviewExpand: function,\n    }\n  }\n\n")),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"contentInteractionMappers")," field allows to pass the interactions as a function array, similar to the ",Object(o.b)("inlineCode",{parentName:"p"},"typeMappers")," and ",Object(o.b)("inlineCode",{parentName:"p"},"inlineStyleMappers"),". The ",Object(o.b)("inlineCode",{parentName:"p"},"preview")," package exports the ",Object(o.b)("inlineCode",{parentName:"p"},"interactionMap")," API containing three predefined interactions mentioned in previous section."),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"onPreviewExpand")," handler determines the behavior on content expansion. The ",Object(o.b)("inlineCode",{parentName:"p"},"RichContentPreview")," component wraps the ",Object(o.b)("inlineCode",{parentName:"p"},"RichContentViewer")," while providing the default ",Object(o.b)("inlineCode",{parentName:"p"},"PREVIEW")," configuration, interacton map, and default transformation rule:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"\nconst defaultTransformation = new ContentStateTransformation({\n  _if: metadata => metadata.plain.length > 0,\n  _then: (metadata, preview) =>\n    preview.plain(metadata.plain[0].join('')).readMore({ lines: 3 }),\n})\n  .rule({\n    _if: metadata => metadata.images.length > 0 && metadata.images.length < 5,\n    _then: (metadata, preview) =>\n      preview.image({ mediaInfo: metadata.images[0] }).seeFullPost(),\n  })\n  .rule({\n    _if: metadata => metadata.images.length >= 5,\n    _then: (metadata, preview) =>\n      preview\n        .gallery({\n          mediaInfo: metadata.images.slice(0, 4),\n          overrides: {\n            styles: {\n              galleryLayout: 2,\n              ...\n            },\n          },\n        })\n        .imageCounter({ counter: metadata.images.length - 4 }),\n  });\n")),Object(o.b)("p",null,"The default rule displays 3 lines of plain text, and a single image appended by 'See Full Post' label, if the ContentState contains less than 5 images; otherwise, it displays a gallery grid of 4 images with image counter."),Object(o.b)("h4",{id:"custom-interactions"},"Custom Interactions"),Object(o.b)("p",null,"TBD"))}b.isMDXComponent=!0}}]);