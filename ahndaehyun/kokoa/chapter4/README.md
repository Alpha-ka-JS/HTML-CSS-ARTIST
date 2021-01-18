### Chapter 4.0

animation, transition, transformation에 대해서 배울 것임

transition: 어떤 상태에서 다른 상태로의 변화, state가 없는 쪽에 써야함

```css
      a {
        color: wheat;
        background-color: tomato;
        text-decoration: none;
        padding: 3px 5px;
        border-radius: 5px;
        font-size:55px;
        transition: background-color 10s ease-in-out, color 5s ease-in-out
      }
      a:hover {
        color: tomato;
        background-color: wheat;
      }
```

background-color를 10초동안 바꿔줌, color를 5초동안 바꿔줌  
transition: all로 쓸수 있음 (바뀔 수 있는 모든 것을 바꿔줌)  
변화시키려는 property는 무조건 state에도 써야함, 그리고 state에 transition을 넣어주는 것이 아니고 원래 element에 적어야함

---

### Chapter 4.1

css easing function을 구글링해서 사이트를 보면 애니메이션 변화 속도를 어떻게 정해줄지 알 수 있음

ease-in(점점빨라짐), linear(등속도), ease-out(점점 느려짐)

---

### Chapter 4.2

Transformation은 css로 3D까지 가능

```css
      img {
        border: 5px solid black;
        border-radius: 50%;
        transform: rotateY(90deg) rotateX(20deg) rotateZ(10deg);
      }
```

rotate말고도 엄청 많은 transformation을 가지고 있음  
scaleY(4): y축으로 4배 크게 만들어줌  
scale(2,2): x,y 모두 2배  
translateX(-20): x축으로 왼쪽 20px 이동

transformation은 3D이기 때문에 옆에 뭐가 있든 상관없이 움직일 수 있음(box element에 영향을 끼치지 않음 매우매우 중요)  
여러개를 조합할수도 있음 (transition과도 결합 가능)

```css
      img {
        border: 5px solid black;
        border-radius: 50%;
        transition: transform 5s ease-in-out;
      }
      img:hover{
        transform:rotateZ(90deg);
      }
```

transform mdn을 쳐서 사이트 들어가면 훨씬더 많은 애니메이션 볼수있음

---

### Chapter 4.3

계속 반복되는 애니메이션을 가질려면?

```css
     @keyframes superSexyCoinFlip {
        from {
          transform: rotateX(0);
        }
        to {
          transform: rotateX(360deg);
        }
      }

      img {
        border: 5px solid black;
        border-radius: 50%;
        animation: superSexyCoinFlip 5s ease-in-out infinite;
      }
```

---

### Chapter 4.4

```css
      @keyframes superSexyCoinFlip {
        0% {
          transform: rotateY(0);
        }
        50% {
          transform: rotateY(180deg) translateY(-180px);
        }

        100% {
          tansform: rotateY(0);
        }
      }

      img {
        border: 5px solid black;
        border-radius: 50%;
        width: 200px;
        animation: superSexyCoinFlip 5s ease-in-out infinite;
      }
```

css animations에서 애니메이션 엄청 많이 볼 수 있음

---

### Chapter 4.5

media query: 예를 들어 가로모드랑 세로모드에 따라 css를 다르게 설정하고 싶을 때

```css
@media screen and (max-width: 700px) and (min-width:500px) {
  background-color:tomato;
}
```

width의 크기가 700px보다 작으면 tomato
