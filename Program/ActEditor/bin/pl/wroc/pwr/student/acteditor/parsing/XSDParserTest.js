Clazz.declarePackage ("pl.wroc.pwr.student.acteditor.parsing");
Clazz.load (null, "pl.wroc.pwr.student.acteditor.parsing.XSDParserTest", ["pl.wroc.pwr.student.acteditor.model.Schema", "pl.wroc.pwr.student.acteditor.parsing.xsd.XSDParser"], function () {
c$ = Clazz.decorateAsClass (function () {
this.parser = null;
Clazz.instantialize (this, arguments);
}, pl.wroc.pwr.student.acteditor.parsing, "XSDParserTest");
Clazz.defineMethod (c$, "setUp", 
function () {
this.parser =  new pl.wroc.pwr.student.acteditor.parsing.xsd.XSDParser (pl.wroc.pwr.student.acteditor.model.Schema.getSchemaContent ());
});
Clazz.defineMethod (c$, "testGetAllElements", 
function () {
var acts = ["ustawa", "rozporzadzenie", "uchwala", "zarzadzenie", "informacja", "komunikat", "decyzja", "oswiadczenie", "wyrok_TK", "postanowienie", "wyrok", "porozumienie", "ogloszenie", "obwieszczenie"];
var results =  new Array (acts.length);
for (var i = 0; i < acts.length; i++) {
results[i] = this.parser.getElementStructure (acts[i]);
org.junit.Assert.assertTrue (results[i][0].contains (acts[i]));
}
});
Clazz.defineMethod (c$, "testGetElement", 
function () {
var elementName = "rozporzadzenie";
var result = this.parser.getElementStructure (elementName);
org.junit.Assert.assertNotNull (result);
org.junit.Assert.assertTrue (result[0].contains (elementName));
});
Clazz.defineMethod (c$, "testGetSimpleType", 
function () {
var elementName = "data";
var result = this.parser.getElementStructure (elementName);
org.junit.Assert.assertTrue (result.length == 0);
});
Clazz.defineMethod (c$, "testGetDescription", 
function () {
var elementName = "rozporzadzenie";
var result = this.parser.getDescription (elementName);
org.junit.Assert.assertTrue (result.contains ("rozporządzenie."));
});
Clazz.defineMethod (c$, "testGetNonExistedDescription", 
function () {
var elementName = "asdsghd";
var result = this.parser.getDescription (elementName);
org.junit.Assert.assertNull (result);
});
});
