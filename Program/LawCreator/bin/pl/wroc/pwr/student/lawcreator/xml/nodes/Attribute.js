Clazz.declarePackage ("pl.wroc.pwr.student.lawcreator.xml.nodes");
Clazz.load (null, "pl.wroc.pwr.student.lawcreator.xml.nodes.Attribute", ["pl.wroc.pwr.student.lawcreator.utils.Mapper"], function () {
c$ = Clazz.decorateAsClass (function () {
this.name = "";
this.value = "";
Clazz.instantialize (this, arguments);
}, pl.wroc.pwr.student.lawcreator.xml.nodes, "Attribute");
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
Clazz.defineMethod (c$, "toXML", 
function () {
var name = pl.wroc.pwr.student.lawcreator.utils.Mapper.map (this.name);
var value = pl.wroc.pwr.student.lawcreator.utils.Mapper.map (this.value);
var result = "";
result += value.equals ("") ? "" : name + "=\"" + value + "\"";
return result;
});
});
