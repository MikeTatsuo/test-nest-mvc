import { Injectable } from '@nestjs/common';

@Injectable()
export class TestMvcAditionalService {
  getAditionalData() {
    return new Promise((resolve) => {
      console.log('test mvc aditional service');

      setTimeout(() => {
        console.log('test mvc aditional service sending response');
        resolve('data from aditional service');
      }, 3000);
    });
  }
}
