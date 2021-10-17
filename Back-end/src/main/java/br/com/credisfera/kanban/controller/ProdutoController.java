package br.com.credisfera.kanban.controller;

import java.util.List;
import java.util.UUID;

import br.com.credisfera.kanban.exception.ResourceNotFoundException;
import br.com.credisfera.kanban.repository.ProdutoRespository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import br.com.credisfera.kanban.model.Produto;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/v1")
public class ProdutoController {

	@Autowired
	private ProdutoRespository repository;


	@GetMapping("/product/{id}")
	public ResponseEntity<Produto> getProductById(@PathVariable("id") Long id) throws ResourceNotFoundException {
		Produto product = repository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Produto not found:: "+id));
		return ResponseEntity.ok().body(product);
	}

	@GetMapping("/product")
	@ResponseStatus(HttpStatus.OK)
	public List<Produto> getAllJornadas() {
		return repository.findAll();
	}

	@PostMapping("/product")
	@ResponseStatus(HttpStatus.CREATED)
	public Produto createProduct(@Valid @RequestBody Produto product) {
		return repository.save(product);
	}





	@DeleteMapping("/product/{id}")
	public ResponseEntity<Boolean> deleteProduct(@PathVariable Long id) {
		repository.deleteById(id);

		return ResponseEntity.accepted().body(true);
	}
}
