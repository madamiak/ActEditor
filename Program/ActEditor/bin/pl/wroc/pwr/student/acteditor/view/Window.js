Clazz.declarePackage ("pl.wroc.pwr.student.acteditor.view");
c$ = Clazz.decorateAsClass (function () {
this.display = null;
this.shell = null;
Clazz.instantialize (this, arguments);
}, pl.wroc.pwr.student.acteditor.view, "Window");
Clazz.makeConstructor (c$, 
function () {
this.initialize ();
this.open ();
this.dispose ();
});
