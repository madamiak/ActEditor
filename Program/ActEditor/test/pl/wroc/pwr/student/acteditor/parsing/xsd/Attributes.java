package pl.wroc.pwr.student.acteditor.parsing.xsd;

import static org.junit.Assert.*;

import org.junit.Test;

public class Attributes {

	@Test
	public void testGetAttributes() {
		String[] structure = { 
				"<xsd:element name=\"ustawa\">\n",
				"<xsd:annotation>",
				"<xsd:documentation>Element g³ówny dokumentu XML-owego reprezentuj¹cego ustawê.</xsd:documentation>", 
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
		
		Element composite = new CompositeElement("rozporzadzenie");
		Element attrs = new CompositeElement("annotation");
		attrs.add(new SimpleElement("documentation"));
		composite.add(attrs);
		attrs = new CompositeElement();
		attrs.add(new SimpleElement("metryczka"));
		attrs.add(new SimpleElement("elem-komentarza"));
		attrs.add(new SimpleElement("preambula"));
		Element ats = new CompositeElement();
		ats.add(new SimpleElement("tyt"));
		ats.add(new SimpleElement("dzial"));
		ats.add(new SimpleElement("rozdzial"));
		ats.add(new SimpleElement("paragraf"));
		attrs.add(ats);
		attrs.add(new SimpleElement("zalaczniki"));
		attrs.add(new SimpleElement("tresc-przypisow"));
		attrs.add(new SimpleElement("podpisy"));
		attrs.add(new SimpleElement("zatwierdzil"));
		attrs.add(new SimpleElement("zalacznik_bin"));
		composite.add(attrs);
		
		composite.getElements();
	}

}
