import {InferActionsTypes} from './store'

const TOGGLE_CREATE_MODE = 'formModes/TOGGLE_CREATE_MODE'
const TOGGLE_EDIT_MODE = 'formModes/TOGGLE_EDIT_MODE'

const initialState = {
    isCreateMode: false,
    isEditMode: false
}

type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof formModesActions>

export const formModesReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case TOGGLE_CREATE_MODE:
            return {
                ...state,
                isCreateMode: !state.isCreateMode
            }
        case TOGGLE_EDIT_MODE:
            return {
                ...state,
                isEditMode: !state.isEditMode
            }
        default:
            return state
    }
}

export const formModesActions = {
    toggleCreateMode: () => ({type: TOGGLE_CREATE_MODE} as const),
    toggleEditMode: () => ({type: TOGGLE_EDIT_MODE} as const)
}