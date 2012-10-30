package pl.wroc.pwr.student.acteditor.parsing;

public interface Parser {
	public String[] getElementStructure(String elementName);
	public String getDescription(String elementName);
}
