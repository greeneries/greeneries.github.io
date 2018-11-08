package com.example.demo.qualifier;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;



public class Test {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		ApplicationContext context = new ClassPathXmlApplicationContext("com/example/demo/qualifier/qualifier.xml");
		
		TheClientBean manager = (TheClientBean) context.getBean("theClientBean");
		manager.getList().forEach(System.out::println);
		System.out.println(manager.getList().size());
		
	}

}
