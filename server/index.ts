import { NestFactory, Reflector } from '@nestjs/core';
import { RenderModule } from 'nest-next';
import next from 'next';
import 'reflect-metadata';
import { AppModule } from './application.module';
import cookieSession from 'cookie-session';
import passport from 'passport';
import keys from './config/keys';

const port = process.env.PORT || 3000;

async function bootstrap() {
  const dev = process.env.NODE_ENV !== 'production';
  const app = next({ dev });
  await app.prepare();

  const server = await NestFactory.create(AppModule);

  server.use(
    cookieSession({
      maxAge: 30 * 24 * 60 * 60 * 1000,
      keys: [keys.cookieKey],
    }),
  );

  server.use(passport.initialize());
  server.use(passport.session());

  const reflector = server.get(Reflector);
  void reflector;

  const renderer = server.get(RenderModule);
  renderer.register(server, app);

  server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`);
  });
}

bootstrap();
