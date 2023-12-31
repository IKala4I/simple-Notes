import TableNoteHeader from './Headers/TableNoteHeader/TableNoteHeader'
import TableNoteRows from './Rows/TableNoteRows/TableNoteRows'
import {tableTypes} from '../../enums/tableTypes'
import SummaryTableHeader from './Headers/SummaryTableHeader/SummaryTableHeader'
import SummaryTableRows from './Rows/SummaryTableRows/SummaryTableRows'
import {useSelector} from 'react-redux'
import {getNotes, getStats} from '../../redux/selectors'
import {FC} from 'react'
import {NotesArray, Stats} from '../../Types/types'


type TableProps = {
    tableType: tableTypes
    isCreateMode: boolean
    isEditMode: boolean
    noteIdForUpdate: string
}

const Table: FC<TableProps> = ({tableType, ...restProps}) => {
    const notes: NotesArray = useSelector(getNotes)
    const stats: Stats = useSelector(getStats)

    const archivedNotes = notes.filter(note => note.archived)
    const activeNotes = notes.filter(note => !note.archived)

    switch (tableType) {
        case tableTypes.ActiveNotes:
            return (
                <div className="customTable">
                    <TableNoteHeader/>
                    <TableNoteRows notes={activeNotes} {...restProps}/>
                </div>
            )
        case tableTypes.ArchivedNotes:
            return (
                <div className="customTable">
                    <TableNoteHeader/>
                    <TableNoteRows notes={archivedNotes} {...restProps}/>
                </div>
            )
        case tableTypes.Summary:
            return (
                <div className="customTable mb-10">
                    <SummaryTableHeader/>
                    <SummaryTableRows stats={stats} notes={notes}/>
                </div>
            )
        default:
            return (
                <></>
            )
    }
}

export default Table