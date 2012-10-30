Clazz.declarePackage ("pl.wroc.pwr.student.acteditor.test");
Clazz.load (null, "pl.wroc.pwr.student.acteditor.test.Load", ["java.io.BufferedReader", "$.FileReader"], function () {
c$ = Clazz.declareType (pl.wroc.pwr.student.acteditor.test, "Load");
c$.main = Clazz.defineMethod (c$, "main", 
function (args) {
var br = null;
try {
var sCurrentLine;
br =  new java.io.BufferedReader ( new java.io.FileReader ("D:\\Opera Unite\\EDAP\\Program\\ActEditor\\resources\\asd.txt"));
while ((sCurrentLine = br.readLine ()) != null) {
System.out.println ("\"" + sCurrentLine.replaceAll ("\"", "\\\\\"") + "\\n\"+");
}
} catch (e) {
if (Clazz.instanceOf (e, java.io.IOException)) {
e.printStackTrace ();
} else {
throw e;
}
} finally {
try {
if (br != null) br.close ();
} catch (ex) {
if (Clazz.instanceOf (ex, java.io.IOException)) {
ex.printStackTrace ();
} else {
throw ex;
}
}
}
}, "~A");
});
