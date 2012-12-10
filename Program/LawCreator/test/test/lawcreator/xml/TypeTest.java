package test.lawcreator.xml;

import static org.junit.Assert.*;

import org.junit.Before;
import org.junit.Test;

import pl.wroc.pwr.student.lawcreator.xml.Type;
import pl.wroc.pwr.student.lawcreator.xml.TypeImpl;

public class TypeTest {
	Type type;

	@Before
	public void setUp() throws Exception {
		type = new TypeImpl();
	}

	@Test
	public void gettingAndSettingFieldsTest() {
		String name = "name";
		String pattern = "pattern";
		
		type.setName(name);
		type.setPattern(pattern);
		
		assertEquals(name, type.getName());
		assertEquals(pattern, type.getPattern());
	}
	
	@Test
	public void addingEnumerationsTest() {
		String enum1 = "enum1";
		String enum2 = "enum2";
		
		type.add(enum1);
		type.add(enum2);
		
		assertEquals(2, type.getEnumerations().size());
		assertEquals(enum1, type.getEnumerations().get(0));
		assertEquals(enum2, type.getEnumerations().get(1));
	}

}
