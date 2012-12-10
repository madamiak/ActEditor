Clazz.declarePackage ("pl.wroc.pwr.student.acteditor.parsing.xsd");
Clazz.load (["pl.wroc.pwr.student.acteditor.parsing.Parser"], "pl.wroc.pwr.student.acteditor.parsing.xsd.XSDParser", ["pl.wroc.pwr.student.acteditor.model.Schema", "pl.wroc.pwr.student.acteditor.parsing.xsd.Tokenizer", "$.XSDEventHandler"], function () {
c$ = Clazz.decorateAsClass (function () {
this.tokenizer = null;
this.xsdEventHandler = null;
this.schema = null;
Clazz.instantialize (this, arguments);
}, pl.wroc.pwr.student.acteditor.parsing.xsd, "XSDParser", null, pl.wroc.pwr.student.acteditor.parsing.Parser);
Clazz.makeConstructor (c$, 
function () {
this.schema =  new pl.wroc.pwr.student.acteditor.model.Schema ();
this.tokenizer =  new pl.wroc.pwr.student.acteditor.parsing.xsd.Tokenizer ();
this.xsdEventHandler =  new pl.wroc.pwr.student.acteditor.parsing.xsd.XSDEventHandler ();
});
Clazz.overrideMethod (c$, "loadData", 
function () {
var token = "";
var lines = this.schema.getSchemaContent ().$plit ("\n");
for (var line, $line = 0, $$line = lines; $line < $$line.length && ((line = $$line[$line]) || true); $line++) {
token = this.tokenizer.getEvent (line);
this.xsdEventHandler.handleEvent (token, line);
}
});
});
