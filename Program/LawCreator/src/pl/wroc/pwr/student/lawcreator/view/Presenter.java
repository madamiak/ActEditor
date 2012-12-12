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

import java.util.ArrayList;
import java.util.Iterator;
import java.util.LinkedList;
import java.util.List;
import java.util.Queue;
import java.util.Stack;

import org.eclipse.swt.SWT;
import org.eclipse.swt.layout.GridData;
import org.eclipse.swt.widgets.Combo;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.swt.widgets.Control;
import org.eclipse.swt.widgets.Label;
import org.eclipse.swt.widgets.Text;
import org.eclipse.swt.widgets.Tree;
import org.eclipse.swt.widgets.TreeItem;

import pl.wroc.pwr.student.lawcreator.xml.AttributeImpl;
import pl.wroc.pwr.student.lawcreator.xml.Element;
import pl.wroc.pwr.student.lawcreator.xml.ElementImpl;
import pl.wroc.pwr.student.lawcreator.xml.Parser;
import pl.wroc.pwr.student.lawcreator.xml.nodes.Node;

/**
 * Obs³uguje to, co ma byæ wyœwietlane w oknie aplikacji.
 * 
 * Wszelkie elementy interfejsu, ktore ulegaja modyfikacji, sa obslugiwane w tej
 * klasie.
 * 
 * @author Mateusz Adamiak
 * 
 */
public class Presenter {
	private Parser parser = new Parser();
	private Node document = parser.getRootNode();

	/**
	 * Inicjalizuje wartosci w drzewach.
	 * 
	 * @param tagTree
	 *          Referecja do drzewa dostepnych znacznikow.
	 * @param outputTree
	 *          Referencja do drzewa wypelnionych znacznikow.
	 */
	public void fillTrees(Tree tagTree, Tree outputTree) {
		TreeItem tagRoot = new TreeItem(tagTree, SWT.NONE);
		tagRoot.setText("Uchwa³a");

		for (Object each : parser.getElement("Uchwa³a").getElements()) {
			recursiveFillingTree(tagRoot, each, 0);
		}

		TreeItem outputRoot = new TreeItem(outputTree, SWT.NONE);
		outputRoot.setText("Uchwa³a");
	}

	private void recursiveFillingTree(TreeItem parent, Object object, int level) {
		if (level++ > 10)
			return;
		TreeItem child = new TreeItem(parent, SWT.NONE);
		ElementImpl element = (ElementImpl) object;
		child.setText(element.getName());

		Element e = parser.getElement(((ElementImpl) object).getName());

		for (Object each : e.getElements()) {
			recursiveFillingTree(child, each, level);
		}
	}

	/**
	 * Uzupelnia drzewo wypelnionych znacznikow o brakujace pozycje.
	 * 
	 * @param treeOutput
	 *          Referencja do drzewa wypelnionych znacznikow
	 * @param tree
	 *          Referencja do drzewa dostepnych znacznikow
	 * @param composite
	 *          Referencja do kompozycji wyswietlajacej formularz
	 * @param tagTreeClicked
	 *          Informacja, czy zostala wybrana pozycja z drzewa dostepnych
	 *          znacznikow
	 * @throws ValueFormatException
	 *           Wyjatek wyrzucany, gdy wypelnione pole formularza nie spelnia
	 *           okreslonych zasad.
	 */
	public void fillOutput(Tree treeOutput, Tree tree, Composite composite, boolean tagTreeClicked)
			throws ValueFormatException {
		TreeItem current = tagTreeClicked ? tree.getSelection()[0] : treeOutput.getSelection()[0];
		Stack parents = getParentItems(current);

		current = createMissingItems(treeOutput, parents);

		saveValues(current, composite);
	}

	private void saveValues(TreeItem current, Composite composite) throws ValueFormatException {
		Stack parents = getParentItems(current);
		List values = new ArrayList();
		List names = new ArrayList();
		Node node = getLastNode(parents);
		for (Control kid : composite.getChildren()) {
			if (kid instanceof Text) {
				values.add(((Text) kid).getText());
			} else if (kid instanceof Label) {
				names.add(((Label) kid).getText());
			} else if (kid instanceof Combo) {
				try {
					values.add((((Combo) kid).getItem(((Combo) kid).getSelectionIndex())));
				} catch (IllegalArgumentException e) {
					values.add("");
				}
			}
		}
		for (Object name : names) {
			if (!name.equals("Treœæ elementu") && !name.equals("")) {
				pl.wroc.pwr.student.lawcreator.xml.nodes.Attribute attribute = new pl.wroc.pwr.student.lawcreator.xml.nodes.Attribute();
				attribute.setName(name.toString());
				node.addAttribute(attribute);
			}
		}
		Iterator itV = values.iterator();
		Iterator itK = names.iterator();
		while (itV.hasNext()) {
			String name = itK.next().toString();
			String pattern;
			String value = itV.next().toString();
			if (value.equals("")) {
				continue;
			}
			pl.wroc.pwr.student.lawcreator.xml.nodes.Attribute attribute = node.getAttributeByName(name);
			if (attribute != null) {
				if ((pattern = parser.getElement(current.getText()).getAttribute(name).getType().getPattern()) != null) {
					if (value.matches(pattern)) {
						attribute.setValue(value);
					} else {
						throw new ValueFormatException("Z³a wartoœæ pola: " + name);
					}
				} else {
					attribute.setValue(value);
				}
			} else {
				node.setValue(value);
			}
		}
	}

	private Node getLastNode(Stack parents) {
		Queue children = new LinkedList();
		Node node = document;
		while (!parents.isEmpty()) {
			children.add(parents.pop());
		}
		children.poll();
		while (!children.isEmpty()) {
			node = node.getChildByName(((TreeItem) children.poll()).getText());
		}
		return node;
	}

	private TreeItem createMissingItems(Tree treeOutput, Stack parents) {
		TreeItem[] outputItems = treeOutput.getItems();
		TreeItem currentOutputItem = null;
		Node parentNode = document;
		boolean itemAlreadyExistingInTree = false;

		while (!parents.isEmpty()) {
			TreeItem parentItem = (TreeItem) parents.pop();
			itemAlreadyExistingInTree = false;

			for (TreeItem each : outputItems) {
				if (parentItem.getText().equals(each.getText())) {
					itemAlreadyExistingInTree = true;
					outputItems = each.getItems();
					currentOutputItem = each;
					break;
				}
			}

			if (itemAlreadyExistingInTree) {
				if (parentNode.getChildByName(currentOutputItem.getText()) != null) {
					parentNode = parentNode.getChildByName(currentOutputItem.getText());
				}
				continue;
			}

			currentOutputItem = new TreeItem(currentOutputItem, SWT.NONE);
			currentOutputItem.setText(parentItem.getText());

			parentNode = createChild(parentNode, parentItem);
		}

		return currentOutputItem;
	}

	private Node createChild(Node parentNode, TreeItem parentItem) {
		Node childNode = new Node();

		childNode.setName(parentItem.getText());
		parentNode.addNote(childNode);

		return childNode;
	}

	private Stack getParentItems(TreeItem currentItem) {
		Stack parents = new Stack();

		parents.push(currentItem);
		parents = pushParents(currentItem, parents);

		return parents;
	}

	private Stack pushParents(TreeItem currentItem, Stack parents) {
		TreeItem parent = currentItem.getParentItem();

		while (parent != null) {
			parents.push(parent);
			parent = parent.getParentItem();
		}

		return parents;
	}

	/**
	 * Zwraca opis elementu.
	 * 
	 * @param name
	 *          Nazwa elementu
	 * @param textDescription
	 *          Referencja do pola tekstowego, w ktorym opis ma sie ukazac.
	 */
	public void setDescription(String name, Text textDescription) {
		textDescription.setText(parser.getElement(name).getDescription());
	}

	/**
	 * Wyswietla formularz.
	 * 
	 * @param tagTree
	 *          Referencja do drzewa dostepnych znacznikow
	 * @param composite
	 *          Referencja do kompozycji, ktora ma wyswietlac formularz
	 * @throws BlankFormException
	 *           Wyjatek wyrzucany, gdy dany element nie posiada zadnych pol do
	 *           wypelnienia.
	 */
	public void updateForm(Tree tagTree, Composite composite) throws BlankFormException {
		for (Control child : composite.getChildren()) {
			child.dispose();
		}
		composite.pack();

		Element element = parser.getElement(tagTree.getSelection()[0].getText());
		for (Object each : element.getAttributes()) {
			AttributeImpl a = (AttributeImpl) each;
			new Label(composite, SWT.NONE).setText(a.getName());
			if (a.getType().getEnumerations().size() > 0) {
				Combo combo = new Combo(composite, SWT.NONE);
				for (Object s : a.getType().getEnumerations()) {
					combo.add(s.toString());
				}
			} else {
				new Text(composite, SWT.BORDER);
			}
		}
		if (element.getType().equals("editable")) {
			new Label(composite, SWT.NONE).setText("Treœæ elementu");
			new Label(composite, SWT.NONE);
			Text txt = new Text(composite, SWT.BORDER | SWT.V_SCROLL);
			GridData gd = new GridData();
			gd.heightHint = 200;
			gd.widthHint = 300;
			gd.horizontalSpan = 2;
			txt.setLayoutData(gd);
		}
		if (composite.getChildren().length == 0 && !tagTree.getSelection()[0].getText().equals("Uchwa³a")) {
			throw new BlankFormException("pusty formularz");
		}
		composite.pack();
	}

	/**
	 * Zwraca zawartosc dokumentu XML na podstawie wypelnionych wczesniej
	 * znacznikow.
	 * 
	 * @return Zawartosc dokumentu XML
	 */
	public String getXML() {
		String declaration = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n";
		return declaration + document.toXML();
	}

	/**
	 * Wyswietla formularz, ktory zostal wczesniej wypelniony i zachowany w
	 * pamieci.
	 * 
	 * @param outputTree
	 *          Referencja do drzewa wypelnionych znacznikow
	 * @param composite
	 *          Referencja do kompozycji, ktora ma wyswietlac formularz
	 * @throws BlankFormException
	 *           Wyjatek wyrzucany, gdy dany element nie posiada zadnych pol do
	 *           wypelnienia.
	 */
	public void retrieveData(Tree outputTree, Composite composite) throws BlankFormException {
		updateForm(outputTree, composite);
		updateData(outputTree, composite);
	}

	private void updateData(Tree outputTree, Composite composite) {
		String name = null;
		TreeItem selectedItem = outputTree.getSelection()[0];
		Stack parents = getParentItems(selectedItem);
		Node node = getLastNode(parents);

		for (Control kid : composite.getChildren()) {
			if (kid instanceof Label) {
				name = ((Label) kid).getText();
			} else if (kid instanceof Text) {
				try {
					((Text) kid).setText(node.getAttributeByName(name).getValue());
				} catch (NullPointerException e) {
					((Text) kid).setText(node.getValue());
				}
			} else if (kid instanceof Combo) {
				int i = 0;
				for (String s : ((Combo) kid).getItems()) {
					try {
						if (s.equals(node.getAttributeByName(name).getValue())) {
							((Combo) kid).select(i);
						}
					} catch (NullPointerException e) {
						break;
					}
					i++;
				}
			}
		}
	}

}
