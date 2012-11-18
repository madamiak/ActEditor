package pl.wroc.pwr.student.acteditor.model.tags;

import java.util.List;

public class SimpleElement implements Element {
	private String minOccurs = "1";
	private String maxOccurs = "1";
	private String name = "";
	private String description = "";
	
	public SimpleElement(String name) {
		this.name = name;
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
	
	public String toString() {
		return name + " " + description;
	}

	@Override
	public String getType() {
		// unsupported
		return null;
	}

	@Override
	public void setType(String type) {
		// unsupporte
	}

}
