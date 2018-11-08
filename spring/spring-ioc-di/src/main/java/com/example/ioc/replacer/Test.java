package com.example.ioc.replacer;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Test {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		ApplicationContext context = new ClassPathXmlApplicationContext("method-replace-magic.xml");
		
		// Magician.class 클래스 이름을 사용하면 bean 컨테이너에 등록된 자료형으로 찾겠다는 의미 
		Magician megician = context.getBean(Magician.class);
		megician.show();

	}

}
