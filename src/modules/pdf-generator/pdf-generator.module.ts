import { Module } from '@nestjs/common';
import { PdfGeneratorController } from './controllers/pdf-generator/pdf-generator.controller';
import { PdfGeneratorService } from './services/pdf-generator/pdf-generator.service';

@Module({
  controllers: [PdfGeneratorController],
  providers: [PdfGeneratorService],
})
export class PdfGeneratorModule {}
