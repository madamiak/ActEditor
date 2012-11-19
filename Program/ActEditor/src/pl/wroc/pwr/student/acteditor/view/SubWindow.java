package pl.wroc.pwr.student.acteditor.view;

import org.eclipse.swt.SWT;
import org.eclipse.swt.graphics.Color;
import org.eclipse.swt.graphics.Device;
import org.eclipse.swt.graphics.Point;
import org.eclipse.swt.layout.GridData;
import org.eclipse.swt.layout.GridLayout;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.swt.widgets.Display;
import org.eclipse.swt.widgets.Event;
import org.eclipse.swt.widgets.Label;
import org.eclipse.swt.widgets.Listener;
import org.eclipse.swt.widgets.Shell;
import org.eclipse.swt.widgets.Text;
import org.eclipse.swt.widgets.Tree;
import org.eclipse.swt.widgets.TreeItem;

import pl.wroc.pwr.student.acteditor.model.ElementRegistry;
import pl.wroc.pwr.student.acteditor.model.Schema;
import pl.wroc.pwr.student.acteditor.model.tags.Element;
import pl.wroc.pwr.student.acteditor.parsing.xsd.XSDParser;

public class SubWindow extends Window {
	private Text text;
	
	public SubWindow(Display display, String name) {
		super(name);
		this.display = display;
	}

	/**
	 * @wbp.parser.entryPoint
	 */
	@Override
	protected void initialize(String name) {
		Device device = Display.getCurrent ();
		Color white = new Color (device, 255, 255, 255);
		shell = new Shell(display);
//		Display display = new Display();
//		Shell shell = new Shell(display);
		shell.setSize(561, 384);
		shell.setBackground(white);
		shell.setText(name);
		
		Schema schema = new Schema();
		String[] data = schema.getSchemaContent().split("\n");
		XSDParser parser = new XSDParser(data);
		parser.loadData();
		
		final ElementRegistry registry = ElementRegistry.getRegistry();
		Element e = registry.get(name);
		shell.setLayout(new GridLayout(3, false));

		final Tree tree = new Tree(shell, SWT.NONE);
		GridData gd_tree = new GridData(SWT.LEFT, SWT.FILL, false, false, 1, 1);
		gd_tree.heightHint = 242;
		gd_tree.widthHint = 186;
		tree.setLayoutData(gd_tree);
		fillTree(tree, registry, e, 0);
		
		Label label = new Label(shell, SWT.SEPARATOR | SWT.VERTICAL);
		label.setBackground(white);
		GridData gd_label = new GridData(SWT.FILL, SWT.FILL, false, false, 1, 2);
		gd_label.heightHint = 336;
		gd_label.widthHint = 14;
		label.setLayoutData(gd_label);
		
		Composite composite = new Composite(shell, SWT.NONE);
		composite.setBackground(white);
		GridData gd_composite = new GridData(SWT.FILL, SWT.FILL, true, true, 1, 2);
		gd_composite.widthHint = 436;
		gd_composite.heightHint = 336;
		composite.setLayoutData(gd_composite);
		
		text = new Text(shell, SWT.READ_ONLY | SWT.WRAP);
		GridData gd_text = new GridData(SWT.FILL, SWT.BOTTOM, false, false, 1, 1);
		gd_text.widthHint = 115;
		gd_text.heightHint = 67;
		text.setLayoutData(gd_text);
		text.setBackground(white);
		text.setEditable(false);
		
		tree.addListener(SWT.MouseDown, new Listener() {
      public void handleEvent(Event event) {
        Point point = new Point(event.x, event.y);
        TreeItem item = tree.getItem(point);
        if (item != null) {
        	try {
        		text.setText(registry.get(item.getText()).getDescription());
        	} catch (NullPointerException ex) {
        		text.setText("");
        	}
        }
      }
    });
	}

	private void fillTree(Object tree, ElementRegistry registry, Element element, int level) {
		if(level > 10) {
			return;
		}
		level++;
		
		TreeItem ti = null;
		if (tree instanceof Tree) {
			ti = new TreeItem((Tree) tree, SWT.NONE);
		} else if (tree instanceof TreeItem) {
			ti = new TreeItem((TreeItem) tree, SWT.NONE);
		}
		ti.setText(((Element)element).getName());
		
		if(element.getElements() == null) {
			if(registry.get(element.getName()).getElements() == null) {
				return;
			}
			
			for(Object e : registry.get(element.getName()).getElements()) {
				fillTree(ti, registry, (Element)e, level);
			}
			return;
		}
		
		for(Object e : element.getElements()) {
			fillTree(ti, registry, (Element)e, level);
		}
	}

	@Override
	protected void open() {
		shell.pack();
		shell.open();
	}

	@Override
	protected void dispose() {
	}
}
