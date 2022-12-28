import { UserSerializeInterceptor } from './serialize.interceptor';

describe('SerializeInterceptor', () => {
  it('should be defined', () => {
    expect(new UserSerializeInterceptor()).toBeDefined();
  });
});
