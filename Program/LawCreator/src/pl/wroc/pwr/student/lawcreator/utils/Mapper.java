/*
 * LawCreator jest narzedziem, usprawniajacym pisanie akt�w 
 * prawnych zgodnie ze schemtem narzuconym przez MSWiA. System 
 * umozliwia uzytkownikowi tworzenie jednego z dokumentow 
 * umieszczonych w pliku schema.xsd, jakim jest uchwala. Serwis 
 * umozliwia wygenerowanie dokumentu XML.
 * 
 * Copyright (C) 2012 Adamiak Mateusz
 * Niniejszy program jest wolnym oprogramowaniem; mo�esz go 
 * rozprowadza� dalej i/lub modyfikowa� na warunkach Powszechnej
 * Licencji Publicznej GNU, wydanej przez Fundacj� Wolnego
 * Oprogramowania - wed�ug wersji 2-giej tej Licencji lub kt�rej�
 * z p�niejszych wersji.
 * 
 * Niniejszy program rozpowszechniany jest z nadziej�, i� b�dzie on
 * u�yteczny - jednak BEZ JAKIEJKOLWIEK GWARANCJI, nawet domy�lnej
 * gwarancji PRZYDATNO�CI HANDLOWEJ albo PRZYDATNO�CI DO OKRE�LONYCH
 * ZASTOSOWA�. W celu uzyskania bli�szych informacji - Powszechna
 * Licencja Publiczna GNU.
 * 
 * Z pewno�ci� wraz z niniejszym programem otrzyma�e� te� egzemplarz
 * Powszechnej Licencji Publicznej GNU (GNU General Public License);
 * Je�li nie - napisz do Free Software Foundation, Inc., 675 Mass Ave,
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
	 * Przyk�ad: "Uchwa�a" zostaje zamieniona na "uchwala".
	 * 
	 * @param tag
	 *          Lancuch znakow do mapowania.
	 * @return Zmapowana wartosc typu String.
	 */
	public static String map(String tag) {
		switch (tag) {
		case "Uchwa�a":
			return "uchwala";
		case "Metryka":
			return "metryczka";
		case "Wyspa":
			return "wyspa";
		case "Uwaga":
			return "uwaga";
		case "Preambu�a":
			return "preambula";
		case "Rozwi�":
			return "";
		case "Za��czniki":
			return "zalaczniki";
		case "Tre�� przypis�w":
			return "tresc-przypisow";
		case "Podpisy":
			return "podpisy";
		case "Zatwierdzi�":
			return "zatwierdzil";
		case "Za��cznik binarny":
			return "zalacznik_bin";
		case "Tytu�":
			return "tytul";
		case "Adres publikacji":
			return "adres-publikacji";
		case "Przypis":
			return "przypis";
		case "Fragment":
			return "fragment";
		case "Dziennik urz�dowy":
			return "adres-dzu";
		case "Tytu� (jako cz�� struktury)":
			return "tyt";
		case "Dzia�":
			return "dzial";
		case "Rozdzia�":
			return "rozdzial";
		case "Artyku�":
			return "artykul";
		case "Paragraf":
			return "paragraf";
		case "Oddzia�":
			return "oddzial";
		case "�r�dtytu�":
			return "srodtytul";
		case "Tiret":
			return "tiret";
		case "Trybuna�":
			return "trybunal";
		case "Punkt":
			return "punkt";
		case "Litera":
			return "litera";
		case "Ust�p":
			return "ustep";
		case "Status aktu":
			return "status-aktu";
		case "Nazwa":
			return "nazwa";
		case "Organ wydaj�cy":
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
		case "Imi�":
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
		case "Przyj�ty":
			return "przyjety";
		case "Projekt":
			return "projekt";
		case "Og�oszony":
			return "ogloszony";
		case "Zwyk�a":
			return "zwykla";
		case "Marginalia":
			return "marginalia";
		case "Poprawka":
			return "poprawka";
		case "Akapit":
			return "akapit";
		case "Lista za��cznik�w":
			return "?";
		case "Podpis":
			return "podpis";
		case "Zaskar�ony":
			return "zaskarzony";
		case "Po wyroku":
			return "po-wyroku";
		}
		return tag;
	}
}
