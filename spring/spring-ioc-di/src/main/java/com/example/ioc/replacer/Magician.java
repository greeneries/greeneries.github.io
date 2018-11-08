package com.example.ioc.replacer;

import lombok.Data;

// 마술사에게 마술 상자를 줌 

@Data
public class Magician {
	private MagicBox box;
	
	public void show() {
		System.out.println("마술사가 마술상자를 엽니다. 무엇이 나올까요?");
		String result = box.open();
		System.out.println("짜잔 ~!" + result + "가 나왔습니다.");
	}
}
