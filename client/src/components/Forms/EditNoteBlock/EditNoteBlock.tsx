import {Dispatch} from 'redux'
import {useDispatch, useSelector} from 'react-redux'
import {getCategoryNoteForUpdate, getContentNoteForUpdate, getNameNoteForUpdate} from '../../../redux/selectors'
import {formModesActions} from '../../../redux/formModesReducer'
import {noteActions} from '../../../redux/notesReducer'
import EditNoteReduxForm from './EditNoteForm/EditNoteForm'
import {FC} from 'react'
import {noteCategories} from '../../../enums/noteCategories'
import {getDatesFromContent} from '../../../utils/getDatesFromContent'

type EditNoteBlockProps = {
    noteIdForUpdate: number
}

const EditNoteBlock: FC<EditNoteBlockProps> = ({noteIdForUpdate}) => {
    const dispatch: Dispatch = useDispatch()
    const noteName = useSelector(getNameNoteForUpdate(noteIdForUpdate))
    const noteContent = useSelector(getContentNoteForUpdate(noteIdForUpdate))
    const noteCategory = useSelector(getCategoryNoteForUpdate(noteIdForUpdate))

    const disableEditMode = (): void => {
        dispatch(formModesActions.toggleEditMode())
    }


    const onUpdateNote = (formData: EditFormDataType) => {
        const note = {
            name: noteName,
            content: noteContent,
            category: noteCategory,
            ...formData,
            dates: formData.content ? getDatesFromContent(formData.content) : getDatesFromContent(noteContent)
        }
        dispatch(noteActions.updateNote(noteIdForUpdate, note))
        dispatch(formModesActions.toggleEditMode())
    }

    return (
        <>
            <h3>Do you wanna change your note {noteName} ?</h3>
            <EditNoteReduxForm onCloseForm={disableEditMode} onSubmit={onUpdateNote}
                               noteData={{noteName, noteContent}}/>
        </>
    )
}

export type EditFormDataType = {
    name?: string,
    category?: noteCategories,
    content?: string
}

export default EditNoteBlock