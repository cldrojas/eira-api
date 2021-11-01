import { ConfigService } from '@nestjs/config';
import {
  DEFAULT_USER_EMAIL,
  DEFAULT_USER_PASSWORD,
} from 'src/config/constants';
import { User } from 'src/user/entities';
import { getRepository } from 'typeorm';

const setDefaultUser = async (config: ConfigService) => {
  const userRepository = getRepository<User>(User);

  const defaultUser = await userRepository
    .createQueryBuilder()
    .where('email = :email', {
      email: config.get<string>('DEFAULT_USER_EMAIL'),
    })
    .getOne();

  if (!defaultUser) {
    const adminUser = userRepository.create({
      name: 'Admin',
      lastName: 'admin',
      email: config.get<string>(DEFAULT_USER_EMAIL),
      password: config.get<string>(DEFAULT_USER_PASSWORD),
      roles: ['ADMIN'],
    });
    return await userRepository.save(adminUser);
  }
};

export default setDefaultUser;
