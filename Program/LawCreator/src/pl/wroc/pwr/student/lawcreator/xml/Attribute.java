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
package pl.wroc.pwr.student.lawcreator.xml;

import java.util.List;

/**
 * Udostepnia interfejs atrybutu XML
 * 
 * @author Mateusz Adamiak
 * 
 */
public interface Attribute {
	/**
	 * Konwertuje dane o atrybucie do typu String.
	 * 
	 * @return Reprezentacja atrybutu typu String
	 */
	public String toString();

	/**
	 * Zwraca nazwe atrybutu.
	 * 
	 * @return Nazwa atrybutu
	 */
	public String getName();

	/**
	 * Ustawia nazwe atrybutu.
	 * 
	 * @param name
	 *          Nazwa atrybutu
	 */
	public void setName(String name);

	/**
	 * Zwraca wartosc domyslna atrybutu.
	 * 
	 * @return Wartosc domyslna atrybutu
	 */
	public String getDefault();

	/**
	 * Ustawia wartosc domyslna atrybutu.
	 * 
	 * @param defaultValue
	 *          Wartosc domyslna atrybutu
	 */
	public void setDefault(String defaultValue);

	/**
	 * Zwraca wartosc use.
	 * 
	 * Pole use mowi, w jaki sposob atrybut ma byc uzywany.
	 * 
	 * @return Wartosc use.
	 */
	public String getUse();

	/**
	 * Ustawia wartosc use.
	 * 
	 * Pole use mowi, w jaki sposob atrybut ma byc uzywany.
	 * 
	 * @param use
	 *          Wartosc use
	 */
	public void setUse(String use);

	/**
	 * Zwraca typ atrybutu.
	 * 
	 * @return Typ atrybutu
	 */
	public Type getType();

	/**
	 * Ustawia typ atrybutu.
	 * 
	 * @param type
	 *          Typ atrybutu
	 */
	public void setType(Type type);

	/**
	 * Zwraca liste atrybutow.
	 * 
	 * @return Lista atrybutow
	 */
	public List getAttributes();

	/**
	 * Dodaje atrybut.
	 * 
	 * @param attribute
	 *          Atrybut, ktory ma zostac dodany
	 */
	public void add(Attribute attribute);

	/**
	 * Zwraca atrybut o podanej nazwie.
	 * 
	 * @param name
	 *          Nazwa szukanego atrybutu
	 * @return Szukany atrybut
	 */
	public Attribute getAttribute(String name);
}
