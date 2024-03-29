package pl.wroc.pwr.student.acteditor.view;

import org.eclipse.swt.widgets.Display;

import pl.wroc.pwr.student.acteditor.model.DocumentRegistry;
import pl.wroc.pwr.student.acteditor.util.Utils;

/**
 * Zapewnia otwarcie właściwego okna edycji dokumentu.
 * 
 * @author Mateusz
 * 
 */
public class WindowBuilder {
	private Display display;
	private DocumentRegistry registry;

	/**
	 * Tworzy obiekt typu WindowBuilder.
	 * 
	 * @param display
	 *          Obecny watek wyswietlajacy
	 */
	public WindowBuilder(Display display) {
		this.display = display;
		this.registry = DocumentRegistry.getRegistry();
	}

	/**
	 * Otwiera wskazane okno.
	 * 
	 * @param choice
	 *          Identyfikator okna.
	 */
	public void openWindow(int choice) {
		new SubWindow(display, Utils.map((String) registry.get(choice)));
	}
}
