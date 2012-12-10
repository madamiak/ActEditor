Clazz.declarePackage ("pl.wroc.pwr.student.acteditor.model.tags");
Clazz.load (["pl.wroc.pwr.student.acteditor.model.tags.Element", "java.util.ArrayList", "$.Collections"], "pl.wroc.pwr.student.acteditor.model.tags.SimpleElement", null, function () {
c$ = Clazz.decorateAsClass (function () {
this.attributes = null;
this.minOccurs = "1";
this.maxOccurs = "1";
this.name = "";
this.type = "";
this.description = "";
this.value = "";
Clazz.instantialize (this, arguments);
}, pl.wroc.pwr.student.acteditor.model.tags, "SimpleElement", null, pl.wroc.pwr.student.acteditor.model.tags.Element);
Clazz.prepareFields (c$, function () {
this.attributes = java.util.Collections.synchronizedList ( new java.util.ArrayList ());
});
Clazz.makeConstructor (c$, 
function (name) {
this.name = name;
}, "~S");
Clazz.overrideMethod (c$, "toString", 
function () {
return this.name + " " + this.description + " " + this.minOccurs + "/" + this.maxOccurs;
});
Clazz.overrideMethod (c$, "add", 
function (element) {
}, "pl.wroc.pwr.student.acteditor.model.tags.Element");
Clazz.overrideMethod (c$, "remove", 
function (element) {
}, "pl.wroc.pwr.student.acteditor.model.tags.Element");
Clazz.overrideMethod (c$, "get", 
function (index) {
return null;
}, "~N");
Clazz.overrideMethod (c$, "getName", 
function () {
return this.name;
});
Clazz.overrideMethod (c$, "setName", 
function (name) {
this.name = name;
}, "~S");
Clazz.overrideMethod (c$, "getElements", 
function () {
return null;
});
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
Clazz.overrideMethod (c$, "getAttributes", 
function () {
return this.attributes;
});
Clazz.overrideMethod (c$, "addAttribute", 
function (attribute) {
this.attributes.add (attribute);
}, "pl.wroc.pwr.student.acteditor.model.tags.Attribute");
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
Clazz.overrideMethod (c$, "getValue", 
function () {
return this.value;
});
Clazz.overrideMethod (c$, "setValue", 
function (value) {
this.value = value;
}, "~S");
});
