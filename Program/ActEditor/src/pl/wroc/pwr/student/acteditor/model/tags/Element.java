package pl.wroc.pwr.student.acteditor.model.tags;

import java.util.List;

/**
 * UdostÍpnia interfejs elementu XML.
 * 
 * @author Mateusz
 *
 */
public interface Element {	
	public void add(Element element);
	public void remove(Element element);
	public Element get(int index);
	public List getElements();
	public String getDescription();
	public void setDescription(String description);
	public String getName();
	public void setName(String name);
	public String getType();
	public void setType(String type);
	public List getAttributes();
	public void addAttribute(Attribute attribute);
	public String getMinOccurs();
	public void setMinOccurs(String minOccurs);
	public String getMaxOccurs();
	public void setMaxOccurs(String maxOccurs);
	public String getValue();
	public void setValue(String value);
}
