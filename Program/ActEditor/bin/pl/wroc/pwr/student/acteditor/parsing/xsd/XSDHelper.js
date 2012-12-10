Clazz.declarePackage ("pl.wroc.pwr.student.acteditor.parsing.xsd");
Clazz.load (null, "pl.wroc.pwr.student.acteditor.parsing.xsd.XSDHelper", ["pl.wroc.pwr.student.acteditor.model.tags.AttributeGroup", "$.Composition", "$.SimpleAttribute", "$.SimpleType"], function () {
c$ = Clazz.declareType (pl.wroc.pwr.student.acteditor.parsing.xsd, "XSDHelper");
Clazz.makeConstructor (c$, 
function () {
});
Clazz.defineMethod (c$, "createSimpleTypeDefinition", 
function (line) {
var simpleType =  new pl.wroc.pwr.student.acteditor.model.tags.SimpleType ();
var name = this.getAttribute ("name", line);
simpleType.setName (name);
return simpleType;
}, "~S");
Clazz.defineMethod (c$, "createGroupReference", 
function (line) {
var attribute =  new pl.wroc.pwr.student.acteditor.model.tags.AttributeGroup ();
var name = this.getAttribute ("ref", line);
attribute.setName (name);
return attribute;
}, "~S");
Clazz.defineMethod (c$, "createGroupDefinition", 
function (line) {
var attribute =  new pl.wroc.pwr.student.acteditor.model.tags.AttributeGroup ();
var name = this.getAttribute ("name", line);
attribute.setName (name);
return attribute;
}, "~S");
Clazz.defineMethod (c$, "createAttribute", 
function (line) {
var name = this.getAttribute ("name", line);
var defaultValue = this.getAttribute ("default", line);
var type = this.getAttribute ("type", line);
var use = this.getAttribute ("use", line);
var attribute =  new pl.wroc.pwr.student.acteditor.model.tags.SimpleAttribute ();
attribute.setName (name);
attribute.setType (type);
if (!defaultValue.equals ("")) {
attribute.setDefault (defaultValue);
}if (!use.equals ("")) {
attribute.setUse (use);
}return attribute;
}, "~S");
Clazz.defineMethod (c$, "createElementGroupReference", 
function (line) {
var name = this.getAttribute ("ref", line);
var element =  new pl.wroc.pwr.student.acteditor.model.tags.Composition (name, "ref");
return element;
}, "~S");
Clazz.defineMethod (c$, "createElementGroupDefinition", 
function (line) {
var name = this.getAttribute ("name", line);
var element =  new pl.wroc.pwr.student.acteditor.model.tags.Composition (name, "group");
return element;
}, "~S");
Clazz.defineMethod (c$, "createElementReference", 
function (line) {
var name = this.getAttribute ("ref", line);
var minOccurs = this.getAttribute ("minOccurs", line);
var maxOccurs = this.getAttribute ("maxOccurs", line);
var element =  new pl.wroc.pwr.student.acteditor.model.tags.Composition (name, "ref");
if (!minOccurs.equals ("")) {
element.setMinOccurs (minOccurs);
}if (!maxOccurs.equals ("")) {
element.setMaxOccurs (maxOccurs);
}return element;
}, "~S");
Clazz.defineMethod (c$, "setDescription", 
function (object, line) {
var description = line.substring (line.indexOf (">") + 1, line.lastIndexOf ("<"));
if (Clazz.instanceOf (object, pl.wroc.pwr.student.acteditor.model.tags.Composition) || Clazz.instanceOf (object, pl.wroc.pwr.student.acteditor.model.tags.SimpleElement)) {
if ((object).getDescription ().length == 0) {
(object).setDescription (description);
}} else if (Clazz.instanceOf (object, pl.wroc.pwr.student.acteditor.model.tags.Attribute) || Clazz.instanceOf (object, pl.wroc.pwr.student.acteditor.model.tags.AttributeGroup)) {
if ((object).getDescription ().length == 0) {
(object).setDescription (description);
}} else if (Clazz.instanceOf (object, pl.wroc.pwr.student.acteditor.model.tags.SimpleType)) {
if ((object).getDescription ().length == 0) {
(object).setDescription (description);
}}return object;
}, "~O,~S");
Clazz.defineMethod (c$, "createElementDefinition", 
function (line) {
var name = this.getAttribute ("name", line);
var result =  new pl.wroc.pwr.student.acteditor.model.tags.Composition (name, "all");
return result;
}, "~S");
Clazz.defineMethod (c$, "getAttribute", 
function (name, line) {
if (line.contains (name)) {
var begin = line.indexOf (name + "=\"") + (name + "=\"").length;
var end = line.indexOf ("\"", line.indexOf (name + "=\"") + (name + "=\"").length);
return line.substring (begin, end);
}return "";
}, "~S,~S");
});
