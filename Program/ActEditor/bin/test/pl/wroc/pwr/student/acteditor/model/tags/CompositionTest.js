Clazz.declarePackage ("test.pl.wroc.pwr.student.acteditor.model.tags");
Clazz.load (null, "test.pl.wroc.pwr.student.acteditor.model.tags.CompositionTest", ["pl.wroc.pwr.student.acteditor.model.tags.Composition", "$.SimpleElement"], function () {
c$ = Clazz.decorateAsClass (function () {
this.element = null;
Clazz.instantialize (this, arguments);
}, test.pl.wroc.pwr.student.acteditor.model.tags, "CompositionTest");
Clazz.defineMethod (c$, "setUp", 
function () {
this.element =  new pl.wroc.pwr.student.acteditor.model.tags.Composition ("name", "type");
});
Clazz.defineMethod (c$, "creatingCompositionTest", 
function () {
org.junit.Assert.assertEquals ("name", this.element.getName ());
org.junit.Assert.assertEquals ("type", this.element.getType ());
});
Clazz.defineMethod (c$, "settingAndGettingTest", 
function () {
this.element.setDescription ("description");
this.element.setMaxOccurs ("2");
this.element.setMinOccurs ("0");
this.element.setValue ("value");
org.junit.Assert.assertEquals ("description", this.element.getDescription ());
org.junit.Assert.assertEquals ("2", this.element.getMaxOccurs ());
org.junit.Assert.assertEquals ("0", this.element.getMinOccurs ());
org.junit.Assert.assertEquals ("value", this.element.getValue ());
});
Clazz.defineMethod (c$, "addingItemsTest", 
function () {
var s =  new pl.wroc.pwr.student.acteditor.model.tags.SimpleElement ("subElement");
this.element.add (s);
org.junit.Assert.assertTrue (this.element.getElements ().size () == 1);
org.junit.Assert.assertEquals (s, this.element.getElements ().get (0));
});
});
