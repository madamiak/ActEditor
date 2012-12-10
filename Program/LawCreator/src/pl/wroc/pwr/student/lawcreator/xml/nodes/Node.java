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
package pl.wroc.pwr.student.lawcreator.xml.nodes;

import java.util.ArrayList;
import java.util.List;

import pl.wroc.pwr.student.lawcreator.utils.Mapper;

/**
 * Przechowuje i udostepnia dane o elemencie (wezle) dokumentu XML.
 * 
 * Ta klasa jest uzywana przy generowaniu zawartosci dokumentu XML.
 * 
 * @author Mateusz Adamiak
 * 
 */
public class Node {
	private String name = "";
	private String value = "";
	private List nodes;
	private List attributes;

	/**
	 * Tworzy obiekt typu Node.
	 */
	public Node() {
		nodes = new ArrayList();
		attributes = new ArrayList();
	}

	/**
	 * Zwraca nazwe elementu.
	 * 
	 * @return Nazwa elementu
	 */
	public String getName() {
		return name;
	}

	/**
	 * Ustawia nazwe elementu.
	 * 
	 * @param name
	 *          Nazwa elementu
	 */
	public void setName(String name) {
		this.name = name;
	}

	/**
	 * Zwraca wartosc elementu.
	 * 
	 * @return Wartosc elementu
	 */
	public String getValue() {
		return value;
	}

	/**
	 * Ustawia wartosc elementu.
	 * 
	 * @param value
	 *          Wartosc elementu
	 */
	public void setValue(String value) {
		this.value = value;
	}

	/**
	 * Zwraca liste elementow potomnych.
	 * 
	 * @return Lista elementow potomnych
	 */
	public List getNodes() {
		return nodes;
	}

	/**
	 * Dodaje element potomny.
	 * 
	 * @param node
	 *          Element potomny.
	 */
	public void addNote(Node node) {
		nodes.add(node);
	}

	/**
	 * Zwraca liste atrybutow.
	 * 
	 * @return Lista atrybutow
	 */
	public List getAttributes() {
		return attributes;
	}

	/**
	 * Dodaje atrybut.
	 * 
	 * @param attribute
	 *          Atrybut elementu
	 */
	public void addAttribute(Attribute attribute) {
		attributes.add(attribute);
	}

	/**
	 * Zwraca element o podanej nazwie.
	 * 
	 * @param name
	 *          Nazwa elementu
	 * @return Element o podanej nazwie
	 */
	public Node getChildByName(String name) {
		for (Object o : nodes) {
			if (((Node) o).getName().equals(name)) {
				return (Node) o;
			}
		}
		return null;
	}

	/**
	 * Zwraca atrybut o podanej nazwie.
	 * 
	 * @param name
	 *          Nazwa atrybutu
	 * @return Atrybut o podanej nazwie
	 */
	public Attribute getAttributeByName(String name) {
		for (Object o : attributes) {
			if (((Attribute) o).getName().equals(name)) {
				return (Attribute) o;
			}
		}
		return null;
	}

	/**
	 * Zwraca reprezentacje XML elementu.
	 * 
	 * Nazwa elementu jest nazwa znacznika, natomiast wartosc elementu znajduje
	 * sie miedzy znacznikami. Przyk³ad:
	 * <p>
	 * nazwa="name", wartosc="value" reprezentacja XML: &ltname&gtvalue&lt/name&gt
	 * </p>
	 * Metoda wywoluje rowniez metode zwracajaca reprezentacje XML atrybutow
	 * elementu. Jesli maja one wypelnione wartosci, zostaja dodane do znacznika
	 * otwierajacego. Przyklad:
	 * <p>
	 * nazwa_elementu="name", nazwa_atrybutu="aName", wartosc_atrybutu="aValue"
	 * reprezentacja XML: &ltname aName="aValue"&gt (...)
	 * </p>
	 * 
	 * @return Reprezentacja XML elementu
	 */
	public String toXML() {
		String result = "";
		String name = Mapper.map(this.name);
		if (name.equals("")) {
			for (Object o : nodes) {
				Node n = (Node) o;
				result += "\n" + n.toXML();
			}
		} else {
			result += "<" + name;
			for (Object o : attributes) {
				result += " " + ((Attribute) o).toXML();
			}
			result += ">\n";
			result += value;
			for (Object o : nodes) {
				Node n = (Node) o;
				result += "\n" + n.toXML();
			}
			result += "\n</" + name + ">";
		}
		return result;
	}
}
