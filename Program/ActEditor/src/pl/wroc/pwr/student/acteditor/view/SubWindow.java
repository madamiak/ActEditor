package pl.wroc.pwr.student.acteditor.view;

import org.eclipse.swt.SWT;

import org.eclipse.swt.layout.FormAttachment;
import org.eclipse.swt.layout.FormData;
import org.eclipse.swt.layout.FormLayout;
import org.eclipse.swt.widgets.Display;
import org.eclipse.swt.widgets.Group;
import org.eclipse.swt.widgets.Shell;
import org.eclipse.swt.widgets.Tree;
import org.eclipse.swt.widgets.TreeItem;

import pl.wroc.pwr.student.acteditor.model.Schema;
import pl.wroc.pwr.student.acteditor.parsing.Parser;
import pl.wroc.pwr.student.acteditor.parsing.xsd.Element;
import pl.wroc.pwr.student.acteditor.parsing.xsd.XSDParser;

public class SubWindow extends Window {
	
	public SubWindow(Display display, String name) {
		super(name);
		this.display = display;
	}

	/**
	 * @wbp.parser.entryPoint
	 */
	@Override
	protected void initialize(String name) {
		shell = new Shell(display);
//		Display display = new Display();
//		Shell shell = new Shell(display);
		shell.setSize(793, 657);
		shell.setText(name);
		shell.setLayout(new FormLayout());
		
		Group group = new Group(shell, SWT.NONE);
		FormData fd_group = new FormData();
		fd_group.top = new FormAttachment(0, 10);
		fd_group.right = new FormAttachment(100, -255);
		group.setLayoutData(fd_group);
		
		final Parser parser = new XSDParser(new Schema().getSchemaContent());
		Element decision = parser.getElement(name);

		final Tree tree = new Tree(shell, SWT.BORDER);
		fillTree(tree, decision, parser, 0);
		
		FormData fd_tree = new FormData();
		fd_tree.bottom = new FormAttachment(0, 443);
		fd_tree.right = new FormAttachment(0, 276);
		fd_tree.top = new FormAttachment(0, 10);
		fd_tree.left = new FormAttachment(0, 10);
		tree.setLayoutData(fd_tree);
	}
	
	private void fillTree(Object tree, Element element, Parser parser, int level) {
		if(level > 3) {
			return;
		}
		level++;
		for(Object e1 : element.getElements()) {
			TreeItem ti = null;
			if(tree instanceof Tree) {
				ti = new TreeItem((Tree)tree, SWT.NONE);
			} else if(tree instanceof TreeItem) {
				ti = new TreeItem((TreeItem)tree, SWT.NONE);
			}
			ti.setText(((Element)e1).getName());
			Element e = parser.getElement(((Element)e1).getName());
			if(e.getElements() == null) {
				continue;
			}
			fillTree(ti, e, parser, level);
		}
	}

	@Override
	protected void open() {
		shell.open();
	}

	@Override
	protected void dispose() {
	}
}