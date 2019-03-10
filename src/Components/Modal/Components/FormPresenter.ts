import styled, { css } from 'preact-emotion'
import { mediaQueries, TextStyleProps } from '../../../Utils/constants';

export const Container = styled('div')`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    padding: 20px;    
`;

export const ContainerCSS = css({
    [mediaQueries[0]]: {
        borderTop: 'solid 1px #e0e6ed'
    }
});

export const Description = styled('div')`
    width: auto;
    height: auto;
    display: flex;
    font-family: ${(props: TextStyleProps) => props.theme.fontType === 'PRIMARY' ? props.theme.PRIMARY : props.theme.SECONDARY};
    font-size: ${(props: TextStyleProps) => props.theme.fontSize};
    font-weight: ${(props: TextStyleProps) => props.theme.fontWeight};
    font-style: ${(props: TextStyleProps) => props.theme.fontStyle};
    color: ${(props: TextStyleProps) => props.theme.fontColor};
    font-stretch: normal;
    line-height: 1.57;
    letter-spacing: 0.5px;
    margin-bottom: 20px;
`;

export const InputContainer = styled('div')`
    width: auto;
    height: auto;
    display: flex;
    flex-direction: column;
`;

export const TitleContainer = styled('div')`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    -ms-flex-pack: start;
    margin-bottom: 10px;
`;

export type FormTextProps = any

export const InputTitle = styled('div')`
    font-family: ${(props: FormTextProps) => props.theme.fontType === 'PRIMARY' ? props.theme.PRIMARY : props.theme.SECONDARY};
    font-size: ${(props: FormTextProps) => props.theme.fontSize};
    font-weight: ${(props: FormTextProps) => props.theme.fontWeight};
    font-style: ${(props: FormTextProps) => props.theme.fontStyle};
    line-height: 1;
    letter-spacing: 0.5px;    
    color: ${(props: FormTextProps) => props.hasInlineError ? "#c9423f" : props.theme.fontColor};
`;

export const ErrorNotice = styled('div')`
    font-family: ${(props: FormTextProps) => props.theme.fontType === 'PRIMARY' ? props.theme.PRIMARY : props.theme.SECONDARY};
    font-size: 10px;
    font-weight: ${(props: FormTextProps) => props.theme.fontWeight};
    font-style: ${(props: FormTextProps) => props.theme.fontStyle};
    line-height: 1;
    letter-spacing: 0.5px;
    color: ${(props: FormTextProps) => props.theme.fontColor};
    margin-left: 10px;
`;

export const TextField = styled('input')`
    width: auto;
    height: auto;
    display: flex;
    font-family: Arial;
    font-size: 16px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1;
    letter-spacing: 0.5px;
    color: #373f52;
    border: none;
    outline: none;
    border-bottom: solid 1px ${(props: FormTextProps) => props.hasInlineError ? "#c9423f" : props.theme.fontColor};
    margin-bottom: 11px;
    border-radius: 0;
    &:focus{
        border-bottom: solid 2px ${(props: FormTextProps) => props.hasInlineError ? "#c9423f" :props.theme.fontColor};
        margin-bottom: 10px;
    }
`;

export const TextArea = styled('textarea')`
    width: auto;
    height: auto;
    min-height: 80px;
    display: flex;
    font-family: Arial;
    font-size: 16px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1;
    letter-spacing: 0.5px;
    color: #373f52;
    margin-bottom: 12px;
    resize: none;
    outline: none;
    border-radius: 1px;
    border: solid 1px ${(props: FormTextProps) => props.theme.fontColor};
    padding: 5px;
    overflow: auto;
    &:focus{
        box-shadow: 0px 0px 0px 1px ${(props: FormTextProps) => props.theme.fontColor};
    }
`;

export const ButtonWrapper = styled('div')`
    width: 100%;
    height: auto;
    display: flex;
    -ms-flex-pack: space-around;
    justify-content: space-around;
`;