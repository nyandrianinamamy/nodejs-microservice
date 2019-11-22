import { expect } from 'chai';
import { userService } from '.';

describe('User service', () => {
    it('should find all users', async () => {
        const users = await userService.find({});
        expect(users.length).not.to.equal(0);
    });
});
