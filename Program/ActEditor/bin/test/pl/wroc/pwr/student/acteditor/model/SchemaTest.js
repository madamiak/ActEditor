Clazz.declarePackage ("test.pl.wroc.pwr.student.acteditor.model");
Clazz.load (null, "test.pl.wroc.pwr.student.acteditor.model.SchemaTest", ["pl.wroc.pwr.student.acteditor.model.Schema"], function () {
c$ = Clazz.decorateAsClass (function () {
this.schema = null;
Clazz.instantialize (this, arguments);
}, test.pl.wroc.pwr.student.acteditor.model, "SchemaTest");
Clazz.defineMethod (c$, "setUp", 
function () {
this.schema =  new pl.wroc.pwr.student.acteditor.model.Schema ();
});
Clazz.defineMethod (c$, "gettingContenttest", 
function () {
var content = this.schema.getSchemaContent ();
org.junit.Assert.assertNotNull (content);
org.junit.Assert.assertEquals ("<!--  D o k u m e n t y  -->", content.$plit ("\n")[1]);
});
});
