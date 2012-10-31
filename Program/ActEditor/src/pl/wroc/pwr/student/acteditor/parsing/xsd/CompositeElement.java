package pl.wroc.pwr.student.acteditor.parsing.xsd;

import java.util.ArrayList;
import java.util.List;

public class CompositeElement implements Element {
	private String name;
	private List<Element> elements = new ArrayList<Element>();

	public CompositeElement(){}
	
	public CompositeElement(String name) {
		this.name = name;
	}
	
	@Override
	public void add(Element element) {
		elements.add(element);
	}

	@Override
	public void remove(Element element) {
		if(elements.contains(element)) {
			elements.remove(element);
		}
	}

	@Override
	public Element get(int index) {
		if(index < elements.size() && index > 0) {
			return elements.get(index);
		}
		return null;
	}

	@Override
	public void getElements() {
		if(name != null) {
			System.out.println("name=\"" + name + "\"");
		}
		
		for(Element each : elements) {
			each.getElements();
		}
	}

}
