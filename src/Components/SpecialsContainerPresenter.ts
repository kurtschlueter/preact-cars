import styled from 'preact-emotion'

export const Container = styled('div')`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
`;

export const SingleSpecialWrapper = styled('div')`
    margin: 10px 10px 10px 10px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const NoSpecials = styled('div')`
    color: red;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Arial;
    font-size: 44px;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: 1.6px;
    text-align: center;
    color: #5a717a;
`;