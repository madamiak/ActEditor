package pl.wroc.pwr.student.acteditor.model.tags;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

/**
 * Przechowuje i udostepnia dane o definicjach elementów, elementach sequence i
 * choice dokumentu XML.
 * 
 * @author Mateusz
 * 
 */
public class Composition implements Element {
	private List elements = Collections.synchronizedList(new ArrayList());
	private List attributes = Collections.synchronizedList(new ArrayList());
	private String description = "";
	private String name = "";
	private String type = "";
	private String minOccurs = "1";
	private String maxOccurs = "1";
	private String value = "";

	/**
	 * Tworzy obiekt typu Composition z ustawionymi wartościami name i type.
	 * 
	 * @param name
	 *          Nazwa atrybutu.
	 * @param type
	 *          Typ atrybutu.
	 */
	public Composition(String name, String type) {
		this.name = name;
		this.type = type;
	}

	public String toString() {
		String result = name + " " + description + " " + type + " " + minOccurs + "/" + maxOccurs;
		for (Object e : elements) {
			result += "\n\t" + e.toString();
		}
		return result;
	}

	@Override
	public void add(Element element) {
		elements.add(element);
	}

	@Override
	public void remove(Element element) {
		elements.remove(element);
	}

	@Override
	public Element get(int index) {
		return (Element) elements.get(index);
	}

	@Override
	public List getElements() {
		// for(Element e : elements) {
		// e.getElements();
		// }
		return elements;
	}

	@Override
	public String getDescription() {
		return description;
	}

	@Override
	public void setDescription(String description) {
		this.description = description;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
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
	public String getValue() {
		return value;
	}

	@Override
	public void setValue(String value) {
		this.value = value;
	}

}
