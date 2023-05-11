"use strict";(self.webpackChunkreact_virtuoso=self.webpackChunkreact_virtuoso||[]).push([[7162],{3576:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var o=n(959);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=r,h=m["".concat(s,".").concat(u)]||m[u]||c[u]||a;return n?o.createElement(h,i(i({ref:t},d),{},{components:n})):o.createElement(h,i({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9485:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var o=n(2564),r=n(3102),a=(n(959),n(3576)),i=["components"],l={id:"getting-started",title:"Getting Started with React Virtuoso",sidebar_label:"Getting Started",sidebar_position:1,slug:"/"},s=void 0,p={unversionedId:"getting-started",id:"getting-started",title:"Getting Started with React Virtuoso",description:"React Virtuoso is a family of powerful, easy-to-use React components that display large data sets using virtualized rendering. Unlike other virtualization solutions, the Virtuoso components automatically handle items with variable sizes and changes in items' sizes. The package includes a flat list (Virtuoso ), a grouped list with sticky headers (GroupedVirtuoso),  a grid with a responsive layout (VirtuosoGrid), and a table (TableVirtuoso). The package is tree-shakeable, so your bundle should not be inflated by the components you don't refer to.",source:"@site/docs/getting-started.md",sourceDirName:".",slug:"/",permalink:"/",draft:!1,editUrl:"https://github.com/petyosi/react-virtuoso/edit/master/docs/getting-started.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"getting-started",title:"Getting Started with React Virtuoso",sidebar_label:"Getting Started",sidebar_position:1,slug:"/"},sidebar:"defaultSidebar",next:{title:"Troubleshooting",permalink:"/troubleshooting"}},d={},m=[{value:"Feature Overview ",id:"feature-overview-",level:2},{value:"Installation",id:"installation",level:2},{value:"Grouping",id:"grouping",level:3},{value:"Table",id:"table",level:3},{value:"Grid",id:"grid",level:3},{value:"Footer",id:"footer",level:3},{value:"Pinned Items",id:"pinned-items",level:3},{value:"Scroll to Index",id:"scroll-to-index",level:3},{value:"Customize the Scroll Container",id:"customize-the-scroll-container",level:3},{value:"Performance",id:"performance",level:2},{value:"Gotchas",id:"gotchas",level:2},{value:"Browser Support",id:"browser-support",level:2}],c={toc:m},u="wrapper";function h(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)(u,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"React Virtuoso")," is a family of powerful, easy-to-use React components that display large data sets using ",(0,a.kt)("strong",{parentName:"p"},"virtualized rendering"),". Unlike other virtualization solutions, the Virtuoso components automatically handle items with variable sizes and changes in items' sizes. The package includes a flat list (",(0,a.kt)("inlineCode",{parentName:"p"},"Virtuoso")," ), a grouped list with sticky headers (",(0,a.kt)("inlineCode",{parentName:"p"},"GroupedVirtuoso"),"),  a grid with a responsive layout (",(0,a.kt)("inlineCode",{parentName:"p"},"VirtuosoGrid"),"), and a table (",(0,a.kt)("inlineCode",{parentName:"p"},"TableVirtuoso"),"). The package is tree-shakeable, so your bundle should not be inflated by the components you don't refer to."),(0,a.kt)("h2",{id:"feature-overview-"},"Feature Overview"," "),(0,a.kt)("p",null,"The Virtuoso components support the automatic handling of ",(0,a.kt)("strong",{parentName:"p"},"items with variable heights"),". There's no need for you to hard-code or manually measure item sizes. In addition to automatic handling of the item sizes, the components monitor any changes in the item's sizes (for example, due to content load) and re-adjust the scroll area size. The component container size itself is also monitored, so that the list reacts to browser resizing or sibling elements changing the layout."," "),(0,a.kt)("p",null,"A common use case that's thoroughly covered by the components' API is the ",(0,a.kt)("strong",{parentName:"p"},"bi-directional endless scrolling")," or the ",(0,a.kt)("strong",{parentName:"p"},"press to load")," UI patterns. The components can be configured to ",(0,a.kt)("strong",{parentName:"p"},"start from an initial location"),", thus skipping the initial rendering (and the potential need of data loading) of the topmost list items. The components expose ",(0,a.kt)("inlineCode",{parentName:"p"},"startReached")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"endReached"),"  callback properties, suitable for loading data on demand. After the data has been loaded, You can ",(0,a.kt)("strong",{parentName:"p"},"append")," or ",(0,a.kt)("strong",{parentName:"p"},"prepend")," additional items, while retaining the current scroll location."," "),(0,a.kt)("p",null,"The list components can ",(0,a.kt)("strong",{parentName:"p"},"autoscroll to bottom")," when new items are appended, making it easy to build interfaces like ",(0,a.kt)("strong",{parentName:"p"},"chats")," or ",(0,a.kt)("strong",{parentName:"p"},"live log output"),"."," "),(0,a.kt)("p",null,"The markup of the components is customizable by passing custom components as props, supporting optional ",(0,a.kt)("strong",{parentName:"p"},"Header")," and ",(0,a.kt)("strong",{parentName:"p"},"Footer"),", or even swapping the ",(0,a.kt)("strong",{parentName:"p"},"scroller element with a custom one")," (usually done for the sake of integrating a third party scrollbar library). The customization API makes it easy to combine the components with your UI library of choice (e.g. Material UI), style the items with css-in-js, or even integrate drag-and-drop through a third party library."," "),(0,a.kt)("p",null,"To get a better impression of what's possible, examine the examples in the scenarios section of the documentation, and skim through the API reference."," "),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("p",null,"React virtuoso is distributed as an NPM package, with ",(0,a.kt)("inlineCode",{parentName:"p"},"react")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"react-dom")," being the only peer dependencies. Install ",(0,a.kt)("inlineCode",{parentName:"p"},"react-virtuoso")," in your React project. The package exports the ",(0,a.kt)("inlineCode",{parentName:"p"},"Virtuoso"),",  ",(0,a.kt)("inlineCode",{parentName:"p"},"TableVirtuoso"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"GroupedVirtuoso"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"VirtuosoGrid")," components."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install react-virtuoso\n")),(0,a.kt)("p",null,"Add the Component to your application."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import * as React from 'react'\nimport * as ReactDOM from 'react-dom'\nimport { Virtuoso } from 'react-virtuoso'\n\nconst App = () => (\n  <Virtuoso\n    style={{ height: '400px' }}\n    totalCount={200}\n    itemContent={index => <div>Item {index}</div>}\n  />\n)\n\nReactDOM.render(<App />, document.getElementById('root'))\n")),(0,a.kt)("p",null,"Here's how it looks (live editor):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"import { Virtuoso } from 'react-virtuoso'\n\nexport default function App() {\n  return <Virtuoso\n    style={{ height: \"400px\", }}\n    totalCount={200}\n    itemContent={(index) => <div>Item {index}</div>}\n  />\n}\n")),(0,a.kt)("h3",{id:"grouping"},"Grouping"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"GroupedVirtuoso"),' component is similar to the "flat" ',(0,a.kt)("inlineCode",{parentName:"p"},"Virtuoso"),", with the following differences:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Instead of ",(0,a.kt)("inlineCode",{parentName:"li"},"totalCount"),", the Component accepts ",(0,a.kt)("inlineCode",{parentName:"li"},"groupedCounts: number[]"),", which specifies the amount of items in each group.\nFor example, passing ",(0,a.kt)("inlineCode",{parentName:"li"},"[20, 30]")," will render two groups with 20 and 30 items each;"),(0,a.kt)("li",{parentName:"ul"},"In addition the ",(0,a.kt)("inlineCode",{parentName:"li"},"item")," render prop, the Component requires an additional ",(0,a.kt)("inlineCode",{parentName:"li"},"group")," render prop,\nwhich renders the ",(0,a.kt)("strong",{parentName:"li"},"group header"),". The ",(0,a.kt)("inlineCode",{parentName:"li"},"group")," callback receives the zero-based group index as a parameter;"),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"itemContent")," render prop gets called with an additional second parameter, ",(0,a.kt)("inlineCode",{parentName:"li"},"groupIndex: number"),".")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"import { GroupedVirtuoso } from 'react-virtuoso'\n\n  const groupCounts = []\n  for (let index = 0; index < 1000; index++) {\n    groupCounts.push(10)\n  }\n\nexport default function App() {\n\n  return (\n    <GroupedVirtuoso\n    style={{ height: \"400px\" }}\n      groupCounts={groupCounts}\n      groupContent={index => {\n        return (\n          <div style={{ backgroundColor: 'white' }}>\n            Group {index * 10} &ndash; {index * 10 + 10}\n          </div>\n        )\n      }}\n      itemContent={(index, groupIndex) => {\n        return (\n              <div>Item {groupIndex}.{index}</div>\n        )\n      }}\n    />\n  )\n}\n")),(0,a.kt)("p",null,"Check the\n",(0,a.kt)("a",{parentName:"p",href:"/grouped-numbers"},"grouped numbers"),",\n",(0,a.kt)("a",{parentName:"p",href:"/grouped-by-first-letter"},"grouped by first letter")," and\n",(0,a.kt)("a",{parentName:"p",href:"/grouped-with-load-on-demand"},"groups with load on demand"),"\nexamples."),(0,a.kt)("h3",{id:"table"},"Table"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"TableVirtuoso")," component works like the ",(0,a.kt)("inlineCode",{parentName:"p"},"Virtuoso")," one, but with HTML tables. It supports window scrolling, sticky headers, and fixed columns."),(0,a.kt)("p",null,"Check the ",(0,a.kt)("a",{parentName:"p",href:"/hello-table"},"Basic Table")," example for a sample implementation."),(0,a.kt)("h3",{id:"grid"},"Grid"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"VirtuosoGrid")," component displays ",(0,a.kt)("strong",{parentName:"p"},"same sized items")," in multiple columns.\nThe layout and item sizing is controlled CSS class properties or styled containers,\nwhich allows you to use media queries, min-width, percentage, etc."),(0,a.kt)("p",null,"Check the ",(0,a.kt)("a",{parentName:"p",href:"/grid-responsive-columns"},"responsive grid columns")," example for a sample implementation."),(0,a.kt)("h3",{id:"footer"},"Footer"),(0,a.kt)("p",null,"The Component accepts an optional\n",(0,a.kt)("inlineCode",{parentName:"p"},"footer")," ",(0,a.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/render-props.html"},"render property"),',\nwhich is rendered after all items.\nThe footer can be used to host a "load more" button\nor an indicator that the user has reached the end of the list.'),(0,a.kt)("p",null,"Check the ",(0,a.kt)("a",{parentName:"p",href:"/footer"},"footer"),", ",(0,a.kt)("a",{parentName:"p",href:"/press-to-load-more"},"press load more")," and ",(0,a.kt)("a",{parentName:"p",href:"/endless-scrolling"},"endless scrolling")," examples for practical applications of the footer."),(0,a.kt)("h3",{id:"pinned-items"},"Pinned Items"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Virtuoso")," component accepts an optional ",(0,a.kt)("inlineCode",{parentName:"p"},"topItems"),' property that specifies\nhow many items must remain "pinned" at the top of the list.\nCheck the ',(0,a.kt)("a",{parentName:"p",href:"/top-items"},"top items")," example."),(0,a.kt)("h3",{id:"scroll-to-index"},"Scroll to Index"),(0,a.kt)("p",null,"The Virtuoso components provide an imperative ",(0,a.kt)("inlineCode",{parentName:"p"},"scrollToIndex")," method with an optional ",(0,a.kt)("inlineCode",{parentName:"p"},"align")," that scrolls the specified item into view.\n",(0,a.kt)("inlineCode",{parentName:"p"},"GroupedVirtuoso")," exports convenience callback to obtain the group item indices to scroll to a given group."),(0,a.kt)("p",null,"Check the\n",(0,a.kt)("a",{parentName:"p",href:"/scroll-to-index"},"scroll to index")," and\n",(0,a.kt)("a",{parentName:"p",href:"/scroll-to-group"},"scroll to group"),"\nexamples for possible usage of the method."),(0,a.kt)("h3",{id:"customize-the-scroll-container"},"Customize the Scroll Container"),(0,a.kt)("p",null,"You can swap the Virtuoso scroller implementation to add custom scroll logic or to integrate a custom scrolling library (like ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/malte-wessel/react-custom-scrollbars"},"React scrollbars"),")."),(0,a.kt)("p",null,"Check the ",(0,a.kt)("a",{parentName:"p",href:"/custom-scroll-container"},"custom scroll container")," example for a starting point."),(0,a.kt)("h2",{id:"performance"},"Performance"),(0,a.kt)("p",null,"Several factors affect the component's performance.\nThe first and most important one is the ",(0,a.kt)("em",{parentName:"p"},"size of the visible area"),".\nRedrawing more items takes more time and reduces the frame rate.\nTo see if this affects you, reduce the component width or height;\nSet the ",(0,a.kt)("inlineCode",{parentName:"p"},"style")," property to something like ",(0,a.kt)("inlineCode",{parentName:"p"},"{{width: '200px'}}"),"."),(0,a.kt)("p",null,"Next, if the items are complex or slow to render, use ",(0,a.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/react-api.html#reactmemo"},"React.memo")," for the ",(0,a.kt)("inlineCode",{parentName:"p"},"itemContent")," contents."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"// Item contents are cached properly with React.memo\nconst InnerItem = React.memo(({ index }) => {\n  React.useEffect(() => {\n    console.log('inner mounting', index)\n    return () => {\n      console.log('inner unmounting', index)\n    }\n  }, [index])\n  return <div style={{ height: 30 }}>Item {index}</div>\n})\n\n// The callback is executed often - don't inline complex components in here.\nconst itemContent = (index) => {\n  console.log('providing content', index)\n  return <InnerItem index={index} />\n}\n\nconst App = () => {\n  return <Virtuoso totalCount={100} itemContent={itemContent} style={{ height: 300 }} />\n}\n\nReactDOM.render(<App />, document.getElementById('root'))\n")),(0,a.kt)("p",null,"You can experiment with the ",(0,a.kt)("inlineCode",{parentName:"p"},"overscan")," property that specifies\nhow much more to render in addition to the viewport's visible height.\nFor example, if the component is ",(0,a.kt)("inlineCode",{parentName:"p"},"100px")," tall, setting the ",(0,a.kt)("inlineCode",{parentName:"p"},"overscan"),"\nto ",(0,a.kt)("inlineCode",{parentName:"p"},"150")," will cause the list to render ",(0,a.kt)("strong",{parentName:"p"},"at least")," ",(0,a.kt)("inlineCode",{parentName:"p"},"250px")," of content."),(0,a.kt)("p",null,"In a nutshell, increasing the ",(0,a.kt)("inlineCode",{parentName:"p"},"overscan")," causes less frequent re-renders,\nbut makes each re-render more expensive (because more items will get replaced)."),(0,a.kt)("p",null,"Loading images and displaying complex components while scrolling can cause jank.\nTo fix that, you can hook to the ",(0,a.kt)("inlineCode",{parentName:"p"},"isScrolling")," callback and replace\nthe problematic content in the item with a simplified one.\nCheck the ",(0,a.kt)("a",{parentName:"p",href:"/scroll-handling"},"scroll handling example")," for a possible implementation."),(0,a.kt)("h2",{id:"gotchas"},"Gotchas"),(0,a.kt)("p",null,"Setting ",(0,a.kt)("strong",{parentName:"p"},"CSS margins")," to the content or the item elements is the Kryptonite of Virtuoso's content measuring mechanism - the ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver"},(0,a.kt)("inlineCode",{parentName:"a"},"contentRect")," measurement")," does not include them."),(0,a.kt)("p",null,"If this affects you, the total scroll height will be miscalculated, and the user won't be able to scroll all the way down to the list."),(0,a.kt)("p",null,"To avoid that, if you are putting paragraphs and headings inside the ",(0,a.kt)("inlineCode",{parentName:"p"},"item"),", make sure that the top/bottom elements' margins do not protrude outside of the item container."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"<Virtuoso\n  totalCount={100}\n  item={index => (\n    <div>\n      <p style={{ margin: 0 }}>Item {index}</p>\n    </div>\n  )}\n/>\n")),(0,a.kt)("p",null,"A few more common problems are present in the ",(0,a.kt)("a",{parentName:"p",href:"/troubleshooting"},"troubleshooting section"),"."),(0,a.kt)("h2",{id:"browser-support"},"Browser Support"),(0,a.kt)("p",null,"Virtuoso uses ",(0,a.kt)("inlineCode",{parentName:"p"},"position: sticky")," to keep the virtual viewport at the top of the scroller when in grouped mode. ",(0,a.kt)("a",{parentName:"p",href:"https://caniuse.com/#feat=css-sticky"},"This does not work in IE 11"),"."))}h.isMDXComponent=!0}}]);