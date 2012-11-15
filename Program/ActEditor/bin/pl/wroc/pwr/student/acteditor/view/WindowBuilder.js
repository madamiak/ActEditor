Clazz.declarePackage ("pl.wroc.pwr.student.acteditor.view");
Clazz.load (null, "pl.wroc.pwr.student.acteditor.view.WindowBuilder", ["pl.wroc.pwr.student.acteditor.view.SubWindow"], function () {
c$ = Clazz.decorateAsClass (function () {
this.display = null;
Clazz.instantialize (this, arguments);
}, pl.wroc.pwr.student.acteditor.view, "WindowBuilder");
Clazz.makeConstructor (c$, 
function (display) {
this.display = display;
}, "$wt.widgets.Display");
Clazz.defineMethod (c$, "openWindow", 
function (choice) {
switch (choice) {
case 0:
 new pl.wroc.pwr.student.acteditor.view.SubWindow (this.display, "ustawa");
break;
case 1:
 new pl.wroc.pwr.student.acteditor.view.SubWindow (this.display, "rozporzadzenie");
break;
case 2:
 new pl.wroc.pwr.student.acteditor.view.SubWindow (this.display, "uchwala");
break;
case 3:
 new pl.wroc.pwr.student.acteditor.view.SubWindow (this.display, "zarzadzenie");
break;
case 4:
 new pl.wroc.pwr.student.acteditor.view.SubWindow (this.display, "informacja");
break;
case 5:
 new pl.wroc.pwr.student.acteditor.view.SubWindow (this.display, "komunikat");
break;
case 6:
 new pl.wroc.pwr.student.acteditor.view.SubWindow (this.display, "decyzja");
break;
case 7:
 new pl.wroc.pwr.student.acteditor.view.SubWindow (this.display, "oswiadczenie");
break;
case 8:
 new pl.wroc.pwr.student.acteditor.view.SubWindow (this.display, "wyrok_TK");
break;
case 9:
 new pl.wroc.pwr.student.acteditor.view.SubWindow (this.display, "postanowienie");
break;
case 10:
 new pl.wroc.pwr.student.acteditor.view.SubWindow (this.display, "wyrok");
break;
case 11:
 new pl.wroc.pwr.student.acteditor.view.SubWindow (this.display, "porozumienie");
break;
case 12:
 new pl.wroc.pwr.student.acteditor.view.SubWindow (this.display, "ogloszenie");
break;
case 13:
 new pl.wroc.pwr.student.acteditor.view.SubWindow (this.display, "obwieszczenie");
break;
}
}, "~N");
});
