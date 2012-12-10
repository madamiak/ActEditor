package pl.wroc.pwr.student.acteditor.parsing;

/**
 * Interfejs udostepniajacy formatowanie generowanych danych.
 * 
 * @author Mateusz
 * 
 */
public interface Formatter {
	/**
	 * Dodaje wype³niony tag.
	 * 
	 * Tag musi wystepowac w postaci [tag z wypelnionymi atrybutami]wartosc
	 * znacznika[tag zamykajacy].
	 * 
	 * @param tag
	 *          Wypelniony znacznik.
	 */
	public void add(String tag);

	/**
	 * Generuje zawartosc na podstawie wypelnionych tagow.
	 * 
	 * @return Zawartosc dokumentu.
	 */
	public String generate();
}
