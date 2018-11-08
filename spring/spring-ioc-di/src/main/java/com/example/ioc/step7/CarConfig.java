package com.example.ioc.step7;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

// 이 클래스는 빈 설정정보를 갖고 있으니 처리하라고 요청한다. 
@Configuration
public class CarConfig {
	//	CarMaker maker = new KiaMaker(); // 객체 생성
	//	HyundaiMaker maker = new HyundaiMaker(); // 객체 생성
	//	
	//	OrderManager manager = new OrderManager(); // 객체 생성
	//	manager.setMaker(maker); // 관계 설정 
	
	// Bean : 메소드명을 id로 삼고 메소드가 리턴하는 객체를 빈 컨테이너에 등록하라. 
	@Bean
	public CarMaker kiaMaker() {
		CarMaker maker = new KiaMaker();
		return maker;
	}
	
	// 원한다면 bean id값을 변경가능 
	@Bean(name="HyundaiMaker")
	public CarMaker hyundaiMaker() {
		CarMaker maker = new HyundaiMaker();
		return maker;
	}
	
	@Bean
	public OrderManager manager() {
		OrderManager mananger = new OrderManager();
		mananger.setMaker(kiaMaker());
		return mananger;
	}
	
	
}
