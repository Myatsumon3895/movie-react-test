(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,t,a){e.exports=a.p+"static/media/no_avatar.d5013f6c.jpg"},25:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAQAAACSoYmJAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQfiCAELDjSs9gpXAAADc0lEQVRo3u2aa2+aUByHH7SunW3XJptNsyxLs2zf/yPsgyyd3WLrrSp4AQSBvZilgijnoAhu5/fKHFEez/nfUfsecHSqFA2goMuso4Q+iS+U0S+17dCVkm69F9nMCLRGg/dF861Jw6bFfBM0XHJTNGOCZnSwV4yknNYQU9zPjgI6LgWtoBV0CaSgSwxdfEl1InOxwwQTnxoXnFMtP3SAziNjXAIqnNHgI6dlhx5xz4wADfCZYTPnC28KgRa0aZsWM17LcQ2fPr0d7NtjnvnTgtA647W1Bc+RKldOI1q4eUL7TFkkrFtYGW9r06LHLF9oT2o9TR5txjgM8fODrmzw14pcxAyl08UjYISdJ/RFIl6dswy3tHhcNk8Wo/yg4ZrrtbUajQyR2qeDvnztMcLJD/qUT1zyksIDAqrc0libSKRLpxNacsCEaX7QcM03bnlLlQo13nHHZ2rSt7NordixhsMwgzNLeNI76syw8KlxzlmGWsujix45HR8dm/P8oOGEK662vB8worrlCp0OXgRaw0SnLmlme62nTR64D90sLjuMGqvyGSQmrgNBe3SYMKaJnlBVeCtRI6pJQolwMGidHj5g0EzAMOhucDlXOjPuDdrmifny8A1+YsTefcTaYLkBOmYR0AH9yOFHsX26W3Kfhp1oULlDT+jEDt+gGWIbtLcawEIyM+4F2qWdUGbqS2w7klA2/WiZzCgJbTBMOMghzxuubjLaGDVepeEwkMiMUsnFpYXJHR8iLmXS3tCDBBj8YCGEY2BxIcghtdM6BlOa9Fd226e7Jc4GmILWajESdkYJaIc+DhomD/RDxzLoZuw/opIpUyWgx2FgMnngGR9weMrYfaxrymTf0C5dnNCWTZr08egz3BOyTJkq7IhGLAZY/MJiwCJDI5Csv5nxUuBKwZ126a1FCJPfTPeGLJMZhYc1SV/n73mC6jMQckYh6Je4kb+mQmWqEPQ4NaftSwshZxSAdullavSzKMAQGJYJQBsH22dRZ0wNeQ7dHWaj8vIYcpMyuUqFtnClW/zdFGDvCl3n64EfDWmpw7ZU6FqGOVLe+l+eIxYvBa2gV5Tyv7w50xI8+44jm7GGLgId0KZXNGMCtI8b2e3YTi+kx65F6ChsWkEraAVdQiloBa2gSyAFraAVdAmkoBW0gi6BFLSC/teg/wDzdU0gdcISgQAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOC0wOC0wMVQxMToxNDo1MiswMDowMDNwrd8AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTgtMDgtMDFUMTE6MTQ6NTIrMDA6MDBCLRVjAAAAAElFTkSuQmCC"},27:function(e,t,a){e.exports=a(56)},33:function(e,t,a){},34:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},44:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(13),i=a.n(s),c=(a(33),a(12)),o=a(2),l=a(3),m=a(5),v=a(4),u=a(6),p=a(59),d=a(22),h="4405048a8c55bfa4a338af9a383caa29",f="https://api.themoviedb.org/3",g="/search",w="/movie",E="/discover",L=1,b="page=",_=a(60),N=(a(34),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(v.a)(t).call(this,e))).handleSearchChange=function(e){a.setState({searchTerm:e.target.value})},a.handleSearchSubmit=function(e){e.preventDefault();var t=a.state.searchTerm;a.props.history.push({pathname:"/search",search:"?query=".concat(t)})},a.state={searchTerm:""},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state.searchTerm;return n.a.createElement("div",{className:"SearchBar-wrapper"},n.a.createElement("form",{onSubmit:this.handleSearchSubmit},n.a.createElement("input",{className:"search-movie-input",type:"text",placeholder:"Search...",onChange:this.handleSearchChange,value:e}),n.a.createElement("svg",{className:"search-movie-input-icon",viewBox:"0 0 26 27",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("title",null,"search"),n.a.createElement("path",{d:"M25.64 24.562l-6.42-6.675c1.65-1.962 2.555-4.43 2.555-7C21.775 4.885 16.89 0 10.888 0 4.884 0 0 4.884 0 10.888c0 6.003 4.884 10.887 10.888 10.887 2.253 0 4.4-.68 6.237-1.97l6.467 6.725c.27.28.634.436 1.023.436.37 0 .72-.14.984-.396.564-.543.582-1.444.04-2.008zM10.887 2.84c4.437 0 8.047 3.61 8.047 8.048 0 4.437-3.61 8.047-8.047 8.047-4.438 0-8.048-3.61-8.048-8.047 0-4.438 3.61-8.048 8.048-8.048z"}))))}}]),t}(r.Component)),M=Object(_.a)(N),A=a(58),C=(a(38),function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"App-sidebar"},n.a.createElement("ul",{className:"sidebar-menu"},n.a.createElement("li",{className:"sidebar-menu__item"},n.a.createElement(A.a,{exact:!0,to:"/popular",activeClassName:"is-active"},"Popular")),n.a.createElement("li",{className:"sidebar-menu__item"},n.a.createElement(A.a,{exact:!0,to:"/top-rated",activeClassName:"is-active"},"Top Rated")),n.a.createElement("li",{className:"sidebar-menu__item"},n.a.createElement(A.a,{exact:!0,to:"/upcoming",activeClassName:"is-active"},"Upcoming")),n.a.createElement("li",{className:"sidebar-menu__item sidebar-menu__item--coming-soon"},n.a.createElement(A.a,{exact:!0,to:"/now-playing",activeClassName:"is-active"},"Now Playing"))))}}]),t}(r.Component)),j=(a(39),function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(m.a)(this,Object(v.a)(t).call(this))).toggleUserMenu=function(){e.setState({userMenuOpen:!e.state.userMenuOpen})},e.state={userMenuOpen:!1},e}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"App-header"},n.a.createElement("div",{className:"amovie"},"All movies"),n.a.createElement(M,null),n.a.createElement(C,{filters:this.state.filters,updateFilters:this.updateStateWithFilters,resetFilters:this.resetFilters}))}}]),t}(r.Component)),O=a(8),S=a(16),k=(a(40),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(v.a)(t).call(this,e))).favoriteMovie=function(){a.setState({favorited:!0}),a.props.onFavoriteSelect(a.props.id,"favorites")},a.unfavoriteMovie=function(){a.setState({favorited:!1}),a.props.onFavoriteDeselect(a.props.id,"favorites")},a.addWatchLaterMovie=function(){a.setState({toWatchLater:!0}),a.props.onFavoriteSelect(a.props.id,"watchLater")},a.removeWatchLaterMovie=function(){a.setState({toWatchLater:!1}),a.props.onFavoriteDeselect(a.props.id,"watchLater")},a.titleURL=function(e){return e.replace(/\W+/g,"-").toLowerCase()},a.processLists=function(e,t,r){e&&Object.keys(e).forEach(function(n){e[n]===t&&a.setState(function(){var e={};return e[r]=!0,e})})},a.componentWillMount=function(){a.props.authenticated&&(a.processLists(a.props.favorites,a.props.id,"favorited"),a.processLists(a.props.watchLater,a.props.id,"toWatchLater"))},a.componentWillReceiveProps=function(e){e.authenticated&&(a.processLists(e.watchLater,e.id,"toWatchLater"),a.processLists(e.favorites,a.props.id,"favorited"))},a.renderFavHeart=function(){return a.props.authenticated?a.state.favorited?n.a.createElement("svg",{onClick:function(){return a.unfavoriteMovie()},className:"list__movie-action action__favorite is-true",viewBox:"0 0 13 12",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("path",{d:"M12.903 3.583C12.713 1.507 11.245 0 9.405 0 8.18 0 7.058.66 6.427 1.717 5.8.647 4.725 0 3.52 0 1.68 0 .21 1.507.02 3.583c-.015.092-.076.574.11 1.362.267 1.135.886 2.168 1.79 2.986l4.502 4.087 4.58-4.086c.902-.817 1.52-1.85 1.79-2.985.185-.787.124-1.27.11-1.362z"})):n.a.createElement("svg",{onClick:function(){return a.favoriteMovie()},className:"list__movie-action action__favorite",viewBox:"0 0 13 12",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("path",{d:"M12.903 3.583C12.713 1.507 11.245 0 9.405 0 8.18 0 7.058.66 6.427 1.717 5.8.647 4.725 0 3.52 0 1.68 0 .21 1.507.02 3.583c-.015.092-.076.574.11 1.362.267 1.135.886 2.168 1.79 2.986l4.502 4.087 4.58-4.086c.902-.817 1.52-1.85 1.79-2.985.185-.787.124-1.27.11-1.362z"})):n.a.createElement(S.a,{to:"/login"},n.a.createElement("svg",{className:"list__movie-action action__favorite",viewBox:"0 0 13 12",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("path",{d:"M12.903 3.583C12.713 1.507 11.245 0 9.405 0 8.18 0 7.058.66 6.427 1.717 5.8.647 4.725 0 3.52 0 1.68 0 .21 1.507.02 3.583c-.015.092-.076.574.11 1.362.267 1.135.886 2.168 1.79 2.986l4.502 4.087 4.58-4.086c.902-.817 1.52-1.85 1.79-2.985.185-.787.124-1.27.11-1.362z"})))},a.renderWatchLaterClock=function(){return a.props.authenticated?a.state.toWatchLater?n.a.createElement("svg",{onClick:function(){return a.removeWatchLaterMovie()},className:"list__movie-action action__watchlater is-true",viewBox:"0 0 15 15",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("path",{d:"M7.52.1C3.44.1.14 3.4.14 7.5c0 4.06 3.3 7.37 7.38 7.37s7.38-3.3 7.38-7.4C14.9 3.42 11.6.1 7.52.1zm3.26 9.52c-.12.18-.36.24-.55.12l-2.95-1.9-.05-.03H7.2l-.02-.04-.02-.03-.02-.03-.02-.03v-.04-.08-.05l.02-4.8c0-.23.18-.4.4-.4.2 0 .37.17.38.38l-.02 4.6 2.76 1.78c.2.12.24.37.12.55v.02z"})):n.a.createElement("svg",{onClick:function(){return a.addWatchLaterMovie()},className:"list__movie-action action__watchlater",viewBox:"0 0 15 15",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("path",{d:"M7.52.1C3.44.1.14 3.4.14 7.5c0 4.06 3.3 7.37 7.38 7.37s7.38-3.3 7.38-7.4C14.9 3.42 11.6.1 7.52.1zm3.26 9.52c-.12.18-.36.24-.55.12l-2.95-1.9-.05-.03H7.2l-.02-.04-.02-.03-.02-.03-.02-.03v-.04-.08-.05l.02-4.8c0-.23.18-.4.4-.4.2 0 .37.17.38.38l-.02 4.6 2.76 1.78c.2.12.24.37.12.55v.02z"})):n.a.createElement(S.a,{to:"/login"},n.a.createElement("svg",{className:"list__movie-action action__watchlater",viewBox:"0 0 15 15",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("path",{d:"M7.52.1C3.44.1.14 3.4.14 7.5c0 4.06 3.3 7.37 7.38 7.37s7.38-3.3 7.38-7.4C14.9 3.42 11.6.1 7.52.1zm3.26 9.52c-.12.18-.36.24-.55.12l-2.95-1.9-.05-.03H7.2l-.02-.04-.02-.03-.02-.03-.02-.03v-.04-.08-.05l.02-4.8c0-.23.18-.4.4-.4.2 0 .37.17.38.38l-.02 4.6 2.76 1.78c.2.12.24.37.12.55v.02z"})))},a.state={favorited:!1,toWatchLater:!1},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{key:this.props.id,className:"list-container__movie-item"},n.a.createElement("span",{className:"list__movie-vote-average"},this.props.voteAverage),n.a.createElement("div",{className:"list__movie-image"},this.props.posterPath?n.a.createElement("div",null,n.a.createElement("div",{className:"list__movie-actions"},this.renderFavHeart(),n.a.createElement("svg",{width:"10",height:"15",className:"list__movie-action action__playtrailer",viewBox:"0 0 10 15",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("path",{d:"M.013.135L9.7 7.5.012 14.865"})),this.renderWatchLaterClock()),n.a.createElement(S.a,{className:"list__movie-image-link",to:"/movie/".concat(this.props.id,"-").concat(this.titleURL(this.props.title))},n.a.createElement("img",{src:"https://image.tmdb.org/t/p/w185_and_h278_bestv2".concat(this.props.posterPath),alt:this.props.title}))):n.a.createElement("div",null,n.a.createElement("div",{className:"list__movie-actions"},this.renderFavButton(this.props.id),n.a.createElement("svg",{width:"10",height:"15",className:"list__movie-action action__playtrailer",viewBox:"0 0 10 15",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("path",{d:"M.013.135L9.7 7.5.012 14.865"}))),n.a.createElement(S.a,{to:"/movie/".concat(this.props.id)},n.a.createElement("div",{className:"list__movie-no_image_holder"})))),n.a.createElement("div",{className:"list__movie-title"},this.props.title))}}]),t}(r.Component)),F=(a(41),function(e){var t=e.list.map(function(t){return n.a.createElement(k,{key:t.id,id:t.id,voteAverage:t.vote_average,posterPath:t.poster_path,title:t.title,authenticated:e.authenticated,onFavoriteSelect:function(t,a){return e.addToList(t,a)},onFavoriteDeselect:function(t,a){return e.removeFromList(t,a)},favorites:e.favorites,watchLater:e.watchLater})});return n.a.createElement("div",{className:"list-container"},t)}),x=(a(42),function(e){return n.a.createElement("div",null,n.a.createElement("button",{className:e.className,onClick:e.onClick},e.text))}),y=a(17),W=a.n(y),T=(a(44),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(v.a)(t).call(this,e))).componentDidMount=function(){a.getMovies(L)},a.componentDidUpdate=function(e,t){e.filters!==a.props.filters&&a.getMovies(L)},a.getMovies=function(e){fetch("\n      ".concat(f).concat(E).concat(w,"?api_key=").concat(h,"&").concat(b).concat(e,"\n      &language=en-US&region=us&include_adult=false&vote_count.gte=200\n      &primary_release_year=").concat(a.props.filters.year,"\n        &sort_by=").concat(a.props.filters.sort_by.value,".").concat(a.props.filters.order.value)).then(function(e){return e.json()}).then(function(e){a.setMovies(e)})},a.setMovies=function(e){var t=e.results,r=e.page,n=1!==r?a.state.movies.results:[],s=[].concat(Object(O.a)(n),Object(O.a)(t));a.setState({movies:{results:s,page:r},loading:!1})},a.state={movies:{},loading:!0},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.state.movies,a=t.results,r=t.page;return n.a.createElement("div",{className:"Main-wrapper"},n.a.createElement("h1",{className:"App-main-title Discover-main-title"},this.props.title),n.a.createElement("div",{className:"sort-order"},n.a.createElement("div",{className:"sort-order__item"},n.a.createElement("span",{className:"sort-order-label"},"Sort by"),n.a.createElement(W.a,{className:"test",options:[{value:"popularity",label:"Popularity"},{value:"vote_average",label:"Rating"},{value:"original_title",label:"Original Title"}],value:"".concat(this.props.filters.sort_by.label),onChange:function(t){return e.props.updateFilters(Object(c.a)({},e.props.filters,{sort_by:t}))}})),n.a.createElement("div",{className:"sort-order__item"},n.a.createElement("span",{className:"sort-order-label"},"Order by"),n.a.createElement(W.a,{className:"test",options:[{value:"asc",label:"Ascending"},{value:"desc",label:"Descending"}],value:"".concat(this.props.filters.order.label),onChange:function(t){return e.props.updateFilters(Object(c.a)({},e.props.filters,{order:t}))}}))),a&&n.a.createElement(F,{list:a,addToList:function(t,a){return e.props.addToList(t,a)},removeFromList:function(t,a){return e.props.removeFromList(t,a)},authenticated:this.props.authenticated,favorites:this.props.favorites,watchLater:this.props.watchLater}),n.a.createElement(x,{className:"button",onClick:function(){return e.getMovies(r+1)},text:"Load more"}))}}]),t}(r.Component)),B=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(v.a)(t).call(this,e))).getQueryStrings=function(e){return new URLSearchParams(e).get("query")},a.getSearchMovies=function(e,t){var r=e.replace(/\s/g,"+");fetch("".concat(f).concat(g).concat(w,"?api_key=").concat(h,"&query=").concat(r,"&").concat(b).concat(t)).then(function(e){return e.json()}).then(function(e){a.setSearchMovies(e)})},a.setSearchMovies=function(e){var t=e.results,r=e.page,n=e.total_pages,s=e.total_results,i=1!==r?a.state.movies.results:[],c=[].concat(Object(O.a)(i),Object(O.a)(t));a.setState({movies:{results:c,page:r,total_pages:n,total_results:s},loading:!1})},a.componentDidMount=function(){a.getSearchMovies(a.getQueryStrings(a.props.location.search),L)},a.componentWillReceiveProps=function(e){a.getSearchMovies(a.getQueryStrings(e.location.search),L)},a.state={movies:{},loading:!0},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.state.movies,a=t.page,r=this.getQueryStrings(this.props.location.search);return n.a.createElement("div",{className:"Main-wrapper"},n.a.createElement("h1",{className:"App-main-title"},"Search results"),t.results&&n.a.createElement("div",null,n.a.createElement("p",null,"There are ",n.a.createElement("b",null,t.total_results),' results for: "',r,'".'),n.a.createElement(F,{list:t.results})),n.a.createElement(x,{className:"button",onClick:function(){return e.getSearchMovies(r,a+1)},text:"Load more"}))}}]),t}(r.Component),D=a(11),U=a(23),z=a.n(U),R=a(24),I=a.n(R),Q=a(25),G=a.n(Q),H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"poster";if(!e)return function(e){switch(e){case"avatar":return I.a;case"poster":default:return G.a}}(a);var r=0===t?"":"/w".concat(t);return"https://image.tmdb.org/t/p".concat(r).concat(e)},P=function(e){var t=e.cast;return n.a.createElement("section",{className:"cast-list"},t.map(function(e){return function(e){return n.a.createElement("div",{key:e.id,className:"cast-row"},n.a.createElement("img",{src:H(e.profile_path,92,"avatar"),alt:e.name,className:"actor-img"}),n.a.createElement("div",null,e.name))}(e)}))},J=a(26),Y=a.n(J),V=(a(52),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(v.a)(t).call(this,e))).favoriteMovie=function(){a.setState({favorited:!0}),a.props.onFavoriteSelect(a.state.movie.id,"favorites")},a.unfavoriteMovie=function(){a.setState({favorited:!1}),a.props.onFavoriteDeselect(a.state.movie.id,"favorites")},a.addWatchLaterMovie=function(){a.setState({toWatchLater:!0}),a.props.onFavoriteSelect(a.props.id,"watchLater")},a.removeWatchLaterMovie=function(){a.setState({toWatchLater:!1}),a.props.onFavoriteDeselect(a.props.id,"watchLater")},a.processLists=function(e,t,r){e&&Object.keys(e).forEach(function(n){e[n]===Number(t)&&a.setState(function(){var e={};return e[r]=!0,e})})},a.componentWillMount=function(){var e=a.props.match.params.id;fetch("".concat(f).concat(w,"/").concat(e,"?api_key=").concat(h,"&append_to_response=videos,credits,images")).then(function(e){return e.json()}).then(function(e){return a.setState({movie:e})})},a.componentWillReceiveProps=function(e){e.authenticated&&(a.processLists(e.watchLater,e.id,"toWatchLater"),a.processLists(e.favorites,a.props.id,"favorited"))},a.componentDidMount=function(){a.props.authenticated&&(a.processLists(a.props.favorites,a.props.id,"favorited"),a.processLists(a.props.watchLater,a.props.id,"toWatchLater"))},a.renderFavHeart=function(){return a.props.authenticated?a.state.favorited?n.a.createElement("svg",{onClick:function(){return a.unfavoriteMovie()},className:"movie__action action__favorite is-true",viewBox:"0 0 13 12",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("path",{d:"M12.903 3.583C12.713 1.507 11.245 0 9.405 0 8.18 0 7.058.66 6.427 1.717 5.8.647 4.725 0 3.52 0 1.68 0 .21 1.507.02 3.583c-.015.092-.076.574.11 1.362.267 1.135.886 2.168 1.79 2.986l4.502 4.087 4.58-4.086c.902-.817 1.52-1.85 1.79-2.985.185-.787.124-1.27.11-1.362z"})):n.a.createElement("svg",{onClick:function(){return a.favoriteMovie()},className:"movie__action action__favorite",viewBox:"0 0 13 12",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("path",{d:"M12.903 3.583C12.713 1.507 11.245 0 9.405 0 8.18 0 7.058.66 6.427 1.717 5.8.647 4.725 0 3.52 0 1.68 0 .21 1.507.02 3.583c-.015.092-.076.574.11 1.362.267 1.135.886 2.168 1.79 2.986l4.502 4.087 4.58-4.086c.902-.817 1.52-1.85 1.79-2.985.185-.787.124-1.27.11-1.362z"})):n.a.createElement(S.a,{to:"/login"},n.a.createElement("svg",{className:"movie__action action__favorite",viewBox:"0 0 13 12",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("path",{d:"M12.903 3.583C12.713 1.507 11.245 0 9.405 0 8.18 0 7.058.66 6.427 1.717 5.8.647 4.725 0 3.52 0 1.68 0 .21 1.507.02 3.583c-.015.092-.076.574.11 1.362.267 1.135.886 2.168 1.79 2.986l4.502 4.087 4.58-4.086c.902-.817 1.52-1.85 1.79-2.985.185-.787.124-1.27.11-1.362z"})))},a.renderWatchLaterClock=function(){return a.props.authenticated?a.state.toWatchLater?n.a.createElement("svg",{onClick:function(){return a.removeWatchLaterMovie()},className:"movie__action action__watchlater is-true",viewBox:"0 0 15 15",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("path",{d:"M7.52.1C3.44.1.14 3.4.14 7.5c0 4.06 3.3 7.37 7.38 7.37s7.38-3.3 7.38-7.4C14.9 3.42 11.6.1 7.52.1zm3.26 9.52c-.12.18-.36.24-.55.12l-2.95-1.9-.05-.03H7.2l-.02-.04-.02-.03-.02-.03-.02-.03v-.04-.08-.05l.02-4.8c0-.23.18-.4.4-.4.2 0 .37.17.38.38l-.02 4.6 2.76 1.78c.2.12.24.37.12.55v.02z"})):n.a.createElement("svg",{onClick:function(){return a.addWatchLaterMovie()},className:"movie__action action__watchlater",viewBox:"0 0 15 15",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("path",{d:"M7.52.1C3.44.1.14 3.4.14 7.5c0 4.06 3.3 7.37 7.38 7.37s7.38-3.3 7.38-7.4C14.9 3.42 11.6.1 7.52.1zm3.26 9.52c-.12.18-.36.24-.55.12l-2.95-1.9-.05-.03H7.2l-.02-.04-.02-.03-.02-.03-.02-.03v-.04-.08-.05l.02-4.8c0-.23.18-.4.4-.4.2 0 .37.17.38.38l-.02 4.6 2.76 1.78c.2.12.24.37.12.55v.02z"})):n.a.createElement(S.a,{to:"/login"},n.a.createElement("svg",{className:"movie__action action__watchlater",viewBox:"0 0 15 15",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("path",{d:"M7.52.1C3.44.1.14 3.4.14 7.5c0 4.06 3.3 7.37 7.38 7.37s7.38-3.3 7.38-7.4C14.9 3.42 11.6.1 7.52.1zm3.26 9.52c-.12.18-.36.24-.55.12l-2.95-1.9-.05-.03H7.2l-.02-.04-.02-.03-.02-.03-.02-.03v-.04-.08-.05l.02-4.8c0-.23.18-.4.4-.4.2 0 .37.17.38.38l-.02 4.6 2.76 1.78c.2.12.24.37.12.55v.02z"})))},a.state={isOpen:!1,movie:{genres:[],videos:{results:[]},credits:{cast:[]},images:{backdrops:[]}},favorited:!1,toWatchLater:!1,credits:{}},a.openVedioModal=a.openVedioModal.bind(Object(D.a)(Object(D.a)(a))),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"openVedioModal",value:function(){this.setState({isOpen:!0})}},{key:"render",value:function(){var e=this,t=this.state.movie,a=this.state.movie.videos.results.slice(0,1),r=("url(https://image.tmdb.org/t/p/w1000".concat(t.backdrop_path,")"),t.images.backdrops.slice(0,4)),s=function(e,t){var a=Array.isArray(t)?t.join(", "):t;return n.a.createElement("div",{className:"flex"},n.a.createElement("div",{className:"bold-white-text list-title"},e),n.a.createElement("div",{className:"list-content"},a))};return n.a.createElement("div",{className:"modal",id:this.state.movie.id,key:this.state.movie.id},n.a.createElement("div",{className:"Movie-wrapper"},n.a.createElement(A.a,{exact:!0,to:"/",className:"go-back go-back-top"},"Back to list"),n.a.createElement("div",{className:"movie-content"},n.a.createElement("div",{className:"poster"},n.a.createElement("img",{className:"movie-poster",src:"https://image.tmdb.org/t/p/w500".concat(this.state.movie.poster_path),alt:""}),n.a.createElement("div",{className:"book-watch"},n.a.createElement("i",{class:"fa fal fa-bookmark"}),"Bookmark"),!0===this.state.watch?n.a.createElement("div",{className:"book-watch",onClick:function(){return e.addWatchList(e.state.movie)}},n.a.createElement("i",{class:"fa fa-star-o"}),"Add watchlist"):n.a.createElement("div",{className:"book-watch",onClick:function(){return e.removeWatchList(e.state.movie.id)}},n.a.createElement("i",{class:"fa fa-star-o"}),"Remove watchlist")),n.a.createElement("div",{className:"movie-data"},n.a.createElement("h1",{className:"movie-title"},this.state.movie.title),n.a.createElement("div",{className:"flex movie-details"},n.a.createElement("div",{className:"movie-rating"},n.a.createElement(z.a,{percentage:10*this.state.movie.vote_average,text:this.state.movie.vote_average,strokeWidth:10}),n.a.createElement("div",null,"User Score")),n.a.createElement("div",{className:"vedio-player"},a.map(function(t,a){return n.a.createElement(Y.a,{channel:"youtube",isOpen:e.state.isOpen,videoId:t.key,onClose:function(){return e.setState({isOpen:!1})}})}),n.a.createElement("div",{onClick:this.openVedioModal},n.a.createElement("i",{class:"fa fas fa-play"}),n.a.createElement("span",null,"Play Vedio"))),n.a.createElement("div",{className:"flex detail-list"},s("Genre",this.state.movie.genres.map(function(e){return e.name})),s("Release Year",this.state.movie.release_date),s("Duration","".concat(this.state.movie.runtime," min")))),n.a.createElement("div",{className:"line"}),n.a.createElement("div",{className:"overview"},n.a.createElement("h3",{className:"movie-overview-title"},"Overview"),n.a.createElement("p",{className:"movie-overview"},t.overview)),n.a.createElement("div",{className:"cast line"}),n.a.createElement("div",{className:"cast-list"},n.a.createElement("h3",{className:"cast-title"},"Top Billed Cast"),n.a.createElement(P,{cast:this.state.movie.credits.cast.slice(0,5)})),n.a.createElement("div",{className:"background line"}),n.a.createElement("div",{className:"background-list"},n.a.createElement("h3",{className:"background-title"},"Background"),n.a.createElement("div",{className:"gallery"},r.map(function(e,t){return n.a.createElement("div",{key:e.file_path},n.a.createElement("img",{alt:"movie images",src:H(e.file_path,780),key:e.file_path}))})))))))}}]),t}(r.Component)),Z=(a(53),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(v.a)(t).call(this,e))).componentDidMount=function(){a.getMovies(a.props.section,L)},a.getMovies=function(e,t){fetch("".concat(f).concat(w).concat(e,"?language=en-US&api_key=").concat(h,"&").concat(b).concat(t)).then(function(e){return e.json()}).then(function(e){return a.setMovies(e)})},a.setMovies=function(e){var t=e.results,r=e.page,n=1!==r?a.state.movies.results:[],s=[].concat(Object(O.a)(n),Object(O.a)(t));a.setState({movies:{results:s,page:r},loading:!1})},a.state={movies:{},loading:!0},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.state.movies,a=t.results,r=t.page;return n.a.createElement("div",{className:"Main-wrapper"},a&&n.a.createElement(F,{list:a,addToList:function(t,a){return e.props.addToList(t,a)},removeFromList:function(t,a){return e.props.removeFromList(t,a)},authenticated:this.props.authenticated,favorites:this.props.favorites,watchLater:this.props.watchLater}),n.a.createElement(x,{className:"button",onClick:function(){return e.getMovies(e.props.section,r+1)},text:"Load more"}))}}]),t}(r.Component)),q=(a(54),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(v.a)(t).call(this,e))).getMovieObject=function(e){return fetch("".concat(f).concat(w,"/").concat(e,"?api_key=").concat(h,"&append_to_response=videos")).then(function(e){return e.json()})},a.getMoviesIds=function(e){return Object.keys(e).map(function(t){return e[t]})},a.getAllMoviesFromList=function(e){var t=a.getMoviesIds(e).map(function(e){return a.getMovieObject(e)});Promise.all(t).then(function(e){return a.setState({movies:e,loading:!1})})},a.componentWillReceiveProps=function(e){switch(a.props.title){case"Favorites":a.getAllMoviesFromList(e.favorites);break;case"Watch Later":a.getAllMoviesFromList(e.watchLater)}},a.componentDidMount=function(){switch(a.props.title){case"Favorites":a.getAllMoviesFromList(a.props.favorites);break;case"Watch Later":a.getAllMoviesFromList(a.props.watchLater)}},a.state={movies:[],loading:!0},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.state.movies;return n.a.createElement("div",{className:"Main-wrapper"},n.a.createElement("h1",{className:"App-main-title"},this.props.title),t&&n.a.createElement(F,{list:t,addToList:function(t,a){return e.props.addToList(t,a)},removeFromList:function(t,a){return e.props.removeFromList(t,a)},authenticated:this.props.authenticated,favorites:this.props.favorites,watchLater:this.props.watchLater}))}}]),t}(r.Component)),K=(a(55),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(v.a)(t).call(this,e))).defaulFilterstState={filters:{rating:{min:5,max:10},runtime:{min:45,max:250},sort_by:{value:"vote_average",label:"Rating"},order:{value:"desc",label:"Descending"},year:(new Date).getFullYear()}},a.updateStateWithFilters=function(e){return a.setState({filters:e})},a.resetFilters=function(){return a.setState(a.defaultState)},a.state=Object(c.a)({authenticated:!1,user:null,loading:!0,favorites:{},watchLater:{}},a.defaulFilterstState),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement(p.a,null,n.a.createElement("div",{className:"App"},n.a.createElement("div",{className:"App-sidebar-wrapper"},n.a.createElement("div",{className:"left-sidebar-menu"},n.a.createElement(A.a,{exact:!0,to:"/",activeClassName:"is-active"},n.a.createElement("i",{class:"fa fal fa-bars"}))),n.a.createElement("div",{className:"left-sidebar-menu"},n.a.createElement(A.a,{exact:!0,to:"/watchList",activeClassName:"is-active"},n.a.createElement("i",{class:"fa fa-star-o"})))),n.a.createElement("div",{className:"right"},n.a.createElement(j,{authenticated:this.state.authenticated,user:this.state.user}),n.a.createElement("div",{className:"App-main"},n.a.createElement("div",{className:"App-content-wrapper"},n.a.createElement(d.a,{exact:!0,path:"/",render:function(){return n.a.createElement(T,{title:"Discover",updateFilters:e.updateStateWithFilters,filters:e.state.filters,authenticated:e.state.authenticated,addToList:e.addToUserList,removeFromList:e.removeFromUserList,favorites:e.state.favorites,watchLater:e.state.watchLater})}}),n.a.createElement(d.a,{exact:!0,path:"/popular",render:function(){return n.a.createElement(Z,{title:"Popular",section:"/popular",authenticated:e.state.authenticated,addToList:e.addToUserList,removeFromList:e.removeFromUserList,favorites:e.state.favorites,watchLater:e.state.watchLater})}}),n.a.createElement(d.a,{exact:!0,path:"/top-rated",render:function(){return n.a.createElement(Z,{title:"Top Rated",section:"/top_rated",authenticated:e.state.authenticated,addToList:e.addToUserList,removeFromList:e.removeFromUserList,favorites:e.state.favorites,watchLater:e.state.watchLater})}}),n.a.createElement(d.a,{exact:!0,path:"/coming-soon",render:function(){return n.a.createElement(Z,{title:"Coming Soon",section:"/upcoming",authenticated:e.state.authenticated,addToList:e.addToUserList,removeFromList:e.removeFromUserList,favorites:e.state.favorites,watchLater:e.state.watchLater})}}),n.a.createElement(d.a,{path:"/search",component:B}),n.a.createElement(d.a,{path:"/movie/:id-:title",render:function(t){return n.a.createElement(V,Object.assign({},t,{id:t.match.params.id,authenticated:e.state.authenticated,onFavoriteSelect:function(t){return e.addToUserList(t)},onFavoriteDeselect:function(t){return e.removeFromUserList(t)},favorites:e.state.favorites,watchLater:e.state.watchLater}))}}),n.a.createElement(d.a,{exact:!0,path:"/favorites",render:function(){return n.a.createElement(q,{title:"Favorites",authenticated:e.state.authenticated,addToList:e.addToUserList,removeFromList:e.removeFromUserList,favorites:e.state.favorites,watchLater:e.state.watchLater})}}),n.a.createElement(d.a,{exact:!0,path:"/watch-later",render:function(){return n.a.createElement(q,{title:"Watch Later",authenticated:e.state.authenticated,addToList:e.addToUserList,removeFromList:e.removeFromUserList,favorites:e.state.favorites,watchLater:e.state.watchLater})}}),n.a.createElement(d.a,{path:"/search",components:B}))))))}}]),t}(r.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(K,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[27,1,2]]]);
//# sourceMappingURL=main.8b918719.chunk.js.map