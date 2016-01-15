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
var seq__7587_7601 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__7588_7602 = null;
var count__7589_7603 = (0);
var i__7590_7604 = (0);
while(true){
if((i__7590_7604 < count__7589_7603)){
var f_7605 = cljs.core._nth.call(null,chunk__7588_7602,i__7590_7604);
cljs.core.println.call(null,"  ",f_7605);

var G__7606 = seq__7587_7601;
var G__7607 = chunk__7588_7602;
var G__7608 = count__7589_7603;
var G__7609 = (i__7590_7604 + (1));
seq__7587_7601 = G__7606;
chunk__7588_7602 = G__7607;
count__7589_7603 = G__7608;
i__7590_7604 = G__7609;
continue;
} else {
var temp__4425__auto___7610 = cljs.core.seq.call(null,seq__7587_7601);
if(temp__4425__auto___7610){
var seq__7587_7611__$1 = temp__4425__auto___7610;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7587_7611__$1)){
var c__5791__auto___7612 = cljs.core.chunk_first.call(null,seq__7587_7611__$1);
var G__7613 = cljs.core.chunk_rest.call(null,seq__7587_7611__$1);
var G__7614 = c__5791__auto___7612;
var G__7615 = cljs.core.count.call(null,c__5791__auto___7612);
var G__7616 = (0);
seq__7587_7601 = G__7613;
chunk__7588_7602 = G__7614;
count__7589_7603 = G__7615;
i__7590_7604 = G__7616;
continue;
} else {
var f_7617 = cljs.core.first.call(null,seq__7587_7611__$1);
cljs.core.println.call(null,"  ",f_7617);

var G__7618 = cljs.core.next.call(null,seq__7587_7611__$1);
var G__7619 = null;
var G__7620 = (0);
var G__7621 = (0);
seq__7587_7601 = G__7618;
chunk__7588_7602 = G__7619;
count__7589_7603 = G__7620;
i__7590_7604 = G__7621;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_7622 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4988__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4988__auto__)){
return or__4988__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_7622);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_7622)))?cljs.core.second.call(null,arglists_7622):arglists_7622));
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
var seq__7591 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__7592 = null;
var count__7593 = (0);
var i__7594 = (0);
while(true){
if((i__7594 < count__7593)){
var vec__7595 = cljs.core._nth.call(null,chunk__7592,i__7594);
var name = cljs.core.nth.call(null,vec__7595,(0),null);
var map__7596 = cljs.core.nth.call(null,vec__7595,(1),null);
var map__7596__$1 = ((((!((map__7596 == null)))?((((map__7596.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7596.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7596):map__7596);
var doc = cljs.core.get.call(null,map__7596__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__7596__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__7623 = seq__7591;
var G__7624 = chunk__7592;
var G__7625 = count__7593;
var G__7626 = (i__7594 + (1));
seq__7591 = G__7623;
chunk__7592 = G__7624;
count__7593 = G__7625;
i__7594 = G__7626;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__7591);
if(temp__4425__auto__){
var seq__7591__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7591__$1)){
var c__5791__auto__ = cljs.core.chunk_first.call(null,seq__7591__$1);
var G__7627 = cljs.core.chunk_rest.call(null,seq__7591__$1);
var G__7628 = c__5791__auto__;
var G__7629 = cljs.core.count.call(null,c__5791__auto__);
var G__7630 = (0);
seq__7591 = G__7627;
chunk__7592 = G__7628;
count__7593 = G__7629;
i__7594 = G__7630;
continue;
} else {
var vec__7598 = cljs.core.first.call(null,seq__7591__$1);
var name = cljs.core.nth.call(null,vec__7598,(0),null);
var map__7599 = cljs.core.nth.call(null,vec__7598,(1),null);
var map__7599__$1 = ((((!((map__7599 == null)))?((((map__7599.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7599.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7599):map__7599);
var doc = cljs.core.get.call(null,map__7599__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__7599__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__7631 = cljs.core.next.call(null,seq__7591__$1);
var G__7632 = null;
var G__7633 = (0);
var G__7634 = (0);
seq__7591 = G__7631;
chunk__7592 = G__7632;
count__7593 = G__7633;
i__7594 = G__7634;
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