package pl.wroc.pwr.student.acteditor.model;

import java.util.ArrayList;
import java.util.List;

import pl.wroc.pwr.student.acteditor.model.tags.SimpleType;

/**
 * Zapewnia dostep do rejestru prostych typ�w.
 * 
 * Rejestr zawiera proste typy Schematu XML, kt�re sa identyfikowane po nazwie.
 * 
 * @author Mateusz
 * 
 */
public class TypeRegistry {
	private static TypeRegistry registry;
	private List types;

	private TypeRegistry() {
		types = new ArrayList();
	}

	/**
	 * Zwraca referencje do rejestru typ�w prostych.
	 * 
	 * @return Referencja do rejestru typ�w prostych.
	 */
	public static TypeRegistry getRegistry() {
		if (registry == null) {
			registry = new TypeRegistry();
		}
		return registry;
	}

	/**
	 * Dodaje typ prosty do rejestru, jesli typ o takiej nazwie nie istnieje
	 * jeszcze w rejestrze.
	 * 
	 * @param type
	 *          Typ prosty, kt�ry ma zostac dodany do rejestru.
	 */
	public void add(SimpleType type) {
		for (Object each : types) {
			if (((SimpleType) each).getName().equals(type.getName())) {
				return;
			}
		}
		types.add(type);
	}

	/**
	 * Zwraca typ prosty z rejestru o podanym indeksie.
	 * 
	 * @param index
	 *          Indeks typu prostego w rejestrze.
	 * @return Typ prosty o podanym indeksie.
	 */
	public SimpleType get(int index) {
		return (SimpleType) types.get(index);
	}

	/**
	 * Zwraca typ prosty z rejestru o podanej nazwie.
	 * 
	 * @param name
	 *          Nazwa typu prostego w rejestrze.
	 * @return Typ prosty o podanej nazwie.
	 */
	public SimpleType get(String name) {
		for (Object each : types) {
			if (((SimpleType) each).getName().equals(name)) {
				return (SimpleType) each;
			}
		}
		return null;
	}

	/**
	 * Zwraca liste typ�w prostych istniejacych w rejestrze.
	 * 
	 * @return Lista typ�w prostych.
	 */
	public List getTypes() {
		return types;
	}
}
