package pl.wroc.pwr.student.acteditor.model.tags;

import java.util.ArrayList;
import java.util.List;

public class AttributeGroup implements Attribute {
	private String name;
	private String type;
	private String use;
	private List attributes;
	
	public AttributeGroup() {
		attributes = new ArrayList();
		use = "optional";
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
	public String getType() {
		return type;
	}

	@Override
	public void setType(String type) {
		this.type = type;
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
	public void add(Attribute attribute) {
		attributes.add(attribute);
	}

	@Override
	public List getAttributes() {
		return attributes;
	}
	
	public String toString() {
		return name;
	}

}
