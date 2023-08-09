import pgPromise from 'pg-promise'

const pgp = pgPromise()
const connectionConfig = {
    host: 'host',
    port: 1111,
    database: 'db',
    user: 'user',
    password: 'pass',
}
const db = pgp(connectionConfig)

// Note Actions

export const getNotes = async () => {
    try {
        return await db.any('SELECT * FROM notes')
    } catch (error) {
        throw new Error('Error fetching notes')
    }
}

export const getNoteById = async (id: string) => {
    try {
        return await db.oneOrNone('SELECT * FROM notes WHERE id = $1', id)
    } catch (error) {
        throw new Error('Error fetching note by ID')
    }
}

export const createNote = async (values: Record<string, any>) => {
    try {
        const query = pgp.helpers.insert(values, null, 'notes') + ' RETURNING *'
        return await db.one(query)
    } catch (error) {
        throw new Error('Error creating note')
    }
}

export const deleteNoteById = async (id: string) => {
    try {
        return await db.oneOrNone('DELETE FROM notes WHERE id = $1 RETURNING *', id)
    } catch (error) {
        throw new Error('Error deleting note by ID')
    }
}

export const updateNoteById = async (id: string, values: Record<string, any>) => {
    try {
        const query = pgp.helpers.update(values, null, 'notes') + ' WHERE id = $1 RETURNING *'
        return await db.one(query, id)
    } catch (error) {
        throw new Error('Error updating note by ID')
    }
}

