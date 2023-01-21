import { Module } from '@nestjs/common';
import { ImageGeneratorService } from './services/image-generator/image-generator.service';
import { ImageGeneratorController } from './controllers/image-generator/image-generator.controller';
import { PuppetterModule } from '../puppetter/puppetter.module';
import { PuppeterService } from '../puppetter/services/puppeter/puppeter.service';

@Module({
  imports: [PuppetterModule],
  providers: [ImageGeneratorService, PuppeterService],
  controllers: [ImageGeneratorController],
})
export class ImageGeneratorModule {}
