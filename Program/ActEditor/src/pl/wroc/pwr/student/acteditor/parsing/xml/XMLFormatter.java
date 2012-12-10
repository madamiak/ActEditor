package pl.wroc.pwr.student.acteditor.parsing.xml;

import java.util.ArrayList;
import java.util.List;

import pl.wroc.pwr.student.acteditor.parsing.Formatter;

/**
 * Zapewnia formatowanie danych do dokumentu XML.
 * 
 * @author Mateusz
 *
 */
public class XMLFormatter implements Formatter {
	private List tags = new ArrayList();

	@Override
	public void add(String tag) {
		tags.add(tag);
	}

	@Override
	public String generate() {
		return null;
	}
}
