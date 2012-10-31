Clazz.declarePackage ("pl.wroc.pwr.student.acteditor.test");
Clazz.load (null, "pl.wroc.pwr.student.acteditor.test.Tester", ["$wt.layout.FormLayout", "$wt.widgets.Display", "$.Shell"], function () {
c$ = Clazz.declareType (pl.wroc.pwr.student.acteditor.test, "Tester");
c$.main = Clazz.defineMethod (c$, "main", 
function (args) {
var display =  new $wt.widgets.Display ();
var shell =  new $wt.widgets.Shell (display);
shell.setSize (715, 555);
shell.setText ("Hello world!");
shell.setLayout ( new $wt.layout.FormLayout ());
shell.setMaximized (true);
shell.open ();
Sync2Async.block (shell, this, function () {
display.dispose ();
});
return;
}, "~A");
});
