Clazz.declarePackage ("pl.wroc.pwr.student.acteditor.model.tags");
Clazz.load (["pl.wroc.pwr.student.acteditor.model.tags.Tag"], "pl.wroc.pwr.student.acteditor.model.tags.Law", ["java.util.ArrayList", "pl.wroc.pwr.student.acteditor.util.Utils"], function () {
c$ = Clazz.declareType (pl.wroc.pwr.student.acteditor.model.tags, "Law", null, pl.wroc.pwr.student.acteditor.model.tags.Tag);
Clazz.overrideMethod (c$, "whoAmI", 
function () {
return "Ustawa";
});
Clazz.overrideMethod (c$, "getTags", 
function (structure) {
var result;
var list =  new java.util.ArrayList ();
for (var eachLine, $eachLine = 0, $$eachLine = structure; $eachLine < $$eachLine.length && ((eachLine = $$eachLine[$eachLine]) || true); $eachLine++) {
var tmp = this.getTagFromLine (eachLine);
this.addResultToList (list, tmp);
}
result = pl.wroc.pwr.student.acteditor.util.Utils.convertStringListToArray (list);
return result;
}, "~A");
Clazz.defineMethod (c$, "addResultToList", 
($fz = function (list, tmp) {
if (tmp == null || tmp === "") {
return ;
} else {
System.out.println (tmp);
list.add (tmp);
}}, $fz.isPrivate = true, $fz), "java.util.List,~S");
Clazz.overrideMethod (c$, "getTagFromLine", 
function (line) {
if (line.contains ("ref")) {
var ret = line.substring (line.indexOf ("ref=\""), line.lastIndexOf ("\"")).replaceAll ("ref=\"", "");
return ret;
} else {
return null;
}}, "~S");
});
