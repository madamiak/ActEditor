package pl.wroc.pwr.student.acteditor.model.tags;

import org.junit.Before;
import org.junit.Test;

public class TagFactoryTest {
	TagFactory factory;
	
	@Before
	public void setUp() {
		factory = new TagFactory();
	}

	@Test
	public void testGetTagsFromStructure() {
		String[] structure = { 
				"<xsd:element name=\"ustawa\">\n",
				"<xsd:annotation>",
				"<xsd:documentation>Element g��wny dokumentu XML-owego reprezentuj�cego ustaw�.</xsd:documentation>", 
				"</xsd:annotation>\n" , 
				"<xsd:complexType>\n" , 
				"<xsd:sequence>\n" , 
				"<xsd:element minOccurs=\"1\" ref=\"metryczka\"/>\n" , 
				"<xsd:element minOccurs=\"0\" ref=\"trybunal\"/>\n" , 
				"<xsd:group maxOccurs=\"unbounded\" minOccurs=\"0\" ref=\"elem-komentarza\"/>\n" , 
				"<xsd:element minOccurs=\"0\" ref=\"preambula\"/>\n" , 
				"<xsd:choice>\n" , 
				"<xsd:element maxOccurs=\"unbounded\" ref=\"ksiega\"/>\n" , 
				"<xsd:sequence>\n" , 
				"<xsd:element maxOccurs=\"unbounded\" ref=\"tyt\"/>\n" , 
				"<xsd:element maxOccurs=\"unbounded\" minOccurs=\"0\" ref=\"czesc\"/>\n" , 
				"</xsd:sequence>\n" , 
				"<xsd:element maxOccurs=\"unbounded\" ref=\"dzial\"/>\n" , 
				"<xsd:element maxOccurs=\"unbounded\" ref=\"rozdzial\"/>\n" , 
				"<xsd:element maxOccurs=\"unbounded\" ref=\"artykul\"/>\n" , 
				"</xsd:choice>\n" , 
				"<xsd:element minOccurs=\"0\" ref=\"zalaczniki\"/>\n" , 
				"<xsd:element minOccurs=\"0\" ref=\"tresc-przypisow\"/>\n" , 
				"<xsd:element minOccurs=\"0\" ref=\"podpisy\"/>\n" , 
				"<xsd:element minOccurs=\"0\" ref=\"zatwierdzil\"/>\n" , 
				"<xsd:element minOccurs=\"0\" ref=\"zalacznik_bin\"/>\n" , 
				"</xsd:sequence>\n" , 
				"<xsd:attributeGroup ref=\"atr-wspolne\"/>\n" , 
				"</xsd:complexType>\n" , 
				"</xsd:element>\n"
		};
		
		factory.getTagsFromStructure(structure);
	}

}