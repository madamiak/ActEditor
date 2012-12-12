Clazz.declarePackage ("pl.wroc.pwr.student.acteditor.parsing.xsd");
c$ = Clazz.declareType (pl.wroc.pwr.student.acteditor.parsing.xsd, "Tokenizer");
Clazz.defineMethod (c$, "getEvent", 
function (line) {
if (this.containsDocumentation (line)) {
return "documentation";
} else if (this.containsElementDefinition (line)) {
return "element-def";
} else if (this.containsOneLineElementDefinition (line)) {
return "one-line-element-def";
} else if (this.containsClosingElementDefinition (line)) {
return "close-element-def";
} else if (this.containsElementReferenceWithoutClosingSign (line)) {
return "element-ref-without-closing";
} else if (this.containsOneLineElementReference (line)) {
return "one-line-element-ref";
} else if (this.containsSequence (line)) {
return "sequence";
} else if (this.containsClosingSequence (line)) {
return "closing-sequence";
} else if (this.containsChoice (line)) {
return "choice";
} else if (this.containsClosingChoice (line)) {
return "closing-choice";
} else if (this.containsGroupDefinition (line)) {
return "element-group-def";
} else if (this.containstGroupReference (line)) {
return "element-group-ref";
} else if (this.containsClosingGroupDefinition (line)) {
return "closing-element-group-def";
} else if (this.containstComplexTypeDefinition (line)) {
return "complex-type-def";
} else if (this.containsClosingComplexTypeDefinition (line)) {
return "closing-complex-type-def";
} else if (this.containsComplexContent (line)) {
return "complex-content";
} else if (this.containsClosingComplexContent (line)) {
return "closing-complex-content";
} else if (this.containsAttributeDefinitionWithoutClosingSign (line)) {
return "attribute-def-without-closing";
} else if (this.containsOneLineAttributeDefinition (line)) {
return "one-line-attribute-def";
} else if (this.containsClosingAttributeDefinition (line)) {
return "closing-attribute-def";
} else if (this.containsAttributeGroupDefinition (line)) {
return "attribute-group-def";
} else if (this.containsAttributeGroupReference (line)) {
return "attribute-group-ref";
} else if (this.containsClosingAttributeGroup (line)) {
return "closing-attribute-group";
} else if (this.containsSimpleTypeDefinition (line)) {
return "simple-type-def";
} else if (this.containsSimpleTypeBeginning (line)) {
return "simple-type-beg";
} else if (this.containsClosingSimpleType (line)) {
return "closing-simple-type";
} else if (this.containsExtension (line)) {
return "extension";
} else if (this.containsClosingExtension (line)) {
return "closing-extension";
} else if (this.containsPattern (line)) {
return "pattern";
} else if (this.containsEnumeration (line)) {
return "enumeration";
}return "ignore";
}, "~S");
Clazz.defineMethod (c$, "containsEnumeration", 
($fz = function (line) {
return line.contains ("<xsd:enumeration");
}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "containsPattern", 
($fz = function (line) {
return line.contains ("<xsd:pattern");
}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "containsClosingExtension", 
($fz = function (line) {
return line.contains ("</xsd:extension");
}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "containsExtension", 
($fz = function (line) {
return line.contains ("<xsd:extension");
}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "containsClosingSimpleType", 
($fz = function (line) {
return line.contains ("</xsd:simpleType>");
}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "containsSimpleTypeBeginning", 
($fz = function (line) {
return line.contains ("<xsd:simpleType>");
}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "containsSimpleTypeDefinition", 
($fz = function (line) {
return (line.contains ("<xsd:simpleType") && line.contains ("name="));
}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "containsClosingAttributeGroup", 
($fz = function (line) {
return (line.contains ("</xsd:attributeGroup>"));
}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "containsAttributeGroupReference", 
($fz = function (line) {
return (line.contains ("attributeGroup") && line.contains ("ref="));
}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "containsAttributeGroupDefinition", 
($fz = function (line) {
return (line.contains ("attributeGroup") && line.contains ("name="));
}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "containsOneLineAttributeDefinition", 
($fz = function (line) {
return (line.contains ("attribute ") && line.contains ("name=") && line.contains ("/>"));
}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "containsClosingAttributeDefinition", 
($fz = function (line) {
return line.contains ("</xsd:attribute>");
}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "containsAttributeDefinitionWithoutClosingSign", 
($fz = function (line) {
return (line.contains ("attribute ") && line.contains ("name=") && !line.contains ("/>"));
}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "containsClosingComplexContent", 
($fz = function (line) {
return line.contains ("</xsd:complexContent>");
}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "containsComplexContent", 
($fz = function (line) {
return line.contains ("complexContent");
}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "containsClosingComplexTypeDefinition", 
($fz = function (line) {
return (line.contains ("</xsd:complexType>"));
}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "containstComplexTypeDefinition", 
($fz = function (line) {
return (line.contains ("complexType") && line.contains ("name="));
}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "containstGroupReference", 
($fz = function (line) {
return (line.contains ("group") && !line.contains ("attributeGroup") && line.contains ("ref="));
}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "containsClosingGroupDefinition", 
($fz = function (line) {
return line.contains ("</xsd:group>");
}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "containsGroupDefinition", 
($fz = function (line) {
return (line.contains ("group") && !line.contains ("attributeGroup") && line.contains ("name="));
}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "containsClosingChoice", 
($fz = function (line) {
return line.contains ("</xsd:choice>");
}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "containsChoice", 
($fz = function (line) {
return line.contains ("<xsd:choice");
}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "containsClosingSequence", 
($fz = function (line) {
return line.contains ("</xsd:sequence>");
}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "containsSequence", 
($fz = function (line) {
return line.contains ("<xsd:sequence");
}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "containsOneLineElementDefinition", 
($fz = function (line) {
return (line.contains ("element") && line.contains ("name=") && line.contains ("/>"));
}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "containsOneLineElementReference", 
($fz = function (line) {
return (line.contains ("element") && line.contains ("ref=") && line.contains ("/>"));
}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "containsElementReferenceWithoutClosingSign", 
($fz = function (line) {
return (line.contains ("element") && line.contains ("ref=") && !line.contains ("/>"));
}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "containsClosingElementDefinition", 
($fz = function (line) {
return line.contains ("</xsd:element>");
}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "containsElementDefinition", 
($fz = function (line) {
return (line.contains ("element") && line.contains ("name=") && !line.contains ("/>"));
}, $fz.isPrivate = true, $fz), "~S");
Clazz.defineMethod (c$, "containsDocumentation", 
($fz = function (line) {
return line.contains ("documentation");
}, $fz.isPrivate = true, $fz), "~S");
