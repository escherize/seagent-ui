// Compiled by ClojureScript 1.7.170 {}
goog.provide('adzerk.boot_reload.websocket');
goog.require('cljs.core');
goog.require('clojure.browser.net');
goog.require('clojure.browser.event');
goog.require('goog.net.WebSocket');

/**
 * @interface
 */
adzerk.boot_reload.websocket.IWebSocket = function(){};

adzerk.boot_reload.websocket.open_QMARK_ = (function adzerk$boot_reload$websocket$open_QMARK_(this$){
if((!((this$ == null))) && (!((this$.adzerk$boot_reload$websocket$IWebSocket$open_QMARK_$arity$1 == null)))){
return this$.adzerk$boot_reload$websocket$IWebSocket$open_QMARK_$arity$1(this$);
} else {
var x__5643__auto__ = (((this$ == null))?null:this$);
var m__5644__auto__ = (adzerk.boot_reload.websocket.open_QMARK_[goog.typeOf(x__5643__auto__)]);
if(!((m__5644__auto__ == null))){
return m__5644__auto__.call(null,this$);
} else {
var m__5644__auto____$1 = (adzerk.boot_reload.websocket.open_QMARK_["_"]);
if(!((m__5644__auto____$1 == null))){
return m__5644__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IWebSocket.open?",this$);
}
}
}
});

adzerk.boot_reload.websocket.websocket_connection = (function adzerk$boot_reload$websocket$websocket_connection(var_args){
var args6801 = [];
var len__6046__auto___6804 = arguments.length;
var i__6047__auto___6805 = (0);
while(true){
if((i__6047__auto___6805 < len__6046__auto___6804)){
args6801.push((arguments[i__6047__auto___6805]));

var G__6806 = (i__6047__auto___6805 + (1));
i__6047__auto___6805 = G__6806;
continue;
} else {
}
break;
}

var G__6803 = args6801.length;
switch (G__6803) {
case 0:
return adzerk.boot_reload.websocket.websocket_connection.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return adzerk.boot_reload.websocket.websocket_connection.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return adzerk.boot_reload.websocket.websocket_connection.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6801.length)].join('')));

}
});

adzerk.boot_reload.websocket.websocket_connection.cljs$core$IFn$_invoke$arity$0 = (function (){
return adzerk.boot_reload.websocket.websocket_connection.call(null,null,null);
});

adzerk.boot_reload.websocket.websocket_connection.cljs$core$IFn$_invoke$arity$1 = (function (auto_reconnect_QMARK_){
return adzerk.boot_reload.websocket.websocket_connection.call(null,auto_reconnect_QMARK_,null);
});

adzerk.boot_reload.websocket.websocket_connection.cljs$core$IFn$_invoke$arity$2 = (function (auto_reconnect_QMARK_,next_reconnect_fn){
return (new goog.net.WebSocket(auto_reconnect_QMARK_,next_reconnect_fn));
});

adzerk.boot_reload.websocket.websocket_connection.cljs$lang$maxFixedArity = 2;
goog.net.WebSocket.prototype.adzerk$boot_reload$websocket$IWebSocket$ = true;

goog.net.WebSocket.prototype.adzerk$boot_reload$websocket$IWebSocket$open_QMARK_$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.isOpen(cljs.core.List.EMPTY);
});

goog.net.WebSocket.prototype.clojure$browser$net$IConnection$ = true;

goog.net.WebSocket.prototype.clojure$browser$net$IConnection$connect$arity$2 = (function (this$,url){
var this$__$1 = this;
return clojure.browser.net.connect.call(null,this$__$1,url,null);
});

goog.net.WebSocket.prototype.clojure$browser$net$IConnection$connect$arity$3 = (function (this$,url,protocol){
var this$__$1 = this;
return this$__$1.open(url,protocol);
});

goog.net.WebSocket.prototype.clojure$browser$net$IConnection$transmit$arity$2 = (function (this$,message){
var this$__$1 = this;
if(cljs.core.truth_(adzerk.boot_reload.websocket.open_QMARK_.call(null,this$__$1))){
return this$__$1.send(message);
} else {
return null;
}
});

goog.net.WebSocket.prototype.clojure$browser$net$IConnection$close$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.close(cljs.core.List.EMPTY);
});

goog.net.WebSocket.prototype.clojure$browser$event$IEventType$ = true;

goog.net.WebSocket.prototype.clojure$browser$event$IEventType$event_types$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (this$__$1){
return (function (p__6808){
var vec__6809 = p__6808;
var k = cljs.core.nth.call(null,vec__6809,(0),null);
var v = cljs.core.nth.call(null,vec__6809,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,k.toLowerCase()),v], null);
});})(this$__$1))
,cljs.core.merge.call(null,cljs.core.js__GT_clj.call(null,goog.net.WebSocket.EventType))));
});

//# sourceMappingURL=websocket.js.map