import { DataSource } from "typeorm";
import { User } from "./entities/User";

export const AppDataSource = new DataSource({
    type: 'sqlite',
    database: 'typeormd',
    entities: [User],
    logging: true,
    synchronize: true

})