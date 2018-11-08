package com.example.demo.spel;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.PropertySource;
import org.springframework.stereotype.Component;
import lombok.Data;

// xml파일에서는 <context:property-placeholder location="my.properties"/> 
@PropertySource(value = { "my.properties" })
@Component
@Data
public class Person {
	
// #으로 했을때 member는 bean id임.
//	<bean id="member" class="com.example.demo.spel.Member">
//		<property name="name">
//			<value>#{user.name + "님"}</value>
//		</property>
//		<property name="age">
//			<value>#{user.age + 1}</value>
//		</property>
//	</bean>
	@Value("#{member.name}")
	private String name;
	
	@Value("#{member.age}")
	private int age;
	
	// $는 properties파일에서 환경변수를 찾는 방법
	@Value("${car.default.name:null}")
	private String carName;
	
	@Value("${car.default.doors:0}")
	private int carDoors;
	
	// Run As > Run Configuration > VM arguments > -Duser.region=KR
	// java -jar 빌드결과.jar -Duser.region=KR
	@Value("#{systemProperties['user.region'] == null ? 'US' : systemProperties['user.region']}")
	private String defaultLocale;
}