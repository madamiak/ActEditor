package pl.wroc.pwr.student.acteditor.view;

import org.eclipse.swt.widgets.Display;
import org.eclipse.swt.widgets.Shell;
import org.eclipse.swt.widgets.Text;
import org.eclipse.swt.SWT;
import org.eclipse.swt.layout.FormLayout;
import org.eclipse.swt.layout.FormData;
import org.eclipse.swt.layout.FormAttachment;

public class Decision extends Window {
	private Text text;
	public Decision(Display display) {
		this.display = display;
	}

	/**
	 * @wbp.parser.entryPoint
	 */
	@Override
	protected void initialize() {
		shell = new Shell(display);
//		Display display = new Display();
//		Shell shell = new Shell(display);
		shell.setSize(793, 657);
		shell.setText("Decision");
		shell.setMaximized(true);
		shell.setLayout(new FormLayout());
		
		text = new Text(shell, SWT.BORDER);
		FormData fd_text = new FormData();
		fd_text.top = new FormAttachment(0, 194);
		fd_text.right = new FormAttachment(100, -10);
		fd_text.left = new FormAttachment(100, -638);
		fd_text.bottom = new FormAttachment(100, -10);
		text.setLayoutData(fd_text);
	}

	@Override
	protected void open() {
		shell.open();
	}

	@Override
	protected void dispose() {
	}
}