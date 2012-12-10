package pl.wroc.pwr.student.acteditor.model;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import pl.wroc.pwr.student.acteditor.model.tags.Element;

/**
 * Zapewnia dostep do rejestru elementow.
 * 
 * Rejestr zawiera elementy Schematu XML, ktore sa identyfikowane po nazwie
 * elementu.
 * 
 * @author Mateusz
 * 
 */
public class ElementRegistry {
	private static ElementRegistry registry;
	private List elements;

	private ElementRegistry() {
		elements = Collections.synchronizedList(new ArrayList());
	}

	/**
	 * Zwraca referencje do rejestru elementów.
	 * 
	 * @return Referencja do rejestru elementów.
	 */
	public static ElementRegistry getRegistry() {
		if (registry == null) {
			registry = new ElementRegistry();
		}
		return registry;
	}

	/**
	 * Dodaje element do rejestru, jesli element o takiej nazwie nie istnieje
	 * jeszcze w rejestrze.
	 * 
	 * @param element
	 *          Element, który ma zostac dodany do rejestru.
	 */
	public void add(Element element) {
		for (Object each : elements) {
			if (((Element) each).getName().equals(element.getName())) {
				return;
			}
		}
		elements.add(element);
	}

	/**
	 * Zwraca element z rejestru o podanej nazwie.
	 * 
	 * @param name
	 *          Nazwa atrybutu w rejestrze.
	 * @return Element o podanej nazwie.
	 */
	public Element get(String name) {
		for (Object each : elements) {
			if (((Element) each).getName().equals(name)) {
				return (Element) each;
			}
		}
		return null;
	}

	/**
	 * Zwraca liste elementów istniejacych w rejestrze.
	 * 
	 * @return Lista elementów.
	 */
	public List getElements() {
		return elements;
	}
}
