Clazz.declarePackage ("pl.wroc.pwr.student.lawcreator.utils");
c$ = Clazz.declareType (pl.wroc.pwr.student.lawcreator.utils, "Mapper");
c$.map = Clazz.defineMethod (c$, "map", 
function (tag) {
switch (tag) {
case "Uchwała":
return "uchwala";
case "Metryka":
return "metryczka";
case "Wyspa":
return "wyspa";
case "Uwaga":
return "uwaga";
case "Preambuła":
return "preambula";
case "Rozwiń":
return "";
case "Załączniki":
return "zalaczniki";
case "Treść przypisów":
return "tresc-przypisow";
case "Podpisy":
return "podpisy";
case "Zatwierdził":
return "zatwierdzil";
case "Załącznik binarny":
return "zalacznik_bin";
case "Tytuł":
return "tytul";
case "Adres publikacji":
return "adres-publikacji";
case "Przypis":
return "przypis";
case "Fragment":
return "fragment";
case "Dziennik urzędowy":
return "adres-dzu";
case "Tytuł (jako część struktury)":
return "tyt";
case "Dział":
return "dzial";
case "Rozdział":
return "rozdzial";
case "Artykuł":
return "artykul";
case "Paragraf":
return "paragraf";
case "Oddział":
return "oddzial";
case "Śródtytuł":
return "srodtytul";
case "Tiret":
return "tiret";
case "Trybunał":
return "trybunal";
case "Punkt":
return "punkt";
case "Litera":
return "litera";
case "Ustęp":
return "ustep";
case "Status aktu":
return "status-aktu";
case "Nazwa":
return "nazwa";
case "Organ wydający":
return "organ-wydajacy";
case "Data":
return "data";
case "Numer":
return "numer";
case "Opis typu":
return "opis-typu";
case "Kadencja":
return "kadencja";
case "Typ":
return "typ";
case "Imię":
return "imie";
case "Nazwisko":
return "nazwisko";
case "Funkcja":
return "funkcja";
case "Uchylony":
return "uchylony";
case "Status":
return "status";
case "Komentarz":
return "komentarz";
case "Obowiazuje od":
return "obowiazuje-od";
case "Obowiazuje do":
return "obowiazuje-do";
case "Nr":
return "numer";
case "Uchwalony":
return "uchwalony";
case "Przyjęty":
return "przyjety";
case "Projekt":
return "projekt";
case "Ogłoszony":
return "ogloszony";
case "Zwykła":
return "zwykla";
case "Marginalia":
return "marginalia";
case "Poprawka":
return "poprawka";
case "Akapit":
return "akapit";
case "Lista załączników":
return "?";
case "Podpis":
return "podpis";
case "Zaskarżony":
return "zaskarzony";
case "Po wyroku":
return "po-wyroku";
}
return tag;
}, "~S");
