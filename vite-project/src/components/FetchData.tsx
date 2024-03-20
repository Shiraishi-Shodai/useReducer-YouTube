import React, { useReducer} from 'react'
import { INITIAL, reducer } from '../reducer';

function FetchData() {

    const [state, dispatch] = useReducer(reducer, INITIAL);
    const {loading, post, error} = state;

    const handleClick = ()=> {
        dispatch({type: "START"});

        fetch('https://jsonplaceholder.typicode.com/todos/1')

          .then(response => response.json())
          .then((json) => {

          dispatch({type: "SUCCESS", payload: json});

        }).catch((err) => {

            dispatch({type: "ERROR"});

        })
    }

  return (
    <>
        <button onClick={handleClick}>
            {loading ? "loading" : "Click"}
        </button>
        <p>{post?.title}</p>
        <p>{error && "Error"}</p>
    </>
  )
}

export default FetchData