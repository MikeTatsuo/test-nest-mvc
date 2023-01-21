import { Module } from '@nestjs/common';
import { PuppetterModule } from '../puppetter/puppetter.module';
import { PuppeterService } from '../puppetter/services/puppeter/puppeter.service';
import { PdfGeneratorController } from './controllers/pdf-generator/pdf-generator.controller';
import { PdfGeneratorService } from './services/pdf-generator/pdf-generator.service';

@Module({
  imports: [PuppetterModule],
  controllers: [PdfGeneratorController],
  providers: [PdfGeneratorService, PuppeterService],
})
export class PdfGeneratorModule {}
