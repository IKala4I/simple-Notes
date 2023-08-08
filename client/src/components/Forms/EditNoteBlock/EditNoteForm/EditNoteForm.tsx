import {InjectedFormProps, reduxForm} from 'redux-form'
import {FC} from 'react'
import {categoryOptions, createField, GetStringKeys, Input, Select, Textarea} from '../../../FormControls/FormControls'
import {maxLengthCreator} from '../../../../utils/validators'
import {NoteTypeForUpdateNote} from '../../../../api/notesAPI'

const maxLength20 = maxLengthCreator(20)
const maxLength100 = maxLengthCreator(100)

type EditNoteFormOwnProps = {
    onCloseForm: () => void,
    noteData: { noteName: string, noteContent: string }
}
const EditNoteForm: FC<InjectedFormProps<NoteTypeForUpdateNote, EditNoteFormOwnProps>
    & EditNoteFormOwnProps> = ({onCloseForm, handleSubmit, noteData}) => {
    return (
        <form className="form" onSubmit={handleSubmit}>
            <div className="fieldBlock">
                {createField<EditNoteFormTypeKeys>(`${noteData.noteName}`, 'name', [maxLength20], Input)}
            </div>
            <div className="fieldBlock">
                {createField<EditNoteFormTypeKeys>('', 'category', [], Select,
                    {options: categoryOptions})}
            </div>
            <div className="fieldBlock">
                {createField<EditNoteFormTypeKeys>(`${noteData.noteContent}`, 'content', [maxLength100], Textarea)}
            </div>
            <div className="buttons">
                <button className="actionButton w-1/3 text-2xl" type="submit">Save</button>
                <button className="actionButton w-1/3 text-2xl" onClick={onCloseForm}>Close</button>
            </div>
        </form>
    )
}

const EditNoteReduxForm = reduxForm<NoteTypeForUpdateNote, EditNoteFormOwnProps>({form: 'createNote'})(EditNoteForm)

type EditNoteFormTypeKeys = GetStringKeys<NoteTypeForUpdateNote>
export default EditNoteReduxForm