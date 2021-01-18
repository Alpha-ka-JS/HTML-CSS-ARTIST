# 2일차

### Chapter 2.0

파일명과 폴더명은 **항상** 소문자로 만들어 줘야함
코드 작성하고 저장 습관화 (O표시가 되어있으면 저장이 안된거임)

---

### Chapter 2.1

VSC 확장프로그램

community material theme (테마 색 확장)  
community material icon (icon 확장)

브라우저는 HTML에게 오류가 있다고 말해주지 않음  
오류가 있어도 실행은 됨

---

### Chapter 2.2

<태그>내용</태그>
<태그>는 title, image, link 등 어떤 구조인지 알려줌  
내용은 그러한 태그가 갖는 내용  
/는 tag를 닫음을 나타냄

ex)
`<name>daehyun</name>`

`<h1>Hello this is my website!</h1>`
-> h1은 header number 1을 의미

h1~h6까지 존재함

---

### Chapter 2.3

list는 order list와 unordered list가 존재함

`<ul>` : unordered list

```html
<ul>
    <li>beer</li>
    <li>milk</li>
    <li>meat</li>
</ul>
```

li는 list item

`<ol>`: ordered list
ul을 ol로만 바꿔주면 됨 (1,2,3,4 ... 으로 순서가 생김)

실수를 저지를때마다 실수를 고쳐주는 확장프로그램: prettier

    prettier 적용 안되는 분들 방법.
    solution for who can't operate prettier .
    
    VSC html탭 (코드 작성하는 탭) 가서
    go to html tab ( where you write code tab)
    
    F1 혹은 cmd+shift+p을 누르고 >Format Document with... >Configure Default Formatter... > Prettier...... 하면 됩니다.
    press F1 or cmd+shift+p > Format Document with... > Configure Default Formatter... > Prettier...... > then your VSC will operate.

### Chapter2.4

`<a>` -> anchor: 다른 웹사이트로 이동하는 방법  
태그에 추가하는 부가적인 정보를 attributes(속성)이라고 함

ex)
`<a herf="http://google.com" target="_self">` : href는 http reference라는 attribute  
만약 target="\_blank" 면 다른탭에서 사이트가 열림

---

### Chapter 2.5

`<img src="이미지주소(이미지파일이름)" />` : image는 self closing tag, jpg파일이면 jpg로 통일시켜줘야 함

HTML의 구조를 작성하는 방법이 있음

`<!DOCTYPE html>` 를 항상 첫번째 라인에서 시작해줘야함 (규칙임)  
-> 브라우저에게 이건 text파일이 아니라 html 문서라고 알려주는 것임

html(lang="en", or lang="kr") 태그 사이에 넣는게 html 코드가 되는 것임, 그 안에서 head태그와 body 태그로 나뉨  
head 파트에서는 웹사이트의 환경을 설정함(외부적으로 보이지 않는 것 설정)  
body 파트엣는 사용자가 볼수있는 설정을 만들어줌

### Chapter 2.6

`<meta>`
`<og:image>`
와같은 많은 태그들이 있는데 다양한 태그들을 보고 공부하고 싶으면 "html tags mdn"을 검색  
꼭 맨뒤에 mdn을 붙여서 검색할 것!, mdn을 안붙이면 w3school이라는 사이트가 나오는데 절대 이용하지 말것

---

### Chapter 2.7

태그들은 너무 많아서 다 외우는 것이 불가능
`<mark>`: 색깔로 채워줌
`<Strong>`: 두껍게, sub는 글자를 아래에, sup는 글자를 위에(2의 5승 같은거할때 유용)  
같은 글자 수정할 때는 드래그하고 Control + D 하고 수정하면 됨

` <audio controls="enabled" autoplay="enabled" src="주소"></audio>`: 오디오 넣음

---

### Chapter 2.8

form태그!

input태그:

```html
  <body>
    <form>
      <input type="file" accpet=".pdf" />
      <input required placeholder="Name" type="text" />
      <input required placeholder="Last Name" disabled type="ctext" />
      <input required placeholder="Username" type="text" />
      <input required placeholder="Password" minlength="10" type="password" />
      <input type="submit" value="Create Account" />
    </form>
  </body>
</html>
```

---

### Chapter 2.9

`<label for="profile"> First Name</label>`
label은 for으로 id를 지정한 곳에 연결해주는 것
body 태그에서는 모두 id라는 attribute를 가질 수 있음, 태그는 하나의 id만을 가짐(unique)  
CSS에서 웹사이트를 꾸밀 수 있는 이유가 id덕분임

---

### Chapter 2.10

어떤 태그들은 의미가 있고(semantic tag) 어떤 태그들은 의미가 없음
의미없는 태그: `<div>` div를 박스라고 생각해도 됨
박스들은 양옆에 붙어있을 수 없음

div와 달리 `<header>` `<main>` `<footer>`는 div(박스기능)를 대체하면서 의미를 부여할 수 있음  
`<div id="header">`로 써도 되긴함 근데 가독성이 안좋음

`<span>`: 짧은 텍스트 `<p>`: 긴 텍스트(문단) 는 non-semantic code
