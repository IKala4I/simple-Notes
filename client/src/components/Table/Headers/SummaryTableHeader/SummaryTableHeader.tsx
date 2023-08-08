import {FC} from 'react'

const SummaryTableHeader: FC = () => {
    return (
        <div className={`tableHeader mt-10 grid-cols-4Col`}>
            <div></div>
            <h4>Note Category</h4>
            <h4>Active</h4>
            <h4>Archived</h4>
        </div>
    )
}
export default SummaryTableHeader