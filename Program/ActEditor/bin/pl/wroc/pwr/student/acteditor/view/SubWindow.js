Clazz.declarePackage ("pl.wroc.pwr.student.acteditor.view");
Clazz.load (["pl.wroc.pwr.student.acteditor.view.Window"], "pl.wroc.pwr.student.acteditor.view.SubWindow", ["$wt.graphics.Color", "$.Point", "$wt.layout.GridData", "$.GridLayout", "$wt.widgets.Composite", "$.Display", "$.Label", "$.Listener", "$.Shell", "$.Text", "$.Tree", "$.TreeItem", "pl.wroc.pwr.student.acteditor.model.ElementRegistry", "$.Schema", "pl.wroc.pwr.student.acteditor.parsing.xsd.XSDParser"], function () {
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
this.shell.setSize (561, 384);
this.shell.setBackground (white);
this.shell.setText (name);
var schema =  new pl.wroc.pwr.student.acteditor.model.Schema ();
var data = schema.getSchemaContent ().$plit ("\n");
var parser =  new pl.wroc.pwr.student.acteditor.parsing.xsd.XSDParser (data);
parser.loadData ();
var registry = pl.wroc.pwr.student.acteditor.model.ElementRegistry.getRegistry ();
var e = registry.get (name);
this.shell.setLayout ( new $wt.layout.GridLayout (3, false));
var tree =  new $wt.widgets.Tree (this.shell, 0);
var gd_tree =  new $wt.layout.GridData (16384, 4, false, false, 1, 1);
gd_tree.heightHint = 242;
gd_tree.widthHint = 186;
tree.setLayoutData (gd_tree);
this.fillTree (tree, registry, e, 0);
var label =  new $wt.widgets.Label (this.shell, 514);
label.setBackground (white);
var gd_label =  new $wt.layout.GridData (4, 4, false, false, 1, 2);
gd_label.heightHint = 336;
gd_label.widthHint = 14;
label.setLayoutData (gd_label);
var composite =  new $wt.widgets.Composite (this.shell, 0);
composite.setBackground (white);
var gd_composite =  new $wt.layout.GridData (4, 4, true, true, 1, 2);
gd_composite.widthHint = 436;
gd_composite.heightHint = 336;
composite.setLayoutData (gd_composite);
this.text =  new $wt.widgets.Text (this.shell, 72);
var gd_text =  new $wt.layout.GridData (4, 1024, false, false, 1, 1);
gd_text.widthHint = 115;
gd_text.heightHint = 67;
this.text.setLayoutData (gd_text);
this.text.setBackground (white);
this.text.setEditable (false);
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
