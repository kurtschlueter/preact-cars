import { h, Component } from 'preact';
import * as Styles from './ActionsContainerPresenter';
import { SingleSpecialType } from '../../../Utils/constants';
import { Context } from '../../../Utils/context';
import { Icon } from "../../General/Icon/Icon";
import { ActionButton } from "../../General/Button/ActionButton";

export namespace ActionsContainerNS {
    export interface Props {
        uniqueIndex: string;
        special: SingleSpecialType;
        buttonClick: (buttonType: string) => void;
    }

    export interface State { }
}

export class ActionsContainer extends Component<ActionsContainerNS.Props, ActionsContainerNS.State> {

    constructor() { super(); }

    render(): JSX.Element {
        return (
            <Context.Consumer>
                { context => {

                    return <Styles.Container className={Styles.ContainerCSS}>
                        {
                            this.props.special.buttons.map((b, index) => {
                                return (
                                    <ActionButton
                                        key={`${this.props.uniqueIndex}_action_button_${index}`}
                                        uniqueIndex={`${this.props.uniqueIndex}_action_button_${index}`}
                                        buttonClick={() => this.props.buttonClick(b.type)}
                                        button={b}
                                    />
                                )
                            })
                        }
                    </Styles.Container>
                } }
            </Context.Consumer>
        );
    }
}