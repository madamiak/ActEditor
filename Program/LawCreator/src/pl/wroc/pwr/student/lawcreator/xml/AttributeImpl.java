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

import java.util.ArrayList;
import java.util.List;

/**
 * Przechowuje i udostepnia dane o atrybucie dokumentu XML.
 * @author Mateusz Adamiak
 *
 */
public class AttributeImpl implements Attribute {
	private String name = "";
	private String defaultValue = "";
	private String use = "optional";
	private List attributes;
	private Type type;
	
	/**
	 * Tworzy obiekt atrybutu XML.
	 */
	public AttributeImpl() {
		attributes = new ArrayList();
	}

	@Override
	public String getName() {
		return name;
	}

	@Override
	public void setName(String name) {
		this.name = name;
	}

	@Override
	public String getDefault() {
		return defaultValue;
	}

	@Override
	public void setDefault(String defaultValue) {
		this.defaultValue = defaultValue;
	}

	@Override
	public String getUse() {
		return use;
	}

	@Override
	public void setUse(String use) {
		this.use = use;
	}

	@Override
	public Type getType() {
		return type;
	}

	@Override
	public void setType(Type type) {
		this.type = type;
	}

	@Override
	public List getAttributes() {
		return attributes;
	}

	@Override
	public void add(Attribute attribute) {
		attributes.add(attribute);
	}

	@Override
	public Attribute getAttribute(String name) {
		for(Object each : attributes) {
			if(((Attribute)each).getName().equals(name)) {
				return (Attribute)each;
			}
		}
		return null;
	}

}
