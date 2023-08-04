import {AppStateType} from './store'
import {noteCategories} from '../enums/noteCategories'
import {NoteType} from '../Types/types'

export const getNotes = (state: AppStateType): NoteType[] => {
    return state.notes.notes
}
export const getNoteIdForUpdate = (state: AppStateType): string | null => {
    return state.notes.noteIdForUpdate
}
export const getIsCreateMode = (state: AppStateType): boolean => {
    return state.formModes.isCreateMode
}
export const getIsEditMode = (state: AppStateType): boolean => {
    return state.formModes.isEditMode
}
export const getNameNoteForUpdate = (noteId: string) => (state: AppStateType): string => {
    const notes = getNotes(state)
    return notes.find(note => note._id === noteId)?.name || ''
}
export const getContentNoteForUpdate = (noteId: string) => (state: AppStateType): string => {
    const notes = getNotes(state)
    return notes.find(note => note._id === noteId)?.content || ''
}
export const getCategoryNoteForUpdate = (noteId: string) => (state: AppStateType): noteCategories => {
    const notes = getNotes(state)
    return notes.find(note => note._id === noteId)?.category || noteCategories.Task
}