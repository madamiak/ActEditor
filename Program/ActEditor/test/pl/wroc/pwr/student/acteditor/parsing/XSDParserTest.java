package pl.wroc.pwr.student.acteditor.parsing;

import static org.junit.Assert.*;

import org.junit.Before;
import org.junit.Test;

import pl.wroc.pwr.student.acteditor.model.Schema;
import pl.wroc.pwr.student.acteditor.parsing.xsd.XSDParser;

public class XSDParserTest {
	XSDParser parser;
	
	@Before
	public void setUp() {
//		parser = new XSDParser(Schema.getSchemaContent());
	}

	@Test
	public void testGetAllElements() {
		String[] acts = {
				"ustawa",
				"rozporzadzenie",
				"uchwala",
				"zarzadzenie",
				"informacja",
				"komunikat",
				"decyzja",
				"oswiadczenie",
				"wyrok_TK",
				"postanowienie",
				"wyrok",
				"porozumienie",
				"ogloszenie",
				"obwieszczenie"
		};	
		String[][] results = new String[acts.length][];
		
		for(int i = 0; i < acts.length; i++) {
			results[i] = parser.getElementStructure(acts[i]);
			assertTrue(results[i][0].contains(acts[i]));
		}
	}
	
	@Test
	public void testGetElement() {
		String elementName = "rozporzadzenie";
		
		String[] result = parser.getElementStructure(elementName);
		
		assertNotNull(result);
		assertTrue(result[0].contains(elementName));
	}

	@Test
	public void testGetSimpleType() {
		String elementName = "data";
		
		String[] result = parser.getElementStructure(elementName);
		
		assertTrue(result.length == 0);
	}
	
	@Test
	public void testGetDescription() {
		String elementName = "rozporzadzenie";
		
		String result = parser.getDescription(elementName);
		
		assertTrue(result.contains("rozporz¹dzenie."));
	}
	
	@Test
	public void testGetNonExistedDescription() {
		String elementName = "asdsghd";
		
		String result = parser.getDescription(elementName);
		
		assertNull(result);
	}
}
