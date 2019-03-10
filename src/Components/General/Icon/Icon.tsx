import { h, Component } from 'preact';
import { ICON_DETAILS } from "./constants";

export namespace IconNS {
    export interface Props { iconType: string; color: string }
    export interface State { }
}

export class Icon extends Component<IconNS.Props, IconNS.State> {

    constructor() { super(); }

    generatePaths(paths: string[]): JSX.Element[] {
        return paths.map(p => <path className={"path_placeholder"} d={p} />)
    }

    render(): JSX.Element {

        return (
            <svg className={"svg_placeholder"} fill={this.props.color} width="100%" viewBox={ICON_DETAILS[this.props.iconType].viewBox}>
                {this.generatePaths(ICON_DETAILS[this.props.iconType].paths)}
            </svg>
        );
    }
}
