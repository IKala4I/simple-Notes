import {InjectedFormProps, reduxForm} from 'redux-form'
import {FC} from 'react'
import {categoryOptions, createField, GetStringKeys, Input, Select, Textarea} from '../../../FormControls/FormControls'
import {maxLengthCreator, required} from '../../../../utils/validators'
import {NoteTypeForCreateNote} from '../../../../api/notesAPI'

const maxLength20 = maxLengthCreator(20)
const maxLength100 = maxLengthCreator(100)

type CreateNoteFormOwnProps = {
    onCloseForm: any
}
const CreateNoteForm: FC<InjectedFormProps<NoteTypeForCreateNote, CreateNoteFormOwnProps>
    & CreateNoteFormOwnProps> = ({onCloseForm, handleSubmit}: any) => {
    return (
        <form className="form" onSubmit={handleSubmit}>
            <div className="fieldBlock">
                {createField<CreateNoteFormTypeKeys>('Name', 'name', [required, maxLength20], Input)}
            </div>
            <div className="fieldBlock">
                {createField<CreateNoteFormTypeKeys>('', 'category', [required], Select,
                    {options: categoryOptions})}
            </div>
            <div className="fieldBlock">
                {createField<CreateNoteFormTypeKeys>('Your content (optional)', 'content', [maxLength100], Textarea)}
            </div>
            <div className="buttons">
                <button className="actionButton w-1/3 text-2xl" type="submit">Save</button>
                <button className="actionButton w-1/3 text-2xl" onClick={onCloseForm}>Close</button>
            </div>
        </form>
    )
}

const CreateNoteReduxForm = reduxForm<NoteTypeForCreateNote, CreateNoteFormOwnProps>({form: 'createNote'})(CreateNoteForm)

type CreateNoteFormTypeKeys = GetStringKeys<NoteTypeForCreateNote>

export default CreateNoteReduxForm
