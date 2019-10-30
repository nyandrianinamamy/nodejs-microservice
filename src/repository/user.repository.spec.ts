import { expect } from 'chai';
import { userRepository } from '.';
import { database } from '../config';

describe('User Repository on current db', () => {
    // Clear db before
    // before(async () => {
    //     database.connect(async () => {
    //         await userRepository.
    //     })
    // })
    it('should find users', async () => {
        database.connect(async () => {
            const result = await userRepository.find({}).exec();
            expect(result.length).to.equal(2);
        }, true);
    });
});
