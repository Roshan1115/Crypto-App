(this.webpackJsonpcryptoapp=this.webpackJsonpcryptoapp||[]).push([[0],{298:function(e,t,c){},300:function(e,t,c){"use strict";c.r(t);var a=c(0),s=c(33),n=c.n(s),r=c(23),i=c(39),l=c(303),j=c(305),o=c(312),d=c(6),h=c(309),b=c(177),u=c(311),x=c(313),O=c(314),p=c(315),m=c(316),v=c(317),g=c.p+"static/media/doge.c7da9b89.png",y=c(2),f=function(){var e=Object(a.useState)(!0),t=Object(d.a)(e,2),c=t[0],s=t[1],n=Object(a.useState)(null),r=Object(d.a)(n,2),l=r[0],o=r[1];return Object(a.useEffect)((function(){var e=function(){return o(window.innerWidth)};return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),Object(a.useEffect)((function(){s(!(l<"800"))}),[l]),Object(y.jsxs)("div",{className:"nav-container",children:[Object(y.jsxs)("div",{className:"logo-container",children:[Object(y.jsx)(h.a,{src:g,size:"large"}),Object(y.jsx)(j.a.Title,{level:2,className:"logo",children:Object(y.jsx)(i.b,{to:"/Crypto-App",children:"Crypto Home"})}),Object(y.jsx)(b.a,{className:"menu-control-container",onClick:function(){return s(!c)},children:Object(y.jsx)(x.a,{})})]}),c&&Object(y.jsxs)(u.a,{theme:"dark",children:[Object(y.jsx)(u.a.Item,{icon:Object(y.jsx)(O.a,{}),children:Object(y.jsx)(i.b,{to:"/Crypto-App",children:"Home"})}),Object(y.jsx)(u.a.Item,{icon:Object(y.jsx)(p.a,{}),children:Object(y.jsx)(i.b,{to:"/Crypto-App/cryptocurrencies",children:"Crypto Currencies"})}),Object(y.jsx)(u.a.Item,{icon:Object(y.jsx)(m.a,{}),children:Object(y.jsx)(i.b,{to:"/Crypto-App/exchanges",children:"Exchanges"})}),Object(y.jsx)(u.a.Item,{icon:Object(y.jsx)(v.a,{}),children:Object(y.jsx)(i.b,{to:"/Crypto-App/news",children:"News"})})]})]})},N=c(37),C=c.n(N),w=c(92),k=c(58),S=c(306),A=c(124),T=c(48),P={"x-rapidapi-host":"coinranking1.p.rapidapi.com","x-rapidapi-key":"bbd7876effmsh6295e9459f7fa68p148a1ejsn38958f0cf2da"},F=function(e){return{url:e,headers:P}},E=Object(A.a)({reducerPath:"CryptoAPI",baseQuery:Object(T.d)({baseUrl:"https://coinranking1.p.rapidapi.com"}),endpoints:function(e){return{getCryptos:e.query({query:function(e){return F("/coins?limit=".concat(e))}}),getDetails:e.query({query:function(e){return F("/coin/".concat(e))}}),getHistory:e.query({query:function(e){var t=e.coinId,c=e.timePeriod;return F("/coin/".concat(t,"/history/").concat(c))}}),getExchanges:e.query({query:function(){return F("/exchanges")}})}}}),M=E.useGetCryptosQuery,I=E.useGetDetailsQuery,q=E.useGetHistoryQuery,$=E.useGetExchangesQuery,L=c(302),D=function(){return Object(y.jsx)("div",{className:"loader",children:Object(y.jsx)(L.a,{})})},H=j.a.Title,U=function(){var e,t=M(10),c=t.data,a=t.isFetching,s=null===c||void 0===c||null===(e=c.data)||void 0===e?void 0:e.stats;return a?Object(y.jsx)(D,{}):Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(H,{level:2,className:"heading",children:"Global Cryptoo Statistics"}),Object(y.jsxs)(w.a,{children:[Object(y.jsx)(k.a,{span:12,children:Object(y.jsx)(S.a,{title:"Total Cryptocurrencies",value:s.total})}),Object(y.jsx)(k.a,{span:12,children:Object(y.jsx)(S.a,{title:"Total Exchanges",value:C()(s.totalExchanges)})}),Object(y.jsx)(k.a,{span:12,children:Object(y.jsx)(S.a,{title:"Total Market Cap",value:C()(s.totalMarketCap)})}),Object(y.jsx)(k.a,{span:12,children:Object(y.jsx)(S.a,{title:"Total 24h Volume",value:C()(s.total24hVolume)})}),Object(y.jsx)(k.a,{span:12,children:Object(y.jsx)(S.a,{title:"Total Market",value:C()(s.totalMarkets)})})]}),Object(y.jsxs)("div",{className:"home-heading-container",children:[Object(y.jsx)(H,{level:2,className:"home-title",children:"Top 10 Crypto Currencies in the world"}),Object(y.jsx)(H,{level:3,className:"show-more",children:Object(y.jsx)(i.b,{to:"/Crypto-App/cryptocurrencies",children:"Show More"})})]}),Object(y.jsx)(B,{simplified:!0}),Object(y.jsxs)("div",{className:"home-heading-container",children:[Object(y.jsx)(H,{level:2,className:"home-title",children:"Latest news about Crypto Currencies"}),Object(y.jsx)(H,{level:3,className:"show-more",children:Object(y.jsx)(i.b,{to:"/Crypto-App/news",children:"Show News"})})]}),Object(y.jsx)(ge,{simplified:!0})]})},V=c(310),Q=c(127),G=j.a.Text,z=V.a.Panel,R=function(){var e,t=$(),c=t.data;if(t.isFetching)return Object(y.jsx)(D,{});var a=null===c||void 0===c||null===(e=c.data)||void 0===e?void 0:e.exchanges;return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)(w.a,{children:[Object(y.jsx)(k.a,{span:6,children:"Exchanges"}),Object(y.jsx)(k.a,{span:6,children:"24h Trade Volume"}),Object(y.jsx)(k.a,{span:6,children:"Markets"}),Object(y.jsx)(k.a,{span:6,children:"Change"})]}),Object(y.jsx)(w.a,{children:a.map((function(e){return Object(y.jsx)(k.a,{span:24,children:Object(y.jsx)(V.a,{children:Object(y.jsx)(z,{showArrow:!1,header:Object(y.jsxs)(w.a,{children:[Object(y.jsxs)(k.a,{span:6,children:[Object(y.jsx)(G,{children:Object(y.jsxs)("strong",{children:[e.rank,"."]})}),Object(y.jsx)(h.a,{className:"exchange-image",src:e.iconUrl}),Object(y.jsx)(G,{children:Object(y.jsx)("strong",{children:e.name})})]}),Object(y.jsxs)(k.a,{span:6,children:["$",C()(e.volume)]}),Object(y.jsx)(k.a,{span:6,children:C()(e.numberOfMarkets)}),Object(y.jsxs)(k.a,{span:6,children:[C()(e.marketShare),"%"]})]},e.id),children:Object(Q.a)(e.description||"")},e.id)})},e.id)}))})]})},J=c(308),W=c(304),B=function(e){var t,c=e.simplified,s=M(c?10:100).data,n=null===s||void 0===s||null===(t=s.data)||void 0===t?void 0:t.coins,r=Object(a.useState)(),l=Object(d.a)(r,2),o=l[0],h=l[1],b=Object(a.useState)(""),u=Object(d.a)(b,2),x=u[0],O=u[1];return Object(a.useEffect)((function(){if(n){var e=n.filter((function(e){return e.name.toLowerCase().includes(x.toLowerCase())}));h(e)}}),[n,x]),o?Object(y.jsxs)(y.Fragment,{children:[!c&&Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(j.a.Title,{level:2,className:"heading",children:"Crypto Currencies"}),Object(y.jsx)("div",{className:"search-crypto",children:Object(y.jsx)(J.a,{placeholder:"Search Crypto Currency",onChange:function(e){return O(e.target.value)}})})]}),Object(y.jsx)(w.a,{gutter:[32,32],className:"crypto-card-container",children:null===o||void 0===o?void 0:o.map((function(e){return Object(y.jsx)(k.a,{xs:24,sm:12,lg:6,className:"crypto-card",children:Object(y.jsx)(i.b,{to:"/Crypto-App/crypto/".concat(e.id),children:Object(y.jsxs)(W.a,{title:"".concat(e.rank,". ").concat(e.name),extra:Object(y.jsx)("img",{className:"crypto-image",src:e.iconUrl,alt:e.name}),hoverable:!0,children:[Object(y.jsxs)("p",{children:["Price: $",C()(e.price)]}),Object(y.jsxs)("p",{children:["Market Cap: $",C()(e.marketCap)]}),Object(y.jsxs)("p",{children:["Daily Change: $",C()(e.change),"%"]})]})})},e.id)}))})]}):Object(y.jsx)(y.Fragment,{children:c?Object(y.jsx)(D,{}):Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(j.a.Title,{level:2,className:"heading",children:"Crypto Currencies"}),Object(y.jsx)(D,{})]})})},Z=c(307),_=c(318),K=c(319),X=c(320),Y=c(321),ee=c(129),te=c(322),ce=c(181),ae=c(178),se=j.a.Title,ne=function(e){for(var t,c=e.coinHistory,a=e.currPrice,s=e.coinName,n=[],r=[],i=0;i<(null===c||void 0===c||null===(l=c.data)||void 0===l||null===(j=l.history)||void 0===j?void 0:j.length);i++){var l,j;n.push(c.data.history[i].price),r.push(new Date(c.data.history[i].timestamp).toLocaleDateString())}var o={labels:r,datasets:[{label:"Price in USD",data:n,fill:!1,backgroundColor:"#0071bd",borderColor:"#0071bd"}]};return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)(w.a,{className:"chart-header",children:[Object(y.jsxs)(se,{level:2,className:"chart-title",children:[s," Price chart"]}),Object(y.jsxs)(k.a,{className:"price-container",children:[Object(y.jsxs)(se,{level:5,className:"price-change",children:[null===c||void 0===c||null===(t=c.data)||void 0===t?void 0:t.change,"%"]}),Object(y.jsxs)(se,{level:5,className:"current-price",children:["Current ",s," Price $",a]})]})]}),Object(y.jsx)(ae.a,{data:o,options:{scales:{yAxes:[{ticks:{beginAtZero:!0}}]}}})]})},re=j.a.Title,ie=j.a.Text,le=Z.a.Option,je=function e(){var t,c=Object(r.g)().coinId,s=Object(a.useState)("7d"),n=Object(d.a)(s,2),i=n[0],l=n[1],j=I(c),o=j.data,h=j.isFetching,b=q({coinId:c,timePeriod:i}).data,u=null===o||void 0===o||null===(t=o.data)||void 0===t?void 0:t.coin;if(h)return Object(y.jsx)(D,{});var x=[{title:"Price to USD",value:"$ ".concat(u.price&&C()(u.price)),icon:Object(y.jsx)(_.a,{})},{title:"Rank",value:u.rank,icon:Object(y.jsx)(K.a,{})},{title:"24h Volume",value:"$ ".concat(u.volume&&C()(u.volume)),icon:Object(y.jsx)(X.a,{})},{title:"Market Cap",value:"$ ".concat(u.marketCap&&C()(u.marketCap)),icon:Object(y.jsx)(_.a,{})},{title:"All-time-high(daily avg.)",value:"$ ".concat(C()(u.allTimeHigh.price)),icon:Object(y.jsx)(Y.a,{})}],O=[{title:"Number Of Markets",value:u.numberOfMarkets,icon:Object(y.jsx)(p.a,{})},{title:"Number Of Exchanges",value:u.numberOfExchanges,icon:Object(y.jsx)(m.a,{})},{title:"Aprroved Supply",value:u.approvedSupply?Object(y.jsx)(ee.a,{}):Object(y.jsx)(te.a,{}),icon:Object(y.jsx)(ce.a,{})},{title:"Total Supply",value:"$ ".concat(C()(u.totalSupply)),icon:Object(y.jsx)(ce.a,{})},{title:"Circulating Supply",value:"$ ".concat(C()(u.circulatingSupply)),icon:Object(y.jsx)(ce.a,{})}];return Object(y.jsx)(y.Fragment,{children:Object(y.jsxs)(k.a,{className:"coin-detail-container",children:[Object(y.jsxs)(k.a,{className:"coin-heading-container",children:[Object(y.jsxs)(re,{level:2,className:"coin-name",children:[e.name," (",u.slug,") Price"]}),Object(y.jsxs)("p",{children:[e.price," Live price in US dollars. View value statistics, market cap and sypply."]})]}),Object(y.jsx)(Z.a,{defaultValue:"7d",placeholder:"Select Time Period",className:"select-timeperiod",onChange:function(e){return l(e)},children:["3h","24h","7d","30d","3m","1y","3y","5y"].map((function(e){return Object(y.jsx)(le,{children:e},e)}))}),Object(y.jsx)(ne,{coinHistory:b,currPrice:C()(u.price),coinName:u.name}),Object(y.jsxs)(k.a,{className:"stats-container",children:[Object(y.jsxs)(k.a,{className:"coin-value-statistics",children:[Object(y.jsxs)(k.a,{className:"coin-value-statistics-heading",children:[Object(y.jsxs)(re,{level:3,className:"coin-detailes-heading",children:[u.name," Value Statistics"]}),Object(y.jsxs)("p",{children:["An overview having statistics of ",u.name]})]}),x.map((function(e){var t=e.title,c=e.value,a=e.icon;return Object(y.jsxs)(k.a,{className:"coin-stats",children:[Object(y.jsxs)(k.a,{className:"coin-stats-name",children:[Object(y.jsx)(ie,{children:a}),Object(y.jsx)(ie,{children:t})]}),Object(y.jsx)(k.a,{className:"stats",children:c})]},t)}))]}),Object(y.jsxs)(k.a,{className:"other-stats-info",children:[Object(y.jsxs)(k.a,{className:"coin-value-statistics-heading",children:[Object(y.jsx)(re,{level:3,className:"coin-detailes-heading",children:"Other Statistics"}),Object(y.jsx)("p",{children:"An overview having statistics of all Cryptocurrencies"})]}),O.map((function(e){var t=e.title,c=e.value,a=e.icon;return Object(y.jsxs)(k.a,{className:"coin-stats",children:[Object(y.jsxs)(k.a,{className:"coin-stats-name",children:[Object(y.jsx)(ie,{children:a}),Object(y.jsx)(ie,{children:t})]}),Object(y.jsx)(k.a,{className:"stats",children:c})]},t)}))]})]}),Object(y.jsxs)(k.a,{className:"coin-desc-link",children:[Object(y.jsx)(w.a,{className:"coin-desc",children:Object(y.jsxs)(re,{level:3,className:"coin-details-heading",children:["What is ",u.name,Object(Q.a)(u.description)]})}),Object(y.jsxs)(k.a,{className:"coin-links",children:[Object(y.jsxs)(re,{level:3,className:"coin-details-heading",children:[u.name," Links"]}),u.links.map((function(e){return Object(y.jsxs)(w.a,{className:"coin-link",children:[Object(y.jsx)(re,{level:5,className:"link-name",children:e.type}),Object(y.jsx)("a",{href:e.url,target:"_blank",rel:"noreferrer",children:e.name})]},e.name)}))]})]})]})})},oe=c(174),de=c.n(oe);c(294).config();var he,be={"x-bingapis-sdk":"true","x-rapidapi-host":"bing-news-search1.p.rapidapi.com","x-rapidapi-key":"bbd7876effmsh6295e9459f7fa68p148a1ejsn38958f0cf2da"},ue=Object(A.a)({reducerPath:"NewsAPI",baseQuery:Object(T.d)({baseUrl:"https://bing-news-search1.p.rapidapi.com"}),endpoints:function(e){return{getNews:e.query({query:function(e){var t=e.category,c=e.count;return{url:"/news/search?q=".concat(t,"&safeSearch=Off&textFormat=Raw&freshness=Day&count=").concat(c),headers:be}}})}}}),xe=ue.useGetNewsQuery,Oe=j.a.Text,pe=j.a.Title,me=Z.a.Option,ve="https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News",ge=function(e){var t,c=e.simplified,s=Object(a.useState)("Cryptocurrency"),n=Object(d.a)(s,2),r=n[0],i=n[1],l=xe({category:r,count:c?6:12}).data,o=M(100).data;return(null===l||void 0===l?void 0:l.value)?Object(y.jsxs)(y.Fragment,{children:[!c&&Object(y.jsx)(j.a.Title,{level:2,className:"heading",children:"Cryptocurrencies News"}),Object(y.jsxs)(w.a,{gutter:[24,24],children:[!c&&Object(y.jsx)(k.a,{span:24,children:Object(y.jsxs)(Z.a,{showSearch:!0,className:"search-news",placeholder:"Search For News",optionFilterProp:"children",onChange:function(e){return i(e)},filterOption:function(e,t){return t.children.toLowerCase().indexOf(e.toLowerCase())>=0},children:[Object(y.jsx)(me,{value:"Cryptocurrency",children:"Cryptocurrency"}),null===o||void 0===o||null===(t=o.data)||void 0===t?void 0:t.coins.map((function(e){return Object(y.jsx)(me,{value:e.name,children:e.name},e.name)}))]})}),l.value.map((function(e,t){var c,a,s,n,r,i;return Object(y.jsx)(k.a,{xs:24,sm:12,lg:8,children:Object(y.jsx)(W.a,{hoverable:!0,className:"news-card",children:Object(y.jsxs)("a",{href:e.url,target:"_blank",rel:"noreferrer",children:[Object(y.jsxs)("div",{className:"news-image-container",children:[Object(y.jsx)(pe,{className:"news-title",level:4,children:e.name}),Object(y.jsx)("img",{style:{maxWidth:"200px",maxHeight:"100px"},src:(null===e||void 0===e||null===(c=e.image)||void 0===c||null===(a=c.thumbnail)||void 0===a?void 0:a.contentUrl)||ve,alt:"News"})]}),Object(y.jsx)("p",{children:e.description>100?"".concat(e.description.substring(0,100),"..."):e.description}),Object(y.jsxs)("div",{className:"provider-container",children:[Object(y.jsxs)("div",{children:[Object(y.jsx)(h.a,{src:(null===(s=e.provider[0])||void 0===s||null===(n=s.image)||void 0===n||null===(r=n.thumbnail)||void 0===r?void 0:r.contentUrl)||ve,alt:"News"}),Object(y.jsx)(Oe,{className:"provider-name",children:null===(i=e.provider[0])||void 0===i?void 0:i.name})]}),Object(y.jsx)(Oe,{children:de()(e.datePublished).startOf("ss").fromNow()})]})]})})},t)}))]})]}):Object(y.jsxs)(y.Fragment,{children:[!c&&Object(y.jsx)(j.a.Title,{level:2,className:"heading",children:"Cryptocurrencies News"}),Object(y.jsx)(D,{})]})},ye=(c(298),function(){return Object(y.jsxs)("div",{className:"app",children:[Object(y.jsx)("div",{className:"navbar",children:Object(y.jsx)(f,{})}),Object(y.jsxs)("div",{className:"main",children:[Object(y.jsx)(l.a,{children:Object(y.jsx)("div",{className:"routes",children:Object(y.jsxs)(r.c,{children:[Object(y.jsx)(r.a,{exact:!0,path:"/Crypto-App",element:Object(y.jsx)(U,{})}),Object(y.jsx)(r.a,{exact:!0,path:"/Crypto-App/exchanges",element:Object(y.jsx)(R,{})}),Object(y.jsx)(r.a,{exact:!0,path:"/Crypto-App/cryptocurrencies",element:Object(y.jsx)(B,{})}),Object(y.jsx)(r.a,{exact:!0,path:"/Crypto-App/crypto/:coinId",element:Object(y.jsx)(je,{})}),Object(y.jsx)(r.a,{exact:!0,path:"/Crypto-App/news",element:Object(y.jsx)(ge,{})})]})})}),Object(y.jsxs)("div",{className:"footer",children:[Object(y.jsxs)(j.a.Title,{level:5,style:{color:"white",textAlign:"center"},children:["Cryto App ",Object(y.jsx)("br",{}),"Designed and developed in reference with JS-Mastery @ Roshan Bishi"]}),Object(y.jsxs)(o.b,{children:[Object(y.jsx)(i.b,{to:"/Crypto-App",children:"Home"}),Object(y.jsx)(i.b,{to:"/Crypto-App/exchanges",children:"Exchanges"}),Object(y.jsx)(i.b,{to:"/Crypto-App/news",children:"News"})]})]})]})]})}),fe=(c(299),c(46)),Ne=c(7),Ce=c(14),we=Object(Ce.a)({reducer:(he={},Object(Ne.a)(he,E.reducerPath,E.reducer),Object(Ne.a)(he,ue.reducerPath,ue.reducer),he)});n.a.render(Object(y.jsx)(i.a,{children:Object(y.jsx)(fe.a,{store:we,children:Object(y.jsx)(ye,{})})}),document.getElementById("root"))}},[[300,1,2]]]);
//# sourceMappingURL=main.38cd8b70.chunk.js.map