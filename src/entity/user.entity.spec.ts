import { expect } from 'chai';
import { userBuilder } from '.';

describe('User', () => {
    it('should make an user', () => {
        const user = userBuilder.makeUser({
            _id: '1234',
            firstName: 'John',
            lastName: 'Doe',
            email: 'john@example.com',
        });
        expect(user.firstName).to.equal('John');
    });
});
