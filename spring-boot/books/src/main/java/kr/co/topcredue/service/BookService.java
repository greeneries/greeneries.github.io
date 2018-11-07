package kr.co.topcredue.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kr.co.topcredue.dao.BookMapper;

@Service
public class BookService {

	@Autowired
	BookMapper bookMapper;
	
	public String getDual() throws Exception{
		return bookMapper.getDual();
	}
}
