import { Injectable } from '@nestjs/common';
import { Page } from 'puppeteer';
import { PuppeterService } from 'src/modules/puppetter/services/puppeter/puppeter.service';
import { PdfOptions } from 'src/types/pdfOptions.type';
import { pdfOptions } from 'src/utils/pdf-options.utils';

@Injectable()
export class PdfGeneratorService {
  constructor(private readonly puppetterService: PuppeterService) {}

  generatePDFFromUrl(url: string, options: PdfOptions = {}) {
    return new Promise((resolve, reject) => {
      this.puppetterService
        .generateFromUrl(url, (page: Page) => page.pdf(pdfOptions(options)))
        .then(resolve)
        .catch(reject);
    });
  }
}
