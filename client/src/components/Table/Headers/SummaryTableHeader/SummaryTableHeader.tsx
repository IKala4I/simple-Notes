import styles from '../Headers.module.css'
import {FC} from 'react'

const SummaryTableHeader: FC = () => {
    return (
        <div className={`${styles.tableHeader} ${styles.summaryTableHeader}`}>
            <div></div>
            <h4>Note Category</h4>
            <h4>Active</h4>
            <h4>Archived</h4>
        </div>
    )
}
export default SummaryTableHeader