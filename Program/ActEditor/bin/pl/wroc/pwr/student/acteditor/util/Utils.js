Clazz.declarePackage ("pl.wroc.pwr.student.acteditor.util");
Clazz.load (["java.lang.Enum"], "pl.wroc.pwr.student.acteditor.util.Utils", null, function () {
c$ = Clazz.declareType (pl.wroc.pwr.student.acteditor.util, "Utils");
if (!Clazz.isClassDefined ("pl.wroc.pwr.student.acteditor.util.Utils")) {
pl.wroc.pwr.student.acteditor.util.Utils.$Utils$ ();
}
c$.convertStringListToArray = Clazz.defineMethod (c$, "convertStringListToArray", 
function (list) {
var result =  new Array (list.size ());
list.toArray (result);
return result;
}, "java.util.List");
c$.$Utils$ = function () {
Clazz.pu$h ();
c$ = Clazz.declareType (pl.wroc.pwr.student.acteditor.util, "Utils", Enum);
Clazz.defineEnumConstant (c$, "SEQUENCE", 0, []);
Clazz.defineEnumConstant (c$, "CHOICE", 1, []);
Clazz.defineEnumConstant (c$, "ALL", 2, []);
c$ = Clazz.p0p ();
};
});
