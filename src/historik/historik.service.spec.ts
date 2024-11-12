import { Test, TestingModule } from '@nestjs/testing';
import { HistorikService } from './historik.service';

describe('HistorikService', () => {
  let service: HistorikService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HistorikService],
    }).compile();

    service = module.get<HistorikService>(HistorikService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
