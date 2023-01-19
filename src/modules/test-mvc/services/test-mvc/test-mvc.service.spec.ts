import { Test, TestingModule } from '@nestjs/testing';
import { TestMvcService } from './test-mvc.service';

describe('TestMvcService', () => {
  let service: TestMvcService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TestMvcService],
    }).compile();

    service = module.get<TestMvcService>(TestMvcService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
