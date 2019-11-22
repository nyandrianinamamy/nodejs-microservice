import { expect } from 'chai';
import { userRepository } from '.';
import { database } from '../../config';
import { JOHN_DOE } from '../entity/user.entity.spec';

describe('User Repository on current db', () => {
    // Clear db before
    before(async () => {
        database.connect(async () => {
            await userRepository.create(JOHN_DOE);
        });
    });
    xit('should find users', async () => {
        database.connect(async () => {
            const result = await userRepository.find({}).exec();
            expect(result.length).to.equal(1);
        }, true);
    });
    xit('should find John', async () => {
        database.connect(async () => {
            const user = await userRepository.find({ firstName: 'John' }).exec();
            expect(user.length).to.equal(1);
        });
    });
});
