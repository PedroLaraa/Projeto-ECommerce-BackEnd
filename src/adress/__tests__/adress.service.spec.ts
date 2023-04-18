import { Test, TestingModule } from '@nestjs/testing';
import { AdressService } from '../adress.service';
import { Repository } from 'typeorm';
import { AdressEntity } from '../../adress/entities/adress.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { adressMock } from '../__mocks__/adress.mock';
import { UserService } from '../../user/user.service';
import { userEntityMock } from '../../user/__mocks__/user.mock';
import { CityService } from '../../city/city.service';
import { cityEntitieMock } from '../../city/__mocks__/cityEntitie.mock';
import { createAdressMock } from '../__mocks__/createAddress.mock';

describe('AdressService', () => {
  let service: AdressService;

  let userService: UserService;
  let cityService: CityService;

  let adressRepository: Repository<AdressEntity>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AdressService,
        {
          provide: CityService,
          useValue: {
            findCityById: jest.fn().mockResolvedValue(cityEntitieMock),
          },
        },
        {
          provide: UserService,
          useValue: {
            findUserById: jest.fn().mockResolvedValue(userEntityMock),
          },
        },
        {
          provide: getRepositoryToken(AdressEntity),
          useValue: {
            save: jest.fn().mockResolvedValue(adressMock),
          },
        },
      ],
    }).compile();

    service = module.get<AdressService>(AdressService);
    userService = module.get<UserService>(UserService);
    cityService = module.get<CityService>(CityService);

    adressRepository = module.get<Repository<AdressEntity>>(
      getRepositoryToken(AdressEntity),
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(adressRepository).toBeDefined();
  });

  it('should return adress after save', async () => {
    const address = await service.createAdress(
      createAdressMock,
      userEntityMock.id,
    );

    expect(address).toEqual(adressMock);
  });

  it('should return error if exception in address after save in userService', async () => {
    jest.spyOn(userService, 'findUserById').mockRejectedValueOnce(new Error());

    expect(
      service.createAdress(createAdressMock, userEntityMock.id),
    ).rejects.toThrowError();
  });

  it('should return error if exception in address after save in userService', async () => {
    jest.spyOn(cityService, 'findCityById').mockRejectedValueOnce(new Error());

    expect(
      service.createAdress(createAdressMock, userEntityMock.id),
    ).rejects.toThrowError();
  });
});
