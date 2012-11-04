package pl.wroc.pwr.student.acteditor.parsing.xsd;

import java.util.ArrayList;
import java.util.List;

import pl.wroc.pwr.student.acteditor.model.Schema;

public class Tester {
	static String text = Schema.getSchemaContent();
	static List<String> elements = new ArrayList<String>();
	static List<String> attributes = new ArrayList<String>();
	static List<String> attsGroup = new ArrayList<String>();
	static List<String> cTypes = new ArrayList<String>();

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		
		String[] lines = text.split("\n");
		
		for(String each : lines) {
			if(each.contains("<xsd:element name=")) {
				elements.add(each);
				continue;
			}
			
			if(each.contains("<xsd:attribute name=")) {
				attributes.add(each);
				continue;
			}
			
			if(each.contains("<xsd:attributeGroup name=")) {
				attsGroup.add(each);
				continue;
			}
			
			if(each.contains("<xsd:complexType name=")) {
				cTypes.add(each);
				continue;
			}
		}

		
		for(String s : elements) {
			System.out.println(s);
		}
		
		for(String s : attributes) {
			System.out.println(s);
		}
		
		for(String s : attsGroup) {
			System.out.println(s);
		}
		
		for(String s : cTypes) {
			System.out.println(s);
		}
	}

}
