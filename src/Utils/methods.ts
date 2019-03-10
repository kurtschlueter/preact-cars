import { EmailInfo, VALIDATION_FIELDS } from "./constants";

export const generatePostEmailObject = (formData: any, contextEmailData: any): EmailInfo => {
    const { source, subject, crmEmail, bcc, cc } = contextEmailData;
    return {
        source, subject,
        addresses: [crmEmail],
        bcc, cc,
        body: Object.keys(formData).map(k => { return { label: k, text: formData[k] } })
    }
}

export const getValidationErrors = (currentForm: any): { field: string; error: string }[] => {
    const errors: { field: string; error: string }[] = [];
    !validateEmail(currentForm[VALIDATION_FIELDS.email.displayName]) ? errors.push({field: VALIDATION_FIELDS.email.displayName, error: "Invalid email address"}) : null;
    !validatePhoneNumber(currentForm[VALIDATION_FIELDS.phoneNumber.displayName]) ? errors.push({field: VALIDATION_FIELDS.phoneNumber.displayName, error: "Invalid phone number"}) : null;
    
    return errors
}

// https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
export const validateEmail = (email: string): boolean => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// https://stackoverflow.com/questions/4338267/validate-phone-number-with-javascript
export const validatePhoneNumber = (email: string): boolean => {
    const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
    return re.test(String(email).toLowerCase());
}

// https://stackoverflow.com/questions/17651207/mask-us-phone-number-string-with-javascript
export const generateNumberMask = (value: string): string => {
    const replaceTarget: string[] = value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
    const final: string = !replaceTarget[2] ? replaceTarget[1] : '(' + replaceTarget[1] + ') ' + replaceTarget[2] + (replaceTarget[3] ? '-' + replaceTarget[3] : '');
    return final
}