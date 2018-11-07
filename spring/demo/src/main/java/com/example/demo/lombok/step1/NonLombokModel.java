//package com.example.demo.lombok.step1;
//
//import lombok.Builder;
//import lombok.NoArgsConstructor;
//
////@Data : 
//// @Getter, @Setter, @RequiredArgsConstructor, 
//// @ToString, @EqualsAndHashCode 애노테이션들을 붙이는 대신 사용한다.
//@NoArgsConstructor 
//public class NonLombokModel {
//
//	
//	private String name;
//    private int age;    private String address;
//    // @NoArgsConstructor    public NonLombokModel() {}
//    // @AllArgsConstructor    
//    // 또는    // @RequiredArgsConstructor    
//    // @NonNull String name;    
//    // @NonNull Integer age;    
//    // @NonNull String address;    
//    public NonLombokModel(String name, int age, String address) {        
//    	super();        this.name = name;        this.age = age;        this.address = address;    }
// 
//    @Builder    
//    public static NonLombokModelBuilder builder() {        
//    	NonLombokModel lombokModel = new NonLombokModel();        
//    	return lombokModel.new NonLombokModelBuilder();    
//    }
//    
//	
//}
//

