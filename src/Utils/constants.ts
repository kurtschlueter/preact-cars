export type DetailRowType = {
    heading?: string;
    content?: string;
    subText?: string;
};

export type SpecialForm = {
    description: string;
    fields: {label: string, type: string}[]
};

export type SpecialButton = {
    title: string;
    type: string;
    link?: string;
    phoneNumber?: string;
    conversionCode?: string;
}

export type SingleSpecialType = {
    specialsType: string;
    imageUrl: string;
    headerTitle: string;
    rows: DetailRowType[];
    buttons: SpecialButton[];
    disclaimer: string;
    form: SpecialForm;
};

enum ClientSettingsChild {
    SETTINGS = 'SETTINGS',
    NEW_FINANCE = 'NEW_FINANCE',
    NEW_LEASE = 'NEW_LEASE',
    NEW_REBATE = 'NEW_REBATE',
    USED_FINANCE = 'USED_FINANCE',
    USED_REBATE = 'USED_REBATE',
    THEME = 'THEME'
}

export const newTemplateOptions: string[] = [
    ClientSettingsChild.NEW_FINANCE,
    ClientSettingsChild.NEW_LEASE,
    ClientSettingsChild.NEW_REBATE    
]

export type ClientSettings = {
    mapId: number;
    childId: ClientSettingsChild;
    content?: {};
    startDate?: number;
    endDate?: number;
    isActive?: boolean;
    requiresVin?: boolean;
    conversionCode?: string;
    webProviderId?: string;
    callTrackingNumber?: string;
    oemId?: string;
    contact?: {
        crmEmail?: string,
        cc?: string,
        bcc?: string,
        subject?: string
    }
}

export type ProcessedClientDataType = {
    settings: ClientSettings | any;
    specials: SingleSpecialType[];
    theme: any;
}

const breakpoints: number[] = [770, 500];

export const mediaQueries: string[] = breakpoints.map( bp => `@media (max-width: ${bp}px)` );

// GFYS IE
// https://stackoverflow.com/questions/9847580/how-to-detect-safari-chrome-ie-firefox-and-opera-browser
export const isIE = /*@cc_on!@*/false || !!document['documentMode'];
export const isEdge = !isIE && !!window['StyleMedia'];

// needed bc image is a background so it will not auto fill a div. Div needs to be set.
// On web, usually the image container will not be the div that sets the width, the buttons or content will.
// On mobile, this height will take effect.
export const minImageContainerHeightPx: number = 239;

export const BUTTON_TYPES = {
    APPLY_FINANCE: "APPLY_FINANCE",
    INVENTORY: "INVENTORY",
    PHONE_CALL: "PHONE_CALL",
    PRICE_TAG: "PRICE_TAG"
}

export const CLOSABLE_EVENT_CLASS = 'tc_modal_closable_event';

export const FIELD_TYPES = {
    textArea: "TEXT_AREA",
    textField: "TEXT_FIELD"
};

export const VALIDATION_FIELDS = {
    phoneNumber: {
        displayName: "Phone Number",
    },
    email: {
        displayName: "E-mail",
        
    }
}

export type TextStyleProps = { theme: {
    fontType: string;
    textAlignment: string;
    fontSize: string;
    fontStyle: string;
    fontWeight: string;
    fontColor: string;
    PRIMARY: string;
    SECONDARY: string;
} }

export type EmailInfo = {
    subject: string;
    addresses: string[];
    bcc?: string[];
    cc?: string[];
    body: { label: string, text: string }[];
    source?: string;
}