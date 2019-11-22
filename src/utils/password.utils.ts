import bcryptjs from 'bcryptjs';

export const bcrypt = (password: string) => bcryptjs.hash(password, 10);
export const comparePassword = (ancient: string, current: string) => bcryptjs.compare(ancient, current);
