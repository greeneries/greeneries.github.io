1. 현재 브랜치가 master인지 확인
$ git branch --all
  issue2
  issue3
* master


2. issue2 브랜치 병합 -> 충돌
$ git merge issue2
Auto-merging myfile.txt
CONFLICT (content): Merge conflict in myfile.txt
Automatic merge failed; fix conflicts and then commit the result.


3. 직접 파일 열어서 충돌난 부분 해결한 후 저장
$ vi myfile.txt



4. index에 파일 추가
$ git add myfile.txt



5. git commit
$ git commit -m "충돌 해결"



6. issue2 브랜치로 이동
$ git checkout issue2



7. master 브랜치에 있는 source 가져오기
$  git rebase master
First, rewinding head to replay your work on top of it...
Fast-forwarded issue2 to master.
