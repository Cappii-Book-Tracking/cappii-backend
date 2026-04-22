import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@mikro-orm/nestjs';
import { UserEntity } from './entities/user.entity';
import { EntityRepository } from '@mikro-orm/core';
import { UserDto } from './dtos/user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: EntityRepository<UserEntity>,
  ) {}

  async findById(id: string): Promise<UserDto | null> {
    const user = await this.userRepository.findOneOrFail({ id });
    return UserDto.fromEntity(user);
  }
}
