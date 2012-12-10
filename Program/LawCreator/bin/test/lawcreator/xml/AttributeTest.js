Clazz.declarePackage ("test.lawcreator.xml");
Clazz.load (null, "test.lawcreator.xml.AttributeTest", ["pl.wroc.pwr.student.lawcreator.xml.AttributeImpl", "$.TypeImpl"], function () {
c$ = Clazz.decorateAsClass (function () {
this.attribute = null;
Clazz.instantialize (this, arguments);
}, test.lawcreator.xml, "AttributeTest");
Clazz.defineMethod (c$, "setUp", 
function () {
this.attribute =  new pl.wroc.pwr.student.lawcreator.xml.AttributeImpl ();
});
Clazz.defineMethod (c$, "gettingAndSettingFieldsTest", 
function () {
var defaultValue = "default";
var name = "name";
var use = "use";
var type =  new pl.wroc.pwr.student.lawcreator.xml.TypeImpl ();
type.setName (name);
this.attribute.setDefault ("default");
this.attribute.setName (name);
this.attribute.setType (type);
this.attribute.setUse (use);
org.junit.Assert.assertEquals (defaultValue, this.attribute.getDefault ());
org.junit.Assert.assertEquals (name, this.attribute.getName ());
org.junit.Assert.assertEquals (type, this.attribute.getType ());
org.junit.Assert.assertEquals (use, this.attribute.getUse ());
});
Clazz.defineMethod (c$, "gettingAndSettingChildrenTest", 
function () {
var child =  new pl.wroc.pwr.student.lawcreator.xml.AttributeImpl ();
child.setDefault ("def");
child.setName ("child");
var child2 =  new pl.wroc.pwr.student.lawcreator.xml.AttributeImpl ();
child2.setUse ("use");
var child3 =  new pl.wroc.pwr.student.lawcreator.xml.AttributeImpl ();
this.attribute.add (child);
this.attribute.add (child2);
this.attribute.add (child3);
org.junit.Assert.assertEquals (3, this.attribute.getAttributes ().size ());
org.junit.Assert.assertEquals ("def", this.attribute.getAttribute ("child").getDefault ());
});
});
