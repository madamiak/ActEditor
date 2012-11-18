Clazz.declarePackage ("pl.wroc.pwr.student.acteditor.parsing.xsd");
Clazz.load (null, "pl.wroc.pwr.student.acteditor.parsing.xsd.XSDHelper", ["pl.wroc.pwr.student.acteditor.model.tags.Composition", "$.SimpleElement"], function () {
c$ = Clazz.declareType (pl.wroc.pwr.student.acteditor.parsing.xsd, "XSDHelper");
Clazz.defineMethod (c$, "getToken", 
function (line) {
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
}, "~S");
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
function (name, line) {
if (line.contains (name)) {
var begin = line.indexOf (name + "=\"") + (name + "=\"").length;
var end = line.indexOf ("\"", line.indexOf (name + "=\"") + (name + "=\"").length);
return line.substring (begin, end);
}return null;
}, "~S,~S");
Clazz.defineMethod (c$, "getDescription", 
function (line) {
return line.substring (line.indexOf (">") + 1, line.lastIndexOf ("<"));
}, "~S");
Clazz.defineMethod (c$, "createComposition", 
function (line, type) {
var name = this.getAttribute ("name", line);
var e =  new pl.wroc.pwr.student.acteditor.model.tags.Composition (name, type);
return e;
}, "~S,~S");
Clazz.defineMethod (c$, "createReference", 
function (line) {
var name = this.getAttribute ("ref", line);
var e =  new pl.wroc.pwr.student.acteditor.model.tags.SimpleElement (name);
return e;
}, "~S");
Clazz.defineMethod (c$, "createGroup", 
function (line, type) {
var name = this.getAttribute ("ref", line);
var e =  new pl.wroc.pwr.student.acteditor.model.tags.Composition (name, type);
return e;
}, "~S,~S");
Clazz.defineMethod (c$, "checkIfClosed", 
function (line) {
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
}, "~S");
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
