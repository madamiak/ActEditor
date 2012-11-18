Clazz.declarePackage ("pl.wroc.pwr.student.acteditor.model");
Clazz.load (null, "pl.wroc.pwr.student.acteditor.model.DocumentRegistry", ["java.util.ArrayList"], function () {
c$ = Clazz.decorateAsClass (function () {
this.documents = null;
Clazz.instantialize (this, arguments);
}, pl.wroc.pwr.student.acteditor.model, "DocumentRegistry");
Clazz.makeConstructor (c$, 
($fz = function () {
this.documents =  new java.util.ArrayList ();
this.fillList ();
}, $fz.isPrivate = true, $fz));
Clazz.defineMethod (c$, "fillList", 
($fz = function () {
this.documents.add ("Decyzja");
this.documents.add ("Informacja");
this.documents.add ("Komunikat");
this.documents.add ("Obwieszczenie");
this.documents.add ("Ogłoszenie");
this.documents.add ("Oświadczenie");
this.documents.add ("Porozumienie");
this.documents.add ("Postanowienie");
this.documents.add ("Rozporządzenie");
this.documents.add ("Uchwała");
this.documents.add ("Ustawa");
this.documents.add ("Wyrok");
this.documents.add ("Wyrok Trybunału Konstytucyjnego");
this.documents.add ("Zarządzenie");
}, $fz.isPrivate = true, $fz));
c$.getRegistry = Clazz.defineMethod (c$, "getRegistry", 
function () {
if (pl.wroc.pwr.student.acteditor.model.DocumentRegistry.registry == null) {
($t$ = pl.wroc.pwr.student.acteditor.model.DocumentRegistry.registry =  new pl.wroc.pwr.student.acteditor.model.DocumentRegistry (), pl.wroc.pwr.student.acteditor.model.DocumentRegistry.prototype.registry = pl.wroc.pwr.student.acteditor.model.DocumentRegistry.registry, $t$);
}return pl.wroc.pwr.student.acteditor.model.DocumentRegistry.registry;
});
Clazz.defineMethod (c$, "get", 
function (index) {
return this.documents.get (index);
}, "~N");
Clazz.defineMethod (c$, "getDocuments", 
function () {
return this.documents;
});
Clazz.defineStatics (c$,
"registry", null);
});
