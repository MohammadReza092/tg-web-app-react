import React, { useRef } from 'react';
import { FaCheck, FaTrash } from "react-icons/fa";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import '../../App.css';

const ButtonAddCart = ({ isProduct, onClick }) => {
    const buttonRef = useRef(null);
    const iconRef = useRef(null);

    return (
        <div className='flex justify-between mt-3 items-center'>
            <CSSTransition
                in={isProduct}
                timeout={300}
                classNames="button"
                nodeRef={buttonRef}
            >
                <button
                    ref={buttonRef}
                    onClick={onClick}
                    className={`px-10 flex justify-center items-center rounded-md text-white h-10 ${isProduct ? 'bg-red-600' : 'bg-green-600'}`}
                >
                    {isProduct ? <FaTrash size={19} /> : 'Add'}
                </button>
            </CSSTransition>
            <TransitionGroup>
                {isProduct && (
                    <CSSTransition
                        timeout={500}
                        classNames="fade"
                        nodeRef={iconRef}
                    >
                        <div ref={iconRef} className="rounded-full w-8 h-8 flex justify-center items-center bg-green-600 text-white">
                            <FaCheck />
                        </div>
                    </CSSTransition>
                )}
            </TransitionGroup>
        </div>
    )
}

export default ButtonAddCart;
