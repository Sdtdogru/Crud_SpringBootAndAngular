package com.example.springboot.repository;

import com.example.springboot.entity.Text;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TextRepository extends CrudRepository<Text,Long> {

}
