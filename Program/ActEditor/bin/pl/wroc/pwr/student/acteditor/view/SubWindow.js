Clazz.declarePackage ("pl.wroc.pwr.student.acteditor.view");
Clazz.load (["pl.wroc.pwr.student.acteditor.view.Window"], "pl.wroc.pwr.student.acteditor.view.SubWindow", ["$wt.graphics.Color", "$.Point", "$wt.layout.FormAttachment", "$.FormData", "$.FormLayout", "$.GridLayout", "$wt.widgets.Display", "$.Group", "$.Listener", "$.Shell", "$.Text", "$.Tree", "$.TreeItem", "pl.wroc.pwr.student.acteditor.model.ElementRegistry", "$.Schema", "pl.wroc.pwr.student.acteditor.parsing.xsd.XSDParser"], function () {
c$ = Clazz.decorateAsClass (function () {
this.text = null;
Clazz.instantialize (this, arguments);
}, pl.wroc.pwr.student.acteditor.view, "SubWindow", pl.wroc.pwr.student.acteditor.view.Window);
Clazz.makeConstructor (c$, 
function (display, name) {
Clazz.superConstructor (this, pl.wroc.pwr.student.acteditor.view.SubWindow, [name]);
this.display = display;
}, "$wt.widgets.Display,~S");
Clazz.overrideMethod (c$, "initialize", 
function (name) {
var device = $wt.widgets.Display.getCurrent ();
var white =  new $wt.graphics.Color (device, 255, 255, 255);
this.shell =  new $wt.widgets.Shell (this.display);
this.shell.setBackground (white);
this.shell.setSize (793, 657);
this.shell.setText (name);
this.shell.setLayout ( new $wt.layout.FormLayout ());
var schema =  new pl.wroc.pwr.student.acteditor.model.Schema ();
var data = schema.getSchemaContent ().$plit ("\n");
var parser =  new pl.wroc.pwr.student.acteditor.parsing.xsd.XSDParser (data);
parser.loadData ();
var registry = pl.wroc.pwr.student.acteditor.model.ElementRegistry.getRegistry ();
var e = registry.get (name);
var tree =  new $wt.widgets.Tree (this.shell, 2048);
this.fillTree (tree, registry, e, 0);
var fd_tree =  new $wt.layout.FormData ();
fd_tree.bottom =  new $wt.layout.FormAttachment (0, 443);
fd_tree.right =  new $wt.layout.FormAttachment (0, 276);
fd_tree.top =  new $wt.layout.FormAttachment (0, 10);
fd_tree.left =  new $wt.layout.FormAttachment (0, 10);
tree.setLayoutData (fd_tree);
this.text =  new $wt.widgets.Text (this.shell, 72);
this.text.setBackground (white);
this.text.setEditable (false);
var fd_text =  new $wt.layout.FormData ();
fd_text.top =  new $wt.layout.FormAttachment (tree, 6);
fd_text.right =  new $wt.layout.FormAttachment (tree, 0, 131072);
fd_text.bottom =  new $wt.layout.FormAttachment (tree, 73, 1024);
fd_text.left =  new $wt.layout.FormAttachment (0, 10);
this.text.setLayoutData (fd_text);
var group =  new $wt.widgets.Group (this.shell, 0);
group.setBackground (white);
group.setLayout ( new $wt.layout.GridLayout (2, false));
var fd_group =  new $wt.layout.FormData ();
fd_group.top =  new $wt.layout.FormAttachment (0, 10);
fd_group.right =  new $wt.layout.FormAttachment (tree, 491, 131072);
fd_group.left =  new $wt.layout.FormAttachment (tree, 6);
fd_group.bottom =  new $wt.layout.FormAttachment (0, 443);
group.setLayoutData (fd_group);
tree.addListener (3, ((Clazz.isClassDefined ("pl.wroc.pwr.student.acteditor.view.SubWindow$1") ? 0 : pl.wroc.pwr.student.acteditor.view.SubWindow.$SubWindow$1$ ()), Clazz.innerTypeInstance (pl.wroc.pwr.student.acteditor.view.SubWindow$1, this, Clazz.cloneFinals ("tree", tree, "registry", registry))));
}, "~S");
Clazz.defineMethod (c$, "fillTree", 
($fz = function (tree, registry, element, level) {
if (level > 10) {
return ;
}level++;
var ti = null;
if (Clazz.instanceOf (tree, $wt.widgets.Tree)) {
ti =  new $wt.widgets.TreeItem (tree, 0);
} else if (Clazz.instanceOf (tree, $wt.widgets.TreeItem)) {
ti =  new $wt.widgets.TreeItem (tree, 0);
}ti.setText ((element).getName ());
if (element.getElements () == null) {
if (registry.get (element.getName ()).getElements () == null) {
return ;
}for (var e, $e = registry.get (element.getName ()).getElements ().iterator (); $e.hasNext () && ((e = $e.next ()) || true);) {
this.fillTree (ti, registry, e, level);
}
return ;
}for (var e, $e = element.getElements ().iterator (); $e.hasNext () && ((e = $e.next ()) || true);) {
this.fillTree (ti, registry, e, level);
}
}, $fz.isPrivate = true, $fz), "~O,pl.wroc.pwr.student.acteditor.model.ElementRegistry,pl.wroc.pwr.student.acteditor.model.tags.Element,~N");
Clazz.overrideMethod (c$, "open", 
function () {
this.shell.pack ();
this.shell.open ();
});
Clazz.overrideMethod (c$, "dispose", 
function () {
});
c$.$SubWindow$1$ = function () {
Clazz.pu$h ();
c$ = Clazz.declareAnonymous (pl.wroc.pwr.student.acteditor.view, "SubWindow$1", null, $wt.widgets.Listener);
Clazz.overrideMethod (c$, "handleEvent", 
function (event) {
var point =  new $wt.graphics.Point (event.x, event.y);
var item = this.f$.tree.getItem (point);
if (item != null) {
try {
this.b$["pl.wroc.pwr.student.acteditor.view.SubWindow"].text.setText (this.f$.registry.get (item.getText ()).getDescription ());
} catch (ex) {
if (Clazz.instanceOf (ex, NullPointerException)) {
this.b$["pl.wroc.pwr.student.acteditor.view.SubWindow"].text.setText ("");
} else {
throw ex;
}
}
}}, "$wt.widgets.Event");
c$ = Clazz.p0p ();
};
});
