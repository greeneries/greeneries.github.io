package com.example.ioc.step6;

import org.springframework.stereotype.Component;

/*
 * <bean id="kiaMaker" class="com.example.ioc.step6.KiaMaker">
 */

@Component("kiaMaker")
public class KiaMaker implements CarMaker{
	
	@Override
	public Car sell(Money money) {
		System.out.println("KiaMaker # " + money.getAmount() + "원을 차 값으로 받는다.");
		Car car = new Car("K9");
		System.out.println("KiaMaker # " + car.getName() + "를 만들어서 판다.");
		return car;
	}
}