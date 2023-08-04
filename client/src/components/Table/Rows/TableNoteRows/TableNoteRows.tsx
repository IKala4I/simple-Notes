import TableNoteRow from './TableNoteRow/TableNoteRow'
import {Dispatch} from 'redux'
import {useDispatch} from 'react-redux'
import {noteActions} from '../../../../redux/notesReducer'
import {formModesActions} from '../../../../redux/formModesReducer'
import {FC} from 'react'
import {NoteType} from '../../../../Types/types'

type TableNoteRowsProps = {
    notes: NoteType[]
    noteIdForUpdate: number
    isEditMode: boolean
    isCreateMode: boolean
}
const TableNoteRows: FC<TableNoteRowsProps> = ({notes, noteIdForUpdate, isEditMode, isCreateMode}) => {
    const dispatch: Dispatch = useDispatch()

    const showEditForm = (noteId: number | null = null): void => {
        if (noteId !== noteIdForUpdate && Number.isFinite(noteId)) {
            dispatch(noteActions.changeNoteIdForUpdate(noteId as number))
        }
        if (!isEditMode) {
            if (isCreateMode)
                dispatch(formModesActions.toggleCreateMode())
            dispatch(formModesActions.toggleEditMode())
        }
    }

    const archiveNote = (noteId: number): void => {
        if (noteId === noteIdForUpdate && isEditMode)
            dispatch(formModesActions.toggleEditMode())
        dispatch(noteActions.archiveNote(noteId))
    }
    const unarchiveNote = (noteId: number): void => {
        dispatch(noteActions.unarchiveNote(noteId))
    }
    const removeNote = (noteId: number): void => {
        if (noteId === noteIdForUpdate && isEditMode)
            dispatch(formModesActions.toggleEditMode())
        dispatch(noteActions.removeNote(noteId))
    }

    const tableRows = notes.map((note: NoteType) =>
        <TableNoteRow
            key={note.id}
            note={note}
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