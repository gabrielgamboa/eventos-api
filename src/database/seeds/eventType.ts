import { createConnection } from "typeorm";

async function create() {
    const connection = await createConnection();

    await connection.query(`
        INSERT INTO event_types (description)
        VALUES ('Evento Universitário'), ('Evento Empresarial')
    `);

    await connection.close;
}

create().then(() => console.log("Event types created"));