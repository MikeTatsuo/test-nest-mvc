import { Injectable } from '@nestjs/common';
import { Page } from 'puppeteer';
import { PuppeterService } from 'src/modules/puppetter/services/puppeter/puppeter.service';
import { ImageOptions } from 'src/types/imageOptions.type';
import { imageOptions } from 'src/utils/image-options.utils';

@Injectable()
export class ImageGeneratorService {
  constructor(private readonly puppetterService: PuppeterService) {}

  generateImageFromUrl(url: string, options: ImageOptions = {}) {
    return new Promise((resolve, reject) => {
      this.puppetterService
        .generateFromUrl(url, (page: Page) => {
          const imgOptions = imageOptions(options);

          if (imgOptions.type === 'png') delete imgOptions.quality;

          return page.screenshot(imgOptions);
        })
        .then(resolve)
        .catch(reject);
    });
  }
}
