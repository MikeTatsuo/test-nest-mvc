import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestMvcModule } from './modules/test-mvc/test-mvc.module';
import { PdfGeneratorService } from './modules/pdf-generator/services/pdf-generator/pdf-generator.service';
import { PdfGeneratorController } from './modules/pdf-generator/controllers/pdf-generator/pdf-generator.controller';
import { PdfGeneratorModule } from './modules/pdf-generator/pdf-generator.module';
import { ImageGeneratorModule } from './modules/image-generator/image-generator.module';
import { ImageGeneratorController } from './modules/image-generator/controllers/image-generator/image-generator.controller';
import { ImageGeneratorService } from './modules/image-generator/services/image-generator/image-generator.service';
import { PuppetterModule } from './modules/puppetter/puppetter.module';
import { PuppeterService } from './modules/puppetter/services/puppeter/puppeter.service';

@Module({
  imports: [
    TestMvcModule,
    PdfGeneratorModule,
    ImageGeneratorModule,
    PuppetterModule,
  ],
  controllers: [
    AppController,
    PdfGeneratorController,
    ImageGeneratorController,
  ],
  providers: [
    AppService,
    PdfGeneratorService,
    ImageGeneratorService,
    PuppeterService,
  ],
})
export class AppModule {}
