package com.example.ioc.step6;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Test {


	/*
	 * spring에게 관계를 위임하는 방법
		- annotation을 사용하는 방법 : 스프링 3.X에서 도입 
	 */
		
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		/*
		 * applicationcontext야 너가 관리하는 객체 중에 id가 manager인 객체를 나한테 줘 
		 */
		ApplicationContext context = new ClassPathXmlApplicationContext("car-config-anno.xml");
		OrderManager manager = (OrderManager) context.getBean("manager");
		System.out.println(manager);
		
		System.out.println(manager.getMaker());
		
		manager.order();

	}

}
