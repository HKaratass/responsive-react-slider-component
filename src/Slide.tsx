import React, { useEffect, useRef, useState } from 'react'
import { DotCont, Dots, Image, SliderButtonLeft, SliderButtonRight, Span, Wrapper } from './style/Slider.styled'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import Images from "./data.json";

const Slide: React.FC = () => {
    const [slideNo, setSlideNo] = useState(0);
    const navigate = useNavigate();
    const [stop, setStop] = useState(false);
    const [rDrag, setRDrag] = useState(false);
    const [lDrag, setLDrag] = useState(false);
    const timerRef = useRef<number | null>(null);
    const prevSlide = () => {
        if (slideNo > 0)
            setSlideNo(prevCount => prevCount - 1);
        else
            setSlideNo(Images.length - 1)
    }
    const nextSlide = () => {
        if (slideNo < Images.length - 1)
            setSlideNo(prevCount => prevCount + 1);
        else
            setSlideNo(0)
    }
    const goToSlide = (slideNum: number) => {
        setSlideNo(slideNum)
    }
    useEffect(() => {
        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }
        timerRef.current = window.setTimeout(() => {
            if (!stop)
                nextSlide();
        }, 3350);

        return () => {
            if (timerRef.current) {
                clearTimeout(timerRef.current);
            }
        };
    }, [nextSlide, stop]);


    //Touch Draging
    const [isDragging, setIsDragging] = useState(false);
    const [startPosition, setStartPosition] = useState(0);
    const [translate, setTranslate] = useState(0);
    const [linkCancel, setLinkCancel] = useState(true); //MouseDraging LinkCancel
    const handleTouchStart = (e: React.TouchEvent) => {
        setIsDragging(true);
        setStop(true);
        setStartPosition(e.touches[0].clientX);
    };
    const handleTouchMove = (e: React.TouchEvent) => {
        if (!isDragging) return;
        const currentPosition = e.touches[0].clientX;
        const movedBy = currentPosition - startPosition;
        if (movedBy <= -50) setRDrag(true); else setRDrag(false);
        if (movedBy >= 50) setLDrag(true); else setLDrag(false);
        setTranslate(movedBy);
    };
    const handleTouchEnd = () => {
        setRDrag(false);
        setLDrag(false);
        setStop(false);
        finishDragging();
    };

    //Mouse Draging
    //If You Want
    const handleMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true);
        setStartPosition(e.pageX);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging) return;
        const currentPosition = e.pageX;
        const movedBy = currentPosition - startPosition;
        if (movedBy <= -50) setRDrag(true); else setRDrag(false);
        if (movedBy >= 50) setLDrag(true); else setLDrag(false);
        setTranslate(movedBy);
    };

    const handleMouseUp = () => {
        setRDrag(false);
        setLDrag(false);
        setStop(false);
        finishDragging();
    };
    //end mouse draging



    const finishDragging = () => {
        setIsDragging(false);
        if (translate > 50) {
            setLinkCancel(false);
            prevSlide();
        } else if (translate < -50) {
            setLinkCancel(false);
            nextSlide();
        }
        setTranslate(0);
        setTimeout(() => {
            setLinkCancel(true);
        }, 1000);
    };


    return (
        <Wrapper
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            {
                Images.map((k, i) => (
                    <Image
                        onMouseOver={() => { setStop(true); }}
                        onMouseOut={() => { setStop(false); }}
                        onClick={() => {
                            if (k.url && linkCancel)
                                if (k.url.substring(0, 4) === "http")
                                    window.location.href = k.url
                                else
                                    navigate(k.url)
                        }}
                        key={i} $KEYER={i}

                        src={k.src}
                        $CLICKABLE={k.url ? true : false}
                        $NOW={slideNo === i}
                        $SLIDE_NO={slideNo}
                    />
                ))
            }
            <SliderButtonLeft $drag={lDrag} $hide={stop} onClick={prevSlide}><FontAwesomeIcon icon={faAngleLeft} /></SliderButtonLeft>
            <SliderButtonRight $drag={rDrag} $hide={stop} onClick={nextSlide}><FontAwesomeIcon icon={faAngleRight} /></SliderButtonRight>
            <DotCont $hide={stop}>
                {
                    Images?.map((_, i) => (
                        <Dots key={i} onClick={() => goToSlide(i)} $active={i === slideNo}>
                            <Span $active={i === slideNo} />
                        </Dots>
                    ))
                }
            </DotCont>
        </Wrapper>
    )
}

export default Slide