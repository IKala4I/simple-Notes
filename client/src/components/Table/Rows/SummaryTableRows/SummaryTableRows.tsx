import SummaryTableRow from './SummaryTableRow/SummaryTableRow'
import {NotesArray, Stats} from '../../../../Types/types'
import {FC, ReactNode, useEffect} from 'react'
import {ThunkDispatch} from 'redux-thunk'
import {AppStateType} from '../../../../redux/store'
import {useDispatch} from 'react-redux'
import {getStats} from '../../../../redux/notesReducer'


type SummaryTableRowsProps = {
    stats: Stats,
    notes: NotesArray
}
const SummaryTableRows: FC<SummaryTableRowsProps> = ({stats, notes}) => {
    const summaryTableRows: ReactNode[] = []
    const thunkDispatch: ThunkDispatch<AppStateType, any, any> = useDispatch()

    useEffect(() => {
        thunkDispatch(getStats())
    }, [notes])

    stats.forEach(categoryStats => {
        summaryTableRows.push(
            <SummaryTableRow
                key={categoryStats.category}
                category={categoryStats.category}
                activeNotesCount={categoryStats.activeCount}
                archivedNotesCount={categoryStats.archivedCount}
            />)
    })

    return (
        <>
            {summaryTableRows}
        </>
    )
}

export default SummaryTableRows