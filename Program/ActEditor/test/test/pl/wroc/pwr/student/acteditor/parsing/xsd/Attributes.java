package test.pl.wroc.pwr.student.acteditor.parsing.xsd;

import static org.junit.Assert.*;

import org.junit.Ignore;
import org.junit.Test;

import pl.wroc.pwr.student.acteditor.model.AttributeRegistry;
import pl.wroc.pwr.student.acteditor.model.ElementRegistry;
import pl.wroc.pwr.student.acteditor.model.Schema;
import pl.wroc.pwr.student.acteditor.model.tags.Attribute;
import pl.wroc.pwr.student.acteditor.model.tags.Element;
import pl.wroc.pwr.student.acteditor.parsing.Parser;
import pl.wroc.pwr.student.acteditor.test.SchemaLoader;
import pl.wroc.pwr.student.acteditor.test.TokenTest;

public class Attributes {

	@Test
	public void test() {
		SchemaLoader loader = new SchemaLoader();
		loader.parseSAX();
	}
}
