package test.lawcreator;

import org.junit.runner.RunWith;
import org.junit.runners.Suite;

import test.lawcreator.registry.RegistryTest;
import test.lawcreator.utils.MapperTest;
import test.lawcreator.xml.AttributeTest;
import test.lawcreator.xml.ElementTest;
import test.lawcreator.xml.TypeTest;
import test.lawcreator.xml.nodes.NodeAttributeTest;
import test.lawcreator.xml.nodes.NodeTest;

@RunWith(Suite.class)
@Suite.SuiteClasses({ RegistryTest.class, MapperTest.class, AttributeTest.class, ElementTest.class, TypeTest.class, NodeAttributeTest.class, NodeTest.class} )
public class AllTests {}
