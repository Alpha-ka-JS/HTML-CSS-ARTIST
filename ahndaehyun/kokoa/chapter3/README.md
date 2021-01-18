### Chapter 3.0

어떻게 CSS를 HTML페이지에 추가할 수 있는 두 가지 방법

    1. 같은 HTML 파일에 HTML 코드와 CSS 코드를 놓는 방법
    2. CSS와 HTML을 분리시키는 방법(많이 쓰임)

이번 강의에서는 CSS와 HTML을 같은 파일에 두는 방법을 해볼 것임

HTML에 CSS를 추가하는 첫 번째 방법:  
head 태그 안에 style 태그를 만들어서 그 태그 안에 CSS 코드를 넣어줌

두번째 방법:  
파일명.css 파일을 만들어서 link 태그를 이용해서 파일을 연결함 (href attribute를 통해)

```html
<link href="ex.css" rel="stylesheet" />

```

---

### Chapter 3.1

CSS에서 세 가지 규칙을 아면 됨

첫 번째로, CSS가 하는 일은 HTML 태그를 가리키는 것임 (색깔은 파란색이고, 크기는 몇이다)

```css
selector {
    property1:value1;
    property2:value2;
}
```

주의: property명에서는 띄어쓰기나 \_, / 모두 사용하면 안되고 -를 사용해야 함  
ex) font-size

```html
  <head>
    <title>Home - My first website.</title>
    <style>
      h1 {
        color: blue;
        font-size: 20px;
        text-decoration: underline;
        font-weight: 200;
        font-style: italic
      }
    </style>
  </head>
```

---

### Chapter 3.2

CSS(Cascading Style Sheet)가 의미하는 것은 위에서부터 아래로 순서대로 코드를 읽어냄

---

### Chapter 3.3

CSS 매우 중요한 box에 대해 배움  
웹사이트는 엄청 많은 box들로 이루어져 있음

box(div, header, footer, main)들은 그 옆에 아무것도 오지 않음  
그러나 span,a,image(box가 아닌 것)같은 것들은 그 옆에 나란히 존재함

이처럼 옆에 다른 요소가 못 오는 걸 block(box) 이라고 하고,
같은 줄에 존재할 수 있는 것들을 inline이라고 함 (inline에 해당하는 것은 별로 없음)

---

### Chapter 3.4

block만 가지고 있는 특징(inline에는 없는 특징):  
높이와 너비를 가지고 있고 가장 중요한 margin, border, padding 속성을 가지고 있다는 것임  
margin: box의 border(경계)의 바깥에 있는 공간 default로 8px를 가지고 있음  
border:

```css
body{
    margin:0;
    margin-left:50px;
}
```

를하면 margin이 사라짐

inline은 높이와 너비가 없다.  
block을 inline으로, inline을 block으로 바꾸는 것도 가능하다.

```css
    div{
        display:inline;
    }

      span {
        display:block;
        background-color: teal;
      }
```

---

### Chapter 3.5

margin: 20px,15px  
를하면 20px는 위,아래 15px는 왼쪽, 오른쪽에 해당하는 값을 넣어줌  
margin: 20px 5px 12px 9px;  
를하면 위 오른쪽 아래 왼쪽 순으로 값을 넣어줌

Collapsing margins현상이라는게 있음  
두 개의 box의 경계가 같다면 두 margin은 하나로 취급이 된다. (위, 아래쪽에서만 일어남)

이러한 문제 때문에 padding이 나옴

---

### Chapter 3.6

padding: margin과 반대개념, box의 경계로부터 '안쪽'에 있는 공간

CSS에서도 id를 적용할 수 있음

html 태그에서 id="first"가 있으면, CSS코드에서 이 아이디를 #id로 가리킬 수 있음

ex) div<id="first"> 이면  
#first{
내용
}  
이런식으로

---

### Chapter 3.7

border는 말그대로 block의 경계임
border은 많은 property가 있음  
여러종류가 있지만 한 종류의 특성만 쓸 것임  
border-style mdn 사이트 가서 style 옵션을 볼 수 있음

border: 2px solid black -> 검은색 실선으로 border를 채움

border: 2px dashed black -> 검은색 점선

```css
*{

}
```

\*은 모든 것들을 적용한다는 의미  
border는 inline에서 적용이 된다.
그럼 margin과 padding에서는 적용이 될까?? 3.8에서 계속...

---

### Chapter 3.8

inline에서 padding은 상하좌우 모두 적용되지만  
margin은 좌우로만 적용됨

#tomato => id="tomato"  
.tomato => class="tomato"
class는 많은 요소를 가질 수 있음(class="tomato aa dd nmae")

```
<span class="tomato">
```

이렇게 되어있으면 CSS에서

```css
.tomato{
  background-color:"tomato"
}
```

로 모든 class에 같은 표현 가능

---

### Chapter 3.9

display:inline-block;  
inline을 block으로 인식하게 해줌  
inline-block은 안좋음, 매우매우 많은 문제가 있음 (반응형 디자인 지원하지 않아 창 크기가 달라지면 영향을 받음)

---

### Chapter 3.10

flexbox: inline-block의 대안
flexbox를 사용할 때 세가지 규칙이 있음

display:flex
justify-content:center  
justify-content:space-evenly  
justify-content:flex-start  
height: 100vh -> 100viewpoint height 우리 모니터에 보여지는 100% 크기

align-items는 교차축에 적용되는 것이고, justify-content는 주축에 적용되는 것임  
주축은 수평으로 디폴트가 설정되어 있고 교차축은 수직으로 설정되어 있지만 이걸 바꿀 수 있음

1. 자식 엘리먼트에는 어떤 것도 적지 말아야 됨, 부모 엘리먼트에만 명시해야 함
2. 주축(main axis): 수평, 교차축(cross axis): 수직 가 있음 이것들을 사용하기 위해서는 display: flex를 해줘야함

---

### Chapter 3.11

flex-direction으로 주축을 수직으로 바꿀 수 있음
default가 row임(수평)
column으로 하면 수직으로 바뀜

flex-wrap:wrap

---

### Chapter 3.12

fixed: 위치를 고정시키는 것

position:fixed; <- 스크롤하더라도 위치가 고정되는 것

top(bottom, left, right): 5px; 로 하면 위에서부터 5px 떨어진 거리에 그릴 수 있음 (서로 다른 레이어에 위치시킴)

```css
div {
        width: 300px;
        height: 300px;
        background-color: teal;
      }
      #green {
        position: fixed;
        opacity: 0.2;
      }

      #different {
        background-color: wheat;
      }

```

---

### Chapter 3.13

position: static, fixed, absolute, relative

position: static은 default값임

position: relative -> 오른쪽, 왼쪽, 위, 아래로 아주 조금만 옮기는 것  
element가 처음 위치한 곳을 기준으로 위치를 이동하는 것

```css
      .green {
        position: relative;
        top: -10px;
        left: -10px;
        background-color: teal;
        height: 100px;
        width: 100px;

```

position: absolute는 top left bottom right를 쓰고싶을 때 사용할 수 있는데 좀 특이함
absolute는 가장 가까운 relative 부모를 기준으로 이동시켜줌

```html
  <body>
    <div>
      <div class="green"></div>
    </div>
  </body>
```

green이 absolute일 때
여기서 부모 div는 relative가 아님 그래서 body가 relative한 부모가 되어버림

부모를 기준으로 옮기고 싶다면 부모(div)에 position: relative를 해줘야함

---

### Chapter 3.14

Pseudo Selectors part One

Pseudo Selectors: 좀더 세부적으로 엘리먼트를 선택해주는 것

3가지 방법이 잇음

1. body처럼 태그의 이름만 쓰거나
2. .처럼 클래스로 쓰거나
3. #처럼 id를 쓰거나

엘리먼트 선택을 조금 다른 방식으로 하는 법
div:last-child,
div:first-child  
span:nth-child(2),nth-child(4) -> 2,4번째 자식  
span:nth-child(even) -> 짝수번째 자식  
span:nth-child(3n+1) -> 1,4,7,10...

(이방법이 좋은 이유가 css에서 모든 코드를 작성할 수 있음)

예를들어서 마지막 자식만 teal색으로 바꿔주고 싶을 때

```html
      div:last-child {
        background-color: teal;
      }
    </style>
  </head>

  <body>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>h
```

---

###Chapter 3.15

Combinators: 자식 형제관계

```css
p span{
  color:teal
}
```

p span: p 안에 있는 자식들 중 span 모두 변형

```css
p > span{
  color:teal
}cs
```

div > span: div 바로 밑에 있는 span 자식만 변형

```css
p + span{
  color:teal
}
```

p + span: p바로 다음으로 오는 span(형제)만 변형

```css
p ~ span{
  color:teal
}
```

p ~ span: span이 p의 형제인데 바로 뒤제 오지 않는 형제일때

---

### Chapter 3.16

more pseudo selectors

attribute selectors: attribute를 통해 어떤 것이든 selector로 선택할 수 있음 (구글링으로 찾아보자)

```css
<form>
  <input type="text" placeholder="username" />
  <input type="text" required placeholder="password" />
</form>

input: required or optional{
  border: 1px solid tomato;
}
```

```css
input[type="password"]{
  background-color:thistle;
}

input[placeholder="username"]{
  background-color:teal;
}

```

input[placeholder~="name"]: name을 포함하는 placeholder 선택  
~=: 어떤 것을 포함하고 있다

---

### Chapter3.17

States: active, hover, focus, visited, focus-within

active: 버튼을 누르고 있을 때 특징 나타나게 하는 것  
hover: 마우스가 대상 위에 올라가 있을 때 특징을 나타나게 하는 것  
focus: focus는 마우스뿐만 아니라 키보드로 선택되었을 때에도 특징이 나타남  
visited: 링크(a href)에만 적용됨( 링크가 이전에 방문한적 있는지 없는지 알려주는 것 )  
focus-within: 부모에 적용됨, focused인 자식을 가진 부모 엘리먼트의 상태를 말함  
-> 자식이 focused(선택) 되면 focus-within을 가진 부모에게서 특징이 나타남

state를 다른 엘리먼트와 연계해서 사용할 수도 있음

```css
form:hover input: focus{
  background-color:tomato;
}
```

form이 hover이고 input이 focus 되면 배경이 토마토색으로 바뀜 -> 이거 엄청 많이쓰고 중요함
