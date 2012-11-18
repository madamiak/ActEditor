package pl.wroc.pwr.student.acteditor.view;

import org.eclipse.swt.SWT;
import org.eclipse.swt.events.SelectionAdapter;
import org.eclipse.swt.events.SelectionEvent;
import org.eclipse.swt.graphics.Color;
import org.eclipse.swt.graphics.Device;
import org.eclipse.swt.layout.FormAttachment;
import org.eclipse.swt.layout.FormData;
import org.eclipse.swt.layout.FormLayout;
import org.eclipse.swt.widgets.Button;
import org.eclipse.swt.widgets.Combo;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.swt.widgets.Display;
import org.eclipse.swt.widgets.Group;
import org.eclipse.swt.widgets.Shell;
import org.eclipse.swt.widgets.Text;

import pl.wroc.pwr.student.acteditor.model.DocumentRegistry;

public class MainWindow extends Window {
	
	public MainWindow(String name) {
		super(name);
	}

	/**
	 * @wbp.parser.entryPoint
	 */
	@Override
	protected void initialize(String name) {
		Text txtProgramZostaPrzygotowany;
//		final Display display = new Display();
//		Shell shell = new Shell(display);
		display = new Display();
		
		Device device = Display.getCurrent();
		Color white = new Color (device, 255, 255, 255);
		
		shell = new Shell(display);
		shell.setBackground(white);
		shell.setSize(782, 625);
		shell.setText("Witamy w Act Editor");
		shell.setLayout(new FormLayout());
		
		Composite composite = new Composite(shell, SWT.NONE);
		composite.setBackground(white);
		FormData fd_composite = new FormData();
		fd_composite.left = new FormAttachment(0, 10);
		fd_composite.top = new FormAttachment(0, 10);
		composite.setLayoutData(fd_composite);
		
		Group group = new Group(shell, SWT.NONE);
		group.setBackground(white);
		fd_composite.bottom = new FormAttachment(group, -281, SWT.BOTTOM);
		fd_composite.right = new FormAttachment(100, -316);
		group.setLayout(new FormLayout());
		FormData fd_group = new FormData();
		fd_group.right = new FormAttachment(100, -10);
		fd_group.left = new FormAttachment(composite, 6);
		
		txtProgramZostaPrzygotowany = new Text(composite, SWT.READ_ONLY | SWT.WRAP | SWT.MULTI);
		txtProgramZostaPrzygotowany.setBackground(white);
		txtProgramZostaPrzygotowany.setText("Program zosta\u0142 przygotowany na potrzeby projektu in\u017Cynierskiego. " +
				"Jest on odpowiednikiem edytora akt\u00F3w prawnych EDAP. Pozwala tworzy\u0107 dokumenty prawne zgodnie " +
				"z:\r\nROZPORZ\u0104DZENIEM MINISTRA SPRAW WEWN\u0118TRZNYCH I ADMINISTRACJI z dnia 25 kwietnia 2008 r. " +
				"w sprawie wymaga\u0144 technicznych dokument\u00F3w elektronicznych zawieraj\u0105cych akty normatywne i " +
				"inne akty prawne, elektronicznej formy dziennik\u00F3w urz\u0119dowych oraz \u015Brodk\u00F3w komunikacji " +
				"elektronicznej i informatycznych no\u015Bnik\u00F3w danych (Dz. U. 2008 Nr 75, poz. 451 z p\u00F3\u017An. " +
				"zm.).\r\n\r\nW celu skorzystania z edytora, nale\u017Cy wybra\u0107 jedn\u0105 z opcji po prawej stronie " +
				"ekranu. Ponadto w lewym dolnym rogu ekranu tytu\u0142owego edytora znajduje si\u0119 link prowadz\u0105cy " +
				"do instrukcji obs\u0142ugi serwisu.");
		txtProgramZostaPrzygotowany.setEditable(false);
		txtProgramZostaPrzygotowany.setBounds(10, 10, 420, 266);
		fd_group.top = new FormAttachment(0, 10);
		fd_group.bottom = new FormAttachment(100, -10);
		group.setLayoutData(fd_group);
		
		DocumentRegistry registry = DocumentRegistry.getRegistry();
		
		final Combo combo = new Combo(group, SWT.NONE);
		FormData fd_combo = new FormData();
		fd_combo.top = new FormAttachment(0, 51);
		fd_combo.left = new FormAttachment(0, 10);
		fd_combo.right = new FormAttachment(100, -10);		
		combo.setLayoutData(fd_combo);
		for(Object each : registry.getDocuments()) {
			combo.add(each.toString());
		}
		
		Button btnUtwrz = new Button(group, SWT.NONE);
		btnUtwrz.addSelectionListener(new SelectionAdapter() {
			@Override
			public void widgetSelected(SelectionEvent e) {
				WindowBuilder builder = new WindowBuilder(display);
				int choice = combo.getSelectionIndex();
				builder.openWindow(choice);
			}
		});
		FormData fd_btnUtwrz = new FormData();
		fd_btnUtwrz.left = new FormAttachment(0, 235);
		fd_btnUtwrz.top = new FormAttachment(combo, 6);
		btnUtwrz.setLayoutData(fd_btnUtwrz);
		btnUtwrz.setText("Utw\u00F3rz");
		
	}

	@Override
	protected void open() {
		shell.open();
	}

	@Override
	protected void dispose() {
		while (!shell.isDisposed()) {
			if (!display.readAndDispatch())
				display.sleep();
		}
		display.dispose();
	}

	public Display getMainDisplay() {
		return display;
	}
}
