(this.webpackJsonpspotify=this.webpackJsonpspotify||[]).push([[0],{53:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n(0),i=n.n(s),a=n(18),r=n.n(a),o=(n(53),n(6)),l=(n(54),n(55),"".concat("https://accounts.spotify.com/authorize","?client_id=").concat("e291520d2b8d4d9dabce8d4d9ae068cf","&redirect_uri=").concat("https://raipeter.github.io/spotify","&scope=").concat(["user-read-playback-position","user-read-email","user-library-modify","playlist-modify-public","ugc-image-upload","user-follow-modify","user-modify-playback-state","user-read-recently-played","user-read-private","user-library-read","user-top-read","playlist-modify-private","user-follow-read","user-read-playback-state","user-read-currently-playing","playlist-read-private","playlist-read-collaborative"].join("%20"),"&response_type=token&show_dialog=true"));var j=function(){return Object(c.jsxs)("div",{className:"login",children:[Object(c.jsx)("img",{src:"https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg",alt:""}),Object(c.jsx)("a",{href:l,children:"LOGIN WITH SPOTIFY"})]})},u=n(30),d=n.n(u);n(56),n(57);var b=function(e){var t=e.playSong,n=e.track;return Object(c.jsxs)("div",{className:"songRow",onClick:function(){return t(n.id)},children:[Object(c.jsx)("img",{className:"songRow__album",src:n.album.images[0].url}),Object(c.jsxs)("div",{className:"songRow__info",children:[Object(c.jsx)("h1",{children:n.name}),Object(c.jsxs)("p",{children:[n.artists.map((function(e){return e.name})).join(", ")," -"," ",n.album.name]})]})]})},p=Object(s.createContext)(),O=function(e){var t=e.initialState,n=e.reducer,i=e.children;return Object(c.jsx)(p.Provider,{value:Object(s.useReducer)(n,t),children:i})},y=function(){return Object(s.useContext)(p)},f=(n(58),n(20)),m=n.n(f),_=n(83);var h=function(){var e,t=y(),n=Object(o.a)(t,2),s=n[0].user;return n[1],Object(c.jsxs)("div",{className:"header",children:[Object(c.jsxs)("div",{className:"header__left",children:[Object(c.jsx)(m.a,{}),Object(c.jsx)("input",{placeholder:"Search for Artists, Songs or Album",type:"text"})]}),Object(c.jsxs)("div",{className:"header__right",children:[Object(c.jsx)(_.a,{src:null===s||void 0===s||null===(e=s.images[0])||void 0===e?void 0:e.url,alt:s}),Object(c.jsx)("h4",{children:null===s||void 0===s?void 0:s.display_name})]})]})},x=n(33),g=n.n(x),v=n(34),T=n.n(v),S=n(35),E=n.n(S);var N=function(e){var t=e.spotify,n=y(),s=Object(o.a)(n,2),i=s[0].discover_weekly,a=s[1],r=function(e){t.play({uris:["spotify:track:".concat(e)]}).then((function(e){t.getMyCurrentPlayingTrack().then((function(e){a({type:"SET_ITEM",item:e.item}),a({type:"SET_PLAYING",playing:!0})}))}))};return Object(c.jsxs)("div",{className:"body",children:[Object(c.jsx)(h,{spotify:t}),Object(c.jsxs)("div",{className:"body__info",children:[Object(c.jsx)("img",{src:null===i||void 0===i?void 0:i.images[0].url}),Object(c.jsxs)("div",{className:"body__infoText",children:[Object(c.jsx)("strong",{children:"PLAYLIST"}),Object(c.jsx)("h2",{children:"Discover Weekly"}),Object(c.jsx)("p",{children:null===i||void 0===i?void 0:i.description})]})]}),Object(c.jsxs)("div",{className:"body__songs",children:[Object(c.jsxs)("div",{className:"body__icons",children:[Object(c.jsx)(g.a,{className:"body__shuffle",onClick:function(e){t.play({context_uri:"spotify:playlist:37i9dQZEVXcJZyENOWUFo7"}).then((function(e){t.getMyCurrentPlayingTrack().then((function(e){a({type:"SET_ITEM",item:e.item}),a({type:"SET_PLAYING",playing:!0})}))}))}}),Object(c.jsx)(T.a,{fontSize:"large"}),Object(c.jsx)(E.a,{})]}),null===i||void 0===i?void 0:i.tracks.items.map((function(e){return Object(c.jsx)(b,{playSong:r,track:e.track})}))]})]})};n(64),n(65),n(66);var I=function(e){var t=e.title,n=void 0===t?"test":t,s=e.Icon;return Object(c.jsxs)("div",{className:"sidebarOption",children:[s&&Object(c.jsx)(s,{className:"sidebarOption__icon"}),s?Object(c.jsx)("h4",{children:n}):Object(c.jsx)("p",{children:n})]})},k=n(36),P=n.n(k),L=n(37),w=n.n(L);var C=function(){var e,t=y(),n=Object(o.a)(t,2),s=n[0].playlists;return n[1],console.log(s),Object(c.jsxs)("div",{className:"sidebar",children:[Object(c.jsx)("img",{className:"sidebar__logo",src:"https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"}),Object(c.jsx)(I,{Icon:P.a,title:"Home"}),Object(c.jsx)(I,{Icon:m.a,title:"Search"}),Object(c.jsx)(I,{Icon:w.a,title:"Your Library"}),Object(c.jsx)("br",{}),Object(c.jsx)("strong",{className:"sidebar__title",children:"PLAYLISTS"}),Object(c.jsx)("hr",{}),null===s||void 0===s||null===(e=s.items)||void 0===e?void 0:e.map((function(e){return Object(c.jsx)(I,{title:e.name})}))]})},Y=(n(67),n(25)),A=n.n(Y),M=n(39),R=n.n(M),G=n(40),F=n.n(G),U=n(38),W=n.n(U),D=n(41),K=n.n(D),V=n(43),z=n.n(V),J=n(42),B=n.n(J),H=n(81),Z=n(82);var Q=function(e){var t=e.spotify,n=y(),i=Object(o.a)(n,2),a=i[0],r=(a.token,a.item),l=a.playing,j=i[1];Object(s.useEffect)((function(){t.getMyCurrentPlaybackState().then((function(e){console.log(e),j({type:"SET_PLAYING",playing:e.is_playing}),j({type:"SET_ITEM",item:e.item})}))}),[t]);var u=function(){l?(t.pause(),j({type:"SET_PLAYING",playing:!1})):(t.play(),j({type:"SET_PLAYING",playing:!0}))};return Object(c.jsxs)("div",{className:"footer",children:[Object(c.jsxs)("div",{className:"footer__left",children:[Object(c.jsx)("img",{className:"footer__albumLogo",src:null===r||void 0===r?void 0:r.album.images[0].url,alt:null===r||void 0===r?void 0:r.name}),r?Object(c.jsxs)("div",{className:"footer__songInfo",children:[Object(c.jsx)("h4",{children:r.name}),Object(c.jsx)("p",{children:r.artists.map((function(e){return e.name})).join(", ")})]}):Object(c.jsxs)("div",{className:"footer__songInfo",children:[Object(c.jsx)("h4",{children:"No song is playing"}),Object(c.jsx)("p",{children:"..."})]})]}),Object(c.jsxs)("div",{className:"footer__center",children:[Object(c.jsx)(W.a,{className:"footer__green"}),Object(c.jsx)(R.a,{onClick:function(){t.skipToPrevious(),t.getMyCurrentPlayingTrack().then((function(e){j({type:"SET_ITEM",item:e.item}),j({type:"SET_PLAYING",playing:!0})}))},classname:"footer__icon"}),Object(c.jsx)(A.a,{onClick:u,fontSize:"large",className:"footer__icon"}),Object(c.jsx)(F.a,{onClick:function(){t.skipToNext(),t.getMyCurrentPlayingTrack().then((function(e){j({type:"SET_ITEM",item:e.item}),j({type:"SET_PLAYING",playing:!0})}))},className:"footer__icon"}),Object(c.jsx)(K.a,{className:"footer__green"})]}),Object(c.jsx)("div",{className:"footer__right",children:Object(c.jsxs)(H.a,{container:!0,spacing:2,children:[Object(c.jsx)(H.a,{item:!0,children:Object(c.jsx)(B.a,{})}),Object(c.jsx)(H.a,{item:!0,children:Object(c.jsx)(z.a,{})}),Object(c.jsx)(H.a,{item:!0,xs:!0,children:Object(c.jsx)(Z.a,{})})]})})]})};var X=function(e){var t=e.spotify;return Object(c.jsxs)("div",{className:"player",children:[Object(c.jsxs)("div",{className:"player__body",children:[Object(c.jsx)(C,{}),Object(c.jsx)(N,{spotify:t})]}),Object(c.jsx)(Q,{spotify:t})]})},q=new d.a;var $=function(){var e=y(),t=Object(o.a)(e,2),n=t[0],i=(n.user,n.token),a=t[1];return Object(s.useEffect)((function(){var e=window.location.hash.substring(1).split("&").reduce((function(e,t){var n=t.split("=");return e[n[0]]=decodeURIComponent(n[1]),e}),{});window.location.hash="";var t=e.access_token;t&&(q.setAccessToken(t),a({type:"SET_TOKEN",token:t}),q.getMyTopArtists().then((function(e){return a({type:"SET_TOP_ARTISTS",top_artists:e})})),a({type:"SET_SPOTIFY",spotify:q}),q.getMe().then((function(e){console.log("persom",e),a({type:"SET_USER",user:e})})),q.getUserPlaylists().then((function(e){a({type:"SET_PLAYLISTS",playlists:e})})),q.getPlaylist("3hwYcpgOUgICPsUW39dVSr").then((function(e){a({type:"SET_DISCOVER_WEEKLY",discover_weekly:e})}))),console.log("I have a token>>>",i)}),[]),Object(c.jsx)("div",{className:"app",children:i?Object(c.jsx)(X,{spotify:q}):Object(c.jsx)(j,{})})},ee=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,85)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),c(e),s(e),i(e),a(e)}))},te=n(4),ne=function(e,t){switch(console.log("action type>>",t),t.type){case"SET_USER":return Object(te.a)(Object(te.a)({},e),{},{user:t.user});case"SET_TOKEN":return Object(te.a)(Object(te.a)({},e),{},{token:t.token});case"SET_PLAYING":return Object(te.a)(Object(te.a)({},e),{},{playing:t.playing});case"SET_ITEM":return Object(te.a)(Object(te.a)({},e),{},{item:t.item});case"SET_PLAYLISTS":return Object(te.a)(Object(te.a)({},e),{},{playlists:t.playlists});case"SET_SPOTIFY":return Object(te.a)(Object(te.a)({},e),{},{spotify:t.spotify});case"SET_TOP_ARTISTS":return Object(te.a)(Object(te.a)({},e),{},{top_artists:t.top_artists});case"SET_DISCOVER_WEEKLY":return Object(te.a)(Object(te.a)({},e),{},{discover_weekly:t.discover_weekly});default:return e}};r.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(O,{initialState:{user:null,playlists:[],spotify:null,top_artists:null,playing:!1,item:null},reducer:ne,children:Object(c.jsx)($,{})})}),document.getElementById("root")),ee()}},[[68,1,2]]]);
//# sourceMappingURL=main.aaf88a52.chunk.js.map