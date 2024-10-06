import { FC, createRef, RefObject } from 'react'
import { PictureOutline, DeleteOutline } from 'antd-mobile-icons'
import style from './index.scss'
import classNames from 'classnames'

type Props = {
    onImgChange(files: HTMLInputElement["files"], done: () => void): void,
    onDel(): void,
}

const inputRef: RefObject<HTMLInputElement> = createRef()

const BottomOperate: FC<Props> = props => {
    const { onDel, onImgChange } = props

    const onInputChange: React.ChangeEventHandler<HTMLInputElement> = e => {
        onImgChange(e.target.files, () => {
            if (inputRef.current) inputRef.current.value = ''
        })
    }

    return (
        <div className={classNames(style.operate, 'ignore')}>
            <div className={style.addImage}>
                <input
                    ref={inputRef}
                    type="file"
                    className={style.fileInput}
                    accept='image/*'
                    onChange={onInputChange}
                />
                <PictureOutline fontSize={24} />
            </div>
            <div className={style.del} onClick={onDel}>
                <DeleteOutline fontSize={24} />
            </div>
        </div>
    )
}

export default BottomOperate