Clazz.declarePackage ("pl.wroc.pwr.student.lawcreator");
Clazz.load (null, "pl.wroc.pwr.student.lawcreator.Application", ["pl.wroc.pwr.student.lawcreator.view.MainWindow"], function () {
c$ = Clazz.declareType (pl.wroc.pwr.student.lawcreator, "Application");
c$.main = Clazz.defineMethod (c$, "main", 
function (args) {
pl.wroc.pwr.student.lawcreator.Application.run ();
}, "~A");
c$.run = Clazz.defineMethod (c$, "run", 
($fz = function () {
 new pl.wroc.pwr.student.lawcreator.view.MainWindow ();
}, $fz.isPrivate = true, $fz));
});
