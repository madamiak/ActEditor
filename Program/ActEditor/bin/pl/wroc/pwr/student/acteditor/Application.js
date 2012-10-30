Clazz.declarePackage ("pl.wroc.pwr.student.acteditor");
Clazz.load (null, "pl.wroc.pwr.student.acteditor.Application", ["pl.wroc.pwr.student.acteditor.view.MainWindow"], function () {
c$ = Clazz.declareType (pl.wroc.pwr.student.acteditor, "Application");
c$.main = Clazz.defineMethod (c$, "main", 
function (args) {
pl.wroc.pwr.student.acteditor.Application.run ();
}, "~A");
c$.run = Clazz.defineMethod (c$, "run", 
($fz = function () {
 new pl.wroc.pwr.student.acteditor.view.MainWindow ();
}, $fz.isPrivate = true, $fz));
});
