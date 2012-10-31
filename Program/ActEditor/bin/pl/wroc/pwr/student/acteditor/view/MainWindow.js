Clazz.declarePackage ("pl.wroc.pwr.student.acteditor.view");
Clazz.load (["pl.wroc.pwr.student.acteditor.view.Window"], "pl.wroc.pwr.student.acteditor.view.MainWindow", ["$wt.layout.FormAttachment", "$.FormData", "$.FormLayout", "$wt.widgets.Composite", "$.Display", "$.Group", "$.Shell"], function () {
c$ = Clazz.declareType (pl.wroc.pwr.student.acteditor.view, "MainWindow", pl.wroc.pwr.student.acteditor.view.Window);
Clazz.overrideMethod (c$, "initialize", 
function () {
var display =  new $wt.widgets.Display ();
var shell =  new $wt.widgets.Shell (display);
shell.setSize (782, 625);
shell.setText ("Welcome to Act Editor");
shell.setMaximized (true);
shell.setLayout ( new $wt.layout.FormLayout ());
var composite =  new $wt.widgets.Composite (shell, 0);
var fd_composite =  new $wt.layout.FormData ();
fd_composite.bottom =  new $wt.layout.FormAttachment (0, 307);
fd_composite.top =  new $wt.layout.FormAttachment (0, 10);
composite.setLayoutData (fd_composite);
var group =  new $wt.widgets.Group (shell, 0);
fd_composite.left =  new $wt.layout.FormAttachment (group, -570, 16384);
fd_composite.right =  new $wt.layout.FormAttachment (group, -6);
group.setLayout ( new $wt.layout.FormLayout ());
var fd_group =  new $wt.layout.FormData ();
fd_group.left =  new $wt.layout.FormAttachment (0, 580);
fd_group.right =  new $wt.layout.FormAttachment (100, -10);
fd_group.top =  new $wt.layout.FormAttachment (0, 10);
fd_group.bottom =  new $wt.layout.FormAttachment (100, -10);
group.setLayoutData (fd_group);
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
});
