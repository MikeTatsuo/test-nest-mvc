import { Injectable } from '@nestjs/common';

@Injectable()
export class TestMvcService {
  getData() {
    return new Promise((resolve) => {
      console.log('test mvc service');

      setTimeout(() => {
        console.log('test mvc service sending response');
        resolve('This is still working');
      }, 3000);
    });
  }

  getDataWithAwait() {
    return new Promise((resolve) => {
      console.log('test mvc service');

      setTimeout(() => {
        console.log('test mvc service sending response');
        resolve('Using async await');
      }, 3000);
    });
  }

  getDataFromAditionalService() {
    return new Promise((resolve) => {
      console.log('test mvc service');

      setTimeout(() => {
        console.log('test mvc service sending response');
        resolve('Using async await');
      }, 3000);
    });
  }
}
