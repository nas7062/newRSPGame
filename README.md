## **개발 세부 순서**

1. **프로젝트 구조 설계**
    - React 프로젝트 생성
    - 파일 구조 설정: 컴포넌트 폴더(components), CSS 폴더, 이미지 에셋(assets) 폴더 구성
2. **자원 준비**
    - 가위(scissors.png), 바위(rock.png), 보(paper.png), 물음표(questionmark.png) 이미지 준비
    - CSS 스타일 파일 생성(App.css) or module.css 적용
3. **컴포넌트 설계**
    - App 컴포넌트: 메인 로직 및 상태 관리
    - Card 컴포넌트: 플레이어/컴퓨터의 선택과 결과를 표시
    - Button 컴포넌트: 사용자 선택 버튼 구현
4. **게임 규칙 및 데이터 설계**
    - choice 객체: 가위/바위/보의 이름과 이미지 정보 매핑
    - 승패 판정 로직(determineWinner함수) 구현
    - 컴퓨터 랜덤 선택 함수(generateComputerChoice) 구현
5. **상태 관리 구현**
    - 사용자 선택(userChoice)컴퓨터 선택(computerChoice), 결과(result) 상태 정의
    - handleUserChoice 함수로 게임 흐름 제어
6. **컴포넌트 구현**
    - 기본 UI 레이아웃 구성
    - Card 컴포넌트에 조건부 스타일링 적용(승/패/무승부에 따른 클래스 변경)
    - Button 컴포넌트에서 선택 이벤트 처리
7. **UI 디테일 및 스타일 적용**
    - 결과에 따른 스타일 변경 구현
    - 반응형 레이아웃 적용
    - ## **주요 상태 관리**

1. **App.jsx의 상태**
    
    `userChoice` : 사용자가 선택한 항목(가위/바위/보) 정보 저장
    
    - 초기값: null
    - 업데이트: play 함수 호출 시 선택한 항목으로 설정
    
    `computerChoice`: 컴퓨터가 랜덤하게 선택한 항목 정보 저장
    
    - 초기값: null
    - 업데이트: play 함수 호출 시 randomSelect() 결과로 설정
    
    `result`: 게임 결과 상태
    
    - 초기값: "초기값"
    - 업데이트: determineWinner함수의 결과("이겼다", "졌다", "비겼다")로 설정
2. **상태 흐름**
    
    사용자가 버튼 클릭 → handleUserChoice 함수 호출 → `userChoice` , `computerChoice`, `result`상태 업데이트 → 컴포넌트 리렌더링
    
3.  **상태 전달**
    - App에서 Card 컴포넌트로 props 전달: userTitle, choice, result, type
    - App에서 Button 컴포넌트로 props 전달: onClick, choice, (disabled)
    ****
    ## **UI 구성**

1. **전체 레이아웃**
    - 메인 컨테이너
    - 두 개의 Card 컴포넌트(사용자/컴퓨터)
    - 하단에 세 개의 Button 컴포넌트(가위/바위/보)
2. Card **컴포넌트**
    - 사용자/컴퓨터 이름 표시(`h1` 태그)
    - 선택한 항목 이미지 표시(동적으로 변경)
    - 결과 메시지 표시(`p` 태그)
    - 결과에 따른 스타일링:
        - 승리 시: "win" 클래스 적용
        - 패배 시: "lose" 클래스 적용
        - 무승부 시: "draw" 클래스 적용
3. **Button 컴포넌트**
    - 가위/바위/보 버튼
    - 클릭 시 play 함수 호출
    - 각 버튼마다 고유 클래스명(scissors/rock/paper) 적용
4. **조건부 렌더링**
    - 초기 상태에서는 물음표 이미지 표시
    - 선택 후에는 해당 선택(가위/바위/보) 이미지 표시
    - 컴퓨터 Card 는 사용자 결과의 반대 결과 표시(사용자가 이기면 컴퓨터는 짐)
5. **이미지 매핑**
    - imageMap 객체를 통해 문자열 키를 실제 이미지로 매핑
    - 선택되지 않은 경우 questionmark 이미지 사용
