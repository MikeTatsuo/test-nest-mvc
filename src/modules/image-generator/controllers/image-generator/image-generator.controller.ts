import { Controller, Get, Header, HttpCode, Query, Res } from '@nestjs/common';
import { ImageGeneratorService } from '../../services/image-generator/image-generator.service';

@Controller('image-generator')
export class ImageGeneratorController {
  constructor(private readonly imageService: ImageGeneratorService) {}
  @Get('/png')
  @HttpCode(200)
  @Header('Content-Type', 'image/png')
  generatePNG(@Query() { url, encoding, omitBackground }, @Res() res) {
    this.imageService
      .generateImageFromUrl(url, {
        encoding,
        omitBackground,
      })
      .then((png: Buffer) => {
        res.set({
          'Content-Disposition': 'inline; filename=image.png',
          'Content-Length': `${png.length}`,
        });
        res.send(png);
      });
  }

  @Get('/jpeg')
  @HttpCode(200)
  @Header('Content-Type', 'image/jpeg')
  generateJPEG(
    @Query() { url, encoding, omitBackground, quality },
    @Res() res,
  ) {
    this.imageService
      .generateImageFromUrl(url, {
        type: 'jpeg',
        encoding,
        omitBackground,
        quality,
      })
      .then((jpeg: Buffer) => {
        res.set({
          'Content-Disposition': 'inline; filename="image.jpeg"',
          'Content-Length': `${jpeg.length}`,
        });
        res.send(jpeg);
      });
  }

  @Get('/webp')
  @HttpCode(200)
  @Header('Content-Type', 'image/webp')
  generateWEBP(
    @Query() { url, encoding, omitBackground, quality },
    @Res() res,
  ) {
    this.imageService
      .generateImageFromUrl(url, {
        type: 'webp',
        encoding,
        omitBackground,
        quality,
      })
      .then((webp: Buffer) => {
        res.set({
          'Content-Disposition': 'inline; filename="image.webp"',
          'Content-Length': `${webp.length}`,
        });
        res.send(webp);
      });
  }
}
