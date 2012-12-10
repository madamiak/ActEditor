Clazz.declarePackage ("pl.wroc.pwr.student.acteditor.view");
Clazz.load (["pl.wroc.pwr.student.acteditor.view.Window"], "pl.wroc.pwr.student.acteditor.view.SubWindow", ["$wt.events.SelectionAdapter", "$wt.graphics.Color", "$.Point", "$wt.layout.GridData", "$.GridLayout", "$wt.widgets.Button", "$.Composite", "$.Display", "$.Label", "$.Listener", "$.Shell", "$.Text", "$.Tree", "pl.wroc.pwr.student.acteditor.view.Presenter"], function () {
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
var presenter =  new pl.wroc.pwr.student.acteditor.view.Presenter ();
var device = $wt.widgets.Display.getCurrent ();
var white =  new $wt.graphics.Color (device, 255, 255, 255);
this.shell =  new $wt.widgets.Shell (this.display);
this.shell.setSize (790, 480);
this.shell.setBackground (white);
this.shell.setText (name);
this.shell.setLayout ( new $wt.layout.GridLayout (4, false));
var tree =  new $wt.widgets.Tree (this.shell, 0);
var gd_tree =  new $wt.layout.GridData (16384, 128, false, false, 1, 1);
gd_tree.heightHint = 329;
gd_tree.widthHint = 186;
tree.setLayoutData (gd_tree);
presenter.fill (tree, name);
var label =  new $wt.widgets.Label (this.shell, 514);
label.setBackground (white);
var gd_label =  new $wt.layout.GridData (4, 4, false, false, 1, 3);
gd_label.heightHint = 336;
gd_label.widthHint = 14;
label.setLayoutData (gd_label);
var composite =  new $wt.widgets.Composite (this.shell, 0);
composite.setBackground (white);
composite.setLayout ( new $wt.layout.GridLayout (2, false));
var gd_composite =  new $wt.layout.GridData (4, 4, true, true, 1, 2);
gd_composite.widthHint = 436;
gd_composite.heightHint = 336;
composite.setLayoutData (gd_composite);
var treeOutput =  new $wt.widgets.Tree (this.shell, 0);
var gd_treeOutput =  new $wt.layout.GridData (4, 4, true, true, 1, 3);
gd_treeOutput.heightHint = 432;
gd_treeOutput.widthHint = 194;
treeOutput.setLayoutData (gd_treeOutput);
presenter.initializeOutput (tree, treeOutput);
this.text =  new $wt.widgets.Text (this.shell, 72);
var gd_text =  new $wt.layout.GridData (4, 128, false, false, 1, 2);
gd_text.widthHint = 115;
gd_text.heightHint = 44;
this.text.setLayoutData (gd_text);
this.text.setBackground (white);
this.text.setEditable (false);
var btnSave =  new $wt.widgets.Button (this.shell, 0);
btnSave.addSelectionListener (((Clazz.isClassDefined ("pl.wroc.pwr.student.acteditor.view.SubWindow$1") ? 0 : pl.wroc.pwr.student.acteditor.view.SubWindow.$SubWindow$1$ ()), Clazz.innerTypeInstance (pl.wroc.pwr.student.acteditor.view.SubWindow$1, this, Clazz.cloneFinals ("presenter", presenter, "treeOutput", treeOutput, "tree", tree, "composite", composite))));
btnSave.setLayoutData ( new $wt.layout.GridData (131072, 16777216, false, false, 1, 1));
btnSave.setText ("Zapisz");
tree.addListener (3, ((Clazz.isClassDefined ("pl.wroc.pwr.student.acteditor.view.SubWindow$2") ? 0 : pl.wroc.pwr.student.acteditor.view.SubWindow.$SubWindow$2$ ()), Clazz.innerTypeInstance (pl.wroc.pwr.student.acteditor.view.SubWindow$2, this, Clazz.cloneFinals ("tree", tree, "presenter", presenter, "composite", composite))));
}, "~S");
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
c$ = Clazz.declareAnonymous (pl.wroc.pwr.student.acteditor.view, "SubWindow$1", $wt.events.SelectionAdapter);
Clazz.overrideMethod (c$, "widgetSelected", 
function (e) {
this.f$.presenter.fillOutput (this.f$.treeOutput, this.f$.tree, this.f$.composite);
}, "$wt.events.SelectionEvent");
c$ = Clazz.p0p ();
};
c$.$SubWindow$2$ = function () {
Clazz.pu$h ();
c$ = Clazz.declareAnonymous (pl.wroc.pwr.student.acteditor.view, "SubWindow$2", null, $wt.widgets.Listener);
Clazz.overrideMethod (c$, "handleEvent", 
function (event) {
var point =  new $wt.graphics.Point (event.x, event.y);
var item = this.f$.tree.getItem (point);
if (item != null) {
var dsc = this.f$.presenter.getItemDescription (item);
this.f$.presenter.fill (this.f$.composite, item);
this.b$["pl.wroc.pwr.student.acteditor.view.SubWindow"].text.setText (dsc);
}}, "$wt.widgets.Event");
c$ = Clazz.p0p ();
};
});
