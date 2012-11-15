Clazz.declarePackage ("pl.wroc.pwr.student.acteditor.parsing.xsd");
Clazz.load (null, "pl.wroc.pwr.student.acteditor.parsing.xsd.XSDHelper", ["java.util.ArrayList", "$.Collections", "pl.wroc.pwr.student.acteditor.model.ElementRegistry", "pl.wroc.pwr.student.acteditor.parsing.xsd.Composition", "$.SimpleElement"], function () {
c$ = Clazz.decorateAsClass (function () {
this.xsdLines = null;
this.registry = null;
Clazz.instantialize (this, arguments);
}, pl.wroc.pwr.student.acteditor.parsing.xsd, "XSDHelper");
Clazz.makeConstructor (c$, 
function (xsdLines) {
this.xsdLines = xsdLines;
this.registry = pl.wroc.pwr.student.acteditor.model.ElementRegistry.getRegistry ();
this.$function ();
}, "~A");
Clazz.defineMethod (c$, "getLinesWithElement", 
function (elementName) {
var read = false;
var tag = "";
var result = java.util.Collections.synchronizedList ( new java.util.ArrayList ());
for (var i = 0; i < this.xsdLines.length; i++) {
var currentLine = this.getWithoutInitialSpaces (this.xsdLines[i]);
if (this.hasElementInLine (elementName, currentLine)) {
read = true;
tag = this.getTagName (currentLine);
System.out.println (currentLine);
result.add (currentLine);
continue ;}if (read == true) {
var endingTag = this.getEndingTag (tag);
if (currentLine.equals (endingTag)) {
read = false;
}System.out.println (currentLine);
result.add (currentLine);
}}
return result;
}, "~S");
Clazz.defineMethod (c$, "getLineWithDescription", 
function (eachLine) {
if (eachLine.contains ("xsd:documentation>")) {
return eachLine.substring (eachLine.indexOf ("<xsd:documentation>"), eachLine.indexOf ("</xsd:documentation>"));
}return null;
}, "~S");
Clazz.defineMethod (c$, "getWithoutInitialSpaces", 
($fz = function (text) {
return text.substring (text.indexOf ("<"));
}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "hasElementInLine", 
function (elementName, line) {
return line.contains ("element name=\"" + elementName);
}, "~S,~S");
Clazz.defineMethod (c$, "getTagName", 
($fz = function (line) {
return line.$plit (" ")[0];
}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "getEndingTag", 
($fz = function (tag) {
return tag.replaceAll ("<", "</") + ">";
}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "$function", 
($fz = function () {
var flag = false;
var element = null;
for (var s, $s = 0, $$s = this.xsdLines; $s < $$s.length && ((s = $$s[$s]) || true); $s++) {
if (!flag && s.contains ("element") && s.contains ("name=")) {
var name = s.substring (s.indexOf ("name=\"") + "name=\"".length, s.indexOf ("\"", s.indexOf ("name=\"") + "name=\"".length));
var e =  new pl.wroc.pwr.student.acteditor.parsing.xsd.Composition (name, "all");
flag = true;
element = e;
continue ;}if (flag) {
if (s.contains ("</xsd:element>")) {
flag = false;
this.registry.add (element);
continue ;} else if (s.contains ("element") && !s.contains ("name")) {
try {
var name = s.substring (s.indexOf ("ref=\"") + "ref=\"".length, s.indexOf ("\"", s.indexOf ("ref=\"") + "ref=\"".length));
element.add ( new pl.wroc.pwr.student.acteditor.parsing.xsd.SimpleElement (name));
} catch (e) {
if (Clazz.instanceOf (e, StringIndexOutOfBoundsException)) {
} else {
throw e;
}
}
}if (s.contains ("documentation")) {
element.setDescription ("\t" + s.substring (s.indexOf (">") + 1, s.lastIndexOf ("<")));
continue ;}}}
}, $fz.isPrivate = true, $fz));
Clazz.defineMethod (c$, "getElementByName", 
function (elementName) {
return this.registry.get (elementName);
}, "~S");
});
