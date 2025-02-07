# React SPA Base

React와 TypeScript를 기반으로 한 SPA(Single Page Application) 프로젝트 템플릿입니다.

## 프로젝트 개요

- React 18과 TypeScript를 사용한 최신 웹 개발 환경
- Vite를 통한 빠른 개발 및 빌드 지원
- MUI(Material-UI)를 활용한 UI 컴포넌트
- Recoil을 이용한 전역 상태 관리
- React Query를 통한 서버 상태 관리
- React Router를 이용한 라우팅 처리

## 주요 기술 스택

- React 18.3
- TypeScript
- Vite
- Material UI
- React Query
- React Router
- Recoil
- Axios
- ESLint & Prettier

## 실행 방법

1. 프로젝트 클론:
   ```sh
   git clone [repository-url]
   cd react-spa-base
   ```

2. 의존성 설치:
   ```sh
   npm install
   ```

3. 개발 서버 실행:
   ```sh
   npm run dev
   ```

4. 브라우저에서 `http://localhost:3001` 접속

## 빌드 방법

프로덕션 빌드:
```sh
npm run build
```

빌드된 결과물 미리보기:
```sh
npm run preview
```

## 프로젝트 구조

```
src/
├── components/     # 재사용 가능한 컴포넌트
├── routes/        # 라우팅 설정 및 페이지 컴포넌트
├── layouts/       # 레이아웃 컴포넌트
├── constants/     # 상수 정의
├── services/      # API 서비스
└── types/         # TypeScript 타입 정의
```

## 개발 도구

- ESLint: 코드 품질 및 스타일 검사
- Prettier: 코드 포맷팅
- TypeScript: 정적 타입 검사
