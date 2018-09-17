

### 1. npm babel 패키지 설치
```
C:\Users\TopC-32457\Documents\naye\data\angularJS\ecma>npm init -y
Wrote to C:\Users\TopC-32457\Documents\naye\data\angularJS\ecma\package.json:

{
  "name": "ecma",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}

C:\Users\TopC-32457\Documents\naye\data\angularJS\ecma>npm install --save-dev babel-preset-env
npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN ecma@1.0.0 No description
npm WARN ecma@1.0.0 No repository field.

+ babel-preset-env@1.7.0
added 78 packages in 47.655s
```

### 2. atom language-babel 설치
```
File > Settings > Install >  type 'language-babel' in search box and enter > Install
```

### 3. atom language-babel 설정
```
File > Settings > Install > language-babel을 아래와 같이 설정
Allow Local Override
Transpile On Save (checked)
Create Transpiled Code (checked)
Disable When No Babelrc File In Path (checked)s
Suppress Source Path Messages (checked)
Babel Maps Add Url (checked)
Suppress Transpile On Save Messages (unchecked) --> 이건 unchecked
```

### 4. babelrc 파일 작성
```
{
  "only": ["*.jsx", "*.es6"],
  "presets": ["env"]
}
```

### 5. src 폴더 아래에 ECMS6 문법을 사용하여 작성 후 확장자를 *.es6으로 저장하면 *.js파일이 생성 됨
