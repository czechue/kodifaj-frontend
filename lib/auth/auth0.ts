import { initAuth0 } from '@auth0/nextjs-auth0';
import config from './config';

export default initAuth0({
  clientId: config.AUTH0_CLIENT_ID as string,
  clientSecret: config.AUTH0_CLIENT_SECRET,
  scope: config.AUTH0_SCOPE as string,
  domain: config.AUTH0_DOMAIN as string,
  redirectUri: config.REDIRECT_URI as string,
  postLogoutRedirectUri: config.POST_LOGOUT_REDIRECT_URI as string,
  session: {
    cookieSecret: config.SESSION_COOKIE_SECRET as string,
    cookieLifetime: (config.SESSION_COOKIE_LIFETIME as unknown) as number,
  },
});
