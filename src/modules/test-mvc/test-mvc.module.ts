import { Module } from '@nestjs/common';
import { TestMvcAditionalService } from 'src/aditional-modules/test-mvc-aditional/service/test-mvc-aditional/test-mvc-aditional.service';
import { TestMvcAditionalModule } from 'src/aditional-modules/test-mvc-aditional/test-mvc-aditional.module';
import { TestMvcController } from './controllers/test-mvc/test-mvc.controller';
import { TestMvcService } from './services/test-mvc/test-mvc.service';

@Module({
  imports: [TestMvcAditionalModule],
  controllers: [TestMvcController],
  providers: [TestMvcService, TestMvcAditionalService],
})
export class TestMvcModule {}
