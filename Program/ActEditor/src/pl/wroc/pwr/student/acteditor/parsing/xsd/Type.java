package pl.wroc.pwr.student.acteditor.parsing.xsd;

public class Type {
	private String name;
	private String restrictionPattern;
	
	public Type(String name, String restrictionPattern) {
		this.name = name;
		this.restrictionPattern = restrictionPattern;
	}
	
	public String toString() {
		return "type=\"" + name + "\" restriction=\"" + restrictionPattern +"\"";
	}
}
