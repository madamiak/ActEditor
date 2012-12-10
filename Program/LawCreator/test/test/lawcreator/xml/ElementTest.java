package test.lawcreator.xml;

import static org.junit.Assert.*;

import org.junit.Before;
import org.junit.Test;

import pl.wroc.pwr.student.lawcreator.xml.Attribute;
import pl.wroc.pwr.student.lawcreator.xml.AttributeImpl;
import pl.wroc.pwr.student.lawcreator.xml.Element;
import pl.wroc.pwr.student.lawcreator.xml.ElementImpl;

public class ElementTest {
	Element element;

	@Before
	public void setUp() throws Exception {
		element = new ElementImpl();
	}

	@Test
	public void gettingAndSettingFieldsTest() {
		String desc = "desc";
		String name = "name";
		String type = "type";
		
		element.setDescription(desc);
	}
	
	@Test
	public void gettingAndSettingChildrenTest() {
		Element child = new ElementImpl();
		child.setName("name");
		
		element.add(child);
		
		assertEquals(1, element.getElements().size());
		assertEquals("name", ((Element) element.getElements().get(0)).getName());
	}
	
	public void gettingAndSettingAttributesTest() {
		Attribute attribute = new AttributeImpl();
		attribute.setName("name");
		
		element.addAttribute(attribute);
		
		assertEquals(1, element.getAttributes());
		assertEquals(attribute, element.getAttribute("name"));
	}

}
