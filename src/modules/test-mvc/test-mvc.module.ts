import { Module } from '@nestjs/common';
import { TestMvcController } from './controllers/test-mvc/test-mvc.controller';
import { TestMvcService } from './services/test-mvc/test-mvc.service';

@Module({
  controllers: [TestMvcController],
  providers: [TestMvcService],
})
export class TestMvcModule {}
