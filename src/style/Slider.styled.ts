import styled from "styled-components";

export const Wrapper = styled.div`
    background-color: #34343422;
    /* width: calc(70% - 2.5px); */
    /* width: calc(100% - 40px); */
    width: 100%;
    height: 100%;
    margin-right: 5px;
    border-radius: .4em;
    display: flex;
    overflow: hidden;
    position: relative;
`;


interface ImageProps {
    $KEYER: number;
    $SLIDE_NO: number;
    $NOW?: boolean;
    $CLICKABLE?: boolean;
}
export const Image = styled.img<ImageProps>`
    width: 100%;
    height: 100%;
    position: absolute;
    transition: transform 1s, left .7s;
    left: ${props => (props.$KEYER - props.$SLIDE_NO) * 100}%;
    transform: scale(${props => props.$NOW ? "1" : "0.6"});
    user-select: none;
    -webkit-user-drag: none;
    border-radius: .4em;
    &:hover {
        transform: scale(1.02);
        cursor: ${props => props.$CLICKABLE ? "pointer" : "initial"};
    }
    &:active {
        transform: scale(1);
    }
`;

const SliderButton = styled.button`
    position: absolute;
    /* right: 0; */
    height: 100%;
    width: 20%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: #f5f5f570;
    background: none;
    border: none;
    font-size: 2em;
    z-index: 2;
    transition: 1s;
    &:hover {
        /* background-color: #f2f2f210; */
        color: #f5f5f5BD;
    }
`;

interface SliderButton {
    $hide?: boolean;
    $drag?: boolean;
}
export const SliderButtonLeft = styled(SliderButton) <SliderButton>`
    left: ${props => props.$drag ? "0" : props.$hide ? "-13%" : "0"};
    &:hover {
        background: linear-gradient(90deg, #f2f2f240 0%, #f2f2f210 88%, #f2f2f200 100%);
    }
`;

export const SliderButtonRight = styled(SliderButton) <SliderButton>`
    right: ${props => props.$drag ? "0" : props.$hide ? "-13%" : "0"};
    &:hover {
        background: linear-gradient(270deg, #f2f2f240 0%, #f2f2f210 88%, #f2f2f200 100%);
    }
`;

export const DotCont = styled.div<SliderButton>`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    width: 100%;
    bottom: ${props => props.$hide ? "-60px" : "0"};
    left: 0;
    background: linear-gradient(0deg, #3335 0%, #3331 100%);
    height: ${props => props.$hide ? "100px" : "50px"};;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    transition: 1s;
`;


interface Dots {
    $active?: boolean;
}
export const Dots = styled.div<Dots>`
    margin: 0 0.2vw;
    cursor: pointer;
    user-select: none;

    width: ${props => props.$active ? "calc(1vh + 1.5vw)" : "calc(.45vh + .6vw)"};
    height: calc(.45vh + .6vw);
    border-radius: calc(.45vh + .6vw);

    background-color: #f2f2f2AA;
    overflow: hidden;
    transition: .2s;

    //Demodan kalan denemeler
    /* background-color: black; */
    //font-size: calc(1.5vh + 2vw); /*h1 fontsize */
    /* color: ${({ theme }) => theme.slider_dot}; */
    /* color: ${props => props.$active ? ({ theme }) => theme.dot_selected : ({ theme }) => theme.dot}; */
    /* color: ${props => props.$active ? "#424242" : "#f2f2f2"}; */
    /* background-color: ${props => props.$active ? "#424242AA" : "#f2f2f2AA"}; */

`;

export const Span = styled.div<Dots>`
    width: ${props => props.$active ? "100%" : "0%"};
    height: 100%;
    background: ${props => props.$active ? "#42424280" : "#42424200"}; /**#2691d9 */
    transition: width 3250ms;
`;