import {FC} from 'react'

type ActionButtonProps = {
    imgSrc: string;
    buttonText: string;
    onClickCB: () => void
};

const ActionButton: FC<ActionButtonProps> = ({imgSrc, buttonText, onClickCB}) => {
    return (
        <div className="flex py-3 px-2 justify-end items-center text-lg ">
            <span>
                <img className="w-7 mr-2" src={imgSrc} alt='logo'/>
            </span>
            <button className="rounded-2xl border border-black border-solid p-2 cursor-pointer" onClick={onClickCB}>{buttonText}</button>
        </div>
    )
}

export default ActionButton