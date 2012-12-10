package test.lawcreator.xml;

import static org.junit.Assert.*;

import org.junit.Before;
import org.junit.Test;

import pl.wroc.pwr.student.lawcreator.xml.Attribute;
import pl.wroc.pwr.student.lawcreator.xml.AttributeImpl;
import pl.wroc.pwr.student.lawcreator.xml.Type;
import pl.wroc.pwr.student.lawcreator.xml.TypeImpl;

public class AttributeTest {
	Attribute attribute;

	@Before
	public void setUp() throws Exception {
		attribute = new AttributeImpl();
	}

	@Test
	public void gettingAndSettingFieldsTest() {
		String defaultValue = "default";
		String name = "name";
		String use = "use";
		Type type = new TypeImpl();
		type.setName(name);
		
		attribute.setDefault("default");
		attribute.setName(name);
		attribute.setType(type);
		attribute.setUse(use);
		
		assertEquals(defaultValue, attribute.getDefault());
		assertEquals(name, attribute.getName());
		assertEquals(type, attribute.getType());
		assertEquals(use, attribute.getUse());
	}
	
	@Test
	public void gettingAndSettingChildrenTest() {
		Attribute child = new AttributeImpl();
		child.setDefault("def");
		child.setName("child");
		Attribute child2 = new AttributeImpl();
		child2.setUse("use");
		Attribute child3 = new AttributeImpl();
		
		attribute.add(child);
		attribute.add(child2);
		attribute.add(child3);
		
		assertEquals(3, attribute.getAttributes().size());
		assertEquals("def", attribute.getAttribute("child").getDefault());
	}

}
