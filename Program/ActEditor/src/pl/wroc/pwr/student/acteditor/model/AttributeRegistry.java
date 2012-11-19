package pl.wroc.pwr.student.acteditor.model;

import java.util.ArrayList;
import java.util.List;

import pl.wroc.pwr.student.acteditor.model.tags.Attribute;

public class AttributeRegistry {
	private static AttributeRegistry registry;
	List attributes;
	
	private AttributeRegistry() {
		attributes = new ArrayList();
	}
	
	public static AttributeRegistry getRegistry() {
		if(registry == null) {
			registry = new AttributeRegistry();
		}
		return registry;
	}
	
	public void add(Attribute attribute) {
		attributes.add(attribute);
	}
	
	public Attribute get(int index) {
		return (Attribute) attributes.get(index);
	}
	
	public List getAttributes() {
		return attributes;
	}
}
