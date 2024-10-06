import { FC, useState } from 'react'
import { Picker } from 'antd-mobile'
import { LeftOutline, FillinOutline, CheckOutline } from 'antd-mobile-icons'
import style from './index.scss'
import { PickerValue } from 'antd-mobile/es/components/picker-view'

type Props = {
    isEditing: boolean,
    onEdit(): void,
    onClose(): void,
    onSave(): Promise<void>,
    onDel(): Promise<void>,
}

const pickerColumn = [
    [
        { label: '编辑笔记', value: 'edit' },
        { label: '删除笔记', value: 'del' },
    ]
]

const editingPickerColumn = [
    [
        { label: '所有人可见', value: 'all' },
        { label: '仅自己可见', value: 'self' },
        { label: '两人可见', value: 'double' }
    ]
]

const ArticleHeader: FC<Props> = props => {
    const [showVisible, setShowVisible] = useState<boolean>(false)

    const { isEditing, onEdit, onDel, onSave, onClose } = props

    const onPickerConfirm = async (v: PickerValue[]) => {
        const val = v[0]
        setShowVisible(false)
        switch (val) {
            case 'edit':
                onEdit()
                break
            case 'del':
                onDel()
                break
            case 'self':
                onSave()
                break
            case 'double':
                onSave()
                break
            case 'all':
                onSave()
                break
        }
    };
    
    return (
        <div className={style.articleHeader}>
            <LeftOutline className={style.icon} onClick={onClose} />
            {
                isEditing
                    ? <CheckOutline className={style.icon} onClick={() => setShowVisible(true)} />
                    : <FillinOutline className={style.icon} onClick={onEdit} />
            }
            <Picker
                columns={isEditing ? editingPickerColumn : pickerColumn}
                visible={showVisible}
                onClose={() => setShowVisible(false)}
                onConfirm={onPickerConfirm}
            />
        </div>
    )
};

export default ArticleHeader
