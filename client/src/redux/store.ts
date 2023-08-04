import {combineReducers, createStore} from 'redux'
import notesReducer from './notesReducer'
import {reducer as formReducer} from 'redux-form'
import {formModesReducer} from './formModesReducer'

const rootReducer = combineReducers({
    notes: notesReducer,
    formModes: formModesReducer,
    form: formReducer
})

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export const store = createStore(rootReducer, composeEnhancers())

export type InferActionsTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never
type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>

