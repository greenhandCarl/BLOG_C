import { FC, useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { getArticles } from '@/api/article'
import style from './index.scss'
import { Swiper } from 'antd-mobile'
import * as icon from '../../../const/icon'
import classNames from 'classnames'

const SwiperItem = Swiper.Item

type PropType = {
    offsetX: boolean,
    onMainContentClick(): void,
    onAvaterClick(): void,
}

type ListType = {
    content: string,
    id: number,
    title: string,
    month: number,
    day: number,
    imgs: string[],  
}[]

const {
    mainContentContainer,
    bannerContainer,
    styOffsetX,
    stySwiperItem,
    avaterBox,
    styNickname,
    styAvater,
    styDesc,
    timelineCon,
    itemBox,
    styDate,
    styMonth,
    styDay,
    styItemBanner,
    styItemBanner1,
    styItemBanner2,
    styItemBanner3,
    styItemBanner4,
    styItemBannerImg,
    styItemBannerRight,
    styItemTitle,
} = style;


const MainContent: FC<PropType> = props => {
    const { offsetX, onMainContentClick, onAvaterClick } = props;
    const navigate = useNavigate();
    const [list, setList] = useState<ListType>([])

    useEffect(() => {
        initList()
    }, [])

    const initList = async () => {
        const reg =  /<[^>]+>/g
        try {
            const res = await getArticles(1, 10)
            console.log('initList res', res)
            const newList = res.data.rows.map((item: { updatedAt: string, content: string, imgs: string[] }) => ({
                ...item,
                content: item.content.replace(reg, '') || '暂无内容',
                month: new Date(item.updatedAt).getMonth() + 1,
                day: new Date(item.updatedAt).getDay(),
            }))
            setList(newList)
        } catch (err) {
            console.log('err', err)
        }
    }

    const goArticle = (id: number) => {
        if (offsetX) return; // 如果正处于侧边栏状态
        navigate(`/article?id=${id}`)
    }

    return (
        <div
            onClick={onMainContentClick}
            className={classNames(mainContentContainer, { [styOffsetX]: offsetX })}
        >
            <div className={bannerContainer}>
                <Swiper loop>
                    <SwiperItem>
                        <div className={stySwiperItem}>
                            <img src={icon.BANNER1} />
                        </div>
                    </SwiperItem>
                    <SwiperItem>
                        <div className={stySwiperItem}>
                            <img  src={icon.BANNER2} />
                        </div>
                    </SwiperItem>
                    <SwiperItem>
                        <div className={stySwiperItem}>
                            <img  src={icon.BANNER3} />
                        </div>
                    </SwiperItem>
                    <SwiperItem>
                        <div className={stySwiperItem}>
                            <img  src={icon.GROUP_PHOTO} />
                        </div>
                    </SwiperItem>
                    <SwiperItem>
                        <div className={stySwiperItem}>
                            <img  src={icon.LONG_RANGE} />
                        </div>
                    </SwiperItem>
                </Swiper>
                <div className={avaterBox} onClick={e => { e.stopPropagation(); onAvaterClick() }}>
                    <div className={styNickname}>进哥</div>
                    <img className={styAvater} src={icon.BANNER2} alt='avater' />
                </div>
            </div>
            <div className={styDesc}>为往圣继绝学，为万世开太平</div>
            <div className={timelineCon}>
                {
                    list.map(item => (
                        <div key={item.id} className={itemBox} onClick={() => goArticle(item.id)}>
                            <div className={styDate}>
                                <span className={styDay}>{item.day}</span>
                                <span className={styMonth}>{item.month}月</span>
                            </div>
                            <div className={classNames(styItemBanner, {
                                [styItemBanner1]: item.imgs.length === 1,
                                [styItemBanner2]: item.imgs.length === 2,
                                [styItemBanner3]: item.imgs.length === 3,
                                [styItemBanner4]: item.imgs.length >= 4,
                            })}>
                                {
                                    item.imgs.length === 3
                                        ? <>
                                            <img className={styItemBannerImg} src={item.imgs[0]} alt='文章广告图' obj-fit='contain' />
                                            <div className={styItemBannerRight}>
                                                {
                                                    item.imgs.slice(1).map(i => (
                                                        <img
                                                            key={i}
                                                            className={styItemBannerImg}
                                                            src={i}
                                                            alt='文章广告图'
                                                            obj-fit='contain'
                                                        />
                                                    ))
                                                }
                                            </div>
                                        </>
                                        : item.imgs.slice(0, 4).map(i => (
                                            <img
                                                key={i}
                                                className={styItemBannerImg}
                                                src={i}
                                                alt='文章广告图'
                                                obj-fit='contain'
                                            />
                                        ))
                                }
                            </div>
                            <div className={styItemTitle}>{item.content}</div>
                        </div>
                    ))
                }
                <div className={itemBox} onClick={() => goArticle(1)}>
                    <div className={styDate}>
                        <span className={styDay}>15</span>
                        <span className={styMonth}>4月</span>
                    </div>
                    <div className={classNames(styItemBanner, styItemBanner2)}>
                        <img className={styItemBannerImg} src={icon.BANNER3} alt='文章广告图' />
                        <img className={styItemBannerImg} src={icon.BANNER3} alt='文章广告图' />
                    </div>
                    <div className={styItemTitle}>周五周五 敲锣打鼓周五周五 敲锣打鼓周五周五 敲锣打鼓周五周五 敲锣打鼓周五周五 敲锣打鼓周五周五 敲锣打鼓周五周五 敲锣打鼓周五周五 敲锣打鼓周五周五 敲锣打鼓周五周五 敲锣打鼓</div>
                </div>
                <div className={itemBox} onClick={() => goArticle(1)}>
                    <div className={styDate}>
                        <span className={styDay}>15</span>
                        <span className={styMonth}>4月</span>
                    </div>
                    <div className={classNames(styItemBanner, styItemBanner3)}>
                        <img className={styItemBannerImg} src={icon.BANNER3} alt='文章广告图' />
                        <div className={styItemBannerRight}>
                            <img className={styItemBannerImg} src={icon.BANNER3} alt='文章广告图' />
                            <img className={styItemBannerImg} src={icon.BANNER3} alt='文章广告图' />
                        </div>
                    </div>
                    <div className={styItemTitle}>周五周五 敲锣打鼓周五周五 敲锣打鼓周五周五 敲锣打鼓周五周五 敲锣打鼓周五周五 敲锣打鼓周五周五 敲锣打鼓周五周五 敲锣打鼓周五周五 敲锣打鼓周五周五 敲锣打鼓周五周五 敲锣打鼓</div>
                </div>
                <div className={itemBox} onClick={() => goArticle(1)}>
                    <div className={styDate}>
                        <span className={styDay}>15</span>
                        <span className={styMonth}>4月</span>
                    </div>
                    <div className={classNames(styItemBanner, styItemBanner4)}>
                        <img className={styItemBannerImg} src={icon.BANNER3} alt='文章广告图' />
                        <img className={styItemBannerImg} src={icon.BANNER3} alt='文章广告图' />
                        <img className={styItemBannerImg} src={icon.BANNER3} alt='文章广告图' />
                        <img className={styItemBannerImg} src={icon.BANNER3} alt='文章广告图' />
                    </div>
                    <div className={styItemTitle}>周五周五 敲锣打鼓周五周五 敲锣打鼓周五周五 敲锣打鼓周五周五 敲锣打鼓周五周五 敲锣打鼓周五周五 敲锣打鼓周五周五 敲锣打鼓周五周五 敲锣打鼓周五周五 敲锣打鼓周五周五 敲锣打鼓</div>
                </div>
            </div>
            <div style={{ paddingTop: '20px', textAlign: 'center' }}>郑进的个人主页正在开发中，敬请期待...</div>
        </div>
    )
}

export default MainContent
