import {AppStateType} from './store'
import {NoteType, Stats} from '../Types/types'

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
export const getStats = (state: AppStateType): Stats => {
    return state.notes.notesStats
}