import {Field, WrappedFieldProps} from "redux-form"
import {WrappedFieldMetaProps} from 'redux-form/lib/Field'
import {FC, ReactNode} from 'react'
import {FieldValidatorType} from '../../utils/validators'

type FormControlPropsType = {
    meta: WrappedFieldMetaProps,
    children: ReactNode
}

const FormControl: FC<FormControlPropsType> = ({meta: {touched, error}, children}) => {
    const hasError = touched && error
    return (
        <div className={(hasError ? "flex flex-col gap-y-1" : "")}>
            <div>
                {children}
            </div>
            {hasError && <span className='text-red-600'>{error}</span>}
        </div>
    )
}

export const Textarea: FC<WrappedFieldProps> = (props) => {
    const {input, meta, ...restProps} = props

    return (
        <FormControl {...props}>
            <textarea className="formField h-24" {...input} {...restProps} />
        </FormControl>
    )
}


type SelectProps = WrappedFieldProps & { options?: { value: string, label: string }[] }
export const Select: FC<SelectProps> = (props) => {
    const {input, meta, ...restProps} = props
    const {options} = restProps

    return (
        <FormControl {...props}>
            <select className="formField" {...input} {...restProps}>
                <option value="" disabled selected>Select your option</option>
                {options?.map((option) => (
                    <option value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </FormControl>
    )
}

export const Input: FC<WrappedFieldProps> = (props) => {
    const {input, meta, ...restProps} = props

    return (
        <FormControl {...props}>
            <input className="formField" {...input} {...restProps} />
        </FormControl>
    )
}

export function createField<FormKeysType extends string>(placeholder: string | undefined,
                                                         name: FormKeysType,
                                                         validators: Array<FieldValidatorType>,
                                                         component: FC<WrappedFieldProps & {
                                                             options?: { value: string, label: string }[]
                                                         }>,
                                                         props = {}, text = "") {

    return <div>
        <Field placeholder={placeholder} name={name}
               validate={validators}
               component={component}
               {...props}
        /> {text}
    </div>
}

export type GetStringKeys<T> = Extract<keyof T, string>

export const categoryOptions = [
    {value: 'Task', label: 'Task'},
    {value: 'Idea', label: 'Idea'},
    {value: 'Quote', label: 'Quote'},
    {value: 'Random Thought', label: 'Random Thought'},
]
