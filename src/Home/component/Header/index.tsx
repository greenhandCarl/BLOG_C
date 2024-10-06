import { FC } from 'react'
import { UnorderedListOutline, SearchOutline } from 'antd-mobile-icons'
import style from './index.scss'

type Props = {
    onListOutlineClick(): void
};

const Header: FC<Props> = props => {
    const { onListOutlineClick } = props;

    return (
        <div>
            <div className={style.static}></div>
            <div className={style.headerContainer}>
                <UnorderedListOutline className={style.unorderedListOutline} onClick={onListOutlineClick} />
                <div className={style.title}>首页</div>
                <SearchOutline className={style.searchOutline} />
            </div>
        </div>
    )
};

export default Header;