Clazz.declarePackage ("pl.wroc.pwr.student.acteditor.model.tags");
Clazz.load (["pl.wroc.pwr.student.acteditor.model.tags.Element"], "pl.wroc.pwr.student.acteditor.model.tags.SimpleElement", null, function () {
c$ = Clazz.decorateAsClass (function () {
this.minOccurs = "1";
this.maxOccurs = "1";
this.name = "";
this.description = "";
Clazz.instantialize (this, arguments);
}, pl.wroc.pwr.student.acteditor.model.tags, "SimpleElement", null, pl.wroc.pwr.student.acteditor.model.tags.Element);
Clazz.makeConstructor (c$, 
function (name) {
this.name = name;
}, "~S");
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
return this.description + "\n" + this.minOccurs + "\n" + this.maxOccurs;
});
Clazz.overrideMethod (c$, "setDescription", 
function (description) {
this.description = description;
}, "~S");
Clazz.overrideMethod (c$, "toString", 
function () {
return this.name + " " + this.description;
});
Clazz.overrideMethod (c$, "getType", 
function () {
return null;
});
Clazz.overrideMethod (c$, "setType", 
function (type) {
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
});
