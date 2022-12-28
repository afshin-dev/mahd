import { OnlyLoggedUserGuard } from './only-logged-user.guard';

describe('OnlyLoggedUserGuard', () => {
  it('should be defined', () => {
    expect(new OnlyLoggedUserGuard()).toBeDefined();
  });
});
