import {tools} from '../../../../imageHelpers'
import {FC} from 'react'

const TableNoteHeader: FC = () => {
    return (
        <div className={`tableHeader grid-cols-7Col`}>
            <div></div>
            <h4>Name</h4>
            <h4>Created</h4>
            <h4>Category</h4>
            <h4>Content</h4>
            <h4>Dates</h4>
            <div className="tools">
                 <span className="toolImg">
                </span>
                <span>
                    <img className="toolImg" src={tools.archiveToolWhite} alt="archive"/>
                </span>
                <span>
                    <img className="toolImg" src={tools.trashToolWhite} alt="bin"/>
                </span>
            </div>
        </div>
    )
}

export default TableNoteHeader