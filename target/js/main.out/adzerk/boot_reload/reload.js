// Compiled by ClojureScript 1.7.170 {}
goog.provide('adzerk.boot_reload.reload');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.Uri');
goog.require('goog.async.DeferredList');
goog.require('goog.net.jsloader');
adzerk.boot_reload.reload.page_uri = (new goog.Uri(window.location.href));
adzerk.boot_reload.reload.ends_with_QMARK_ = (function adzerk$boot_reload$reload$ends_with_QMARK_(s,pat){
return cljs.core._EQ_.call(null,pat,cljs.core.subs.call(null,s,(cljs.core.count.call(null,s) - cljs.core.count.call(null,pat))));
});
adzerk.boot_reload.reload.reload_page_BANG_ = (function adzerk$boot_reload$reload$reload_page_BANG_(){
return window.location.reload();
});
adzerk.boot_reload.reload.normalize_href_or_uri = (function adzerk$boot_reload$reload$normalize_href_or_uri(href_or_uri){
var uri = (new goog.Uri(href_or_uri));
return adzerk.boot_reload.reload.page_uri.resolve(uri).getPath();
});
adzerk.boot_reload.reload.changed_href_QMARK_ = (function adzerk$boot_reload$reload$changed_href_QMARK_(href_or_uri,changed){
if(cljs.core.truth_(href_or_uri)){
var path = adzerk.boot_reload.reload.normalize_href_or_uri.call(null,href_or_uri);
if(cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.filter.call(null,((function (path){
return (function (p1__6353_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,adzerk.boot_reload.reload.normalize_href_or_uri.call(null,p1__6353_SHARP_),path);
});})(path))
,changed)))){
return goog.Uri.parse(path);
} else {
return null;
}
} else {
return null;
}
});
adzerk.boot_reload.reload.reload_css = (function adzerk$boot_reload$reload$reload_css(changed){
var sheets = document.styleSheets;
var seq__6358 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),sheets.length));
var chunk__6359 = null;
var count__6360 = (0);
var i__6361 = (0);
while(true){
if((i__6361 < count__6360)){
var s = cljs.core._nth.call(null,chunk__6359,i__6361);
var temp__4425__auto___6362 = (sheets[s]);
if(cljs.core.truth_(temp__4425__auto___6362)){
var sheet_6363 = temp__4425__auto___6362;
var temp__4425__auto___6364__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_6363.href,changed);
if(cljs.core.truth_(temp__4425__auto___6364__$1)){
var href_uri_6365 = temp__4425__auto___6364__$1;
sheet_6363.ownerNode.href = href_uri_6365.makeUnique().toString();
} else {
}
} else {
}

var G__6366 = seq__6358;
var G__6367 = chunk__6359;
var G__6368 = count__6360;
var G__6369 = (i__6361 + (1));
seq__6358 = G__6366;
chunk__6359 = G__6367;
count__6360 = G__6368;
i__6361 = G__6369;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__6358);
if(temp__4425__auto__){
var seq__6358__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6358__$1)){
var c__5791__auto__ = cljs.core.chunk_first.call(null,seq__6358__$1);
var G__6370 = cljs.core.chunk_rest.call(null,seq__6358__$1);
var G__6371 = c__5791__auto__;
var G__6372 = cljs.core.count.call(null,c__5791__auto__);
var G__6373 = (0);
seq__6358 = G__6370;
chunk__6359 = G__6371;
count__6360 = G__6372;
i__6361 = G__6373;
continue;
} else {
var s = cljs.core.first.call(null,seq__6358__$1);
var temp__4425__auto___6374__$1 = (sheets[s]);
if(cljs.core.truth_(temp__4425__auto___6374__$1)){
var sheet_6375 = temp__4425__auto___6374__$1;
var temp__4425__auto___6376__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_6375.href,changed);
if(cljs.core.truth_(temp__4425__auto___6376__$2)){
var href_uri_6377 = temp__4425__auto___6376__$2;
sheet_6375.ownerNode.href = href_uri_6377.makeUnique().toString();
} else {
}
} else {
}

var G__6378 = cljs.core.next.call(null,seq__6358__$1);
var G__6379 = null;
var G__6380 = (0);
var G__6381 = (0);
seq__6358 = G__6378;
chunk__6359 = G__6379;
count__6360 = G__6380;
i__6361 = G__6381;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_img = (function adzerk$boot_reload$reload$reload_img(changed){
var images = document.images;
var seq__6386 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),images.length));
var chunk__6387 = null;
var count__6388 = (0);
var i__6389 = (0);
while(true){
if((i__6389 < count__6388)){
var s = cljs.core._nth.call(null,chunk__6387,i__6389);
var temp__4425__auto___6390 = (images[s]);
if(cljs.core.truth_(temp__4425__auto___6390)){
var image_6391 = temp__4425__auto___6390;
var temp__4425__auto___6392__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_6391.src,changed);
if(cljs.core.truth_(temp__4425__auto___6392__$1)){
var href_uri_6393 = temp__4425__auto___6392__$1;
image_6391.src = href_uri_6393.makeUnique().toString();
} else {
}
} else {
}

var G__6394 = seq__6386;
var G__6395 = chunk__6387;
var G__6396 = count__6388;
var G__6397 = (i__6389 + (1));
seq__6386 = G__6394;
chunk__6387 = G__6395;
count__6388 = G__6396;
i__6389 = G__6397;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__6386);
if(temp__4425__auto__){
var seq__6386__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6386__$1)){
var c__5791__auto__ = cljs.core.chunk_first.call(null,seq__6386__$1);
var G__6398 = cljs.core.chunk_rest.call(null,seq__6386__$1);
var G__6399 = c__5791__auto__;
var G__6400 = cljs.core.count.call(null,c__5791__auto__);
var G__6401 = (0);
seq__6386 = G__6398;
chunk__6387 = G__6399;
count__6388 = G__6400;
i__6389 = G__6401;
continue;
} else {
var s = cljs.core.first.call(null,seq__6386__$1);
var temp__4425__auto___6402__$1 = (images[s]);
if(cljs.core.truth_(temp__4425__auto___6402__$1)){
var image_6403 = temp__4425__auto___6402__$1;
var temp__4425__auto___6404__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_6403.src,changed);
if(cljs.core.truth_(temp__4425__auto___6404__$2)){
var href_uri_6405 = temp__4425__auto___6404__$2;
image_6403.src = href_uri_6405.makeUnique().toString();
} else {
}
} else {
}

var G__6406 = cljs.core.next.call(null,seq__6386__$1);
var G__6407 = null;
var G__6408 = (0);
var G__6409 = (0);
seq__6386 = G__6406;
chunk__6387 = G__6407;
count__6388 = G__6408;
i__6389 = G__6409;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_js = (function adzerk$boot_reload$reload$reload_js(changed,p__6412){
var map__6415 = p__6412;
var map__6415__$1 = ((((!((map__6415 == null)))?((((map__6415.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6415.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6415):map__6415);
var on_jsload = cljs.core.get.call(null,map__6415__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),cljs.core.identity);
var js_files = cljs.core.filter.call(null,((function (map__6415,map__6415__$1,on_jsload){
return (function (p1__6410_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,p1__6410_SHARP_,".js");
});})(map__6415,map__6415__$1,on_jsload))
,changed);
if(cljs.core.seq.call(null,js_files)){
goog.async.DeferredList.gatherResults(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,((function (js_files,map__6415,map__6415__$1,on_jsload){
return (function (p1__6411_SHARP_){
return goog.net.jsloader.load(goog.Uri.parse(p1__6411_SHARP_).makeUnique());
});})(js_files,map__6415,map__6415__$1,on_jsload))
,js_files))).addCallbacks(((function (js_files,map__6415,map__6415__$1,on_jsload){
return (function() { 
var G__6417__delegate = function (_){
return on_jsload.call(null);
};
var G__6417 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__6418__i = 0, G__6418__a = new Array(arguments.length -  0);
while (G__6418__i < G__6418__a.length) {G__6418__a[G__6418__i] = arguments[G__6418__i + 0]; ++G__6418__i;}
  _ = new cljs.core.IndexedSeq(G__6418__a,0);
} 
return G__6417__delegate.call(this,_);};
G__6417.cljs$lang$maxFixedArity = 0;
G__6417.cljs$lang$applyTo = (function (arglist__6419){
var _ = cljs.core.seq(arglist__6419);
return G__6417__delegate(_);
});
G__6417.cljs$core$IFn$_invoke$arity$variadic = G__6417__delegate;
return G__6417;
})()
;})(js_files,map__6415,map__6415__$1,on_jsload))
,((function (js_files,map__6415,map__6415__$1,on_jsload){
return (function (e){
return console.error("Load failed:",e.message);
});})(js_files,map__6415,map__6415__$1,on_jsload))
);

if(cljs.core.truth_((window["jQuery"]))){
return jQuery(document).trigger("page-load");
} else {
return null;
}
} else {
return null;
}
});
adzerk.boot_reload.reload.reload_html = (function adzerk$boot_reload$reload$reload_html(changed){
var page_path = adzerk.boot_reload.reload.page_uri.getPath();
var html_path = (cljs.core.truth_(adzerk.boot_reload.reload.ends_with_QMARK_.call(null,page_path,"/"))?[cljs.core.str(page_path),cljs.core.str("index.html")].join(''):page_path);
if(cljs.core.truth_(adzerk.boot_reload.reload.changed_href_QMARK_.call(null,html_path,changed))){
return adzerk.boot_reload.reload.reload_page_BANG_.call(null);
} else {
return null;
}
});
adzerk.boot_reload.reload.group_log = (function adzerk$boot_reload$reload$group_log(title,things_to_log){
console.groupCollapsed(title);

var seq__6424_6428 = cljs.core.seq.call(null,things_to_log);
var chunk__6425_6429 = null;
var count__6426_6430 = (0);
var i__6427_6431 = (0);
while(true){
if((i__6427_6431 < count__6426_6430)){
var t_6432 = cljs.core._nth.call(null,chunk__6425_6429,i__6427_6431);
console.log(t_6432);

var G__6433 = seq__6424_6428;
var G__6434 = chunk__6425_6429;
var G__6435 = count__6426_6430;
var G__6436 = (i__6427_6431 + (1));
seq__6424_6428 = G__6433;
chunk__6425_6429 = G__6434;
count__6426_6430 = G__6435;
i__6427_6431 = G__6436;
continue;
} else {
var temp__4425__auto___6437 = cljs.core.seq.call(null,seq__6424_6428);
if(temp__4425__auto___6437){
var seq__6424_6438__$1 = temp__4425__auto___6437;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6424_6438__$1)){
var c__5791__auto___6439 = cljs.core.chunk_first.call(null,seq__6424_6438__$1);
var G__6440 = cljs.core.chunk_rest.call(null,seq__6424_6438__$1);
var G__6441 = c__5791__auto___6439;
var G__6442 = cljs.core.count.call(null,c__5791__auto___6439);
var G__6443 = (0);
seq__6424_6428 = G__6440;
chunk__6425_6429 = G__6441;
count__6426_6430 = G__6442;
i__6427_6431 = G__6443;
continue;
} else {
var t_6444 = cljs.core.first.call(null,seq__6424_6438__$1);
console.log(t_6444);

var G__6445 = cljs.core.next.call(null,seq__6424_6438__$1);
var G__6446 = null;
var G__6447 = (0);
var G__6448 = (0);
seq__6424_6428 = G__6445;
chunk__6425_6429 = G__6446;
count__6426_6430 = G__6447;
i__6427_6431 = G__6448;
continue;
}
} else {
}
}
break;
}

return console.groupEnd();
});
adzerk.boot_reload.reload.reload = (function adzerk$boot_reload$reload$reload(changed,opts){
adzerk.boot_reload.reload.group_log.call(null,"Reload",changed);

var G__6450 = changed;
adzerk.boot_reload.reload.reload_js.call(null,G__6450,opts);

adzerk.boot_reload.reload.reload_html.call(null,G__6450);

adzerk.boot_reload.reload.reload_css.call(null,G__6450);

adzerk.boot_reload.reload.reload_img.call(null,G__6450);

return G__6450;
});

//# sourceMappingURL=reload.js.map