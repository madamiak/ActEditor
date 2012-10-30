Clazz.declarePackage ("pl.wroc.pwr.student.acteditor.util");
c$ = Clazz.declareType (pl.wroc.pwr.student.acteditor.util, "Utils");
c$.convertStringListToArray = Clazz.defineMethod (c$, "convertStringListToArray", 
function (list) {
var result =  new Array (list.size ());
list.toArray (result);
return result;
}, "java.util.List");
