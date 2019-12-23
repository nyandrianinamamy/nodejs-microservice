import { IRead } from './interfaces/read.interface';
import { IWrite } from './interfaces/write.interface';

export type BaseRepository<I> = IRead<I> & IWrite<I>;
