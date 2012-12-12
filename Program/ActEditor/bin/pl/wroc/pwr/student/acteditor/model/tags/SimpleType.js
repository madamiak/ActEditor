Clazz.declarePackage ("pl.wroc.pwr.student.acteditor.model.tags");
Clazz.load (null, "pl.wroc.pwr.student.acteditor.model.tags.SimpleType", ["java.util.ArrayList"], function () {
c$ = Clazz.decorateAsClass (function () {
this.enumerations = null;
this.pattern = "";
this.name = "";
this.description = "";
Clazz.instantialize (this, arguments);
}, pl.wroc.pwr.student.acteditor.model.tags, "SimpleType");
Clazz.overrideMethod (c$, "toString", 
function () {
return this.name + " " + this.description;
});
Clazz.makeConstructor (c$, 
function () {
this.enumerations =  new java.util.ArrayList ();
});
Clazz.defineMethod (c$, "setName", 
function (name) {
this.name = name;
}, "~S");
Clazz.defineMethod (c$, "getName", 
function () {
return this.name;
});
Clazz.defineMethod (c$, "getPattern", 
function () {
return this.pattern;
});
Clazz.defineMethod (c$, "setPattern", 
function (pattern) {
this.pattern = pattern;
}, "~S");
Clazz.defineMethod (c$, "getDescription", 
function () {
return this.description;
});
Clazz.defineMethod (c$, "setDescription", 
function (description) {
this.description = description;
}, "~S");
Clazz.defineMethod (c$, "add", 
function (enumeration) {
this.enumerations.add (enumeration);
}, "~S");
Clazz.defineMethod (c$, "getEnumeratinos", 
function () {
return this.enumerations;
});
});
