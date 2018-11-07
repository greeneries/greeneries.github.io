package com.example.demo.lombok.step1;

public class UserTest {

	
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		User test = new User(1, "Tom", "crui@test.com");
		test.setEmail("test");
		
		System.out.println(test.toString());
		test.toString();
		
		Emp emp = new Emp(1,"2","3");
		Emp emp2 = emp;
		System.out.println(emp == emp2);
		
		Emp emp3 = new Emp(1,"2","3");
		
		System.out.println(emp.equals(emp2));
		System.out.println(emp.equals(emp3));
		
	}

}
