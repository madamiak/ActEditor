Clazz.declarePackage ("pl.wroc.pwr.student.lawcreator.view");
Clazz.load (null, "pl.wroc.pwr.student.lawcreator.view.MainWindow", ["$wt.events.SelectionAdapter", "$wt.graphics.Point", "$wt.layout.GridData", "$.GridLayout", "$wt.widgets.Button", "$.Composite", "$.Display", "$.Label", "$.MessageBox", "$.Shell", "$.Text", "$.Tree", "pl.wroc.pwr.student.lawcreator.view.Presenter"], function () {
c$ = Clazz.decorateAsClass (function () {
this.presenter = null;
this.display = null;
this.shell = null;
this.textDescription = null;
this.textFormDescription = null;
this.tagTreeClicked = false;
Clazz.instantialize (this, arguments);
}, pl.wroc.pwr.student.lawcreator.view, "MainWindow");
Clazz.makeConstructor (c$, 
function () {
this.initializeComponents ();
this.open ();
this.dispose ();
});
Clazz.defineMethod (c$, "initializeComponents", 
function () {
this.presenter =  new pl.wroc.pwr.student.lawcreator.view.Presenter ();
this.display =  new $wt.widgets.Display ();
this.shell =  new $wt.widgets.Shell (this.display, 224);
this.shell.setSize (776, 447);
this.shell.setMinimumSize ( new $wt.graphics.Point (740, 455));
this.shell.setText ("Law Creator");
this.shell.setLayout ( new $wt.layout.GridLayout (6, false));
var tagTree =  new $wt.widgets.Tree (this.shell, 2048);
var gd_tagTree =  new $wt.layout.GridData (16384, 4, false, false, 1, 2);
gd_tagTree.heightHint = 275;
gd_tagTree.widthHint = 156;
tagTree.setLayoutData (gd_tagTree);
var label =  new $wt.widgets.Label (this.shell, 514);
var gd_label =  new $wt.layout.GridData (16384, 4, false, false, 1, 3);
gd_label.heightHint = 405;
label.setLayoutData (gd_label);
var composite =  new $wt.widgets.Composite (this.shell, 0);
var gd_composite =  new $wt.layout.GridData (4, 16777216, false, false, 2, 1);
gd_composite.heightHint = 312;
gd_composite.widthHint = 538;
composite.setLayoutData (gd_composite);
composite.setLayout ( new $wt.layout.GridLayout (2, false));
var label_1 =  new $wt.widgets.Label (this.shell, 514);
label_1.setLayoutData ( new $wt.layout.GridData (16384, 4, false, false, 1, 3));
var outputTree =  new $wt.widgets.Tree (this.shell, 2048);
outputTree.addSelectionListener (((Clazz.isClassDefined ("pl.wroc.pwr.student.lawcreator.view.MainWindow$1") ? 0 : pl.wroc.pwr.student.lawcreator.view.MainWindow.$MainWindow$1$ ()), Clazz.innerTypeInstance (pl.wroc.pwr.student.lawcreator.view.MainWindow$1, this, Clazz.cloneFinals ("outputTree", outputTree, "composite", composite))));
var gd_outputTree =  new $wt.layout.GridData (16384, 4, false, false, 1, 2);
gd_outputTree.heightHint = 275;
gd_outputTree.widthHint = 155;
outputTree.setLayoutData (gd_outputTree);
this.presenter.fillTrees (tagTree, outputTree);
this.textFormDescription =  new $wt.widgets.Text (this.shell, 72);
var gd_textFormDescription =  new $wt.layout.GridData (4, 4, false, false, 1, 2);
gd_textFormDescription.widthHint = 420;
this.textFormDescription.setLayoutData (gd_textFormDescription);
 new $wt.widgets.Label (this.shell, 0);
this.textDescription =  new $wt.widgets.Text (this.shell, 72);
var gd_textDescription =  new $wt.layout.GridData (4, 4, false, false, 1, 1);
gd_textDescription.widthHint = 178;
gd_textDescription.heightHint = 40;
this.textDescription.setLayoutData (gd_textDescription);
var btnZapisz =  new $wt.widgets.Button (this.shell, 0);
var gd_btnZapisz =  new $wt.layout.GridData (131072, 1024, false, false, 1, 1);
gd_btnZapisz.widthHint = 93;
gd_btnZapisz.heightHint = 23;
btnZapisz.setLayoutData (gd_btnZapisz);
btnZapisz.addSelectionListener (((Clazz.isClassDefined ("pl.wroc.pwr.student.lawcreator.view.MainWindow$2") ? 0 : pl.wroc.pwr.student.lawcreator.view.MainWindow.$MainWindow$2$ ()), Clazz.innerTypeInstance (pl.wroc.pwr.student.lawcreator.view.MainWindow$2, this, Clazz.cloneFinals ("outputTree", outputTree, "tagTree", tagTree, "composite", composite))));
btnZapisz.setText ("Zapisz");
var btnGenerujXml =  new $wt.widgets.Button (this.shell, 0);
btnGenerujXml.addSelectionListener (((Clazz.isClassDefined ("pl.wroc.pwr.student.lawcreator.view.MainWindow$3") ? 0 : pl.wroc.pwr.student.lawcreator.view.MainWindow.$MainWindow$3$ ()), Clazz.innerTypeInstance (pl.wroc.pwr.student.lawcreator.view.MainWindow$3, this, null)));
btnGenerujXml.setLayoutData ( new $wt.layout.GridData (131072, 1024, false, false, 1, 1));
btnGenerujXml.setText ("Generuj XML");
tagTree.addSelectionListener (((Clazz.isClassDefined ("pl.wroc.pwr.student.lawcreator.view.MainWindow$4") ? 0 : pl.wroc.pwr.student.lawcreator.view.MainWindow.$MainWindow$4$ ()), Clazz.innerTypeInstance (pl.wroc.pwr.student.lawcreator.view.MainWindow$4, this, Clazz.cloneFinals ("tagTree", tagTree, "composite", composite))));
});
Clazz.defineMethod (c$, "open", 
function () {
this.shell.pack ();
this.shell.open ();
});
Clazz.defineMethod (c$, "dispose", 
function () {
Sync2Async.block (this.shell, this, function () {
this.display.dispose ();
});
return;
});
c$.$MainWindow$1$ = function () {
Clazz.pu$h ();
c$ = Clazz.declareAnonymous (pl.wroc.pwr.student.lawcreator.view, "MainWindow$1", $wt.events.SelectionAdapter);
Clazz.overrideMethod (c$, "widgetSelected", 
function (e) {
try {
this.b$["pl.wroc.pwr.student.lawcreator.view.MainWindow"].tagTreeClicked = false;
this.b$["pl.wroc.pwr.student.lawcreator.view.MainWindow"].presenter.retrieveData (this.f$.outputTree, this.f$.composite);
} catch (e1) {
if (Clazz.instanceOf (e1, pl.wroc.pwr.student.lawcreator.view.BlankFormException)) {
var box =  new $wt.widgets.MessageBox (this.b$["pl.wroc.pwr.student.lawcreator.view.MainWindow"].shell);
box.setMessage ("Element nie posiada atrybutów do wypełnienia lub nie jest wspierany przez LawCreator");
DialogSync2Async.block (box, this, function () {
box.dialogReturn;
});
return;
} else {
throw e1;
}
}
}, "$wt.events.SelectionEvent");
c$ = Clazz.p0p ();
};
c$.$MainWindow$2$ = function () {
Clazz.pu$h ();
c$ = Clazz.declareAnonymous (pl.wroc.pwr.student.lawcreator.view, "MainWindow$2", $wt.events.SelectionAdapter);
Clazz.overrideMethod (c$, "widgetSelected", 
function (e) {
try {
this.b$["pl.wroc.pwr.student.lawcreator.view.MainWindow"].presenter.fillOutput (this.f$.outputTree, this.f$.tagTree, this.f$.composite, this.b$["pl.wroc.pwr.student.lawcreator.view.MainWindow"].tagTreeClicked);
} catch (e1) {
if (Clazz.instanceOf (e1, pl.wroc.pwr.student.lawcreator.view.ValueFormatException)) {
var box =  new $wt.widgets.MessageBox (this.b$["pl.wroc.pwr.student.lawcreator.view.MainWindow"].shell);
box.setMessage (e1.getMessage ());
DialogSync2Async.block (box, this, function () {
box.dialogReturn;
});
return;
} else {
throw e1;
}
}
}, "$wt.events.SelectionEvent");
c$ = Clazz.p0p ();
};
c$.$MainWindow$3$ = function () {
Clazz.pu$h ();
c$ = Clazz.declareAnonymous (pl.wroc.pwr.student.lawcreator.view, "MainWindow$3", $wt.events.SelectionAdapter);
Clazz.overrideMethod (c$, "widgetSelected", 
function (e) {
var dialog =  new $wt.widgets.Shell (this.b$["pl.wroc.pwr.student.lawcreator.view.MainWindow"].shell, 67680);
dialog.setText ("Uchwała XML");
dialog.setSize (600, 350);
var xmlContent =  new $wt.widgets.Text (dialog, 586);
xmlContent.setSize (500, 300);
xmlContent.setText (this.b$["pl.wroc.pwr.student.lawcreator.view.MainWindow"].presenter.getXML ());
dialog.open ();
}, "$wt.events.SelectionEvent");
c$ = Clazz.p0p ();
};
c$.$MainWindow$4$ = function () {
Clazz.pu$h ();
c$ = Clazz.declareAnonymous (pl.wroc.pwr.student.lawcreator.view, "MainWindow$4", $wt.events.SelectionAdapter);
Clazz.overrideMethod (c$, "widgetSelected", 
function (e) {
this.b$["pl.wroc.pwr.student.lawcreator.view.MainWindow"].tagTreeClicked = true;
var name = this.f$.tagTree.getSelection ()[0].getText ();
this.b$["pl.wroc.pwr.student.lawcreator.view.MainWindow"].presenter.setDescription (name, this.b$["pl.wroc.pwr.student.lawcreator.view.MainWindow"].textDescription);
try {
this.b$["pl.wroc.pwr.student.lawcreator.view.MainWindow"].presenter.updateForm (this.f$.tagTree, this.f$.composite);
} catch (e1) {
if (Clazz.instanceOf (e1, pl.wroc.pwr.student.lawcreator.view.BlankFormException)) {
var box =  new $wt.widgets.MessageBox (this.b$["pl.wroc.pwr.student.lawcreator.view.MainWindow"].shell);
box.setMessage ("Element nie posiada atrybutów do wypełnienia lub nie jest wspierany przez LawCreator");
DialogSync2Async.block (box, this, function () {
box.dialogReturn;
});
return;
} else {
throw e1;
}
}
}, "$wt.events.SelectionEvent");
c$ = Clazz.p0p ();
};
});
