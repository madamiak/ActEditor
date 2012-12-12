package pl.wroc.pwr.student.acteditor.model.tags;

import java.util.ArrayList;
import java.util.List;

import org.junit.runner.Describable;

/**
 * Przechowuje i udostepnia dane o simpleType dokumentu XML.
 * 
 * @author Mateusz
 * 
 */
public class SimpleType {
	private List enumerations;
	private String pattern = "";
	private String name = "";
	private String description = "";

	/**
	 * Konwertuje dane o typie prostym do String.
	 * 
	 * @return Typ prosty w postaci ciagu znaków.
	 */
	public String toString() {
		return name + " " + description;
	}

	/**
	 * Tworzy obiekt SimpleType.
	 */
	public SimpleType() {
		enumerations = new ArrayList();
	}

	/**
	 * Ustawia nazwe typu prostego.
	 * 
	 * @param name
	 *          Nazwa typu prostego.
	 */
	public void setName(String name) {
		this.name = name;
	}

	/**
	 * Zwraca nazwe typu prostego.
	 * 
	 * @return Nazwa typu prostego.
	 */
	public String getName() {
		return name;
	}

	/**
	 * Zwraca wyrazenie regularne, do ktorego musi pasowac wartosc typu prostego.
	 * 
	 * @return Wyrazenie regularne.
	 */
	public String getPattern() {
		return pattern;
	}

	/**
	 * Ustawia wyrazenie regulrane, do ktorego musi pasowac wartosc typu prostego.
	 * 
	 * @param pattern
	 *          Wyrazenie regularne;
	 */
	public void setPattern(String pattern) {
		this.pattern = pattern;
	}

	/**
	 * Zwraca opis typu prostego.
	 * 
	 * @return Opis typu prostego.
	 */
	public String getDescription() {
		return description;
	}

	/**
	 * Ustawia opis typu prostego.
	 * 
	 * @param description
	 *          Opis typu prostego.
	 */
	public void setDescription(String description) {
		this.description = description;
	}

	/**
	 * Dodaje obiekt do listy wyliczeniowej, zawierajacej mozliwe warianty wyboru
	 * wartosci typu prostego.
	 * 
	 * @param enumeration
	 *          Wariant, ktory ma zostac dodany do listy.
	 */
	public void add(String enumeration) {
		enumerations.add(enumeration);
	}

	/**
	 * Zwraca mozliwe warianty wyboru wartosci typu prostego.
	 * 
	 * @return Lista wariantow wyboru.
	 */
	public List getEnumeratinos() {
		return enumerations;
	}

}
