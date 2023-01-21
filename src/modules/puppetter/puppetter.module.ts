import { Module } from '@nestjs/common';
import { PuppeterService } from './services/puppeter/puppeter.service';

@Module({
  providers: [PuppeterService],
  exports: [PuppeterService],
})
export class PuppetterModule {}
