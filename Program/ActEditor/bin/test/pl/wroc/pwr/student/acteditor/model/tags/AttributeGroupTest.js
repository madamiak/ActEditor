Clazz.declarePackage ("test.pl.wroc.pwr.student.acteditor.model.tags");
Clazz.load (null, "test.pl.wroc.pwr.student.acteditor.model.tags.AttributeGroupTest", ["pl.wroc.pwr.student.acteditor.model.tags.AttributeGroup", "$.SimpleAttribute", "$.SimpleType"], function () {
c$ = Clazz.decorateAsClass (function () {
this.attribute = null;
Clazz.instantialize (this, arguments);
}, test.pl.wroc.pwr.student.acteditor.model.tags, "AttributeGroupTest");
Clazz.defineMethod (c$, "setUp", 
function () {
this.attribute =  new pl.wroc.pwr.student.acteditor.model.tags.AttributeGroup ();
});
Clazz.defineMethod (c$, "settingAndGettingTest", 
function () {
this.attribute.setDefault ("default");
this.attribute.setDescription ("description");
this.attribute.setName ("name");
var t =  new pl.wroc.pwr.student.acteditor.model.tags.SimpleType ();
t.setName ("simpleType");
this.attribute.setSimpleType (t);
this.attribute.setType ("type");
this.attribute.setUse ("use");
org.junit.Assert.assertNotSame ("default", this.attribute.getDefault ());
org.junit.Assert.assertNull (this.attribute.getDefault ());
org.junit.Assert.assertEquals ("description", this.attribute.getDescription ());
org.junit.Assert.assertEquals ("name", this.attribute.getName ());
org.junit.Assert.assertNotSame (t, this.attribute.getSimpleType ());
org.junit.Assert.assertNull (this.attribute.getSimpleType ());
org.junit.Assert.assertEquals ("type", this.attribute.getType ());
org.junit.Assert.assertEquals ("use", this.attribute.getUse ());
});
Clazz.defineMethod (c$, "addingAttributeTest", 
function () {
var a =  new pl.wroc.pwr.student.acteditor.model.tags.SimpleAttribute ();
a.setName ("name");
this.attribute.add (a);
org.junit.Assert.assertTrue (this.attribute.getAttributes ().size () == 1);
org.junit.Assert.assertEquals (a, this.attribute.getAttributes ().get (0));
});
});
