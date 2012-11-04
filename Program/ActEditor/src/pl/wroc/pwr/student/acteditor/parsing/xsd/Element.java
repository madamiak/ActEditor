package pl.wroc.pwr.student.acteditor.parsing.xsd;

public interface Element {	
	public void add(Element element);
	public void remove(Element element);
	public Element get(int index);
	public void getElements();
	public String getDescription();
	public void setDescription(String description);
}
