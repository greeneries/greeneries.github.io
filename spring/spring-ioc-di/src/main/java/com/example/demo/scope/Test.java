package com.example.demo.scope;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Test {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		ApplicationContext context = new ClassPathXmlApplicationContext("scope-test.xml");
		
		// 어노테이션으로 @Scope("prototype")를 설정하는 방법 테스트 
		Car2 car = context.getBean("car2", Car2.class);
		System.out.println(car);
		Car2 car2 = context.getBean("car2", Car2.class);
		System.out.println(car2);
		System.out.println(car == car2);  // false
	
		
		// xml로 scope를 설정하는 방법 테스트 
		Car car3 = context.getBean("car", Car.class);
		System.out.println(car3);
		Car car4 = context.getBean("car", Car.class);
		System.out.println(car4);
		System.out.println(car3 == car4); // false

		
		/*
  			컨테이너는 bean을 싱글톤 패턴으로 관리한다. 그래서 요청시 마다 매번 객체를 새로 생성하는 게 아니라 기존 객체를 주는 데 
			 vo 또는 dto를 싱글톤 패턴으로 만들경우 요청 중간에 값이 변경되는 문제가 발생한다.
			 그래서 일반적으로 vo나 dto는 bean으로 등록하지 않지만 
			 꼭 bean으로 등록해서 사용해야 하는경우 scope="prototype"을 주면 bean 객체는 요청 시마다
			 매번 새로 만든다. 
		*/
		Car3 car31 = context.getBean("car3", Car3.class);
		System.out.println("car31: "+car31); 
		Car3 car32 = context.getBean("car3", Car3.class);
		System.out.println("car32: "+car32);
		System.out.println(car31 == car32); // true

		
		
	}
	

}
