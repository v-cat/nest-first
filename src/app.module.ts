import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeesModule } from './coffees/coffees.module';
// import { CorsMiddleware } from '@nestjs/platform-express'; // 导入 CORS 中间件

@Module({
  imports: [CoffeesModule],
  controllers: [AppController],
  providers: [AppService],
})

// export class AppModule implements NestModule {
//   configure(consumer: MiddlewareConsumer) {
//     consumer.apply(CorsMiddleware).forRoutes('*'); // 在所有路由上应用 CORS 中间件
//   }
// }
export class AppModule { }
