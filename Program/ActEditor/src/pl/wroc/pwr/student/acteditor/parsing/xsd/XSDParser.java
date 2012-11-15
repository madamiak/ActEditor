package pl.wroc.pwr.student.acteditor.parsing.xsd;

import java.util.List;

import pl.wroc.pwr.student.acteditor.parsing.Parser;
import pl.wroc.pwr.student.acteditor.util.Utils;

public class XSDParser implements Parser {
	private XSDHelper helper;
	private String[] xsdLines;

	public XSDParser(String xsdContent) {
		xsdLines = xsdContent.split("\n");
		this.helper = new XSDHelper(xsdLines);
	}

	@Override
	public String[] getElementStructure(String elementName) {
		List result;

		result = helper.getLinesWithElement(elementName);
		String[] tmp = Utils.convertStringListToArray(result);

		return tmp;
	}

	@Override
	public String getDescription(String elementName) {
		String[] lines = getElementStructure(elementName);

		for (String eachLine : lines) {
			String description = helper.getLineWithDescription(eachLine);
			
			if (description == null) {
				continue;
			} else {
				return description;
			}
		}

		return null;
	}

	@Override
	public Element getElement(String elementName) {
		return helper.getElementByName(elementName);
	}

}
