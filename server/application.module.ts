import { Module } from '@nestjs/common';
import { RenderModule } from 'nest-next';
import { MongooseModule } from '@nestjs/mongoose';

import keys from './config/keys';

import { TasksModule } from './api/tasks/tasks.module';
import { UsersModule } from './api/users/users.module';
import { SolutionsModule } from './api/solutions/solutions.module';

import { HomeRenderController } from './routes/home-render.controller';
import { TasksRenderController } from './routes/tasks-render.controller';
import { UsersRenderController } from './routes/users-render.controller';
import { FaqRenderController } from './routes/faq-render.controller';
import { LoginRenderController } from './routes/login-render.controller';
import { AuthModule } from './api/auth/auth.module';

@Module({
  imports: [
    RenderModule,
    MongooseModule.forRoot(keys.mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    }),
    UsersModule,
    SolutionsModule,
    TasksModule,
    AuthModule,
  ],
  controllers: [
    HomeRenderController,
    TasksRenderController,
    UsersRenderController,
    FaqRenderController,
    LoginRenderController,
  ],
})
export class AppModule {}
