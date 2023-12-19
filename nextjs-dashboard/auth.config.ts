import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
	/*페이지 지정 인증이 안되어있을시 로그인페이지로 리다이렉트*/
	pages: {
		signIn: '/login',
	},
	/*인증여부에 따라서 보여지는 페이지 결정*/
	callbacks: {
		authorized({ auth, request: { nextUrl } }) {
			const isLoggedIn = !!auth?.user;
			const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
			if (isOnDashboard) {
				if (isLoggedIn) return true;
				return false; // Redirect unauthenticated users to login page
			} else if (isLoggedIn) {
				return Response.redirect(new URL('/dashboard', nextUrl));
			}
			return true;
		},
	},
	providers: [],
} satisfies NextAuthConfig;

/*providers 옵션에는 다양한 로그인 옵션을 나열하는 배열*/