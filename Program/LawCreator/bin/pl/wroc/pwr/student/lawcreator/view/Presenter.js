Clazz.declarePackage ("pl.wroc.pwr.student.lawcreator.view");
Clazz.load (["pl.wroc.pwr.student.lawcreator.xml.Parser"], "pl.wroc.pwr.student.lawcreator.view.Presenter", ["java.util.ArrayList", "$.LinkedList", "$.Stack", "$wt.layout.GridData", "$wt.widgets.Combo", "$.Label", "$.Text", "$.TreeItem", "pl.wroc.pwr.student.lawcreator.view.BlankFormException", "$.ValueFormatException", "pl.wroc.pwr.student.lawcreator.xml.nodes.Attribute", "$.Node"], function () {
c$ = Clazz.decorateAsClass (function () {
this.parser = null;
this.document = null;
Clazz.instantialize (this, arguments);
}, pl.wroc.pwr.student.lawcreator.view, "Presenter");
Clazz.prepareFields (c$, function () {
this.parser =  new pl.wroc.pwr.student.lawcreator.xml.Parser ();
this.document = this.parser.getRootNode ();
});
Clazz.defineMethod (c$, "fillTrees", 
function (tagTree, outputTree) {
var tagRoot =  new $wt.widgets.TreeItem (tagTree, 0);
tagRoot.setText ("Uchwała");
for (var each, $each = this.parser.getElement ("Uchwała").getElements ().iterator (); $each.hasNext () && ((each = $each.next ()) || true);) {
this.recursiveFillingTree (tagRoot, each, 0);
}
var outputRoot =  new $wt.widgets.TreeItem (outputTree, 0);
outputRoot.setText ("Uchwała");
}, "$wt.widgets.Tree,$wt.widgets.Tree");
Clazz.defineMethod (c$, "recursiveFillingTree", 
($fz = function (parent, object, level) {
if (level++ > 10) return ;
var child =  new $wt.widgets.TreeItem (parent, 0);
var element = object;
child.setText (element.getName ());
var e = this.parser.getElement ((object).getName ());
for (var each, $each = e.getElements ().iterator (); $each.hasNext () && ((each = $each.next ()) || true);) {
this.recursiveFillingTree (child, each, level);
}
}, $fz.isPrivate = true, $fz), "$wt.widgets.TreeItem,~O,~N");
Clazz.defineMethod (c$, "fillOutput", 
function (treeOutput, tree, composite, tagTreeClicked) {
var current = tagTreeClicked ? tree.getSelection ()[0] : treeOutput.getSelection ()[0];
var parents = this.getParentItems (current);
current = this.createMissingItems (treeOutput, parents);
this.saveValues (current, composite);
}, "$wt.widgets.Tree,$wt.widgets.Tree,$wt.widgets.Composite,~B");
Clazz.defineMethod (c$, "saveValues", 
($fz = function (current, composite) {
var parents = this.getParentItems (current);
var values =  new java.util.ArrayList ();
var names =  new java.util.ArrayList ();
var node = this.getLastNode (parents);
for (var kid, $kid = 0, $$kid = composite.getChildren (); $kid < $$kid.length && ((kid = $$kid[$kid]) || true); $kid++) {
if (Clazz.instanceOf (kid, $wt.widgets.Text)) {
values.add ((kid).getText ());
} else if (Clazz.instanceOf (kid, $wt.widgets.Label)) {
names.add ((kid).getText ());
} else if (Clazz.instanceOf (kid, $wt.widgets.Combo)) {
try {
values.add (((kid).getItem ((kid).getSelectionIndex ())));
} catch (e) {
if (Clazz.instanceOf (e, IllegalArgumentException)) {
values.add ("");
} else {
throw e;
}
}
}}
for (var name, $name = names.iterator (); $name.hasNext () && ((name = $name.next ()) || true);) {
if (!name.equals ("Treść elementu") && !name.equals ("")) {
var attribute =  new pl.wroc.pwr.student.lawcreator.xml.nodes.Attribute ();
attribute.setName (name.toString ());
node.addAttribute (attribute);
}}
var itV = values.iterator ();
var itK = names.iterator ();
while (itV.hasNext ()) {
var name = itK.next ().toString ();
var pattern;
var value = itV.next ().toString ();
if (value.equals ("")) {
continue ;}var attribute = node.getAttributeByName (name);
if (attribute != null) {
if ((pattern = this.parser.getElement (current.getText ()).getAttribute (name).getType ().getPattern ()) != null) {
if (value.matches (pattern)) {
attribute.setValue (value);
} else {
throw  new pl.wroc.pwr.student.lawcreator.view.ValueFormatException ("Zła wartość pola: " + name);
}} else {
attribute.setValue (value);
}} else {
node.setValue (value);
}}
}, $fz.isPrivate = true, $fz), "$wt.widgets.TreeItem,$wt.widgets.Composite");
Clazz.defineMethod (c$, "getLastNode", 
($fz = function (parents) {
var children =  new java.util.LinkedList ();
var node = this.document;
while (!parents.isEmpty ()) {
children.add (parents.pop ());
}
children.poll ();
while (!children.isEmpty ()) {
node = node.getChildByName ((children.poll ()).getText ());
}
return node;
}, $fz.isPrivate = true, $fz), "java.util.Stack");
Clazz.defineMethod (c$, "createMissingItems", 
($fz = function (treeOutput, parents) {
var outputItems = treeOutput.getItems ();
var currentOutputItem = null;
var parentNode = this.document;
var itemAlreadyExistingInTree = false;
while (!parents.isEmpty ()) {
var parentItem = parents.pop ();
itemAlreadyExistingInTree = false;
for (var each, $each = 0, $$each = outputItems; $each < $$each.length && ((each = $$each[$each]) || true); $each++) {
if (parentItem.getText ().equals (each.getText ())) {
itemAlreadyExistingInTree = true;
outputItems = each.getItems ();
currentOutputItem = each;
break;
}}
if (itemAlreadyExistingInTree) {
if (parentNode.getChildByName (currentOutputItem.getText ()) != null) {
parentNode = parentNode.getChildByName (currentOutputItem.getText ());
}continue ;}currentOutputItem =  new $wt.widgets.TreeItem (currentOutputItem, 0);
currentOutputItem.setText (parentItem.getText ());
parentNode = this.createChild (parentNode, parentItem);
}
return currentOutputItem;
}, $fz.isPrivate = true, $fz), "$wt.widgets.Tree,java.util.Stack");
Clazz.defineMethod (c$, "createChild", 
($fz = function (parentNode, parentItem) {
var childNode =  new pl.wroc.pwr.student.lawcreator.xml.nodes.Node ();
childNode.setName (parentItem.getText ());
parentNode.addNote (childNode);
return childNode;
}, $fz.isPrivate = true, $fz), "pl.wroc.pwr.student.lawcreator.xml.nodes.Node,$wt.widgets.TreeItem");
Clazz.defineMethod (c$, "getParentItems", 
($fz = function (currentItem) {
var parents =  new java.util.Stack ();
parents.push (currentItem);
parents = this.pushParents (currentItem, parents);
return parents;
}, $fz.isPrivate = true, $fz), "$wt.widgets.TreeItem");
Clazz.defineMethod (c$, "pushParents", 
($fz = function (currentItem, parents) {
var parent = currentItem.getParentItem ();
while (parent != null) {
parents.push (parent);
parent = parent.getParentItem ();
}
return parents;
}, $fz.isPrivate = true, $fz), "$wt.widgets.TreeItem,java.util.Stack");
Clazz.defineMethod (c$, "setDescription", 
function (name, textDescription) {
textDescription.setText (this.parser.getElement (name).getDescription ());
}, "~S,$wt.widgets.Text");
Clazz.defineMethod (c$, "updateForm", 
function (tagTree, composite) {
for (var child, $child = 0, $$child = composite.getChildren (); $child < $$child.length && ((child = $$child[$child]) || true); $child++) {
child.dispose ();
}
composite.pack ();
var element = this.parser.getElement (tagTree.getSelection ()[0].getText ());
for (var each, $each = element.getAttributes ().iterator (); $each.hasNext () && ((each = $each.next ()) || true);) {
var a = each;
 new $wt.widgets.Label (composite, 0).setText (a.getName ());
if (a.getType ().getEnumerations ().size () > 0) {
var combo =  new $wt.widgets.Combo (composite, 0);
for (var s, $s = a.getType ().getEnumerations ().iterator (); $s.hasNext () && ((s = $s.next ()) || true);) {
combo.add (s.toString ());
}
} else {
 new $wt.widgets.Text (composite, 2048);
}}
if (element.getType ().equals ("editable")) {
 new $wt.widgets.Label (composite, 0).setText ("Treść elementu");
 new $wt.widgets.Label (composite, 0);
var txt =  new $wt.widgets.Text (composite, 2560);
var gd =  new $wt.layout.GridData ();
gd.heightHint = 200;
gd.widthHint = 300;
gd.horizontalSpan = 2;
txt.setLayoutData (gd);
}if (composite.getChildren ().length == 0 && !tagTree.getSelection ()[0].getText ().equals ("Uchwała")) {
throw  new pl.wroc.pwr.student.lawcreator.view.BlankFormException ("pusty formularz");
}composite.pack ();
}, "$wt.widgets.Tree,$wt.widgets.Composite");
Clazz.defineMethod (c$, "getXML", 
function () {
var declaration = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n";
return declaration + this.document.toXML ();
});
Clazz.defineMethod (c$, "retrieveData", 
function (outputTree, composite) {
this.updateForm (outputTree, composite);
this.updateData (outputTree, composite);
}, "$wt.widgets.Tree,$wt.widgets.Composite");
Clazz.defineMethod (c$, "updateData", 
($fz = function (outputTree, composite) {
var name = null;
var selectedItem = outputTree.getSelection ()[0];
var parents = this.getParentItems (selectedItem);
var node = this.getLastNode (parents);
for (var kid, $kid = 0, $$kid = composite.getChildren (); $kid < $$kid.length && ((kid = $$kid[$kid]) || true); $kid++) {
if (Clazz.instanceOf (kid, $wt.widgets.Label)) {
name = (kid).getText ();
} else if (Clazz.instanceOf (kid, $wt.widgets.Text)) {
try {
(kid).setText (node.getAttributeByName (name).getValue ());
} catch (e) {
if (Clazz.instanceOf (e, NullPointerException)) {
(kid).setText (node.getValue ());
} else {
throw e;
}
}
} else if (Clazz.instanceOf (kid, $wt.widgets.Combo)) {
var i = 0;
for (var s, $s = 0, $$s = (kid).getItems (); $s < $$s.length && ((s = $$s[$s]) || true); $s++) {
try {
if (s.equals (node.getAttributeByName (name).getValue ())) {
(kid).select (i);
}} catch (e) {
if (Clazz.instanceOf (e, NullPointerException)) {
break;
} else {
throw e;
}
}
i++;
}
}}
}, $fz.isPrivate = true, $fz), "$wt.widgets.Tree,$wt.widgets.Composite");
});
