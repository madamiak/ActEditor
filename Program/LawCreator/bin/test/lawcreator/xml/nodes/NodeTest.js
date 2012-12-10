Clazz.declarePackage ("test.lawcreator.xml.nodes");
Clazz.load (null, "test.lawcreator.xml.nodes.NodeTest", ["pl.wroc.pwr.student.lawcreator.xml.nodes.Attribute", "$.Node"], function () {
c$ = Clazz.decorateAsClass (function () {
this.node = null;
Clazz.instantialize (this, arguments);
}, test.lawcreator.xml.nodes, "NodeTest");
Clazz.defineMethod (c$, "setUp", 
function () {
this.node =  new pl.wroc.pwr.student.lawcreator.xml.nodes.Node ();
});
Clazz.defineMethod (c$, "gettingAndSettingFieldsTest", 
function () {
var name = "name";
var value = "value";
this.node.setName (name);
this.node.setValue (value);
org.junit.Assert.assertEquals (name, this.node.getName ());
org.junit.Assert.assertEquals (value, this.node.getValue ());
});
Clazz.defineMethod (c$, "addingAttributesTest", 
function () {
var att1 =  new pl.wroc.pwr.student.lawcreator.xml.nodes.Attribute ();
att1.setName ("att1");
att1.setValue ("v1");
var att2 =  new pl.wroc.pwr.student.lawcreator.xml.nodes.Attribute ();
att2.setName ("att2");
att2.setValue ("v2");
this.node.addAttribute (att1);
this.node.addAttribute (att2);
org.junit.Assert.assertEquals (2, this.node.getAttributes ().size ());
org.junit.Assert.assertEquals (att1, this.node.getAttributeByName ("att1"));
org.junit.Assert.assertEquals (att2, this.node.getAttributeByName ("att2"));
});
Clazz.defineMethod (c$, "addingNodesTest", 
function () {
var child1 =  new pl.wroc.pwr.student.lawcreator.xml.nodes.Node ();
child1.setName ("ch1");
child1.setValue ("v1");
var child2 =  new pl.wroc.pwr.student.lawcreator.xml.nodes.Node ();
child2.setName ("ch2");
child2.setValue ("v2");
this.node.addNote (child1);
this.node.addNote (child2);
org.junit.Assert.assertEquals (2, this.node.getNodes ().size ());
org.junit.Assert.assertEquals (child1, this.node.getChildByName ("ch1"));
org.junit.Assert.assertEquals (child2, this.node.getChildByName ("ch2"));
});
Clazz.defineMethod (c$, "gettingXMLTest", 
function () {
var att1 =  new pl.wroc.pwr.student.lawcreator.xml.nodes.Attribute ();
att1.setName ("att1");
att1.setValue ("v1");
var att2 =  new pl.wroc.pwr.student.lawcreator.xml.nodes.Attribute ();
att2.setName ("att2");
att2.setValue ("v2");
var att3 =  new pl.wroc.pwr.student.lawcreator.xml.nodes.Attribute ();
att3.setName ("att3");
att3.setValue ("v3");
var child1 =  new pl.wroc.pwr.student.lawcreator.xml.nodes.Node ();
child1.setName ("ch1");
child1.setValue ("v1");
child1.addAttribute (att1);
var child2 =  new pl.wroc.pwr.student.lawcreator.xml.nodes.Node ();
child2.setName ("ch2");
child2.setValue ("v2");
child2.addAttribute (att2);
this.node.addAttribute (att3);
this.node.addNote (child1);
this.node.addNote (child2);
var xml = this.node.toXML ();
org.junit.Assert.assertTrue (xml.contains ("<ch1 att1=\"v1\">\nv1\n</ch1>\n<ch2att2=\"v2\">\nv2\n</ch2>"));
});
});
