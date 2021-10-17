package br.com.credisfera.kanban.model;



import javax.persistence.*;


import lombok.Getter;

@Entity(name = "produto")
public class Produto {

	@Id
	@Getter
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Getter

	private String nome;

	@Getter

	private String descricao;

	@Getter
	private String composicao;

	@Getter
	private String mod_uso;

	@Getter
	private String image;

	@Getter
	private String	beneficios;





}
