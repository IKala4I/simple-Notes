import {FC, useEffect} from 'react'
import Header from './layout/Header/Header'
import './App.css'
import Main from './layout/Main/Main'
import {Dispatch} from 'redux'
import {useDispatch} from 'react-redux'
import {getAllNotes} from './redux/notesReducer'
import {ThunkDispatch} from 'redux-thunk'
import {AppStateType} from './redux/store'

const App: FC = () => {
    const dispatch: ThunkDispatch<AppStateType, any, any> = useDispatch()

    useEffect(() => {
        dispatch(getAllNotes())
    }, [])
    return (
        <>
            <Header/>
            <Main/>
        </>
    )
}

export default App
