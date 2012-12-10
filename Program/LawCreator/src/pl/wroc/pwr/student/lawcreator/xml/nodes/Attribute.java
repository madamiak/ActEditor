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
package pl.wroc.pwr.student.lawcreator.xml.nodes;

import pl.wroc.pwr.student.lawcreator.utils.Mapper;

/**
 * Przechowuje i udostepnia dane o atrybucie dokumentu XML.
 * 
 * Ta klasa jest uzywana przy generowaniu zawartosci dokumentu XML.
 * 
 * @author Mateusz Adamiak
 * 
 */
public class Attribute {
	private String name = "";
	private String value = "";

	/**
	 * Zwraca nazwe atrybutu.
	 * 
	 * @return Nazwa atrybutu
	 */
	public String getName() {
		return name;
	}

	/**
	 * Ustawia nazwe atrybutu.
	 * 
	 * @param name
	 *          Nazwa atrybutu
	 */
	public void setName(String name) {
		this.name = name;
	}

	/**
	 * Zwraca wartosc atrybutu.
	 * 
	 * @return Wartosc atrybutu
	 */
	public String getValue() {
		return value;
	}

	/**
	 * Ustawia wartosc atrybutu.
	 * 
	 * @param value
	 *          Wartosc atrybutu
	 */
	public void setValue(String value) {
		this.value = value;
	}

	/**
	 * Zwraca reprezentacje XML atrybutu.
	 * 
	 * Jesli dany atrybut posiada nazwe "name" oraz wartosc "value", reprezentacja
	 * wyglada nastepujaco:
	 * <p>
	 * name="value"
	 * </p>
	 * Jesli atrybut nie posiada wartosci, to zwracany jest pusty znak.
	 * 
	 * @return Reprezentacja XML atrybutu
	 */
	public String toXML() {
		String name = Mapper.map(this.name);
		String value = Mapper.map(this.value);
		String result = "";
		result += value.equals("") ? "" : name + "=\"" + value + "\"";
		return result;
	}
}
