(this["webpackJsonpearthquake-data"]=this["webpackJsonpearthquake-data"]||[]).push([[0],{666:function(e,t,r){},685:function(e,t,r){},686:function(e,t,r){"use strict";r.r(t);var n=r(59),a=r.n(n),c=r(177),s=r(1),i=r.n(s),o=r(66),l=r(69),u=r.n(l),d=r(114),h=r(10),j=r(13),m=Object(s.createContext)({eqList:[],refreshList:function(){},isLoading:!1,hasNetworkError:!1,lastRefreshed:new Date}),b=function(e){var t=e.children,r=Object(s.useState)([]),n=Object(h.a)(r,2),a=n[0],c=n[1],i=Object(s.useState)(!0),o=Object(h.a)(i,2),l=o[0],b=o[1],O=Object(s.useState)(!1),f=Object(h.a)(O,2),x=f[0],g=f[1],p=Object(s.useState)(new Date),y=Object(h.a)(p,2),k=y[0],v=y[1];Object(s.useEffect)((function(){w()}),[]);var w=function(){var e=Object(d.a)(u.a.mark((function e(){var t,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,b(!0),g(!1),e.next=5,L();case 5:t=e.sent,r=t.map((function(e){var t=e.properties;return{dateOccured:new Date(t.time),magnitude:Number(t.mag.toFixed(2)),moreDetailURL:t.url,location:t.place}})),c(r),v(new Date),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),g(!0);case 14:return e.prev=14,b(!1),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[0,11,14,17]])})));return function(){return e.apply(this,arguments)}}(),L=function(){var e=Object(d.a)(u.a.mark((function e(){var t,r,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson");case 2:if(!(t=e.sent).ok){e.next=11;break}return e.next=6,t.json();case 6:return r=e.sent,n=r.features,e.abrupt("return",n);case 11:throw new Error("network error");case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(j.jsx)(m.Provider,{value:{eqList:a,refreshList:w,isLoading:l,hasNetworkError:x,lastRefreshed:k},children:t})},O=r(694),f=r(106),x=r(693),g=r(190),p=r(690),y=r(158),k=r(435),v=r.n(k),w={networkError:"Unfortunately a network error was encountered. Either the USGS API is down, or there is a problem with your internet connection. Please try again to refresh using the 'Refresh' button or try later. Thank you !",appTitle:"EQ-D",statTotal:"Total Earthquakes in the Past Day (rolling basis)",statMax:"Highest Magnitude Reported",statMin:"Lowest Magnitude Reported",statAvg:"Average Magnitude of Earthquakes (past day)",loading:"Loading...",clickToRefresh:"Click to Refresh Data",listPageHeader:"Tabulated Data of All Earthquakes (Past 24 hours)",listPageBody:"This table list the important information from the USGS 'Past Day' API of reported earthquakes around the world. To sort by magnitude, simply click on the 'Magnitude' column header to toggle through the desired sort order (including to reset with no sorting).",homepageHeader:"Synopsis",homepageGraphTitle:"Number of Earthquakes occurrences per magnitude (rounded down to nearest number)",homepageBody:"This web application pulls in data from the public API of USGS (United States Geological Survey). The USGS updates their data fairly frequently, so all that is needed to refresh the data is click the blue refresh button or refresh the page the traditional way."},L=p.a.Header,M=p.a.Content,R=p.a.Footer,S=function(e){var t=e.children,r=Object(o.f)();return Object(j.jsxs)(p.a,{className:"layout",children:[Object(j.jsxs)(L,{"data-testid":"header",children:[Object(j.jsx)(v.a,{style:{float:"left",color:"white",fontSize:"1.5rem",padding:"1rem 2rem 0 0"},children:w.appTitle}),Object(j.jsxs)(y.a,{theme:"dark",mode:"horizontal",selectedKeys:[r.pathname],children:[Object(j.jsx)(y.a.Item,{children:Object(j.jsx)(c.b,{to:"/",children:"Home"})},"/"),Object(j.jsx)(y.a.Item,{children:Object(j.jsx)(c.b,{to:"/list",children:"List"})},"/list")]})]}),Object(j.jsx)(M,{style:{padding:"2rem 50px"},children:t}),Object(j.jsxs)(R,{style:{textAlign:"center"},children:["Michael Koswara \xa9",(new Date).getFullYear()]})]})},E=r(697),T=r(157),D=function(e){var t=e.message,r=e.showIcon,n=e.showRetryButton,a=e.onRetryClick;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(E.a,{message:"Error",description:t,type:"error",showIcon:r,"data-testid":"error-box"}),n&&a&&Object(j.jsx)("div",{children:Object(j.jsx)(T.a,{type:"primary",onClick:a,style:{marginTop:"1rem"},"data-testid":"retry-button",children:"Refresh"})})]})},N=r(692),P=function(e){var t=e.list,r=e.columns,n=e.className;return Object(j.jsx)(N.a,{dataSource:t,columns:r,className:n,"data-testid":"custom-table"})},F=r(442),C=function(){return Object(j.jsx)(F.a,{size:"large",tip:w.loading,"data-testid":"custom-spinner"})},q=function(e){var t=e.onClick,r=e.type,n=e.text,a=e.className;return Object(j.jsx)(T.a,{type:r||"default",onClick:t,className:a,"data-testid":"custom-button",children:n})},I=r(695),U=(r(666),function(e){var t=e.title,r=e.numberPrecision,n=e.type,a=void 0===n?"neutral":n,c=e.value;return Object(j.jsx)(I.a,{title:t,precision:r,className:a,value:c,"data-testid":"statbox"})}),A=r(4),B=r(696),G=function(e){var t=e.height,r=void 0===t?400:t,n=e.xField,a=e.yField,c={data:e.data,height:r,xField:n,yField:a,point:{size:5,shape:"diamond"}};return Object(j.jsx)(B.a,Object(A.a)({},c))},H=r(16),z=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!e||e.length<1?0:t?Math.max.apply(Math,Object(H.a)(e)):Math.min.apply(Math,Object(H.a)(e))},_=O.a.Title,J=O.a.Paragraph,K=function(){var e=Object(s.useContext)(m),t=e.eqList,r=e.refreshList,n=e.isLoading,a=e.hasNetworkError,c=e.lastRefreshed,i=function(){return[{mag:"0",numOfOccurrence:t.filter((function(e){return 0===Math.floor(e.magnitude)})).length},{mag:"1",numOfOccurrence:t.filter((function(e){return 1===Math.floor(e.magnitude)})).length},{mag:"2",numOfOccurrence:t.filter((function(e){return 2===Math.floor(e.magnitude)})).length},{mag:"3",numOfOccurrence:t.filter((function(e){return 3===Math.floor(e.magnitude)})).length},{mag:"4",numOfOccurrence:t.filter((function(e){return 4===Math.floor(e.magnitude)})).length},{mag:"5",numOfOccurrence:t.filter((function(e){return 5===Math.floor(e.magnitude)})).length},{mag:"6",numOfOccurrence:t.filter((function(e){return 6===Math.floor(e.magnitude)})).length},{mag:"7",numOfOccurrence:t.filter((function(e){return 7===Math.floor(e.magnitude)})).length},{mag:"8",numOfOccurrence:t.filter((function(e){return 8===Math.floor(e.magnitude)})).length},{mag:"9",numOfOccurrence:t.filter((function(e){return 9===Math.floor(e.magnitude)})).length},{mag:"10",numOfOccurrence:t.filter((function(e){return 10===Math.floor(e.magnitude)})).length}]};return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(g.a,{children:Object(j.jsxs)(O.a,{children:[Object(j.jsx)(_,{children:w.homepageHeader}),Object(j.jsx)(J,{children:w.homepageBody})]})}),Object(j.jsxs)(g.a,{gutter:24,justify:n?"center":"start",children:[n&&Object(j.jsx)(f.a,{children:Object(j.jsx)(C,{})}),!n&&!a&&function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(f.a,{xs:24,md:12,xl:6,className:"mb-2",children:Object(j.jsx)(x.a,{children:Object(j.jsx)(U,{title:w.statTotal,value:t.length})})}),Object(j.jsx)(f.a,{xs:24,md:12,xl:4,className:"mb-2",children:Object(j.jsx)(x.a,{children:Object(j.jsx)(U,{title:w.statMax,numberPrecision:2,type:"danger",value:z(t.map((function(e){return e.magnitude})))})})}),Object(j.jsx)(f.a,{xs:24,md:12,xl:4,className:"mb-2",children:Object(j.jsx)(x.a,{children:Object(j.jsx)(U,{title:w.statMin,numberPrecision:2,type:"good",value:z(t.map((function(e){return e.magnitude})),!1)})})}),Object(j.jsx)(f.a,{xs:24,md:12,xl:5,className:"mb-2",children:Object(j.jsx)(x.a,{children:Object(j.jsx)(U,{title:w.statAvg,numberPrecision:2,type:"informational",value:(e=t.map((function(e){return e.magnitude})),e&&e.length?e.reduce((function(e,t){return e+t}),0)/e.length:0)})})}),Object(j.jsx)(f.a,{xs:24,className:"mb-2",children:Object(j.jsxs)(g.a,{children:[Object(j.jsx)(f.a,{xs:24,children:Object(j.jsx)(q,{type:"primary",onClick:r,text:w.clickToRefresh})}),Object(j.jsx)(f.a,{xs:24,children:Object(j.jsxs)(J,{className:"mt-1",children:["last refreshed on ",c.toLocaleString("DE")]})})]})}),Object(j.jsxs)(f.a,{xs:24,children:[Object(j.jsx)(O.a,{children:Object(j.jsx)(_,{level:3,children:w.homepageGraphTitle})}),Object(j.jsx)(G,{xField:"mag",yField:"numOfOccurrence",data:i()})]})]});var e}(),a&&Object(j.jsx)(f.a,{sm:24,children:Object(j.jsx)(D,{message:w.networkError,showIcon:!0,showRetryButton:!0,onRetryClick:r})})]})]})},Q=[{title:"Location / Magnitude / URL",render:function(e){return Object(j.jsxs)(i.a.Fragment,{children:[Object(j.jsx)("b",{children:"Location"}),": ",e.location,Object(j.jsx)("br",{}),Object(j.jsx)("b",{children:"Magnitude"}),": ",e.magnitude,Object(j.jsx)("br",{}),Object(j.jsx)("b",{children:"Date Occurred"}),": ",e.dateOccured.toLocaleString(),Object(j.jsx)("br",{}),Object(j.jsx)("a",{target:"_blank",rel:"noreferrer",href:e.moreDetailURL,children:"Click here for more details"})]})},responsive:["xs"]},{title:"Location",dataIndex:"location",key:"location",responsive:["sm"]},{title:"Magnitude",dataIndex:"magnitude",key:"magnitude",defaultSortOrder:"descend",sorter:function(e,t){return e.magnitude-t.magnitude},responsive:["sm"]},{title:"URL",dataIndex:"moreDetailURL",key:"moreDetailURL",render:function(e){return Object(j.jsx)(i.a.Fragment,{children:Object(j.jsx)("a",{target:"_blank",rel:"noreferrer",href:e,children:"Click here for more details"},"moreDetailURL")})},responsive:["sm"]},{title:"Date Occurred (Central EU Time)",dataIndex:"dateOccured",key:"dateOccured",render:function(e){return Object(j.jsx)(i.a.Fragment,{children:e.toLocaleString()})},responsive:["sm"]}],Y=O.a.Paragraph,V=O.a.Title,W=function(){var e=Object(s.useContext)(m),t=e.eqList,r=e.refreshList,n=e.isLoading,a=e.hasNetworkError,c=e.lastRefreshed;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(g.a,{children:Object(j.jsxs)(O.a,{children:[Object(j.jsx)(V,{children:w.listPageHeader}),Object(j.jsx)(Y,{children:w.listPageBody})]})}),Object(j.jsxs)(g.a,{gutter:16,justify:n?"center":"start",children:[n&&Object(j.jsx)(f.a,{children:Object(j.jsx)(C,{})}),!n&&!a&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)(f.a,{sm:24,children:[Object(j.jsxs)("div",{children:["Total: ",t.length]}),Object(j.jsxs)("div",{children:[Object(j.jsx)(q,{type:"primary",onClick:r,text:w.clickToRefresh,className:"mt-1 mb-1"}),Object(j.jsxs)(Y,{className:"mt-1",children:["last refreshed on ",c.toLocaleString("DE")]})]})]}),Object(j.jsx)(f.a,{sm:24,children:Object(j.jsx)(P,{list:t.map((function(e,t){return Object(A.a)(Object(A.a)({},e),{},{key:t})})),columns:Q})})]}),a&&Object(j.jsx)(f.a,{sm:24,children:Object(j.jsx)(D,{message:w.networkError,showIcon:!0,showRetryButton:!0,onRetryClick:r})})]})]})},X=(r(685),function(){return Object(j.jsx)(b,{children:Object(j.jsx)(S,{children:Object(j.jsxs)(o.c,{children:[Object(j.jsx)(o.a,{exact:!0,path:"/",component:K}),Object(j.jsx)(o.a,{path:"/list",component:W})]})})})});a.a.render(Object(j.jsx)(c.a,{basename:"/EQ-D",children:Object(j.jsx)(X,{})}),document.getElementById("root"))}},[[686,1,2]]]);
//# sourceMappingURL=main.8506c748.chunk.js.map