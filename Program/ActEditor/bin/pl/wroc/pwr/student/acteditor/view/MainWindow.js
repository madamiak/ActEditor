Clazz.declarePackage ("pl.wroc.pwr.student.acteditor.view");
Clazz.load (["pl.wroc.pwr.student.acteditor.view.Window"], "pl.wroc.pwr.student.acteditor.view.MainWindow", ["$wt.events.SelectionAdapter", "$wt.graphics.Color", "$wt.layout.FormAttachment", "$.FormData", "$.FormLayout", "$wt.widgets.Button", "$.Combo", "$.Composite", "$.Display", "$.Group", "$.Shell", "$.Text", "pl.wroc.pwr.student.acteditor.model.DocumentRegistry", "pl.wroc.pwr.student.acteditor.view.WindowBuilder"], function () {
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
var composite =  new $wt.widgets.Composite (this.shell, 0);
composite.setBackground (white);
var fd_composite =  new $wt.layout.FormData ();
fd_composite.left =  new $wt.layout.FormAttachment (0, 10);
fd_composite.top =  new $wt.layout.FormAttachment (0, 10);
composite.setLayoutData (fd_composite);
var group =  new $wt.widgets.Group (this.shell, 0);
group.setBackground (white);
fd_composite.bottom =  new $wt.layout.FormAttachment (group, -281, 1024);
fd_composite.right =  new $wt.layout.FormAttachment (100, -316);
group.setLayout ( new $wt.layout.FormLayout ());
var fd_group =  new $wt.layout.FormData ();
fd_group.right =  new $wt.layout.FormAttachment (100, -10);
fd_group.left =  new $wt.layout.FormAttachment (composite, 6);
txtProgramZostaPrzygotowany =  new $wt.widgets.Text (composite, 74);
txtProgramZostaPrzygotowany.setBackground (white);
txtProgramZostaPrzygotowany.setText ("Program zosta\u0142 przygotowany na potrzeby projektu in\u017cynierskiego. Jest on odpowiednikiem edytora akt\u00f3w prawnych EDAP. Pozwala tworzy\u0107 dokumenty prawne zgodnie z:\r\nROZPORZ\u0104DZENIEM MINISTRA SPRAW WEWN\u0118TRZNYCH I ADMINISTRACJI z dnia 25 kwietnia 2008 r. w sprawie wymaga\u0144 technicznych dokument\u00f3w elektronicznych zawieraj\u0105cych akty normatywne i inne akty prawne, elektronicznej formy dziennik\u00f3w urz\u0119dowych oraz \u015brodk\u00f3w komunikacji elektronicznej i informatycznych no\u015bnik\u00f3w danych (Dz. U. 2008 Nr 75, poz. 451 z p\u00f3\u017an. zm.).\r\n\r\nW celu skorzystania z edytora, nale\u017cy wybra\u0107 jedn\u0105 z opcji po prawej stronie ekranu. Ponadto w lewym dolnym rogu ekranu tytu\u0142owego edytora znajduje si\u0119 link prowadz\u0105cy do instrukcji obs\u0142ugi serwisu.");
txtProgramZostaPrzygotowany.setEditable (false);
txtProgramZostaPrzygotowany.setBounds (10, 10, 420, 266);
fd_group.top =  new $wt.layout.FormAttachment (0, 10);
fd_group.bottom =  new $wt.layout.FormAttachment (100, -10);
group.setLayoutData (fd_group);
var registry = pl.wroc.pwr.student.acteditor.model.DocumentRegistry.getRegistry ();
var combo =  new $wt.widgets.Combo (group, 0);
var fd_combo =  new $wt.layout.FormData ();
fd_combo.top =  new $wt.layout.FormAttachment (0, 51);
fd_combo.left =  new $wt.layout.FormAttachment (0, 10);
fd_combo.right =  new $wt.layout.FormAttachment (100, -10);
combo.setLayoutData (fd_combo);
for (var each, $each = registry.getDocuments ().iterator (); $each.hasNext () && ((each = $each.next ()) || true);) {
combo.add (each.toString ());
}
var btnUtwrz =  new $wt.widgets.Button (group, 0);
btnUtwrz.addSelectionListener (((Clazz.isClassDefined ("pl.wroc.pwr.student.acteditor.view.MainWindow$1") ? 0 : pl.wroc.pwr.student.acteditor.view.MainWindow.$MainWindow$1$ ()), Clazz.innerTypeInstance (pl.wroc.pwr.student.acteditor.view.MainWindow$1, this, Clazz.cloneFinals ("combo", combo))));
var fd_btnUtwrz =  new $wt.layout.FormData ();
fd_btnUtwrz.left =  new $wt.layout.FormAttachment (0, 235);
fd_btnUtwrz.top =  new $wt.layout.FormAttachment (combo, 6);
btnUtwrz.setLayoutData (fd_btnUtwrz);
btnUtwrz.setText ("Utw\u00F3rz");
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
