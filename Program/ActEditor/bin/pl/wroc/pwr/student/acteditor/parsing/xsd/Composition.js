Clazz.declarePackage ("pl.wroc.pwr.student.acteditor.parsing.xsd");
Clazz.load (["pl.wroc.pwr.student.acteditor.parsing.xsd.Element", "java.util.ArrayList", "$.Collections"], "pl.wroc.pwr.student.acteditor.parsing.xsd.Composition", null, function () {
c$ = Clazz.decorateAsClass (function () {
this.elements = null;
this.description = "";
this.name = "";
this.type = "";
Clazz.instantialize (this, arguments);
}, pl.wroc.pwr.student.acteditor.parsing.xsd, "Composition", null, pl.wroc.pwr.student.acteditor.parsing.xsd.Element);
Clazz.prepareFields (c$, function () {
this.elements = java.util.Collections.synchronizedList ( new java.util.ArrayList ());
});
Clazz.makeConstructor (c$, 
function (name, type) {
this.name = name;
this.type = type;
}, "~S,~S");
Clazz.overrideMethod (c$, "add", 
function (element) {
this.elements.add (element);
}, "pl.wroc.pwr.student.acteditor.parsing.xsd.Element");
Clazz.overrideMethod (c$, "remove", 
function (element) {
this.elements.remove (element);
}, "pl.wroc.pwr.student.acteditor.parsing.xsd.Element");
Clazz.overrideMethod (c$, "get", 
function (index) {
return this.elements.get (index);
}, "~N");
Clazz.overrideMethod (c$, "getElements", 
function () {
return this.elements;
});
Clazz.overrideMethod (c$, "getDescription", 
function () {
return this.description;
});
Clazz.overrideMethod (c$, "setDescription", 
function (description) {
this.description = description;
}, "~S");
Clazz.defineMethod (c$, "toString", 
function () {
var result = this.name + " " + this.description;
for (var e, $e = this.elements.iterator (); $e.hasNext () && ((e = $e.next ()) || true);) {
result += "\n\t" + e.toString ();
}
return result;
});
Clazz.overrideMethod (c$, "getName", 
function () {
return this.name;
});
Clazz.overrideMethod (c$, "setName", 
function (name) {
this.name = name;
}, "~S");
Clazz.overrideMethod (c$, "getType", 
function () {
return this.type;
});
Clazz.overrideMethod (c$, "setType", 
function (type) {
this.type = type;
}, "~S");
});
