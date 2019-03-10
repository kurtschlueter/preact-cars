import { h, Component } from 'preact';
import * as Styles from './SpecialPresenter';
import { ActionsContainer } from './Components/ActionsContainer';
import { SingleSpecialType, CLOSABLE_EVENT_CLASS, BUTTON_TYPES, EmailInfo, SpecialButton, isEdge, isIE, VALIDATION_FIELDS } from '../../Utils/constants';
import { ModalInfoForm } from '../Modal/ModalInfoForm';
import { DetailRow } from './Components/DetailRow';
import { Image } from './Components/Image';
import { Context } from "../../Utils/context";
import { formSubmit } from "../../Utils/requests";
import { generatePostEmailObject, getValidationErrors, generateNumberMask } from "../../Utils/methods";

export namespace SpecialNS {
    export interface Props {
        specialsIndex: number;
        special: SingleSpecialType;
        contextSettings: any;
    }

    export interface State {
        specialSelected: boolean;
        currentForm: any; // until I have a list of known fxileds, I will leave this open ended
        formValidationErrors: {field: string; error: string}[];
        isFormSubmitted: boolean;
    }
}

export class Special extends Component<SpecialNS.Props, SpecialNS.State> {

    constructor() {
        super();
        this.state = { specialSelected: false, currentForm: {}, formValidationErrors: [], isFormSubmitted: false };
        this.buttonClick = this.buttonClick.bind(this);
        this.onClick = this.onClick.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    buttonClick(buttonType: string): void {
        const buttons: SpecialButton[] = this.props.special.buttons.filter(b => b.type === buttonType);
        const button: SpecialButton = buttons[0];

        if (buttonType === BUTTON_TYPES.PRICE_TAG) {
            this.setState({ specialSelected: true, isFormSubmitted: false })
        }
        else if (buttonType === BUTTON_TYPES.PHONE_CALL) window.open(`tel:${button.phoneNumber}`, "_self");
        else if (button.link) {
             const url = (
                 button.link.indexOf("http:") &&
                 button.link.indexOf("https:")
             ) === -1 ? "http://" + button.link : button.link;
            window.open(url);
        }
    }

    onClick(event: any): void {
        // SVG paths do not have className.indexOf() so this was throwing an error when clicking on icon
        if (!(event.target instanceof SVGElement) && event.target.className.indexOf(CLOSABLE_EVENT_CLASS) != -1) {
            this.setState({ specialSelected: false, isFormSubmitted: false })
        }
    }

    onChange(event: any, field: string): void {
        const value: string = field === VALIDATION_FIELDS.phoneNumber.displayName ? generateNumberMask(event.target.value) : event.target.value;
        this.setState({
            currentForm: { ...this.state.currentForm, [field]: value }
        })
    }

    onSubmit(): void {
        const windowObject: any = window;
        windowObject.tc_webspecials_conversion();
        const formValidationErrors: {field: string; error: string}[] = getValidationErrors(this.state.currentForm);

        if(formValidationErrors.length === 0) {
            const postEmailObject: EmailInfo = generatePostEmailObject(
                this.state.currentForm,
                { ...this.props.contextSettings.emailDefaults, ...this.props.contextSettings.contact }
            )

            formSubmit(postEmailObject)
            .then(_ => {
                this.setState({ isFormSubmitted: true, currentForm: {}, formValidationErrors: [] })
            }).catch(error => {
                // The FE doesn't care if the message fails to send. The responsibility lies elswhere. Check Cloudwatch
                this.setState({ isFormSubmitted: true, currentForm: {}, formValidationErrors: [] })
            })
        } else {
            this.setState({ formValidationErrors })
        }
    }

    renderHeader(): JSX.Element {
        return <Context.Consumer>
            {context => {
                return (
                    <Styles.HeaderSection>
                        <Styles.HeaderTitle theme={{ ...context.theme.content.headerTitle, ...context.fonts }}>
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
            jsxRowsToPrint.push(<DetailRow rowIndex={index} key={`specials_${this.props.specialsIndex}_detail_row_${index}`} row={row} forceMobileVersion={false} />)
            if (index < this.props.special.rows.length - 1) jsxRowsToPrint.push(<Styles.Divider />)
        })

        return (
            <Styles.MainSection>

                <Styles.BreakpointOne className={Styles.BreakpointOneCSS}>
                    <Styles.ImageWrapper className={Styles.ImageWrapperCSS}>
                        <Image url={this.props.special.imageUrl} />
                    </Styles.ImageWrapper>
                    <Styles.DetailRowsWrapper
                        className={Styles.DetailRowsWrapperCSS}
                        isIE={isIE}
                        isEdge={isEdge}
                    >
                        {jsxRowsToPrint}
                    </Styles.DetailRowsWrapper>
                </Styles.BreakpointOne>

                <Styles.ActionsContainer className={Styles.ActionsContainerCSS}>
                    <ActionsContainer
                        uniqueIndex={`${this.props.key}_actions_container`}
                        special={this.props.special}
                        buttonClick={this.buttonClick}
                    />
                </Styles.ActionsContainer>

            </Styles.MainSection>
        )
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
            <Styles.Wrapper>
                <Styles.Container>
                    {this.renderHeader()}
                    {this.renderMain()}
                    {this.renderFooter()}
                </Styles.Container>
                {this.state.specialSelected ?
                    <ModalInfoForm
                        uniqueIndex={`specials_${this.props.specialsIndex}_modal`}
                        onClick={this.onClick}
                        special={this.props.special}
                        currentForm={this.state.currentForm}
                        formValidationErrors={this.state.formValidationErrors}
                        isFormSubmitted={this.state.isFormSubmitted}
                        onChange={this.onChange}
                        onSubmit={this.onSubmit}
                    /> : null
                }
            </Styles.Wrapper>
        )
    }
}