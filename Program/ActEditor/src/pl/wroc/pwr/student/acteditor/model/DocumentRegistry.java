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
		documents.add("Og�oszenie");
		documents.add("O�wiadczenie");
		documents.add("Porozumienie");
		documents.add("Postanowienie");
		documents.add("Rozporz�dzenie");
		documents.add("Uchwa�a");
		documents.add("Ustawa");
		documents.add("Wyrok");
		documents.add("Wyrok Trybuna�u Konstytucyjnego");
		documents.add("Zarz�dzenie");
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
