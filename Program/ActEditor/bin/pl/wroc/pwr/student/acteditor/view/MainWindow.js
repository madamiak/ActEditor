Clazz.declarePackage ("pl.wroc.pwr.student.acteditor.view");
Clazz.load (["pl.wroc.pwr.student.acteditor.view.Window"], "pl.wroc.pwr.student.acteditor.view.MainWindow", ["$wt.events.SelectionAdapter", "$wt.layout.FormAttachment", "$.FormData", "$.FormLayout", "$wt.widgets.Button", "$.Combo", "$.Composite", "$.Display", "$.Group", "$.Shell", "pl.wroc.pwr.student.acteditor.view.WindowBuilder"], function () {
c$ = Clazz.decorateAsClass (function () {
this.$display = null;
this.$shell = null;
Clazz.instantialize (this, arguments);
}, pl.wroc.pwr.student.acteditor.view, "MainWindow", pl.wroc.pwr.student.acteditor.view.Window);
Clazz.overrideMethod (c$, "initialize", 
function (name) {
this.$display =  new $wt.widgets.Display ();
this.$shell =  new $wt.widgets.Shell (this.$display);
this.$shell.setSize (782, 625);
this.$shell.setText ("Welcome to Act Editor");
this.$shell.setLayout ( new $wt.layout.FormLayout ());
var composite =  new $wt.widgets.Composite (this.$shell, 0);
var fd_composite =  new $wt.layout.FormData ();
fd_composite.left =  new $wt.layout.FormAttachment (0, 10);
fd_composite.bottom =  new $wt.layout.FormAttachment (0, 307);
fd_composite.top =  new $wt.layout.FormAttachment (0, 10);
composite.setLayoutData (fd_composite);
var group =  new $wt.widgets.Group (this.$shell, 0);
fd_composite.right =  new $wt.layout.FormAttachment (100, -316);
group.setLayout ( new $wt.layout.FormLayout ());
var fd_group =  new $wt.layout.FormData ();
fd_group.left =  new $wt.layout.FormAttachment (composite, 6);
fd_group.right =  new $wt.layout.FormAttachment (100, -10);
fd_group.top =  new $wt.layout.FormAttachment (0, 10);
fd_group.bottom =  new $wt.layout.FormAttachment (100, -10);
group.setLayoutData (fd_group);
var combo =  new $wt.widgets.Combo (group, 0);
var fd_combo =  new $wt.layout.FormData ();
fd_combo.top =  new $wt.layout.FormAttachment (0, 99);
fd_combo.left =  new $wt.layout.FormAttachment (0, 10);
fd_combo.right =  new $wt.layout.FormAttachment (100, -10);
combo.setLayoutData (fd_combo);
combo.add ("Ustawa");
combo.add ("Rozporządzenie");
combo.add ("Uchwała");
combo.add ("Zarządzenie");
combo.add ("Informacja");
combo.add ("Komunikat");
combo.add ("Decyzja");
combo.add ("Oświadczenie");
combo.add ("Wyrok Trybunału Konstytucyjnego");
combo.add ("Postanowienie");
combo.add ("Wyrok");
combo.add ("Porozumienie");
combo.add ("Ogłoszenie");
combo.add ("Obwieszczenie");
var btnUtwrz =  new $wt.widgets.Button (group, 0);
btnUtwrz.addSelectionListener (((Clazz.isClassDefined ("pl.wroc.pwr.student.acteditor.view.MainWindow$1") ? 0 : pl.wroc.pwr.student.acteditor.view.MainWindow.$MainWindow$1$ ()), Clazz.innerTypeInstance (pl.wroc.pwr.student.acteditor.view.MainWindow$1, this, Clazz.cloneFinals ("combo", combo))));
var fd_btnUtwrz =  new $wt.layout.FormData ();
fd_btnUtwrz.top =  new $wt.layout.FormAttachment (combo, 6);
fd_btnUtwrz.right =  new $wt.layout.FormAttachment (100, -10);
btnUtwrz.setLayoutData (fd_btnUtwrz);
btnUtwrz.setText ("Utw\u00F3rz");
}, "~S");
Clazz.overrideMethod (c$, "open", 
function () {
this.$shell.open ();
});
Clazz.overrideMethod (c$, "dispose", 
function () {
Sync2Async.block (this.$shell, this, function () {
this.$display.dispose ();
});
return;
});
Clazz.defineMethod (c$, "getMainDisplay", 
function () {
return this.$display;
});
c$.$MainWindow$1$ = function () {
Clazz.pu$h ();
c$ = Clazz.declareAnonymous (pl.wroc.pwr.student.acteditor.view, "MainWindow$1", $wt.events.SelectionAdapter);
Clazz.overrideMethod (c$, "widgetSelected", 
function (e) {
var builder =  new pl.wroc.pwr.student.acteditor.view.WindowBuilder (this.b$["pl.wroc.pwr.student.acteditor.view.MainWindow"].$display);
System.out.println (this.f$.combo.getSelectionIndex ());
var choice = this.f$.combo.getSelectionIndex ();
builder.openWindow (choice);
}, "$wt.events.SelectionEvent");
c$ = Clazz.p0p ();
};
});
