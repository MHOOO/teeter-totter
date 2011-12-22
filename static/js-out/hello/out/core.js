goog.provide('hello');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.object');
goog.require('goog.events.EventType');
goog.require('goog.ui.ColorButton');
goog.require('goog.ui.Tab');
goog.require('goog.ui.TabBar');
hello.database_btn = (function (){var G__16825__16826 = (new goog.ui.ColorButton("Database"));

G__16825__16826.setTooltip("Database Connection Status");
G__16825__16826.setValue("red");
return G__16825__16826;
})();
hello.main = (function main(){
return hello.database_btn.render(goog.dom.getElement("buttons"));
});
goog.exportSymbol('hello.main', hello.main);
