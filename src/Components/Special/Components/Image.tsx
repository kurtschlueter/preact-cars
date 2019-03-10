import { h, Component } from 'preact';
import * as Styles from './ImagePresenter';

export namespace ImageNS {
    export interface Props {
        url: string;
    }

    export interface State {}
}

export class Image extends Component<ImageNS.Props, ImageNS.State> {

    constructor() { super(); }

    render(): JSX.Element {
        return <Styles.Image url={this.props.url} />
    }
}