import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { useState,useEffect } from 'react';

function Quote({showQuote}) {

    // eslint-disable-next-line
    const [quote, setquote] = useState("blablablalaidjsfslufhskfjskfdhdjfhdkfijsdkjfhdkjfhsdjkfhsdkjfhdfkjsdhfjsdhflsdkfjsdlkfjsdkfjsbdjfhdfgkjjhgfkjfdhgkisi")

    useEffect(() => {
      fetch('https://api.quotable.io/random')
      .then(response => response.json())
      .then(data => {
        console.log(`${data.content} —${data.author}`)
        setquote(data)
      })
    },[showQuote])
    return (
        <div style={{margin:"5px", padding:"5px",borderRadius:"1px",background:"#39CCCC",borderRadius: "30px"}}>  
              <figure>
                    <blockquote cite="https://www.huxley.net/bnw/four.html">
                       <p>{quote.content}</p>
                    </blockquote>
                    <figcaption>—{quote.author}</figcaption>
            </figure>
        </div>
    )
}

export default Quote
