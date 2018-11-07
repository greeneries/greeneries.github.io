package kr.co.topcredue.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import kr.co.topcredue.service.BookService;

@Controller
@EnableAutoConfiguration
public class BookController {

	@Autowired
	BookService bookService;
	
	@RequestMapping("/now")
	public @ResponseBody String now() throws Exception{
		return bookService.getDual();
	}
	
}
