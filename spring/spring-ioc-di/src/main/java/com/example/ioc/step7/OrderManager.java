package com.example.ioc.step7;


public class OrderManager { 

	// IOC를 구현하기 위해서...
	// 1. 인터페이스 도입 
	// 2. 객체를 직접 개발자가 생성하지 않고 외부에서 생성하게 한다.
	//    CarMaker의 setter/getter 메소드를 만들어놓고 외부에서 객체를 초기화 할 수 있도록 한다.  
	
	// 1. 인터페이스 도입 
	private CarMaker maker;
	
	public OrderManager() {}
	
	// 2. 직접 개발자가 생성하지 않고, CarMaker의 setter/getter 메소드로 받는다. 
	public CarMaker getMaker() {
		return maker;
	}

	public void setMaker(CarMaker maker) {
		this.maker = maker;
	}
	
	public void order() {
		Money money = new Money(1000);
		System.out.println("OrderManager # " + money.getAmount() + "원을 만든다.");
		Car car = maker.sell(money);
		System.out.println("OrderManager # 돈을주고 " + car.getName() + "를 산다.");
	}

	
}