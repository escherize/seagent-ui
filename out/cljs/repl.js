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
var seq__8590_8604 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__8591_8605 = null;
var count__8592_8606 = (0);
var i__8593_8607 = (0);
while(true){
if((i__8593_8607 < count__8592_8606)){
var f_8608 = cljs.core._nth.call(null,chunk__8591_8605,i__8593_8607);
cljs.core.println.call(null,"  ",f_8608);

var G__8609 = seq__8590_8604;
var G__8610 = chunk__8591_8605;
var G__8611 = count__8592_8606;
var G__8612 = (i__8593_8607 + (1));
seq__8590_8604 = G__8609;
chunk__8591_8605 = G__8610;
count__8592_8606 = G__8611;
i__8593_8607 = G__8612;
continue;
} else {
var temp__4425__auto___8613 = cljs.core.seq.call(null,seq__8590_8604);
if(temp__4425__auto___8613){
var seq__8590_8614__$1 = temp__4425__auto___8613;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8590_8614__$1)){
var c__8237__auto___8615 = cljs.core.chunk_first.call(null,seq__8590_8614__$1);
var G__8616 = cljs.core.chunk_rest.call(null,seq__8590_8614__$1);
var G__8617 = c__8237__auto___8615;
var G__8618 = cljs.core.count.call(null,c__8237__auto___8615);
var G__8619 = (0);
seq__8590_8604 = G__8616;
chunk__8591_8605 = G__8617;
count__8592_8606 = G__8618;
i__8593_8607 = G__8619;
continue;
} else {
var f_8620 = cljs.core.first.call(null,seq__8590_8614__$1);
cljs.core.println.call(null,"  ",f_8620);

var G__8621 = cljs.core.next.call(null,seq__8590_8614__$1);
var G__8622 = null;
var G__8623 = (0);
var G__8624 = (0);
seq__8590_8604 = G__8621;
chunk__8591_8605 = G__8622;
count__8592_8606 = G__8623;
i__8593_8607 = G__8624;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_8625 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__7434__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__7434__auto__)){
return or__7434__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_8625);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_8625)))?cljs.core.second.call(null,arglists_8625):arglists_8625));
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
var seq__8594 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__8595 = null;
var count__8596 = (0);
var i__8597 = (0);
while(true){
if((i__8597 < count__8596)){
var vec__8598 = cljs.core._nth.call(null,chunk__8595,i__8597);
var name = cljs.core.nth.call(null,vec__8598,(0),null);
var map__8599 = cljs.core.nth.call(null,vec__8598,(1),null);
var map__8599__$1 = ((((!((map__8599 == null)))?((((map__8599.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8599.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8599):map__8599);
var doc = cljs.core.get.call(null,map__8599__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__8599__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__8626 = seq__8594;
var G__8627 = chunk__8595;
var G__8628 = count__8596;
var G__8629 = (i__8597 + (1));
seq__8594 = G__8626;
chunk__8595 = G__8627;
count__8596 = G__8628;
i__8597 = G__8629;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__8594);
if(temp__4425__auto__){
var seq__8594__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8594__$1)){
var c__8237__auto__ = cljs.core.chunk_first.call(null,seq__8594__$1);
var G__8630 = cljs.core.chunk_rest.call(null,seq__8594__$1);
var G__8631 = c__8237__auto__;
var G__8632 = cljs.core.count.call(null,c__8237__auto__);
var G__8633 = (0);
seq__8594 = G__8630;
chunk__8595 = G__8631;
count__8596 = G__8632;
i__8597 = G__8633;
continue;
} else {
var vec__8601 = cljs.core.first.call(null,seq__8594__$1);
var name = cljs.core.nth.call(null,vec__8601,(0),null);
var map__8602 = cljs.core.nth.call(null,vec__8601,(1),null);
var map__8602__$1 = ((((!((map__8602 == null)))?((((map__8602.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8602.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8602):map__8602);
var doc = cljs.core.get.call(null,map__8602__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__8602__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__8634 = cljs.core.next.call(null,seq__8594__$1);
var G__8635 = null;
var G__8636 = (0);
var G__8637 = (0);
seq__8594 = G__8634;
chunk__8595 = G__8635;
count__8596 = G__8636;
i__8597 = G__8637;
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