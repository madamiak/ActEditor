package pl.wroc.pwr.student.acteditor.view;

import org.eclipse.swt.widgets.Display;
import org.eclipse.swt.widgets.Shell;

public abstract class Window {
	protected Display display;
	protected Shell shell;
	
	public Window() {
		initialize();
		open();
		dispose();
	}
	
	protected abstract void initialize();
	
	protected abstract void open();
	
	protected abstract void dispose();
}