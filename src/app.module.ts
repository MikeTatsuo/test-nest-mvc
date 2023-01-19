import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestMvcModule } from './modules/test-mvc/test-mvc.module';
import { PdfGeneratorService } from './modules/pdf-generator/services/pdf-generator/pdf-generator.service';
import { PdfGeneratorController } from './modules/pdf-generator/controllers/pdf-generator/pdf-generator.controller';
import { PdfGeneratorModule } from './modules/pdf-generator/pdf-generator.module';

@Module({
  imports: [TestMvcModule, PdfGeneratorModule],
  controllers: [AppController, PdfGeneratorController],
  providers: [AppService, PdfGeneratorService],
})
export class AppModule {}
