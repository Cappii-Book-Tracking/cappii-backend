import { UserEntity } from '../entities/user.entity';

export class UserDto {
  userId: string;
  displayName: string;
  username: string;
  email: string;

  static fromEntity(entity: UserEntity): UserDto {
    return {
      userId: entity.id,
      displayName: entity.displayName,
      username: entity.username,
      email: entity.email,
    };
  }
}
