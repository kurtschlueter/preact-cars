export const configureGoogleTracking = (conversionCodeEvent: string) => {
    let conversionActionId = undefined;
    
    if (conversionCodeEvent != undefined) {
        const conversionCodeSplit = conversionCodeEvent.split("/");
        if (conversionCodeSplit != undefined && conversionCodeSplit.length > 0) {
            conversionActionId = conversionCodeSplit[0];
        }
    }

    const s = document.createElement('script');
    s.src = `https://www.googletagmanager.com/gtag/js?id=${conversionActionId}`;
    s.async = true;
    document.head.appendChild(s);

    const s2 = document.createElement('script');
    s2.type = 'text/javascript';
    s2.innerHTML = `window.dataLayer = window.dataLayer || [];function gtag() { dataLayer.push(arguments); }gtag('js', new Date());gtag('config', '${conversionActionId}');console.log('done configuring...')`;
    document.head.appendChild(s2);

    const s3 = document.createElement('script');
    s3.type = 'text/javascript';
    s3.innerHTML = `function tc_webspecials_conversion(n){return gtag("event","conversion",{send_to:"${conversionCodeEvent}",event_callback:function(){void 0!==n&&(window.location=n)}}),!1}`;
    document.head.appendChild(s3);
}