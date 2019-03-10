import styled, { css } from 'preact-emotion'
import { mediaQueries, TextStyleProps } from '../../Utils/constants';

export const Container = styled('div')`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.65);
    z-index: 9999999999999;
    display: flex;
    -ms-flex-pack: center;
    justify-content: center;
    align-items: center;
`;

export const Container2 = styled('div')`
    display: flex;
    flex-direction: column;
    width: 70%;
    height: auto;
    max-height: 95%;
    max-width: 880px;
    background: transparent;
`;

export const Container2CSS = css({
    [mediaQueries[0]]: { width: '80%' },
});

export const CloseSection = styled('div')`
    display: flex;
    width: auto;
    height: auto;
    background: transparent;
    justify-content: flex-end;
    -ms-flex-pack: end;
    align-items: center;
    color: white; 
    margin-bottom: 5px;    
`;

export const CloseTextWrapper = styled('div')`
    display: flex;
    align-items: center;
    width: auto;
    height: auto;
    user-select: none;
    &:hover {
        cursor: pointer;
    }
`;

export const CloseText = styled('span')`
    color: white;
    font-size: 16px;
    font-family: Arial;
`;

export const CloseX = styled('span')`
    color: white;
    font-family: Arial;
    font-size: 18px;
    font-weight: 500;
    margin-left: 5px;
`;

type ScrollContainerProps = { isIE: boolean; }

export const ScrollContainer = styled('div')`
    height: 100%;
    overflow-y: ${(props: ScrollContainerProps) => props.isIE ? 'scroll' : 'auto'};
    overflow-x: hidden;
    border-radius: 2px;   
`;

export const ContentSection = styled('div')`
    display: flex;
    flex-direction: column;
    width: auto;
    height: 100%;
`;

export const MainContainer = styled('div')`
    display: flex;
    width: auto;
    height: auto;
    border: solid 1px #e0e6ed;
    background-color: #ffffff;
`;

export const MainContainerCSS = css({
    [mediaQueries[0]]: {
        flexDirection: 'column',
    }
});

export const InfoWrapper = styled('div')`
    display: flex;
    width: 50%;
    height: auto;
    border-right: solid 1px #e0e6ed;
`;

export const InfoWrapperCSS = css({
    [mediaQueries[0]]: {
        width: '100%',
    }
});

export const FormWrapper = styled('div')`
    display: flex;
    width: 50%;
    height: auto;
`;

export const FormWrapperCSS = css({
    [mediaQueries[0]]: {
        width: '100%',
    }
});

export const FooterSection = styled('div')`
    width: auto;
    height: auto;
    border: solid 1px #e0e6ed;
    border-top: none;
    background-color: #ffffff;    
`;

export const FooterText = styled('div')`
    font-family: ${(props: TextStyleProps) => props.theme.fontType === 'PRIMARY' ? props.theme.PRIMARY : props.theme.SECONDARY};
    font-size: 9px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 1.22;
    color: #868f9d;
    margin: 13px 8px 8px 13px;
    text-align: ${(props: TextStyleProps) => props.theme.textAlignment}; 
`;

export const Success = styled('div')`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;
    margin: 10px;
`;

export const SuccessTitle = styled('div')`
    font-family: ${(props: TextStyleProps) => props.theme.fontType === 'PRIMARY' ? props.theme.PRIMARY : props.theme.SECONDARY};
    font-size: 18px;
    font-weight: 700;
    font-stretch: normal;
    line-height: 1.29;
    letter-spacing: 0.5px;
    color: #373f52;
    margin-bottom: 10px;
`;

export const SuccessBody = styled('div')`
    font-family: ${(props: TextStyleProps) => props.theme.fontType === 'PRIMARY' ? props.theme.PRIMARY : props.theme.SECONDARY};
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 1.29;
    letter-spacing: 0.5px;
    color: #373f52;
    margin-bottom: 10px;
`;

export const SuccessThankYou = styled('div')`
    font-family: ${(props: TextStyleProps) => props.theme.fontType === 'PRIMARY' ? props.theme.PRIMARY : props.theme.SECONDARY};
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 1.29;
    letter-spacing: 0.5px;
    color: #373f52;
`;
