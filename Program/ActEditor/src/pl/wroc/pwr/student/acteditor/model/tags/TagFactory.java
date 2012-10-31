package pl.wroc.pwr.student.acteditor.model.tags;

import pl.wroc.pwr.student.acteditor.parsing.xsd.XSDHelper;

public class TagFactory {
	private XSDHelper helper;
	private Tag tag;
	
	public TagFactory() {
	}
	
	public String[] getTagsFromStructure(String[] structure) {
		String[] result = null;
		if(helper == null ) {
			helper = new XSDHelper(structure);
		}
		
		if(helper.hasElementInLine("ustawa", structure[0])) {
			tag = new Law();
		}

		System.out.println(tag.whoAmI());
		tag.getTags(structure);
		
		return result;
	}
}
