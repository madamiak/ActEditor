package test.pl.wroc.pwr.student.acteditor.model.tags;

import static org.junit.Assert.*;

import org.junit.Before;
import org.junit.Test;

import pl.wroc.pwr.student.acteditor.model.tags.Composition;
import pl.wroc.pwr.student.acteditor.model.tags.Element;
import pl.wroc.pwr.student.acteditor.model.tags.SimpleElement;

public class CompositionTest {
	private Element element;
	
	@Before
	public void setUp() {
		element = new Composition("name", "type");
	}

	@Test
	public void creatingCompositionTest() {
		assertEquals("name", element.getName());
		assertEquals("type", element.getType());
	}
	
	@Test
	public void settingAndGettingTest() {
		element.setDescription("description");
		element.setMaxOccurs("2");
		element.setMinOccurs("0");
		element.setValue("value");
		
		assertEquals("description", element.getDescription());
		assertEquals("2", element.getMaxOccurs());
		assertEquals("0", element.getMinOccurs());
		assertEquals("value", element.getValue());
	}
	
	@Test
	public void addingItemsTest() {
		SimpleElement s = new SimpleElement("subElement");
		
		element.add(s);
		
		assertTrue(element.getElements().size() == 1);
		assertEquals(s, element.getElements().get(0));
	}

}
