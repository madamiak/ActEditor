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

package pl.wroc.pwr.student.lawcreator.xml;

import java.util.List;

/**
 * Udostepnia interfejs elementu XML
 * 
 * @author Mateusz Adamiak
 * 
 */
public interface Element {

	/**
	 * Konwertuje dane o elemencie do typu String.
	 * 
	 * @return Reprezentacja elementu typu String
	 */
	public String toString();

	/**
	 * Zwraca nazwe elementu.
	 * 
	 * @return Nazwa elementu
	 */
	public String getName();

	/**
	 * Ustawia nazwe elementu.
	 * 
	 * @param name
	 *          Nazwa elementu
	 */
	public void setName(String name);

	/**
	 * Zwraca opis elementu.
	 * 
	 * @return Opis elementu
	 */
	public String getDescription();

	/**
	 * Ustawia opis elementu.
	 * 
	 * @param description
	 *          Opis elementu
	 */
	public void setDescription(String description);

	/**
	 * Zwraca typ elementu.
	 * 
	 * @return Typ elementu
	 */
	public String getType();

	/**
	 * Ustawia typ elementu.
	 * 
	 * @param type
	 *          Typ elementu
	 */
	public void setType(String type);

	/**
	 * Zwraca minimalna liczbe wystapien elementu w dokumencie XML.
	 * 
	 * @return Minimalna liczba wystapien
	 */
	public String getMinOccurs();

	/**
	 * Ustawia minimalna liczbe wystapien elementu w dokumencie XML.
	 * 
	 * @param minOccurs
	 *          Minimalna liczba wystapien
	 */
	public void setMinOccurs(String minOccurs);

	/**
	 * Zwraca maksymalna liczbe wystapien elementu w dokumencie XML.
	 * 
	 * @return Maksymalna liczba wystapien
	 */
	public String getMaxOccurs();

	/**
	 * Ustawia maksymalna liczbe wystapien elementu w dokumencie XML.
	 * 
	 * @param maxOccurs
	 *          Maksymalna liczba wystapien
	 */
	public void setMaxOccurs(String maxOccurs);

	/**
	 * Zwraca liste elementow potomnych.
	 * 
	 * @return Lista elementow potomnych
	 */
	public List getElements();

	/**
	 * Dodaje element potomny.
	 * 
	 * @param child
	 *          Element potomny.
	 */
	public void add(Element child);

	/**
	 * Zwraca liste atrybutow.
	 * 
	 * @return Lista atrybutow
	 */
	public List getAttributes();

	/**
	 * Zwraca atrybut o podanej nazwie.
	 * 
	 * @param name
	 *          Nazwa atrybutu
	 * @return Atrybut o podanej nazwie
	 */
	public Attribute getAttribute(String name);

	/**
	 * Dodaje atrybut.
	 * 
	 * @param attribute
	 *          Atrybut elementu
	 */
	public void addAttribute(Attribute attribute);
}
