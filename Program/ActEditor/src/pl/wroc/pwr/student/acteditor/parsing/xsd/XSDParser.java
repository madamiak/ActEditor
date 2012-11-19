package pl.wroc.pwr.student.acteditor.parsing.xsd;

import java.util.Stack;

import pl.wroc.pwr.student.acteditor.model.ElementRegistry;
import pl.wroc.pwr.student.acteditor.model.tags.Composition;
import pl.wroc.pwr.student.acteditor.model.tags.Element;
import pl.wroc.pwr.student.acteditor.parsing.Parser;

public class XSDParser implements Parser {
	private XSDHelper helper;
	private String[] lines;
	private ElementRegistry registry;
	
	public XSDParser(String[] lines) {
		this.lines = lines;
		this.helper = new XSDHelper();
		registry = ElementRegistry.getRegistry();
	}

	@Override
	public void loadData() {
		int token = -1; 
		boolean desc = false;
		Stack elements = new Stack();
		Element element = null;
		Element sequence = null;
		Element choice = null;
		Element parent = null;
		
		for(String line  : lines) {
			token = helper.getToken(line);
			
			switch(token) {
			case 0:
				element = helper.createComposition(line, "all");
				elements.push(element);
				break;
			case 1:
				Element subElement = helper.createReference(line);
				parent = (Element) elements.pop();
				parent.add(subElement);
				elements.push(parent);
			case 3:
				if(!desc) {
					String description = helper.getDescription(line);
					parent = (Element) elements.pop();
					parent.setDescription(description);
					elements.push(parent);
					desc = true;
				}
				break;
			case 5:
				String seqDesc = "Wszystkie tagi do wype³nienia.";
				sequence = new Composition("...", "seq");
				sequence.setDescription(seqDesc );
				elements.push(sequence);
				break;
			case 7:
				Element group = helper.createGroup(line, "group");
				parent = (Element) elements.pop();
				parent.add(group);
				elements.push(parent);
				break;
			case 8:
				String choiceDesc = "Wybrany tag do wype³nienia.";
				choice = new Composition("...", "choice");
				choice.setDescription(choiceDesc );
				elements.push(choice);
				break;
			}
			
			token = helper.checkIfClosed(line);
			switch(token) {
			case 8:
				registry.add(element);
				desc = false;
				break;
			case 13:
				sequence = (Element) elements.pop();
				parent = (Element) elements.pop();
				parent.add(sequence);
				elements.push(parent);
				break;
			case 15:
				choice = (Element) elements.pop();
				parent = (Element) elements.pop();
				parent.add(choice);
				elements.push(parent);
				break;
			}
		}
	}
}
