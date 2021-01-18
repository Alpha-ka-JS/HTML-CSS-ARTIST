### Chapter 6.0

클론수업

.gitignore은 깃허브에서 무시하고 싶은 파일 저장해주는 공간

.DS_Store
/folder

보통 `index.html`로 첫 페이지 코드를 작성함

초기 HTML 코드 세팅(head랑 바디 등): !누르고 엔터

---

### Chapter 6.2

부모 class  
자식 class\_\_name 이런식으로 코드를 작성하는게 좋음
BEM(Block Element Modifier)

---

### Chapter 6.3

Icon 얻는 방법

1. Heroicons을 통해서 아이콘을 얻을 수 있음
2. FontAwesome의 키트코드 복사해서 내가 작업하고 있는 파일에서 </body> 바로 앞에 작성해고 fontawesome가서 아이콘 찾아봄

```html
<script src="코드키트주소" crossorigin="anonymous"></script>
```

googlefonts에서 많은 폰트들을 추가할 수 있음

justify-content: space-between 말고 컨텐츠 하나를 센터에 정확하게 놓아주는 것이 있는데, 이걸 CSS Hack이라하고 따로 공부해보기  


---

### Chapter 6.6

form의 기능은 아주 강력함

action은 어떤 페이지로 data를 보낼건지 지정할 수 있음(friends 페이지로 데이터 보낼거임 우리는)  
method는 두가지 방식중 하나는 POST이고 하나는 GET임

POST는 서버를 가지고 있어야함 get방식은 보안에 취약함(아이디나 비밀번호로 보내면 절대안됨)
