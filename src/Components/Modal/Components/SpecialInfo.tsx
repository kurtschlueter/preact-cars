import { h, Component } from 'preact';
import * as Styles from './SpecialInfoPresenter';
import { SingleSpecialType, isEdge, isIE } from '../../../Utils/constants';
import { DetailRow } from '../../Special/Components/DetailRow';
import { Image } from '../../Special/Components/Image';
import { Context } from "../../../Utils/context";

export namespace SpecialInfoNS {
    export interface Props {
        special: SingleSpecialType;
    }

    export interface State {}
}

export class SpecialInfo extends Component<SpecialInfoNS.Props, SpecialInfoNS.State> {

    constructor() { super(); }    

    renderHeader(): JSX.Element {
        return <Context.Consumer>
            {context => {
                return (
                    <Styles.HeaderSection>
                        <Styles.HeaderTitle theme={{...context.theme.content.headerTitle, ...context.fonts}}>
                            {this.props.special.headerTitle}
                        </Styles.HeaderTitle>
                    </Styles.HeaderSection>
                )
            }}
        </Context.Consumer>
    }

    renderMain(): JSX.Element {
        const jsxRowsToPrint: JSX.Element[] = [];
        
        this.props.special.rows.map((row, index) => {
            index != 0 ? jsxRowsToPrint.push(<Styles.Divider />) : null;
            jsxRowsToPrint.push(<DetailRow rowIndex={index} row={row} forceMobileVersion={true} />);
        })

        return (
            <Styles.MainSection>
                <Image url={this.props.special.imageUrl} />
                <Styles.Divider />
                <Styles.DetailRowsContainer isEdge={isEdge} isIE={isIE}>
                    { jsxRowsToPrint }
                </Styles.DetailRowsContainer>
            </Styles.MainSection>
        )
    }

    render(): JSX.Element {
        return (
            <Styles.Container>
                { this.renderHeader() }
                { this.renderMain() }
            </Styles.Container>
        )
    }
}
