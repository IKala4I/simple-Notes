import {icons, tools} from '../../../../../imageHelpers'
import {FC} from 'react'
import {NoteType} from '../../../../../Types/types'

type TableNoteRowProps = {
    note: NoteType
    created: string
    archiveUnarchiveCB: (noteId: string) => void
    removeNoteCB: (noteId: string) => void
    showEditFormCB: (noteId: string) => void
}
const TableNoteRow: FC<TableNoteRowProps> = ({note, created, archiveUnarchiveCB, removeNoteCB, showEditFormCB}) => {
    return (
        <div className="tableRow grid-cols-7Col text-gray-500">
            <div className="flex">
                <img className="w-10" src={icons[note.category]} alt="cart"/>
            </div>
            <span className="text-black ">{note.name}</span>
            <span>{created}</span>
            <span>{note.category}</span>
            <span className="px-1">{note.content}</span>
            <span>{note.dates}</span>
            <div className="tools">
                {!note.archived ?
                    <span>
            <button className="toolButton" onClick={() => showEditFormCB(note._id)}>
    <img className="toolImg cursor-pointer" src={tools.pencilTool} alt="edit"/>
        </button>
        </span>
                    :
                    <div className="toolButton">
                    </div>
                }
                <span>
        <button className="toolButton" onClick={() => archiveUnarchiveCB(note._id)}>
    <img className="toolImg cursor-pointer"
         src={note.archived ? tools.unarchiveToolGrey : tools.archiveToolGrey}
         alt={note.archived ? 'unarchive' : 'archive'}/>
    </button>
    </span>
                <span>
    <button className="toolButton" onClick={() => removeNoteCB(note._id)}>
    <img className="toolImg cursor-pointer" src={tools.trashToolGrey} alt="trash"/>
        </button>
        </span>
            </div>
        </div>
    )
}

export default TableNoteRow