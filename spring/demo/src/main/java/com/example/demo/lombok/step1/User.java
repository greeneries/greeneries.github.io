package com.example.demo.lombok.step1;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;


/*
 * @Data를 사용하면 아래 내용 전부 다 사용 가능하다.
 * ---------------------------------------
 * @Getter
 * @Setter
 * @RequiredArgsConstructor
 * @ToString
 * @EqualsAndHashCode
 */
@Data
@NoArgsConstructor
//@RequiredArgsConstructor
@AllArgsConstructor
public class User {

	@NonNull private int id;
	@NonNull private String name;
	private String email;
}
