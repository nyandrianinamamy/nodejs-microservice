import { makeUser } from '.';

describe('User', () => {
  test('should make an user', () => {
    const user = makeUser({ _id: '1234', name: 'John Doe' });
    expect(user.name).toBe('John Doe');
  });
});
