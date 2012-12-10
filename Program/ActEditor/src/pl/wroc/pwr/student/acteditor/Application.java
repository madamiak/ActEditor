package pl.wroc.pwr.student.acteditor;

import pl.wroc.pwr.student.acteditor.view.MainWindow;
import pl.wroc.pwr.student.acteditor.view.Window;

/**
 * Klasa startowa aplikacji.
 * 
 * Aplikacja ActEditor pozwala na generowanie dokument�w prawnych, kt�re sa
 * wymienione w Schemacie XML skonstruowanym przez MSWiA. Zapewnia odpowiednia
 * walidacje poprawnosci dokumentu.
 * 
 * @author Mateusz
 * 
 */
public final class Application {
	private static Window main;

	/**
	 * Wyswietla g��wne okno aplikacji.
	 * 
	 * @param args
	 */
	public static void main(String[] args) {
		Application.run();
	}

	private static void run() {
		main = new MainWindow(null);
	}

	/**
	 * Zwraca referencje do glownego okna aplikacji.
	 * 
	 * @return Glowne okno aplikacji
	 */
	public static Window getWindow() {
		if (main != null) {
			return main;
		}
		return null;
	}

	/**
	 * Zamyka aplikacje.
	 */
	public void stop() {
		main.dispose();
	}
}
