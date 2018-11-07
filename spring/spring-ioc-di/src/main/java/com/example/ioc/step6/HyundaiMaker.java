package com.example.ioc.step6;

import org.springframework.stereotype.Component;


/*
 * <bean id="hyundaiMaker" class="com.example.ioc.step6.HyundaiMaker">
 */

@Component("hyundaiMaker")
public class HyundaiMaker implements CarMaker{
	
	@Override
	public Car sell(Money money) {
		System.out.println("HyundaiMaker # " + money.getAmount() + "원을 차 값으로 받는다.");
		Car car = new Car("Sonata");
		System.out.println("HyundaiMaker # " + car.getName() + "를 만들어서 판다.");
		return car;
	}
}