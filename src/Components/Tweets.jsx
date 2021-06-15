import React from 'react';
//import Component
import Tweet from "./Tweet";


const Tweets = (props) => {


    
const tweets = [
    {name : 'deved', tweet: 'react ughh, I need alcohol'},
   {name: 'traversy media', tweet: 'what up guys, Im out taking abreak'},
     {name: 'webdevsimplified', tweet: 'hey guyys Im simplified the web? guyss hello, where is everybody'},
    ];

 return(
        <section>

            {tweets.map((tweet) => (
                <Tweet name={tweet.name} tweet={tweet.tweet} />
            ))}
          
        </section>
    );
};

export default Tweets;
