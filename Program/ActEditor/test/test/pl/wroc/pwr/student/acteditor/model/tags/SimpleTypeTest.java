package test.pl.wroc.pwr.student.acteditor.model.tags;

import static org.junit.Assert.*;

import org.junit.Before;
import org.junit.Test;

import pl.wroc.pwr.student.acteditor.model.tags.SimpleType;

public class SimpleTypeTest {
	private SimpleType simpleType;
	
	@Before
	public void setUp() throws Exception {
		simpleType = new SimpleType();
	}

	@Test
	public void settingAndGettingTest() {
		simpleType.setDescription("description");
		simpleType.setName("name");
		simpleType.setPattern("pattern");
		
		assertEquals("description", simpleType.getDescription());
		assertEquals("name", simpleType.getName());
		assertEquals("pattern", simpleType.getPattern());
	}
	
	@Test
	public void addingEnumerationsTest() {
		simpleType.add("enum");
		
		assertTrue(simpleType.getEnumeratinos().size() == 1);
		assertEquals("enum", simpleType.getEnumeratinos().get(0));
	}

}
