Clazz.declarePackage ("pl.wroc.pwr.student.acteditor.view");
Clazz.load (["pl.wroc.pwr.student.acteditor.view.Window"], "pl.wroc.pwr.student.acteditor.view.DecisionWindow", ["$wt.layout.FormAttachment", "$.FormData", "$.FormLayout", "$wt.widgets.Button", "$.Display", "$.Shell", "$.Text"], function () {
c$ = Clazz.decorateAsClass (function () {
this.text = null;
Clazz.instantialize (this, arguments);
}, pl.wroc.pwr.student.acteditor.view, "DecisionWindow", pl.wroc.pwr.student.acteditor.view.Window);
Clazz.makeConstructor (c$, 
function (display) {
Clazz.superConstructor (this, pl.wroc.pwr.student.acteditor.view.DecisionWindow, []);
this.display = display;
}, "$wt.widgets.Display");
Clazz.overrideMethod (c$, "initialize", 
function () {
var display =  new $wt.widgets.Display ();
var shell =  new $wt.widgets.Shell (display);
shell.setSize (793, 657);
shell.setText ("Decision");
shell.setMaximized (true);
shell.setLayout ( new $wt.layout.FormLayout ());
this.text =  new $wt.widgets.Text (shell, 2048);
var fd_text =  new $wt.layout.FormData ();
fd_text.top =  new $wt.layout.FormAttachment (0, 10);
fd_text.right =  new $wt.layout.FormAttachment (100, -10);
fd_text.bottom =  new $wt.layout.FormAttachment (100, -10);
this.text.setLayoutData (fd_text);
var btnNewButton =  new $wt.widgets.Button (shell, 0);
fd_text.left =  new $wt.layout.FormAttachment (btnNewButton, 6);
var fd_btnNewButton =  new $wt.layout.FormData ();
fd_btnNewButton.top =  new $wt.layout.FormAttachment (0, 10);
fd_btnNewButton.left =  new $wt.layout.FormAttachment (0, 10);
btnNewButton.setLayoutData (fd_btnNewButton);
btnNewButton.setText ("New Button");
});
Clazz.overrideMethod (c$, "open", 
function () {
this.shell.open ();
});
Clazz.overrideMethod (c$, "dispose", 
function () {
});
});
