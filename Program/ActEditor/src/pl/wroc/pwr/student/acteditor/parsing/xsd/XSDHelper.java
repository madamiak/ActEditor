package pl.wroc.pwr.student.acteditor.parsing.xsd;

import java.util.ArrayList;
import java.util.List;

public class XSDHelper {
	String[] xsdLines;
	
	public XSDHelper(String[] xsdLines) {
		this.xsdLines = xsdLines;
	}
	
	public List<String> getLinesWithElement(String elementName) {
		boolean read = false;
		String tag = "";
		List<String> result = new ArrayList<String>();

		for (int i = 0; i < xsdLines.length; i++) {
			String currentLine = getWithoutInitialSpaces(xsdLines[i]);

			if (hasElementInLine(elementName, currentLine)) {
				read = true;
				tag = getTagName(currentLine);

				System.out.println(currentLine);
				result.add(currentLine);

				continue;
			}

			if (read == true) {
				String endingTag = getEndingTag(tag);

				if (currentLine.equals(endingTag)) {
					read = false;
				}

				System.out.println(currentLine);
				result.add(currentLine);
			}
		}
		return result;
	}
	
	public String getLineWithDescription(String eachLine) {
		if (eachLine.contains("xsd:documentation>")) {
			return eachLine.substring(eachLine.indexOf("<xsd:documentation>"), eachLine.indexOf("</xsd:documentation>"));
		}
		return null;
	}

	private String getWithoutInitialSpaces(String text) {
		return text.substring(text.indexOf("<"));
	}

	public boolean hasElementInLine(String elementName, String line) {
		return line.contains("element name=\"" + elementName);
	}

	private String getTagName(String line) {
		return line.split(" ")[0];
	}

	private String getEndingTag(String tag) {
		return tag.replaceAll("<", "</") + ">";
	}
}