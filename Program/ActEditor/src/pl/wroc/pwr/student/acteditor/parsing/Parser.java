package pl.wroc.pwr.student.acteditor.parsing;

import pl.wroc.pwr.student.acteditor.parsing.xsd.Element;

public interface Parser {
	public String[] getElementStructure(String elementName);
	public String getDescription(String elementName);
	public Element getElement(String elementName);
}
