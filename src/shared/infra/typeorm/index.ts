import { DataSource } from "typeorm";

import User from "@modules/users/infra/typeorm/entities/User";

export const dataSource = new DataSource({
    type: 'postgres',
    host: 'db',
    port: 5432,
    username: 'postgres',
    password: 'docker',
    database: 'heroQuest',
    entities:[User],
    migrations:[]
})