(this["webpackJsonpblog-api"]=this["webpackJsonpblog-api"]||[]).push([[0],{30:function(e,t,a){e.exports=a(58)},35:function(e,t,a){},58:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(22),c=a.n(o),l=(a(35),a(23)),i=a(24),s=a(29),u=a(28),m=a(25),p=a.n(m),h=a(26),d=a(1);var _=function(e){return n.a.createElement("header",null,"Blog")};var f=function(e){return n.a.createElement("nav",null,n.a.createElement("button",{type:"button"},"Posts"))};var b=function(e){return n.a.createElement("div",{className:"article"},n.a.createElement("div",{className:"article__author"},n.a.createElement("img",{className:"article__author__img",src:e.authorAvatar,alt:"author"}),n.a.createElement("p",{className:"article__author__title"},e.title),n.a.createElement("p",{className:"article__author__data"},e.data)),n.a.createElement("div",{className:"article__content__imgContainer"},n.a.createElement("img",{src:e.articleImg,alt:"article"})),n.a.createElement("div",{className:"article__description",dangerouslySetInnerHTML:{__html:e.description}}),n.a.createElement("button",{className:"article__btn"},n.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:e.articleUrl},n.a.createElement("span",null,"go to article"))),n.a.createElement("button",{className:"article__btn"},n.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:e.authorUrl},"about author")))};var E=function(e){return n.a.createElement("div",{id:"wrapper"},e.posts.map((function(e){return n.a.createElement(b,{authorAvatar:e.author.avatar_URL,title:e.title,data:e.date.substring(0,10),articleImg:e.featured_image,description:e.content.substring(0,250),articleUrl:e.URL,authorUrl:e.author.profile_URL})})))},g=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={posts:[],queryNumber:6},e.performSearch=function(t){p.a.get("https://public-api.wordpress.com/rest/v1.1/sites/en.blog.wordpress.com/posts/?fields=author,title,date,featured_image,content,URL&number=".concat(t)).then((function(a){e.setState({posts:a.data.posts,queryNumber:t+6})})).catch((function(e){console.log("Error fetching and parsing data",e)}))},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.performSearch(this.state.queryNumber)}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"main-content"},n.a.createElement(_,null),n.a.createElement(f,null),n.a.createElement(h.a,null,n.a.createElement(d.c,null,n.a.createElement(d.a,{path:"/",render:function(){return n.a.createElement(E,{posts:e.state.posts})}}))),n.a.createElement("button",{onClick:function(){return e.performSearch(e.state.queryNumber)},className:"btn-loadMore article__btn blue"},"load more posts"))}}]),a}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[30,1,2]]]);
//# sourceMappingURL=main.4f889d7a.chunk.js.map