import styled, { css } from 'preact-emotion'
import { minImageContainerHeightPx } from '../../../Utils/constants';


type ImageProps = { url: string; }

export const Image = styled('div')`
    min-height: ${minImageContainerHeightPx}px;
    background-image: url(${(props: ImageProps) => props.url});
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
`;