import { Test, TestingModule } from '@nestjs/testing';
import { BroadcastController } from './broadcast.controller';

describe('Broadcast Controller', () => {
  let controller: BroadcastController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BroadcastController],
    }).compile();

    controller = module.get<BroadcastController>(BroadcastController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
