package com.example.springboot.controller;

import com.example.springboot.entity.Text;
import com.example.springboot.service.TextService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:4200/")
public class TextController {

    final TextService textService;

    @GetMapping("/")
    public List<Text> getAll(){
            return textService.getAll();
    }
    @PostMapping("/")
    public Text postText(@RequestBody Text text){
            return  textService.postText(text);
    }
    @PutMapping("/")
    public Text updateText(@RequestBody Text text){
        return textService.updateText(text);
    }
    @DeleteMapping("/{id}")
    public void deleteText(@PathVariable long id){
         textService.delete(id);
    }
}
