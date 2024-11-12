import { Test, TestingModule } from '@nestjs/testing';
import { HistorikController } from './historik.controller';
import { HistorikService } from './historik.service';

describe('HistorikController', () => {
  let controller: HistorikController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HistorikController],
      providers: [HistorikService],
    }).compile();

    controller = module.get<HistorikController>(HistorikController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
