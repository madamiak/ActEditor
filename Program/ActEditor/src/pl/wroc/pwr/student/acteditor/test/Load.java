package pl.wroc.pwr.student.acteditor.test;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class Load {

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		BufferedReader br = null;

		try {
			String sCurrentLine;
			br = new BufferedReader(new FileReader("D:\\Opera Unite\\EDAP\\Program\\ActEditor\\resources\\asd.txt"));
			while ((sCurrentLine = br.readLine()) != null) {
				System.out.println("\"" + sCurrentLine.replaceAll("\"", "\\\\\"") + "\\n\"+");
			}
		} catch (IOException e) {
			e.printStackTrace();
		} finally {
			try {
				if (br != null)
					br.close();
			} catch (IOException ex) {
				ex.printStackTrace();
			}
		}
	}

}
