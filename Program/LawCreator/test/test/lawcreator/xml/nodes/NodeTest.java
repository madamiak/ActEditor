package test.lawcreator.xml.nodes;

import static org.junit.Assert.*;

import org.junit.Before;
import org.junit.Test;

import pl.wroc.pwr.student.lawcreator.xml.nodes.Attribute;
import pl.wroc.pwr.student.lawcreator.xml.nodes.Node;

public class NodeTest {
	Node node;

	@Before
	public void setUp() throws Exception {
		node = new Node();
	}

	@Test
	public void gettingAndSettingFieldsTest() {
		String name = "name";
		String value = "value";
		
		node.setName(name);
		node.setValue(value);
		
		assertEquals(name, node.getName());
		assertEquals(value, node.getValue());
	}
	
	@Test
	public void addingAttributesTest() {
		Attribute att1 = new Attribute();
		att1.setName("att1");
		att1.setValue("v1");
		Attribute att2 = new Attribute();
		att2.setName("att2");
		att2.setValue("v2");
		
		node.addAttribute(att1);
		node.addAttribute(att2);
		
		assertEquals(2, node.getAttributes().size());
		assertEquals(att1, node.getAttributeByName("att1"));
		assertEquals(att2, node.getAttributeByName("att2"));
	}
	
	@Test
	public void addingNodesTest() {
		Node child1 = new Node();
		child1.setName("ch1");
		child1.setValue("v1");
		Node child2 = new Node();
		child2.setName("ch2");
		child2.setValue("v2");
		
		node.addNote(child1);
		node.addNote(child2);
		
		assertEquals(2, node.getNodes().size());
		assertEquals(child1, node.getChildByName("ch1"));
		assertEquals(child2, node.getChildByName("ch2"));
	}
	
	@Test
	public void gettingXMLTest() {
		Attribute att1 = new Attribute();
		att1.setName("att1");
		att1.setValue("v1");
		Attribute att2 = new Attribute();
		att2.setName("att2");
		att2.setValue("v2");
		Attribute att3 = new Attribute();
		att3.setName("att3");
		att3.setValue("v3");
		Node child1 = new Node();
		child1.setName("ch1");
		child1.setValue("v1");
		child1.addAttribute(att1);
		Node child2 = new Node();
		child2.setName("ch2");
		child2.setValue("v2");
		child2.addAttribute(att2);
		node.addAttribute(att3);
		node.addNote(child1);
		node.addNote(child2);
		
		String xml = node.toXML();

		assertTrue(xml.contains("<ch1 att1=\"v1\">\nv1\n</ch1>\n<ch2" +
					"att2=\"v2\">\nv2\n</ch2>"));
	}

}
