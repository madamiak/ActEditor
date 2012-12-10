Clazz.declarePackage ("pl.wroc.pwr.student.lawcreator.xml");
Clazz.load (["pl.wroc.pwr.student.lawcreator.registry.Registry"], "pl.wroc.pwr.student.lawcreator.xml.Parser", ["pl.wroc.pwr.student.lawcreator.xml.AttributeImpl", "$.ElementImpl", "$.TypeImpl", "pl.wroc.pwr.student.lawcreator.xml.nodes.Attribute", "$.Node"], function () {
c$ = Clazz.decorateAsClass (function () {
this.registry = null;
Clazz.instantialize (this, arguments);
}, pl.wroc.pwr.student.lawcreator.xml, "Parser");
Clazz.prepareFields (c$, function () {
this.registry = pl.wroc.pwr.student.lawcreator.registry.Registry.getRegistry ();
});
Clazz.makeConstructor (c$, 
function () {
this.createElements ();
});
Clazz.defineMethod (c$, "createElements", 
($fz = function () {
var dataPattern = "(19|20)[0-9]{2}\\-(01|02|03|04|05|06|07|08|09|10|11|12)\\-([0-2]{1}[0-9]{1}|30|31)";
var yearsPattern = "(19|20)[0-9]{2}\\-(19|20)[0-9]{2}";
var positive = "[0-9]+";
var atr_wspolne = [this.createAttribute ("Uchylony", this.createType (null, ["tak", "nie"])), this.createAttribute ("Status",  new pl.wroc.pwr.student.lawcreator.xml.TypeImpl ()), this.createAttribute ("Komentarz",  new pl.wroc.pwr.student.lawcreator.xml.TypeImpl ()), this.createAttribute ("Obowiazuje od", this.createType (dataPattern, [])), this.createAttribute ("Obowiazuje do", this.createType (dataPattern, []))];
var atr_wspolne_nr = [this.createAttribute ("Nr", this.createType (positive, [])), this.createAttribute ("Uchylony", this.createType (null, ["tak", "nie"])), this.createAttribute ("Status",  new pl.wroc.pwr.student.lawcreator.xml.TypeImpl ()), this.createAttribute ("Komentarz", this.createType (dataPattern, [])), this.createAttribute ("Obowiazuje od", this.createType (dataPattern, [])), this.createAttribute ("Obowiazuje do",  new pl.wroc.pwr.student.lawcreator.xml.TypeImpl ())];
this.createElement ("Uchwała", "Element główny dokumentu XML-owego reprezentującego uchwałę.", false, [], ["Metryka", "Uwaga", "Wyspa", "Preambuła", "Rozwiń", "Załączniki", "Treść przypisów", "Podpisy", "Zatwierdził", "Załącznik binarny"]);
this.createElement ("Metryka", "Metryczka aktu, używana jako nagłówek bądź informacja w przywołaniu.", false, [this.createAttribute ("Status aktu", this.createType (null, ["Uchwalony", "Przyjęty", "Projekt", "Ogłoszony"])), this.createAttribute ("Nazwa",  new pl.wroc.pwr.student.lawcreator.xml.TypeImpl ()), this.createAttribute ("Organ wydający",  new pl.wroc.pwr.student.lawcreator.xml.TypeImpl ()), this.createAttribute ("Data", this.createType (dataPattern, [])), this.createAttribute ("Numer", this.createType (positive, [])), this.createAttribute ("Opis typu",  new pl.wroc.pwr.student.lawcreator.xml.TypeImpl ()), this.createAttribute ("Kadencja", this.createType (yearsPattern, []))], ["Tytuł", "Adres publikacji"]);
this.createElement ("Wyspa", "Element umozliwiajacy zapis dowolnego fragmentu tekstu wykraczajacego struktura badz formatowaniem poza niniejszy schemat.", false, [], []);
this.createElement ("Uwaga", "Element przechowujacy uwage tekstowa.", true, [this.createAttribute ("Typ", this.createType (null, ["Zwykła", "Marginalia", "Poprawka"]))], );
this.createElement ("Preambuła", "Element reprezentujący preambułę.", true, atr_wspolne, ["Punkt", "Litera", "Tiret", "Akapit"]);
this.createElement ("Rozwiń", "Wybierz tylko jeden element do wypełnienia", false, [], ["Tytuł (jako część struktury)", "Dział", "Rozdział", "Artykuł", "Paragraf", "Akapit"]);
this.createElement ("Załączniki", "Lista załączników", false, [], []);
this.createElement ("Treść przypisów", "Element grupujący treści przypisów", false, [], []);
this.createElement ("Podpisy", "Lista podpisow (nieelektronicznych) pod aktem prawnym.", false, [], ["Podpis"]);
this.createElement ("Podpis", "Pojedynczy podpis", false, [this.createAttribute ("Funkcja",  new pl.wroc.pwr.student.lawcreator.xml.TypeImpl ()), this.createAttribute ("Tytuł",  new pl.wroc.pwr.student.lawcreator.xml.TypeImpl ()), this.createAttribute ("Imię",  new pl.wroc.pwr.student.lawcreator.xml.TypeImpl ()), this.createAttribute ("Nazwisko",  new pl.wroc.pwr.student.lawcreator.xml.TypeImpl ())], []);
this.createElement ("Zatwierdził", "Tekstowa informacja o osobie odpowiedzialnej za zatwierdzenie aktu.", true, [], []);
this.createElement ("Załącznik binarny", "Element umożliwiający zapis dowolnego pliku, jako czesc aktu.", false, [], []);
this.createElement ("Tytuł", "Element reprezentujacy tytul aktu.", false, [], ["Przypis", "Fragment"]);
this.createElement ("Adres publikacji", "Element reprezentujacy adres publikacji aktu.", false, [], ["Dziennik urzędowy"]);
this.createElement ("Przypis", "Odnosnik do przypisu", false, [], []);
this.createElement ("Fragment", "Znakowy fragment tekstu.", false, atr_wspolne, []);
this.createElement ("Dziennik urzędowy", "Element identyfikujacy dziennik urzedowy, w ktorym opublikowano akt.", false, [this.createAttribute ("Typ", this.createType (null, ["Dziennik Ustaw", "Monitor Polski", "Dziennik Urzedowy Ministra Finansow", "Dziennik Urzedowy Ministra Zdrowia", "Dziennik Urzedowy Narodowego Banku Polskiego", "Dziennik Urzedowy Ministra Sprawiedliwosci", "Dziennik Urzedowy Ministra Srodowiska i Glownego Inspektora Ochrony Srodowiska", "Dziennik Urzedowy Ministra Skarbu Panstwa", "Dziennik Urzedowy Ministra Infrastruktury", "Dziennik Urzedowy Urzedu Regulacji Telekomunikacji i Poczty", "Dziennik Urzedowy Ministra Transportu i Budownictwa", "Dziennik Urzedowy Urzedu Komunikacji Elektronicznej", "Dziennik Urzedowy Ministra Spraw Wewnetrznych i Administracji", "Dziennik Urzedowy Ministra Transportu", "Dziennik Urzedowy Ministra Budownictwa", "Dziennik Urzedowy Ministra Nauki i Szkolnictwa Wyzszego", "Dziennik Urzedowy Glownego Urzedu Miar", "Dziennik Urzedowy Ministra Edukacji Narodowej", "Dziennik Urzedowy Ministra Gospodarki Morskiej"]))], []);
this.createElement ("Tytuł (jako część struktury)", "Element reprezentujacy tytul (jako czesc struktury).", false, [], ["Tytuł", "Dział", "Artykuł"]);
this.createElement ("Dział", "Element reprezentujący dział", false, atr_wspolne_nr, ["Tytuł", "Rozdział", "Artykuł"]);
this.createElement ("Rozdział", "Element reprezentujący rozdział", false, atr_wspolne_nr, ["Tytuł", "Oddział", "Śródtytuł", "Artykuł"]);
this.createElement ("Artykuł", "Element reprezentujący artykuł", true, atr_wspolne_nr, ["Ustęp", "Paragraf", "Punkt", "Litera", "Tiret", "Akapit", "Trybunał", "Uwaga", "Wyspa"]);
this.createElement ("Paragraf", "Element reprezentujący paragraf", true, atr_wspolne_nr, ["Ustęp", "Punkt", "Litera", "Tiret", "Akapit", "Uwaga", "Wyspa"]);
this.createElement ("Akapit", "Element reprezentujący akapit", true, atr_wspolne, ["Uwaga", "Wyspa"]);
this.createElement ("Oddział", "Element reprezentujacy oddzial", true, atr_wspolne_nr, ["Tytuł", "Artykuł", "Uwaga", "Wyspa"]);
this.createElement ("Śródtytuł", "Element reprezentujacy tytul aktu.", false, [], ["Przypis", "Fragment"]);
this.createElement ("Tiret", "Element reprezentujacy tiret, uzywany takze do wyliczen.", true, atr_wspolne, ["Akapit", "Trybunał", "Uwaga", "Wyspa"]);
this.createElement ("Trybunał", "Element umozliwiajacy oznaczenie w tekscie ustawy wyrokow Trybunalu Konstytucyjnego.", false, [this.createAttribute ("Stan", this.createType (null, ["Zaskarżony", "Po wyroku"]))], []);
this.createElement ("Punkt", "Element reprezentujacy punkt.", true, atr_wspolne_nr, ["Litera", "Tiret", "Akapit", "Trybunał", "Uwaga", "Wyspa"]);
this.createElement ("Litera", "Element reprezentujacy litere.", true, atr_wspolne_nr, ["Tiret", "Akapit", "Trybunał", "Uwaga", "Wyspa"]);
this.createElement ("Ustęp", "Element reprezentujacy ustep.", true, atr_wspolne_nr, ["Punkt", "Litera", "Tiret", "Akapit", "Trybunał", "Uwaga", "Wyspa"]);
}, $fz.isPrivate = true, $fz));
Clazz.defineMethod (c$, "createType", 
($fz = function (pattern, enums) {
var t =  new pl.wroc.pwr.student.lawcreator.xml.TypeImpl ();
t.setPattern (pattern);
for (var each, $each = 0, $$each = enums; $each < $$each.length && ((each = $$each[$each]) || true); $each++) {
t.add (each);
}
return t;
}, $fz.isPrivate = true, $fz), "~S,~A");
Clazz.defineMethod (c$, "createAttribute", 
($fz = function (name, t) {
var attribute =  new pl.wroc.pwr.student.lawcreator.xml.AttributeImpl ();
attribute.setName (name);
attribute.setType (t);
return attribute;
}, $fz.isPrivate = true, $fz), "~S,pl.wroc.pwr.student.lawcreator.xml.Type");
Clazz.defineMethod (c$, "createElement", 
($fz = function (name, description, editable, attributes, children) {
var e =  new pl.wroc.pwr.student.lawcreator.xml.ElementImpl ();
e.setName (name);
e.setDescription (description);
e.setType (editable ? "editable" : "");
for (var attribute, $attribute = 0, $$attribute = attributes; $attribute < $$attribute.length && ((attribute = $$attribute[$attribute]) || true); $attribute++) {
e.addAttribute (attribute);
}
for (var child, $child = 0, $$child = children; $child < $$child.length && ((child = $$child[$child]) || true); $child++) {
var subElement =  new pl.wroc.pwr.student.lawcreator.xml.ElementImpl ();
subElement.setName (child);
e.add (subElement);
}
this.registry.add (e);
return e;
}, $fz.isPrivate = true, $fz), "~S,~S,~B,~A,~A");
Clazz.defineMethod (c$, "getElement", 
function (name) {
for (var each, $each = this.registry.getItems ().iterator (); $each.hasNext () && ((each = $each.next ()) || true);) {
var element = each;
if (element.getName ().equals (name)) {
return element;
}}
return null;
}, "~S");
Clazz.defineMethod (c$, "getRootNode", 
function () {
var root =  new pl.wroc.pwr.student.lawcreator.xml.nodes.Node ();
root.setName ("Uchwała");
var attribute =  new pl.wroc.pwr.student.lawcreator.xml.nodes.Attribute ();
attribute.setName ("xmlns");
attribute.setValue ("http://www.crd.gov.pl/xml/schematy/edap/2010/01/02");
root.addAttribute (attribute);
attribute =  new pl.wroc.pwr.student.lawcreator.xml.nodes.Attribute ();
attribute.setName ("xmlns:xsi");
attribute.setValue ("http://www.w3.org/2001/XMLSchema-instance");
root.addAttribute (attribute);
attribute =  new pl.wroc.pwr.student.lawcreator.xml.nodes.Attribute ();
attribute.setName ("xsi:schemaLocation");
attribute.setValue ("http://www.crd.gov.pl/xml/schematy/edap/2010/01/02 http://crd.gov.pl/xml/schematy/edap/2010/01/02/schemat.xsd");
root.addAttribute (attribute);
return root;
});
});
