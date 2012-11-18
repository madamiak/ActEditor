Clazz.declarePackage ("pl.wroc.pwr.student.acteditor.view");
Clazz.load (null, "pl.wroc.pwr.student.acteditor.view.WindowBuilder", ["pl.wroc.pwr.student.acteditor.model.DocumentRegistry", "pl.wroc.pwr.student.acteditor.util.Utils", "pl.wroc.pwr.student.acteditor.view.SubWindow"], function () {
c$ = Clazz.decorateAsClass (function () {
this.display = null;
this.registry = null;
Clazz.instantialize (this, arguments);
}, pl.wroc.pwr.student.acteditor.view, "WindowBuilder");
Clazz.makeConstructor (c$, 
function (display) {
this.display = display;
this.registry = pl.wroc.pwr.student.acteditor.model.DocumentRegistry.getRegistry ();
}, "$wt.widgets.Display");
Clazz.defineMethod (c$, "openWindow", 
function (choice) {
 new pl.wroc.pwr.student.acteditor.view.SubWindow (this.display, pl.wroc.pwr.student.acteditor.util.Utils.map (this.registry.get (choice)));
}, "~N");
});
