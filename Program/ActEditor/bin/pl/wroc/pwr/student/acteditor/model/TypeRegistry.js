Clazz.declarePackage ("pl.wroc.pwr.student.acteditor.model");
Clazz.load (null, "pl.wroc.pwr.student.acteditor.model.TypeRegistry", ["java.util.ArrayList"], function () {
c$ = Clazz.decorateAsClass (function () {
this.types = null;
Clazz.instantialize (this, arguments);
}, pl.wroc.pwr.student.acteditor.model, "TypeRegistry");
Clazz.makeConstructor (c$, 
($fz = function () {
this.types =  new java.util.ArrayList ();
}, $fz.isPrivate = true, $fz));
c$.getRegistry = Clazz.defineMethod (c$, "getRegistry", 
function () {
if (pl.wroc.pwr.student.acteditor.model.TypeRegistry.registry == null) {
($t$ = pl.wroc.pwr.student.acteditor.model.TypeRegistry.registry =  new pl.wroc.pwr.student.acteditor.model.TypeRegistry (), pl.wroc.pwr.student.acteditor.model.TypeRegistry.prototype.registry = pl.wroc.pwr.student.acteditor.model.TypeRegistry.registry, $t$);
}return pl.wroc.pwr.student.acteditor.model.TypeRegistry.registry;
});
Clazz.defineMethod (c$, "add", 
function (type) {
for (var each, $each = this.types.iterator (); $each.hasNext () && ((each = $each.next ()) || true);) {
if ((each).getName ().equals (type.getName ())) {
return ;
}}
this.types.add (type);
}, "pl.wroc.pwr.student.acteditor.model.tags.SimpleType");
Clazz.defineMethod (c$, "get", 
function (index) {
return this.types.get (index);
}, "~N");
Clazz.defineMethod (c$, "get", 
function (name) {
for (var each, $each = this.types.iterator (); $each.hasNext () && ((each = $each.next ()) || true);) {
if ((each).getName ().equals (name)) {
return each;
}}
return null;
}, "~S");
Clazz.defineMethod (c$, "getTypes", 
function () {
return this.types;
});
Clazz.defineStatics (c$,
"registry", null);
});
