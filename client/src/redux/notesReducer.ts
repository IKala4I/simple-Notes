import {noteCategories} from '../enums/noteCategories'
import {InferActionsTypes} from './store'
import {NotesArray, NoteType, Stats} from '../Types/types'
import notesAPI from '../api/notesAPI'

const CREATE_NOTE = 'notes/CREATE_NOTE'
const ARCHIVE_NOTE = 'notes/ARCHIVE_NOTE'
const UNARCHIVE_NOTE = 'notes/UNARCHIVE_NOTE'
const REMOVE_NOTE = 'notes/REMOVE_NOTE'
const UPDATE_NOTE = 'notes/UPDATE_NOTE'
const CHANGE_NOTE_ID_FOR_UPDATE = 'notes/CHANGE_NOTE_ID_FOR_UPDATE'
const SET_NOTES = 'notes/SET_NOTES'
const SET_STATS = 'notes/SET_STATS'


const initialState = {
    notes: [] as NotesArray,
    notesStats: [] as Stats,
    noteIdForUpdate: null as (string | null)
}

type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof noteActions>

const notesReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        // case CREATE_NOTE:
        //     return {
        //         ...state,
        //         notes: [
        //             ...state.notes,
        //             {
        //                 ...action.note,
        //                 id: state.notes.length,
        //                 archived: false
        //             }]
        //     }
        case ARCHIVE_NOTE:
            return {
                ...state,
                notes: updateObjectInArray(state.notes, action.noteId, '_id', {archived: true})
            }
        case UNARCHIVE_NOTE:
            return {
                ...state,
                notes: updateObjectInArray(state.notes, action.noteId, '_id', {archived: false})
            }
        case REMOVE_NOTE:
            return {
                ...state,
                notes: state.notes.filter(note => note._id !== action.noteId)
            }
        // case UPDATE_NOTE:
        //     return {
        //         ...state,
        //         notes: state.notes.map(note => {
        //             if (note.id === action.payload.noteId)
        //                 return {
        //                     ...note,
        //                     ...action.payload.data
        //                 }
        //             return note
        //         })
        //     }
        case CHANGE_NOTE_ID_FOR_UPDATE:
            return {
                ...state,
                noteIdForUpdate: action.noteId
            }
        case SET_NOTES:
            return {
                ...state,
                notes: [...action.notes]
            }
        case SET_STATS:
            return {
                ...state,
                notesStats: [...action.stats]
            }
        default:
            return state
    }
}
export const noteActions = {
    createNote: (note: NoteTypeForCreateNote) => ({type: CREATE_NOTE, note} as const),
    archiveNoteSuccess: (noteId: string) => ({type: ARCHIVE_NOTE, noteId} as const),
    unarchiveNoteSuccess: (noteId: string) => ({type: UNARCHIVE_NOTE, noteId} as const),
    removeNoteById: (noteId: string) => ({type: REMOVE_NOTE, noteId} as const),
    updateNote: (noteId: string, data: DataForUpdateNoteType) => ({
        type: UPDATE_NOTE,
        payload: {noteId, data}
    } as const),
    changeNoteIdForUpdate: (noteId: string) => ({type: CHANGE_NOTE_ID_FOR_UPDATE, noteId} as const),
    setNotes: (notes: NotesArray) => ({type: SET_NOTES, notes} as const),
    setStats: (stats: Stats) => ({type: SET_STATS, stats} as const)
}

//thunks

export const getAllNotes = () => async (dispatch: any) => {
    const notes = await notesAPI.getNotes()
    dispatch(noteActions.setNotes(notes))
}
export const getStats = () => async (dispatch: any) => {
    const stats = await notesAPI.getStats()
    dispatch(noteActions.setStats(stats))
}
export const removeNote = (noteId: string) => async (dispatch: any) => {
    const status = await notesAPI.removeNote(noteId)
    if (status === 200)
        dispatch(noteActions.removeNoteById(noteId))
}
export const archiveNote = (noteId: string) => async (dispatch: any) => {
    const status = await notesAPI.archiveNote(noteId)
    if (status === 200)
        dispatch(noteActions.archiveNoteSuccess(noteId))
}
export const unarchiveNote = (noteId: string) => async (dispatch: any) => {
    const status = await notesAPI.unarchiveNote(noteId)
    if (status === 200)
        dispatch(noteActions.unarchiveNoteSuccess(noteId))
}


type NoteTypeForCreateNote = {
    name: string,
    created: string,
    category: noteCategories,
    content: string,
    dates: string
}

type DataForUpdateNoteType = {
    name: string,
    content: string,
    category: noteCategories,
    dates: string
}
const updateObjectInArray = (
    items: NoteType[],
    itemId: string,
    objKey: keyof NoteType,
    newObjProps: Partial<NoteType>
): NoteType[] => {
    return items.map((item) => {
        if (item[objKey] === itemId) {
            return {
                ...item,
                ...newObjProps,
            }
        }
        return item
    })
}
export default notesReducer