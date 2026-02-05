const valentineAsks = [
  "Will you be my Valentine? 💖",
  "Will you be my Valentine, my love? 💕",
  "Would you like to be my Valentine? 🌹",
  "Will you be my Valentine and make my day special? ❤️",
  "Can I call you my Valentine? 💌",
  "Will you be the Valentine of my heart? 💘",
  "May I have the honor of being your Valentine? ✨",
  "Will you be my Valentine today and always? 💞",
  "Can you be my Valentine this year? 🥰",
  "Will you be my Valentine and hold my heart? ❤️‍🔥"
];


export default function getquote(){
    return valentineAsks[Math.floor(Math.random() * valentineAsks.length)]
}