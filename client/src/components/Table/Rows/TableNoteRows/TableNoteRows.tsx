import TableNoteRow from './TableNoteRow/TableNoteRow'
import {Dispatch} from 'redux'
import {useDispatch} from 'react-redux'
import {
    archiveNote as archiveNoteById,
    noteActions,
    removeNote as removeNoteById,
    unarchiveNote as unarchiveNoteById
} from '../../../../redux/notesReducer'
import {formModesActions} from '../../../../redux/formModesReducer'
import {FC} from 'react'
import {NoteType} from '../../../../Types/types'
import {ThunkDispatch} from 'redux-thunk'
import {AppStateType} from '../../../../redux/store'
import {format} from 'date-fns';

type TableNoteRowsProps = {
    notes: NoteType[]
    noteIdForUpdate: string
    isEditMode: boolean
    isCreateMode: boolean
}
const TableNoteRows: FC<TableNoteRowsProps> = ({notes, noteIdForUpdate, isEditMode, isCreateMode}) => {
    const dispatch: Dispatch = useDispatch()
    const thunkDispatch: ThunkDispatch<AppStateType, any, any> = useDispatch()

    const showEditForm = (noteId: string | null = null): void => {
        if (noteId !== noteIdForUpdate && (typeof noteId === "string" && noteId.length > 0)) {
            dispatch(noteActions.changeNoteIdForUpdate(noteId as string))
        }
        if (!isEditMode) {
            if (isCreateMode)
                dispatch(formModesActions.toggleCreateMode())
            dispatch(formModesActions.toggleEditMode())
        }
    }

    const archiveNote = (noteId: string): void => {
        if (noteId === noteIdForUpdate && isEditMode)
            dispatch(formModesActions.toggleEditMode())
        thunkDispatch(archiveNoteById(noteId))
    }
    const unarchiveNote = (noteId: string): void => {
        thunkDispatch(unarchiveNoteById(noteId))
    }
    const removeNote = (noteId: string): void => {
        if (noteId === noteIdForUpdate && isEditMode)
            dispatch(formModesActions.toggleEditMode())
        thunkDispatch(removeNoteById(noteId))
    }

    const tableRows = notes.map((note: NoteType) =>
        <TableNoteRow
            key={note.id}
            note={note}
            created={format(new Date(note.created), 'yyyy-MM-dd')}
            archiveUnarchiveCB={note.archived ? unarchiveNote : archiveNote}
            removeNoteCB={removeNote}
            showEditFormCB={showEditForm}
        />)

    return (
        <>
            {tableRows}
        </>
    )
}

export default TableNoteRows