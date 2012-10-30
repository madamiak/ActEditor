package pl.wroc.pwr.student.acteditor.model.tags;

import java.util.ArrayList;
import java.util.List;

import pl.wroc.pwr.student.acteditor.util.Utils;

public class Law implements Tag {

	@Override
	public String whoAmI() {
		return "Ustawa";
	}

	@Override
	public String[] getTags(String[] structure) {
		String[] result;
		List<String> list = new ArrayList<String>();
		
		for(String eachLine : structure) {
			String tmp = getTagFromLine(eachLine);
			addResultToList(list, tmp);
		}
		
		result = Utils.convertStringListToArray(list);
		
		return result;
	}

	private void addResultToList(List<String> list, String tmp) {
		if(tmp == null || tmp == "") {
			return;
		} else {
			System.out.println(tmp);
			list.add(tmp);
		}
	}

	public String getTagFromLine(String line) {
		if(line.contains("ref")) {
			String ret = line.substring(line.indexOf("ref=\""), line.lastIndexOf("\"")).replaceAll("ref=\"", "");
			return ret;
		} else {
			return null;
		}
	}

}
