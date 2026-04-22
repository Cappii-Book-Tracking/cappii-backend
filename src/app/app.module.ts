import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { UsersModule } from './users/users.module';
import mikroOrmConfig from '../mikro-orm.config';

@Module({
  imports: [
    MikroOrmModule.forRootAsync({
      useFactory: () => mikroOrmConfig,
    }),
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
