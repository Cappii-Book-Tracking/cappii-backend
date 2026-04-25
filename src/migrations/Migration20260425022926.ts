import { Migration } from '@mikro-orm/migrations';

export class Migration20260425022926 extends Migration {

  override up(): void | Promise<void> {
    this.addSql(`create table "user" ("id" uuid not null, "display_name" varchar(255) not null, "username" varchar(255) not null, "email" varchar(255) not null, "password" varchar(255) not null, "created_at" timestamptz not null, "updated_at" timestamptz not null, primary key ("id"));`);
  }

  override down(): void | Promise<void> {
    this.addSql(`drop table if exists "user" cascade;`);
  }

}
