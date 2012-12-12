Clazz.declarePackage ("test.pl.wroc.pwr.student.acteditor.model");
Clazz.load (null, "test.pl.wroc.pwr.student.acteditor.model.RegistryTest", ["pl.wroc.pwr.student.acteditor.model.AttributeRegistry", "$.ElementRegistry", "$.TypeRegistry", "pl.wroc.pwr.student.acteditor.model.tags.SimpleAttribute", "$.SimpleElement", "$.SimpleType"], function () {
c$ = Clazz.decorateAsClass (function () {
this.aRegistry = null;
this.eRegistry = null;
this.tRegistry = null;
Clazz.instantialize (this, arguments);
}, test.pl.wroc.pwr.student.acteditor.model, "RegistryTest");
Clazz.defineMethod (c$, "setUp", 
function () {
this.aRegistry = pl.wroc.pwr.student.acteditor.model.AttributeRegistry.getRegistry ();
this.eRegistry = pl.wroc.pwr.student.acteditor.model.ElementRegistry.getRegistry ();
this.tRegistry = pl.wroc.pwr.student.acteditor.model.TypeRegistry.getRegistry ();
});
Clazz.defineMethod (c$, "registryExistTest", 
function () {
org.junit.Assert.assertNotNull (this.aRegistry);
org.junit.Assert.assertNotNull (this.eRegistry);
org.junit.Assert.assertNotNull (this.tRegistry);
});
Clazz.defineMethod (c$, "addingItemTest", 
function () {
var a =  new pl.wroc.pwr.student.acteditor.model.tags.SimpleAttribute ();
a.setName ("nazwa");
var e =  new pl.wroc.pwr.student.acteditor.model.tags.SimpleElement ("nazwa");
var t =  new pl.wroc.pwr.student.acteditor.model.tags.SimpleType ();
t.setName ("nazwa");
this.aRegistry.add (a);
this.eRegistry.add (e);
this.tRegistry.add (t);
org.junit.Assert.assertTrue (this.aRegistry.getAttributes ().size () == 1);
org.junit.Assert.assertTrue (this.eRegistry.getElements ().size () == 1);
org.junit.Assert.assertTrue (this.tRegistry.getTypes ().size () == 1);
});
Clazz.defineMethod (c$, "gettingItemByNameTest", 
function () {
var a =  new pl.wroc.pwr.student.acteditor.model.tags.SimpleAttribute ();
a.setName ("nazwa");
var e =  new pl.wroc.pwr.student.acteditor.model.tags.SimpleElement ("nazwa");
var t =  new pl.wroc.pwr.student.acteditor.model.tags.SimpleType ();
t.setName ("nazwa");
this.aRegistry.add (a);
this.eRegistry.add (e);
this.tRegistry.add (t);
org.junit.Assert.assertEquals ("nazwa", this.aRegistry.get ("nazwa").getName ());
org.junit.Assert.assertEquals ("nazwa", this.eRegistry.get ("nazwa").getName ());
org.junit.Assert.assertEquals ("nazwa", this.tRegistry.get ("nazwa").getName ());
});
Clazz.defineMethod (c$, "addingItemWithNameAlreadyInRegistryTest", 
function () {
var a =  new pl.wroc.pwr.student.acteditor.model.tags.SimpleAttribute ();
a.setName ("nazwa");
var e =  new pl.wroc.pwr.student.acteditor.model.tags.SimpleElement ("nazwa");
var t =  new pl.wroc.pwr.student.acteditor.model.tags.SimpleType ();
t.setName ("nazwa");
this.aRegistry.add (a);
this.eRegistry.add (e);
this.tRegistry.add (t);
this.aRegistry.add (a);
this.eRegistry.add (e);
this.tRegistry.add (t);
this.aRegistry.add (a);
this.eRegistry.add (e);
this.tRegistry.add (t);
org.junit.Assert.assertTrue (this.aRegistry.getAttributes ().size () == 1);
org.junit.Assert.assertTrue (this.eRegistry.getElements ().size () == 1);
org.junit.Assert.assertTrue (this.tRegistry.getTypes ().size () == 1);
});
});
