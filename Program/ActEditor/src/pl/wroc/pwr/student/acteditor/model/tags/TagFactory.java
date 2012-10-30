package pl.wroc.pwr.student.acteditor.model.tags;

import pl.wroc.pwr.student.acteditor.model.Schema;
import pl.wroc.pwr.student.acteditor.parsing.xsd.XSDParser;

public class TagFactory {
	private XSDParser parser;
	private Tag tag;
	
	public TagFactory() {
		parser = new XSDParser(Schema.getSchemaContent());
	}
	
	public String[] getTagsFromStructure(String[] structure) {
		String[] result = null;
		
		if(parser.hasElementInLine("ustawa", structure[0])) {
			tag = new Law();
		}

		System.out.println(tag.whoAmI());
		tag.getTags(structure);
		
		return result;
	}
}
