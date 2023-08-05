import {axiosInstance} from "./axiosInstance"
import {noteCategories} from '../enums/noteCategories'

const notesAPI = {
    async getNotes() {
        const response = await axiosInstance.get(`notes`)
        return response.data
    },
    async getStats() {
        const response = await axiosInstance.get(`notes/stats`)
        return response.data
    },
    async removeNote(noteId: string) {
        const response = await axiosInstance.delete(`notes/${noteId}`)
        return response.status
    },
    async archiveNote(noteId: string) {
        const response = await axiosInstance.patch(`notes/${noteId}`, {archived: true})
        return response.status
    },
    async unarchiveNote(noteId: string) {
        const response = await axiosInstance.patch(`notes/${noteId}`, {archived: false})
        return response.status
    },
    async createNote(noteData: NoteTypeForCreateNote) {
        return await axiosInstance.post('notes', {...noteData})
    },
    async updateNote(noteId: string, noteData: NoteTypeForUpdateNote) {
        return await axiosInstance.patch(`notes/${noteId}`, {...noteData})
    },
    async getNoteById(noteId: string) {
        return await axiosInstance.get(`notes/${noteId}`)
    }
}

export type NoteTypeForCreateNote = {
    name: string,
    category: noteCategories,
    content?: string
}

export type NoteTypeForUpdateNote = {
    name?: string,
    category?: noteCategories,
    content?: string
}

export default notesAPI