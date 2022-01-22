import React from "react";
import { useCounter } from "../../hooks/useCounter";

export const CounterAppWithHook = () => {

const {state,handleAdd,handleSubstract} = useCounter(0)
  return (
    <>
      <h1>Counter: {state}</h1>
        <div className="btn-group" role="group" aria-label="Basic example">
                <button type="button" 
                className="btn btn-primary" 
                onClick={()=>handleAdd()}
                >
                    Incrementar 1
                </button>
                <button type="button" 
                className="btn btn-warning"
                 onClick={()=>handleAdd(5)}
                 >
                Incrementar 5
                </button>
                <button type="button" className="btn btn-warning"
                 onClick={()=>handleAdd(10)}
                 >
                Incrementar 10
                </button>
                <button
                    type="button"
                    className="btn btn-danger"
                    onClick={()=>handleSubstract(2)}
                >
                    Decrementar 2
                </button>
                <button
                    type="button"
                    className="btn btn-danger"
                    onClick={()=>handleSubstract(20)}
                >
                    Decrementar 20
                </button>
            </div>
    </>
  );
};
