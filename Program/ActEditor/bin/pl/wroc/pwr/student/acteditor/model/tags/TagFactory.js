Clazz.declarePackage ("pl.wroc.pwr.student.acteditor.model.tags");
Clazz.load (null, "pl.wroc.pwr.student.acteditor.model.tags.TagFactory", ["pl.wroc.pwr.student.acteditor.model.tags.Law", "pl.wroc.pwr.student.acteditor.parsing.xsd.XSDHelper"], function () {
c$ = Clazz.decorateAsClass (function () {
this.helper = null;
this.tag = null;
Clazz.instantialize (this, arguments);
}, pl.wroc.pwr.student.acteditor.model.tags, "TagFactory");
Clazz.makeConstructor (c$, 
function () {
});
Clazz.defineMethod (c$, "getTagsFromStructure", 
function (structure) {
var result = null;
if (this.helper == null) {
this.helper =  new pl.wroc.pwr.student.acteditor.parsing.xsd.XSDHelper (structure);
}if (this.helper.hasElementInLine ("ustawa", structure[0])) {
this.tag =  new pl.wroc.pwr.student.acteditor.model.tags.Law ();
}System.out.println (this.tag.whoAmI ());
this.tag.getTags (structure);
return result;
}, "~A");
});
