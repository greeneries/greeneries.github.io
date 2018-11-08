package com.example.ioc.step7;

import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;


public class Test {


	/*
	 * spring에게 관계를 위임하는 방법
		- Java Configuration Class : 주로 boot에서 사용함 
	 */
		
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
//		CarMaker maker = new KiaMaker(); // 객체 생성
//		HyundaiMaker maker = new HyundaiMaker(); // 객체 생성
//		
//		OrderManager manager = new OrderManager(); // 객체 생성
//		manager.setMaker(maker); // 관계 설정 
//		manager.order(); // 로직 호출 
		

		ApplicationContext context = new AnnotationConfigApplicationContext(CarConfig.class);
		
		/*
		 * applicationcontext야 너가 관리하는 객체 중에 id가 manager인 객체를 나한테 줘 
		 */
		OrderManager manager = (OrderManager) context.getBean("manager");
		manager.order();

	}

}
