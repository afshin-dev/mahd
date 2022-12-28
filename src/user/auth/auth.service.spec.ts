import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import {UserService} from "../user.service"

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(async () => {
    const FakeUserService = <unknown> {
      async create(email:string, password: string) {
        return Promise.resolve({id: 0 , email, password} )
      } ,
      async find() {
        return Promise.resolve([])
      }
    } 

    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthService, {
        provide: UserService ,
        useValue: FakeUserService
      }],
    }).compile();

    service = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
