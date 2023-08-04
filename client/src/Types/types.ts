import {noteCategories} from '../enums/noteCategories'

export type NoteType = {
    _id: string,
    name: string,
    created: string,
    category: noteCategories,
    content: string,
    dates: string,
    archived: boolean
}

export type NotesArray = Array<NoteType>
