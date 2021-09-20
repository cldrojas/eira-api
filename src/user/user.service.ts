import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto, EditUserDto } from './dtos';
import { User } from './entities';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async getAll() {
    return await this.userRepository.find();
  }
  async findById(id: number) {
    const user = await this.userRepository.findOne(id);
    if (!user) throw new NotFoundException("There's no user with that id");
    return user;
  }

  async findByEmail(email: string) {
    return await this.userRepository
      .createQueryBuilder('user')
      .where({ email })
      .addSelect('user.password')
      .getOne();
  }

  async create(dto: CreateUserDto) {
    const userExists = await this.userRepository.findOne({ email: dto.email });
    if (userExists) throw new BadRequestException('User already registered');
    const newUser = this.userRepository.create(dto);
    const user = await this.userRepository.save(newUser);
    delete user.password;
    return user;
  }

  async edit(id: number, dto: EditUserDto) {
    const user = await this.findById(id);
    const editedUser = Object.assign(user, dto);
    const tempUser = await this.userRepository.save(editedUser);
    delete tempUser.password;
    return tempUser;
  }
  async delete(id: number) {
    const user = await this.findById(id);
    return await this.userRepository.remove(user);
  }
}
