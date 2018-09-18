### 디렉토리 구조 및 설명
.git                 : git 저장소
dist/                : 서버 JS의 배포파일 폴더, es5 코드 (node 컴파일러가 컴파일)
es6/                 : 서버 JS의 소스코드 폴더, es6 코드 (node 컴파일러가 컴파일)
public/dist/         : 브라우저 JS의 배포파일 폴더, es5 코드 (브라우저 컴파일러가 컴파일)
public/es6/          : 브라우저 JS의 소스코드 폴더, es6 코드 (브라우저 컴파일러가 컴파일)
.gitignore           : git 관리 제외대상 설정 파일
README.md            : 프로젝트 정보, 디펜던시 설정 파일
package.json         : 프로젝트 설명 파일


gulp한테 시켜서 es6 폴더에 있는 ES6 코드 == 트랜스파일링 ==> ES5 코드로 변경 후 disc 폴더에 생성한다



### 순서

* git init : .git 파일 생성 됨
* npm init -y : package.json 파일 생성 됨
```
C:\Users\TopC-32457\Documents\naye\javascript\workspace\p64>npm init -y
Wrote to C:\Users\TopC-32457\Documents\naye\javascript\workspace\p64\package.json:

{
  "name": "p64",
  "version": "1.0.0",
  "description": ".git                 : git 저장소\r dist/                : 서버 JS의 배포파일 폴더, es5 코드 (node 컴 파일러가 컴파일)\r es6/                 : 서버 JS의 소스코드 폴더, es6 코드 (node 컴파일러가 컴파일)\r public/dist/         : 브라우저 JS의 배포파일 폴더, es5 코드 (브라우저 컴파일러가 컴파일)\r public/es6/          : 브라우저 JS의 소스코드 폴더, es6 코드 (브라우저 컴파일러가 컴파일)\r .gitignore           : git 관리 제외대상 설정 파일\r README.md            : 프로젝트 정보, 디펜던시 설정 파일\r package.json         : 프로젝트 설명 파일",
  "main": "gulpfile.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```
* npm install --save-dev babel-preset-es2015
```
C:\Users\TopC-32457\Documents\naye\javascript\workspace\p64>npm install --save-dev babel-preset-es2015
npm WARN deprecated babel-preset-es2015@6.24.1: 🙌  Thanks for using Babel: we recommend using babel-preset-env now: please read babeljs.io/env to update!
npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN p64@1.0.0 No repository field.

+ babel-preset-es2015@6.24.1
added 66 packages in 10.646s
```

* p64/.babelrc 파일 생성 (rc는 runtime configuration 약자)
```
{"presets":["es2015"]}
```

* p64/es6/test.js, p64/public/es6/test.js 파일 생성
```
'use strict';
const sentences = [
                  {subject:'JavaScript', verb:'is', object:'great'},
                  {subject: 'Elephants', verb: 'are', object: 'large'}
                  ];
function say({subject, verb, object}){
  console.log(`${subject} ${verb} ${object}`);
}
for(let s of sentences){
  say(s);
}
```

* gulp 설치
```
C:\Users\TopC-32457\Documents\naye\javascript\workspace\p64>npm install gulp
npm WARN deprecated gulp-util@3.0.8: gulp-util is deprecated - replace it, following the guidelines at https://medium.com/gulpjs/gulp-util-ca3b1f9f9ac5
npm WARN deprecated graceful-fs@3.0.11: please upgrade to graceful-fs 4 for compatibility with current and future versions of Node.js
npm WARN deprecated minimatch@2.0.10: Please update to minimatch 3.0.2 or higher to avoid a RegExp DoS issue
npm WARN deprecated minimatch@0.2.14: Please update to minimatch 3.0.2 or higher to avoid a RegExp DoS issue
npm WARN deprecated graceful-fs@1.2.3: please upgrade to graceful-fs 4 for compatibility with current and future versions of Node.js
npm WARN p64@1.0.0 No repository field.
+ gulp@3.9.1
added 244 packages in 20.124s
```

* npm install gulp [--save] save 옵션을 주었을 경우와 아닌경우 차이점
```
dependencies : 사용자에게 서비스 할 때 필요한 기능
devDependencies : 개발자가 개발 할 때 필요한 기능
```

* gulp 실행 -> gulp-bable 패키지가 없어서 에러 발생
```
C:\Users\TopC-32457\Documents\정나예\javascript\workspace\p64>gulp
C:\Users\TopC-32457\Documents\정나예\javascript\workspace\p64\gulpfile.js:2
const babel = requre('gulp-bable');
              ^
ReferenceError: requre is not defined
    at Object.<anonymous> (C:\Users\TopC-32457\Documents\정나예\javascript\workspace\p64\gulpfile.js:2:15)
    at Module._compile (module.js:652:30)
    at Object.Module._extensions..js (module.js:663:10)
    at Module.load (module.js:565:32)
    at tryModuleLoad (module.js:505:12)
    at Function.Module._load (module.js:497:3)
    at Module.require (module.js:596:17)
    at require (internal/module.js:11:18)
    at Liftoff.handleArguments (C:\Users\TopC-32457\AppData\Roaming\npm\node_modules\gulp\bin\gulp.js:116:3)
    at Liftoff.execute (C:\Users\TopC-32457\AppData\Roaming\npm\node_modules\gulp\node_modules\liftoff\index.js:203:12)
```

node_models 폴더 밑에 gulp-bable 패키지가 있는지 확인해서 없으면 아래와 같은 에러 발생
* npm install gulp-babel --save-dev
```
C:\Users\TopC-32457\Documents\정나예\javascript\workspace\p64>npm install gulp-babel --save-dev
npm WARN gulp-babel@8.0.0 requires a peer of @babel/core@^7.0.0 but none is installed. You must install peer dependencies yourself.
npm WARN p64@1.0.0 No repository field.
+ gulp-babel@8.0.0
added 5 packages in 3.443s
```

* gulp 실행 -> 에러 발생
```
C:\Users\TopC-32457\Documents\정나예\javascript\workspace\p64>gulp
C:\Users\TopC-32457\Documents\정나예\javascript\workspace\p64\gulpfile.js:2
const babel = requre('gulp-bable');
              ^
ReferenceError: requre is not defined
    at Object.<anonymous> (C:\Users\TopC-32457\Documents\정나예\javascript\workspace\p64\gulpfile.js:2:15)
    at Module._compile (module.js:652:30)
    at Object.Module._extensions..js (module.js:663:10)
    at Module.load (module.js:565:32)
    at tryModuleLoad (module.js:505:12)
    at Function.Module._load (module.js:497:3)
    at Module.require (module.js:596:17)
    at require (internal/module.js:11:18)
    at Liftoff.handleArguments (C:\Users\TopC-32457\AppData\Roaming\npm\node_modules\gulp\bin\gulp.js:116:3)
    at Liftoff.execute (C:\Users\TopC-32457\AppData\Roaming\npm\node_modules\gulp\node_modules\liftoff\index.js:203:12)
```

* @babel/core 패키지 설치
npm install --save-dev @babel/core
```
C:\Users\TopC-32457\Documents\정나예\javascript\workspace\p64>npm install --save-dev @babel/core
npm WARN p64@1.0.0 No repository field.
+ @babel/core@7.0.0
added 28 packages in 47.926s
```

* gulp 실행 -> 에러 발생
```
C:\Users\TopC-32457\Documents\정나예\javascript\workspace\p64>gulp
C:\Users\TopC-32457\Documents\정나예\javascript\workspace\p64\gulpfile.js:2
const babel = requre('gulp-bable');
              ^
ReferenceError: requre is not defined
    at Object.<anonymous> (C:\Users\TopC-32457\Documents\정나예\javascript\workspace\p64\gulpfile.js:2:15)
    at Module._compile (module.js:652:30)
    at Object.Module._extensions..js (module.js:663:10)
    at Module.load (module.js:565:32)
    at tryModuleLoad (module.js:505:12)
    at Function.Module._load (module.js:497:3)
    at Module.require (module.js:596:17)
    at require (internal/module.js:11:18)
    at Liftoff.handleArguments (C:\Users\TopC-32457\AppData\Roaming\npm\node_modules\gulp\bin\gulp.js:116:3)
    at Liftoff.execute (C:\Users\TopC-32457\AppData\Roaming\npm\node_modules\gulp\node_modules\liftoff\index.js:203:12)
```

npm WARN p64@1.0.0 No repository field. @babel/core@7.0.0 디펜던시 버전이 불일치하여 에러 발생
* package.json 디펜던시 버전을 수동으로 바꾼 다음 명령을 수행하면
  다시 재 설치 되거나 사용하지 않는 것이 삭제 됩니다.
* npm install
* gulp


학원 밴드 가입 신청
010-4059-2512 김장호 : 메세지로 이름 전송 >> 초대 메세지

learning javascript source code로 검색
