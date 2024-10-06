import { Component } from 'react'

type Props = object;
type State = object;

export default class NotFound extends Component<Props, State> {
    constructor (props: Props) {
        super(props);
    }

    render () {
        return (
            <div>404 not fount</div>
        )
    }
}