import { Document } from 'mongoose';
import { IRead } from './interfaces/read.interface';
import { IWrite } from './interfaces/write.interface';

export type BaseRepository<D extends Document, I> = IRead<D, I> & IWrite<D, I>;
