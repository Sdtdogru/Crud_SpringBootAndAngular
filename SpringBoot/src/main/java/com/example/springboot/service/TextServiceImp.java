package com.example.springboot.service;

import com.example.springboot.entity.Text;
import com.example.springboot.repository.TextRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class TextServiceImp implements TextService{

    final TextRepository textRepository;

    @Override
    public List<Text> getAll() {
        List<Text> textList = new ArrayList<>();
        textRepository.findAll().forEach(a->textList.add(new Text(a.getId(), a.getName())));
        return textList;
    }

    @Override
    public Text postText(Text text) {
        return textRepository.save(text);
    }

    @Override
    public Text updateText(Text text) {
        return textRepository.save(text);
    }

    @Override
    public void delete(long id) {
        textRepository.deleteById(id);
    }
}
