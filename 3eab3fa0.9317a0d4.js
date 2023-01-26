(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{187:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return O}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),l=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,b=p(e,["components","mdxType","originalType","parentName"]),s=l(n),u=r,O=s["".concat(c,".").concat(u)]||s[u]||m[u]||o;return n?a.a.createElement(O,i(i({ref:t},b),{},{components:n})):a.a.createElement(O,i({ref:t},b))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var b=2;b<o;b++)c[b]=n[b];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},95:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return l}));var r=n(2),a=n(6),o=(n(0),n(187)),c={id:"_interfaces_.components",title:"Interface: Components<Data, Context>",sidebar_label:"Components"},i={unversionedId:"api/interfaces/_interfaces_.components",id:"api/interfaces/_interfaces_.components",isDocsHomePage:!1,title:"Interface: Components<Data, Context>",description:'"interfaces".Components',source:"@site/docs/api/interfaces/_interfaces_.components.md",slug:"/api/interfaces/_interfaces_.components",permalink:"/api/interfaces/_interfaces_.components",editUrl:"https://github.com/petyosi/react-virtuoso/edit/master/site/docs/api/interfaces/_interfaces_.components.md",version:"current",sidebar_label:"Components",sidebar:"someSidebar",previous:{title:"Table Virtuoso API Reference",permalink:"/table-virtuoso-api-reference/"},next:{title:"Interface: ComputeItemKey<D, C>",permalink:"/api/interfaces/_interfaces_.computeitemkey"}},p=[{value:"Type parameters",id:"type-parameters",children:[]},{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"EmptyPlaceholder",id:"emptyplaceholder",children:[]},{value:"Footer",id:"footer",children:[]},{value:"Group",id:"group",children:[]},{value:"Header",id:"header",children:[]},{value:"Item",id:"item",children:[]},{value:"List",id:"list",children:[]},{value:"ScrollSeekPlaceholder",id:"scrollseekplaceholder",children:[]},{value:"Scroller",id:"scroller",children:[]},{value:"TopItemList",id:"topitemlist",children:[]}]}],b={rightToc:p};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/api/modules/_interfaces_"}),'"interfaces"'),".Components"),Object(o.b)("p",null,"Customize the Virtuoso rendering by passing a set of custom components."),Object(o.b)("h2",{id:"type-parameters"},"Type parameters"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Default"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"Data")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"unknown")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"Context")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"unknown")))),Object(o.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Components"))),Object(o.b)("h2",{id:"properties"},"Properties"),Object(o.b)("h3",{id:"emptyplaceholder"},"EmptyPlaceholder"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.b)("strong",{parentName:"p"},"EmptyPlaceholder"),": React.ComponentType","<","{ context?: Context  }>"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/896bdaf/src/interfaces.ts#L134"}),"interfaces.ts:134"))),Object(o.b)("p",null,"Set to render a custom UI when the list is empty."),Object(o.b)("hr",null),Object(o.b)("h3",{id:"footer"},"Footer"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.b)("strong",{parentName:"p"},"Footer"),": React.ComponentType","<","{ context?: Context  }>"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/896bdaf/src/interfaces.ts#L104"}),"interfaces.ts:104"))),Object(o.b)("p",null,"Set to render a component at the bottom of the list."),Object(o.b)("hr",null),Object(o.b)("h3",{id:"group"},"Group"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.b)("strong",{parentName:"p"},"Group"),": React.ComponentType","<",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/api/modules/_interfaces_#groupprops"}),"GroupProps")," & { context?: Context  }>"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/896bdaf/src/interfaces.ts#L112"}),"interfaces.ts:112"))),Object(o.b)("p",null,"Set to customize the group item wrapping element. Use only if you would like to render list from elements different than a ",Object(o.b)("inlineCode",{parentName:"p"},"div"),"."),Object(o.b)("hr",null),Object(o.b)("h3",{id:"header"},"Header"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.b)("strong",{parentName:"p"},"Header"),": React.ComponentType","<","{ context?: Context  }>"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/896bdaf/src/interfaces.ts#L100"}),"interfaces.ts:100"))),Object(o.b)("p",null,"Set to render a component at the top of the list."),Object(o.b)("p",null,"The header remains above the top items and does not remain sticky."),Object(o.b)("hr",null),Object(o.b)("h3",{id:"item"},"Item"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.b)("strong",{parentName:"p"},"Item"),": React.ComponentType","<",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/api/modules/_interfaces_#itemprops"}),"ItemProps"),"<","Data> & { context?: Context  }>"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/896bdaf/src/interfaces.ts#L108"}),"interfaces.ts:108"))),Object(o.b)("p",null,"Set to customize the item wrapping element. Use only if you would like to render list from elements different than a ",Object(o.b)("inlineCode",{parentName:"p"},"div"),"."),Object(o.b)("hr",null),Object(o.b)("h3",{id:"list"},"List"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.b)("strong",{parentName:"p"},"List"),": React.ComponentType","<",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/api/modules/_interfaces_#listprops"}),"ListProps")," & { context?: Context  }>"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/896bdaf/src/interfaces.ts#L129"}),"interfaces.ts:129"))),Object(o.b)("p",null,"Set to customize the items wrapper. Use only if you would like to render list from elements different than a ",Object(o.b)("inlineCode",{parentName:"p"},"div"),"."),Object(o.b)("hr",null),Object(o.b)("h3",{id:"scrollseekplaceholder"},"ScrollSeekPlaceholder"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.b)("strong",{parentName:"p"},"ScrollSeekPlaceholder"),": React.ComponentType","<",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/api/interfaces/_interfaces_.scrollseekplaceholderprops"}),"ScrollSeekPlaceholderProps")," & { context?: Context  }>"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/896bdaf/src/interfaces.ts#L139"}),"interfaces.ts:139"))),Object(o.b)("p",null,"Set to render an item placeholder when the user scrolls fast.  See the ",Object(o.b)("inlineCode",{parentName:"p"},"scrollSeek")," property for more details."),Object(o.b)("hr",null),Object(o.b)("h3",{id:"scroller"},"Scroller"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.b)("strong",{parentName:"p"},"Scroller"),": React.ComponentType","<",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/api/modules/_interfaces_#scrollerprops"}),"ScrollerProps")," & { context?: Context  }>"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/896bdaf/src/interfaces.ts#L124"}),"interfaces.ts:124"))),Object(o.b)("p",null,"Set to customize the outermost scrollable element. This should not be necessary in general,\nas the component passes its HTML attribute props to it."),Object(o.b)("hr",null),Object(o.b)("h3",{id:"topitemlist"},"TopItemList"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.b)("strong",{parentName:"p"},"TopItemList"),": React.ComponentType","<",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/api/modules/_interfaces_#topitemlistprops"}),"TopItemListProps")," & { context?: Context  }>"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/896bdaf/src/interfaces.ts#L118"}),"interfaces.ts:118"))),Object(o.b)("p",null,"Set to customize the top list item wrapping element. Use if you would like to render list from elements different than a ",Object(o.b)("inlineCode",{parentName:"p"},"div"),"\nor you want to set a custom z-index for the sticky position."))}l.isMDXComponent=!0}}]);