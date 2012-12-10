Clazz.declarePackage ("pl.wroc.pwr.student.lawcreator.xml.nodes");
Clazz.load (null, "pl.wroc.pwr.student.lawcreator.xml.nodes.Node", ["java.util.ArrayList", "pl.wroc.pwr.student.lawcreator.utils.Mapper"], function () {
c$ = Clazz.decorateAsClass (function () {
this.name = "";
this.value = "";
this.nodes = null;
this.attributes = null;
Clazz.instantialize (this, arguments);
}, pl.wroc.pwr.student.lawcreator.xml.nodes, "Node");
Clazz.makeConstructor (c$, 
function () {
this.nodes =  new java.util.ArrayList ();
this.attributes =  new java.util.ArrayList ();
});
Clazz.defineMethod (c$, "getName", 
function () {
return this.name;
});
Clazz.defineMethod (c$, "setName", 
function (name) {
this.name = name;
}, "~S");
Clazz.defineMethod (c$, "getValue", 
function () {
return this.value;
});
Clazz.defineMethod (c$, "setValue", 
function (value) {
this.value = value;
}, "~S");
Clazz.defineMethod (c$, "getNodes", 
function () {
return this.nodes;
});
Clazz.defineMethod (c$, "addNote", 
function (node) {
this.nodes.add (node);
}, "pl.wroc.pwr.student.lawcreator.xml.nodes.Node");
Clazz.defineMethod (c$, "getAttributes", 
function () {
return this.attributes;
});
Clazz.defineMethod (c$, "addAttribute", 
function (attribute) {
this.attributes.add (attribute);
}, "pl.wroc.pwr.student.lawcreator.xml.nodes.Attribute");
Clazz.defineMethod (c$, "getChildByName", 
function (name) {
for (var o, $o = this.nodes.iterator (); $o.hasNext () && ((o = $o.next ()) || true);) {
if ((o).getName ().equals (name)) {
return o;
}}
return null;
}, "~S");
Clazz.defineMethod (c$, "getAttributeByName", 
function (name) {
for (var o, $o = this.attributes.iterator (); $o.hasNext () && ((o = $o.next ()) || true);) {
if ((o).getName ().equals (name)) {
return o;
}}
return null;
}, "~S");
Clazz.defineMethod (c$, "toXML", 
function () {
var result = "";
var name = pl.wroc.pwr.student.lawcreator.utils.Mapper.map (this.name);
if (name.equals ("")) {
for (var o, $o = this.nodes.iterator (); $o.hasNext () && ((o = $o.next ()) || true);) {
var n = o;
result += "\n" + n.toXML ();
}
} else {
result += "<" + name;
for (var o, $o = this.attributes.iterator (); $o.hasNext () && ((o = $o.next ()) || true);) {
result += " " + (o).toXML ();
}
result += ">\n";
result += this.value;
for (var o, $o = this.nodes.iterator (); $o.hasNext () && ((o = $o.next ()) || true);) {
var n = o;
result += "\n" + n.toXML ();
}
result += "\n</" + name + ">";
}return result;
});
});
