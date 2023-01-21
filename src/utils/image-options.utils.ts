import { ImageOptions } from 'src/types/imageOptions.type';

export const imageOptions = ({
  encoding = 'binary',
  omitBackground = false,
  quality = 100,
  type = 'png',
}: ImageOptions) => ({
  captureBeyondViewport: true,
  //  Capture the screenshot beyond the viewport.

  // clip: {
  //   height: 0,
  //   scale: 1,
  //   width: 0,
  //   x: 0,
  //   y: 0,
  // },
  //  An object which specifies the clipping region of the page.

  encoding,
  // 'base64' | 'binary' Encoding of the image.

  // fromSurface: true
  // Capture the screenshot from the surface, rather than the view.

  fullPage: true,
  // When true, takes a screenshot of the full page.	false

  omitBackground,
  // Hides default white background and allows capturing screenshots with transparency.	false

  // path: ''
  // The file path to save the image to. The screenshot type will be inferred from file extension. If path is a relative path, then it is resolved relative to current working directory. If no path is provided, the image won't be saved to the disk.

  quality,
  // Quality of the image, between 0-100. Not applicable to png images.

  type,
  //  'png' | 'jpeg' | 'webp'
});
