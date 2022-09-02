package com.example.springboot.service;

import com.example.springboot.entity.Text;

import java.util.List;

public interface TextService {
     List<Text> getAll();
     Text postText(Text text);
     Text updateText(Text text);
     void delete(long id);
}
