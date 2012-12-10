package test.lawcreator.xml.nodes;

import static org.junit.Assert.*;

import org.junit.Before;
import org.junit.Test;

import pl.wroc.pwr.student.lawcreator.xml.nodes.Attribute;

public class NodeAttributeTest {
	Attribute attribute;

	@Before
	public void setUp() throws Exception {
		attribute = new Attribute();
	}

	@Test
	public void gettingAndSettingFieldsTest() {
		String name = "name";
		String value = "value";
		
		attribute.setName(name);
		attribute.setValue(value);
		
		assertEquals(name, attribute.getName());
		assertEquals(value, attribute.getValue());
	}
	
	@Test
	public void gettingXMLTest() {
		String name = "name";
		String value = "value";
		
		attribute.setName(name);
		attribute.setValue(value);
		
		assertEquals(name + "=\"" + value + "\"", attribute.toXML());
	}

}
