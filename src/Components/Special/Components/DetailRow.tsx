import { h, Component } from 'preact';
import * as Styles from './DetailRowPresenter';
import { DetailRowType } from '../../../Utils/constants';
import { Context } from "../../../Utils/context";

export namespace DetailRowNS {
    export interface Props {
        row: DetailRowType;
        rowIndex: number;
        forceMobileVersion: boolean;
    }

    export interface State {}
}

export class DetailRow extends Component<DetailRowNS.Props, DetailRowNS.State> {

    constructor() { super(); }    

    render(): JSX.Element {
        const tempArray = []
        return (
            <Context.Consumer>
                { context => {

                    // Mobile stacks horizontally the heading and content. So only one text alignment can win.
                    // We give precendence to the content, then the header, then just default left. 
                    const mobileAlignmentForce: string = context.theme.content.rows[this.props.rowIndex].content ?
                        context.theme.content.rows[this.props.rowIndex].content.textAlignment :
                        ( context.theme.content.rows[this.props.rowIndex].heading ?
                            context.theme.content.rows[this.props.rowIndex].headingtextAlignment :
                            'left'
                        )

                    return <Styles.Container  className={this.props.forceMobileVersion ? Styles.ContainerCSS : Styles.ContainerCSS} >
                        {
                            this.props.row.heading || this.props.row.content ?
                            <Styles.BreakpointTwo
                                className={
                                    this.props.forceMobileVersion ?
                                    Styles.BreakpointTwoCSSmobile(mobileAlignmentForce) :
                                    Styles.BreakpointTwoCSS(mobileAlignmentForce)
                                }
                            >  
                                { 
                                    this.props.row.heading ?
                                    <Styles.TitleText 
                                        theme={{...context.theme.content.rows[this.props.rowIndex].heading, ...context.fonts}}
                                        className={this.props.forceMobileVersion ? Styles.TitleTextCSSmobile : Styles.TitleTextCSS}
                                    > {this.props.row.heading} </Styles.TitleText> : null
                                }
                                { 
                                    this.props.row.content ?
                                    <Styles.MainText 
                                        theme={{...context.theme.content.rows[this.props.rowIndex].content, ...context.fonts}}
                                        className={this.props.forceMobileVersion ? Styles.MainTextCSSmobile : Styles.MainTextCSS}
                                    > {this.props.row.content} </Styles.MainText> : null
                                }
                            </Styles.BreakpointTwo>
                            :
                            null
                        }
                        { 
                            this.props.row.subText ?
                            <Styles.FooterText
                                theme={{...context.theme.content.rows[this.props.rowIndex].subText, ...context.fonts}}
                                className={this.props.forceMobileVersion ? Styles.FooterTextCSSmobile : Styles.FooterTextCSS}
                            > {this.props.row.subText} </Styles.FooterText> : null }
                    </Styles.Container>
                } }
            </Context.Consumer>
        );
    }
}
