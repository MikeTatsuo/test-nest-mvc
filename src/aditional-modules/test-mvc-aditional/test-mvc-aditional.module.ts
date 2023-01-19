import { Module } from '@nestjs/common';
import { TestMvcAditionalService } from './service/test-mvc-aditional/test-mvc-aditional.service';

@Module({
  providers: [TestMvcAditionalService],
})
export class TestMvcAditionalModule {}
