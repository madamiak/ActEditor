Clazz.declarePackage ("pl.wroc.pwr.student.acteditor.view");
Clazz.load (["pl.wroc.pwr.student.acteditor.view.Window"], "pl.wroc.pwr.student.acteditor.view.MainWindow", ["$wt.events.SelectionAdapter", "$wt.graphics.Color", "$wt.layout.FormAttachment", "$.FormData", "$.FormLayout", "$wt.widgets.Button", "$.Combo", "$.Composite", "$.Display", "$.Label", "$.Shell", "$.Text", "pl.wroc.pwr.student.acteditor.model.DocumentRegistry", "pl.wroc.pwr.student.acteditor.view.WindowBuilder"], function () {
c$ = Clazz.declareType (pl.wroc.pwr.student.acteditor.view, "MainWindow", pl.wroc.pwr.student.acteditor.view.Window);
Clazz.overrideMethod (c$, "initialize", 
function (name) {
var txtProgramZostaPrzygotowany;
this.display =  new $wt.widgets.Display ();
var device = $wt.widgets.Display.getCurrent ();
var white =  new $wt.graphics.Color (device, 255, 255, 255);
this.shell =  new $wt.widgets.Shell (this.display);
this.shell.setBackground (white);
this.shell.setSize (782, 625);
this.shell.setText ("Witamy w Act Editor");
this.shell.setLayout ( new $wt.layout.FormLayout ());
var composite_1 =  new $wt.widgets.Composite (this.shell, 0);
composite_1.setBackground (white);
var fd_composite_1 =  new $wt.layout.FormData ();
fd_composite_1.top =  new $wt.layout.FormAttachment (0, 10);
fd_composite_1.right =  new $wt.layout.FormAttachment (100, -10);
composite_1.setLayoutData (fd_composite_1);
var label =  new $wt.widgets.Label (this.shell, 514);
var composite =  new $wt.widgets.Composite (this.shell, 0);
var fd_composite =  new $wt.layout.FormData ();
fd_composite.right =  new $wt.layout.FormAttachment (label);
composite.setLayoutData (fd_composite);
txtProgramZostaPrzygotowany =  new $wt.widgets.Text (composite, 74);
txtProgramZostaPrzygotowany.setText ("Program zosta\u0142 przygotowany na potrzeby projektu in\u017cynierskiego. Jest on odpowiednikiem edytora akt\u00f3w prawnych EDAP. Pozwala tworzy\u0107 dokumenty prawne zgodnie z:\r\nROZPORZ\u0104DZENIEM MINISTRA SPRAW WEWN\u0118TRZNYCH I ADMINISTRACJI z dnia 25 kwietnia 2008 r. w sprawie wymaga\u0144 technicznych dokument\u00f3w elektronicznych zawieraj\u0105cych akty normatywne i inne akty prawne, elektronicznej formy dziennik\u00f3w urz\u0119dowych oraz \u015brodk\u00f3w komunikacji elektronicznej i informatycznych no\u015bnik\u00f3w danych (Dz. U. 2008 Nr 75, poz. 451 z p\u00f3\u017an. zm.).\r\n\r\nW celu skorzystania z edytora, nale\u017cy wybra\u0107 jedn\u0105 z opcji po prawej stronie ekranu. Ponadto w lewym dolnym rogu ekranu tytu\u0142owego edytora znajduje si\u0119 link prowadz\u0105cy do instrukcji obs\u0142ugi serwisu.");
txtProgramZostaPrzygotowany.setEditable (false);
txtProgramZostaPrzygotowany.setBounds (10, 10, 446, 266);
var combo =  new $wt.widgets.Combo (composite_1, 0);
combo.setBounds (10, 79, 262, 23);
combo.select (0);
var btnUtwrz =  new $wt.widgets.Button (composite_1, 0);
btnUtwrz.setBounds (223, 112, 49, 25);
btnUtwrz.addSelectionListener (((Clazz.isClassDefined ("pl.wroc.pwr.student.acteditor.view.MainWindow$1") ? 0 : pl.wroc.pwr.student.acteditor.view.MainWindow.$MainWindow$1$ ()), Clazz.innerTypeInstance (pl.wroc.pwr.student.acteditor.view.MainWindow$1, this, Clazz.cloneFinals ("combo", combo))));
btnUtwrz.setText ("Utw\u00F3rz");
fd_composite.bottom =  new $wt.layout.FormAttachment (label, 0, 1024);
fd_composite.right =  new $wt.layout.FormAttachment (label);
fd_composite.top =  new $wt.layout.FormAttachment (label, 0, 128);
fd_composite_1.left =  new $wt.layout.FormAttachment (0, 474);
var fd_label =  new $wt.layout.FormData ();
fd_label.right =  new $wt.layout.FormAttachment (composite_1, -6);
fd_label.left =  new $wt.layout.FormAttachment (0, 466);
fd_label.bottom =  new $wt.layout.FormAttachment (100, -138);
fd_label.top =  new $wt.layout.FormAttachment (0);
label.setLayoutData (fd_label);
var label_1 =  new $wt.widgets.Label (this.shell, 258);
fd_composite.left =  new $wt.layout.FormAttachment (label_1, 0, 16384);
fd_composite_1.bottom =  new $wt.layout.FormAttachment (label_1, -25);
var fd_label_1 =  new $wt.layout.FormData ();
fd_label_1.bottom =  new $wt.layout.FormAttachment (100, -136);
fd_label_1.top =  new $wt.layout.FormAttachment (label);
fd_label_1.right =  new $wt.layout.FormAttachment (100);
fd_label_1.left =  new $wt.layout.FormAttachment (0);
label_1.setLayoutData (fd_label_1);
var registry = pl.wroc.pwr.student.acteditor.model.DocumentRegistry.getRegistry ();
for (var each, $each = registry.getDocuments ().iterator (); $each.hasNext () && ((each = $each.next ()) || true);) {
combo.add (each.toString ());
}
}, "~S");
Clazz.overrideMethod (c$, "open", 
function () {
this.shell.open ();
});
Clazz.overrideMethod (c$, "dispose", 
function () {
Sync2Async.block (this.shell, this, function () {
this.display.dispose ();
});
return;
});
Clazz.defineMethod (c$, "getMainDisplay", 
function () {
return this.display;
});
c$.$MainWindow$1$ = function () {
Clazz.pu$h ();
c$ = Clazz.declareAnonymous (pl.wroc.pwr.student.acteditor.view, "MainWindow$1", $wt.events.SelectionAdapter);
Clazz.overrideMethod (c$, "widgetSelected", 
function (e) {
var builder =  new pl.wroc.pwr.student.acteditor.view.WindowBuilder (this.b$["pl.wroc.pwr.student.acteditor.view.MainWindow"].display);
var choice = this.f$.combo.getSelectionIndex ();
builder.openWindow (choice);
}, "$wt.events.SelectionEvent");
c$ = Clazz.p0p ();
};
});
