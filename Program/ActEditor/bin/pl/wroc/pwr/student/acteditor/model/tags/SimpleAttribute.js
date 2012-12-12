Clazz.declarePackage ("pl.wroc.pwr.student.acteditor.model.tags");
Clazz.load (["pl.wroc.pwr.student.acteditor.model.tags.Attribute"], "pl.wroc.pwr.student.acteditor.model.tags.SimpleAttribute", null, function () {
c$ = Clazz.decorateAsClass (function () {
this.name = "";
this.type = "";
this.simpleType = null;
this.defaultValue = "";
this.use = "optional";
this.description = "";
Clazz.instantialize (this, arguments);
}, pl.wroc.pwr.student.acteditor.model.tags, "SimpleAttribute", null, pl.wroc.pwr.student.acteditor.model.tags.Attribute);
Clazz.overrideMethod (c$, "toString", 
function () {
return "\n" + this.name;
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
Clazz.overrideMethod (c$, "getUse", 
function () {
return this.use;
});
Clazz.overrideMethod (c$, "setUse", 
function (use) {
this.use = use;
}, "~S");
Clazz.overrideMethod (c$, "add", 
function (attribute) {
}, "pl.wroc.pwr.student.acteditor.model.tags.Attribute");
Clazz.overrideMethod (c$, "getAttributes", 
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
Clazz.overrideMethod (c$, "getSimpleType", 
function () {
return this.simpleType;
});
Clazz.overrideMethod (c$, "setSimpleType", 
function (simpleType) {
this.simpleType = simpleType;
}, "pl.wroc.pwr.student.acteditor.model.tags.SimpleType");
Clazz.overrideMethod (c$, "getDefault", 
function () {
return this.defaultValue;
});
Clazz.overrideMethod (c$, "setDefault", 
function (defaultValue) {
this.defaultValue = defaultValue;
}, "~S");
});
