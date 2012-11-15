package pl.wroc.pwr.student.acteditor.view;

import org.eclipse.swt.widgets.Display;

public class WindowBuilder {
	private Display display;
	
	public WindowBuilder(Display display) {
		this.display = display;
	}
	
	public void openWindow(int choice) {
		switch(choice) {
		case 0:
			new SubWindow(display, "ustawa");
			break;
		case 1:
			new SubWindow(display, "rozporzadzenie");
			break;
		case 2:
			new SubWindow(display, "uchwala");
			break;
		case 3:
			new SubWindow(display, "zarzadzenie");
			break;
		case 4:
			new SubWindow(display, "informacja");
			break;
		case 5:
			new SubWindow(display, "komunikat");
			break;
		case 6:
			new SubWindow(display, "decyzja");
			break;
		case 7:
			new SubWindow(display, "oswiadczenie");
			break;
		case 8:
			new SubWindow(display, "wyrok_TK");
			break;
		case 9:
			new SubWindow(display, "postanowienie");
			break;
		case 10:
			new SubWindow(display, "wyrok");
			break;
		case 11:
			new SubWindow(display, "porozumienie");
			break;
		case 12:
			new SubWindow(display, "ogloszenie");
			break;
		case 13:
			new SubWindow(display, "obwieszczenie");
			break;
		}
	}
}
