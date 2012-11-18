package pl.wroc.pwr.student.acteditor.parsing.xsd;

import pl.wroc.pwr.student.acteditor.model.ElementRegistry;

public class XSDHelper {
	String[] linesInXSDFile;
	ElementRegistry registry;
	
	public XSDHelper(String[] xsdLines) {
		this.linesInXSDFile = xsdLines;
		this.registry = ElementRegistry.getRegistry();
		loadElementsToRegistry();
	}

	private void loadElementsToRegistry() {
		boolean readElement = false;
		Element element = null;
		int token = -1;
		for(String eachLine : linesInXSDFile) {
			token = -1;
			if(hasElementAndName(eachLine)) {
				token = 0;
			} else if(readElement) {
				token = 1;
			} else if(hasGroupAndName(eachLine)) {
				token = 2;
			}
			
			switch(token) {
			case 0:
				element = createComposition(eachLine, "all");
				break;
			case 1:
				element = fillElement(element, eachLine);
				break;
			case 2:
				element = createComposition(eachLine, "group");
				break;
			}
			readElement = element == null ? false : true;
		}
	}

	private boolean hasGroupAndName(String line) {
		if (line.contains("group") && line.contains("name=")) {
			 return true;
		 }
		 return false;
	}

	private Element fillElement(Element element, String line) {
		if(isElementClosed(line)) {
			registry.add(element);
			return null;
		}
		
		if (hasElementAndRef(line)) {
			try {
				String name = getAttribute("ref", line);
				String min = getAttribute("minOccurs", line);
				String max = getAttribute("maxOccurs", line);
				element.add(new SimpleElement(name));
			} catch (StringIndexOutOfBoundsException e) {
			} 
		}
		
		if(hasDescription(line)) {
			element.setDescription(getDescription(line));
		}
		
		if(hasGroup(line)) {
			String name = getAttribute("ref", line);
			String min = getAttribute("minOccurs", line);
			String max = getAttribute("maxOccurs", line);
			element.add(new Composition(name, "group"));
		}
		
		return element;
	}

	private boolean hasGroup(String line) {
		if(line.contains("group")) {
			return true;
		}
		return false;
	}

	private String getDescription(String line) {
		return line.substring(line.indexOf(">") + 1, line.lastIndexOf("<"));
	}

	private boolean hasDescription(String line) {
		if(line.contains("documentation")) {
			return true;
		}
		return false;
	}

	private boolean hasElementAndRef(String line) {
		 if (line.contains("element") && line.contains("ref")) {
			 return true;
		 }
		 return false;
	}

	private boolean isElementClosed(String line) {
		if(line.contains("</xsd:element>")) {
			return true;
		}
		return false;
	}

	private Element createComposition(String line, String type) {
		String name = getAttribute("name", line);
		Element e = new Composition(name, type);
		return e;
	}

	private boolean hasElementAndName(String line) {
		if(line.contains("element") && line.contains("name=")) {
			return true;
		}
		return false;
	}

	public Element getElementByName(String elementName) {
		return registry.get(elementName);
	}
	
	private String getAttribute(String name, String line) {
		if(line.contains(name)) {
			int begin = line.indexOf(name + "=\"") + (name + "=\"").length();
			int end = line.indexOf("\"", line.indexOf(name + "=\"") + (name + "=\"").length());
			return line.substring(begin, end);
		}
		
		return null;
	}
}
