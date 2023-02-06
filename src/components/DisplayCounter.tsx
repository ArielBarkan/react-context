import React, { Context, createContext } from 'react';
import { CounterContext } from '../App';
const DisplayCounter = () => {

  return (
    <div>{CounterContext._currentValue}</div>
  )

}

export { DisplayCounter }