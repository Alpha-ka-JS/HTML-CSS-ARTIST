# 3주차 회고록 ( 3.12 ~ 3.17 )
## 20-08-30 .. Start !
- 잠만 잔 나날들 반성합니당..

## 피드백과 도전
### 1. 실습하기
> 실습을 같이 해보았습니다.
> 
> 영상이랑 똑같이 했는데 왜 안되지 ㅇㅅㅇ 같은 경우가 몇 번 있었습니다.. ! **( 실습의 중요성 )**
> 
> 그 밖에, 이게 되면 저것도 될거 같은데 중에 안되는 것도 있었습니다. `(keyword : not work)`

#### a. chapter 3.12 ~ 3.13
> KEY : **position**

> #### position : fixed; 
> 스크롤을 해도 박스의 위치가 바뀌지 않음 

![](https://i.imgur.com/sJZ8AcZ.png)

#### case 1.
> top, right, bottom, left 중 하나라도 값이 있으면 서로 다른 layer 가 된다 .. ! 

```css
        div {
            width : 300px;
            height : 300px;
            color : white;
            background-color:teal;
        }
        #different{
            position :fixed;
            top : 5px;
            background-color:wheat;
        }
```

#### case 2.
> position : fixed 인 경우, heigth 와 witdh 를 정의해주어야 함 
> 값이 지정되지 않을 경우, 0 이 되어 box 가 보이지 않는다! 

```css
<!-- width 가 0 이 되어 box 가 보이지 않습니당  -->
        div {
            height : 300px;
            color : white;
            background-color:teal;
        }
        #different{
            position :fixed;
            top : 5px;
            background-color:wheat;
        }
```

---


> #### position : static;
> default value 
> 

---
> #### position : relative;
> box를 아주 조금씩만 움직이고 싶을 때 
> 

#### b. chapter 3.14 ~ 3.15
> KEY : **Pseudo Selector**
> 
```css
div:first-child{
    background-color:tomado;
}

div:last-child{
    background-color:teal;
}

div:nth-child(2){
    background-color:red;
}

<!-- 1, 4, 7, ... -->
div:nth-child(3n+1){
    background-color:pink;
}
```
---
case2. last-child, 2n+1  
> 아래 코드에서는 div:last-child 와 xn+y 만 동작합니다.
```html
    <h3> Pseudo Selectors : 좀 더 세부적으로 element 선택 해주는 것 </h3>
    <h4> 현재까지 배운 selector</h4>
    <div class="learned-list"> 
        <li> tag 이름을 쓰는 것 </li>
        <li> 클래스의 이름을 사용하는 것 eg. #green </li>
        <li> id 를 사용하는 것 eg. .green </li>
    </div>

    <h4> Pseudo Selectors </h4>
    <div class="learned-list"> 
        <li> 특정한 element 를 선택하고 싶을 때 </li>
    </div>

    <div></div>
    <div></div>
    <div></div>
    <div></div>
```
---
case3. how to change color of the span in the p

> 아래 화면에서 `time flies`의 색깔만 바꾸고 싶다면 어떻게 해야할까요? 

![](https://i.imgur.com/q7RkC5r.png)

``` html
   <style>
        body {
            height : 2000vh;
            margin:50px;
        }

        span {
            color : tomato;
        }
        
        p span {
            color : pink;
        }
    </style>
```
> !!! **children selector** 
> 
![](https://i.imgur.com/rAI3YpP.png)

> header p span || header body p span 은 not working 
> `구조적으로 존재하지 않는 것`은 적용되지 않음 
> 


---
case 4. direct-children
```css
div > p {
    background-color : green;
}
```
--- 
case 5. parallel
```css
div + p {
    background-color : green;
}

```
---
case6. **not working**
```css
        p + span {
            color : white;
        }

        div > p > span + div {
            background-color : red
        }
```
```html
  <div>
        <span> tomorrow is monday...</span>
        <p> oh... no... please...
            <span> time flies</span> 
            <div> chicken </div>
        </p>
        <span> tomorrow is monday...</span>
    </div>
  </body>
```
case7. working

```css
        p + span {
            color : white;
        }

        div > p > span + span {
            background-color : red
        }
```
```html
  <div>
        <span> tomorrow is monday...</span>
        <p> oh... no... please...
            <span> time flies</span> 
            <span> chicken </span>
        </p>
        <span> tomorrow is monday...</span>
    </div>
  </body>
```

case 8. tilde 
> 수평관계의 tag 들을 선택해주는데.. 기대와 같이 동작하지는 않음
> 기대 동작 : 마지막 `tomorrow is monday` 의 색깔만 바뀌는 것

![](https://i.imgur.com/pE5k8FU.png)

```css
        p + span {
            color : white;
        }

        div > p  ~ span {
            background-color : red
        }
```
```html
 <div>
        <span> tomorrow is monday...</span>
        <p> oh... no... please...
            <span> time flies</span> 
            <p> hi</p>
            <span> chicken </span>
        </p>
        <span> tomorrow is monday...</span>
    </div>
```
---
#### c. chapter 3.16


> KEY : **attribute-selector**
> 
case 1 : input:optional, input:required
```css
        input:optional{
          border: 1px solid wheat;
        }
        input:required{
          border:1px solid tomato;
        }
```
case 2 : input[type="password"]
![](https://i.imgur.com/RgPgWMs.png)

```css
        input[type="password"] {
          background-color : thistle;
        }

        input[placeholder="username"] {
          background-color : red;
        }
```
case 3 : input[placeholder~="name"]
> placeholder 에 name이 포함되어 있는 것들을 선택
> :clap: :clap: :clap: 신기..! 
> 대소문자 구분을 하는군용
```css
input[placeholder~="name"] {
          background-color : red;
        }
```

> case 4 : 더 많은 Attribute Selector !  
> https://developer.mozilla.org/ko/docs/Web/CSS/Attribute_selectors
> 접두사, 접미사, href 등에 따라 css 를 다르게 줄 수 있다니 ~!
> 

---
#### 3.17 state
![](https://i.imgur.com/88Hj2ro.png)

case a : button:active
> button **클릭** 시 
```css
  button:active{
          background-color:pink;
        }
```

case b : button:hover
> button **mouse over** 시 
```css
  button:hover{
          background-color:pink;
        }
```

case c : input:focus
>  **keyboard focus** 시

```css
  input:focus{
          background-color:red;
        }
```

case d : a:visited
>  **link click** 시

```css
  a:visited{
          color:red;
        }
```



## 결과
목표 진도의 반도 못했습니다. 주르륵.. 
그래도 아예 안들은 건 아니라 위로해보지만,, 
열심히 따라 잡아서 고오급 css 도 도전할 수 있길 바라봅니당 !! 

## 이후 진행
- 10시 30분 안에는 퇴근하기
- 퇴근 후 한 강씩 듣기 

퇴근 후 한 강씩 듣는 것을 해보아야겠어요. 더도 말고 덜도 말고 한 강씩..! 이번주도 스터디 덕에 조금 했습니당. 감사합니다. :smile_cat: 
 

### a. 유지할 것 - 메모하기, 실습하기
### b. 개선할 것 - 꾸준히 듣기
