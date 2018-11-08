package com.example.demo.scope;


import javax.annotation.PostConstruct;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import lombok.Data;



@Scope("prototype")
@Component("car2")
@Data
public class Car2 {

	private String name;
	private String maker;
	
	
	@PostConstruct
	public void init() {
		name = "K9";
		maker ="kia";
	}
		
}
