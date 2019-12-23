import bcryptjs from 'bcryptjs';

export const bcryptHash = (password: string) => bcryptjs.hash(password, 10);
export const comparePassword = (fromBody: string, fromDb: string) => bcryptjs.compare(fromBody, fromDb);
