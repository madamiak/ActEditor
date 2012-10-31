Clazz.declarePackage ("pl.wroc.pwr.student.acteditor.parsing.xsd");
Clazz.load (["pl.wroc.pwr.student.acteditor.parsing.Parser"], "pl.wroc.pwr.student.acteditor.parsing.xsd.XSDParser", ["java.util.ArrayList", "pl.wroc.pwr.student.acteditor.util.Utils"], function () {
c$ = Clazz.decorateAsClass (function () {
this.xsdContent = null;
this.xsdLines = null;
Clazz.instantialize (this, arguments);
}, pl.wroc.pwr.student.acteditor.parsing.xsd, "XSDParser", null, pl.wroc.pwr.student.acteditor.parsing.Parser);
Clazz.makeConstructor (c$, 
function (xsdContent) {
this.xsdContent = xsdContent;
}, "~S");
Clazz.overrideMethod (c$, "getElementStructure", 
function (elementName) {
var result;
if (this.xsdLines == null) {
this.xsdLines = this.xsdContent.$plit ("\n");
}result = this.getLinesWithElement (elementName, this.xsdLines);
var tmp = pl.wroc.pwr.student.acteditor.util.Utils.convertStringListToArray (result);
return tmp;
}, "~S");
Clazz.defineMethod (c$, "getLinesWithElement", 
($fz = function (elementName, lines) {
var read = false;
var tag = "";
var result =  new java.util.ArrayList ();
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
}, $fz.isPrivate = true, $fz), "~S,~A");
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
Clazz.overrideMethod (c$, "getDescription", 
function (elementName) {
var lines = this.getElementStructure (elementName);
for (var eachLine, $eachLine = 0, $$eachLine = lines; $eachLine < $$eachLine.length && ((eachLine = $$eachLine[$eachLine]) || true); $eachLine++) {
var description = this.getLineWithDescription (eachLine);
if (description == null) {
continue ;} else {
return description;
}}
return null;
}, "~S");
Clazz.defineMethod (c$, "getLineWithDescription", 
($fz = function (eachLine) {
if (eachLine.contains ("xsd:documentation>")) {
return eachLine.substring (eachLine.indexOf ("<xsd:documentation>"), eachLine.indexOf ("</xsd:documentation>"));
}return null;
}, $fz.isPrivate = true, $fz), "~S");
});
