package pl.wroc.pwr.student.acteditor.parsing.xsd;

import pl.wroc.pwr.student.acteditor.parsing.Parser;

public class XSDParser implements Parser {
	private XSDHelper helper;
	private String[] xsdLines;

	public XSDParser(String xsdContent) {
		xsdLines = xsdContent.split("\n");
		this.helper = new XSDHelper(xsdLines);
	}

	@Override
	public Element getElement(String elementName) {
		return helper.getElementByName(elementName);
	}

}
