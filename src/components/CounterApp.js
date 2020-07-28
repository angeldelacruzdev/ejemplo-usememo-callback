import React, { useState, useCallback } from "react";
import "./style.css";
import { Button } from "./Button";

export const CounterApp = () => {

    const [counter, setCounter] = useState(1);

    const increment = useCallback(() =>{
        setCounter(e => e + 1)
    }, [setCounter])

    const decrement = useCallback(() =>{
        if(counter >= 1){
            setCounter(e => e - 1)
        }
    }, [setCounter, counter])


  return (
    <>
      <React.Fragment>
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="card text-white bg-dark mb-3">
                <div className="card-body">
                  <h1 className="title text-center">Counter App Memorizada</h1>

                    <div className="content-counter">
                        <h3 className="text-center">Counter: <span className="badge badge-warning">{counter}</span></h3>
                    </div>
                   {
                       <Button 
                        increment={increment}
                        decrement={decrement}
                    />
                    }
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    </>
  );
};
