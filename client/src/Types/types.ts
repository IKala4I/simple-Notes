import {noteCategories} from '../enums/noteCategories'

export type NoteType = {
    id: string,
    name: string,
    created: string,
    category: noteCategories,
    content: string,
    dates: string,
    archived: boolean
}

export type NotesArray = Array<NoteType>

export type StatType = {
    category: noteCategories,
    activeCount: number,
    archivedCount: number
}

export type Stats = Array<StatType>
