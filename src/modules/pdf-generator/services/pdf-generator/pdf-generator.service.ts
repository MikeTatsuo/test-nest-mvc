import { Injectable } from '@nestjs/common';
import puppeteer from 'puppeteer';
import { gotoOptions } from 'src/utils/goto-options.utils';
import { pdfOptions } from 'src/utils/pdf-options.utils';
import { puppeteerOptions } from 'src/utils/puppeteer-options.utils';

@Injectable()
export class PdfGeneratorService {
  generatePDFFromUrl(url: string) {
    return new Promise((resolve, reject) => {
      let browser = undefined;
      let page = undefined;

      console.log(url);

      puppeteer
        .launch(puppeteerOptions)
        .then((chromiumBrowser) => {
          browser = chromiumBrowser;
          return browser.newPage();
        })
        .then((newPage) => {
          page = newPage;
          return page.goto(url, gotoOptions);
        })
        .then(() => {
          return page.pdf({ ...pdfOptions, landscape: true });
        })
        .then((buffer) => {
          resolve(buffer);
        })
        .catch((error) => {
          console.error(error);
          reject(error);
        })
        .finally(() => {
          return page.close();
        })
        .then(() => {
          browser.close();
        });
    });
  }
}
