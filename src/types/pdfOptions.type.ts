import { paperFormat } from 'src/utils/pdf.utils';

export type PdfOptions = {
  format?: paperFormat;
  landscape?: boolean;
  omitBackground?: boolean;
  pageRanges?: string;
  printBackground?: boolean;
  scale?: number;
};
