Clazz.declarePackage ("pl.wroc.pwr.student.acteditor.parsing.xsd");
Clazz.load (["pl.wroc.pwr.student.acteditor.model.AttributeRegistry", "$.ElementRegistry", "$.TypeRegistry"], "pl.wroc.pwr.student.acteditor.parsing.xsd.XSDEventHandler", ["java.util.Stack", "pl.wroc.pwr.student.acteditor.model.tags.Composition", "$.SimpleType", "pl.wroc.pwr.student.acteditor.parsing.xsd.XSDHelper"], function () {
c$ = Clazz.decorateAsClass (function () {
this.stack = null;
this.helper = null;
this.complexTypeDefinition = false;
this.elements = null;
this.attributes = null;
this.types = null;
Clazz.instantialize (this, arguments);
}, pl.wroc.pwr.student.acteditor.parsing.xsd, "XSDEventHandler");
Clazz.prepareFields (c$, function () {
this.elements = pl.wroc.pwr.student.acteditor.model.ElementRegistry.getRegistry ();
this.attributes = pl.wroc.pwr.student.acteditor.model.AttributeRegistry.getRegistry ();
this.types = pl.wroc.pwr.student.acteditor.model.TypeRegistry.getRegistry ();
});
Clazz.makeConstructor (c$, 
function () {
this.stack =  new java.util.Stack ();
this.helper =  new pl.wroc.pwr.student.acteditor.parsing.xsd.XSDHelper ();
});
Clazz.defineMethod (c$, "handleEvent", 
function (token, line) {
switch (token) {
case "documentation":
this.documentationEventHandle (line);
break;
case "element-def":
this.elementDefinitionEventHandle (line);
break;
case "one-line-element-def":
this.oneLineElementDefinitionEventHandle (line);
break;
case "close-element-def":
this.closingElementEventHandle (line);
break;
case "element-ref-without-closing":
this.elementReferenceEventHandle (line);
break;
case "one-line-element-ref":
this.oneLineElementReferenceEventHandle (line);
break;
case "sequence":
this.sequenceEventHandle (line);
break;
case "closing-sequence":
this.closingSequenceEventHandle (line);
break;
case "choice":
this.choiceEventHandle (line);
break;
case "closing-choice":
this.closingChoiceEventHandle (line);
break;
case "element-group-def":
this.elementGroupDefinitionEventHandle (line);
break;
case "element-group-ref":
this.elementGroupReferenceEventHandle (line);
break;
case "closing-element-group-def":
this.closingElementGroupDefinitionEventHandle (line);
break;
case "complex-type-def":
this.complexTypeDefinition = true;
this.complexTypeDefinitionEventHandle (line);
break;
case "closing-complex-type-def":
if (this.complexTypeDefinition) {
this.closingComplexTypeDefinitionEventHandler (line);
this.complexTypeDefinition = false;
}break;
case "attribute-def-without-closing":
this.attributeDefinitionEventHandle (line);
break;
case "one-line-attribute-def":
this.oneLineAttributeDefinitionEventHandle (line);
break;
case "closing-attribute-def":
this.closingAttributeDefinitionEventHandle (line);
break;
case "attribute-group-def":
this.attributeGroupDefinitionEventHandle (line);
break;
case "attribute-group-ref":
this.attributeGroupReferenceEventHandle (line);
break;
case "closing-attribute-group":
this.closingAttributeGroupEventHandle (line);
break;
case "simple-type-def":
this.simpleTypeDefinitionEventHandle (line);
break;
case "simple-type-beg":
this.simpleTypeBeginningEventHandle (line);
break;
case "closing-simple-type":
this.closingSimpleTypeEventHandle (line);
break;
case "enumeration":
this.enumerationEventHandle (line);
break;
case "pattern":
this.patternEventHandle (line);
break;
}
}, "~S,~S");
Clazz.defineMethod (c$, "patternEventHandle", 
($fz = function (line) {
var simpleType = this.stack.pop ();
var pattern = this.helper.getAttribute ("value", line);
simpleType.setPattern (pattern);
this.stack.push (simpleType);
}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "enumerationEventHandle", 
($fz = function (line) {
var simpleType = this.stack.pop ();
var enumeration = this.helper.getAttribute ("value", line);
simpleType.add (enumeration);
this.stack.push (simpleType);
}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "simpleTypeBeginningEventHandle", 
($fz = function (line) {
var simpleType =  new pl.wroc.pwr.student.acteditor.model.tags.SimpleType ();
this.stack.push (simpleType);
}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "closingSimpleTypeEventHandle", 
($fz = function (line) {
var simpleType = this.stack.pop ();
if (!this.stack.isEmpty ()) {
var parent = this.stack.pop ();
if (Clazz.instanceOf (parent, pl.wroc.pwr.student.acteditor.model.tags.Attribute)) {
(parent).setSimpleType (simpleType);
this.stack.push (parent);
}} else {
this.types.add (simpleType);
}}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "simpleTypeDefinitionEventHandle", 
($fz = function (line) {
var simpleType = this.helper.createSimpleTypeDefinition (line);
this.stack.push (simpleType);
}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "closingAttributeGroupEventHandle", 
($fz = function (line) {
var attribute = this.stack.pop ();
this.attributes.add (attribute);
}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "attributeGroupReferenceEventHandle", 
($fz = function (line) {
var attribute = this.helper.createGroupReference (line);
var parent = this.stack.pop ();
if (Clazz.instanceOf (parent, pl.wroc.pwr.student.acteditor.model.tags.Element)) {
(parent).addAttribute (attribute);
} else if (Clazz.instanceOf (parent, pl.wroc.pwr.student.acteditor.model.tags.Attribute)) {
(parent).add (attribute);
}this.stack.push (parent);
}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "attributeGroupDefinitionEventHandle", 
($fz = function (line) {
var attribute = this.helper.createGroupDefinition (line);
this.stack.push (attribute);
}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "closingAttributeDefinitionEventHandle", 
($fz = function (line) {
var attribute = this.stack.pop ();
var parent = this.stack.pop ();
if (Clazz.instanceOf (parent, pl.wroc.pwr.student.acteditor.model.tags.Element)) {
(parent).addAttribute (attribute);
} else if (Clazz.instanceOf (parent, pl.wroc.pwr.student.acteditor.model.tags.Attribute)) {
(parent).add (attribute);
}this.stack.push (parent);
}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "oneLineAttributeDefinitionEventHandle", 
($fz = function (line) {
var attribute = this.helper.createAttribute (line);
var parent = this.stack.pop ();
if (Clazz.instanceOf (parent, pl.wroc.pwr.student.acteditor.model.tags.Element)) {
(parent).addAttribute (attribute);
} else if (Clazz.instanceOf (parent, pl.wroc.pwr.student.acteditor.model.tags.Attribute)) {
(parent).add (attribute);
}this.stack.push (parent);
}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "attributeDefinitionEventHandle", 
($fz = function (line) {
var attribute = this.helper.createAttribute (line);
this.stack.push (attribute);
}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "closingComplexTypeDefinitionEventHandler", 
($fz = function (line) {
var element = this.stack.pop ();
this.elements.add (element);
}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "complexTypeDefinitionEventHandle", 
($fz = function (line) {
var name = this.helper.getAttribute ("name", line);
var element =  new pl.wroc.pwr.student.acteditor.model.tags.Composition (name, "complex");
this.stack.push (element);
}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "closingElementGroupDefinitionEventHandle", 
($fz = function (line) {
var element = this.stack.pop ();
this.elements.add (element);
}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "elementGroupReferenceEventHandle", 
($fz = function (line) {
var element = this.helper.createElementGroupReference (line);
var minOccurs = this.helper.getAttribute ("minOccurs", line);
var maxOccurs = this.helper.getAttribute ("maxOccurs", line);
if (!minOccurs.equals ("")) {
element.setMinOccurs (minOccurs);
}if (!maxOccurs.equals ("")) {
element.setMaxOccurs (maxOccurs);
}var parent = this.stack.pop ();
parent.add (element);
this.stack.push (parent);
}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "elementGroupDefinitionEventHandle", 
($fz = function (line) {
var element = this.helper.createElementGroupDefinition (line);
this.stack.push (element);
}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "closingChoiceEventHandle", 
($fz = function (line) {
var element = this.stack.pop ();
if (!this.stack.isEmpty ()) {
var parent = this.stack.pop ();
parent.add (element);
this.stack.push (parent);
}}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "closingSequenceEventHandle", 
($fz = function (line) {
var element = this.stack.pop ();
var parent = this.stack.pop ();
parent.add (element);
this.stack.push (parent);
}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "sequenceEventHandle", 
($fz = function (line) {
var element =  new pl.wroc.pwr.student.acteditor.model.tags.Composition ("rozwiń", "seq");
var minOccurs = this.helper.getAttribute ("minOccurs", line);
var maxOccurs = this.helper.getAttribute ("maxOccurs", line);
if (!minOccurs.equals ("")) {
element.setMinOccurs (minOccurs);
}if (!maxOccurs.equals ("")) {
element.setMaxOccurs (maxOccurs);
}this.stack.push (element);
}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "oneLineElementDefinitionEventHandle", 
($fz = function (line) {
var element = this.helper.createElementDefinition (line);
this.elements.add (element);
}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "elementReferenceEventHandle", 
($fz = function (line) {
var element = this.helper.createElementReference (line);
this.stack.push (element);
}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "oneLineElementReferenceEventHandle", 
($fz = function (line) {
var element = this.helper.createElementReference (line);
var parent = null;
if (!this.stack.isEmpty ()) {
parent = this.stack.pop ();
parent.add (element);
this.stack.push (parent);
}}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "closingElementEventHandle", 
($fz = function (line) {
var element = this.stack.pop ();
if (element.getType ().equals ("ref")) {
var parent = this.stack.pop ();
parent.add (element);
this.stack.push (parent);
} else {
this.elements.add (element);
}}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "documentationEventHandle", 
($fz = function (line) {
var parent = null;
if (!this.stack.isEmpty ()) {
parent = this.stack.pop ();
}if (Clazz.instanceOf (parent, pl.wroc.pwr.student.acteditor.model.tags.Composition) || Clazz.instanceOf (parent, pl.wroc.pwr.student.acteditor.model.tags.SimpleElement)) {
var element = parent;
element = this.helper.setDescription (element, line);
this.stack.push (element);
} else if (Clazz.instanceOf (parent, pl.wroc.pwr.student.acteditor.model.tags.Attribute) || Clazz.instanceOf (parent, pl.wroc.pwr.student.acteditor.model.tags.AttributeGroup)) {
var attribute = parent;
attribute = this.helper.setDescription (attribute, line);
this.stack.push (attribute);
} else if (Clazz.instanceOf (parent, pl.wroc.pwr.student.acteditor.model.tags.SimpleType)) {
var simpleType = parent;
simpleType = this.helper.setDescription (simpleType, line);
this.stack.push (simpleType);
}}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "elementDefinitionEventHandle", 
($fz = function (line) {
var element = this.helper.createElementDefinition (line);
this.stack.push (element);
}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "choiceEventHandle", 
function (line) {
var element =  new pl.wroc.pwr.student.acteditor.model.tags.Composition ("rozwiń", "choice");
var minOccurs = this.helper.getAttribute ("minOccurs", line);
var maxOccurs = this.helper.getAttribute ("maxOccurs", line);
if (!minOccurs.equals ("")) {
element.setMinOccurs (minOccurs);
}if (!maxOccurs.equals ("")) {
element.setMaxOccurs (maxOccurs);
}this.stack.push (element);
}, "~S");
});
