/*
 * LawCreator jest narzedziem, usprawniajacym pisanie aktów 
 * prawnych zgodnie ze schemtem narzuconym przez MSWiA. System 
 * umozliwia uzytkownikowi tworzenie jednego z dokumentow 
 * umieszczonych w pliku schema.xsd, jakim jest uchwala. Serwis 
 * umozliwia wygenerowanie dokumentu XML.
 * 
 * Copyright (C) 2012 Adamiak Mateusz
 * Niniejszy program jest wolnym oprogramowaniem; możesz go 
 * rozprowadzać dalej i/lub modyfikować na warunkach Powszechnej
 * Licencji Publicznej GNU, wydanej przez Fundację Wolnego
 * Oprogramowania - według wersji 2-giej tej Licencji lub którejś
 * z późniejszych wersji.
 * 
 * Niniejszy program rozpowszechniany jest z nadzieją, iż będzie on
 * użyteczny - jednak BEZ JAKIEJKOLWIEK GWARANCJI, nawet domyślnej
 * gwarancji PRZYDATNOŚCI HANDLOWEJ albo PRZYDATNOŚCI DO OKREŚLONYCH
 * ZASTOSOWAŃ. W celu uzyskania bliższych informacji - Powszechna
 * Licencja Publiczna GNU.
 * 
 * Z pewnością wraz z niniejszym programem otrzymałeś też egzemplarz
 * Powszechnej Licencji Publicznej GNU (GNU General Public License);
 * Jeśli nie - napisz do Free Software Foundation, Inc., 675 Mass Ave,
 * Cambridge, MA 02139, USA.
 */
package pl.wroc.pwr.student.lawcreator.xml;

import pl.wroc.pwr.student.lawcreator.registry.Registry;
import pl.wroc.pwr.student.lawcreator.xml.nodes.Node;

/**
 * Zapewnia obsługę obiektow XML.
 * 
 * @author Mateusz Adamiak
 * 
 */
public class Parser {
	private Registry registry = Registry.getRegistry();

	/**
	 * Tworzy obiekt typu Parser oraz tworzy obiekty XML, ktore sa umieszczane w
	 * rejestrze.
	 */
	public Parser() {
		createElements();
	}

	private void createElements() {
		String dataPattern = "(19|20)[0-9]{2}\\-(01|02|03|04|05|06|07|08|09|10|11|12)\\-([0-2]{1}[0-9]{1}|30|31)";
		String yearsPattern = "(19|20)[0-9]{2}\\-(19|20)[0-9]{2}";
		String positive = "[0-9]+";

		Attribute[] atr_wspolne = new Attribute[] { createAttribute("Uchylony", createType(null, "tak", "nie")),
				createAttribute("Status", new TypeImpl()), createAttribute("Komentarz", new TypeImpl()),
				createAttribute("Obowiazuje od", createType(dataPattern)),
				createAttribute("Obowiazuje do", createType(dataPattern)) };

		Attribute[] atr_wspolne_nr = new Attribute[] { createAttribute("Nr", createType(positive)),
				createAttribute("Uchylony", createType(null, "tak", "nie")), createAttribute("Status", new TypeImpl()),
				createAttribute("Komentarz", createType(dataPattern)),
				createAttribute("Obowiazuje od", createType(dataPattern)), createAttribute("Obowiazuje do", new TypeImpl()) };

		createElement("Uchwała", "Element główny dokumentu XML-owego reprezentującego uchwałę.", false, new Attribute[] {},
				new String[] { "Metryka", "Uwaga", "Wyspa", "Preambuła", "Rozwiń", "Załączniki", "Treść przypisów", "Podpisy",
						"Zatwierdził", "Załącznik binarny" });

		createElement(
				"Metryka",
				"Metryczka aktu, używana jako nagłówek bądź informacja w przywołaniu.",
				false,
				new Attribute[] {
						createAttribute("Status aktu", createType(null, "Uchwalony", "Przyjęty", "Projekt", "Ogłoszony")),
						createAttribute("Nazwa", new TypeImpl()), createAttribute("Organ wydający", new TypeImpl()),
						createAttribute("Data", createType(dataPattern)), createAttribute("Numer", createType(positive)),
						createAttribute("Opis typu", new TypeImpl()), createAttribute("Kadencja", createType(yearsPattern)) },
				new String[] { "Tytuł", "Adres publikacji" });

		createElement(
				"Wyspa",
				"Element umozliwiajacy zapis dowolnego fragmentu tekstu wykraczajacego struktura badz formatowaniem poza niniejszy schemat.",
				false, new Attribute[] {}, new String[] {});

		createElement("Uwaga", "Element przechowujacy uwage tekstowa.", true,
				new Attribute[] { createAttribute("Typ", createType(null, "Zwykła", "Marginalia", "Poprawka")) });

		createElement("Preambuła", "Element reprezentujący preambułę.", true, atr_wspolne, new String[] { "Punkt",
				"Litera", "Tiret", "Akapit" });

		createElement("Rozwiń", "Wybierz tylko jeden element do wypełnienia", false, new Attribute[] {}, new String[] {
				"Tytuł (jako część struktury)", "Dział", "Rozdział", "Artykuł", "Paragraf", "Akapit" });

		createElement("Załączniki", "Lista załączników", false, new Attribute[] {}, new String[] {});

		createElement("Treść przypisów", "Element grupujący treści przypisów", false, new Attribute[] {}, new String[] {});

		createElement("Podpisy", "Lista podpisow (nieelektronicznych) pod aktem prawnym.", false, new Attribute[] {},
				new String[] { "Podpis" });

		createElement("Podpis", "Pojedynczy podpis", false,
				new Attribute[] { createAttribute("Funkcja", new TypeImpl()), createAttribute("Tytuł", new TypeImpl()),
						createAttribute("Imię", new TypeImpl()), createAttribute("Nazwisko", new TypeImpl()) }, new String[] {});

		createElement("Zatwierdził", "Tekstowa informacja o osobie odpowiedzialnej za zatwierdzenie aktu.", true,
				new Attribute[] {}, new String[] {});

		createElement("Załącznik binarny", "Element umożliwiający zapis dowolnego pliku, jako czesc aktu.", false,
				new Attribute[] {}, new String[] {});

		createElement("Tytuł", "Element reprezentujacy tytul aktu.", false, new Attribute[] {}, new String[] { "Przypis",
				"Fragment" });

		createElement("Adres publikacji", "Element reprezentujacy adres publikacji aktu.", false, new Attribute[] {},
				new String[] { "Dziennik urzędowy" });

		createElement("Przypis", "Odnosnik do przypisu", false, new Attribute[] {}, new String[] {});

		createElement("Fragment", "Znakowy fragment tekstu.", false, atr_wspolne, new String[] {});

		createElement(
				"Dziennik urzędowy",
				"Element identyfikujacy dziennik urzedowy, w ktorym opublikowano akt.",
				false,
				new Attribute[] { createAttribute(
						"Typ",
						createType(null, "Dziennik Ustaw", "Monitor Polski", "Dziennik Urzedowy Ministra Finansow",
								"Dziennik Urzedowy Ministra Zdrowia", "Dziennik Urzedowy Narodowego Banku Polskiego",
								"Dziennik Urzedowy Ministra Sprawiedliwosci",
								"Dziennik Urzedowy Ministra Srodowiska i Glownego Inspektora Ochrony Srodowiska",
								"Dziennik Urzedowy Ministra Skarbu Panstwa", "Dziennik Urzedowy Ministra Infrastruktury",
								"Dziennik Urzedowy Urzedu Regulacji Telekomunikacji i Poczty",
								"Dziennik Urzedowy Ministra Transportu i Budownictwa",
								"Dziennik Urzedowy Urzedu Komunikacji Elektronicznej",
								"Dziennik Urzedowy Ministra Spraw Wewnetrznych i Administracji",
								"Dziennik Urzedowy Ministra Transportu", "Dziennik Urzedowy Ministra Budownictwa",
								"Dziennik Urzedowy Ministra Nauki i Szkolnictwa Wyzszego", "Dziennik Urzedowy Glownego Urzedu Miar",
								"Dziennik Urzedowy Ministra Edukacji Narodowej", "Dziennik Urzedowy Ministra Gospodarki Morskiej")) },
				new String[] {});

		createElement("Tytuł (jako część struktury)", "Element reprezentujacy tytul (jako czesc struktury).", false,
				new Attribute[] {}, new String[] { "Tytuł", "Dział", "Artykuł" });

		createElement("Dział", "Element reprezentujący dział", false, atr_wspolne_nr, new String[] { "Tytuł", "Rozdział",
				"Artykuł" });

		createElement("Rozdział", "Element reprezentujący rozdział", false, atr_wspolne_nr, new String[] { "Tytuł",
				"Oddział", "Śródtytuł", "Artykuł" });

		createElement("Artykuł", "Element reprezentujący artykuł", true, atr_wspolne_nr, new String[] { "Ustęp",
				"Paragraf", "Punkt", "Litera", "Tiret", "Akapit", "Trybunał", "Uwaga", "Wyspa" });

		createElement("Paragraf", "Element reprezentujący paragraf", true, atr_wspolne_nr, new String[] { "Ustęp", "Punkt",
				"Litera", "Tiret", "Akapit", "Uwaga", "Wyspa" });

		createElement("Akapit", "Element reprezentujący akapit", true, atr_wspolne, new String[] { "Uwaga", "Wyspa" });

		createElement("Oddział", "Element reprezentujacy oddzial", true, atr_wspolne_nr, new String[] { "Tytuł", "Artykuł",
				"Uwaga", "Wyspa" });

		createElement("Śródtytuł", "Element reprezentujacy tytul aktu.", false, new Attribute[] {}, new String[] {
				"Przypis", "Fragment" });

		createElement("Tiret", "Element reprezentujacy tiret, uzywany takze do wyliczen.", true, atr_wspolne, new String[] {
				"Akapit", "Trybunał", "Uwaga", "Wyspa" });

		createElement("Trybunał", "Element umozliwiajacy oznaczenie w tekscie ustawy wyrokow Trybunalu Konstytucyjnego.",
				false, new Attribute[] { createAttribute("Stan", createType(null, "Zaskarżony", "Po wyroku")) },
				new String[] {});

		createElement("Punkt", "Element reprezentujacy punkt.", true, atr_wspolne_nr, new String[] { "Litera", "Tiret",
				"Akapit", "Trybunał", "Uwaga", "Wyspa" });

		createElement("Litera", "Element reprezentujacy litere.", true, atr_wspolne_nr, new String[] { "Tiret", "Akapit",
				"Trybunał", "Uwaga", "Wyspa" });

		createElement("Ustęp", "Element reprezentujacy ustep.", true, atr_wspolne_nr, new String[] { "Punkt", "Litera",
				"Tiret", "Akapit", "Trybunał", "Uwaga", "Wyspa" });
	}

	private Type createType(String pattern, String... enums) {
		Type t = new TypeImpl();
		t.setPattern(pattern);
		for (String each : enums) {
			t.add(each);
		}
		return t;
	}

	private Attribute createAttribute(String name, Type t) {
		Attribute attribute = new AttributeImpl();
		attribute.setName(name);
		attribute.setType(t);
		return attribute;
	}

	private Element createElement(String name, String description, boolean editable, Attribute[] attributes,
			String... children) {
		Element e = new ElementImpl();
		e.setName(name);
		e.setDescription(description);
		e.setType(editable ? "editable" : "");

		for (Attribute attribute : attributes) {
			e.addAttribute(attribute);
		}

		for (String child : children) {
			Element subElement = new ElementImpl();
			subElement.setName(child);
			e.add(subElement);
		}
		registry.add(e);
		return e;
	}

	/**
	 * Zwraca element z rejestru elementow o podanej nazwie.
	 * 
	 * @param name
	 *          Nazwa elementu
	 * @return Zwraca element o podanej nazwie
	 */
	public Element getElement(String name) {
		for (Object each : registry.getItems()) {
			ElementImpl element = (ElementImpl) each;
			if (element.getName().equals(name)) {
				return element;
			}
		}
		return null;
	}

	/**
	 * Zwraca korzen drzewa XML.
	 * 
	 * @return Korzen drzewa XML
	 */
	public Node getRootNode() {
		Node root = new Node();
		root.setName("Uchwała");
		pl.wroc.pwr.student.lawcreator.xml.nodes.Attribute attribute = new pl.wroc.pwr.student.lawcreator.xml.nodes.Attribute();
		attribute.setName("xmlns");
		attribute.setValue("http://www.crd.gov.pl/xml/schematy/edap/2010/01/02");
		root.addAttribute(attribute);
		attribute = new pl.wroc.pwr.student.lawcreator.xml.nodes.Attribute();
		attribute.setName("xmlns:xsi");
		attribute.setValue("http://www.w3.org/2001/XMLSchema-instance");
		root.addAttribute(attribute);
		attribute = new pl.wroc.pwr.student.lawcreator.xml.nodes.Attribute();
		attribute.setName("xsi:schemaLocation");
		attribute
				.setValue("http://www.crd.gov.pl/xml/schematy/edap/2010/01/02 http://crd.gov.pl/xml/schematy/edap/2010/01/02/schemat.xsd");
		root.addAttribute(attribute);
		return root;
	}
}
