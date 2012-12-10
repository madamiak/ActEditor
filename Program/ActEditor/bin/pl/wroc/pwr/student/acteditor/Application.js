Clazz.declarePackage ("pl.wroc.pwr.student.acteditor");
Clazz.load (null, "pl.wroc.pwr.student.acteditor.Application", ["pl.wroc.pwr.student.acteditor.view.MainWindow"], function () {
c$ = Clazz.declareType (pl.wroc.pwr.student.acteditor, "Application");
c$.main = Clazz.defineMethod (c$, "main", 
function (args) {
pl.wroc.pwr.student.acteditor.Application.run ();
}, "~A");
c$.run = Clazz.defineMethod (c$, "run", 
($fz = function () {
($t$ = pl.wroc.pwr.student.acteditor.Application.$main =  new pl.wroc.pwr.student.acteditor.view.MainWindow (null), pl.wroc.pwr.student.acteditor.Application.prototype.$main = pl.wroc.pwr.student.acteditor.Application.$main, $t$);
}, $fz.isPrivate = true, $fz));
c$.getWindow = Clazz.defineMethod (c$, "getWindow", 
function () {
if (pl.wroc.pwr.student.acteditor.Application.$main != null) {
return pl.wroc.pwr.student.acteditor.Application.$main;
}return null;
});
Clazz.defineMethod (c$, "stop", 
function () {
pl.wroc.pwr.student.acteditor.Application.$main.dispose ();
});
Clazz.defineStatics (c$,
"$main", null);
});
