package com.example.demo.homework;

import java.util.Random;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.springframework.stereotype.Component;

@Component
@Aspect
public class SafetyBeltCheckAdvice {

	// 자동차에 start 메소드가 호출되면 
	// 안전벨트 착용여부를 확인하여 
	// 착용했으면 엔지를 기동 시키고
	// 착용하지 않았으면 엔진을 경고음을 울려줍니다.
	// 안전벨트를 착용했으면 engine is running 만약 안전벨트를 착용하지 않았으면 띵동 안전벨트를 착용하세요.
	
	@Around("bean(luxury*) && execution(* start(..)) ")
	public Object myBefore(ProceedingJoinPoint joinPoint) throws Throwable {
		
		Object ret = "";
		if(new SafetyBeltCheckSensor().check()) {
			ret = joinPoint.proceed();
		}else {

			System.out.println("띵동! 안전벨트를 착용하세요.");
		}
		return ret;
	}
	
	
	
}


class SafetyBeltCheckSensor{
	 Random rnd = new Random();
	
	public  boolean check() {
	
		int temp = rnd.nextInt(2);
		if(temp == 0) {
			return true;
		}
		return false;
	}
	 

}
