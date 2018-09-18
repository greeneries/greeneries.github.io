

### atom-typescript 패키지 설치 (atom_configuration.pdf 4.1 파일 참고 )
```
File > Settings > Install >
type 'atom-typescript' in search box and enter > Install
type 'eslint' in search box and enter > Install
```

### tsconfig.json 파일 생성 후 아래 내용 입력
filesGlob에 있는 경로 꼭 맞게 확인할 것
```
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "sourceMap": true,
    "suppressImplicitAnyIndexErrors": true
  },
  "compileOnSave": true,
  "buildOnSave": false,
  "exclude": ["node_modules"],
  "filesGlob": ["src/**/*.ts", "typings/index.d.ts"],
  "atom": {
    "rewriteTsconfig": false
  }
}
```

### ts 파일 생성 후 저장
typescript 문법에 맞게 작성 후 저장 하면 hamburger.js 파일이 자동으로 생성됨.(hamburger.ts -> hamburger.js)
```
var burger: string = 'hamburger',     // String
    calories: number = 300,           // Numeric
    tasty: boolean = true;            // Boolean
// Alternatively, you can omit the type declaration:
// var burger = 'hamburger';
// The function expects a string and an integer.
// It doesn't return anything so the type of the function itself is void.
function speak(food: string, energy: number): void {
  console.log("Our " + food + " has " + energy + " calories.");
}
//var result = add();
speak(burger, calories);
```

### 아래와 같이 파일이 생성 되면 정상
```
type(폴더)
 |-  src(폴더)
   |-  hamburger.js       <--- javascript 문법에 맞게 hamburger.js 파일이 생성 됨
   |-  hamburger.map
   |_  hamburger.ts
 tsconfig.json
```

### typescript 문법 설명
```
https://tutorialzine.com/2016/07/learn-typescript-in-30-minutes
```

### atom으로 개발 시 아래 tool 설치 필요
```
https://atom.io/packages/atom-typescript
```
