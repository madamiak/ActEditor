Clazz.declarePackage ("test.lawcreator.xml.nodes");
Clazz.load (null, "test.lawcreator.xml.nodes.NodeAttributeTest", ["pl.wroc.pwr.student.lawcreator.xml.nodes.Attribute"], function () {
c$ = Clazz.decorateAsClass (function () {
this.attribute = null;
Clazz.instantialize (this, arguments);
}, test.lawcreator.xml.nodes, "NodeAttributeTest");
Clazz.defineMethod (c$, "setUp", 
function () {
this.attribute =  new pl.wroc.pwr.student.lawcreator.xml.nodes.Attribute ();
});
Clazz.defineMethod (c$, "gettingAndSettingFieldsTest", 
function () {
var name = "name";
var value = "value";
this.attribute.setName (name);
this.attribute.setValue (value);
org.junit.Assert.assertEquals (name, this.attribute.getName ());
org.junit.Assert.assertEquals (value, this.attribute.getValue ());
});
Clazz.defineMethod (c$, "gettingXMLTest", 
function () {
var name = "name";
var value = "value";
this.attribute.setName (name);
this.attribute.setValue (value);
org.junit.Assert.assertEquals (name + "=\"" + value + "\"", this.attribute.toXML ());
});
});
