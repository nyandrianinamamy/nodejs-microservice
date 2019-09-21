import { userBuilder } from '.';

describe('User', () => {
    test('should make an user', () => {
        const user = userBuilder.makeUser({ _id: '1234', name: 'John Doe' });
        expect(user.name).toBe('John Doe');
    });
});
