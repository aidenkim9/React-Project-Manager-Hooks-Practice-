# React Project & Task Manager

React의 핵심 훅(useState, useRef)을 활용하여  
프로젝트와 할 일을 관리할 수 있는 간단한 프론트엔드 애플리케이션입니다.

강의를 기반으로 구현하되,  
상태 구조 설계와 컴포넌트 분리를 직접 고민하며 수정·보완했습니다.

---

## 🚀 주요 기능

- 프로젝트 추가 / 선택
- 프로젝트별 할 일(Task) 추가
- 조건부 렌더링을 통한 화면 전환
- 컴포넌트 간 상태 흐름 관리

---

## 🛠 사용 기술

- React
- JavaScript (ES6+)
- Tailwind CSS
- Vite

---

## 📂 프로젝트 구조

src/
├ components/
│  ├ Sidebar.jsx
│  ├ BasicPage.jsx
│  ├ Button.jsx
│  ├ Input.jsx
│  ├ Modal.jsx
│  ├ NewProject.jsx
│  ├ ProjectDetails.jsx
│  └ Tasks.jsx
├ App.jsx
├ index.css
└ main.jsx

---

## 🧠 구현 포인트

- **useState**
  - 프로젝트 목록과 선택된 프로젝트 상태 관리
- **useRef**
  - 입력값을 uncontrolled 방식으로 처리
- **조건부 렌더링**
  - 프로젝트 선택 여부에 따라 화면 분기
- **불변성 유지**
  - map, spread 연산자를 활용한 상태 업데이트

---

## 📸 미리보기
> React Hooks와 상태 관리를 연습하기 위해 제작한 프로젝트입니다.
<img width="1437" height="827" alt="스크린샷 2026-02-09 오후 4 42 29" src="https://github.com/user-attachments/assets/0d031c13-4d49-4ef9-b272-22e7efce8fb1" />
<img width="1440" height="835" alt="스크린샷 2026-02-09 오후 4 42 42" src="https://github.com/user-attachments/assets/61b044df-6dca-4fbe-a5bc-23d835903804" />
<img width="1440" height="832" alt="스크린샷 2026-02-09 오후 4 43 32" src="https://github.com/user-attachments/assets/74a970a9-6a03-4b31-84b4-a5584ea6d4b2" />


---

## 📌 느낀 점

- 단순 CRUD라도 상태 구조를 어떻게 설계하느냐에 따라 코드 가독성이 크게 달라진다는 점을 체감
- `useRef`와 `useState`의 역할 차이를 명확히 이해하게 됨
- `prop drilling`의 번거로움을 체감할 수 있었음
- 다음 단계로는 **DB를 활용한 풀스택 구조**를 추가해볼 계획


---

## 🔗 향후 개선 사항

- 프로젝트/할 일 수정 기능
- localStorage를 활용한 데이터 유지
- 컴포넌트 리팩토링
