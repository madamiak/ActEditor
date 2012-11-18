package pl.wroc.pwr.student.acteditor.parsing.xsd;

import java.util.Stack;

import pl.wroc.pwr.student.acteditor.model.ElementRegistry;
import pl.wroc.pwr.student.acteditor.model.tags.Composition;
import pl.wroc.pwr.student.acteditor.model.tags.Element;
import pl.wroc.pwr.student.acteditor.parsing.Parser;

public class XSDParser implements Parser {
	private XSDHelper helper;
	private String[] lines;
	private ElementRegistry registry;
	
	public XSDParser(String[] lines) {
		this.lines = lines;
		this.helper = new XSDHelper();
		registry = ElementRegistry.getRegistry();
	}

	@Override
	public void loadData() {
		loadElementsToRegistry();
	}
	
	private void loadElementsToRegistry() {
		int token = -1; 
		boolean desc = false;
		Stack elements = new Stack();
		Element element = null;
		Element sequence = null;
		Element choice = null;
		Element parent = null;
		
		for(String line  : lines) {
			token = helper.getToken(line);
			
			switch(token) {
			case 0:
				element = helper.createComposition(line, "all");
				elements.push(element);
				break;
			case 1:
				Element subElement = helper.createReference(line);
				parent = (Element) elements.pop();
				parent.add(subElement);
				elements.push(parent);
			case 3:
				if(!desc) {
					String description = helper.getDescription(line);
					parent = (Element) elements.pop();
					parent.setDescription(description);
					elements.push(parent);
					desc = true;
				}
				break;
			case 5:
				sequence = new Composition("(sekwencja)", "seq");
				elements.push(sequence);
				break;
			case 7:
				Element group = helper.createGroup(line, "group");
				parent = (Element) elements.pop();
				parent.add(group);
				elements.push(parent);
				break;
			case 8:
				choice = new Composition("(wybór)", "choice");
				elements.push(choice);
				break;
			}
			
			token = helper.checkIfClosed(line);
			switch(token) {
			case 8:
				registry.add(element);
				desc = false;
				break;
			case 13:
				sequence = (Element) elements.pop();
				parent = (Element) elements.pop();
				parent.add(sequence);
				elements.push(parent);
				break;
			case 15:
				choice = (Element) elements.pop();
				parent = (Element) elements.pop();
				parent.add(choice);
				elements.push(parent);
				break;
			}
		}
	}

//	private int getToken(String line) {
//		if(hasElementDefinition(line)) {
//			return 0;
//		} else if(hasElementReference(line)) {
//			return 1;
//		} else if(hasAnnotation(line)) {
//			return 2;
//		} else if(hasDocumentation(line)) {
//			return 3;
//		} else if(hasComplexType(line)) {
//			return 4;
//		} else if(hasSequence(line)) {
//			return 5;
//		} else if(hasGroupDefinition(line)) {
//			return 6;
//		} else if(hasGroupReference(line)) {
//			return 7;
//		} else if(hasChoice(line)) {
//			return 8;
//		}
//		
//		return -1;
//	}
//
//	private boolean hasElementDefinition(String line) {
//		return (line.contains("<xsd:element") && line.contains("name=")) ? true : false;
//	}
//
//	private boolean hasElementReference(String line) {
//		return (line.contains("<xsd:element") && line.contains("ref=")) ? true : false;
//	}
//
//	private boolean hasAnnotation(String line) {
//		return (line.contains("<xsd:annotation")) ? true : false;
//	}
//
//	private boolean hasDocumentation(String line) {
//		return (line.contains("<xsd:documentation")) ? true : false;
//	}
//
//	private boolean hasComplexType(String line) {
//		return (line.contains("<xsd:complexType")) ? true : false;
//	}
//
//	private boolean hasSequence(String line) {
//		return (line.contains("<xsd:sequence")) ? true : false;
//	}
//
//	private boolean hasGroupDefinition(String line) {
//		return (line.contains("<xsd:group") && line.contains("name=")) ? true : false;
//	}
//	
//	private boolean hasGroupReference(String line) {
//		return (line.contains("<xsd:group") && line.contains("ref=")) ? true : false;
//	}
//
//	private boolean hasChoice(String line) {
//		return (line.contains("<xsd:choice")) ? true : false;
//	}
//	
//	private String getAttribute(String name, String line) {
//		if(line.contains(name)) {
//			int begin = line.indexOf(name + "=\"") + (name + "=\"").length();
//			int end = line.indexOf("\"", line.indexOf(name + "=\"") + (name + "=\"").length());
//			return line.substring(begin, end);
//		}
//		
//		return null;
//	}
//	
//	private String getDescription(String line) {
//		return line.substring(line.indexOf(">") + 1, line.lastIndexOf("<"));
//	}
//	
//	private Element createComposition(String line, String type) {
//		String name = getAttribute("name", line);
//		Element e = new Composition(name, type);
//		return e;
//	}
//
//	private Element createReference(String line) {
//		String name = getAttribute("ref", line);
//		Element e = new SimpleElement(name);
//		return e;
//	}
//
//	private Element createGroup(String line, String type) {
//		String name = getAttribute("ref", line);
//		Element e = new Composition(name, type);
//		return e;
//	}
//
//	private int checkIfClosed(String line) {
//		if(closedElementDefinition(line)) {
//			return 8;
//		} else if(closedSimpleElement(line)) {
//			return 9;
//		} else if(closedAnnotation(line)) {
//			return 10;
//		} else if(closedDocumentation(line)) {
//			return 11;
//		} else if(closedComplexType(line)) {
//			return 12;
//		} else if(closedSequence(line)) {
//			return 13;
//		} else if(closedGroup(line)) {
//			return 14;
//		} else if(closedChoice(line)) {
//			return 15;
//		}
//		return -1;
//	}
//
//	private boolean closedElementDefinition(String line) {
//		return (line.contains("</xsd:element>")) ? true : false;
//	}
//
//	private boolean closedSimpleElement(String line) {
//		return (line.contains("xsd:element>") && line.contains("/>")) ? true : false;
//	}
//
//	private boolean closedAnnotation(String line) {
//		return (line.contains("</xsd:annotation>")) ? true : false;
//	}
//
//	private boolean closedDocumentation(String line) {
//		return (line.contains("</xsd:documentation>")) ? true : false;
//	}
//
//	private boolean closedComplexType(String line) {
//		return (line.contains("</xsd:complexType>>")) ? true : false;
//	}
//
//	private boolean closedSequence(String line) {
//		return (line.contains("</xsd:sequence>")) ? true : false;
//	}
//
//	private boolean closedGroup(String line) {
//		return (line.contains("</xsd:group>")) ? true : false;
//	}
//
//	private boolean closedChoice(String line) {
//		return (line.contains("</xsd:choice>")) ? true : false;
//	}
}
