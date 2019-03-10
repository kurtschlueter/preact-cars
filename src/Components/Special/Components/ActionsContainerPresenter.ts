import styled, { css } from 'preact-emotion'
import { mediaQueries } from '../../../Utils/constants';

export const Container = styled('div')`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    -ms-flex-pack: center;
`;

export const ContainerCSS = css({
    [mediaQueries[0]]: { flexDirection: 'row', flexWrap: 'wrap' },
});