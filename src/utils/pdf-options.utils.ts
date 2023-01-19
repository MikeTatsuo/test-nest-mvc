import { paperFormat } from './pdf.utils';

export const pdfOptions = {
  // displayHeaderFooter: true,
  // Whether to show the header and footer.

  // footerTemplate: '',
  // HTML template for the print footer. Has the same constraints and support for special classes as PDFOptions.headerTemplate.

  format: paperFormat.A4,

  // headerTemplate: '',
  // HTML template for the print header. Should be valid HTML with the following classes used to inject values into them:
  // - date formatted print date
  // - title document title
  // - url document location
  // - pageNumber current page number
  // - totalPages total pages in the document

  // height: string | number
  // Sets the height of paper. You can pass in a number or a string with a unit.

  landscape: false,
  // Whether to print in landscape orientation.

  // margin:	{
  //   bottom: string | number,
  //   left: string | number,
  //   right: string | number,
  //   top: string | number,
  // },
  // Set the PDF margins.	no margins are set.

  // omitBackground: true,
  // Hides default white background and allows generating pdfs with transparency.

  pageRanges: '',
  // Paper ranges to print, e.g. 1-5, 8, 11-13.	The empty string, which means all pages are printed.

  path: '',
  // The path to save the file to.	the empty string, which means the PDF will not be written to disk.

  // preferCSSPageSize: true,
  // Give any CSS @page size declared in the page priority over what is declared in the width or height or format option.
  // 'false' will scale the content to fit the paper size.

  printBackground: true,
  // Set to true to print background graphics.

  scale: 1,
  // Scales the rendering of the web page. Amount must be between 0.1 and 2.

  timeout: 10000,
  // Timeout in milliseconds. Pass 0 to disable timeout.

  // width: string | number
  // Sets the width of paper. You can pass in a number or a string with a unit.
};
