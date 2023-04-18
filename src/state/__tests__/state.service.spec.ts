import { Test, TestingModule } from '@nestjs/testing';
import { StateService } from '../state.service';
import { Repository } from 'typeorm';
import { StateEntity } from '../../state/entities/state.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { stateEntityMock } from '../../state/__mocks__/state.mock';

describe('StateService', () => {
  let service: StateService;

  let stateRepository: Repository<StateEntity>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        StateService,
        {
          provide: getRepositoryToken(StateEntity),
          useValue: {
            find: jest.fn().mockResolvedValue(stateEntityMock),
            save: jest.fn().mockResolvedValue(stateEntityMock),
          },
        },
      ],
    }).compile();

    service = module.get<StateService>(StateService);

    stateRepository = module.get<Repository<StateEntity>>(
      getRepositoryToken(StateEntity),
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(stateRepository).toBeDefined();
  });

  it('should return list of states', async () => {
    const state = await service.getAllStates();

    expect(state).toEqual(state);
  });

  it('should return error in exception', async () => {
    jest.spyOn(stateRepository, 'find').mockRejectedValueOnce(new Error());

    expect(service.getAllStates()).rejects.toThrowError();
  });
});
