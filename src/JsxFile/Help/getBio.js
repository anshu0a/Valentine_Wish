const loveMessages = [
  "With you, love feels intentional and mutual 💞, like two hearts choosing each other every day with patience, trust, and genuine care.",
  "What we share feels rare and deeply valuable ✨, a bond built on understanding, respect, and the way we always show up for each other.",
  "Loving each other feels natural and steady 🤍, as if our hearts learned this language long before we ever spoke it aloud.",
  "Together, we turn ordinary moments into something meaningful 🌸, simply by being present and choosing each other consistently.",
  "There is a quiet strength in how we love each other ❤️, a calm, reassuring love that grows deeper through trust and understanding.",
  "What makes our connection special is the way we grow side by side 🌱, supporting each other without losing who we are.",
  "Being with you feels like sharing a love that is balanced and sincere 💖, where both hearts feel equally valued and seen.",
  "We don’t just love each other in words 💌, we show it through patience, effort, and the small things that matter most.",
  "The way we understand and respect each other ❤️ gives our love a depth that feels safe, honest, and beautifully real.",
  "With you, love feels shared equally 💞, where giving and receiving happen naturally and without hesitation.",
  "Our connection feels valuable because it is built on honesty, kindness, and choosing each other every day 🌟.",
  "Loving each other has taught us how powerful gentle love can be 🌷 when it is mutual and deeply intentional.",
  "What we have is not rushed or loud 🤍, but a steady love that grows stronger through caring for each other consistently.",
  "Together, we create a space where both hearts feel safe, appreciated, and deeply understood ❤️.",
  "The beauty of us lies in how we care for each other even in the quiet moments 🌙, when love speaks without words.",
  "Being with you feels like sharing a love that uplifts us both ✨, encouraging growth, patience, and understanding.",
  "Our love feels meaningful because it is shaped by effort, respect, and choosing each other with purpose 💫.",
  "With you, love feels like a shared journey ❤️, where we grow, learn, and value each other more with time.",
  "What we share feels precious 💎 because it is mutual, sincere, and rooted in genuine affection for each other.",
  "Loving each other feels like creating something lasting 🌹, something valuable, and something truly ours."
];




export default function getBio(){
return loveMessages[Math.floor(Math.random() * loveMessages.length)];
}