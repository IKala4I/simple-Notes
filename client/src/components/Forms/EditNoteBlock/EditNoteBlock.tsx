import {Dispatch} from 'redux'
import {useDispatch, useSelector} from 'react-redux'
import {getContentNoteForUpdate, getNameNoteForUpdate} from '../../../redux/selectors'
import {formModesActions} from '../../../redux/formModesReducer'
import {updateNote} from '../../../redux/notesReducer'
import EditNoteReduxForm from './EditNoteForm/EditNoteForm'
import {FC} from 'react'
import {NoteTypeForUpdateNote} from '../../../api/notesAPI'
import {ThunkDispatch} from 'redux-thunk'
import {AppStateType} from '../../../redux/store'

type EditNoteBlockProps = {
    noteIdForUpdate: string
}

const EditNoteBlock: FC<EditNoteBlockProps> = ({noteIdForUpdate}) => {
    const dispatch: Dispatch = useDispatch()
    const thunkDispatch: ThunkDispatch<AppStateType, any, any> = useDispatch()
    const noteName = useSelector(getNameNoteForUpdate(noteIdForUpdate))
    const noteContent = useSelector(getContentNoteForUpdate(noteIdForUpdate))

    const disableEditMode = (): void => {
        dispatch(formModesActions.toggleEditMode())
    }


    const onUpdateNote = (formData: NoteTypeForUpdateNote) => {
        thunkDispatch(updateNote(noteIdForUpdate, {...formData}))
        dispatch(formModesActions.toggleEditMode())
    }

    return (
        <>
            <h3 className="text-2xl font-medium my-3 dark:text-gray-300">Do you wanna change your note {noteName} ?</h3>
            <EditNoteReduxForm onCloseForm={disableEditMode} onSubmit={onUpdateNote}
                               noteData={{noteName, noteContent}}/>
        </>
    )
}

export default EditNoteBlock