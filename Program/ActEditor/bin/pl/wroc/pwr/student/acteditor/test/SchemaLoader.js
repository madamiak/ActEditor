Clazz.declarePackage ("pl.wroc.pwr.student.acteditor.test");
Clazz.load (["java.util.Stack", "pl.wroc.pwr.student.acteditor.model.AttributeRegistry", "$.ElementRegistry", "$.Schema", "$.TypeRegistry"], "pl.wroc.pwr.student.acteditor.test.SchemaLoader", ["pl.wroc.pwr.student.acteditor.model.tags.AttributeGroup", "$.Composition", "$.SimpleAttribute", "$.SimpleType"], function () {
c$ = Clazz.decorateAsClass (function () {
this.elements = null;
this.attributes = null;
this.types = null;
this.lines = null;
this.stack = null;
this.complexTypeDefinition = false;
Clazz.instantialize (this, arguments);
}, pl.wroc.pwr.student.acteditor.test, "SchemaLoader");
Clazz.prepareFields (c$, function () {
this.elements = pl.wroc.pwr.student.acteditor.model.ElementRegistry.getRegistry ();
this.attributes = pl.wroc.pwr.student.acteditor.model.AttributeRegistry.getRegistry ();
this.types = pl.wroc.pwr.student.acteditor.model.TypeRegistry.getRegistry ();
this.lines =  new pl.wroc.pwr.student.acteditor.model.Schema ().getSchemaContent ().$plit ("\n");
this.stack =  new java.util.Stack ();
});
Clazz.defineMethod (c$, "parseSAX", 
function () {
var token = "";
for (var line, $line = 0, $$line = this.lines; $line < $$line.length && ((line = $$line[$line]) || true); $line++) {
token = this.getEvent (line);
this.handleEvent (token, line);
}
});
Clazz.defineMethod (c$, "handleEvent", 
($fz = function (token, line) {
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
}, $fz.isPrivate = true, $fz), "~S,~S");
Clazz.defineMethod (c$, "patternEventHandle", 
($fz = function (line) {
var simpleType = this.stack.pop ();
var pattern = this.getAttribute ("value", line);
simpleType.setPattern (pattern);
this.stack.push (simpleType);
}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "enumerationEventHandle", 
($fz = function (line) {
var simpleType = this.stack.pop ();
var enumeration = this.getAttribute ("value", line);
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
var simpleType = this.createSimpleTypeDefinition (line);
this.stack.push (simpleType);
}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "createSimpleTypeDefinition", 
($fz = function (line) {
var simpleType =  new pl.wroc.pwr.student.acteditor.model.tags.SimpleType ();
var name = this.getAttribute ("name", line);
simpleType.setName (name);
return simpleType;
}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "closingAttributeGroupEventHandle", 
($fz = function (line) {
var attribute = this.stack.pop ();
this.attributes.add (attribute);
}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "attributeGroupReferenceEventHandle", 
($fz = function (line) {
var attribute = this.createGroupReference (line);
var parent = this.stack.pop ();
if (Clazz.instanceOf (parent, pl.wroc.pwr.student.acteditor.model.tags.Element)) {
(parent).addAttribute (attribute);
} else if (Clazz.instanceOf (parent, pl.wroc.pwr.student.acteditor.model.tags.Attribute)) {
(parent).add (attribute);
}this.stack.push (parent);
}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "createGroupReference", 
($fz = function (line) {
var attribute =  new pl.wroc.pwr.student.acteditor.model.tags.AttributeGroup ();
var name = this.getAttribute ("ref", line);
attribute.setName (name);
return attribute;
}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "attributeGroupDefinitionEventHandle", 
($fz = function (line) {
var attribute = this.createGroupDefinition (line);
this.stack.push (attribute);
}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "createGroupDefinition", 
($fz = function (line) {
var attribute =  new pl.wroc.pwr.student.acteditor.model.tags.AttributeGroup ();
var name = this.getAttribute ("name", line);
attribute.setName (name);
return attribute;
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
var attribute = this.createAttribute (line);
var parent = this.stack.pop ();
if (Clazz.instanceOf (parent, pl.wroc.pwr.student.acteditor.model.tags.Element)) {
(parent).addAttribute (attribute);
} else if (Clazz.instanceOf (parent, pl.wroc.pwr.student.acteditor.model.tags.Attribute)) {
(parent).add (attribute);
}this.stack.push (parent);
}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "attributeDefinitionEventHandle", 
($fz = function (line) {
var attribute = this.createAttribute (line);
this.stack.push (attribute);
}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "createAttribute", 
($fz = function (line) {
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
}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "closingComplexTypeDefinitionEventHandler", 
($fz = function (line) {
var element = this.stack.pop ();
this.elements.add (element);
}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "complexTypeDefinitionEventHandle", 
($fz = function (line) {
var name = this.getAttribute ("name", line);
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
var element = this.createElementGroupReference (line);
var minOccurs = this.getAttribute ("minOccurs", line);
var maxOccurs = this.getAttribute ("maxOccurs", line);
if (!minOccurs.equals ("")) {
element.setMinOccurs (minOccurs);
}if (!maxOccurs.equals ("")) {
element.setMaxOccurs (maxOccurs);
}var parent = this.stack.pop ();
parent.add (element);
this.stack.push (parent);
}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "createElementGroupReference", 
($fz = function (line) {
var name = this.getAttribute ("ref", line);
var element =  new pl.wroc.pwr.student.acteditor.model.tags.Composition (name, "ref");
return element;
}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "elementGroupDefinitionEventHandle", 
($fz = function (line) {
var element = this.createElementGroupDefinition (line);
this.stack.push (element);
}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "createElementGroupDefinition", 
($fz = function (line) {
var name = this.getAttribute ("name", line);
var element =  new pl.wroc.pwr.student.acteditor.model.tags.Composition (name, "group");
return element;
}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "closingChoiceEventHandle", 
($fz = function (line) {
var element = this.stack.pop ();
if (!this.stack.isEmpty ()) {
var parent = this.stack.pop ();
parent.add (element);
this.stack.push (parent);
}}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "choiceEventHandle", 
($fz = function (line) {
var element =  new pl.wroc.pwr.student.acteditor.model.tags.Composition ("rozwiń", "choice");
var minOccurs = this.getAttribute ("minOccurs", line);
var maxOccurs = this.getAttribute ("maxOccurs", line);
if (!minOccurs.equals ("")) {
element.setMinOccurs (minOccurs);
}if (!maxOccurs.equals ("")) {
element.setMaxOccurs (maxOccurs);
}this.stack.push (element);
}, $fz.isPrivate = true, $fz), "~S");
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
var minOccurs = this.getAttribute ("minOccurs", line);
var maxOccurs = this.getAttribute ("maxOccurs", line);
if (!minOccurs.equals ("")) {
element.setMinOccurs (minOccurs);
}if (!maxOccurs.equals ("")) {
element.setMaxOccurs (maxOccurs);
}this.stack.push (element);
}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "oneLineElementDefinitionEventHandle", 
($fz = function (line) {
var element = this.createElementDefinition (line);
this.elements.add (element);
}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "elementReferenceEventHandle", 
($fz = function (line) {
var element = this.createElementReference (line);
this.stack.push (element);
}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "oneLineElementReferenceEventHandle", 
($fz = function (line) {
var element = this.createElementReference (line);
var parent = null;
if (!this.stack.isEmpty ()) {
parent = this.stack.pop ();
parent.add (element);
this.stack.push (parent);
}}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "createElementReference", 
($fz = function (line) {
var name = this.getAttribute ("ref", line);
var minOccurs = this.getAttribute ("minOccurs", line);
var maxOccurs = this.getAttribute ("maxOccurs", line);
var element =  new pl.wroc.pwr.student.acteditor.model.tags.Composition (name, "ref");
if (!minOccurs.equals ("")) {
element.setMinOccurs (minOccurs);
}if (!maxOccurs.equals ("")) {
element.setMaxOccurs (maxOccurs);
}return element;
}, $fz.isPrivate = true, $fz), "~S");
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
element = this.setDescription (element, line);
this.stack.push (element);
} else if (Clazz.instanceOf (parent, pl.wroc.pwr.student.acteditor.model.tags.Attribute) || Clazz.instanceOf (parent, pl.wroc.pwr.student.acteditor.model.tags.AttributeGroup)) {
var attribute = parent;
attribute = this.setDescription (attribute, line);
this.stack.push (attribute);
} else if (Clazz.instanceOf (parent, pl.wroc.pwr.student.acteditor.model.tags.SimpleType)) {
var simpleType = parent;
simpleType = this.setDescription (simpleType, line);
this.stack.push (simpleType);
}}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "setDescription", 
($fz = function (object, line) {
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
}, $fz.isPrivate = true, $fz), "~O,~S");
Clazz.defineMethod (c$, "elementDefinitionEventHandle", 
($fz = function (line) {
var element = this.createElementDefinition (line);
this.stack.push (element);
}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "createElementDefinition", 
($fz = function (line) {
var name = this.getAttribute ("name", line);
var result =  new pl.wroc.pwr.student.acteditor.model.tags.Composition (name, "all");
return result;
}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "getAttribute", 
($fz = function (name, line) {
if (line.contains (name)) {
var begin = line.indexOf (name + "=\"") + (name + "=\"").length;
var end = line.indexOf ("\"", line.indexOf (name + "=\"") + (name + "=\"").length);
return line.substring (begin, end);
}return "";
}, $fz.isPrivate = true, $fz), "~S,~S");
Clazz.defineMethod (c$, "getEvent", 
($fz = function (line) {
if (this.containsDocumentation (line)) {
return "documentation";
} else if (this.containsElementDefinition (line)) {
return "element-def";
} else if (this.containsOneLineElementDefinition (line)) {
return "one-line-element-def";
} else if (this.containsClosingElementDefinition (line)) {
return "close-element-def";
} else if (this.containsElementReferenceWithoutClosingSign (line)) {
return "element-ref-without-closing";
} else if (this.containsOneLineElementReference (line)) {
return "one-line-element-ref";
} else if (this.containsSequence (line)) {
return "sequence";
} else if (this.containsClosingSequence (line)) {
return "closing-sequence";
} else if (this.containsChoice (line)) {
return "choice";
} else if (this.containsClosingChoice (line)) {
return "closing-choice";
} else if (this.containsGroupDefinition (line)) {
return "element-group-def";
} else if (this.containstGroupReference (line)) {
return "element-group-ref";
} else if (this.containsClosingGroupDefinition (line)) {
return "closing-element-group-def";
} else if (this.containstComplexTypeDefinition (line)) {
return "complex-type-def";
} else if (this.containsClosingComplexTypeDefinition (line)) {
return "closing-complex-type-def";
} else if (this.containsComplexContent (line)) {
return "complex-content";
} else if (this.containsClosingComplexContent (line)) {
return "closing-complex-content";
} else if (this.containsAttributeDefinitionWithoutClosingSign (line)) {
return "attribute-def-without-closing";
} else if (this.containsOneLineAttributeDefinition (line)) {
return "one-line-attribute-def";
} else if (this.containsClosingAttributeDefinition (line)) {
return "closing-attribute-def";
} else if (this.containsAttributeGroupDefinition (line)) {
return "attribute-group-def";
} else if (this.containsAttributeGroupReference (line)) {
return "attribute-group-ref";
} else if (this.containsClosingAttributeGroup (line)) {
return "closing-attribute-group";
} else if (this.containsSimpleTypeDefinition (line)) {
return "simple-type-def";
} else if (this.containsSimpleTypeBeginning (line)) {
return "simple-type-beg";
} else if (this.containsClosingSimpleType (line)) {
return "closing-simple-type";
} else if (this.containsExtension (line)) {
return "extension";
} else if (this.containsClosingExtension (line)) {
return "closing-extension";
} else if (this.containsPattern (line)) {
return "pattern";
} else if (this.containsEnumeration (line)) {
return "enumeration";
}return "ignore";
}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "containsEnumeration", 
($fz = function (line) {
return line.contains ("<xsd:enumeration");
}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "containsPattern", 
($fz = function (line) {
return line.contains ("<xsd:pattern");
}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "containsClosingExtension", 
($fz = function (line) {
return line.contains ("</xsd:extension");
}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "containsExtension", 
($fz = function (line) {
return line.contains ("<xsd:extension");
}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "containsClosingSimpleType", 
($fz = function (line) {
return line.contains ("</xsd:simpleType>");
}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "containsSimpleTypeBeginning", 
($fz = function (line) {
return line.contains ("<xsd:simpleType>");
}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "containsSimpleTypeDefinition", 
($fz = function (line) {
return (line.contains ("<xsd:simpleType") && line.contains ("name="));
}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "containsClosingAttributeGroup", 
($fz = function (line) {
return (line.contains ("</xsd:attributeGroup>"));
}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "containsAttributeGroupReference", 
($fz = function (line) {
return (line.contains ("attributeGroup") && line.contains ("ref="));
}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "containsAttributeGroupDefinition", 
($fz = function (line) {
return (line.contains ("attributeGroup") && line.contains ("name="));
}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "containsOneLineAttributeDefinition", 
($fz = function (line) {
return (line.contains ("attribute ") && line.contains ("name=") && line.contains ("/>"));
}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "containsClosingAttributeDefinition", 
($fz = function (line) {
return line.contains ("</xsd:attribute>");
}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "containsAttributeDefinitionWithoutClosingSign", 
($fz = function (line) {
return (line.contains ("attribute ") && line.contains ("name=") && !line.contains ("/>"));
}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "containsClosingComplexContent", 
($fz = function (line) {
return line.contains ("</xsd:complexContent>");
}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "containsComplexContent", 
($fz = function (line) {
return line.contains ("complexContent");
}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "containsClosingComplexTypeDefinition", 
($fz = function (line) {
return (line.contains ("</xsd:complexType>"));
}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "containstComplexTypeDefinition", 
($fz = function (line) {
return (line.contains ("complexType") && line.contains ("name="));
}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "containstGroupReference", 
($fz = function (line) {
return (line.contains ("group") && !line.contains ("attributeGroup") && line.contains ("ref="));
}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "containsClosingGroupDefinition", 
($fz = function (line) {
return line.contains ("</xsd:group>");
}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "containsGroupDefinition", 
($fz = function (line) {
return (line.contains ("group") && !line.contains ("attributeGroup") && line.contains ("name="));
}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "containsClosingChoice", 
($fz = function (line) {
return line.contains ("</xsd:choice>");
}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "containsChoice", 
($fz = function (line) {
return line.contains ("<xsd:choice");
}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "containsClosingSequence", 
($fz = function (line) {
return line.contains ("</xsd:sequence>");
}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "containsSequence", 
($fz = function (line) {
return line.contains ("<xsd:sequence");
}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "containsOneLineElementDefinition", 
($fz = function (line) {
return (line.contains ("element") && line.contains ("name=") && line.contains ("/>"));
}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "containsOneLineElementReference", 
($fz = function (line) {
return (line.contains ("element") && line.contains ("ref=") && line.contains ("/>"));
}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "containsElementReferenceWithoutClosingSign", 
($fz = function (line) {
return (line.contains ("element") && line.contains ("ref=") && !line.contains ("/>"));
}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "containsClosingElementDefinition", 
($fz = function (line) {
return line.contains ("</xsd:element>");
}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "containsElementDefinition", 
($fz = function (line) {
return (line.contains ("element") && line.contains ("name=") && !line.contains ("/>"));
}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "containsDocumentation", 
($fz = function (line) {
return line.contains ("documentation");
}, $fz.isPrivate = true, $fz), "~S");
});
