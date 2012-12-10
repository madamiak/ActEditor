package pl.wroc.pwr.student.acteditor.parsing.xsd;

import java.util.Stack;

import pl.wroc.pwr.student.acteditor.model.AttributeRegistry;
import pl.wroc.pwr.student.acteditor.model.ElementRegistry;
import pl.wroc.pwr.student.acteditor.model.TypeRegistry;
import pl.wroc.pwr.student.acteditor.model.tags.Attribute;
import pl.wroc.pwr.student.acteditor.model.tags.AttributeGroup;
import pl.wroc.pwr.student.acteditor.model.tags.Composition;
import pl.wroc.pwr.student.acteditor.model.tags.Element;
import pl.wroc.pwr.student.acteditor.model.tags.SimpleAttribute;
import pl.wroc.pwr.student.acteditor.model.tags.SimpleElement;
import pl.wroc.pwr.student.acteditor.model.tags.SimpleType;

/**
 * Klasa pomocnicza do wczytywania dokumentu XML.
 * 
 * @author Mateusz
 *
 */
public class XSDHelper {
	
	public XSDHelper() {
	}

	public SimpleType createSimpleTypeDefinition(String line) {
		SimpleType simpleType = new SimpleType();
		String name = getAttribute("name", line);
		simpleType.setName(name);
		return simpleType;
	}

	public Attribute createGroupReference(String line) {
		Attribute attribute = new AttributeGroup();
		String name = getAttribute("ref", line);
		attribute.setName(name);
		return attribute;
	}

	public Attribute createGroupDefinition(String line) {
		Attribute attribute = new AttributeGroup();
		String name = getAttribute("name", line);
		attribute.setName(name);
		return attribute;
	}

	public Attribute createAttribute(String line) {
		String name = getAttribute("name", line);
		String defaultValue = getAttribute("default", line);
		String type = getAttribute("type", line);
		String use = getAttribute("use", line);
		Attribute attribute = new SimpleAttribute();
		attribute.setName(name);
		attribute.setType(type);
		if(!defaultValue.equals("")) {
			attribute.setDefault(defaultValue);
		}
		if(!use.equals("")) {
			attribute.setUse(use);
		}
		return attribute;
	}

	public Element createElementGroupReference(String line) {
		String name = getAttribute("ref", line);
		Element element = new Composition(name, "ref");
		return element;
	}

	public Element createElementGroupDefinition(String line) {
		String name = getAttribute("name", line);
		Element element = new Composition(name, "group");
		return element;
	}

	public Element createElementReference(String line) {
		String name = getAttribute("ref", line);
		String minOccurs = getAttribute("minOccurs", line);
		String maxOccurs = getAttribute("maxOccurs", line);
		Element element = new Composition(name, "ref");
		if(!minOccurs.equals("")) {
			element.setMinOccurs(minOccurs);
		}
		if(!maxOccurs.equals("")) {
			element.setMaxOccurs(maxOccurs);
		}
		return element;
	}

	public Object setDescription(Object object, String line) {
		String description = line.substring(line.indexOf(">")+1, line.lastIndexOf("<"));
		if(object instanceof Composition || object instanceof SimpleElement) {
			if(((Element)object).getDescription().length() == 0) {
				((Element)object).setDescription(description);
			}
		} else if(object instanceof Attribute || object instanceof AttributeGroup) {
			if(((Attribute)object).getDescription().length() == 0) {
				((Attribute)object).setDescription(description);
			}
		} else if(object instanceof SimpleType) {
			if(((SimpleType)object).getDescription().length() == 0) {
				((SimpleType)object).setDescription(description);
			}
		}
		return object;
	}

	public Element createElementDefinition(String line) {
		String name = getAttribute("name", line);
		Element result = new Composition(name, "all");
		return result;
	}

	public String getAttribute(String name, String line) {
		if(line.contains(name)) {
			int begin = line.indexOf(name + "=\"") + (name + "=\"").length();
			int end = line.indexOf("\"", line.indexOf(name + "=\"") + (name + "=\"").length());
			return line.substring(begin, end);
		}
		return "";
	}
}
