package pl.wroc.pwr.student.acteditor.util;

import java.util.List;

/**
 * Klasa pomocnicza.
 * 
 * @author Mateusz
 * 
 */
public final class Utils {
	/**
	 * Konwertuje liste typu String do tablicy.
	 * 
	 * @param list
	 *          Lista do skonwertowania
	 * @return Powstala tablica typu String
	 */
	public static String[] convertStringListToArray(List list) {
		String[] result = new String[list.size()];
		list.toArray(result);
		return result;
	}

	/**
	 * Mapuje otrzymany lancuch znakow na jego wartosc, ktora ma zostac
	 * wyswietlona.
	 * 
	 * @param name
	 *          Lancuch znakow do mapowania
	 * @return Zmapowana wartosc typu String
	 */
	public static String map(String name) {
		switch (name) {
		case "decyzja":
			return "Decyzja";
		case "informacja":
			return "Informacja";
		case "komunikat":
			return "Komunikat";
		case "obwieszczenie":
			return "Obwieszczenie";
		case "ogloszenie":
			return "Og�oszenie";
		case "oswiadczenie":
			return "O�wiadczenie";
		case "porozumienie":
			return "Porozumienie";
		case "postanowienie":
			return "Postanowienie";
		case "rozporzadzenie":
			return "Rozporz�dzenie";
		case "uchwala":
			return "Uchwa�a";
		case "ustawa":
			return "Ustawa";
		case "wyrok":
			return "Wyrok";
		case "wyrok_TK":
			return "Wyrok Trybuna�u Konstytucyjnego";
		case "zarzadzenie":
			return "zarz�dzenie";
		case "Decyzja":
			return "decyzja";
		case "Informacja":
			return "informacja";
		case "Komunikat":
			return "komunikat";
		case "Obwieszczenie":
			return "obwieszczenie";
		case "Og�oszenie":
			return "ogloszenie";
		case "O�wiadczenie":
			return "oswiadczenie";
		case "Porozumienie":
			return "porozumienie";
		case "Postanowienie":
			return "postanowienie";
		case "Rozporz�dzenie":
			return "rozporzadzenie";
		case "Uchwa�a":
			return "uchwala";
		case "Ustawa":
			return "ustawa";
		case "Wyrok":
			return "wyrok";
		case "Wyrok Trybuna�u Konstytucyjnego":
			return "wyrok_TK";
		case "Zarz�dzenie":
			return "zarzadzenie";
		}
		return null;
	}
}
