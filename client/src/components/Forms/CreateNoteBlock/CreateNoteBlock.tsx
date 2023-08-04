import {Dispatch} from 'redux'
import {useDispatch} from 'react-redux'
import {noteActions} from '../../../redux/notesReducer'
import {formModesActions} from '../../../redux/formModesReducer'
import CreateNoteReduxForm from './CreateNoteForm/CreateNoteForm'
import {FC} from 'react'
import {noteCategories} from '../../../enums/noteCategories'
import {getDatesFromContent} from '../../../utils/getDatesFromContent'
import {createTodayDate} from '../../../utils/createTodayDate'

type CreateNoteBlockProps = {
    onCloseForm: () => void
}

const CreateNoteBlock: FC<CreateNoteBlockProps> = ({onCloseForm}) => {
    const dispatch: Dispatch = useDispatch()

    const onCreateNote = (formData: CreateFormDataType) => {
        const note = {
            ...formData,
            content: formData.content ? formData.content : '',
            dates: formData.content ? getDatesFromContent(formData.content) : '',
            created: createTodayDate()
        }
        dispatch(noteActions.createNote(note))
        dispatch(formModesActions.toggleCreateMode())
    }

    return (
        <>
            <h3>Hello, wanna create a new note?)</h3>
            <CreateNoteReduxForm onCloseForm={onCloseForm} onSubmit={onCreateNote}/>
        </>
    )
}

export type CreateFormDataType = {
    name: string,
    category: noteCategories,
    content?: string
}

export default CreateNoteBlock