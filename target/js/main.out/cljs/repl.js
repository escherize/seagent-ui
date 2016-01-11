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
var seq__7551_7565 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__7552_7566 = null;
var count__7553_7567 = (0);
var i__7554_7568 = (0);
while(true){
if((i__7554_7568 < count__7553_7567)){
var f_7569 = cljs.core._nth.call(null,chunk__7552_7566,i__7554_7568);
cljs.core.println.call(null,"  ",f_7569);

var G__7570 = seq__7551_7565;
var G__7571 = chunk__7552_7566;
var G__7572 = count__7553_7567;
var G__7573 = (i__7554_7568 + (1));
seq__7551_7565 = G__7570;
chunk__7552_7566 = G__7571;
count__7553_7567 = G__7572;
i__7554_7568 = G__7573;
continue;
} else {
var temp__4425__auto___7574 = cljs.core.seq.call(null,seq__7551_7565);
if(temp__4425__auto___7574){
var seq__7551_7575__$1 = temp__4425__auto___7574;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7551_7575__$1)){
var c__5791__auto___7576 = cljs.core.chunk_first.call(null,seq__7551_7575__$1);
var G__7577 = cljs.core.chunk_rest.call(null,seq__7551_7575__$1);
var G__7578 = c__5791__auto___7576;
var G__7579 = cljs.core.count.call(null,c__5791__auto___7576);
var G__7580 = (0);
seq__7551_7565 = G__7577;
chunk__7552_7566 = G__7578;
count__7553_7567 = G__7579;
i__7554_7568 = G__7580;
continue;
} else {
var f_7581 = cljs.core.first.call(null,seq__7551_7575__$1);
cljs.core.println.call(null,"  ",f_7581);

var G__7582 = cljs.core.next.call(null,seq__7551_7575__$1);
var G__7583 = null;
var G__7584 = (0);
var G__7585 = (0);
seq__7551_7565 = G__7582;
chunk__7552_7566 = G__7583;
count__7553_7567 = G__7584;
i__7554_7568 = G__7585;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_7586 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4988__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4988__auto__)){
return or__4988__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_7586);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_7586)))?cljs.core.second.call(null,arglists_7586):arglists_7586));
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
var seq__7555 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__7556 = null;
var count__7557 = (0);
var i__7558 = (0);
while(true){
if((i__7558 < count__7557)){
var vec__7559 = cljs.core._nth.call(null,chunk__7556,i__7558);
var name = cljs.core.nth.call(null,vec__7559,(0),null);
var map__7560 = cljs.core.nth.call(null,vec__7559,(1),null);
var map__7560__$1 = ((((!((map__7560 == null)))?((((map__7560.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7560.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7560):map__7560);
var doc = cljs.core.get.call(null,map__7560__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__7560__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__7587 = seq__7555;
var G__7588 = chunk__7556;
var G__7589 = count__7557;
var G__7590 = (i__7558 + (1));
seq__7555 = G__7587;
chunk__7556 = G__7588;
count__7557 = G__7589;
i__7558 = G__7590;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__7555);
if(temp__4425__auto__){
var seq__7555__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7555__$1)){
var c__5791__auto__ = cljs.core.chunk_first.call(null,seq__7555__$1);
var G__7591 = cljs.core.chunk_rest.call(null,seq__7555__$1);
var G__7592 = c__5791__auto__;
var G__7593 = cljs.core.count.call(null,c__5791__auto__);
var G__7594 = (0);
seq__7555 = G__7591;
chunk__7556 = G__7592;
count__7557 = G__7593;
i__7558 = G__7594;
continue;
} else {
var vec__7562 = cljs.core.first.call(null,seq__7555__$1);
var name = cljs.core.nth.call(null,vec__7562,(0),null);
var map__7563 = cljs.core.nth.call(null,vec__7562,(1),null);
var map__7563__$1 = ((((!((map__7563 == null)))?((((map__7563.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7563.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7563):map__7563);
var doc = cljs.core.get.call(null,map__7563__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__7563__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__7595 = cljs.core.next.call(null,seq__7555__$1);
var G__7596 = null;
var G__7597 = (0);
var G__7598 = (0);
seq__7555 = G__7595;
chunk__7556 = G__7596;
count__7557 = G__7597;
i__7558 = G__7598;
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