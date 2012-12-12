Clazz.declarePackage ("test.pl.wroc.pwr.student.acteditor.parsing.xsd");
Clazz.load (null, "test.pl.wroc.pwr.student.acteditor.parsing.xsd.Attributes", ["pl.wroc.pwr.student.acteditor.test.SchemaLoader"], function () {
c$ = Clazz.declareType (test.pl.wroc.pwr.student.acteditor.parsing.xsd, "Attributes");
Clazz.defineMethod (c$, "test", 
function () {
var loader =  new pl.wroc.pwr.student.acteditor.test.SchemaLoader ();
loader.parseSAX ();
});
});
