import { Connection, createConnection, getConnectionOptions } from "typeorm";

export default async(host = "ec2-3-225-41-234.compute-1.amazonaws.com"): Promise<Connection> => {
    const defaultOptions = await getConnectionOptions();

    return createConnection((
        Object.assign(defaultOptions, {
            host
        }))
    )
}