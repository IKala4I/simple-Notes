import '../commonStyles.css'
import ActionButton from '../../components/ActionButton/ActionButton'
import Table from '../../components/Table/Table'
import {getIsCreateMode, getIsEditMode, getNoteIdForUpdate} from '../../redux/selectors'
import {useDispatch, useSelector} from 'react-redux'
import {FC, useState} from 'react'
import {tableTypes} from '../../enums/tableTypes'
import {logos} from '../../imageHelpers'
import {formModesActions} from '../../redux/formModesReducer'
import {Dispatch} from 'redux'
import EditNoteBlock from '../../components/Forms/EditNoteBlock/EditNoteBlock'
import CreateNoteBlock from '../../components/Forms/CreateNoteBlock/CreateNoteBlock'

const Main: FC = () => {

    const dispatch: Dispatch = useDispatch()

    const isCreateMode = useSelector(getIsCreateMode)
    const isEditMode = useSelector(getIsEditMode)
    const noteIdForUpdate = useSelector(getNoteIdForUpdate)

    const [isShowedArchivedNotes, setIsShowedArchivedNotes] = useState(false)
    const [showArchivedNotesButtonText, setShowArchivedNotesButtonText] = useState('Show archived notes')

    const showArchivedNotes = (): void => {
        setIsShowedArchivedNotes(!isShowedArchivedNotes)
        const buttonText = !isShowedArchivedNotes ? 'Hide archived notes' : 'Show archived notes'
        setShowArchivedNotesButtonText(buttonText)
    }

    const toggleCreateMode = (): void => {
        if (!isCreateMode && isEditMode)
            dispatch(formModesActions.toggleEditMode())
        dispatch(formModesActions.toggleCreateMode())
    }

    return (
        <main>
            <div className="container">
                <ActionButton imgSrc={logos.archiveLogo} buttonText={showArchivedNotesButtonText}
                              onClickCB={showArchivedNotes}/>
                <section>
                    <Table tableType={tableTypes.ActiveNotes} isCreateMode={isCreateMode} isEditMode={isEditMode}
                           noteIdForUpdate={noteIdForUpdate as number}/>
                    {isCreateMode ? <CreateNoteBlock onCloseForm={toggleCreateMode}/> :
                        <ActionButton imgSrc={logos.plusLogo} buttonText='Create note'
                                      onClickCB={toggleCreateMode}/>}
                    {isEditMode ? <EditNoteBlock noteIdForUpdate={noteIdForUpdate as number}/> : ''}
                </section>
                <section>
                    {isShowedArchivedNotes ?
                        <Table tableType={tableTypes.ArchivedNotes} isCreateMode={isCreateMode} isEditMode={isEditMode}
                               noteIdForUpdate={noteIdForUpdate as number}/> : ''}
                </section>
                <section>
                    <Table tableType={tableTypes.Summary} isCreateMode={isCreateMode} isEditMode={isEditMode}
                           noteIdForUpdate={noteIdForUpdate as number}/>
                </section>
            </div>
        </main>
    )
}

export default Main