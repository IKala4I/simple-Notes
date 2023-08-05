import styles from '../Headers.module.css'
import {tools} from '../../../../imageHelpers'
import {FC} from 'react'

const TableNoteHeader:FC = () => {
    return (
        <div className={`${styles.tableHeader} ${styles.tableNoteHeader}`}>
            <div></div>
            <h4>Name</h4>
            <h4>Created</h4>
            <h4>Category</h4>
            <h4>Content</h4>
            <h4>Dates</h4>
            <div className={styles.tools}>
                 <span className={styles.toolImg}>
                </span>
                <span>
                    <img className={styles.toolImg} src={tools.archiveToolWhite} alt="archive"/>
                </span>
                <span>
                    <img className={styles.toolImg} src={tools.trashToolWhite} alt="bin"/>
                </span>
            </div>
        </div>
    )
}

export default TableNoteHeader