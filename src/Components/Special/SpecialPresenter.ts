import styled, { css } from 'preact-emotion'
import { mediaQueries, TextStyleProps } from '../../Utils/constants';

export const Wrapper = styled('div')`
    max-width: 910px;
    width: 100%;
    background: #ffffff;
    box-shadow: 0px 0px 3px 3px rgba(200, 200, 200, 0.2);
`;

export const Container = styled('div')`
    width: 100%;
`;

export const HeaderSection = styled('div')`
    width: 100%;
    height: 100%;
    border: solid 1px #e0e6ed;
    border-bottom: 0px;
    display: flex;
    align-items: center;
    background: #f0f4f9;
`;

export const HeaderTitle = styled('div')`
    font-family: ${(props: TextStyleProps) => props.theme.fontType === 'PRIMARY' ? props.theme.PRIMARY : props.theme.SECONDARY};
    font-size: ${(props: TextStyleProps) => props.theme.fontSize};
    font-weight: ${(props: TextStyleProps) => props.theme.fontWeight};
    font-style: ${(props: TextStyleProps) => props.theme.fontStyle};
    line-height: 1.22;
    color: ${(props: TextStyleProps) => props.theme.fontColor};
    margin: 10px 21px 10px 21px;
    width: 100%;
    text-align: ${(props: TextStyleProps) => props.theme.textAlignment};
`;

export const MainSection = styled('div')`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;    
    border: solid 1px #e0e6ed;
    border-bottom: 0px;
`;

export const BreakpointOne = styled('div')`
    width: 70%;
    height: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap; 
`;

export const BreakpointOneCSS = css({
    [mediaQueries[0]]: { width: '100%' },
});

export const ImageWrapper = styled('div')`
    width: calc(65% - 1px);
    border-right: solid 1px #e0e6ed; 
`;

export const ImageWrapperCSS = css({
    [mediaQueries[1]]: {
        width: '100%',
        borderBottom: 'solid 1px #e0e6ed',
        borderRight: 'none' 
    }
});

type DetailRowsContainerProps = { isIE: boolean; isEdge: boolean;}

export const DetailRowsWrapper = styled('div')`
    width: calc(35% - 1px);
    height: auto;
    display: flex;
    flex-direction: column;
    border-right: solid 1px #e0e6ed;
    ${(props: DetailRowsContainerProps) => {
        return (props.isIE || props.isEdge) ? `
            -ms-flex-pack: space-around;
            justify-content: space-around;
        ` : `
            justify-content: space-evenly;
        `
    }}
`;

export const Divider = styled('div')`
    width: 100%;
    height: 1px;
    background: #e0e6ed;
`;


export const DetailRowsWrapperCSS = css({
    [mediaQueries[0]]: { borderRight: 'none'},    
    [mediaQueries[1]]: { width: '100%' },
});

export const ActionsContainer = styled('div')`
    width: 30%;
    height: auto;
    display: flex;
    flex-direction: column;
`;

export const ActionsContainerCSS = css({
    [mediaQueries[0]]: { 
        width: '100%',
        flexDirection: 'row', 
        borderTop: 'solid 1px #e0e6ed'
    }
});

export const FooterSection = styled('div')`
    width: 100%;
    height: 100%;
    border: solid 1px #e0e6ed;
`;

export const FooterText = styled('div')`
    font-family: ${(props: TextStyleProps) => props.theme.fontType === 'PRIMARY' ? props.theme.PRIMARY : props.theme.SECONDARY};
    font-size: ${(props: TextStyleProps) => props.theme.fontSize};
    font-weight: ${(props: TextStyleProps) => props.theme.fontWeight};
    font-style: ${(props: TextStyleProps) => props.theme.fontStyle};
    line-height: 1.22;
    color: ${(props: TextStyleProps) => props.theme.fontColor};
    margin: 13px 8px 8px 13px;
    text-align: ${(props: TextStyleProps) => props.theme.textAlignment};
`;