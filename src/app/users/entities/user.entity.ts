import { defineEntity, p } from '@mikro-orm/core';
import { v4 as uuidV4 } from 'uuid';

export const UserSchema = defineEntity({
  name: 'User',
  properties: {
    id: p
      .uuid()
      .primary()
      .onCreate(() => uuidV4()),
    displayName: p.string(),
    username: p.string(),
    email: p.string(),
    password: p.string(),
    createdAt: p.datetime().onCreate(() => new Date()),
    updatedAt: p
      .datetime()
      .onCreate(() => new Date())
      .onUpdate(() => new Date()),
  },
});

export class UserEntity extends UserSchema.class {}

UserSchema.setClass(UserEntity);
