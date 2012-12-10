Clazz.declarePackage ("pl.wroc.pwr.student.acteditor.model.tags");
Clazz.load (["pl.wroc.pwr.student.acteditor.model.tags.Attribute"], "pl.wroc.pwr.student.acteditor.model.tags.AttributeGroup", ["java.util.ArrayList"], function () {
c$ = Clazz.decorateAsClass (function () {
this.name = "";
this.type = "";
this.use = "";
this.description = "";
this.attributes = null;
Clazz.instantialize (this, arguments);
}, pl.wroc.pwr.student.acteditor.model.tags, "AttributeGroup", null, pl.wroc.pwr.student.acteditor.model.tags.Attribute);
Clazz.makeConstructor (c$, 
function () {
this.attributes =  new java.util.ArrayList ();
this.use = "optional";
});
Clazz.overrideMethod (c$, "toString", 
function () {
var result = this.name + " " + this.description + " " + this.type + " " + this.use + "\n";
for (var o, $o = this.attributes.iterator (); $o.hasNext () && ((o = $o.next ()) || true);) {
result += "\t" + (o).getName () + "\n";
}
return result;
});
Clazz.defineMethod (c$, "getName", 
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
this.attributes.add (attribute);
}, "pl.wroc.pwr.student.acteditor.model.tags.Attribute");
Clazz.overrideMethod (c$, "getAttributes", 
function () {
return this.attributes;
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
return null;
});
Clazz.overrideMethod (c$, "setSimpleType", 
function (simpleType) {
}, "pl.wroc.pwr.student.acteditor.model.tags.SimpleType");
Clazz.overrideMethod (c$, "getDefault", 
function () {
return null;
});
Clazz.overrideMethod (c$, "setDefault", 
function (defaultValue) {
}, "~S");
});
