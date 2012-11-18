Clazz.declarePackage ("pl.wroc.pwr.student.acteditor.parsing.xsd");
Clazz.load (null, "pl.wroc.pwr.student.acteditor.parsing.xsd.XSDHelper", ["pl.wroc.pwr.student.acteditor.model.ElementRegistry", "pl.wroc.pwr.student.acteditor.parsing.xsd.Composition", "$.SimpleElement"], function () {
c$ = Clazz.decorateAsClass (function () {
this.linesInXSDFile = null;
this.registry = null;
Clazz.instantialize (this, arguments);
}, pl.wroc.pwr.student.acteditor.parsing.xsd, "XSDHelper");
Clazz.makeConstructor (c$, 
function (xsdLines) {
this.linesInXSDFile = xsdLines;
this.registry = pl.wroc.pwr.student.acteditor.model.ElementRegistry.getRegistry ();
this.loadElementsToRegistry ();
}, "~A");
Clazz.defineMethod (c$, "loadElementsToRegistry", 
($fz = function () {
var readElement = false;
var element = null;
var token = -1;
for (var eachLine, $eachLine = 0, $$eachLine = this.linesInXSDFile; $eachLine < $$eachLine.length && ((eachLine = $$eachLine[$eachLine]) || true); $eachLine++) {
token = -1;
if (this.hasElementAndName (eachLine)) {
token = 0;
} else if (readElement) {
token = 1;
} else if (this.hasGroupAndName (eachLine)) {
token = 2;
}switch (token) {
case 0:
element = this.createComposition (eachLine, "all");
break;
case 1:
element = this.fillElement (element, eachLine);
break;
case 2:
element = this.createComposition (eachLine, "group");
break;
}
readElement = element == null ? false : true;
}
}, $fz.isPrivate = true, $fz));
Clazz.defineMethod (c$, "hasGroupAndName", 
($fz = function (line) {
if (line.contains ("group") && line.contains ("name=")) {
return true;
}return false;
}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "fillElement", 
($fz = function (element, line) {
if (this.isElementClosed (line)) {
this.registry.add (element);
return null;
}if (this.hasElementAndRef (line)) {
try {
var name = this.getAttribute ("ref", line);
var min = this.getAttribute ("minOccurs", line);
var max = this.getAttribute ("maxOccurs", line);
element.add ( new pl.wroc.pwr.student.acteditor.parsing.xsd.SimpleElement (name));
} catch (e) {
if (Clazz.instanceOf (e, StringIndexOutOfBoundsException)) {
} else {
throw e;
}
}
}if (this.hasDescription (line)) {
element.setDescription (this.getDescription (line));
}if (this.hasGroup (line)) {
var name = this.getAttribute ("ref", line);
var min = this.getAttribute ("minOccurs", line);
var max = this.getAttribute ("maxOccurs", line);
element.add ( new pl.wroc.pwr.student.acteditor.parsing.xsd.Composition (name, "group"));
}return element;
}, $fz.isPrivate = true, $fz), "pl.wroc.pwr.student.acteditor.parsing.xsd.Element,~S");
Clazz.defineMethod (c$, "hasGroup", 
($fz = function (line) {
if (line.contains ("group")) {
return true;
}return false;
}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "getDescription", 
($fz = function (line) {
return line.substring (line.indexOf (">") + 1, line.lastIndexOf ("<"));
}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "hasDescription", 
($fz = function (line) {
if (line.contains ("documentation")) {
return true;
}return false;
}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "hasElementAndRef", 
($fz = function (line) {
if (line.contains ("element") && line.contains ("ref")) {
return true;
}return false;
}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "isElementClosed", 
($fz = function (line) {
if (line.contains ("</xsd:element>")) {
return true;
}return false;
}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "createComposition", 
($fz = function (line, type) {
var name = this.getAttribute ("name", line);
var e =  new pl.wroc.pwr.student.acteditor.parsing.xsd.Composition (name, type);
return e;
}, $fz.isPrivate = true, $fz), "~S,~S");
Clazz.defineMethod (c$, "hasElementAndName", 
($fz = function (line) {
if (line.contains ("element") && line.contains ("name=")) {
return true;
}return false;
}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "getElementByName", 
function (elementName) {
return this.registry.get (elementName);
}, "~S");
Clazz.defineMethod (c$, "getAttribute", 
($fz = function (name, line) {
if (line.contains (name)) {
var begin = line.indexOf (name + "=\"") + (name + "=\"").length;
var end = line.indexOf ("\"", line.indexOf (name + "=\"") + (name + "=\"").length);
return line.substring (begin, end);
}return null;
}, $fz.isPrivate = true, $fz), "~S,~S");
});
