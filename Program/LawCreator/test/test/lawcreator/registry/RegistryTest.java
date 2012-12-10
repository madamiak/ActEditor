package test.lawcreator.registry;

import static org.junit.Assert.*;

import org.junit.Before;
import org.junit.Test;

import pl.wroc.pwr.student.lawcreator.registry.Registry;

public class RegistryTest {
	Registry registry;
	
	@Before
	public void setUp() {
		registry = Registry.getRegistry();
	}

	@Test
	public void gettingInstanceOfRegistryTest() {		
		assertEquals(Registry.getRegistry(), registry);
	}
	
	@Test
	public void addingAndGettingItemsTest() {
		registry.add("item");
		registry.add("another item");
		
		String item = (String) registry.getItems().get(0);
		
		assertEquals("item", item);
		assertEquals(2, registry.getItems().size());
	}

}
