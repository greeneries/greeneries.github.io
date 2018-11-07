package com.example.topc_32457.myapplication;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity {

//    private Button button;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        // 화면정보를 가진 XML를 코드에서 화면을 구성한다.
        // R.java 파일은 자동으로 생성/업데이트 됩니다.
        // 이 파일안에서 res 폴더 밑에 존재하는 모든 자원을 관리하는 파일입니다.

        setContentView(R.layout.activity_main);
        // setContentView() 메소드가 처리된 후에는 XML안에 정의한
        // 뷰를 객체로써 접근하여 사용 할 수 있다.

        // id가 button인 뷰 객체에 참조를 획득하여 해당 뷰에 이벤트 리스너를 장착한다.
//        button = findViewById(R.id.button);
//
//        button.setOnClickListener(new View.OnClickListener() {
//            @Override
//            public void onClick(View v){
//                Toast t = Toast.makeText(MainActivity.this,
//                        text="test", Toast.LENGTH_LONG);
//                t.show();
//            }
//        });

    }
}
