Clazz.declarePackage ("test.pl.wroc.pwr.student.acteditor.model.tags");
Clazz.load (null, "test.pl.wroc.pwr.student.acteditor.model.tags.SimpleTypeTest", ["pl.wroc.pwr.student.acteditor.model.tags.SimpleType"], function () {
c$ = Clazz.decorateAsClass (function () {
this.simpleType = null;
Clazz.instantialize (this, arguments);
}, test.pl.wroc.pwr.student.acteditor.model.tags, "SimpleTypeTest");
Clazz.defineMethod (c$, "setUp", 
function () {
this.simpleType =  new pl.wroc.pwr.student.acteditor.model.tags.SimpleType ();
});
Clazz.defineMethod (c$, "settingAndGettingTest", 
function () {
this.simpleType.setDescription ("description");
this.simpleType.setName ("name");
this.simpleType.setPattern ("pattern");
org.junit.Assert.assertEquals ("description", this.simpleType.getDescription ());
org.junit.Assert.assertEquals ("name", this.simpleType.getName ());
org.junit.Assert.assertEquals ("pattern", this.simpleType.getPattern ());
});
Clazz.defineMethod (c$, "addingEnumerationsTest", 
function () {
this.simpleType.add ("enum");
org.junit.Assert.assertTrue (this.simpleType.getEnumeratinos ().size () == 1);
org.junit.Assert.assertEquals ("enum", this.simpleType.getEnumeratinos ().get (0));
});
});
