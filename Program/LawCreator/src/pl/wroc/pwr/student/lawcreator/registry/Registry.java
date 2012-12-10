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
package pl.wroc.pwr.student.lawcreator.registry;

import java.util.ArrayList;
import java.util.List;

/**
 * Zapewnia dostep do rejestru elementow.
 * 
 * Rejestr zawiera elementy Schematu XML, ktore sa identyfikowane po nazwie
 * elementu.
 * 
 * @author Mateusz Adamiak
 * 
 */
public class Registry {
	private static Registry registry;
	private List items;

	private Registry() {
		items = new ArrayList();
	}

	/**
	 * Zwraca referencje do rejestru elementow.
	 * 
	 * @return Referencja do rejestru elementow.
	 */
	public static Registry getRegistry() {
		if (registry == null) {
			registry = new Registry();
		}
		return registry;
	}

	/**
	 * Dodaje element do rejestru.
	 * 
	 * @param item
	 *          Element, ktory ma zostac dodany do rejestru.
	 */
	public void add(Object item) {
		items.add(item);
	}

	/**
	 * Zwraca liste elementow istniejacych w rejestrze.
	 * 
	 * @return Lista elementow.
	 */
	public List getItems() {
		return items;
	}
}
