import {InjectedFormProps, reduxForm} from 'redux-form'
import {FC} from 'react'
import styles from '../../Forms.module.css'
import {categoryOptions, createField, GetStringKeys, Input, Select, Textarea} from '../../../FormControls/FormControls'
import {maxLengthCreator} from '../../../../utils/validators'
import {EditFormDataType} from '../EditNoteBlock'

const maxLength20 = maxLengthCreator(20)
const maxLength100 = maxLengthCreator(100)

type EditNoteFormOwnProps = {
    onCloseForm: () => void,
    noteData: { noteName: string, noteContent: string }
}
const EditNoteForm: FC<InjectedFormProps<EditFormDataType, EditNoteFormOwnProps>
    & EditNoteFormOwnProps> = ({onCloseForm, handleSubmit, noteData}) => {
    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.fieldBlock}>
                {createField<EditNoteFormTypeKeys>(`${noteData.noteName}`, 'name', [maxLength20], Input)}
            </div>
            <div className={styles.fieldBlock}>
                {createField<EditNoteFormTypeKeys>('', 'category', [], Select,
                    {options: categoryOptions})}
            </div>
            <div className={styles.fieldBlock}>
                {createField<EditNoteFormTypeKeys>(`${noteData.noteContent}`, 'content', [maxLength100], Textarea)}
            </div>
            <div className={styles.buttons}>
                <button className={styles.actionButton} type="submit">Save</button>
                <button className={styles.actionButton} onClick={onCloseForm}>Close</button>
            </div>
        </form>
    )
}

const EditNoteReduxForm = reduxForm<EditFormDataType, EditNoteFormOwnProps>({form: 'createNote'})(EditNoteForm)

type EditNoteFormTypeKeys = GetStringKeys<EditFormDataType>
export default EditNoteReduxForm