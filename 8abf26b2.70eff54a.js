(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{127:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return s}));var a=r(2),n=r(6),o=(r(0),r(188)),l={id:"mui-table-virtual-scroll",title:"Table Virtuoso with Material UI table",sidebar_label:"Material UI Table",slug:"/mui-table-virtual-scroll/"},i={unversionedId:"mui-table-virtual-scroll",id:"mui-table-virtual-scroll",isDocsHomePage:!1,title:"Table Virtuoso with Material UI table",description:"The structure of TableVirtuoso is compatible with the markup of Material UI Table. Notice the adjustment of the borderCollapse styling.",source:"@site/docs/mui-table-virtual-scroll.md",slug:"/mui-table-virtual-scroll/",permalink:"/mui-table-virtual-scroll/",editUrl:"https://github.com/petyosi/react-virtuoso/edit/master/site/docs/mui-table-virtual-scroll.md",version:"current",sidebar_label:"Material UI Table",sidebar:"someSidebar",previous:{title:"Table Virtuoso Example with Fixed Headers",permalink:"/table-fixed-headers/"},next:{title:"Table Virtuoso Example with Fixed Columns",permalink:"/table-fixed-columns/"}},u=[{value:"Material UI Table virtualized with Table Virtuoso",id:"material-ui-table-virtualized-with-table-virtuoso",children:[]}],c={rightToc:u};function s(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The structure of ",Object(o.b)("inlineCode",{parentName:"p"},"TableVirtuoso")," is compatible with the markup of Material UI Table. Notice the adjustment of the ",Object(o.b)("inlineCode",{parentName:"p"},"borderCollapse")," styling."),Object(o.b)("h2",{id:"material-ui-table-virtualized-with-table-virtuoso"},"Material UI Table virtualized with Table Virtuoso"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx",metastring:"live include-data import=@mui/material",live:!0,"include-data":!0,import:"@mui/material"}),"import { TableVirtuoso } from 'react-virtuoso'\nimport { generateUsers } from './data'\nimport React from 'react'\nimport Table from '@mui/material/Table'\nimport TableBody from '@mui/material/TableBody'\nimport TableCell from '@mui/material/TableCell'\nimport TableContainer from '@mui/material/TableContainer'\nimport TableHead from '@mui/material/TableHead'\nimport TableRow from '@mui/material/TableRow'\nimport Paper from '@mui/material/Paper'\n\n// keep table components outside of the component defniition to avoid re-renders.\n// if you need to interact with a state within the component, you can pass the state through the table's `context` prop.\n// its value will be propagaded in the below component `state` prop.\nconst TableComponents = {\n  Scroller: React.forwardRef((props, ref) => <TableContainer component={Paper} {...props} ref={ref} />),\n  Table: (props) => <Table {...props} style={{ borderCollapse: 'separate' }} />,\n  TableHead: TableHead,\n  TableRow: TableRow,\n  TableBody: React.forwardRef((props, ref) => <TableBody {...props} ref={ref} />),\n}\n\nexport default function App() {\n  return (\n    <TableVirtuoso\n      style={{ height: 400 }}\n      data={generateUsers(100)}\n      components={TableComponents}\n      fixedHeaderContent={() => (\n        <TableRow>\n          <TableCell style={{ width: 150, background: 'white' }}>\n            Name\n          </TableCell>\n          <TableCell style={{ background: 'white' }}>\n            Description\n          </TableCell>\n        </TableRow>\n      )}\n      itemContent={(index, user) => (\n        <>\n          <TableCell style={{ width: 150, background: 'white' }}>\n            {user.name}\n          </TableCell>\n          <TableCell style={{ background: 'white'  }}>\n            {user.description}\n          </TableCell>\n        </>\n      )}\n    />\n  )\n}\n")))}s.isMDXComponent=!0},188:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return d}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=n.a.createContext({}),s=function(e){var t=n.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=s(r),m=a,d=p["".concat(l,".").concat(m)]||p[m]||b[m]||o;return r?n.a.createElement(d,i(i({ref:t},c),{},{components:r})):n.a.createElement(d,i({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return n.a.createElement.apply(null,l)}return n.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);