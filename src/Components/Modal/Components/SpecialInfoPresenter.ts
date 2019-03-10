import styled, { css } from 'preact-emotion'
import {
    mediaQueries,
    minImageContainerHeightPx,
    TextStyleProps
} from '../../../Utils/constants';
  
export const Container = styled('div')`
    height: auto;
    width: 100%;
    background: #ffffff;
    display: flex;
    flex-flow: column;
`;

export const HeaderSection = styled('div')`
    width: auto;
    height: auto;
    border-bottom: solid 1px #e0e6ed;
    display: flex;
    align-items: center;
    background: #f0f4f9;
`;


export const HeaderTitle = styled('div')`
    font-family: ${(props: TextStyleProps) => props.theme.fontType === 'PRIMARY' ? props.theme.PRIMARY : props.theme.SECONDARY};
    font-size: ${(props: TextStyleProps) => props.theme.fontSize};
    font-weight: ${(props: TextStyleProps) => props.theme.fontWeight};
    font-style: ${(props: TextStyleProps) => props.theme.fontStyle};
    width: 100%;
    margin: 5px 21px;
    text-align: ${(props: TextStyleProps) => props.theme.textAlignment};
`;

export const MainSection = styled('div')`
    width: auto;
    height: auto;
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;    
`;

type DetailRowsContainerProps = { isIE: boolean; isEdge: boolean;}

export const DetailRowsContainer = styled('div')`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    ${(props: DetailRowsContainerProps) => {
        return (props.isIE || props.isEdge) ? `
            -ms-flex-pack: space-around;
            justify-content: space-around;
        ` : `
            justify-content: space-evenly;
        `
    }}
    flex: 1 1 auto;
`;

export const Divider = styled('div')`
    width: 100%;
    height: 1px;
    background: #e0e6ed;
`;