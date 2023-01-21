import { Controller, Get, Render } from '@nestjs/common';
import { TestMvcService } from '../../services/test-mvc/test-mvc.service';

@Controller('/api/test-mvc')
export class TestMvcController {
  constructor(private readonly testMVCService: TestMvcService) {}

  @Get('/test-api')
  @Render('index')
  renderWithDataFromService() {
    console.log('test controller');

    return new Promise((resolve) => {
      console.log('requesting data');
      this.testMVCService.getData().then((data) => {
        console.log('data: ', data);

        resolve({ message: data });
      });
    });
  }

  @Get('/async-await')
  @Render('index')
  async renderWithDataFromServiceWithAsyncAwait() {
    console.log('test controller async');

    const message = await this.testMVCService.getDataWithAwait();

    return { message };
  }
}
