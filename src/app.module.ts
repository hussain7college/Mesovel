import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NovelsModule } from './novels/novels.module';
import { ConfigModule } from '@nestjs/config';

import * as process from 'process';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Novel } from './novels/entities/novel.entity';

@Module({
  imports: [
    NovelsModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT, 5432),
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_DATABASE,
      entities: [Novel],
      synchronize: true, // to be removed for production
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
