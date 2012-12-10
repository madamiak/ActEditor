Clazz.declarePackage ("pl.wroc.pwr.student.lawcreator.xml");
Clazz.load (["pl.wroc.pwr.student.lawcreator.xml.Attribute"], "pl.wroc.pwr.student.lawcreator.xml.AttributeImpl", ["java.util.ArrayList"], function () {
c$ = Clazz.decorateAsClass (function () {
this.name = "";
this.defaultValue = "";
this.use = "optional";
this.attributes = null;
this.type = null;
Clazz.instantialize (this, arguments);
}, pl.wroc.pwr.student.lawcreator.xml, "AttributeImpl", null, pl.wroc.pwr.student.lawcreator.xml.Attribute);
Clazz.makeConstructor (c$, 
function () {
this.attributes =  new java.util.ArrayList ();
});
Clazz.defineMethod (c$, "getName", 
function () {
return this.name;
});
Clazz.overrideMethod (c$, "setName", 
function (name) {
this.name = name;
}, "~S");
Clazz.overrideMethod (c$, "getDefault", 
function () {
return this.defaultValue;
});
Clazz.overrideMethod (c$, "setDefault", 
function (defaultValue) {
this.defaultValue = defaultValue;
}, "~S");
Clazz.overrideMethod (c$, "getUse", 
function () {
return this.use;
});
Clazz.overrideMethod (c$, "setUse", 
function (use) {
this.use = use;
}, "~S");
Clazz.overrideMethod (c$, "getType", 
function () {
return this.type;
});
Clazz.overrideMethod (c$, "setType", 
function (type) {
this.type = type;
}, "pl.wroc.pwr.student.lawcreator.xml.Type");
Clazz.overrideMethod (c$, "getAttributes", 
function () {
return this.attributes;
});
Clazz.overrideMethod (c$, "add", 
function (attribute) {
this.attributes.add (attribute);
}, "pl.wroc.pwr.student.lawcreator.xml.Attribute");
Clazz.overrideMethod (c$, "getAttribute", 
function (name) {
for (var each, $each = this.attributes.iterator (); $each.hasNext () && ((each = $each.next ()) || true);) {
if ((each).getName ().equals (name)) {
return each;
}}
return null;
}, "~S");
});
