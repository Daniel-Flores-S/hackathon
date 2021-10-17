package br.com.credisfera.kanban.repository;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.credisfera.kanban.model.Produto;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;
@Transactional
public interface ProdutoRespository extends JpaRepository<Produto, Long> {

}
