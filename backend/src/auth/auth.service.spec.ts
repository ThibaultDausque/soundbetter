import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { createUserDto } from 'src/user/dto/user.dto';
import * as bcrypt from 'bcrypt';

describe('AuthService', () => {
  let service: AuthService;

  const mockUserRepository = {
    findOneByEmail: jest.fn(),
    createUser: jest.fn()
  }

  const mockJwtService = {
    signAsync: jest.fn().mockImplementation(() => Promise.resolve('mockJwtToken'))
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthService,
      //provide dependencies 
      {
        provide: UserService,
        useValue: mockUserRepository, //provide the mock
      },
      {
        provide: JwtService,
        useValue: mockUserRepository,
      }
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('register => Should create a new user and return its data', async () => {

    const createUserDto = {
      id: 1,
      creationDate: Date.now(),
      email: 'newmail@gmail.com',
      username: 'newusername',
      password: ';S740nJ0^?Za',
      playlists: ['playlist 1', 'playlist 2']
    };

    const user = {
      id: 1,
      creationDate: Date.now(),
      email: 'newmail@gmail.com',
      username: 'newusername',
      password: ';S740nJ0^?Za',
      playlists: ['playlist 1', 'playlist 2']
    };

    jest.spyOn(mockUserRepository, 'createUser').mockReturnValue(user);
    jest.spyOn(bcrypt, 'hash').mockImplementation(() => Promise.resolve(user.password));

    const result = await service.register(createUserDto);

    expect(result).toEqual(user);
    expect(mockUserRepository.createUser).toHaveBeenCalled();
    expect(mockUserRepository.createUser).toHaveBeenCalledWith(createUserDto);

  });

  it('signIn => should find a user by a given id and returns its data', async () => {
   
    const username = 'newusername';
    const password = ';S740nJ0^?Za'; 
    const user = {
      id: 1,
      email: 'newmail@gmail.com',
      username: 'newusername',
      password: bcrypt.hashSync(password, 10)
    };

    const payload = { sub: user.id, email: user.email };
    const token = 'mockJwtToken';

    jest.spyOn(mockUserRepository, 'findOneByEmail').mockReturnValue(Promise.resolve(user));
    jest.spyOn(mockJwtService, 'signAsync').mockReturnValue(Promise.resolve(token));

    const result = await service.signIn(username, password);

    expect(result).toEqual({ token });
    expect(mockUserRepository.findOneByEmail).toHaveBeenCalled();
    expect(mockUserRepository.findOneByEmail).toHaveBeenCalledWith({ where: { username } });
    expect(mockJwtService.signAsync).toHaveBeenCalled();
    expect(mockJwtService.signAsync).toHaveBeenCalledWith(payload);


  });
});
