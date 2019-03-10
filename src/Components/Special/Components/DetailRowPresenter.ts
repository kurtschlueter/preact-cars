
import styled, { css } from 'preact-emotion'
import { mediaQueries, TextStyleProps } from '../../../Utils/constants';

export const Container = styled('div')`
    width: auto;
    display: flex;
    flex-direction: column;
    -ms-flex-pack: center;
    justify-content: center;
    padding: 10px;
    height: 100px;
    margin-left: 0px;
`;


export const ContainerCSS = css({
    [mediaQueries[1]]: {
        marginLeft: "10px"
    },
});

export const ContainerCSSmobile = css({});

export const BreakpointTwo = styled('div')`
    height: auto;
    width: auto;
    display: flex;
`;

export const BreakpointTwoCSS = (textAlignment: string) => css({
    flexDirection: 'column',
    ["-ms-flex-pack"]: 'center',
    justifyContent: 'center',
    [mediaQueries[1]]: {
        flexDirection: 'row', 
        ["-ms-flex-pack"]: textAlignment === 'right' ? 'end' : ( textAlignment === 'center' ? 'center' : 'left'), 
        justifyContent: textAlignment === 'right' ? 'flex-end' : ( textAlignment === 'center' ? 'center' : 'flex-start'), 
    }
});

export const BreakpointTwoCSSmobile = (textAlignment: string) => css({
    flexDirection: 'row',
    ["-ms-flex-pack"]: textAlignment === 'right' ? 'end' : ( textAlignment === 'center' ? 'center' : 'left'), 
    justifyContent: textAlignment === 'right' ? 'flex-end' : ( textAlignment === 'center' ? 'center' : 'flex-start'), 
});

export const TitleText = styled('div')`
    font-family: ${(props: TextStyleProps) => props.theme.fontType === 'PRIMARY' ? props.theme.PRIMARY : props.theme.SECONDARY};
    font-size: ${(props: TextStyleProps) => props.theme.fontSize};
    font-weight: ${(props: TextStyleProps) => props.theme.fontWeight};
    font-style: ${(props: TextStyleProps) => props.theme.fontStyle};
    color: ${(props: TextStyleProps) => props.theme.fontColor};
    font-stretch: normal;    
    line-height: 1;
    letter-spacing: normal;
    overflow-wrap: break-word;
    text-align:${(props: TextStyleProps) => props.theme.textAlignment};
`;

export const TitleTextCSS = css({
    width: '100%',
    margin: '5px 0px 5px 0px',
    [mediaQueries[1]]: {
        fontSize: '16px',
        width: 'auto',
        marginRight: '5px'
    },
});

export const TitleTextCSSmobile = css({
    margin: '5px 0px 5px 0px',    
    fontSize: '16px',
    width: 'auto',
    marginRight: '5px'
});

export const MainText = styled('div')`
    font-family: ${(props: TextStyleProps) => props.theme.fontType === 'PRIMARY' ? props.theme.PRIMARY : props.theme.SECONDARY};
    font-size: ${(props: TextStyleProps) => props.theme.fontSize};
    font-weight: ${(props: TextStyleProps) => props.theme.fontWeight};
    font-style: ${(props: TextStyleProps) => props.theme.fontStyle};
    color: ${(props: TextStyleProps) => props.theme.fontColor};;
    font-stretch: normal;
    line-height: 1;
    letter-spacing: normal;
    margin: 5px 0px 5px 0px;
    overflow-wrap: break-word;
    text-align:${(props: TextStyleProps) => props.theme.textAlignment};    
`;

export const MainTextCSS = css({
    width: '100%',
    [mediaQueries[1]]: {
        fontSize: '16px',
        width: 'auto'
    },
});

export const MainTextCSSmobile = css({
    fontSize: '16px',
    width: 'auto'
});

export const FooterText = styled('div')`
    font-family: ${(props: TextStyleProps) => props.theme.fontType === 'PRIMARY' ? props.theme.PRIMARY : props.theme.SECONDARY};
    font-size: ${(props: TextStyleProps) => props.theme.fontSize};
    font-weight: ${(props: TextStyleProps) => props.theme.fontWeight};
    font-style: ${(props: TextStyleProps) => props.theme.fontStyle};
    color: ${(props: TextStyleProps) => props.theme.fontColor};
    font-stretch: normal;
    line-height: 1.3;
    letter-spacing: normal;
    width: 100%;
    margin: 5px 0px 5px 0px;
    overflow-wrap: break-word;
    text-align:${(props: TextStyleProps) => props.theme.textAlignment};    
`;

export const FooterTextCSS = css({
    [mediaQueries[1]]: {
        fontSize: '11px'
    }
});

export const FooterTextCSSmobile = css({ 
    fontSize: '11px'
});