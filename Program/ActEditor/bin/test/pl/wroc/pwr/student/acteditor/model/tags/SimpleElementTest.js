Clazz.declarePackage ("test.pl.wroc.pwr.student.acteditor.model.tags");
Clazz.load (null, "test.pl.wroc.pwr.student.acteditor.model.tags.SimpleElementTest", ["pl.wroc.pwr.student.acteditor.model.tags.SimpleAttribute", "$.SimpleElement"], function () {
c$ = Clazz.decorateAsClass (function () {
this.element = null;
Clazz.instantialize (this, arguments);
}, test.pl.wroc.pwr.student.acteditor.model.tags, "SimpleElementTest");
Clazz.defineMethod (c$, "setUp", 
function () {
this.element =  new pl.wroc.pwr.student.acteditor.model.tags.SimpleElement ("name");
});
Clazz.defineMethod (c$, "settingAndGettingTest", 
function () {
this.element.setDescription ("description");
this.element.setMaxOccurs ("unbounded");
this.element.setMinOccurs ("3");
this.element.setType ("type");
this.element.setValue ("value");
org.junit.Assert.assertEquals ("name", this.element.getName ());
org.junit.Assert.assertEquals ("description", this.element.getDescription ());
org.junit.Assert.assertEquals ("unbounded", this.element.getMaxOccurs ());
org.junit.Assert.assertEquals ("3", this.element.getMinOccurs ());
org.junit.Assert.assertEquals ("type", this.element.getType ());
org.junit.Assert.assertEquals ("value", this.element.getValue ());
});
Clazz.defineMethod (c$, "addingItemsTest", 
function () {
var sub =  new pl.wroc.pwr.student.acteditor.model.tags.SimpleElement ("sub");
this.element.add (sub);
org.junit.Assert.assertNull (this.element.getElements ());
});
Clazz.defineMethod (c$, "addingAttributesTest", 
function () {
var a =  new pl.wroc.pwr.student.acteditor.model.tags.SimpleAttribute ();
a.setName ("att");
this.element.addAttribute (a);
org.junit.Assert.assertTrue (this.element.getAttributes ().size () == 1);
org.junit.Assert.assertEquals (a, this.element.getAttributes ().get (0));
});
});
