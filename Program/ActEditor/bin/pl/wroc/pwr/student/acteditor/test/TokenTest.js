Clazz.declarePackage ("pl.wroc.pwr.student.acteditor.test");
Clazz.load (null, "pl.wroc.pwr.student.acteditor.test.TokenTest", ["java.util.Stack", "pl.wroc.pwr.student.acteditor.model.AttributeRegistry", "$.ElementRegistry", "pl.wroc.pwr.student.acteditor.model.tags.AttributeGroup", "$.Composition", "$.SimpleElement"], function () {
c$ = Clazz.decorateAsClass (function () {
this.lines = null;
this.registry = null;
this.aRegistry = null;
Clazz.instantialize (this, arguments);
}, pl.wroc.pwr.student.acteditor.test, "TokenTest");
Clazz.makeConstructor (c$, 
function (lines) {
this.lines = lines;
this.registry = pl.wroc.pwr.student.acteditor.model.ElementRegistry.getRegistry ();
this.aRegistry = pl.wroc.pwr.student.acteditor.model.AttributeRegistry.getRegistry ();
}, "~A");
Clazz.defineMethod (c$, "loadAttributesToRegistry", 
function () {
var token = -1;
var attributes =  new java.util.Stack ();
var attribute = null;
var parent = null;
for (var line, $line = 0, $$line = this.lines; $line < $$line.length && ((line = $$line[$line]) || true); $line++) {
token = this.getAToken (line);
switch (token) {
case 0:
attribute = this.createAttributeGroup (line);
this.aRegistry.add (attribute);
}
}
System.out.println (this.aRegistry.getAttributes ());
});
Clazz.defineMethod (c$, "createAttributeGroup", 
($fz = function (line) {
var name = this.getAttribute ("name", line);
var result =  new pl.wroc.pwr.student.acteditor.model.tags.AttributeGroup ();
result.setName (name);
return result;
}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "closedAttributeGroupDefinition", 
($fz = function (line) {
return line.contains ("</xsd:attributeGroup>") ? true : false;
}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "closedAttributeGroupReference", 
($fz = function (line) {
return (line.contains ("attributeGroup") && line.contains ("/>")) ? true : false;
}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "closedSimpleType", 
($fz = function (line) {
return line.contains ("</xsd:simpleType>") ? true : false;
}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "closedRestriction", 
($fz = function (line) {
return line.contains ("</xsd:restriction>") ? true : false;
}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "closedAttributeDefinition", 
($fz = function (line) {
return (line.contains ("</xsd:attribute>") || (this.hasAttributeDefinition (line) && line.contains ("/>"))) ? true : false;
}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "closedAttributeReference", 
($fz = function (line) {
return (line.contains ("attribute") && !line.contains ("attributeGroup") && line.contains ("ref=") && line.contains ("/>")) ? true : false;
}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "getAToken", 
($fz = function (line) {
if (this.hasAttributeGroupDefinition (line)) {
return 0;
} else if (this.hasAttributeGroupReference (line)) {
return 1;
} else if (this.hasSimpleType (line)) {
return 2;
} else if (this.hasRestriction (line)) {
return 3;
} else if (this.hasAttributeDefinition (line)) {
return 4;
} else if (this.hasAttributeReference (line)) {
return 5;
}return -1;
}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "hasAttributeGroupReference", 
($fz = function (line) {
return (line.contains ("attributeGroup") && line.contains ("ref=")) ? true : false;
}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "hasSimpleType", 
($fz = function (line) {
return (line.contains ("simpleType")) ? true : false;
}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "hasAttributeDefinition", 
($fz = function (line) {
return (line.contains ("attribute") && !line.contains ("attributeGroup") && line.contains ("name=")) ? true : false;
}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "hasAttributeReference", 
($fz = function (line) {
return (line.contains ("attribute") && !line.contains ("attributeGroup") && line.contains ("ref=")) ? true : false;
}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "hasRestriction", 
($fz = function (line) {
return (line.contains ("restriction") && line.contains ("base=")) ? true : false;
}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "hasAttributeGroupDefinition", 
($fz = function (line) {
return (line.contains ("attributeGroup") && line.contains ("name=")) ? true : false;
}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "loadElementsToRegistry", 
function () {
var token = -1;
var desc = false;
var elements =  new java.util.Stack ();
var element = null;
var sequence = null;
var choice = null;
var parent = null;
for (var line, $line = 0, $$line = this.lines; $line < $$line.length && ((line = $$line[$line]) || true); $line++) {
token = this.getToken (line);
switch (token) {
case 0:
element = this.createComposition (line, "all");
elements.push (element);
break;
case 1:
var subElement = this.createReference (line);
parent = elements.pop ();
parent.add (subElement);
elements.push (parent);
case 3:
if (!desc) {
var description = this.getDescription (line);
parent = elements.pop ();
parent.setDescription (description);
elements.push (parent);
desc = true;
}break;
case 5:
sequence =  new pl.wroc.pwr.student.acteditor.model.tags.Composition ("(sekwencja)", "seq");
elements.push (sequence);
break;
case 7:
var group = this.createGroup (line, "group");
parent = elements.pop ();
parent.add (group);
elements.push (parent);
break;
case 8:
choice =  new pl.wroc.pwr.student.acteditor.model.tags.Composition ("(wybór)", "choice");
elements.push (choice);
break;
}
token = this.checkIfClosed (line);
switch (token) {
case 8:
this.registry.add (element);
desc = false;
break;
case 13:
sequence = elements.pop ();
parent = elements.pop ();
parent.add (sequence);
elements.push (parent);
break;
case 15:
choice = elements.pop ();
parent = elements.pop ();
parent.add (choice);
elements.push (parent);
break;
}
}
});
Clazz.defineMethod (c$, "getToken", 
($fz = function (line) {
if (this.hasElementDefinition (line)) {
return 0;
} else if (this.hasElementReference (line)) {
return 1;
} else if (this.hasAnnotation (line)) {
return 2;
} else if (this.hasDocumentation (line)) {
return 3;
} else if (this.hasComplexType (line)) {
return 4;
} else if (this.hasSequence (line)) {
return 5;
} else if (this.hasGroupDefinition (line)) {
return 6;
} else if (this.hasGroupReference (line)) {
return 7;
} else if (this.hasChoice (line)) {
return 8;
}return -1;
}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "hasElementDefinition", 
($fz = function (line) {
return (line.contains ("<xsd:element") && line.contains ("name=")) ? true : false;
}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "hasElementReference", 
($fz = function (line) {
return (line.contains ("<xsd:element") && line.contains ("ref=")) ? true : false;
}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "hasAnnotation", 
($fz = function (line) {
return (line.contains ("<xsd:annotation")) ? true : false;
}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "hasDocumentation", 
($fz = function (line) {
return (line.contains ("<xsd:documentation")) ? true : false;
}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "hasComplexType", 
($fz = function (line) {
return (line.contains ("<xsd:complexType")) ? true : false;
}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "hasSequence", 
($fz = function (line) {
return (line.contains ("<xsd:sequence")) ? true : false;
}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "hasGroupDefinition", 
($fz = function (line) {
return (line.contains ("<xsd:group") && line.contains ("name=")) ? true : false;
}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "hasGroupReference", 
($fz = function (line) {
return (line.contains ("<xsd:group") && line.contains ("ref=")) ? true : false;
}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "hasChoice", 
($fz = function (line) {
return (line.contains ("<xsd:choice")) ? true : false;
}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "getAttribute", 
($fz = function (name, line) {
if (line.contains (name)) {
var begin = line.indexOf (name + "=\"") + (name + "=\"").length;
var end = line.indexOf ("\"", line.indexOf (name + "=\"") + (name + "=\"").length);
return line.substring (begin, end);
}return null;
}, $fz.isPrivate = true, $fz), "~S,~S");
Clazz.defineMethod (c$, "getDescription", 
($fz = function (line) {
return line.substring (line.indexOf (">") + 1, line.lastIndexOf ("<"));
}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "createComposition", 
($fz = function (line, type) {
var name = this.getAttribute ("name", line);
var e =  new pl.wroc.pwr.student.acteditor.model.tags.Composition (name, type);
return e;
}, $fz.isPrivate = true, $fz), "~S,~S");
Clazz.defineMethod (c$, "createReference", 
($fz = function (line) {
var name = this.getAttribute ("ref", line);
var e =  new pl.wroc.pwr.student.acteditor.model.tags.SimpleElement (name);
return e;
}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "createGroup", 
($fz = function (line, type) {
var name = this.getAttribute ("ref", line);
var e =  new pl.wroc.pwr.student.acteditor.model.tags.Composition (name, type);
return e;
}, $fz.isPrivate = true, $fz), "~S,~S");
Clazz.defineMethod (c$, "checkIfClosed", 
($fz = function (line) {
if (this.closedElementDefinition (line)) {
return 8;
} else if (this.closedSimpleElement (line)) {
return 9;
} else if (this.closedAnnotation (line)) {
return 10;
} else if (this.closedDocumentation (line)) {
return 11;
} else if (this.closedComplexType (line)) {
return 12;
} else if (this.closedSequence (line)) {
return 13;
} else if (this.closedGroup (line)) {
return 14;
} else if (this.closedChoice (line)) {
return 15;
}return -1;
}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "closedElementDefinition", 
($fz = function (line) {
return (line.contains ("</xsd:element>")) ? true : false;
}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "closedSimpleElement", 
($fz = function (line) {
return (line.contains ("xsd:element>") && line.contains ("/>")) ? true : false;
}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "closedAnnotation", 
($fz = function (line) {
return (line.contains ("</xsd:annotation>")) ? true : false;
}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "closedDocumentation", 
($fz = function (line) {
return (line.contains ("</xsd:documentation>")) ? true : false;
}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "closedComplexType", 
($fz = function (line) {
return (line.contains ("</xsd:complexType>>")) ? true : false;
}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "closedSequence", 
($fz = function (line) {
return (line.contains ("</xsd:sequence>")) ? true : false;
}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "closedGroup", 
($fz = function (line) {
return (line.contains ("</xsd:group>")) ? true : false;
}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "closedChoice", 
($fz = function (line) {
return (line.contains ("</xsd:choice>")) ? true : false;
}, $fz.isPrivate = true, $fz), "~S");
});
