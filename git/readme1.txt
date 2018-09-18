1. 테스트로 파일 하나 생성 확인

$ ls

test.txt



2. git init 명령어로 git 레파지토리 생성

$ git init

Reinitialized existing Git repository in C:/Users/TopC-32457/Documents/정나예/git/work/.git/



3. git add 명령어를 통해서 index에 파일 추가

$ git add "test.txt"



4. git commit 명령어로 파일 commit

$ git commit -m "test.txt"

[master (root-commit) dbe0200] test.txt

 1 file changed, 4 insertions(+)

 create mode 100644 test.txt



5. git 상태 조회

$ git status

On branch master

nothing to commit, working tree clean



6. git branch 확인

$ git branch --all

* master



7. 파일 수정

$ vi test.txt





8. git 상태 조회

$ git status

On branch master

Changes not staged for commit:

  (use "git add <file>..." to update what will be committed)

  (use "git checkout -- <file>..." to discard changes in working directory)



        modified:   test.txt



no changes added to commit (use "git add" and/or "git commit -a")



9. git add 명령어로 파일 index에 추가

$ git add test.txt





10. git commit 명령어로 파일 commit

$ git commit -m "test.txt"

[master e5f5555] test.txt

 1 file changed, 4 insertions(+)





11. git branch 명령어로 bugfix branch 생성

$ git branch bugfix





12. git checkout 명령어로 bugfix 브랜치로 이동

$ git checkout bugfix

Switched to branch 'bugfix'





13. bugfix 브랜치로 이동되었는지 확인

$ git branch --all

* bugfix

  master





14. bugfix 브랜치 안에서 파일 수정

$ vi test.txt





15. git add 명령어로 파일 index에 추가

$ git add test.txt





16. git commit 명령어로 파일 commit

$ git commit -m "test.txt"

[master e5f5555] test.txt

 1 file changed, 4 insertions(+)





17. master 브랜치로 이동

$ git checkout master

Switched to branch 'master'





18. bugfix 브랜치에 있는 내용을 master로 병합하기

$ git merge bugfix

Updating e5f5555..fe69d48

Fast-forward

 test.txt | 103 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++----

 1 file changed, 97 insertions(+), 6 deletions(-)



19. git commit된 현재 상태 보기

$ gitk





20. 모든 브랜치 로그 보기

$ git log --pretty=oneline

bb71109e8894542fad088528039cd70758b8bc71 (HEAD -> bugfix) add body

6f2f70765000eaafa11c08659895d81c58f207da add head

25e60d4d383d14f32e2be1d8811e101ef6607b53 (master) add html

c7be8b5674bbdc9e7887f93452d8034b73cd431d frist commit!!!
