Clazz.declarePackage ("pl.wroc.pwr.student.acteditor.model");
Clazz.load (null, "pl.wroc.pwr.student.acteditor.model.ElementRegistry", ["java.util.ArrayList", "$.Collections"], function () {
c$ = Clazz.decorateAsClass (function () {
this.elements = null;
Clazz.instantialize (this, arguments);
}, pl.wroc.pwr.student.acteditor.model, "ElementRegistry");
Clazz.makeConstructor (c$, 
($fz = function () {
this.elements = java.util.Collections.synchronizedList ( new java.util.ArrayList ());
}, $fz.isPrivate = true, $fz));
c$.getRegistry = Clazz.defineMethod (c$, "getRegistry", 
function () {
if (pl.wroc.pwr.student.acteditor.model.ElementRegistry.registry == null) {
($t$ = pl.wroc.pwr.student.acteditor.model.ElementRegistry.registry =  new pl.wroc.pwr.student.acteditor.model.ElementRegistry (), pl.wroc.pwr.student.acteditor.model.ElementRegistry.prototype.registry = pl.wroc.pwr.student.acteditor.model.ElementRegistry.registry, $t$);
}return pl.wroc.pwr.student.acteditor.model.ElementRegistry.registry;
});
Clazz.defineMethod (c$, "add", 
function (element) {
for (var each, $each = this.elements.iterator (); $each.hasNext () && ((each = $each.next ()) || true);) {
if ((each).getName ().equals (element.getName ())) {
return ;
}}
this.elements.add (element);
}, "pl.wroc.pwr.student.acteditor.parsing.xsd.Element");
Clazz.defineMethod (c$, "get", 
function (name) {
for (var each, $each = this.elements.iterator (); $each.hasNext () && ((each = $each.next ()) || true);) {
if ((each).getName ().equals (name)) {
return each;
}}
return null;
}, "~S");
Clazz.defineMethod (c$, "getElements", 
function () {
return this.elements;
});
Clazz.defineStatics (c$,
"registry", null);
});
