import { Component } from 'react'
// import { Button } from 'antd-mobile'
import style from './index.scss'
import MainContent from './component/MainContent'
import Aside from './component/Aside'
import Header from './component/Header'

type Props = object;
type State = {
    showAside: boolean
};
export default class Home extends Component<Props, State> {
    public constructor (props: Props) {
        super(props)
        this.state = {
            showAside: false,
        }
    }

    private readonly openAside = () => {
        this.setState({ showAside: true })
    };

    private readonly closeAside = () => {
        const { showAside } = this.state
        if (showAside) {
            this.setState({ showAside: false })
        }
    }

    private readonly toggleAside = () => {
        const { showAside } = this.state
        this.setState({ showAside: !showAside })
    }


    public render () {
        const { showAside } = this.state;

        return (
            <div className={style.homeContainer}>
                <Header onListOutlineClick={this.toggleAside} />
                <div className={style.toggleCon}>
                    <Aside visible={showAside} />
                    <MainContent
                        offsetX={showAside}
                        onMainContentClick={this.closeAside}
                        onAvaterClick={this.openAside}
                    />
                </div>
                <div className={style.govCon}>
                    <a className={style.link} href="https://beian.miit.gov.cn/" target="_blank">粤ICP备2022074761号</a>
                </div>
            </div>
        )
    }
}
