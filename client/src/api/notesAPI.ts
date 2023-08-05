import {axiosInstance} from "./axiosInstance"

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
    }
}

export default notesAPI