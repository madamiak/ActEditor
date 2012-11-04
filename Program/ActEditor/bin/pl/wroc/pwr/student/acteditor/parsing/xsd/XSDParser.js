Clazz.declarePackage ("pl.wroc.pwr.student.acteditor.parsing.xsd");
Clazz.load (["pl.wroc.pwr.student.acteditor.parsing.Parser"], "pl.wroc.pwr.student.acteditor.parsing.xsd.XSDParser", ["pl.wroc.pwr.student.acteditor.parsing.xsd.XSDHelper", "pl.wroc.pwr.student.acteditor.util.Utils"], function () {
c$ = Clazz.decorateAsClass (function () {
this.helper = null;
this.xsdLines = null;
Clazz.instantialize (this, arguments);
}, pl.wroc.pwr.student.acteditor.parsing.xsd, "XSDParser", null, pl.wroc.pwr.student.acteditor.parsing.Parser);
Clazz.makeConstructor (c$, 
function (xsdContent) {
this.xsdLines = xsdContent.$plit ("\n");
this.helper =  new pl.wroc.pwr.student.acteditor.parsing.xsd.XSDHelper (this.xsdLines);
}, "~S");
Clazz.overrideMethod (c$, "getElementStructure", 
function (elementName) {
var result;
result = this.helper.getLinesWithElement (elementName);
var tmp = pl.wroc.pwr.student.acteditor.util.Utils.convertStringListToArray (result);
return tmp;
}, "~S");
Clazz.overrideMethod (c$, "getDescription", 
function (elementName) {
var lines = this.getElementStructure (elementName);
for (var eachLine, $eachLine = 0, $$eachLine = lines; $eachLine < $$eachLine.length && ((eachLine = $$eachLine[$eachLine]) || true); $eachLine++) {
var description = this.helper.getLineWithDescription (eachLine);
if (description == null) {
continue ;} else {
return description;
}}
return null;
}, "~S");
Clazz.overrideMethod (c$, "getElement", 
function (elementName) {
return null;
}, "~S");
});
