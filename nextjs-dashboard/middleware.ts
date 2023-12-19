import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
/*미들웨어를 사용하여 authConfig 사용
미들웨어를 사용하면 요청이 완료되기전에 코드를 실행할수 없음
auth는 사용자 세션이 포함, request에는 수신 요청 포함

인증완료되기전까지 렌더링이 안되어서 보호하는 역할도 함
*/
/*authConfig로 nextAuth를 초기화시키고 auth를 내보냄*/
export default NextAuth(authConfig).auth;

export const config = {
	// https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
	matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};
/*특정 경로에서 사용*/