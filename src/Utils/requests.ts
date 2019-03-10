
import { load, Config, Custom } from 'webfontloader';
import { EmailInfo } from "./constants";
import {fetch as fetchPolyfill} from 'whatwg-fetch'
import 'promise-polyfill/src/polyfill';

const SPECIALS_BUCKET: string = `https://s3.amazonaws.com/preact-cars/`;
const SPECIALS_BUILDOUT_BASE: string  = ``;

export const getDataFromS3 = (clientId: string): Promise<any> => {
    console.log("getDataFromS3")
    return fetchPolyfill(`${SPECIALS_BUCKET}${clientId}.json`, { 
        method: 'GET',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin':'*'
        }
    })
    .then( result => result.json() )
    .then(data => {
        console.log("HERE", data)
        return { processedClientData: data }
    }).catch(error => {
        console.log("ERROR", error)
    })
}

export const loadFont = (font: any): void => {
    const customConfig: Custom = {
        families: [font.name],
        urls: [font.fontUrl]
    }
    const webFontConfig: Config = { ...{ custom: customConfig } };
    load(webFontConfig);
}

export const formSubmit = (postEmailObject: EmailInfo): Promise<any> => {
    return fetchPolyfill(`${SPECIALS_BUILDOUT_BASE}/generateEmail`, { 
        method: 'PUT',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body:  JSON.stringify(postEmailObject)
    })
    .then( result => result.json() )
    .then(data => {
        return data
    }).catch(error => {
        console.log("ERROR", error)
    })
}