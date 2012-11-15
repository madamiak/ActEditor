Clazz.declarePackage ("pl.wroc.pwr.student.acteditor.view");
Clazz.load (["pl.wroc.pwr.student.acteditor.view.Window"], "pl.wroc.pwr.student.acteditor.view.SubWindow", ["$wt.layout.FormAttachment", "$.FormData", "$.FormLayout", "$wt.widgets.Group", "$.Shell", "$.Tree", "$.TreeItem", "pl.wroc.pwr.student.acteditor.model.Schema", "pl.wroc.pwr.student.acteditor.parsing.xsd.XSDParser"], function () {
c$ = Clazz.declareType (pl.wroc.pwr.student.acteditor.view, "SubWindow", pl.wroc.pwr.student.acteditor.view.Window);
Clazz.makeConstructor (c$, 
function (display, name) {
Clazz.superConstructor (this, pl.wroc.pwr.student.acteditor.view.SubWindow, [name]);
this.display = display;
}, "$wt.widgets.Display,~S");
Clazz.overrideMethod (c$, "initialize", 
function (name) {
this.shell =  new $wt.widgets.Shell (this.display);
this.shell.setSize (793, 657);
this.shell.setText (name);
this.shell.setLayout ( new $wt.layout.FormLayout ());
var group =  new $wt.widgets.Group (this.shell, 0);
var fd_group =  new $wt.layout.FormData ();
fd_group.top =  new $wt.layout.FormAttachment (0, 10);
fd_group.right =  new $wt.layout.FormAttachment (100, -255);
group.setLayoutData (fd_group);
var parser =  new pl.wroc.pwr.student.acteditor.parsing.xsd.XSDParser ( new pl.wroc.pwr.student.acteditor.model.Schema ().getSchemaContent ());
var decision = parser.getElement (name);
var tree =  new $wt.widgets.Tree (this.shell, 2048);
this.fillTree (tree, decision, parser, 0);
var fd_tree =  new $wt.layout.FormData ();
fd_tree.bottom =  new $wt.layout.FormAttachment (0, 443);
fd_tree.right =  new $wt.layout.FormAttachment (0, 276);
fd_tree.top =  new $wt.layout.FormAttachment (0, 10);
fd_tree.left =  new $wt.layout.FormAttachment (0, 10);
tree.setLayoutData (fd_tree);
}, "~S");
Clazz.defineMethod (c$, "fillTree", 
($fz = function (tree, element, parser, level) {
if (level > 3) {
return ;
}level++;
for (var e1, $e1 = element.getElements ().iterator (); $e1.hasNext () && ((e1 = $e1.next ()) || true);) {
var ti = null;
if (Clazz.instanceOf (tree, $wt.widgets.Tree)) {
ti =  new $wt.widgets.TreeItem (tree, 0);
} else if (Clazz.instanceOf (tree, $wt.widgets.TreeItem)) {
ti =  new $wt.widgets.TreeItem (tree, 0);
}ti.setText ((e1).getName ());
var e = parser.getElement ((e1).getName ());
if (e.getElements () == null) {
continue ;}this.fillTree (ti, e, parser, level);
}
}, $fz.isPrivate = true, $fz), "~O,pl.wroc.pwr.student.acteditor.parsing.xsd.Element,pl.wroc.pwr.student.acteditor.parsing.Parser,~N");
Clazz.overrideMethod (c$, "open", 
function () {
this.shell.open ();
});
Clazz.overrideMethod (c$, "dispose", 
function () {
});
});
