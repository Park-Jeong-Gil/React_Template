import axios from 'axios';

/**
 * HTTP 요청을 위한 Axios 인스턴스 설정
 * @property {string} baseURL - API로 요청하는 기본 URL 설정
 * @property {boolean} withCredentials : true - 교차 출처 요청에서 쿠키 전송 활성화
 * @property {Object} headers - 기본 헤더 설정
 * @property {string} headers.Content-Type : 'application/json' - 기본 콘텐츠 타입을 JSON으로 설정

 * @property {number} timeout - 요청 타임아웃 시간(밀리초)
 * @property {Object} auth - 기본 인증 정보
 * @property {string} responseType - 응답 데이터 타입 ('json', 'text', 'blob' 등)
 * @property {Function} validateStatus - HTTP 상태 코드 유효성 검사 함수
 * @property {Object} proxy - 프록시 서버 설정
 * @property {number} maxRedirects - 최대 리다이렉트 횟수
 * @property {Object} params - URL 파라미터 기본값
 * @property {boolean} decompress - 응답 압축 해제 여부
 */

export const axiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});
