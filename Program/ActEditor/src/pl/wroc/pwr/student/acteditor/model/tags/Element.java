package pl.wroc.pwr.student.acteditor.model.tags;

import java.util.List;

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
}
