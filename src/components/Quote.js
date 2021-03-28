import React from 'react'
import { useState,useEffect } from 'react';

function Quote({showQuote}) {

    // eslint-disable-next-line
    const [quote, setquote] = useState({})

    useEffect(() => {
      fetch('https://api.quotable.io/random')
      .then(response => response.json())
      .then(data => {
        console.log(`${data.content} —${data.author}`)
        setquote(data)
      })
    },[showQuote])
    return (
        <div style={{margin:"5px", padding:"5px",borderRadius:"10px",background:"#39CCCC"}}>  
              <figure>
                    <blockquote >
                       <p>{quote.content}</p>
                    </blockquote>
                    <figcaption>—{quote.author}</figcaption>
            </figure>
        </div>
    )
}

export default Quote
