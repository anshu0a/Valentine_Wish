// Accept Messages - Romantic & Heartfelt
const acceptMessages = [
  "I can’t stop smiling knowing you feel the same… my heart feels lighter, my world feels brighter, all because of you 💖✨",
  "Hearing that from you is like a dream coming true… I promise to cherish every moment we share together 💕",
  "You just made my heart skip a beat… I’ve never felt this happy, and it’s all because of you 💘",
  "I feel like the luckiest person alive… knowing we share the same feelings makes everything perfect 🌹",
  "Your words are like music to my soul… I can’t wait to make beautiful memories with you 💞",
  "Being with you, even in thoughts, feels like heaven… I’m so happy we’re on the same page 💖",
  "You make my heart flutter in ways I never imagined… thank you for feeling the same 💗",
  "Every moment I think of you becomes magical… now that you feel the same, everything feels perfect ✨",
  "I never believed in fairy tales… until I realized you feel the same as I do 💕",
  "My heart feels full knowing our feelings match… you’ve made me incredibly happy 💘",
  "You’re the reason I believe in love at first sight… now I feel it’s real with us 💖",
  "Just hearing your words makes my whole day brighter… I’m so grateful for you 💞",
  "I can’t wait to laugh, dream, and live beautiful moments with you… now that we share this feeling 💗",
  "You’ve turned my ordinary day into something magical… knowing you feel the same makes me fly 🌹",
  "I feel like my heart finally found its home… and it’s with you 💖"
];

// Reject Messages - Sweet, Respectful, Gentle
const rejectMessages = [
  "I understand, and I respect your feelings… knowing your honesty makes me admire you even more 🌸",
  "It’s okay… I still care for you and wish nothing but happiness and smiles for you every day 💛",
  "Thank you for being honest… even if the answer isn’t what I hoped, your words mean a lot to me 🌷",
  "No hard feelings… my feelings won’t fade, but I’ll always respect your heart and your choice 💌",
  "Life is full of surprises… even if this isn’t meant to be, I’m glad I got to share my heart with you 🌟",
  "I may feel a little sad, but I respect your heart and wish you the best in everything 💖",
  "Your honesty is a gift… even if it’s not what I hoped, it makes me respect you even more 🌸",
  "It’s okay… feelings can’t be forced, and I’m happy we can still be ourselves around each other 💛",
  "Even if this isn’t a yes, I cherish the moments and courage we shared 🌷",
  "Thank you for your honesty… it takes courage to speak your heart, and I admire that 💌",
  "I’ll treasure this moment anyway… it means a lot that I could express my feelings 🌟",
  "It’s okay to say no… my respect and care for you won’t change 💖",
  "Even if we aren’t meant to be together, I’m glad I could share my heart with someone as wonderful as you 🌸",
  "Your truth is beautiful… thank you for being sincere, I truly appreciate it 💛",
  "I accept your feelings with grace… wishing you happiness always, from the bottom of my heart 🌷"
];

export  function accept(){
    return acceptMessages[Math.floor(Math.random() * acceptMessages.length)]
}

export  function reject(){
    return rejectMessages[Math.floor(Math.random() * rejectMessages.length)]
}