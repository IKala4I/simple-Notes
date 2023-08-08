import {FC} from 'react'

type ActionButtonProps = {
    imgSrc: string;
    buttonText: string;
    onClickCB: () => void
};

const ActionButton: FC<ActionButtonProps> = ({imgSrc, buttonText, onClickCB}) => {
    return (
        <div className="flex py-3 px-2 justify-end items-center text-lg ">
            <span className="bg-transparent rounded-2xl dark:bg-blue-200 mr-2">
                <img className="w-9 p-1" src={imgSrc} alt='logo'/>
            </span>
            <button className="actionButton" onClick={onClickCB}>{buttonText}</button>
        </div>
    )
}

export default ActionButton