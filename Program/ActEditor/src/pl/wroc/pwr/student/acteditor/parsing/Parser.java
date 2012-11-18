package pl.wroc.pwr.student.acteditor.parsing;

import pl.wroc.pwr.student.acteditor.parsing.xsd.Element;

public interface Parser {
	public Element getElement(String elementName);
}
