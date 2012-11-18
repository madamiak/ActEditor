package pl.wroc.pwr.student.acteditor.model.tags;

import java.util.List;

public interface Attribute {
	public String getName();
	public void setName(String name);
	public String getType();
	public void setType(String type);
	public String getUse();
	public void setUse(String use);
	public void add(Attribute attribute);
	public List getAttributes();
}
