Clazz.declarePackage ("pl.wroc.pwr.student.acteditor.view");
Clazz.load (null, "pl.wroc.pwr.student.acteditor.view.Presenter", ["java.util.Stack", "$wt.graphics.Color", "$wt.layout.GridData", "$wt.widgets.Combo", "$.DateTime", "$.Display", "$.Label", "$.Text", "$.TreeItem", "pl.wroc.pwr.student.acteditor.model.AttributeRegistry", "$.ElementRegistry", "$.TypeRegistry", "pl.wroc.pwr.student.acteditor.parsing.xsd.XSDParser"], function () {
c$ = Clazz.decorateAsClass (function () {
this.parser = null;
this.elementRegistry = null;
this.attributeRegistry = null;
this.typeRegistry = null;
this.white = null;
this.xml = null;
Clazz.instantialize (this, arguments);
}, pl.wroc.pwr.student.acteditor.view, "Presenter");
Clazz.makeConstructor (c$, 
function () {
this.parser =  new pl.wroc.pwr.student.acteditor.parsing.xsd.XSDParser ();
this.parser.loadData ();
this.elementRegistry = pl.wroc.pwr.student.acteditor.model.ElementRegistry.getRegistry ();
this.attributeRegistry = pl.wroc.pwr.student.acteditor.model.AttributeRegistry.getRegistry ();
this.typeRegistry = pl.wroc.pwr.student.acteditor.model.TypeRegistry.getRegistry ();
var device = $wt.widgets.Display.getCurrent ();
this.white =  new $wt.graphics.Color (device, 255, 255, 255);
});
Clazz.defineMethod (c$, "fill", 
function (tree, name) {
var element = this.elementRegistry.get (name);
this.recursionTreeFilling (tree, element, 0);
}, "$wt.widgets.Tree,~S");
Clazz.defineMethod (c$, "recursionTreeFilling", 
($fz = function (tree, element, level) {
if (this.isEnd (level)) {
return ;
} else {
level++;
}var ti = this.createItem (tree);
ti.setText ((element).getName ());
if (element.getElements () == null || element.getElements ().size () == 0) {
if (this.elementRegistry.get (element.getName ()).getElements () == null) {
return ;
}for (var e, $e = this.elementRegistry.get (element.getName ()).getElements ().iterator (); $e.hasNext () && ((e = $e.next ()) || true);) {
this.recursionTreeFilling (ti, e, level);
}
return ;
}try {
for (var e, $e = element.getElements ().iterator (); $e.hasNext () && ((e = $e.next ()) || true);) {
this.recursionTreeFilling (ti, e, level);
}
} catch (e) {
if (Clazz.instanceOf (e, NullPointerException)) {
} else {
throw e;
}
}
}, $fz.isPrivate = true, $fz), "~O,pl.wroc.pwr.student.acteditor.model.tags.Element,~N");
Clazz.defineMethod (c$, "createItem", 
($fz = function (tree) {
if (Clazz.instanceOf (tree, $wt.widgets.Tree)) {
return  new $wt.widgets.TreeItem (tree, 0);
} else if (Clazz.instanceOf (tree, $wt.widgets.TreeItem)) {
return  new $wt.widgets.TreeItem (tree, 0);
}return null;
}, $fz.isPrivate = true, $fz), "~O");
Clazz.defineMethod (c$, "isEnd", 
($fz = function (level) {
return level < 20 ? false : true;
}, $fz.isPrivate = true, $fz), "~N");
Clazz.defineMethod (c$, "fill", 
function (composite, item) {
for (var kid, $kid = 0, $$kid = composite.getChildren (); $kid < $$kid.length && ((kid = $$kid[$kid]) || true); $kid++) {
kid.dispose ();
}
var name = item.getText ();
var element = this.elementRegistry.get (name);
var attributes;
try {
attributes = element.getAttributes ();
} catch (e) {
if (Clazz.instanceOf (e, NullPointerException)) {
return ;
} else {
throw e;
}
}
for (var each, $each = attributes.iterator (); $each.hasNext () && ((each = $each.next ()) || true);) {
if (Clazz.instanceOf (each, pl.wroc.pwr.student.acteditor.model.tags.SimpleAttribute)) {
var attribute = each;
this.displayAttribute (attribute, composite);
} else if (Clazz.instanceOf (each, pl.wroc.pwr.student.acteditor.model.tags.AttributeGroup)) {
var group = each;
var subAttributes = group.getAttributes ();
for (var sub, $sub = subAttributes.iterator (); $sub.hasNext () && ((sub = $sub.next ()) || true);) {
this.displayAttribute (sub, composite);
}
}}
if (item.getText ().equals ("tytul") || item.getText ().equals ("srodtytul") || item.getText ().equals ("element_redakcyjny") || item.getText ().equals ("preambula") || item.getText ().equals ("czesc") || item.getText ().equals ("ksiega") || item.getText ().equals ("tyt") || item.getText ().equals ("dzial") || item.getText ().equals ("rozdzial") || item.getText ().equals ("oddzial") || item.getText ().equals ("artykul") || item.getText ().equals ("paragraf") || item.getText ().equals ("sentencja") || item.getText ().equals ("ustep") || item.getText ().equals ("zaskarzenie") || item.getText ().equals ("punkt") || item.getText ().equals ("litera") || item.getText ().equals ("tiret") || item.getText ().equals ("akapit")) this.displayValue (composite);
composite.pack ();
}, "$wt.widgets.Composite,$wt.widgets.TreeItem");
Clazz.defineMethod (c$, "displayValue", 
($fz = function (composite) {
var gridData =  new $wt.layout.GridData ();
gridData.horizontalAlignment = 4;
gridData.horizontalSpan = 2;
gridData.grabExcessVerticalSpace = true;
gridData.heightHint = 200;
gridData.widthHint = 400;
var txt =  new $wt.widgets.Text (composite, 2626);
txt.setLayoutData (gridData);
}, $fz.isPrivate = true, $fz), "$wt.widgets.Composite");
Clazz.defineMethod (c$, "displayAttribute", 
($fz = function (attribute, composite) {
var label;
var simpleType = attribute.getSimpleType ();
var type = attribute.getType ();
label =  new $wt.widgets.Label (composite, 0);
label.setText (attribute.getName ());
label.setBackground (this.white);
if (simpleType != null) {
if (simpleType.getEnumeratinos ().size () > 0) {
var combo =  new $wt.widgets.Combo (composite, 0);
for (var choice, $choice = simpleType.getEnumeratinos ().iterator (); $choice.hasNext () && ((choice = $choice.next ()) || true);) {
combo.add (choice);
}
} else {
 new $wt.widgets.Text (composite, 2048);
}} else if (!type.equals ("") && type != null) {
if (type.equals ("data") || type.equals ("zakres_lat")) {
var date =  new $wt.widgets.DateTime (composite, 0);
} else {
 new $wt.widgets.Text (composite, 2048);
}} else {
 new $wt.widgets.Text (composite, 2048);
}}, $fz.isPrivate = true, $fz), "pl.wroc.pwr.student.acteditor.model.tags.Attribute,$wt.widgets.Composite");
Clazz.defineMethod (c$, "getItemDescription", 
function (item) {
try {
var result = this.elementRegistry.get (item.getText ()).getDescription ();
return result;
} catch (e) {
if (Clazz.instanceOf (e, NullPointerException)) {
return "";
} else {
throw e;
}
}
}, "$wt.widgets.TreeItem");
Clazz.defineMethod (c$, "fillOutput", 
function (treeOutput, tree, composite) {
var current = tree.getSelection ()[0];
var parent = current.getParentItem ();
var stack =  new java.util.Stack ();
stack.push (current);
while (parent != null) {
stack.push (parent);
parent = parent.getParentItem ();
}
var output = treeOutput.getItems ();
var old = null;
while (!stack.isEmpty ()) {
var flag = false;
var ti = stack.pop ();
for (var out, $out = 0, $$out = output; $out < $$out.length && ((out = $$out[$out]) || true); $out++) {
if (ti.getText ().equals (out.getText ())) {
flag = true;
output = out.getItems ();
old = out;
break;
}}
if (flag) {
continue ;}old =  new $wt.widgets.TreeItem (old, 0);
old.setText (ti.getText ());
var c = this.elementRegistry.get (ti.getText ());
System.out.println (c);
}
}, "$wt.widgets.Tree,$wt.widgets.Tree,$wt.widgets.Composite");
Clazz.defineMethod (c$, "initializeOutput", 
function (tree, treeOutput) {
var ti =  new $wt.widgets.TreeItem (treeOutput, 0);
ti.setText (tree.getItem (0).getParent ().getTopItem ().getText ());
}, "$wt.widgets.Tree,$wt.widgets.Tree");
});
