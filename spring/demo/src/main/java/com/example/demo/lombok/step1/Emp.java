package com.example.demo.lombok.step1;

import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@EqualsAndHashCode
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Emp {

	private int empno;
	private String ename;
	private String job;
	
//	public boolean equals(Object obj) {
//		if(!(obj instanceof Emp)) {
//			throw new RuntimeException("User Emp instance");
//		}
//		
//		Emp that = (Emp) obj;
//		if(this.empno == that.empno) {
//			return true;
//		}
//		return false;
//	}
	
//	@Override
//	public int hashCode() {
//		final int prime = 31;
//		int result = 1;
//		result = prime * result + empno;
//		result = prime * result + ((ename == null) ? 0 : ename.hashCode());
//		result = prime * result + ((job == null) ? 0 : job.hashCode());
//		return result;
//	}
//	
//	@Override
//	public boolean equals(Object obj) {
//		if (this == obj)
//			return true;
//		if (obj == null)
//			return false;
//		if (getClass() != obj.getClass())
//			return false;
//		Emp other = (Emp) obj;
//		if (empno != other.empno)
//			return false;
//		if (ename == null) {
//			if (other.ename != null)
//				return false;
//		} else if (!ename.equals(other.ename))
//			return false;
//		if (job == null) {
//			if (other.job != null)
//				return false;
//		} else if (!job.equals(other.job))
//			return false;
//		return true;
//	}
	
	
	
	
}
