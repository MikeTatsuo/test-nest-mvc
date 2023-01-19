import { Test, TestingModule } from '@nestjs/testing';
import { TestMvcController } from './test-mvc.controller';

describe('TestMvcController', () => {
  let controller: TestMvcController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TestMvcController],
    }).compile();

    controller = module.get<TestMvcController>(TestMvcController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
