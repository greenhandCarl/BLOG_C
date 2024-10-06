import { Component, createRef } from "react"
import { Toast } from 'antd-mobile'
import withRouter from '../Hoc/withRouter'
import ArticleHeader from './components/ArticleHeader'
import style from './index.scss'
import { Location, NavigateFunction, useSearchParams } from 'react-router-dom'
import { findArticle, delArticle, createArticle, updateArticle } from '@/api/article'
import BottomOperate from "./components/BottomOperate"
import { uploadImg } from "@/api/oss"
import classNames from "classnames"


type Props = {
    navigate: NavigateFunction,
    location: Location,
    searchParams: ReturnType<typeof useSearchParams>,
    params?: Record<string, string | undefined>
};
type State = {
    htmlStr: string,
    title: string,
    id: number | null,
    isEditing: boolean,
    focusing: boolean
};

class Article extends Component<Props, State> {
    private readonly editable = createRef<HTMLDivElement>();
    public constructor (props: Props) {
        super(props)
        this.state = {
            htmlStr: '',
            title: '',
            id: null,
            isEditing: false,
            focusing: false
        }
    }

    private readonly goHome = () => {
        this.props.navigate('/')
    }

    private readonly initArticle = async () => {
        const { searchParams } = this.props
        const id = Number(searchParams[0].get('id'))
        if (id) {
            const res = await findArticle(id)
            const { content, title } = res.data;
            this.setState({
                htmlStr: content,
                title,
                id,
            })
        } else {
            this.setState({ isEditing: true })
        }
    }

    private readonly onEdit = () => {
        this.setState({
            isEditing: true,
        }, () => {
            const editableDom = this.editable.current
            if (editableDom) {
                editableDom.focus();
                const range = window.getSelection() // 创建range
                if (range) {
                    range.selectAllChildren(editableDom); //range 选择obj下所有子内容
                    range.collapseToEnd(); // 光标移至最后
                }
            }
        })
    }

    private readonly onDel = async () => {
        const { id } = this.state
        const { navigate } = this.props
        if (id) {
            const res = await delArticle(id)
            if (res) {
                Toast.show({
                    content: '删除成功',
                    afterClose: () => navigate(-1),
                    duration: 1500,
                })
            }
        }
    }

    private readonly onSave = async () => {
        const content = this.editable.current?.innerHTML || ''
        const imgReg = /<img.*?(?:>|\/>)/gi;
        //匹配src属性
        const srcReg = /src=['"]?([^'"]*)['"]?/i;
        const imgArr = content.match(imgReg)
        console.log('imgArr', imgArr)
        const imgs: string[] = []
        imgArr?.forEach((item: string) => {
            const src = item.match(srcReg)
            console.log('src', src);
            if (src && src[1]) imgs.push(src[1] as string)
        })
        const { id } = this.state
        const { navigate } = this.props
        let flag = false;
        if (id) {
            const res = await updateArticle({ id, content, imgs })
            flag = res.success
        } else {
            const res = await createArticle({ content, imgs })
            flag = res.success
        }
        Toast.show({
            icon: flag ? 'success' : 'fail',
            content: flag ? '保存成功' : '保存失败',
            afterClose: () => navigate(-1),
            duration: 1500
        })
    };

    private readonly onImgChange = (files: HTMLInputElement["files"], done: () => void) => {
        this.setState({ isEditing: true }, async () => {
            if (files) {
                Toast.show({
                    icon: 'loading',
                    content: '加载中…',
                    duration: 0
                })
                const file = files[0]
                const res = await uploadImg(file)
                console.log('uploadImg res', res)
                const img = document.createElement('img')
                img.src = res.data.url
                img.style.width = '80%'
                img.style.marginLeft = '10%'
                const editableDom = this.editable.current
                if (editableDom) {
                    img.onload = () => {
                        Toast.clear()
                        img.addEventListener('click', () => {
                            editableDom.focus();
                        })
                        const div = document.createElement('div')
                        const br = document.createElement('br')
                        div.appendChild(br)
                        editableDom.appendChild(div)
                        done()
                    }
                    const div = document.createElement('div')
                    div.appendChild(img)
                    editableDom.appendChild(div)
                }
            }
        })
    };

    private readonly onEditorFocus = () => {
        const editableDom = this.editable.current
        if (editableDom) {
            const range = window.getSelection() // 创建range
            if (range) {
                range.selectAllChildren(editableDom); //range 选择obj下所有子内容
                range.collapseToEnd(); // 光标移至最后
            }
            this.setState({ focusing: true }, () => {
                document.body.scrollTop = document.body.scrollHeight - document.documentElement.clientHeight + 450
            })
        }
    }

    private readonly onEditorBlur = () => {
        this.setState({ focusing: false }, () => {
            document.body.scrollTop = document.body.scrollHeight - document.documentElement.clientHeight
        })
    }


    public render () {
        const {
            htmlStr,
            title,
            isEditing,
            focusing,
        } = this.state;

        return (
            <div className={style.articleContainer}>
                <ArticleHeader
                    isEditing={isEditing}
                    onEdit={this.onEdit}
                    onClose={this.goHome}
                    onSave={this.onSave}
                    onDel={this.onDel}
                />
                {title && <div className={style.title}>{title}</div>}
                {
                    isEditing
                        ? <div className={style.content}>
                            <div
                                id='editable'
                                contentEditable
                                suppressContentEditableWarning
                                ref={this.editable}
                                className={classNames(style.textarea, { [style.focusing]: focusing })}
                                dangerouslySetInnerHTML={{__html: htmlStr}}
                                onFocus={this.onEditorFocus}
                                onBlur={this.onEditorBlur}
                            />
                        </div>
                        : <div
                            className={style.htmlContainer}
                            dangerouslySetInnerHTML={{__html: htmlStr}}
                        />
                }
                <BottomOperate
                    onDel={this.onDel}
                    onImgChange={this.onImgChange}
                />
            </div>
        )
    }

    public componentDidMount () {
        this.initArticle()
    }
}

export default withRouter(Article)