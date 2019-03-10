import styled, { css } from 'preact-emotion'
import { mediaQueries } from '../../../Utils/constants';

type ActionButtonContainerProps = {
    theme: {
        buttonBackgroundColor: string;
        buttonBorder: string;
        buttonBoxShadowColor: string;
        fontType: string;
        textAlignment: string;
        fontSize: string;
        fontWeight: string;
        fontColor: string;
        buttonAnimation: boolean;
        fontStyle: string;
        PRIMARY: string;
        SECONDARY: string;
    };
    inactive: boolean;
}


export const DeactivatedButton = styled('div')`
    color: #ffffff;
    background: #b8c0cc;
    font-size: 14px;
    font-weight: 500;
    font-family: Arial;   
    display: flex;
    align-items: center;
    justify-content: center;
    -ms-flex-pack: center;
    user-select: none;
    border-radius: 1px;
    margin-top: 10px;
    margin-bottom: 10px;
`;
export const ActionButtonContainer = styled('div')`
    height: 35px;
    min-width: 180px;
    width: auto;
    color: ${(props: ActionButtonContainerProps) => props.theme.fontColor};
    background: ${(props: ActionButtonContainerProps) => props.theme.buttonBackgroundColor};
    font-size: ${(props: ActionButtonContainerProps) => props.theme.fontSize};
    font-weight: ${(props: ActionButtonContainerProps) => props.theme.fontWeight};
    font-style: ${(props: ActionButtonContainerProps) => props.theme.fontStyle};
    font-family: ${(props: ActionButtonContainerProps) => props.theme.fontType === 'PRIMARY' ? props.theme.PRIMARY : props.theme.SECONDARY};
    display: flex;
    align-items: center;
    justify-content: center;
    -ms-flex-pack: center;
    user-select: none;
    border-radius: 1px;
    opacity: ${(props: ActionButtonContainerProps) =>  props.inactive ? ".5" : "1"};    
    box-shadow: ${(props: ActionButtonContainerProps) =>  props.inactive ? "none" : `3px 3px 0 0 ${props.theme.buttonBoxShadowColor ? props.theme.buttonBoxShadowColor : "#b8c0cc"}`};
    border: ${(props: ActionButtonContainerProps) => props.theme.buttonBorder};
    margin-top: 10px;
    margin-bottom: 10px;
    position: relative;
    overflow: hidden;
    &::after {
        background: #ffffff;
        content: "";
        height: 155px;
        left: -75px;
        opacity: ${(props: ActionButtonContainerProps) => props.theme.buttonAnimation ? .2 : 0};
        position: absolute;
        top: -50px;
        transform: rotate(35deg);
        width: 30px;
    }
    ${(props: ActionButtonContainerProps) => props.inactive ? "" :  `
        &::after {
            background: #ffffff;
            content: "";
            height: 155px;
            left: -75px;
            opacity: ${(props: ActionButtonContainerProps) => props.theme.buttonAnimation ? .2 : 0};
            position: absolute;
            top: -50px;
            transform: rotate(35deg);
            width: 30px;
        };
        &:hover {
            cursor: pointer;
        };
        &:hover:after {
            left: 120%;
            transition: all 1350ms cubic-bezier(0.19, 1, 0.22, 1);
        };
        &:active {
            position: relative;
            cursor: pointer;
            outline: none;
            right: -2px;
            top: 2px;
            box-shadow: 0px 0px 0 0 #b8c0cc;        
        };
    `}
`;

export const ActionButtonCSS = css({
    [mediaQueries[0]]: { width: '20%', minWidth: '200px', margin: '5px' },
    [mediaQueries[1]]: { width: '75%', margin: '5px' }
});

type IconProps = {
    theme: {
        backgroundColor: string;
    };
    inactive: boolean;
}

export const Icon = styled('div')`
    width: 36px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    -ms-flex-pack: center;
    background: ${(props: IconProps) => props.inactive ? "#82949c" : props.theme.backgroundColor};
`;

export const IconWrapper = styled('div')`
    width: 15px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    -ms-flex-pack: center;
`;

export const ButtonTextContainer = styled('div')`
    width: calc(100% - 36px);
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    -ms-flex-pack: center;
`;

