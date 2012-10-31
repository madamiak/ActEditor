Clazz.declarePackage ("pl.wroc.pwr.student.acteditor.view");
Clazz.load (["pl.wroc.pwr.student.acteditor.view.Window"], "pl.wroc.pwr.student.acteditor.view.MainWindow", ["$wt.events.SelectionAdapter", "$wt.layout.FormAttachment", "$.FormData", "$.FormLayout", "$wt.widgets.Button", "$.Combo", "$.Display", "$.Group", "$.Shell", "pl.wroc.pwr.student.acteditor.view.DecisionWindow"], function () {
c$ = Clazz.declareType (pl.wroc.pwr.student.acteditor.view, "MainWindow", pl.wroc.pwr.student.acteditor.view.Window);
Clazz.overrideMethod (c$, "initialize", 
function () {
this.display =  new $wt.widgets.Display ();
this.shell =  new $wt.widgets.Shell (this.display);
this.shell.setLayout ( new $wt.layout.FormLayout ());
this.shell.setSize (782, 625);
this.shell.setText ("Welcome to Act Editor");
this.shell.setMaximized (true);
var group =  new $wt.widgets.Group (this.shell, 0);
var fd_group =  new $wt.layout.FormData ();
fd_group.top =  new $wt.layout.FormAttachment (0, 10);
fd_group.right =  new $wt.layout.FormAttachment (100, -10);
fd_group.bottom =  new $wt.layout.FormAttachment (100, -10);
fd_group.left =  new $wt.layout.FormAttachment (0, 556);
group.setLayoutData (fd_group);
var combo =  new $wt.widgets.Combo (group, 0);
combo.setBounds (10, 120, 180, 23);
var btnUtwrz =  new $wt.widgets.Button (group, 0);
btnUtwrz.addSelectionListener (((Clazz.isClassDefined ("pl.wroc.pwr.student.acteditor.view.MainWindow$1") ? 0 : pl.wroc.pwr.student.acteditor.view.MainWindow.$MainWindow$1$ ()), Clazz.innerTypeInstance (pl.wroc.pwr.student.acteditor.view.MainWindow$1, this, null)));
btnUtwrz.setBounds (115, 149, 75, 25);
btnUtwrz.setText ("Utw\u00F3rz");
});
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
 new pl.wroc.pwr.student.acteditor.view.DecisionWindow (this.b$["pl.wroc.pwr.student.acteditor.view.MainWindow"].display);
}, "$wt.events.SelectionEvent");
c$ = Clazz.p0p ();
};
});
