Clazz.declarePackage ("pl.wroc.pwr.student.acteditor.model.tags");
Clazz.load (null, "pl.wroc.pwr.student.acteditor.model.tags.TagFactoryTest", ["pl.wroc.pwr.student.acteditor.model.tags.TagFactory"], function () {
c$ = Clazz.decorateAsClass (function () {
this.factory = null;
Clazz.instantialize (this, arguments);
}, pl.wroc.pwr.student.acteditor.model.tags, "TagFactoryTest");
Clazz.defineMethod (c$, "setUp", 
function () {
this.factory =  new pl.wroc.pwr.student.acteditor.model.tags.TagFactory ();
});
Clazz.defineMethod (c$, "testGetTagsFromStructure", 
function () {
var structure = ["<xsd:element name=\"ustawa\">\n", "<xsd:annotation>", "<xsd:documentation>Element główny dokumentu XML-owego reprezentującego ustawę.</xsd:documentation>", "</xsd:annotation>\n", "<xsd:complexType>\n", "<xsd:sequence>\n", "<xsd:element minOccurs=\"1\" ref=\"metryczka\"/>\n", "<xsd:element minOccurs=\"0\" ref=\"trybunal\"/>\n", "<xsd:group maxOccurs=\"unbounded\" minOccurs=\"0\" ref=\"elem-komentarza\"/>\n", "<xsd:element minOccurs=\"0\" ref=\"preambula\"/>\n", "<xsd:choice>\n", "<xsd:element maxOccurs=\"unbounded\" ref=\"ksiega\"/>\n", "<xsd:sequence>\n", "<xsd:element maxOccurs=\"unbounded\" ref=\"tyt\"/>\n", "<xsd:element maxOccurs=\"unbounded\" minOccurs=\"0\" ref=\"czesc\"/>\n", "</xsd:sequence>\n", "<xsd:element maxOccurs=\"unbounded\" ref=\"dzial\"/>\n", "<xsd:element maxOccurs=\"unbounded\" ref=\"rozdzial\"/>\n", "<xsd:element maxOccurs=\"unbounded\" ref=\"artykul\"/>\n", "</xsd:choice>\n", "<xsd:element minOccurs=\"0\" ref=\"zalaczniki\"/>\n", "<xsd:element minOccurs=\"0\" ref=\"tresc-przypisow\"/>\n", "<xsd:element minOccurs=\"0\" ref=\"podpisy\"/>\n", "<xsd:element minOccurs=\"0\" ref=\"zatwierdzil\"/>\n", "<xsd:element minOccurs=\"0\" ref=\"zalacznik_bin\"/>\n", "</xsd:sequence>\n", "<xsd:attributeGroup ref=\"atr-wspolne\"/>\n", "</xsd:complexType>\n", "</xsd:element>\n"];
this.factory.getTagsFromStructure (structure);
});
});
