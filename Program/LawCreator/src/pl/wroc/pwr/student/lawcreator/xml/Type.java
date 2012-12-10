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
 * Przechowuje i udostepnia dane o obiekcie typu elementu XML.
 * @author Mateusz Adamiak
 *
 */
public interface Type {
	
	/**
	 * Konwertuje dane o typie do String.
	 * @return Typ jako lancuch znakow
	 */
	public String toString();

	/**
	 * Zwraca nazwe typu.
	 * @return Nazwa typu
	 */
	public String getName();

	/**
	 * Ustawia nazwe typu.
	 * @param name Nazwa typu
	 */
	public void setName(String name);

	/**
	 * Zwraca liste dostepnych opcji wartosci typu.
	 * @return Lista wartosci typu
	 */
	public List getEnumerations();

	/**
	 * Dodaje wartosc do listy wyliczen.
	 * @param enumeration Wartosc typu
	 */
	public void add(String enumeration);

	/**
	 * Zwraca wyrazenie regularne.
	 * @return Wyrazenie regularne
	 */
	public String getPattern();

	/**
	 * Ustawia wyrazenie regularne.
	 * @param pattern Wyrazenie regularne
	 */
	public void setPattern(String pattern);
}
