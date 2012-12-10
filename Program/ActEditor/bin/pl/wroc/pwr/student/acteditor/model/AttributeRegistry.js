Clazz.declarePackage ("pl.wroc.pwr.student.acteditor.model");
Clazz.load (null, "pl.wroc.pwr.student.acteditor.model.AttributeRegistry", ["java.util.ArrayList"], function () {
c$ = Clazz.decorateAsClass (function () {
this.attributes = null;
Clazz.instantialize (this, arguments);
}, pl.wroc.pwr.student.acteditor.model, "AttributeRegistry");
Clazz.makeConstructor (c$, 
($fz = function () {
this.attributes =  new java.util.ArrayList ();
}, $fz.isPrivate = true, $fz));
c$.getRegistry = Clazz.defineMethod (c$, "getRegistry", 
function () {
if (pl.wroc.pwr.student.acteditor.model.AttributeRegistry.registry == null) {
($t$ = pl.wroc.pwr.student.acteditor.model.AttributeRegistry.registry =  new pl.wroc.pwr.student.acteditor.model.AttributeRegistry (), pl.wroc.pwr.student.acteditor.model.AttributeRegistry.prototype.registry = pl.wroc.pwr.student.acteditor.model.AttributeRegistry.registry, $t$);
}return pl.wroc.pwr.student.acteditor.model.AttributeRegistry.registry;
});
Clazz.defineMethod (c$, "add", 
function (attribute) {
for (var each, $each = this.attributes.iterator (); $each.hasNext () && ((each = $each.next ()) || true);) {
if ((each).getName ().equals (attribute.getName ())) {
return ;
}}
this.attributes.add (attribute);
}, "pl.wroc.pwr.student.acteditor.model.tags.Attribute");
Clazz.defineMethod (c$, "get", 
function (index) {
return this.attributes.get (index);
}, "~N");
Clazz.defineMethod (c$, "get", 
function (name) {
for (var each, $each = this.attributes.iterator (); $each.hasNext () && ((each = $each.next ()) || true);) {
if ((each).getName ().equals (name)) {
return each;
}}
return null;
}, "~S");
Clazz.defineMethod (c$, "getAttributes", 
function () {
return this.attributes;
});
Clazz.defineStatics (c$,
"registry", null);
});
