import archiveLogo from './assets/images/archive-logo.svg'
import plusLogo from './assets/images/plus-logo.svg'
import notesLogo from './assets/images/notes-logo.svg'
import { noteCategories } from './enums/noteCategories'
import taskIcon from './assets/images/icons/cart-icon.svg'
import thoughtIcon from './assets/images/icons/brain-icon.svg'
import ideaIcon from './assets/images/icons/bulb-icon.svg'
import quoteIcon from './assets/images/icons/quote-icon.svg'
import unarchiveToolGrey from './assets/images/tools/unarchive-tool-grey.svg'
import archiveToolGrey from './assets/images/tools/archive-tool-grey.svg'
import archiveToolWhite from './assets/images/tools/archive-tool-white.svg'
import pencilTool from './assets/images/tools/pencil-tool.svg'
import trashToolGrey from './assets/images/tools/trash-tool-grey.svg'
import trashToolWhite from './assets/images/tools/trash-tool-white.svg'

type Logos = {
    archiveLogo: string
    plusLogo: string
    notesLogo: string
}

export const logos: Logos = {
    archiveLogo,
    plusLogo,
    notesLogo,
}

type NoteCategoryIcons = {
    [key in noteCategories]: string
}

export const icons: NoteCategoryIcons = {
    [noteCategories.Task]: taskIcon,
    [noteCategories.Random_Thought]: thoughtIcon,
    [noteCategories.Idea]: ideaIcon,
    [noteCategories.Quote]: quoteIcon,
}

type Tools = {
    unarchiveToolGrey: string
    archiveToolWhite: string
    archiveToolGrey: string
    pencilTool: string
    trashToolGrey: string
    trashToolWhite: string
}

export const tools: Tools = {
    unarchiveToolGrey,
    archiveToolWhite,
    archiveToolGrey,
    pencilTool,
    trashToolGrey,
    trashToolWhite,
}
