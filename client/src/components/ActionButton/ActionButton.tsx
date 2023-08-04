import styles from './ActionButton.module.css'
import {FC} from 'react'

type ActionButtonProps = {
    imgSrc: string;
    buttonText: string;
    onClickCB: () => void
};

const ActionButton: FC<ActionButtonProps> = ({imgSrc, buttonText, onClickCB}) => {
    return (
        <div className={styles.action}>
            <span>
                <img className={styles.actionImg} src={imgSrc} alt='logo'/>
            </span>
            <button className={styles.actionButton} onClick={onClickCB}>{buttonText}</button>
        </div>
    )
}

export default ActionButton