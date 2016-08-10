/**
 function that returns the part of application
 responsible for storing the users

 whenever we delete or add users
 this function going to be used
 */

 export default function () {
   return [
     {
        id: 1,
        first: "Bucky",
        last: "Roberts",
        age: 71,
        description: "Bucky is a React developer and YouTuber",
        thumbnail: "http://i.imgur.com/7yUvePI.jpg"
    },
    {
        id: 2,
        first: "Joby",
        last: "Wasilenko",
        age: 27,
        description: "Joby loves the Packers, cheese, and turtles.",
        thumbnail: "http://i.imgur.com/52xRlm8.png"
    },
    {
        id: 3,
        first: "Madison",
        last: "Williams",
        age: 24,
        description: "Madi likes her dog but it is really annoying.",
        thumbnail: "http://i.imgur.com/4EMtxHB.png"
    }
   ]
 }
