Clazz.declarePackage ("pl.wroc.pwr.student.lawcreator.xml");
Clazz.load (["pl.wroc.pwr.student.lawcreator.xml.Type"], "pl.wroc.pwr.student.lawcreator.xml.TypeImpl", ["java.util.ArrayList"], function () {
c$ = Clazz.decorateAsClass (function () {
this.name = null;
this.pattern = null;
this.enumerations = null;
Clazz.instantialize (this, arguments);
}, pl.wroc.pwr.student.lawcreator.xml, "TypeImpl", null, pl.wroc.pwr.student.lawcreator.xml.Type);
Clazz.makeConstructor (c$, 
function () {
this.enumerations =  new java.util.ArrayList ();
});
Clazz.overrideMethod (c$, "getName", 
function () {
return this.name;
});
Clazz.overrideMethod (c$, "setName", 
function (name) {
this.name = name;
}, "~S");
Clazz.overrideMethod (c$, "getEnumerations", 
function () {
return this.enumerations;
});
Clazz.overrideMethod (c$, "add", 
function (enumeration) {
this.enumerations.add (enumeration);
}, "~S");
Clazz.overrideMethod (c$, "getPattern", 
function () {
return this.pattern;
});
Clazz.overrideMethod (c$, "setPattern", 
function (pattern) {
this.pattern = pattern;
}, "~S");
});
