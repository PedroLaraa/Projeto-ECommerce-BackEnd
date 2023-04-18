import { Test, TestingModule } from '@nestjs/testing';
import { CityService } from '../city.service';
import { Repository } from 'typeorm';
import { CityEntity } from '../entities/city.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { cityEntitieMock } from '../__mocks__/cityEntitie.mock';
import { CacheService } from '../../cache/cache.service';

describe('CityService', () => {
  let service: CityService;

  let cityRepository: Repository<CityEntity>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CityService,
        {
          provide: CacheService,
          useValue: {
            getCache: jest.fn().mockResolvedValue({}),
          },
        },
        {
          provide: getRepositoryToken(CityEntity),
          useValue: {
            findOne: jest.fn().mockResolvedValue(cityEntitieMock),
          },
        },
      ],
    }).compile();

    service = module.get<CityService>(CityService);

    cityRepository = module.get<Repository<CityEntity>>(
      getRepositoryToken(CityEntity),
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(cityRepository).toBeDefined();
  });

  it('should return cities by state id', async () => {
    const city = await service.findCityById(cityEntitieMock.id);

    expect(city).toEqual(cityEntitieMock);
  });
});
