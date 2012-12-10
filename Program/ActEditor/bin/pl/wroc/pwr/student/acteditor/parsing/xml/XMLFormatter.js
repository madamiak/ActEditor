Clazz.declarePackage ("pl.wroc.pwr.student.acteditor.parsing.xml");
Clazz.load (["pl.wroc.pwr.student.acteditor.parsing.Formatter", "java.util.ArrayList"], "pl.wroc.pwr.student.acteditor.parsing.xml.XMLFormatter", null, function () {
c$ = Clazz.decorateAsClass (function () {
this.tags = null;
Clazz.instantialize (this, arguments);
}, pl.wroc.pwr.student.acteditor.parsing.xml, "XMLFormatter", null, pl.wroc.pwr.student.acteditor.parsing.Formatter);
Clazz.prepareFields (c$, function () {
this.tags =  new java.util.ArrayList ();
});
Clazz.overrideMethod (c$, "add", 
function (tag) {
this.tags.add (tag);
}, "~S");
Clazz.overrideMethod (c$, "generate", 
function () {
return null;
});
});
