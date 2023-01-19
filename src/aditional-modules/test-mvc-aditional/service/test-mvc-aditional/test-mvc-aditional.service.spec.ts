import { Test, TestingModule } from '@nestjs/testing';
import { TestMvcAditionalService } from './test-mvc-aditional.service';

describe('TestMvcAditionalService', () => {
  let service: TestMvcAditionalService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TestMvcAditionalService],
    }).compile();

    service = module.get<TestMvcAditionalService>(TestMvcAditionalService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
