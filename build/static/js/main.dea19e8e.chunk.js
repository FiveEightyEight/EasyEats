(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,a){e.exports=a.p+"static/media/logo.adb37c85.jpg"},215:function(e,t,a){},220:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(92),r=a.n(o),s=a(12),c=a(13),i=a(15),m=a(14),u=a(16),d=a(25),p=a(24),h=(a(70),function(e){var t=e.categories,a=e.image_url,n=e.menu_url,o=e.name,r=e.price,s=e.poll,c=e.isDisabled,i=e.handleOnClick,m=e.isChecked,u=e.voteCount;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"row container mx-0"},l.a.createElement("div",{className:"col-sm-12 col-md-2 restList_img"},l.a.createElement("img",{className:"card-img",style:{height:"150px",width:"100%",objectFit:"cover"},src:a,alt:o})),l.a.createElement("div",{className:"card-header col restList_box"},l.a.createElement("li",{className:"list-group-item"},l.a.createElement("div",{className:"row justify-content-between"},l.a.createElement("span",{className:"col h4"},o),l.a.createElement("a",{href:n,target:"_blank",className:"col-sm-2 button-red",rel:"noopener noreferrer"},"Menu"))),l.a.createElement("li",{className:"list-group-item"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col col-xs-10"},l.a.createElement("span",{className:"col h6",style:{paddingLeft:"2px",paddingRight:"2px"}}," ",t.join(", ")," ")),r?l.a.createElement("span",{className:"col-sm-1"},r):l.a.createElement("span",{className:"col-sm-1"},"--"),s?l.a.createElement("div",{className:" col-sm-2 form-check form-check-inline"},l.a.createElement("input",{className:"form-check-input",type:"checkbox",id:"inlineCheckbox1",onClick:i("voted_on"),value:o,disabled:c,checked:m}),l.a.createElement("label",{className:"form-check-label h6",htmlFor:"inlineCheckbox1"}," Vote | Count: ",u)):l.a.createElement(l.a.Fragment,null))))))}),g=function(e){var t=e.specHandleOnClick,a=e.handleOnChange,n=e.handleOnPollSubmit,o=e.votes;return l.a.createElement(l.a.Fragment,null,l.a.createElement("button",{type:"button",className:"btn btn-outline-info","data-toggle":"modal","data-target":"#exampleModalCenter",style:{width:"100%"},onClick:t},"Create Poll"),l.a.createElement("div",{className:"modal fade",id:"exampleModalCenter",tabIndex:"-1",role:"dialog","aria-labelledby":"exampleModalCenterTitle","aria-hidden":"true"},l.a.createElement("div",{className:"modal-dialog modal-dialog-centered",role:"document"},l.a.createElement("div",{className:"modal-content"},l.a.createElement("div",{className:"modal-header"},l.a.createElement("h5",{className:"modal-title",id:"exampleModalCenterTitle"},"Votes Needed To Choose Restaurant"),l.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},l.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),l.a.createElement("div",{className:"modal-body"},l.a.createElement("input",{className:"form-control",type:"text",placeholder:"2 votes minimum",value:o,onChange:a("votes")})),l.a.createElement("div",{className:"modal-footer"},l.a.createElement("button",{type:"button",className:"btn btn-secondary","data-dismiss":"modal"},"Close"),l.a.createElement("button",{type:"button",className:"btn btn-primary","data-dismiss":"modal",onClick:n("modal")},"Go Vote"))))))},v=a(21),f=a.n(v),b=function(e,t){return function e(t,a){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];if(n.length===t)return n;var l=Math.floor(Math.random()*a);return n.includes(l)?e(t,a,n):(n.push(l),e(t,a,n))}(e,t.length).reduce(function(e,a){return e.push(t[a]),e},[])},E=a(93),y=a.n(E),N=a(26),C=a.n(N),O=a(50),k=a(66),S=a.n(k);a(203);Object(O.a)(C.a.mark(function e(){var t,a;return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=null,a=Object(O.a)(C.a.mark(function e(){var t,a;return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f()({method:"GET",url:"https://eze-api.herokuapp.com/fb/",headers:{tkn:8850}});case 2:return t=e.sent,a=t.data,e.abrupt("return",{apiKey:a.fb,authDomain:"easyeats-a662b.firebaseapp.com",databaseURL:"https://easyeats-a662b.firebaseio.com",projectId:"easyeats-a662b",storageBucket:"easyeats-a662b.appspot.com",messagingSenderId:"38887412175"});case 5:case"end":return e.stop()}},e)}))(),e.next=4,Object(O.a)(C.a.mark(function e(){return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=4;break}return e.next=3,a;case 3:t=e.sent;case 4:return e.next=6,S.a.initializeApp(t);case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}},e)}))();case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}},e)}))();var _=S.a,w=a(20),j=a.n(w),x=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).handleOnClick=function(e){return function(t){switch(e){case"regen":a.generateRandomRestaurantList();break;case"create":a.generatePoll();break;case"modal":var n=a.state.votes.trim();if(!n.match(/[0-9]/g))return void a.setState({votes:""});var l=n.match(/[0-9]/g)[0];if(parseInt(l)<2)return void a.setState({votes:""});a.generatePoll(l);break;default:return}}},a.specHandleOnClick=function(e){},a.handleOnChange=function(e){return function(t){switch(e){case"votes":a.setState(Object(p.a)({},e,t.target.value));break;default:return}}},a.getRestaurantsByGeo=function(){f()({method:"GET",url:"https://eze-api.herokuapp.com/restaurants/geo/?lat=".concat(a.state.lat,"&lon=").concat(a.state.lon),Origin:"Easy Eats Front End"}).then(function(e){return e.data}).then(function(e){var t=e.restaurants;return a.setState({restaurants:t}),t}).then(function(e){localStorage.setItem("ee_restList",JSON.stringify(e)),a.generateRandomRestaurantList()})},a.getRestaurantsByAddress=function(e){f()({method:"GET",url:"https://eze-api.herokuapp.com/restaurants/location/?address=".concat(e),Origin:"Easy Eats Front End"}).then(function(e){return e.data}).then(function(e){var t=e.restaurants;return a.setState({restaurants:t}),t}).then(function(e){localStorage.setItem("ee_restList",JSON.stringify(e)),a.generateRandomRestaurantList()})},a.generateRandomRestaurantList=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=e||a.state.restaurants;if(t){var n=b(4,t);e?a.setState({restaurants:e,display:n},function(){localStorage.setItem("ee_restDisplayList",JSON.stringify(n))}):a.setState({display:n},function(){localStorage.setItem("ee_restDisplayList",JSON.stringify(n))})}else a.setState({redirect:!0})},a.generatePoll=function(){var e=a.state,t=e.display,n=e.votes,l=t.reduce(function(e,a,n){var l=Math.floor(Math.random()*t[n].name.length);return e+=t[n].name[1]+t[n].name[0]+t[n].name[l]},"").replace(/[^a-zA-Z0-9]/g,"ee");_.database().ref("/polls").child(l).set({data:t,req_votes:n,total_votes:[0,0,0,0]},function(e){e?console.log("FAILED TO WRITE TO FIREBASE"):a.props.history.push("/poll/".concat(l))})},a.checkData=function(e){_.database().ref("/polls/"+e).once("value").then(function(e){console.log("snapshot: ",e.val())}).catch(function(e){console.log(e)})},a.pageLoad=function(){var e=y.a.parse(a.props.location.search);if(e.lat&&e.lon){if(!e.lat||!e.lon)return void a.setState({redirect:!0});var t=localStorage.getItem("ee_latlon")?JSON.parse(localStorage.getItem("ee_latlon")):null;if(t&&e.lat===t.lat&&e.lon===t.lon)return a.pageReloaded();var n={lat:e.lat,lon:e.lon};localStorage.setItem("ee_latlon",JSON.stringify(n)),a.setState({lat:e.lat,lon:e.lon},function(){a.getRestaurantsByGeo()})}else{var l=a.props.location.search.split("=")[1],o=localStorage.getItem("ee_loc")?JSON.parse(localStorage.getItem("ee_loc")):null;if(o&&o===l)return a.pageReloaded();var r={loc:l};localStorage.setItem("ee_loc",JSON.stringify(r)),a.getRestaurantsByAddress(l)}},a.pageReloaded=function(){var e=localStorage.getItem("ee_restList")?JSON.parse(localStorage.getItem("ee_restList")):null;if(!e)return localStorage.setItem("ee_loc",JSON.stringify(null)),localStorage.setItem("ee_latlon",JSON.stringify(null)),void a.pageLoad();var t=localStorage.getItem("ee_restDisplayList")?JSON.parse(localStorage.getItem("ee_restDisplayList")):null;t?a.setState({restaurants:e,display:t}):a.generateRandomRestaurantList(e)},a.state={lat:null,lon:null,restaurants:null,display:null,redirect:!1,votes:""},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.pageLoad()}},{key:"render",value:function(){var e=this.state,t=e.display,a=e.votes;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"image center"},l.a.createElement("img",{src:j.a,alt:"logo"})),t?l.a.createElement("div",{className:"container"},t.map(function(e,t){return l.a.createElement("div",{className:"my-1",key:t},l.a.createElement(h,e))}),l.a.createElement("div",{className:"container row my-1"},l.a.createElement("div",{className:"col-sm-12 my-1"},l.a.createElement("button",{type:"button",className:"btn btn-outline-info",onClick:this.handleOnClick("regen"),style:{width:"100%"}},"New Restaurants")),l.a.createElement("div",{className:"col-sm-12 my-1"},l.a.createElement(g,{specHandleOnClick:this.specHandleOnClick,handleOnChange:this.handleOnChange,inputValue:a,handleOnPollSubmit:this.handleOnClick})))):l.a.createElement("div",{className:"d-flex justify-content-center mt-5 pt-5"},l.a.createElement("div",{className:"spinner-border",role:"status"},l.a.createElement("span",{className:"sr-only"},"Loading..."))))}}]),t}(n.Component),I=Object(d.f)(function(e){var t=e.goTo,a=e.value,n=e.handleOnClick;return l.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:function(l){"My Location"===a&&n(),e.history.push(t)}},a)}),L=a(49),R=a.n(L),F=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={loading:null},a.geo=function(){a.setState({loading:!0}),navigator.geolocation&&navigator.geolocation.getCurrentPosition(function(e){var t=e.coords,n=t.latitude,l=t.longitude;a.props.history.push("/genpoll?lat=".concat(n,"&lon=").concat(l))})},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.state.loading;return l.a.createElement(l.a.Fragment,null,l.a.createElement(R.a,{images:{0:"https://image.flaticon.com/icons/svg/706/706195.svg",1:"https://image.flaticon.com/icons/svg/1676/1676981.svg",2:"https://image.flaticon.com/icons/svg/1591/1591724.svg",3:"https://image.flaticon.com/icons/svg/273/273804.svg",4:"https://image.flaticon.com/icons/svg/1672/1672272.svg"},how:130,time:25,size:"90px",background:"teal"}),l.a.createElement("div",{className:"container mt-5"},l.a.createElement("div",{className:"row justify-content-md-center"},l.a.createElement("div",{className:"col-md-12 row justify-content-md-center"},l.a.createElement("img",{className:"col col-md-auto",src:j.a,alt:"site logo"})),l.a.createElement("div",{className:"col-md-12 row justify-content-md-center m-2"},l.a.createElement("span",{style:{marginRight:"1%"}},l.a.createElement(I,{className:"col col-md-6",goTo:"/",value:"My Location",handleOnClick:function(t){e.geo()}})),l.a.createElement(I,{className:"col col-md-6",goTo:"/infopage",value:"Enter Location"})),t?l.a.createElement("div",{className:"d-flex justify-content-center mt-5 pt-5"},l.a.createElement("div",{className:"spinner-border",role:"status"},l.a.createElement("span",{className:"sr-only"},"Loading..."))):l.a.createElement(l.a.Fragment,null))))}}]),t}(n.Component),M=(a(215),function(e){var t=e.handleInputChange,a=e.handleOnClick,n=e.states;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"mt-5 pt-5"},l.a.createElement("form",null,l.a.createElement("div",{className:"image"},l.a.createElement("img",{src:j.a,alt:"logo"})),l.a.createElement("div",{className:"row justify-content-center"},l.a.createElement("div",{className:"col ml-4 col-sm-8 col-md-5",style:{background:"red"}},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"inputAddress"},"Address"),l.a.createElement("input",{type:"text",onChange:function(e){return t(e)},name:"address",className:"form-control",id:"validationCustom01",placeholder:"47-10 Austell Place"})),l.a.createElement("div",{className:"form-row"},l.a.createElement("div",{className:"form-group col-md-6"},l.a.createElement("label",{htmlFor:"inputCity"},"City"),l.a.createElement("input",{type:"text",onChange:function(e){return t(e)},name:"city",className:"form-control",id:"inputCity",placeholder:"Long Island City"})),l.a.createElement("div",{className:"form-group col-md-4"},l.a.createElement("label",{htmlFor:"inputState"},"State"),l.a.createElement("select",{id:"inputState",onChange:function(e){return t(e)},name:"state",className:"form-control"},l.a.createElement("option",null,"Choose..."),n.map(function(e,t){return l.a.createElement("option",{key:t,value:e},e)}))),l.a.createElement("div",{className:"form-group col-md-2"},l.a.createElement("label",{htmlFor:"inputZip"},"Zip"),l.a.createElement("input",{type:"text",onChange:function(e){return t(e)},name:"zip",className:"form-control",id:"inputZip"}))),l.a.createElement("button",{type:"submit",className:"btn btn-info",onClick:a},"Enter"))))))}),T=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).handleChange=function(e){console.log(e.target.value)},a.handleOnClick=function(){var e=a.state,t=e.address,n=e.city,l=e.zip,o=e.state;a.props.history.push("/genpoll?address=".concat(t,",").concat(n,",").concat(o," ").concat(l))},a.handleInputChange=function(e){a.setState(Object(p.a)({},e.target.name,e.target.value))},a.state={states:["Alabama","Alaska","American Samoa","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","District of Columbia","Federated States of Micronesia","Florida","Georgia","Guam","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Marshall Islands","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Northern Mariana Islands","Ohio","Oklahoma","Oregon","Palau","Pennsylvania","Puerto Rico","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virgin Island","Virginia","Washington","West Virginia","Wisconsin","Wyoming"],address:null,city:null,state:null,zip:null},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state.states;return l.a.createElement(l.a.Fragment,null,l.a.createElement(R.a,{images:{0:"https://image.flaticon.com/icons/svg/1076/1076323.svg",1:"https://image.flaticon.com/icons/svg/1585/1585289.svg",2:"https://image.flaticon.com/icons/svg/1594/1594208.svg"},how:130,time:25,size:"90px",background:"white"}),l.a.createElement(M,{handleInputChange:this.handleInputChange,handleOnClick:this.handleOnClick,states:e}))}}]),t}(l.a.Component),V=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={id:null,redirect:!1,restaurants:null,req_votes:null,total_votes:null,voted_on:null,voted_value:null,voted_restaurant:null,disabled:null,maxVotes:!1,copySuccess:""},a.checkData=function(e){_.database().ref("/polls/"+e).once("value").then(function(e){return e.val()}).then(function(t){if(t){var n=localStorage.getItem("ee_"+e)?JSON.parse(localStorage.getItem("ee_"+e)):null;if((t.total_votes?t.total_votes.reduce(function(e,t,a){return e+t},0):0)>=t.req_votes){var l=a.findVoted(t.total_votes,t);return void a.setState({id:e,total_votes:t.total_votes,req_votes:t.req_votes,restaurants:t.data,voted_restaurant:l,disabled:!0,maxVotes:!0})}if(n)return void a.setState({id:e,restaurants:t.data,req_votes:t.req_votes,total_votes:t.total_votes,voted_on:n.voted,disabled:!0});a.setState({id:e,restaurants:t.data,req_votes:t.req_votes,total_votes:t.total_votes})}else a.setState({redirect:!0})}).catch(function(e){console.log(e)})},a.doVoted=function(){for(var e=a.state,t=e.total_votes,n=e.restaurants,l=0,o=1;o<t.length;o++)t[o-1]<t[o]&&(l=o);return n[l].name},a.findVoted=function(e,t){for(var a=t.data,n=0,l=1;l<e.length;l++)e[l-1]<e[l]&&(n=l);return a[n].name},a.copyToClipboard=function(e){a.textArea.select(),document.execCommand("copy"),e.target.focus(),a.setState({copySuccess:"Copied!"})},a.handleVote=function(){var e=a.state,t=e.id,n=e.voted_on,l=e.restaurants,o=e.total_votes,r=e.req_votes,s=l.reduce(function(e,t,a){return n===t.name&&(e=a),e},"");o[s]=o[s]+1;var c=o;_.database().ref("/polls").child(t).set({data:l,req_votes:r,total_votes:c},function(e){e?console.log("FAILED TO WRITE TO FIREBASE"):(localStorage.setItem("ee_"+t,JSON.stringify({voted:n})),a.setState({total_votes:c,disabled:!0}))})},a.handleOnClick=function(e){return function(t){if(t){var n=a.state.voted_on;if("vote"!==e)t.target.value!==n?a.setState(Object(p.a)({},e,t.target.value)):a.setState(Object(p.a)({},e,null));else{if(!n)return;a.handleVote()}}}},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=(this.props.match.params||null).id;t?setTimeout(function(){e.checkData(t)},1500):this.setState({redirect:!0}),setTimeout(function(){e.firebaseListener=_.database().ref("/polls/"+t),e.firebaseListener.on("value",function(t){e.setState({total_votes:t.val().total_votes})})},1500)}},{key:"componentWillUnmount",value:function(){this.firebaseListener.off()}},{key:"render",value:function(){var e=this,t=this.state,a=t.id,n=t.redirect,o=t.restaurants,r=t.disabled,s=t.voted_on,c=t.req_votes,i=t.total_votes,m=t.maxVotes,u=i?i.reduce(function(e,t,a){return e+t},0):0;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"image center"},l.a.createElement("img",{src:j.a,alt:"logo"})),n?l.a.createElement(d.a,{to:"/"}):o?l.a.createElement("div",{className:"container mx-0 col-12 "},l.a.createElement("div",{className:"row justify-content-md-center"},l.a.createElement("div",{className:"col-sm-12 col-md-6 row"},l.a.createElement("form",{style:{height:"0px",width:"0px",backgroundColor:"white"}},l.a.createElement("textarea",{style:{height:"0px",width:"0px",backgroundColor:"white"},ref:function(t){return e.textArea=t},value:"https://tarekul.github.io/EasyEats/#/poll/"+a,readOnly:!0})),document.queryCommandSupported("copy")&&l.a.createElement("div",{className:"col-sm-4"},l.a.createElement("button",{className:"btn btn-outline-info col-sm-12",onClick:this.copyToClipboard},"Copy Url"),this.state.copySuccess),l.a.createElement("div",{className:"col-sm-4"},l.a.createElement("span",{className:"h4"},"Total Votes: ",u," ")),l.a.createElement("div",{className:"col-sm-4"},l.a.createElement("span",{className:"h4"},"Votes Needed: ",c-u," ")))),l.a.createElement("div",{className:"row justify-content-md-center"},o.map(function(t,a){return l.a.createElement("div",{className:"my-1 col-md-auto",key:a},s?l.a.createElement(h,Object.assign({},t,{poll:!0,handleOnClick:e.handleOnClick,isChecked:s===t.name,isDisabled:r,voteCount:i[a]})):l.a.createElement(h,Object.assign({},t,{poll:!0,handleOnClick:e.handleOnClick,isDisabled:r,voteCount:i[a]})))}),!s||r||m?c-u===0?l.a.createElement("div",{className:"container row my-1"},l.a.createElement("div",{className:"col-sm-12 my-1"},l.a.createElement("button",{type:"button",className:"btn btn-danger",style:{width:"100%"}},"Voting Is Complete: ",this.doVoted()))):l.a.createElement(l.a.Fragment,null):l.a.createElement("div",{className:"container row my-1"},l.a.createElement("div",{className:"col-sm-12 my-1"},l.a.createElement("button",{type:"button",className:"btn btn-outline-info",onClick:this.handleOnClick("vote"),style:{width:"100%"}},"Vote"))))):l.a.createElement("div",{className:"d-flex justify-content-center mt-5 pt-5"},l.a.createElement("div",{className:"spinner-border",role:"status"},l.a.createElement("span",{className:"sr-only"},"Loading..."))))}}]),t}(n.Component),A=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(d.d,null,l.a.createElement(d.b,{path:"/",exact:!0,component:F}),l.a.createElement(d.b,{path:"/infopage",exact:!0,component:T}),l.a.createElement(d.b,{path:"/genpoll",component:x}),l.a.createElement(d.b,{path:"/poll/:id",component:V})))}}]),t}(n.Component),D=a(34);a(216),a(219),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(D.a,null,l.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},70:function(e,t,a){},96:function(e,t,a){e.exports=a(220)}},[[96,1,2]]]);
//# sourceMappingURL=main.dea19e8e.chunk.js.map