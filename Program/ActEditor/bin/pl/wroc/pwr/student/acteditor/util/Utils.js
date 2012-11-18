Clazz.declarePackage ("pl.wroc.pwr.student.acteditor.util");
c$ = Clazz.declareType (pl.wroc.pwr.student.acteditor.util, "Utils");
c$.convertStringListToArray = Clazz.defineMethod (c$, "convertStringListToArray", 
function (list) {
var result =  new Array (list.size ());
list.toArray (result);
return result;
}, "java.util.List");
c$.map = Clazz.defineMethod (c$, "map", 
function (name) {
switch (name) {
case "decyzja":
return "Decyzja";
case "informacja":
return "Informacja";
case "komunikat":
return "Komunikat";
case "obwieszczenie":
return "Obwieszczenie";
case "ogloszenie":
return "Ogłoszenie";
case "oswiadczenie":
return "Oświadczenie";
case "porozumienie":
return "Porozumienie";
case "postanowienie":
return "Postanowienie";
case "rozporzadzenie":
return "Rozporządzenie";
case "uchwala":
return "Uchwała";
case "ustawa":
return "Ustawa";
case "wyrok":
return "Wyrok";
case "wyrok_TK":
return "Wyrok Trybunału Konstytucyjnego";
case "zarzadzenie":
return "zarządzenie";
case "Decyzja":
return "decyzja";
case "Informacja":
return "informacja";
case "Komunikat":
return "komunikat";
case "Obwieszczenie":
return "obwieszczenie";
case "Ogłoszenie":
return "ogloszenie";
case "Oświadczenie":
return "oswiadczenie";
case "Porozumienie":
return "porozumienie";
case "Postanowienie":
return "postanowienie";
case "Rozporządzenie":
return "rozporzadzenie";
case "Uchwała":
return "uchwala";
case "Ustawa":
return "ustawa";
case "Wyrok":
return "wyrok";
case "Wyrok Trybunału Konstytucyjnego":
return "wyrok_TK";
case "Zarządzenie":
return "zarzadzenie";
}
return null;
}, "~S");
