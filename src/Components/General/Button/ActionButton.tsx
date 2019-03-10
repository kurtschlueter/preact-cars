import { h, Component } from 'preact';
import * as Styles from './ActionButtonPresenter';
import { Context } from '../../../Utils/context';
import { Icon } from "../../General/Icon/Icon";

export namespace ActionButtonNS {
    export interface Props {
        uniqueIndex: string;
        button: {title: string, type: string};
        buttonClick: () => void;
        inactive?: boolean;
    }

    export interface State { }
}

export class ActionButton extends Component<ActionButtonNS.Props, ActionButtonNS.State> {

    constructor() { super(); }

    render(): JSX.Element {
        return (
            <Context.Consumer>
                { context => {
                    const buttonTheme: any = context.theme.content.buttons[this.props.button.type];
                    return <Styles.ActionButtonContainer
                        key={this.props.uniqueIndex}
                        className={Styles.ActionButtonCSS}
                        theme={{ ...buttonTheme, ...context.fonts }}
                        inactive={this.props.inactive}
                        onClick={this.props.buttonClick}
                    >
                        <Styles.Icon inactive={this.props.inactive} theme={{ backgroundColor: buttonTheme.iconBackgroundColor}}>
                            <Styles.IconWrapper>
                                <Icon iconType={this.props.button.type} color={this.props.inactive ? "#ffffff" :buttonTheme.iconColor} />
                            </Styles.IconWrapper>
                        </Styles.Icon>
                        <Styles.ButtonTextContainer>    
                            <span> {this.props.button.title} </span>
                        </Styles.ButtonTextContainer>
                    </Styles.ActionButtonContainer>                
                } }
            </Context.Consumer>
        );
    }
}