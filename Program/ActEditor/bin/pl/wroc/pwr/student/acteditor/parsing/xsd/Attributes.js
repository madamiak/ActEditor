Clazz.declarePackage ("pl.wroc.pwr.student.acteditor.parsing.xsd");
Clazz.load (null, "pl.wroc.pwr.student.acteditor.parsing.xsd.Attributes", ["pl.wroc.pwr.student.acteditor.model.Schema", "pl.wroc.pwr.student.acteditor.test.TokenTest"], function () {
c$ = Clazz.declareType (pl.wroc.pwr.student.acteditor.parsing.xsd, "Attributes");
Clazz.defineMethod (c$, "testGetAttributes", 
function () {
var structure = ["<xsd:element name=\"ustawa\">\n", "<xsd:annotation>", "<xsd:documentation>Element główny dokumentu XML-owego reprezentującego ustawę.</xsd:documentation>", "</xsd:annotation>\n", "<xsd:complexType>\n", "<xsd:sequence>\n", "<xsd:element minOccurs=\"1\" ref=\"metryczka\"/>\n", "<xsd:element minOccurs=\"0\" ref=\"trybunal\"/>\n", "<xsd:group maxOccurs=\"unbounded\" minOccurs=\"0\" ref=\"elem-komentarza\"/>\n", "<xsd:element minOccurs=\"0\" ref=\"preambula\"/>\n", "<xsd:choice>\n", "<xsd:element maxOccurs=\"unbounded\" ref=\"ksiega\"/>\n", "<xsd:sequence>\n", "<xsd:element maxOccurs=\"unbounded\" ref=\"tyt\"/>\n", "<xsd:element maxOccurs=\"unbounded\" minOccurs=\"0\" ref=\"czesc\"/>\n", "</xsd:sequence>\n", "<xsd:element maxOccurs=\"unbounded\" ref=\"dzial\"/>\n", "<xsd:element maxOccurs=\"unbounded\" ref=\"rozdzial\"/>\n", "<xsd:element maxOccurs=\"unbounded\" ref=\"artykul\"/>\n", "</xsd:choice>\n", "<xsd:element minOccurs=\"0\" ref=\"zalaczniki\"/>\n", "<xsd:element minOccurs=\"0\" ref=\"tresc-przypisow\"/>\n", "<xsd:element minOccurs=\"0\" ref=\"podpisy\"/>\n", "<xsd:element minOccurs=\"0\" ref=\"zatwierdzil\"/>\n", "<xsd:element minOccurs=\"0\" ref=\"zalacznik_bin\"/>\n", "</xsd:sequence>\n", "<xsd:attributeGroup ref=\"atr-wspolne\"/>\n", "</xsd:complexType>\n", "</xsd:element>\n"];
});
Clazz.defineMethod (c$, "testTokenTest", 
function () {
var t =  new pl.wroc.pwr.student.acteditor.test.TokenTest ( new pl.wroc.pwr.student.acteditor.model.Schema ().getSchemaContent ().$plit ("\n"));
t.loadAttributesToRegistry ();
});
});
