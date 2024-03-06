"use client";

interface ErrorProps{
    error: Error;
    reset: () => void;
}

export default function Error({error, reset}: ErrorProps){
    return(
        <div>
        <h1>(;`⌒`)</h1>
        <p>No cargo tu...</p>
        <button onClick={reset}>Intentar de nuevo</button>
        </div>
    )
}