import React from "react";
import { useCounter } from "../../hooks/useCounter";

export const CounterWithCustomHook = () => {
    const { handleAdd, handleReset, handleSubstract, state } = useCounter(105);
    return (
        <>
            <h1>Counter with Hooks: {state}</h1>
            <hr />

            <div className="btn-group" role="group" aria-label="Basic example">
                <button type="button" className="btn btn-primary" onClick={()=>handleAdd()}>
                    Incrementar
                </button>
                <button type="button" className="btn btn-warning" onClick={handleReset}>
                    Reset
                </button>
                <button
                    type="button"
                    className="btn btn-danger"
                    onClick={()=>handleSubstract()}
                >
                    Decrementar
                </button>
            </div>
        </>
    );
};
