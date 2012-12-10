Clazz.declarePackage ("pl.wroc.pwr.student.lawcreator.registry");
Clazz.load (null, "pl.wroc.pwr.student.lawcreator.registry.Registry", ["java.util.ArrayList"], function () {
c$ = Clazz.decorateAsClass (function () {
this.items = null;
Clazz.instantialize (this, arguments);
}, pl.wroc.pwr.student.lawcreator.registry, "Registry");
Clazz.makeConstructor (c$, 
($fz = function () {
this.items =  new java.util.ArrayList ();
}, $fz.isPrivate = true, $fz));
c$.getRegistry = Clazz.defineMethod (c$, "getRegistry", 
function () {
if (pl.wroc.pwr.student.lawcreator.registry.Registry.registry == null) {
($t$ = pl.wroc.pwr.student.lawcreator.registry.Registry.registry =  new pl.wroc.pwr.student.lawcreator.registry.Registry (), pl.wroc.pwr.student.lawcreator.registry.Registry.prototype.registry = pl.wroc.pwr.student.lawcreator.registry.Registry.registry, $t$);
}return pl.wroc.pwr.student.lawcreator.registry.Registry.registry;
});
Clazz.defineMethod (c$, "add", 
function (item) {
this.items.add (item);
}, "~O");
Clazz.defineMethod (c$, "getItems", 
function () {
return this.items;
});
Clazz.defineStatics (c$,
"registry", null);
});
