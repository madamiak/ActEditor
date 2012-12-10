package pl.wroc.pwr.student.acteditor.model.tags;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

/**
 * Przechowuje i udostepnia dane o elemencie dokumentu XML.
 * 
 * @author Mateusz
 * 
 */
public class SimpleElement implements Element {
	private List attributes = Collections.synchronizedList(new ArrayList());
	private String minOccurs = "1";
	private String maxOccurs = "1";
	private String name = "";
	private String type = "";
	private String description = "";
	private String value = "";

	/**
	 * Tworzy obiekt typu SimpleElement z ustawiona wartoscia name.
	 * 
	 * @param name
	 *          Nazwa elementu.
	 */
	public SimpleElement(String name) {
		this.name = name;
	}

	public String toString() {
		return name + " " + description + " " + minOccurs + "/" + maxOccurs;
	}

	@Override
	public void add(Element element) {
		// unsupported
	}

	@Override
	public void remove(Element element) {
		// unsupported
	}

	@Override
	public Element get(int index) {
		// unsupported
		return null;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	@Override
	public List getElements() {
		return null;
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
