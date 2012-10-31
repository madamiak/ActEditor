Clazz.declarePackage ("pl.wroc.pwr.student.acteditor.view");
Clazz.load (["pl.wroc.pwr.student.acteditor.view.Window"], "pl.wroc.pwr.student.acteditor.view.DecisionWindow", ["$wt.layout.FormAttachment", "$.FormData", "$.FormLayout", "$wt.widgets.Shell", "$.Text"], function () {
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
this.shell =  new $wt.widgets.Shell (this.display);
this.shell.setSize (793, 657);
this.shell.setText ("Decision");
this.shell.setMaximized (true);
this.shell.setLayout ( new $wt.layout.FormLayout ());
this.text =  new $wt.widgets.Text (this.shell, 2048);
var fd_text =  new $wt.layout.FormData ();
fd_text.top =  new $wt.layout.FormAttachment (0, 194);
fd_text.right =  new $wt.layout.FormAttachment (100, -10);
fd_text.left =  new $wt.layout.FormAttachment (100, -638);
fd_text.bottom =  new $wt.layout.FormAttachment (100, -10);
this.text.setLayoutData (fd_text);
});
Clazz.overrideMethod (c$, "open", 
function () {
this.shell.open ();
});
Clazz.overrideMethod (c$, "dispose", 
function () {
});
});
