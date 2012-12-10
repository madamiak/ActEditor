/*
 * LawCreator jest narzedziem, usprawniajacym pisanie aktów 
 * prawnych zgodnie ze schemtem narzuconym przez MSWiA. System 
 * umozliwia uzytkownikowi tworzenie jednego z dokumentow 
 * umieszczonych w pliku schema.xsd, jakim jest uchwala. Serwis 
 * umozliwia wygenerowanie dokumentu XML.
 * 
 * Copyright (C) 2012 Adamiak Mateusz
 * Niniejszy program jest wolnym oprogramowaniem; mo¿esz go 
 * rozprowadzaæ dalej i/lub modyfikowaæ na warunkach Powszechnej
 * Licencji Publicznej GNU, wydanej przez Fundacjê Wolnego
 * Oprogramowania - wed³ug wersji 2-giej tej Licencji lub którejœ
 * z póŸniejszych wersji.
 * 
 * Niniejszy program rozpowszechniany jest z nadziej¹, i¿ bêdzie on
 * u¿yteczny - jednak BEZ JAKIEJKOLWIEK GWARANCJI, nawet domyœlnej
 * gwarancji PRZYDATNOŒCI HANDLOWEJ albo PRZYDATNOŒCI DO OKREŒLONYCH
 * ZASTOSOWAÑ. W celu uzyskania bli¿szych informacji - Powszechna
 * Licencja Publiczna GNU.
 * 
 * Z pewnoœci¹ wraz z niniejszym programem otrzyma³eœ te¿ egzemplarz
 * Powszechnej Licencji Publicznej GNU (GNU General Public License);
 * Jeœli nie - napisz do Free Software Foundation, Inc., 675 Mass Ave,
 * Cambridge, MA 02139, USA.
 */
package pl.wroc.pwr.student.lawcreator.view;

import org.eclipse.swt.SWT;
import org.eclipse.swt.events.SelectionAdapter;
import org.eclipse.swt.events.SelectionEvent;
import org.eclipse.swt.layout.GridLayout;
import org.eclipse.swt.widgets.Button;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.swt.widgets.Display;
import org.eclipse.swt.widgets.Label;
import org.eclipse.swt.widgets.MessageBox;
import org.eclipse.swt.widgets.Shell;
import org.eclipse.swt.widgets.Text;
import org.eclipse.swt.widgets.Tree;
import org.eclipse.swt.layout.GridData;
import org.eclipse.swt.graphics.Point;

/**
 * Wyœwietla g³ówne okno aplikacji.
 * 
 * @author Mateusz Adamiak
 * 
 */
public class MainWindow {
	private Presenter presenter;
	private Display display;
	private Shell shell;
	private Text textDescription;
	private Text textFormDescription;

	/**
	 * Tworzy obiekt typu MainWindow.
	 * 
	 * Konstruktor inicjalizuje komponenty i otwiera glowne okno aplikacji.
	 */
	public MainWindow() {
		initializeComponents();
		open();
		dispose();
	}

	/**
	 * Inicjalizuje komponentu, ktore znajda sie na makiecie interfejsu
	 * uzytkownika.
	 * 
	 * Zawarta jest tutaj obsluga zdarzen, wywolanych przez uzytkownika.
	 */
	public void initializeComponents() {
		presenter = new Presenter();

		display = new Display();
		shell = new Shell(display, SWT.CLOSE | SWT.TITLE | SWT.MIN);
		shell.setMinimumSize(new Point(740, 455));

		shell.setText("Law Creator");
		shell.setLayout(new GridLayout(6, false));

		final Tree tagTree = new Tree(shell, SWT.BORDER);
		GridData gd_tagTree = new GridData(SWT.LEFT, SWT.FILL, false, false, 1, 2);
		gd_tagTree.heightHint = 275;
		gd_tagTree.widthHint = 156;
		tagTree.setLayoutData(gd_tagTree);

		Label label = new Label(shell, SWT.SEPARATOR | SWT.VERTICAL);
		GridData gd_label = new GridData(SWT.LEFT, SWT.FILL, false, false, 1, 3);
		gd_label.heightHint = 405;
		label.setLayoutData(gd_label);

		final Composite composite = new Composite(shell, SWT.NONE);
		GridData gd_composite = new GridData(SWT.FILL, SWT.CENTER, false, false, 2, 1);
		gd_composite.heightHint = 312;
		gd_composite.widthHint = 349;
		composite.setLayoutData(gd_composite);
		composite.setLayout(new GridLayout(2, false));

		Label label_1 = new Label(shell, SWT.SEPARATOR | SWT.VERTICAL);
		label_1.setLayoutData(new GridData(SWT.LEFT, SWT.FILL, false, false, 1, 3));

		final Tree outputTree = new Tree(shell, SWT.BORDER);
		outputTree.addSelectionListener(new SelectionAdapter() {
			@Override
			public void widgetSelected(SelectionEvent e) {
				try {
					presenter.retrieveData(outputTree, composite);
				} catch (BlankFormException e1) {
					MessageBox box = new MessageBox(shell);
					box.setMessage("Element nie posiada atrybutów do wype³nienia lub nie jest wspierany przez LawCreator");
					box.open();
				}
			}
		});
		GridData gd_outputTree = new GridData(SWT.LEFT, SWT.FILL, false, false, 1, 2);
		gd_outputTree.heightHint = 275;
		gd_outputTree.widthHint = 134;
		outputTree.setLayoutData(gd_outputTree);

		presenter.fillTrees(tagTree, outputTree);

		textFormDescription = new Text(shell, SWT.READ_ONLY | SWT.WRAP);
		GridData gd_textFormDescription = new GridData(SWT.FILL, SWT.FILL, false, false, 1, 2);
		gd_textFormDescription.widthHint = 260;
		textFormDescription.setLayoutData(gd_textFormDescription);
		new Label(shell, SWT.NONE);

		textDescription = new Text(shell, SWT.READ_ONLY | SWT.WRAP);
		GridData gd_textDescription = new GridData(SWT.FILL, SWT.FILL, false, false, 1, 1);
		gd_textDescription.widthHint = 178;
		gd_textDescription.heightHint = 40;
		textDescription.setLayoutData(gd_textDescription);

		Button btnZapisz = new Button(shell, SWT.NONE);
		GridData gd_btnZapisz = new GridData(SWT.FILL, SWT.BOTTOM, false, false, 1, 1);
		gd_btnZapisz.heightHint = 25;
		btnZapisz.setLayoutData(gd_btnZapisz);
		btnZapisz.addSelectionListener(new SelectionAdapter() {
			@Override
			public void widgetSelected(SelectionEvent e) {
				try {
					presenter.fillOutput(outputTree, tagTree, composite);
				} catch (ValueFormatException e1) {
					MessageBox box = new MessageBox(shell);
					box.setMessage(e1.getMessage());
					box.open();
				}
			}
		});
		btnZapisz.setText("Zapisz");

		Button btnGenerujXml = new Button(shell, SWT.NONE);
		btnGenerujXml.addSelectionListener(new SelectionAdapter() {
			@Override
			public void widgetSelected(SelectionEvent e) {
				final Shell dialog = new Shell(shell, SWT.APPLICATION_MODAL | SWT.DIALOG_TRIM);
				dialog.setText("Uchwa³a XML");
				dialog.setSize(600, 350);

				Text xmlContent = new Text(dialog, SWT.None | SWT.READ_ONLY | SWT.MULTI | SWT.V_SCROLL | SWT.WRAP);
				xmlContent.setSize(500, 300);
				xmlContent.setText(presenter.getXML());
				dialog.open();
			}
		});
		btnGenerujXml.setLayoutData(new GridData(SWT.RIGHT, SWT.BOTTOM, false, false, 1, 1));
		btnGenerujXml.setText("Generuj XML");

		tagTree.addSelectionListener(new SelectionAdapter() {
			@Override
			public void widgetSelected(SelectionEvent e) {
				String name = tagTree.getSelection()[0].getText();
				presenter.setDescription(name, textDescription);
				try {
					presenter.updateForm(tagTree, composite);
				} catch (BlankFormException e1) {
					MessageBox box = new MessageBox(shell);
					box.setMessage("Element nie posiada atrybutów do wype³nienia lub nie jest wspierany przez LawCreator");
					box.open();
				}
			}
		});
	}

	/**
	 * Otwiera okno aplikacji.
	 */
	public void open() {
		shell.pack();
		shell.open();
	}

	/**
	 * Zwalnia zasoby.
	 */
	public void dispose() {
		while (!shell.isDisposed()) {
			if (!display.readAndDispatch())
				display.sleep();
		}
		display.dispose();
	}
}
