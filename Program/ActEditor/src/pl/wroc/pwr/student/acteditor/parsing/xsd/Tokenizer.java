package pl.wroc.pwr.student.acteditor.parsing.xsd;

public class Tokenizer {
	public String getEvent(String line) {
		if (containsDocumentation(line)) {
			return "documentation";
		} else if (containsElementDefinition(line)) {
			return "element-def";
		} else if (containsOneLineElementDefinition(line)) {
			return "one-line-element-def";
		} else if (containsClosingElementDefinition(line)) {
			return "close-element-def";
		} else if (containsElementReferenceWithoutClosingSign(line)) {
			return "element-ref-without-closing";
		} else if (containsOneLineElementReference(line)) {
			return "one-line-element-ref";
		} else if (containsSequence(line)) {
			return "sequence";
		} else if (containsClosingSequence(line)) {
			return "closing-sequence";
		} else if (containsChoice(line)) {
			return "choice";
		} else if (containsClosingChoice(line)) {
			return "closing-choice";
		} else if (containsGroupDefinition(line)) {
			return "element-group-def";
		} else if (containstGroupReference(line)) {
			return "element-group-ref";
		} else if (containsClosingGroupDefinition(line)) {
			return "closing-element-group-def";
		} else if (containstComplexTypeDefinition(line)) {
			return "complex-type-def";
		} else if (containsClosingComplexTypeDefinition(line)) {
			return "closing-complex-type-def";
		} else if (containsComplexContent(line)) {
			return "complex-content";
		} else if (containsClosingComplexContent(line)) {
			return "closing-complex-content";
		} else if (containsAttributeDefinitionWithoutClosingSign(line)) {
			return "attribute-def-without-closing";
		} else if (containsOneLineAttributeDefinition(line)) {
			return "one-line-attribute-def";
		} else if (containsClosingAttributeDefinition(line)) {
			return "closing-attribute-def";
		} else if (containsAttributeGroupDefinition(line)) {
			return "attribute-group-def";
		} else if (containsAttributeGroupReference(line)) {
			return "attribute-group-ref";
		} else if (containsClosingAttributeGroup(line)) {
			return "closing-attribute-group";
		} else if (containsSimpleTypeDefinition(line)) {
			return "simple-type-def";
		} else if (containsSimpleTypeBeginning(line)) {
			return "simple-type-beg";
		} else if (containsClosingSimpleType(line)) {
			return "closing-simple-type";
		} else if (containsExtension(line)) {
			return "extension";
		} else if (containsClosingExtension(line)) {
			return "closing-extension";
		} else if (containsPattern(line)) {
			return "pattern";
		} else if (containsEnumeration(line)) {
			return "enumeration";
		}
		return "ignore";
	}

	private boolean containsEnumeration(String line) {
		return line.contains("<xsd:enumeration");
	}

	private boolean containsPattern(String line) {
		return line.contains("<xsd:pattern");
	}

	private boolean containsClosingExtension(String line) {
		return line.contains("</xsd:extension");
	}

	private boolean containsExtension(String line) {
		return line.contains("<xsd:extension");
	}

	private boolean containsClosingSimpleType(String line) {
		return line.contains("</xsd:simpleType>");
	}

	private boolean containsSimpleTypeBeginning(String line) {
		return line.contains("<xsd:simpleType>");
	}

	private boolean containsSimpleTypeDefinition(String line) {
		return (line.contains("<xsd:simpleType") && line.contains("name="));
	}

	private boolean containsClosingAttributeGroup(String line) {
		return (line.contains("</xsd:attributeGroup>"));
	}

	private boolean containsAttributeGroupReference(String line) {
		return (line.contains("attributeGroup") && line.contains("ref="));
	}

	private boolean containsAttributeGroupDefinition(String line) {
		return (line.contains("attributeGroup") && line.contains("name="));
	}

	private boolean containsOneLineAttributeDefinition(String line) {
		return (line.contains("attribute ") && line.contains("name=") && line.contains("/>"));
	}

	private boolean containsClosingAttributeDefinition(String line) {
		return line.contains("</xsd:attribute>");
	}

	private boolean containsAttributeDefinitionWithoutClosingSign(String line) {
		return (line.contains("attribute ") && line.contains("name=") && !line.contains("/>"));
	}

	private boolean containsClosingComplexContent(String line) {
		return line.contains("</xsd:complexContent>");
	}

	private boolean containsComplexContent(String line) {
		return line.contains("complexContent");
	}

	private boolean containsClosingComplexTypeDefinition(String line) {
		return (line.contains("</xsd:complexType>"));
	}

	private boolean containstComplexTypeDefinition(String line) {
		return (line.contains("complexType") && line.contains("name="));
	}

	private boolean containstGroupReference(String line) {
		return (line.contains("group") && !line.contains("attributeGroup") && line.contains("ref="));
	}

	private boolean containsClosingGroupDefinition(String line) {
		return line.contains("</xsd:group>");
	}

	private boolean containsGroupDefinition(String line) {
		return (line.contains("group") && !line.contains("attributeGroup") && line.contains("name="));
	}

	private boolean containsClosingChoice(String line) {
		return line.contains("</xsd:choice>");
	}

	private boolean containsChoice(String line) {
		return line.contains("<xsd:choice");
	}

	private boolean containsClosingSequence(String line) {
		return line.contains("</xsd:sequence>");
	}

	private boolean containsSequence(String line) {
		return line.contains("<xsd:sequence");
	}

	private boolean containsOneLineElementDefinition(String line) {
		return (line.contains("element") && line.contains("name=") && line.contains("/>"));
	}

	private boolean containsOneLineElementReference(String line) {
		return (line.contains("element") && line.contains("ref=") && line.contains("/>"));
	}

	private boolean containsElementReferenceWithoutClosingSign(String line) {
		return (line.contains("element") && line.contains("ref=") && !line.contains("/>"));
	}

	private boolean containsClosingElementDefinition(String line) {
		return line.contains("</xsd:element>");
	}

	private boolean containsElementDefinition(String line) {
		return (line.contains("element") && line.contains("name=") && !line.contains("/>"));
	}

	private boolean containsDocumentation(String line) {
		return line.contains("documentation");
	}
}
