npm install <설치대상프로그램> -<옵션>

-g: 설치대상프로그램을 전역적으로 설치하라. 나중에 콘솔에 해당 프로그램을 사용할 수 있게 된다.



### npm 명령어로 프로그램 설치 하는 명령어

```

npm install http-server -g

npm install -g http-server

npm i -g http-server

```



### http-server 설치하기

* npm i -g http-server

```

C:\Users\TopC-32457>npm i -g http-server

[       ...........] / extract:http-server: verb lock using C:\Users\TopC-32457\AppData\Ro

C:\Users\TopC-32457\AppData\Roaming\npm\http-server -> C:\Users\TopC-32457\AppData\Roaming\npm\node_modules\http-server\bin\http-server

+ http-server@0.11.1

added 25 packages in 43.783s

```





### http-server

* http-server로 서버를 띄운 후 http://192.168.0.201:8080 웹 페이지를 띄우면 index.html 페이지를 띄워준다.

```

C:\Users\TopC-32457\Documents\정나예\javascript\workspace\p60>http-server

Starting up http-server, serving ./

Available on:

  http://192.168.0.201:8080

  http://127.0.0.1:8080

Hit CTRL-C to stop the server

```





### npm init

package.json 파일은 프로젝트 설명, 저자, 라이센스, 원격저장소, 단축명령, 디펜던시 정보를 관리하는 파일입니다.(즉 프로젝트 정보 가지고 있는 파일)

노드 기반의 프로젝트에서 주로 사용합니다.

```

C:\Users\TopC-32457\Documents\정나예\javascript\workspace\p60>npm init

This utility will walk you through creating a package.json file.

It only covers the most common items, and tries to guess sensible defaults.

See `npm help json` for definitive documentation on these fields

and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and

save it as a dependency in the package.json file.

Press ^C at any time to quit.

package name: (p60)

version: (1.0.0)

description:

entry point: (index.js)

test command:

git repository:

keywords:

author: Jung Na Ye

license: (ISC) MIT

About to write to C:\Users\TopC-32457\Documents\정나예\javascript\workspace\p60\package.json:

{

  "name": "p60",

  "version": "1.0.0",

  "description": "npm install <설치대상프로그램> -<옵션>\r -g: 설치대상프로그램을 전역적으로 설치하라. 나중에 콘솔에 해 당 프로그램을 사용할 수 있게 된다.",

  "main": "index.js",

  "scripts": {

    "test": "echo \"Error: no test specified\" && exit 1"

  },

  "author": "Jung Na Ye",

  "license": "MIT"

}

Is this ok? (yes) y

```





### npm install underscore

-g 옵션이 없으므로 컴퓨터당 하나의 설치대상 프로그램을 설치하는 것이 아니라 커서가 위치한

  폴더 밑으로 해당 프로그램을 설치합니다. (즉 프로젝트당 하나 설치)

  자동으로 node_modules 폴더 밑으로 설치가 됩니다.

```

C:\Users\TopC-32457\Documents\정나예\javascript\workspace\p60>npm install underscore

npm notice created a lockfile as package-lock.json. You should commit this file.

npm WARN p60@1.0.0 No repository field.

+ underscore@1.9.1

```



* underscore 패키지를 설치를 하면 package.json 파일에 패키지에 대한 버전 정보가 추가 됩니다.

```

"dependencies": {

  "underscore": "^1.9.1"

}

```
