package pl.wroc.pwr.student.acteditor.parsing.xsd;

public class SimpleElement implements Element {
	private String name;
	private Type type;
	
	public SimpleElement(String name) {
		this.name = name;
	}
	
	public SimpleElement(String name, Type type) {
		this.name = name;
		this.type = type;
	}

	@Override
	public void add(Element element) {
		// unsupported
	}

	@Override
	public void remove(Element element) {
		// unsupported
	}

	@Override
	public Element get(int index) {
		// unsupported
		return null;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Type getType() {
		return type;
	}

	public void setType(Type type) {
		this.type = type;
	}

	@Override
	public void getElements() {
		String tmp = type == null ? "" : type.toString() + "\"";
		System.out.println("name=\"" + name + "\" " + tmp);
	}

}
