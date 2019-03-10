import { h, Component } from 'preact';
import * as Styles from './ModalInfoFormPresenter';
import { SingleSpecialType, CLOSABLE_EVENT_CLASS, isIE } from '../../Utils/constants';
import { SpecialInfo } from './Components/SpecialInfo';
import { Form } from './Components/Form';
import { Context } from "../../Utils/context";

export namespace ModalInfoFormNS {
    export interface Props {
        uniqueIndex: string;
        onClick: (event: any) => void;
        onSubmit: () => void;
        special: SingleSpecialType;
        currentForm: any;
        formValidationErrors: {field: string; error: string}[];
        isFormSubmitted: boolean;
        onChange: (evemt: any, field: string) => void;
    }

    export interface State {
        bodyElement: {
            inlineWidth: string;
            inlineMargin: string;
        };
    }
}

export class ModalInfoForm extends Component<ModalInfoFormNS.Props, ModalInfoFormNS.State> {

    constructor() {
        super();
        this.state = { bodyElement: {
            inlineWidth: "",
            inlineMargin: ""
        }};
        this.renderFooter = this.renderFooter.bind(this);
    }

    // :( These are needed to halt scrolling in body when modal is active
    componentDidMount(): void {
        const docB: any = document.body;

        const inlineWidth = docB.style.width;
        const inlineMargin = docB.style.margin;
        
        docB.style.overflow = "hidden";
        docB.style.position = "fixed";
        docB.style.width = "100%";
        docB.style.margin = "0";
        this.setState({ bodyElement: { inlineWidth, inlineMargin}})
    }

    componentWillUnmount(): void {
        const docB: any = document.body;
        docB.style.overflow = "scroll";
        docB.style.position = "static";
        docB.style.width = this.state.bodyElement.inlineWidth;
        docB.style.margin = this.state.bodyElement.inlineMargin;
    }

    renderCloseSection(): JSX.Element {
        return (
            <Styles.CloseSection className={CLOSABLE_EVENT_CLASS}>
                <Styles.CloseTextWrapper className={CLOSABLE_EVENT_CLASS}>
                    <Styles.CloseText className={CLOSABLE_EVENT_CLASS}>Close</Styles.CloseText>
                    <Styles.CloseX className={CLOSABLE_EVENT_CLASS}>X</Styles.CloseX>
                </Styles.CloseTextWrapper>
            </Styles.CloseSection>
        )
    }

    renderMain(): JSX.Element {
        return <Context.Consumer>
            {context => {
                return <Styles.MainContainer className={Styles.MainContainerCSS}>
                    <Styles.InfoWrapper className={Styles.InfoWrapperCSS}>
                        <SpecialInfo special={this.props.special} />
                    </Styles.InfoWrapper>
                    <Styles.FormWrapper className={Styles.FormWrapperCSS}>
                        {
                            !this.props.isFormSubmitted ?
                                <Form
                                    uniqueIndex={`${this.props.uniqueIndex}_form`}
                                    form={this.props.special.form}
                                    currentForm={this.props.currentForm}
                                    formValidationErrors={this.props.formValidationErrors}
                                    button={this.props.special.buttons[0]}
                                    onChange={this.props.onChange}
                                    onSubmit={this.props.onSubmit}
                                />
                                :
                                <Styles.Success>
                                    <Styles.SuccessTitle theme={{ ...context.theme.content.disclaimer, ...context.fonts }}> Success! </Styles.SuccessTitle>
                                    <Styles.SuccessBody theme={{ ...context.theme.content.disclaimer, ...context.fonts }}>
                                        {`Your request is being processed and we will be in touch with you about the ${this.props.special.headerTitle} shortly.`}
                                    </Styles.SuccessBody>
                                    <Styles.SuccessThankYou theme={{ ...context.theme.content.disclaimer, ...context.fonts }}> Thank You. </Styles.SuccessThankYou>
                                </Styles.Success>
                        }
                    </Styles.FormWrapper>
                </Styles.MainContainer>
            }}
        </Context.Consumer>
    }

    renderFooter(): JSX.Element {

        return <Context.Consumer>
            {context => {
                return <Styles.FooterSection>
                    <Styles.FooterText theme={{ ...context.theme.content.disclaimer, ...context.fonts }}>
                        {this.props.special.disclaimer}
                    </Styles.FooterText>
                </Styles.FooterSection>
            }}
        </Context.Consumer>
    }

    render(): JSX.Element {
        return (
            <Styles.Container className={CLOSABLE_EVENT_CLASS} onClick={(event) => this.props.onClick(event)}>
                <Styles.Container2 className={Styles.Container2CSS}>

                    {this.renderCloseSection()}

                    <Styles.ScrollContainer isIE={isIE}>
                        <Styles.ContentSection>
                            {this.renderMain()}
                            {this.renderFooter()}
                        </Styles.ContentSection>
                    </Styles.ScrollContainer>
                </Styles.Container2>
            </Styles.Container>
        );
    }
}
