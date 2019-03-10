import { h, Component } from 'preact';
import { Special } from './Special/Special';
import * as Styles from './SpecialsContainerPresenter';
import { ProcessedClientDataType, SingleSpecialType, newTemplateOptions } from '../Utils/constants';
import { Context } from '../Utils/context';

import { getDataFromS3, loadFont } from "../Utils/requests";
import { configureGoogleTracking } from '../Utils/googleTracking';

export namespace SpecialsContainerNS {
    export interface Props { }
    export interface State {
        processedClientData: ProcessedClientDataType | undefined;
        receivedResponse: boolean;
    }
}

export class SpecialsContainer extends Component<SpecialsContainerNS.Props, SpecialsContainerNS.State> {

    constructor() {
        super();
        this.state = {
            processedClientData: undefined,
            receivedResponse: false
        }
    }

    renderSingles(settings: any): JSX.Element[] {
        return this.state.processedClientData.specials.map((s, index) => {
            return (
                <Styles.SingleSpecialWrapper key={`special_index_${index}`}>
                    <Special specialsIndex={index} special={s} contextSettings={settings} />
                </Styles.SingleSpecialWrapper>
            )
        })
    }

    componentDidMount(): void {
        const windowObject: any = window;

        if (windowObject.tcWebSpecials_clientId) {
            getDataFromS3(windowObject.tcWebSpecials_clientId).then(data => {
                const processedClientData: ProcessedClientDataType = data.processedClientData;
                const { settings, theme, specials } = processedClientData;

                const fonts: any = processedClientData.theme.settings.fonts;
                Object.keys(fonts).forEach(k => {
                    if (fonts[k].fontUrl) loadFont(fonts[k])
                })

                configureGoogleTracking(settings.conversionCode);

                this.setState({
                    receivedResponse: true,
                    processedClientData: { settings, theme, specials: this.filterSpecials(specials, windowObject.tcWebSpecials_carType) }
                })
            })
        } else {
            console.error("tcWebSpecials_clientId not set in window object")
        }
    }

    filterSpecials(specials: SingleSpecialType[], carType: string): SingleSpecialType[] {
        if (!carType) {
            console.error("tcWebSpecials_carType not set in window object")
            return []
        } else if (carType != "NEW" && carType != "USED") {
            console.error("tcWebSpecials_carType is not set to 'NEW' or 'USED'")
            return []
        } else {
            return specials.filter(s => {
                const isInNewOptions: boolean = newTemplateOptions.filter(nto => s.specialsType === nto).length > 0;
                return carType === "NEW" ? isInNewOptions : !isInNewOptions
            })
        }
    }

    render(): JSX.Element | null {
        if (
            !this.state.processedClientData ||
            !this.state.processedClientData.specials ||
            this.state.processedClientData.specials.length === 0
        ) {
            return this.state.receivedResponse ? <Styles.NoSpecials>
                Check back soon for the latest incentives
            </Styles.NoSpecials> : null
        } else {
            const { theme, settings } = this.state.processedClientData;
            return <Context.Provider value={{ theme, settings, fonts: { PRIMARY: theme.settings.fonts.PRIMARY.name, SECONDARY: theme.settings.fonts.SECONDARY.name } }}>
                <Styles.Container>
                    {this.renderSingles(settings)}
                </Styles.Container>
            </Context.Provider>
        }
    }
}
