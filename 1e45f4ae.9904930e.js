(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{187:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),i=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},s=function(e){var t=i(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=i(n),O=a,d=s["".concat(c,".").concat(O)]||s[O]||m[O]||o;return n?r.a.createElement(d,b(b({ref:t},p),{},{components:n})):r.a.createElement(d,b({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=O;var b={};for(var l in t)hasOwnProperty.call(t,l)&&(b[l]=t[l]);b.originalType=e,b.mdxType="string"==typeof e?e:a,c[1]=b;for(var p=2;p<o;p++)c[p]=n[p];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"},84:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return i}));var a=n(2),r=n(6),o=(n(0),n(187)),c={id:"_interfaces_.tablecomponents",title:"Interface: TableComponents<Data, Context>",sidebar_label:"TableComponents"},b={unversionedId:"api/interfaces/_interfaces_.tablecomponents",id:"api/interfaces/_interfaces_.tablecomponents",isDocsHomePage:!1,title:"Interface: TableComponents<Data, Context>",description:'"interfaces".TableComponents',source:"@site/docs/api/interfaces/_interfaces_.tablecomponents.md",slug:"/api/interfaces/_interfaces_.tablecomponents",permalink:"/api/interfaces/_interfaces_.tablecomponents",editUrl:"https://github.com/petyosi/react-virtuoso/edit/master/site/docs/api/interfaces/_interfaces_.tablecomponents.md",version:"current",sidebar_label:"TableComponents",sidebar:"someSidebar",previous:{title:"Interface: ScrollSeekToggle",permalink:"/api/interfaces/_interfaces_.scrollseektoggle"},next:{title:"Interface: WindowViewportInfo",permalink:"/api/interfaces/_interfaces_.windowviewportinfo"}},l=[{value:"Type parameters",id:"type-parameters",children:[]},{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"EmptyPlaceholder",id:"emptyplaceholder",children:[]},{value:"FillerRow",id:"fillerrow",children:[]},{value:"ScrollSeekPlaceholder",id:"scrollseekplaceholder",children:[]},{value:"Scroller",id:"scroller",children:[]},{value:"Table",id:"table",children:[]},{value:"TableBody",id:"tablebody",children:[]},{value:"TableFoot",id:"tablefoot",children:[]},{value:"TableHead",id:"tablehead",children:[]},{value:"TableRow",id:"tablerow",children:[]}]}],p={rightToc:l};function i(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/api/modules/_interfaces_"}),'"interfaces"'),".TableComponents"),Object(o.b)("p",null,"Customize the TableVirtuoso rendering by passing a set of custom components."),Object(o.b)("h2",{id:"type-parameters"},"Type parameters"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Default"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"Data")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"unknown")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"Context")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"unknown")))),Object(o.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"TableComponents"))),Object(o.b)("h2",{id:"properties"},"Properties"),Object(o.b)("h3",{id:"emptyplaceholder"},"EmptyPlaceholder"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.b)("strong",{parentName:"p"},"EmptyPlaceholder"),": React.ComponentType","<","{ context?: Context  }>"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/896bdaf/src/interfaces.ts#L182"}),"interfaces.ts:182"))),Object(o.b)("p",null,"Set to render a custom UI when the list is empty."),Object(o.b)("hr",null),Object(o.b)("h3",{id:"fillerrow"},"FillerRow"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.b)("strong",{parentName:"p"},"FillerRow"),": React.ComponentType","<",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/api/interfaces/_interfaces_.fillerrowprops"}),"FillerRowProps")," & { context?: Context  }>"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/896bdaf/src/interfaces.ts#L192"}),"interfaces.ts:192"))),Object(o.b)("p",null,"Set to render an empty item placeholder."),Object(o.b)("hr",null),Object(o.b)("h3",{id:"scrollseekplaceholder"},"ScrollSeekPlaceholder"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.b)("strong",{parentName:"p"},"ScrollSeekPlaceholder"),": React.ComponentType","<",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/api/interfaces/_interfaces_.scrollseekplaceholderprops"}),"ScrollSeekPlaceholderProps")," & { context?: Context  }>"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/896bdaf/src/interfaces.ts#L187"}),"interfaces.ts:187"))),Object(o.b)("p",null,"Set to render an item placeholder when the user scrolls fast.  See the ",Object(o.b)("inlineCode",{parentName:"p"},"scrollSeek")," property for more details."),Object(o.b)("hr",null),Object(o.b)("h3",{id:"scroller"},"Scroller"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.b)("strong",{parentName:"p"},"Scroller"),": React.ComponentType","<",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/api/modules/_interfaces_#scrollerprops"}),"ScrollerProps")," & { context?: Context  }>"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/896bdaf/src/interfaces.ts#L172"}),"interfaces.ts:172"))),Object(o.b)("p",null,"Set to customize the outermost scrollable element. This should not be necessary in general,\nas the component passes its HTML attribute props to it."),Object(o.b)("hr",null),Object(o.b)("h3",{id:"table"},"Table"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.b)("strong",{parentName:"p"},"Table"),": React.ComponentType","<",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/api/modules/_interfaces_#tableprops"}),"TableProps")," & { context?: Context  }>"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/896bdaf/src/interfaces.ts#L150"}),"interfaces.ts:150"))),Object(o.b)("p",null,"Set to customize the wrapping ",Object(o.b)("inlineCode",{parentName:"p"},"table")," element."),Object(o.b)("hr",null),Object(o.b)("h3",{id:"tablebody"},"TableBody"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.b)("strong",{parentName:"p"},"TableBody"),": React.ComponentType","<",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/api/modules/_interfaces_#tablebodyprops"}),"TableBodyProps")," & { context?: Context  }>"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/896bdaf/src/interfaces.ts#L177"}),"interfaces.ts:177"))),Object(o.b)("p",null,"Set to customize the items wrapper. Default is ",Object(o.b)("inlineCode",{parentName:"p"},"tbody"),"."),Object(o.b)("hr",null),Object(o.b)("h3",{id:"tablefoot"},"TableFoot"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.b)("strong",{parentName:"p"},"TableFoot"),": React.ComponentType","<","Pick","<","React.ComponentPropsWithRef","<",'"',"tfoot",'"',">, ",'"',"style",'"'," ","|"," ",'"',"ref",'"',"> & { context?: Context  }>"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/896bdaf/src/interfaces.ts#L161"}),"interfaces.ts:161"))),Object(o.b)("p",null,"Set to render a fixed footer at the bottom of the table (",Object(o.b)("inlineCode",{parentName:"p"},"tfoot"),"). use ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/api/interfaces/_component_interfaces_tablevirtuoso_.tablevirtuosoprops#fixedfootercontent"}),"fixedFooterContent")," to set the contents"),Object(o.b)("hr",null),Object(o.b)("h3",{id:"tablehead"},"TableHead"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.b)("strong",{parentName:"p"},"TableHead"),": React.ComponentType","<","Pick","<","React.ComponentPropsWithRef","<",'"',"thead",'"',">, ",'"',"style",'"'," ","|"," ",'"',"ref",'"',"> & { context?: Context  }>"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/896bdaf/src/interfaces.ts#L156"}),"interfaces.ts:156"))),Object(o.b)("p",null,"Set to render a fixed header at the top of the table (",Object(o.b)("inlineCode",{parentName:"p"},"thead"),"). use [","[fixedHeaderHeight]","] to set the contents"),Object(o.b)("hr",null),Object(o.b)("h3",{id:"tablerow"},"TableRow"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.b)("strong",{parentName:"p"},"TableRow"),": React.ComponentType","<",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/api/modules/_interfaces_#itemprops"}),"ItemProps"),"<","Data> & { context?: Context  }>"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/petyosi/react-virtuoso/blob/896bdaf/src/interfaces.ts#L166"}),"interfaces.ts:166"))),Object(o.b)("p",null,"Set to customize the item wrapping element. Default is ",Object(o.b)("inlineCode",{parentName:"p"},"tr"),"."))}i.isMDXComponent=!0}}]);