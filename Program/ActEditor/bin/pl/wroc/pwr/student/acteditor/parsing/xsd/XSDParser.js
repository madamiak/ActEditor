Clazz.declarePackage ("pl.wroc.pwr.student.acteditor.parsing.xsd");
Clazz.load (["pl.wroc.pwr.student.acteditor.parsing.Parser"], "pl.wroc.pwr.student.acteditor.parsing.xsd.XSDParser", ["java.util.Stack", "pl.wroc.pwr.student.acteditor.model.ElementRegistry", "pl.wroc.pwr.student.acteditor.model.tags.Composition", "pl.wroc.pwr.student.acteditor.parsing.xsd.XSDHelper"], function () {
c$ = Clazz.decorateAsClass (function () {
this.helper = null;
this.lines = null;
this.registry = null;
Clazz.instantialize (this, arguments);
}, pl.wroc.pwr.student.acteditor.parsing.xsd, "XSDParser", null, pl.wroc.pwr.student.acteditor.parsing.Parser);
Clazz.makeConstructor (c$, 
function (lines) {
this.lines = lines;
this.helper =  new pl.wroc.pwr.student.acteditor.parsing.xsd.XSDHelper ();
this.registry = pl.wroc.pwr.student.acteditor.model.ElementRegistry.getRegistry ();
}, "~A");
Clazz.overrideMethod (c$, "loadData", 
function () {
this.loadElementsToRegistry ();
});
Clazz.defineMethod (c$, "loadElementsToRegistry", 
($fz = function () {
var token = -1;
var desc = false;
var elements =  new java.util.Stack ();
var element = null;
var sequence = null;
var choice = null;
var parent = null;
for (var line, $line = 0, $$line = this.lines; $line < $$line.length && ((line = $$line[$line]) || true); $line++) {
token = this.helper.getToken (line);
switch (token) {
case 0:
element = this.helper.createComposition (line, "all");
elements.push (element);
break;
case 1:
var subElement = this.helper.createReference (line);
parent = elements.pop ();
parent.add (subElement);
elements.push (parent);
case 3:
if (!desc) {
var description = this.helper.getDescription (line);
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
var group = this.helper.createGroup (line, "group");
parent = elements.pop ();
parent.add (group);
elements.push (parent);
break;
case 8:
choice =  new pl.wroc.pwr.student.acteditor.model.tags.Composition ("(wybór)", "choice");
elements.push (choice);
break;
}
token = this.helper.checkIfClosed (line);
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
}, $fz.isPrivate = true, $fz));
});
