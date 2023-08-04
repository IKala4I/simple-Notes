import {noteCategories} from '../enums/noteCategories'

export type NoteType = {
    id: number,
    name: string,
    created: string,
    category: noteCategories,
    content: string,
    dates: string,
    archived: boolean
}

export type NotesArray = Array<NoteType>
