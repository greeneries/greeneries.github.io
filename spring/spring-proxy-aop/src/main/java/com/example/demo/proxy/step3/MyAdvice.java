package com.example.demo.proxy.step3;

import java.lang.reflect.InvocationHandler;
import java.lang.reflect.Method;


public class MyAdvice implements InvocationHandler{

	// 어떠한 타켓 객체도 취급할 수 있도록 Object 자료형으로 저장한다. 
	private Object target;

	public MyAdvice(Object target) {
		this.target = target;
	}
	
	
	@Override
	public Object invoke(Object proxy, Method method, Object[] args) throws Throwable {
		// TODO Auto-generated method stub
		System.out.println("-------------------");
		// 범용성을 확보하기 위해서는 특정 자료형이 노출되면 안 된다. 
		//((Hello)target).say(); 

		// target 객체의 핵심로직을 수행해야 함.
		// Method method 안에 이미 어떤 객체인지 담겨 있음.
		// 메소드를 호출하면서 파라미터로 args를 전달한다. 
		Object result = method.invoke(target, args);
		System.out.println("-------------------");
		return result;
	}

}
