# 1주차 회고록

- 미친듯한 release 일정이 끝나고 이제 진짜진짜! 시작해보려고 합니다.. (진짜*진짜*진짜*진짜*최종.pptx)
- 일단 바로 시작하기 전, 니꼬쌤이 **파일명은 항상 소문자로 작성한다** 라고 하셨습니다.
- 이유는 댓글을 보니, 더 기억하기 쉬워서? 인 것 같습니다 _(html, css를 잘 모르는데, 대문자로 파일명 생성하면 에러나나요? 신기...)_.
- 제가 보통 95%를 cpp 언어만 사용하다 보니, html&css coding rule은 잘 몰랐습니다. 찾아보니, 얘네도 나름대로 일반적인(?) rule이 있는 것 같아요! 그래서 찾아본 file naming rule과 coding rule에 대해서 제 마음에 드는 부분들만 몇개 골라 적어봅니다.

## File name rules

1. 회고록은 README.md 파일명으로 각 챕터마다 추가합니다.
2. 파일 네임은 hierarchical 구조로 하고, 단어의 배열 순서는 넓은 의미를 가진 단어에서 점차 구체적인 의미를 가지는 단어의 순서로 나열한다.
3. hierarchy는 '-' 로 구분합니다.
4. hierarchical 구조는 두 개 이하로 제한합니다.
5. 파일 네임은 camelCase입니다. 즉, 두 단어가 결합된 경우를 제외하고 모두 소문자로 제한합니다.
6. name rule은 더 추가될 수 있습니다.

찾아보면서 느낀 점인데, file naming rule은 어떤 언어든 딱히 크게 다를 바가 없는 것 같습니다.

## HTML/CSS Style Guide

1. [GITHUB Guide](https://github.com/xfiveco/css-coding-standards#naming-conventions)
2. [Airbnb Guide](https://github.com/codemakebros/css-style-guide/blob/master/README.md)
3. [Google Guide](https://google.github.io/styleguide/htmlcssguide.html#CSS_Style_Rules)

# Notes

- html과 css, browser, website 등등 제가 아직 완전하게 알지 못하는 것들이 많기 때문에 몰랐던 강의 내용에 대해 회고록과 코드, notion에 정리를 해 두었습니다.
- Extension은 Jehwan이 알려준 settings.json 정리해주는 prettier, git graph, live share만 깔아 놓았습니다.

## Browser

- Browser은 language(code)를 이해하고 website에 뿌려준다.
- Browser는 에러를 내뱉지 않는다!(위험할수도 ㅠ.ㅠ)

## Prettier extension

- html 문법을 제대로 사용하지 않았을 때, prettier extension 설치 후 settings에서 Format on Save를 사용하면, 자동으로 문법을 맞추어준다.

## HTML rules

1. HTML 문서는 항상 <!DOCTYPE html> 으로 시작해야 한다.
2. HTML을 시작할 때는 <html></html> tag로 시작한다.
3. HTML은 head, body로 구성되어 있다. head는 html의 congifure, 즉 외부적으로 보이지 않는 정보를 설정하고, body는 html의 content들의 정보를 갖고있다.
