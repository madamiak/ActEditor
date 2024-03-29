package pl.wroc.pwr.student.acteditor.view;

import org.eclipse.swt.widgets.Display;
import org.eclipse.swt.widgets.Shell;

/**
 * Zapewnia wyświetlenie abstrakcyjnego okna.
 * 
 * @author Mateusz
 * 
 */
public abstract class Window {
	protected Display display;
	protected Shell shell;
	protected String name;

	/**
	 * Tworzy obiekt Window.
	 * 
	 * @param name
	 *          Nazwa okna
	 */
	public Window(String name) {
		initialize(name);
		open();
		dispose();
	}

	/**
	 * Inicjalizuje komponenty do wyświetlenia.
	 * 
	 * @param name
	 *          Nazwa okna.
	 */
	protected abstract void initialize(String name);

	/**
	 * Otwiera okno.
	 */
	protected abstract void open();

	/**
	 * Zamyka okno.
	 */
	public abstract void dispose();
}
