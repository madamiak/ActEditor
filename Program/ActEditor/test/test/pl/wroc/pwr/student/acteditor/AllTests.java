package test.pl.wroc.pwr.student.acteditor;

import org.junit.runner.RunWith;
import org.junit.runners.Suite;

import test.pl.wroc.pwr.student.acteditor.model.RegistryTest;
import test.pl.wroc.pwr.student.acteditor.model.SchemaTest;
import test.pl.wroc.pwr.student.acteditor.model.tags.AttributeGroupTest;
import test.pl.wroc.pwr.student.acteditor.model.tags.CompositionTest;
import test.pl.wroc.pwr.student.acteditor.model.tags.SimpleAttributeTest;
import test.pl.wroc.pwr.student.acteditor.model.tags.SimpleTypeTest;
// by FYICenter.com
import test.pl.wroc.pwr.student.acteditor.model.tags.SimpleElementTest;

// specify a runner class: Suite.class
@RunWith(Suite.class)

// specify an array of test classes
@Suite.SuiteClasses({
  RegistryTest.class,
  SchemaTest.class,
  AttributeGroupTest.class,
  CompositionTest.class,
  SimpleAttributeTest.class,
  SimpleElementTest.class,
  SimpleTypeTest.class
  })

// the actual class is empty
public class AllTests {
}
