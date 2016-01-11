// Compiled by ClojureScript 1.7.170 {}
goog.provide('seagent_ui.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('seagent_ui.button');
seagent_ui.core.welcome_page = (function seagent_ui$core$welcome_page(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Welcome to Seagent!"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"The reagent wrapper for Semantic UI"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [seagent_ui.button.examples], null)], null);
});
seagent_ui.core.init_BANG_ = (function seagent_ui$core$init_BANG_(){
return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [seagent_ui.core.welcome_page], null),document.body);
});
goog.exportSymbol('seagent_ui.core.init_BANG_', seagent_ui.core.init_BANG_);

//# sourceMappingURL=core.js.map