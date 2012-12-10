package test.lawcreator.utils;

import static org.junit.Assert.assertEquals;

import org.junit.Test;

import pl.wroc.pwr.student.lawcreator.utils.Mapper;

public class MapperTest {

	@Test
	public void mappingStringsTest() {
		assertEquals("uchwala", Mapper.map("Uchwa³a"));
	}

}
