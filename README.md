# 오늘의 수능 수학 문제 API 오수! (osu!)

# 개요
수능이 시작한 1994년부터, 현재까지 모든 수능 문제들을 출제하는 API 이다. 모든 자료들은 [한국교육과정평가원](https://www.kice.re.kr/main.do?s=kice)에서 **일일이** **수작업으로** **노동하여** 문제와 답을 다운로드받고, 일일이 DB 작업을 거친 후 제작했다.

또한, 수능 문제 관련하여 다른 API를 제작하고 싶은 사람들을 위해 Git에 문제 이미지도 첨부한다.

API 테스트는 [Github 레포지토리](https://github.com/sw8744/osu-test)를 Clone해서 로컬 환경에서 실행하면 된다.
# 사용법
[http://osu-api.kro.kr:5500/](http://osu-api.kro.kr:5500/)에 접속하여 사용하면 된다.
출력 데이터는 다음과 같은 형식을 띄고 있다.
```
    [
        {
            "id": "1", // 여기에 정수 값이 들어온다.
            "img": "link", // 여기에 문제 이미지가 저장된 링크가 들어온다.
            "answer": "1", // 여기에 답이 들어온다.
            "source": "1994년 1차 수능 1번" // 여기에 이 문제가 어디에서 참고되었는지 나온다.
        }
    ]
```

또한, 각 기능은 다음과 같다.

## /get
랜덤으로 문제를 Return한다.

## /getall
모든 문제를 불러온다.