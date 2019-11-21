import { authenticationBuilder } from '../entity';
import { IAuthentication } from '../entity/authentication.entity';
import { AuthenticationRepository } from '../repository/authentication.repository';

const NOT_FOUND = 'Authentication not found';

export class AuthenticationServiceBuilder {
    authenticationRepository: AuthenticationRepository;

    // tslint:disable-next-line: no-any
    constructor({ authenticationRepository }: any) {
        this.authenticationRepository = authenticationRepository;
    }
    async create(authenticationInfo: IAuthentication): Promise<IAuthentication> {
        const authentication: IAuthentication = authenticationBuilder.makeAuthentication(authenticationInfo);
        return this.authenticationRepository.create(authentication);
    }

    async deleteById(id: string): Promise<boolean> {
        const authentication = await this.findById(id);
        if (!authentication) {
            throw new Error(NOT_FOUND);
        }
        return this.authenticationRepository.delete(id);
    }

    // tslint:disable-next-line: no-any
    async find(params: any): Promise<IAuthentication[]> {
        const { sort, skip, limit, search, ...filter } = params;
        return this.authenticationRepository
            .filter(filter)
            .search(search)
            .findAndExec();
    }

    async findById(id: string): Promise<IAuthentication> {
        if (!id) {
            throw new Error('Id not supplied');
        }
        const authentication = await this.authenticationRepository.findOne(id).exec();
        if (!authentication) {
            throw new Error(NOT_FOUND);
        }
        return authentication;
    }

    async update(id: string, data: IAuthentication): Promise<IAuthentication> {
        const authentication = await this.authenticationRepository.update(id, data);
        if (!authentication) {
            throw new Error(NOT_FOUND);
        }
        return authentication;
    }
}
