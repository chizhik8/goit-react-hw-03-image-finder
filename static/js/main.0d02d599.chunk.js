(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{66:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(1),o=a(19),c=a.n(o),s=(a(9),a(10)),i=a(4),l=a(5),h=a(7),u=a(6),m=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:""},e.handleChange=function(t){e.setState({query:t.target.value})},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.query),e.setState({query:""})},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsx)("header",{className:"Searchbar",children:Object(n.jsxs)("form",{className:"SearchForm",onSubmit:this.handleSubmit,children:[Object(n.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(n.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(n.jsx)("input",{value:this.state.query,onChange:this.handleChange,className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})}}]),a}(r.Component),d=a(20),g=a.n(d);function b(){return Object(n.jsx)("div",{className:"LoaderBall",children:Object(n.jsx)(g.a,{type:"BallTriangle",color:"#3F51B5",height:80,width:80})})}function j(e){var t=e.images,a=e.onClick;return Object(n.jsx)("ul",{className:"ImageGallery",children:t.map((function(e){return Object(n.jsx)("li",{className:"ImageGalleryItem",children:Object(n.jsx)("img",{onClick:a,name:e.largeImageURL,src:e.webformatURL,alt:e.tags,width:e.webformatWidth,height:e.webformatHeight,className:"ImageGalleryItem-image"})},e.id)}))})}function p(e){var t=e.onClick;return Object(n.jsx)("div",{className:"ButtonContainer",children:Object(n.jsx)("button",{type:"button",className:"Button",onClick:t,children:"Load more"})})}var f=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(n.jsx)("div",{className:"Overlay",children:Object(n.jsx)("div",{className:"Modal",children:this.props.children})})}}]),a}(r.Component),y=a(21),O=a.n(y),v=function(e,t){return O.a.get("https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=".concat(e,"&page=").concat(t,"&per_page=12&key=").concat("19548879-107cb87ae385e6159bb9744cd")).then((function(e){return e.data.hits}))},w=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={images:[],loading:!1,error:null,searchQuery:"",page:1,largeImageURL:null,showModals:!1},e.fetchImages=function(){var t=e.state,a=t.searchQuery,n=t.page;e.setState({loading:!0}),v(a,n).then((function(t){return e.setState((function(e){return{images:[].concat(Object(s.a)(e.images),Object(s.a)(t)),page:e.page+1}}))})).catch((function(t){return e.setState({error:t})})).finally((function(){return e.setState({loading:!1})}))},e.handleSearchFormsSubmit=function(t){e.setState({searchQuery:t,page:1,images:[]})},e.showModals=function(t){e.setState((function(e){return{showModals:!e.showModals,largeImageURL:t.target.name}}))},e.hideModals=function(){e.setState((function(e){return{showModals:!e.showModals,largeImageURL:null}}))},e}return Object(l.a)(a,[{key:"componentDidUpdate",value:function(e,t){t.searchQuery!==this.state.searchQuery&&this.fetchImages(),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}},{key:"render",value:function(){var e=this.state,t=e.images,a=e.loading,r=e.error,o=e.largeImageURL,c=e.showModals;return Object(n.jsxs)("div",{children:[Object(n.jsx)(m,{onSubmit:this.handleSearchFormsSubmit}),r&&Object(n.jsxs)("p",{children:["Wrong: ",r.message]}),a&&Object(n.jsx)(b,{}),t.length>0&&Object(n.jsx)(j,{images:t,onClick:this.showModals}),t.length>0&&!a&&Object(n.jsx)(p,{onClick:this.fetchImages}),c&&Object(n.jsx)(f,{onClose:this.hideModals,children:Object(n.jsx)("img",{src:o,alt:"Large format"})})]})}}]),a}(r.Component);c.a.render(Object(n.jsx)(w,{}),document.getElementById("root"))},9:function(e,t,a){}},[[66,1,2]]]);
//# sourceMappingURL=main.0d02d599.chunk.js.map