package pl.wroc.pwr.student.acteditor.view;

import org.eclipse.swt.SWT;
import org.eclipse.swt.graphics.Color;
import org.eclipse.swt.graphics.Device;
import org.eclipse.swt.graphics.Point;
import org.eclipse.swt.layout.FormAttachment;
import org.eclipse.swt.layout.FormData;
import org.eclipse.swt.layout.FormLayout;
import org.eclipse.swt.layout.GridLayout;
import org.eclipse.swt.widgets.Display;
import org.eclipse.swt.widgets.Event;
import org.eclipse.swt.widgets.Group;
import org.eclipse.swt.widgets.Listener;
import org.eclipse.swt.widgets.Shell;
import org.eclipse.swt.widgets.Text;
import org.eclipse.swt.widgets.Tree;
import org.eclipse.swt.widgets.TreeItem;

import pl.wroc.pwr.student.acteditor.model.ElementRegistry;
import pl.wroc.pwr.student.acteditor.model.Schema;
import pl.wroc.pwr.student.acteditor.model.tags.Element;
import pl.wroc.pwr.student.acteditor.parsing.xsd.XSDParser;
import pl.wroc.pwr.student.acteditor.test.TokenTest;

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
		shell.setBackground(white);
		shell.setSize(793, 657);
		shell.setText(name);
		shell.setLayout(new FormLayout());
		
		Schema schema = new Schema();
		String[] data = schema.getSchemaContent().split("\n");
		XSDParser parser = new XSDParser(data);
		parser.loadData();
		
		final ElementRegistry registry = ElementRegistry.getRegistry();
		Element e = registry.get(name);

		final Tree tree = new Tree(shell, SWT.BORDER);
		fillTree(tree, registry, e, 0);
		
		FormData fd_tree = new FormData();
		fd_tree.bottom = new FormAttachment(0, 443);
		fd_tree.right = new FormAttachment(0, 276);
		fd_tree.top = new FormAttachment(0, 10);
		fd_tree.left = new FormAttachment(0, 10);
		tree.setLayoutData(fd_tree);
		
		text = new Text(shell, SWT.READ_ONLY | SWT.WRAP);
		text.setBackground(white);
		text.setEditable(false);
		FormData fd_text = new FormData();
		fd_text.top = new FormAttachment(tree, 6);
		fd_text.right = new FormAttachment(tree, 0, SWT.RIGHT);
		fd_text.bottom = new FormAttachment(tree, 73, SWT.BOTTOM);
		fd_text.left = new FormAttachment(0, 10);
		text.setLayoutData(fd_text);
		
		Group group = new Group(shell, SWT.NONE);
		group.setBackground(white);
		group.setLayout(new GridLayout(2, false));
		FormData fd_group = new FormData();
		fd_group.top = new FormAttachment(0, 10);
		fd_group.right = new FormAttachment(tree, 491, SWT.RIGHT);
		fd_group.left = new FormAttachment(tree, 6);
		fd_group.bottom = new FormAttachment(0, 443);
		group.setLayoutData(fd_group);
		
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
		
//		System.out.print("\n");
//		
//		for(int i = 0; i < level; i++) {
//			System.out.print(" ");
//		}
//		
//		System.out.print(element.getName());
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
