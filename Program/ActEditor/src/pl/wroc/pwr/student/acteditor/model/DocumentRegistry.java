package pl.wroc.pwr.student.acteditor.model;

import java.util.ArrayList;
import java.util.List;

/**
 * Zapewnia dostep do rejestru dokumentow.
 * 
 * Rejestr zawiera nazwy dostepnych dokumentow XML.
 * 
 * @author Mateusz
 *
 */
public class DocumentRegistry {
	private static DocumentRegistry registry;
	private List documents;
	
	private DocumentRegistry() {
		documents = new ArrayList();
		fillList();
	}
	
	private void fillList() {
		documents.add("Decyzja");
		documents.add("Informacja");
		documents.add("Komunikat");
		documents.add("Obwieszczenie");
		documents.add("Og³oszenie");
		documents.add("Oœwiadczenie");
		documents.add("Porozumienie");
		documents.add("Postanowienie");
		documents.add("Rozporz¹dzenie");
		documents.add("Uchwa³a");
		documents.add("Ustawa");
		documents.add("Wyrok");
		documents.add("Wyrok Trybuna³u Konstytucyjnego");
		documents.add("Zarz¹dzenie");
	}

	public static DocumentRegistry getRegistry() {
		if(registry == null) {
			registry = new DocumentRegistry();
		}
		return registry;
	}
	
	public Object get(int index) {
		return documents.get(index);
	}
	
	public List getDocuments() {
		return documents;
	}
}
