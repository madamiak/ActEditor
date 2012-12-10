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
