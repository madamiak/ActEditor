package pl.wroc.pwr.student.acteditor.parsing.xsd;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class Composition implements Element {
//	private List<Element> elements = new ArrayList<Element>();
	private List elements = Collections.synchronizedList(new ArrayList());
	private String description = "";
	private String name = "";
	private String type = "";
	
	public Composition(String name, String type) {
		this.name = name;
		this.type = type;
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
		return (Element)elements.get(index);
	}

	@Override
	public List getElements() {
//		for(Element e : elements) {
//			e.getElements();
//		}
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
	
	public String toString() {
		String result = name + " " + description;
		for(Object e : elements) {
			result += "\n\t" + e.toString();
		}
		return result;
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

}
