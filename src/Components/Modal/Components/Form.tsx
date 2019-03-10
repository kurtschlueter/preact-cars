import { h, Component } from 'preact';
import * as Styles from './FormPresenter';

import { SpecialForm, FIELD_TYPES, BUTTON_TYPES } from '../../../Utils/constants';
import { Context } from "../../../Utils/context";
import { Icon } from "../../General/Icon/Icon";
import { ActionButton } from "../../General/Button/ActionButton";

export namespace FormNS {
    export interface Props {
        uniqueIndex: string;
        form: SpecialForm;
        button: {title: string; type: string};
        currentForm: any;
        formValidationErrors: {field: string; error: string}[];
        onChange: (event: any, field: string) => void;
        onSubmit: () => void;
    }

    export interface State { }
}

export class Form extends Component<FormNS.Props, FormNS.State> {

    constructor() { super(); }

    renderFields(context: any): JSX.Element[] {
        let errorsFilter: { field: string; error: string }[];
        let hasInlineError: boolean;
        let inlineElement: JSX.Element | null;

        return this.props.form.fields.map((f, index) => {
            errorsFilter = this.props.formValidationErrors.filter(fve => fve.field === f.label);
            hasInlineError = errorsFilter.length != 0;
            inlineElement = hasInlineError ?
                <Styles.ErrorNotice theme={{...context.theme.content.form.fields[index], ...context.fonts}}> 
                    { errorsFilter.map(ef => ef.error).join("") }
                </Styles.ErrorNotice> : null;

            return (
                <Styles.InputContainer key={`${this.props.uniqueIndex}_input_${index}_container`}>
                    {
                        <Styles.TitleContainer>
                            <Styles.InputTitle hasInlineError={hasInlineError} theme={{...context.theme.content.form.fields[index], ...context.fonts}}> 
                                {f.label} { f.type === FIELD_TYPES.textField ? "*" : "(optional)" } 
                            </Styles.InputTitle>
                            { inlineElement }
                        </Styles.TitleContainer>
                    }
                    {
                        f.type === FIELD_TYPES.textField ?
                            <Styles.TextField
                                key={`${this.props.uniqueIndex}_input_${index}_field`}
                                onInput={(event) => this.props.onChange(event, f.label)}
                                hasInlineError={hasInlineError}
                                theme={{...context.theme.content.form.fields[index], ...context.fonts}}
                                value={(this.props.currentForm && this.props.currentForm[f.label]) ? this.props.currentForm[f.label] : ""}
                            />
                            :
                            <Styles.TextArea
                                key={`${this.props.uniqueIndex}_input_${index}_field`}
                                onInput={(event) => this.props.onChange(event, f.label)}
                                theme={{...context.theme.content.form.fields[index], ...context.fonts}}
                                hasInlineError={hasInlineError}
                                value={(this.props.currentForm && this.props.currentForm[f.label]) ? this.props.currentForm[f.label] : ""}
                            />
                    }
                </Styles.InputContainer>
            )
        })
    }

    render(): JSX.Element {
        const inactive: boolean = this.props.form.fields.filter(f => {
            return f.type === FIELD_TYPES.textField && (!this.props.currentForm || !this.props.currentForm[f.label])
        }).length > 0;

        return (
            <Context.Consumer>
                { context => {
                    return <Styles.Container className={Styles.ContainerCSS}>
                        <Styles.Description theme={{...context.theme.content.form.description, ...context.fonts}}> {this.props.form.description} </Styles.Description>
                        {this.renderFields(context)}
                        <Styles.ButtonWrapper>
                            <ActionButton
                                uniqueIndex={`${this.props.uniqueIndex}_action_button_form`}
                                buttonClick={inactive ? () => {} : this.props.onSubmit}
                                button={this.props.button}
                                inactive={inactive}
                            />
                        </Styles.ButtonWrapper>
                    </Styles.Container>
                } }
            </Context.Consumer>
        )
    }
}