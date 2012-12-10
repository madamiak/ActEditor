Clazz.declarePackage ("test.lawcreator.xml");
Clazz.load (null, "test.lawcreator.xml.ElementTest", ["pl.wroc.pwr.student.lawcreator.xml.AttributeImpl", "$.ElementImpl"], function () {
c$ = Clazz.decorateAsClass (function () {
this.element = null;
Clazz.instantialize (this, arguments);
}, test.lawcreator.xml, "ElementTest");
Clazz.defineMethod (c$, "setUp", 
function () {
this.element =  new pl.wroc.pwr.student.lawcreator.xml.ElementImpl ();
});
Clazz.defineMethod (c$, "gettingAndSettingFieldsTest", 
function () {
var desc = "desc";
var name = "name";
var type = "type";
this.element.setDescription (desc);
});
Clazz.defineMethod (c$, "gettingAndSettingChildrenTest", 
function () {
var child =  new pl.wroc.pwr.student.lawcreator.xml.ElementImpl ();
child.setName ("name");
this.element.add (child);
org.junit.Assert.assertEquals (1, this.element.getElements ().size ());
org.junit.Assert.assertEquals ("name", (this.element.getElements ().get (0)).getName ());
});
Clazz.defineMethod (c$, "gettingAndSettingAttributesTest", 
function () {
var attribute =  new pl.wroc.pwr.student.lawcreator.xml.AttributeImpl ();
attribute.setName ("name");
this.element.addAttribute (attribute);
org.junit.Assert.assertEquals (new Integer (1), this.element.getAttributes ());
org.junit.Assert.assertEquals (attribute, this.element.getAttribute ("name"));
});
});
