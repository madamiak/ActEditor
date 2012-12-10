Clazz.declarePackage ("test.lawcreator.xml");
Clazz.load (null, "test.lawcreator.xml.TypeTest", ["pl.wroc.pwr.student.lawcreator.xml.TypeImpl"], function () {
c$ = Clazz.decorateAsClass (function () {
this.type = null;
Clazz.instantialize (this, arguments);
}, test.lawcreator.xml, "TypeTest");
Clazz.defineMethod (c$, "setUp", 
function () {
this.type =  new pl.wroc.pwr.student.lawcreator.xml.TypeImpl ();
});
Clazz.defineMethod (c$, "gettingAndSettingFieldsTest", 
function () {
var name = "name";
var pattern = "pattern";
this.type.setName (name);
this.type.setPattern (pattern);
org.junit.Assert.assertEquals (name, this.type.getName ());
org.junit.Assert.assertEquals (pattern, this.type.getPattern ());
});
Clazz.defineMethod (c$, "addingEnumerationsTest", 
function () {
var enum1 = "enum1";
var enum2 = "enum2";
this.type.add (enum1);
this.type.add (enum2);
org.junit.Assert.assertEquals (2, this.type.getEnumerations ().size ());
org.junit.Assert.assertEquals (enum1, this.type.getEnumerations ().get (0));
org.junit.Assert.assertEquals (enum2, this.type.getEnumerations ().get (1));
});
});
