// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__7553_7567 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__7554_7568 = null;
var count__7555_7569 = (0);
var i__7556_7570 = (0);
while(true){
if((i__7556_7570 < count__7555_7569)){
var f_7571 = cljs.core._nth.call(null,chunk__7554_7568,i__7556_7570);
cljs.core.println.call(null,"  ",f_7571);

var G__7572 = seq__7553_7567;
var G__7573 = chunk__7554_7568;
var G__7574 = count__7555_7569;
var G__7575 = (i__7556_7570 + (1));
seq__7553_7567 = G__7572;
chunk__7554_7568 = G__7573;
count__7555_7569 = G__7574;
i__7556_7570 = G__7575;
continue;
} else {
var temp__4425__auto___7576 = cljs.core.seq.call(null,seq__7553_7567);
if(temp__4425__auto___7576){
var seq__7553_7577__$1 = temp__4425__auto___7576;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7553_7577__$1)){
var c__5791__auto___7578 = cljs.core.chunk_first.call(null,seq__7553_7577__$1);
var G__7579 = cljs.core.chunk_rest.call(null,seq__7553_7577__$1);
var G__7580 = c__5791__auto___7578;
var G__7581 = cljs.core.count.call(null,c__5791__auto___7578);
var G__7582 = (0);
seq__7553_7567 = G__7579;
chunk__7554_7568 = G__7580;
count__7555_7569 = G__7581;
i__7556_7570 = G__7582;
continue;
} else {
var f_7583 = cljs.core.first.call(null,seq__7553_7577__$1);
cljs.core.println.call(null,"  ",f_7583);

var G__7584 = cljs.core.next.call(null,seq__7553_7577__$1);
var G__7585 = null;
var G__7586 = (0);
var G__7587 = (0);
seq__7553_7567 = G__7584;
chunk__7554_7568 = G__7585;
count__7555_7569 = G__7586;
i__7556_7570 = G__7587;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_7588 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4988__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4988__auto__)){
return or__4988__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_7588);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_7588)))?cljs.core.second.call(null,arglists_7588):arglists_7588));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__7557 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__7558 = null;
var count__7559 = (0);
var i__7560 = (0);
while(true){
if((i__7560 < count__7559)){
var vec__7561 = cljs.core._nth.call(null,chunk__7558,i__7560);
var name = cljs.core.nth.call(null,vec__7561,(0),null);
var map__7562 = cljs.core.nth.call(null,vec__7561,(1),null);
var map__7562__$1 = ((((!((map__7562 == null)))?((((map__7562.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7562.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7562):map__7562);
var doc = cljs.core.get.call(null,map__7562__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__7562__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__7589 = seq__7557;
var G__7590 = chunk__7558;
var G__7591 = count__7559;
var G__7592 = (i__7560 + (1));
seq__7557 = G__7589;
chunk__7558 = G__7590;
count__7559 = G__7591;
i__7560 = G__7592;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__7557);
if(temp__4425__auto__){
var seq__7557__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7557__$1)){
var c__5791__auto__ = cljs.core.chunk_first.call(null,seq__7557__$1);
var G__7593 = cljs.core.chunk_rest.call(null,seq__7557__$1);
var G__7594 = c__5791__auto__;
var G__7595 = cljs.core.count.call(null,c__5791__auto__);
var G__7596 = (0);
seq__7557 = G__7593;
chunk__7558 = G__7594;
count__7559 = G__7595;
i__7560 = G__7596;
continue;
} else {
var vec__7564 = cljs.core.first.call(null,seq__7557__$1);
var name = cljs.core.nth.call(null,vec__7564,(0),null);
var map__7565 = cljs.core.nth.call(null,vec__7564,(1),null);
var map__7565__$1 = ((((!((map__7565 == null)))?((((map__7565.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7565.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7565):map__7565);
var doc = cljs.core.get.call(null,map__7565__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__7565__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__7597 = cljs.core.next.call(null,seq__7557__$1);
var G__7598 = null;
var G__7599 = (0);
var G__7600 = (0);
seq__7557 = G__7597;
chunk__7558 = G__7598;
count__7559 = G__7599;
i__7560 = G__7600;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map