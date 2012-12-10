Clazz.declarePackage ("test.lawcreator.registry");
Clazz.load (null, "test.lawcreator.registry.RegistryTest", ["pl.wroc.pwr.student.lawcreator.registry.Registry"], function () {
c$ = Clazz.decorateAsClass (function () {
this.registry = null;
Clazz.instantialize (this, arguments);
}, test.lawcreator.registry, "RegistryTest");
Clazz.defineMethod (c$, "setUp", 
function () {
this.registry = pl.wroc.pwr.student.lawcreator.registry.Registry.getRegistry ();
});
Clazz.defineMethod (c$, "gettingInstanceOfRegistryTest", 
function () {
org.junit.Assert.assertEquals (pl.wroc.pwr.student.lawcreator.registry.Registry.getRegistry (), this.registry);
});
Clazz.defineMethod (c$, "addingAndGettingItemsTest", 
function () {
this.registry.add ("item");
this.registry.add ("another item");
var item = this.registry.getItems ().get (0);
org.junit.Assert.assertEquals ("item", item);
org.junit.Assert.assertEquals (2, this.registry.getItems ().size ());
});
});
