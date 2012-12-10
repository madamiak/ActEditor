Clazz.declarePackage ("pl.wroc.pwr.student.lawcreator.xml");
Clazz.load (["pl.wroc.pwr.student.lawcreator.xml.Element"], "pl.wroc.pwr.student.lawcreator.xml.ElementImpl", ["java.util.ArrayList"], function () {
c$ = Clazz.decorateAsClass (function () {
this.name = "";
this.type = "";
this.description = "";
this.minOccurs = "1";
this.maxOccurs = "1";
this.children = null;
this.attributes = null;
Clazz.instantialize (this, arguments);
}, pl.wroc.pwr.student.lawcreator.xml, "ElementImpl", null, pl.wroc.pwr.student.lawcreator.xml.Element);
Clazz.makeConstructor (c$, 
function () {
this.children =  new java.util.ArrayList ();
this.attributes =  new java.util.ArrayList ();
});
Clazz.overrideMethod (c$, "getName", 
function () {
return this.name;
});
Clazz.overrideMethod (c$, "setName", 
function (name) {
this.name = name;
}, "~S");
Clazz.overrideMethod (c$, "getDescription", 
function () {
return this.description;
});
Clazz.overrideMethod (c$, "setDescription", 
function (description) {
this.description = description;
}, "~S");
Clazz.overrideMethod (c$, "getType", 
function () {
return this.type;
});
Clazz.overrideMethod (c$, "setType", 
function (type) {
this.type = type;
}, "~S");
Clazz.overrideMethod (c$, "getMinOccurs", 
function () {
return this.minOccurs;
});
Clazz.overrideMethod (c$, "setMinOccurs", 
function (minOccurs) {
this.minOccurs = minOccurs;
}, "~S");
Clazz.overrideMethod (c$, "getMaxOccurs", 
function () {
return this.maxOccurs;
});
Clazz.overrideMethod (c$, "setMaxOccurs", 
function (maxOccurs) {
this.maxOccurs = maxOccurs;
}, "~S");
Clazz.overrideMethod (c$, "getElements", 
function () {
return this.children;
});
Clazz.overrideMethod (c$, "add", 
function (child) {
this.children.add (child);
}, "pl.wroc.pwr.student.lawcreator.xml.Element");
Clazz.overrideMethod (c$, "getAttributes", 
function () {
return this.attributes;
});
Clazz.overrideMethod (c$, "addAttribute", 
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
