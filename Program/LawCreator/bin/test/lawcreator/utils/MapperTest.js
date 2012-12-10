Clazz.declarePackage ("test.lawcreator.utils");
Clazz.load (null, "test.lawcreator.utils.MapperTest", ["pl.wroc.pwr.student.lawcreator.utils.Mapper"], function () {
c$ = Clazz.declareType (test.lawcreator.utils, "MapperTest");
Clazz.defineMethod (c$, "mappingStringsTest", 
function () {
org.junit.Assert.assertEquals ("uchwala", pl.wroc.pwr.student.lawcreator.utils.Mapper.map ("Uchwała"));
});
});
