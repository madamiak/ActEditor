Clazz.declarePackage ("pl.wroc.pwr.student.acteditor.parsing.xsd");
Clazz.load (["pl.wroc.pwr.student.acteditor.parsing.Parser"], "pl.wroc.pwr.student.acteditor.parsing.xsd.XSDParser", ["pl.wroc.pwr.student.acteditor.parsing.xsd.XSDHelper"], function () {
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
Clazz.overrideMethod (c$, "getElement", 
function (elementName) {
return this.helper.getElementByName (elementName);
}, "~S");
});
