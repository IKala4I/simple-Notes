import {Dispatch} from 'redux'
import {useDispatch} from 'react-redux'
import {createNote} from '../../../redux/notesReducer'
import {formModesActions} from '../../../redux/formModesReducer'
import CreateNoteReduxForm from './CreateNoteForm/CreateNoteForm'
import {FC} from 'react'
import {ThunkDispatch} from 'redux-thunk'
import {AppStateType} from '../../../redux/store'
import {NoteTypeForCreateNote} from '../../../api/notesAPI'

type CreateNoteBlockProps = {
    onCloseForm: () => void
}

const CreateNoteBlock: FC<CreateNoteBlockProps> = ({onCloseForm}) => {
    const dispatch: Dispatch = useDispatch()
    const thunkDispatch: ThunkDispatch<AppStateType, any, any> = useDispatch()

    const onCreateNote = (formData: NoteTypeForCreateNote) => {
        const note = {...formData}
        thunkDispatch(createNote({...formData}))
        dispatch(formModesActions.toggleCreateMode())
    }

    return (
        <>
            <h3 className="text-2xl font-medium my-3">Hello, wanna create a new note?)</h3>
            <CreateNoteReduxForm onCloseForm={onCloseForm} onSubmit={onCreateNote}/>
        </>
    )
}

export default CreateNoteBlock