https://www.thinkful.com/learn/a-guide-to-using-github-pages/start/new-project/user-page/



< 최초 Github에 올리기 >
$ git remote add origin https://github.com/jungnaye/elindreams.github.io.git



$ git push -u origin master
Enumerating objects: 385, done.
Counting objects: 100% (385/385), done.
Delta compression using up to 8 threads.
Compressing objects: 100% (384/384), done.
Writing objects: 100% (385/385), 2.72 MiB | 339.00 KiB/s, done.
Total 385 (delta 151), reused 0 (delta 0)
remote: Resolving deltas: 100% (151/151), done.
To https://github.com/jungnaye/elindreams.github.io.git
 * [new branch]      master -> master
Branch 'master' set up to track remote branch 'master' from 'origin'.


---------------------------------------------------------------------------------

이후에 파일을 넣었을 경우 아래 명령어만 하면 됨.
$ git push -u origin master

** 아래와 같이 에러 발생시 git ID:git Password 입력하여서 해결
참고 URL : https://github.com/naver/yobi/issues/786
<에러 내용>
remote: Permission to greeneries/greeneries.github.io.git denied to XXXXX.
fatal: unable to access 'https://github.com/greeneries/greeneries.github.io.git/': The requeste



<명령어>
$ git push https://greeneries:elin0827@github.com/greeneries/greeneries.github.io.git
