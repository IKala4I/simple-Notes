import {noteCategories} from '../../../../enums/noteCategories'
import SummaryTableRow from './SummaryTableRow/SummaryTableRow'
import {NoteType} from '../../../../Types/types'
import {FC, ReactNode} from 'react'


type SummaryTableRowsProps = {
    notes: NoteType[]
}
const SummaryTableRows: FC<SummaryTableRowsProps> = ({notes}) => {
    const summaryTableRows: ReactNode[] = []

    Object.values(noteCategories).forEach(category => {
        const filteredNotes = notes.filter((note) => note.category === category)
        const activeNotesCount = filteredNotes.filter((note) => !note.archived).length
        const archivedNotesCount = filteredNotes.filter((note) => note.archived).length
        summaryTableRows.push(
            <SummaryTableRow
                key={category}
                category={category}
                activeNotesCount={activeNotesCount}
                archivedNotesCount={archivedNotesCount}
            />)
    })

    return (
        <>
            {summaryTableRows}
        </>
    )
}

export default SummaryTableRows