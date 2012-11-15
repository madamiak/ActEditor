Clazz.declarePackage ("pl.wroc.pwr.student.acteditor.view");
c$ = Clazz.decorateAsClass (function () {
this.display = null;
this.shell = null;
this.name = null;
Clazz.instantialize (this, arguments);
}, pl.wroc.pwr.student.acteditor.view, "Window");
Clazz.makeConstructor (c$, 
function (name) {
this.initialize (name);
this.open ();
this.dispose ();
}, "~S");
