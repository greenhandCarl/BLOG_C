import { FC } from 'react'
import { EditSOutline, MovieOutline } from 'antd-mobile-icons'
import { useNavigate } from "react-router-dom";
import classNames from 'classnames'
import style from './index.scss'

type PropType = {
    visible: boolean,
}

const Aside: FC<PropType> = props => {
    const { visible } = props;
    const navigate = useNavigate();
    return (
        <div className={classNames(style.asideContainer, { [style.show]: visible })}>
            <div className={style.featureList}>
                <div className={style.featureItem} onClick={() => navigate('/article')}>
                    <EditSOutline className={style.featureIcon} />
                    <span className={style.featureText}>写笔记</span>
                </div>
                <div className={style.featureItem}>
                    <MovieOutline className={style.featureIcon} />
                    <span className={style.featureText}>时间轴</span>
                </div>
            </div>
        </div>
    )
}

export default Aside
