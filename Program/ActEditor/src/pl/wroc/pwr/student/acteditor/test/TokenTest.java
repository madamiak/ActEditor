package pl.wroc.pwr.student.acteditor.test;

import java.util.ArrayList;
import java.util.EmptyStackException;
import java.util.List;
import java.util.Stack;

import pl.wroc.pwr.student.acteditor.model.AttributeRegistry;
import pl.wroc.pwr.student.acteditor.model.ElementRegistry;
import pl.wroc.pwr.student.acteditor.model.tags.Attribute;
import pl.wroc.pwr.student.acteditor.model.tags.AttributeGroup;
import pl.wroc.pwr.student.acteditor.model.tags.Composition;
import pl.wroc.pwr.student.acteditor.model.tags.Element;
import pl.wroc.pwr.student.acteditor.model.tags.SimpleAttribute;
import pl.wroc.pwr.student.acteditor.model.tags.SimpleElement;
import pl.wroc.pwr.student.acteditor.model.tags.SimpleType;

public class TokenTest {
	private String[] lines;
	private ElementRegistry registry;
	private AttributeRegistry aRegistry;
	
	public TokenTest(String[] lines) {
		this.lines = lines;
		registry = ElementRegistry.getRegistry();
		aRegistry = AttributeRegistry.getRegistry();
	}
	
	public void loadAttributesToRegistry() {
		int token = -1;
		Stack attributes = new Stack();
		Attribute attribute = null;
		Attribute parent = null;
		
		for(String line : lines) {
			if(line.contains("atr-wizualizacyjne")) {
				System.out.println();
			}
			token = getAToken(line);
			if(token != -1) {
				System.out.println(token+line);
				System.out.println(attributes);
			}
			switch(token) {
			case 0:
				attribute = createAttributeGroupDefinition(line);
				attributes.push(attribute);
				break;
			case 2:
				attribute = createAttributeDefinition(line);
				if(attributes.isEmpty()) {
					attributes.push(attribute);
				} else {
					parent = (Attribute) attributes.pop();
					parent.add(attribute);
					attributes.push(parent);
					attributes.push(attribute);
				}
				break;
			case 3:
				attribute = createSimpleTypeDefinition(line);
				attributes.push(attribute);
				break;
			}

			if(token != -1) {
				System.out.println(attributes);
			}
			token = getAClosedToken(line);
			if(token != -1) {
				System.out.println(token+line);
				System.out.println(attributes);
			}
			switch(token) {
			case 0:
				attribute = (Attribute) attributes.pop();
				aRegistry.add(attribute);
				break;
			case 1:
				attribute = (Attribute) attributes.pop();
				aRegistry.add(attribute);
				break;
			case 3:
				attribute = (Attribute) attributes.pop();
				if(attributes.isEmpty()) {
					aRegistry.add(attribute);
				}
				break;
			case 4:
				attribute = (Attribute) attributes.pop();
				aRegistry.add(attribute);
				break;
			}

			if(token != -1) {
				System.out.println(attributes);
			}
		}
		System.out.println(aRegistry.getAttributes());
	}

	private Attribute createAttributeDefinition(String line) {
		Attribute result = new SimpleAttribute();
		String name = getAttribute("name", line);
		String type = getAttribute("type", line);
		String use = getAttribute("use", line);
		result.setName(name);
		result.setType(type);
		result.setUse(use);
		return result;
	}

	private Attribute createSimpleTypeDefinition(String line) {
		Attribute result = new SimpleAttribute();
		String name = getAttribute("name", line);
		result.setName(name);
		return result;
	}

	private Attribute createAttributeGroupDefinition(String line) {
		String name = getAttribute("name", line);
		Attribute result = new AttributeGroup();
		result.setName(name);
		return result;
	}

	private int getAClosedToken(String line) {
		if(closedAttributeGroupDefinition(line)) {
			return 0;
		} else if(closedSimpleType(line)) {
			return 8;
		} else if(closedRestriction(line)) {
			return 2;
		} else if(closedAttributeDefinition(line)) {
			return 3;
		} else if (closedSimpleAttribute(line)) {
			return 4;
		}
		return -1;
	}
	
	private boolean closedSimpleAttribute(String line) {
		return (line.contains("attribute") && !line.contains("attributeGroup") && line.contains("/>")) ? true : false;
	}

	private boolean closedAttributeGroupDefinition(String line) {
		return line.contains("</xsd:attributeGroup>") ? true : false;
	}

	private boolean closedSimpleType(String line) {
		return line.contains("</xsd:simpleType>") ? true : false;
	}

	private boolean closedRestriction(String line) {
		return line.contains("</xsd:restriction>") ? true : false;
	}

	private boolean closedAttributeDefinition(String line) {
		return (line.contains("</xsd:attribute>")) ? true : false;
	}

	private int getAToken(String line) {
		if(hasAttributeGroupDefinition(line)) {
			return 0;
		} else if(hasRestriction(line)) {
			return 1;
		} else if(hasAttributeDefinition(line)) {
			return 2;
		} else if(hasAttributeGroupReference(line)) {
			return 3;
		}
 		return -1;
	}

	private boolean hasAttributeGroupReference(String line) {
		return (line.contains("attributeGroup") && line.contains("ref=")) ? true : false;
	}

	private boolean hasSimpleTypeDefinition(String line) {
		return (line.contains("simpleType") && line.contains("name=")) ? true : false;
	}

	private boolean hasAttributeDefinition(String line) {
		return (line.contains("attribute") && !line.contains("attributeGroup") && line.contains("name=")) ? true : false;
	}

	private boolean hasRestriction(String line) {
		return (line.contains("restriction") && line.contains("base=")) ? true : false;
	}

	private boolean hasAttributeGroupDefinition(String line) {
		return (line.contains("attributeGroup") && line.contains("name=")) ? true : false;
	}
	
	
	
	
	
	
	
	
	

	

	////////////////////////////////////ELEMENTS///////////////////////////////////////
	public void loadElementsToRegistry() {
		int token = -1; 
		boolean desc = false;
		Stack elements = new Stack();
		Element element = null;
		Element sequence = null;
		Element choice = null;
		Element parent = null;
		
		for(String line  : lines) {
			token = getToken(line);
			
			switch(token) {
			case 0:
				element = createComposition(line, "all");
				elements.push(element);
				break;
			case 1:
				Element subElement = createReference(line);
				parent = (Element) elements.pop();
				parent.add(subElement);
				elements.push(parent);
			case 3:
				if(!desc) {
					String description = getDescription(line);
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
				Element group = createGroup(line, "group");
				parent = (Element) elements.pop();
				parent.add(group);
				elements.push(parent);
				break;
			case 8:
				choice = new Composition("(wyb�r)", "choice");
				elements.push(choice);
				break;
			}
			
			token = checkIfClosed(line);
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

	private int getToken(String line) {
		if(hasElementDefinition(line)) {
			return 0;
		} else if(hasElementReference(line)) {
			return 1;
		} else if(hasAnnotation(line)) {
			return 2;
		} else if(hasDocumentation(line)) {
			return 3;
		} else if(hasComplexType(line)) {
			return 4;
		} else if(hasSequence(line)) {
			return 5;
		} else if(hasGroupDefinition(line)) {
			return 6;
		} else if(hasGroupReference(line)) {
			return 7;
		} else if(hasChoice(line)) {
			return 8;
		}
		
		return -1;
	}

	private boolean hasElementDefinition(String line) {
		return (line.contains("<xsd:element") && line.contains("name=")) ? true : false;
	}

	private boolean hasElementReference(String line) {
		return (line.contains("<xsd:element") && line.contains("ref=")) ? true : false;
	}

	private boolean hasAnnotation(String line) {
		return (line.contains("<xsd:annotation")) ? true : false;
	}

	private boolean hasDocumentation(String line) {
		return (line.contains("<xsd:documentation")) ? true : false;
	}

	private boolean hasComplexType(String line) {
		return (line.contains("<xsd:complexType")) ? true : false;
	}

	private boolean hasSequence(String line) {
		return (line.contains("<xsd:sequence")) ? true : false;
	}

	private boolean hasGroupDefinition(String line) {
		return (line.contains("<xsd:group") && line.contains("name=")) ? true : false;
	}
	
	private boolean hasGroupReference(String line) {
		return (line.contains("<xsd:group") && line.contains("ref=")) ? true : false;
	}

	private boolean hasChoice(String line) {
		return (line.contains("<xsd:choice")) ? true : false;
	}
	
	private String getAttribute(String name, String line) {
		if(line.contains(name)) {
			int begin = line.indexOf(name + "=\"") + (name + "=\"").length();
			int end = line.indexOf("\"", line.indexOf(name + "=\"") + (name + "=\"").length());
			return line.substring(begin, end);
		}
		return null;
	}
	
	private String getDescription(String line) {
		return line.substring(line.indexOf(">") + 1, line.lastIndexOf("<"));
	}
	
	private Element createComposition(String line, String type) {
		String name = getAttribute("name", line);
		Element e = new Composition(name, type);
		return e;
	}

	private Element createReference(String line) {
		String name = getAttribute("ref", line);
		Element e = new SimpleElement(name);
		return e;
	}

	private Element createGroup(String line, String type) {
		String name = getAttribute("ref", line);
		Element e = new Composition(name, type);
		return e;
	}

	private int checkIfClosed(String line) {
		if(closedElementDefinition(line)) {
			return 8;
		} else if(closedSimpleElement(line)) {
			return 9;
		} else if(closedAnnotation(line)) {
			return 10;
		} else if(closedDocumentation(line)) {
			return 11;
		} else if(closedComplexType(line)) {
			return 12;
		} else if(closedSequence(line)) {
			return 13;
		} else if(closedGroup(line)) {
			return 14;
		} else if(closedChoice(line)) {
			return 15;
		}
		return -1;
	}

	private boolean closedElementDefinition(String line) {
		return (line.contains("</xsd:element>")) ? true : false;
	}

	private boolean closedSimpleElement(String line) {
		return (line.contains("xsd:element>") && line.contains("/>")) ? true : false;
	}

	private boolean closedAnnotation(String line) {
		return (line.contains("</xsd:annotation>")) ? true : false;
	}

	private boolean closedDocumentation(String line) {
		return (line.contains("</xsd:documentation>")) ? true : false;
	}

	private boolean closedComplexType(String line) {
		return (line.contains("</xsd:complexType>>")) ? true : false;
	}

	private boolean closedSequence(String line) {
		return (line.contains("</xsd:sequence>")) ? true : false;
	}

	private boolean closedGroup(String line) {
		return (line.contains("</xsd:group>")) ? true : false;
	}

	private boolean closedChoice(String line) {
		return (line.contains("</xsd:choice>")) ? true : false;
	}
}
