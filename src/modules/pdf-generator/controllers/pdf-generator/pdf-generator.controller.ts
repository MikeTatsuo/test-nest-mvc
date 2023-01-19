import { Controller, Get, HttpCode, Query, Res } from '@nestjs/common';
import { PdfGeneratorService } from '../../services/pdf-generator/pdf-generator.service';

@Controller('pdf-generator')
export class PdfGeneratorController {
  constructor(private readonly pdfService: PdfGeneratorService) {}

  @Get('/landscape/a4')
  @HttpCode(200)
  generatePDF(@Query() { url }, @Res() res) {
    this.pdfService.generatePDFFromUrl(url).then((pdf) => {
      res.set({
        'Content-Type': 'application/pdf',
      });
      res.send(pdf);
    });
  }
}
