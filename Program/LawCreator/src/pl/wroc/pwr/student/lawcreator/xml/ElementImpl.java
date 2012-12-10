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
 * Przechowuje i udostepnia dane o elemencie dokumentu XML.
 * 
 * @author Mateusz Adamiak
 * 
 */
public class ElementImpl implements Element {
	private String name = "";
	private String type = "";
	private String description = "";
	private String minOccurs = "1";
	private String maxOccurs = "1";
	private List children;
	private List attributes;

	/**
	 * Tworzy obiekt elementu XML.
	 */
	public ElementImpl() {
		children = new ArrayList();
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
	public String getDescription() {
		return description;
	}

	@Override
	public void setDescription(String description) {
		this.description = description;
	}

	@Override
	public String getType() {
		return type;
	}

	@Override
	public void setType(String type) {
		this.type = type;
	}

	@Override
	public String getMinOccurs() {
		return minOccurs;
	}

	@Override
	public void setMinOccurs(String minOccurs) {
		this.minOccurs = minOccurs;
	}

	@Override
	public String getMaxOccurs() {
		return maxOccurs;
	}

	@Override
	public void setMaxOccurs(String maxOccurs) {
		this.maxOccurs = maxOccurs;
	}

	@Override
	public List getElements() {
		return children;
	}

	@Override
	public void add(Element child) {
		children.add(child);
	}

	@Override
	public List getAttributes() {
		return attributes;
	}

	@Override
	public void addAttribute(Attribute attribute) {
		attributes.add(attribute);
	}

	@Override
	public Attribute getAttribute(String name) {
		for (Object each : attributes) {
			if (((Attribute) each).getName().equals(name)) {
				return (Attribute) each;
			}
		}
		return null;
	}

}
