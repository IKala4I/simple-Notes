import {InjectedFormProps, reduxForm} from 'redux-form'
import {FC} from 'react'
import styles from '../../Forms.module.css'
import {categoryOptions, createField, GetStringKeys, Input, Select, Textarea} from '../../../FormControls/FormControls'
import {maxLengthCreator, required} from '../../../../utils/validators'
import {CreateFormDataType} from '../CreateNoteBlock'

const maxLength20 = maxLengthCreator(20)
const maxLength100 = maxLengthCreator(100)

type CreateNoteFormOwnProps = {
    onCloseForm: any
}
const CreateNoteForm: FC<InjectedFormProps<CreateFormDataType, CreateNoteFormOwnProps>
    & CreateNoteFormOwnProps> = ({onCloseForm, handleSubmit}: any) => {
    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.fieldBlock}>
                {createField<CreateNoteFormTypeKeys>('Name', 'name', [required, maxLength20], Input)}
            </div>
            <div className={styles.fieldBlock}>
                {createField<CreateNoteFormTypeKeys>('', 'category', [required], Select,
                    {options: categoryOptions})}
            </div>
            <div className={styles.fieldBlock}>
                {createField<CreateNoteFormTypeKeys>('Your content (optional)', 'content', [maxLength100], Textarea)}
            </div>
            <div className={styles.buttons}>
                <button className={styles.actionButton} type="submit">Save</button>
                <button className={styles.actionButton} onClick={onCloseForm}>Close</button>
            </div>
        </form>
    )
}

const CreateNoteReduxForm = reduxForm<CreateFormDataType, CreateNoteFormOwnProps>({form: 'createNote'})(CreateNoteForm)

type CreateNoteFormTypeKeys = GetStringKeys<CreateFormDataType>

export default CreateNoteReduxForm
