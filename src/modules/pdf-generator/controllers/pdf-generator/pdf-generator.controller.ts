import { Controller, Get, Header, HttpCode, Query, Res } from '@nestjs/common';
import { PdfGeneratorService } from '../../services/pdf-generator/pdf-generator.service';

@Controller('pdf-generator')
export class PdfGeneratorController {
  constructor(private readonly pdfService: PdfGeneratorService) {}

  @Get('/landscape/a4')
  @HttpCode(200)
  @Header('Content-Type', 'application/pdf')
  generateLandscapeA4PDF(@Query() { url }, @Res() res) {
    this.pdfService.generatePDFFromUrl(url).then((pdf) => {
      res.set({
        'Content-Disposition': 'inline; filename="file.pdf"',
      });
      res.send(pdf);
    });
  }

  @Get('/portrait/a4')
  @HttpCode(200)
  @Header('Content-Type', 'application/pdf')
  generatePortraitA4PDF(@Query() { url }, @Res() res) {
    this.pdfService
      .generatePDFFromUrl(url, { landscape: false })
      .then((pdf) => {
        res.set({
          'Content-Disposition': 'inline; filename="file.pdf"',
        });
        res.send(pdf);
      });
  }
}
