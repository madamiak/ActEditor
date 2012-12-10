/*
 * LawCreator jest narzedziem, usprawniajacym pisanie aktów 
 * prawnych zgodnie ze schemtem narzuconym przez MSWiA. System 
 * umozliwia uzytkownikowi tworzenie jednego z dokumentow 
 * umieszczonych w pliku schema.xsd, jakim jest uchwala. Serwis 
 * umozliwia wygenerowanie dokumentu XML.
 * 
 * Copyright (C) 2012 Adamiak Mateusz
 * Niniejszy program jest wolnym oprogramowaniem; mo¿esz go 
 * rozprowadzaæ dalej i/lub modyfikowaæ na warunkach Powszechnej
 * Licencji Publicznej GNU, wydanej przez Fundacjê Wolnego
 * Oprogramowania - wed³ug wersji 2-giej tej Licencji lub którejœ
 * z póŸniejszych wersji.
 * 
 * Niniejszy program rozpowszechniany jest z nadziej¹, i¿ bêdzie on
 * u¿yteczny - jednak BEZ JAKIEJKOLWIEK GWARANCJI, nawet domyœlnej
 * gwarancji PRZYDATNOŒCI HANDLOWEJ albo PRZYDATNOŒCI DO OKREŒLONYCH
 * ZASTOSOWAÑ. W celu uzyskania bli¿szych informacji - Powszechna
 * Licencja Publiczna GNU.
 * 
 * Z pewnoœci¹ wraz z niniejszym programem otrzyma³eœ te¿ egzemplarz
 * Powszechnej Licencji Publicznej GNU (GNU General Public License);
 * Jeœli nie - napisz do Free Software Foundation, Inc., 675 Mass Ave,
 * Cambridge, MA 02139, USA.
 */
package pl.wroc.pwr.student.lawcreator.utils;

/**
 * Klasa pomocnicza.
 * 
 * @author Mateusz Adamiak
 * 
 */
public final class Mapper {

	/**
	 * Mapuje otrzymany lancuch znakow.
	 * 
	 * Metoda zamienia lancuch wejsciowy na lancuch wynikowy w ten sposob, ze
	 * zamienia dany wyraz (lub wyrazy), ktore sa przedstawione uzytkownikowi na
	 * te, ktore maja zostac umieszczone w wygenerowanym dokumencie XML.
	 * 
	 * Przyk³ad: "Uchwa³a" zostaje zamieniona na "uchwala".
	 * 
	 * @param tag
	 *          Lancuch znakow do mapowania.
	 * @return Zmapowana wartosc typu String.
	 */
	public static String map(String tag) {
		switch (tag) {
		case "Uchwa³a":
			return "uchwala";
		case "Metryka":
			return "metryczka";
		case "Wyspa":
			return "wyspa";
		case "Uwaga":
			return "uwaga";
		case "Preambu³a":
			return "preambula";
		case "Rozwiñ":
			return "";
		case "Za³¹czniki":
			return "zalaczniki";
		case "Treœæ przypisów":
			return "tresc-przypisow";
		case "Podpisy":
			return "podpisy";
		case "Zatwierdzi³":
			return "zatwierdzil";
		case "Za³¹cznik binarny":
			return "zalacznik_bin";
		case "Tytu³":
			return "tytul";
		case "Adres publikacji":
			return "adres-publikacji";
		case "Przypis":
			return "przypis";
		case "Fragment":
			return "fragment";
		case "Dziennik urzêdowy":
			return "adres-dzu";
		case "Tytu³ (jako czêœæ struktury)":
			return "tyt";
		case "Dzia³":
			return "dzial";
		case "Rozdzia³":
			return "rozdzial";
		case "Artyku³":
			return "artykul";
		case "Paragraf":
			return "paragraf";
		case "Oddzia³":
			return "oddzial";
		case "Œródtytu³":
			return "srodtytul";
		case "Tiret":
			return "tiret";
		case "Trybuna³":
			return "trybunal";
		case "Punkt":
			return "punkt";
		case "Litera":
			return "litera";
		case "Ustêp":
			return "ustep";
		case "Status aktu":
			return "status-aktu";
		case "Nazwa":
			return "nazwa";
		case "Organ wydaj¹cy":
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
		case "Imiê":
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
		case "Przyjêty":
			return "przyjety";
		case "Projekt":
			return "projekt";
		case "Og³oszony":
			return "ogloszony";
		case "Zwyk³a":
			return "zwykla";
		case "Marginalia":
			return "marginalia";
		case "Poprawka":
			return "poprawka";
		case "Akapit":
			return "akapit";
		case "Lista za³¹czników":
			return "?";
		case "Podpis":
			return "podpis";
		case "Zaskar¿ony":
			return "zaskarzony";
		case "Po wyroku":
			return "po-wyroku";
		}
		return tag;
	}
}
