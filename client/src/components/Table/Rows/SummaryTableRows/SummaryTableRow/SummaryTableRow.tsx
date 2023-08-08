import {noteCategories} from '../../../../../enums/noteCategories'
import {icons} from '../../../../../imageHelpers'
import {FC} from 'react'

type SummaryTableRowPropsType = {
    category: noteCategories,
    activeNotesCount: Number,
    archivedNotesCount: Number
}
const SummaryTableRow: FC<SummaryTableRowPropsType> = ({category, activeNotesCount, archivedNotesCount}) => {
    return (
        <div className="tableRow grid-cols-4Col text-gray-500">
            <div className="flex">
                <img className="w-10" src={icons[category]} alt={category}/>
            </div>
            <span className="text-black">{category}</span>
            <span>{`${activeNotesCount}`}</span>
            <span>{`${archivedNotesCount}`}</span>
        </div>
    )
}

export default SummaryTableRow