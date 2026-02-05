 const loveQuotes = [
    ["Whatever our souls are made of, his and mine are the same.", "Emily Brontë"],
    ["I seem to have loved you in numberless forms, numberless times, in life after life.", "Rabindranath Tagore"],
    ["You pierce my soul. I am half agony, half hope.", "Jane Austen"],
    ["I would rather spend one lifetime with you than face all the ages of this world alone.", "J.R.R. Tolkien"],
    ["Love is not love which alters when it alteration finds.", "William Shakespeare"],
    ["I have waited for this opportunity for more than half a century, to repeat to you once again my vow of eternal fidelity.", "Gabriel García Márquez"],
    ["There is no charm equal to tenderness of heart.", "Jane Austen"],
    ["To be brave is to love someone unconditionally, without expecting anything in return.", "Margaret Mitchell"],
    ["In your light, I learn how to love.", "Rumi"],
    ["I love you as certain dark things are to be loved, in secret, between the shadow and the soul.", "Pablo Neruda"],

    ["I wish I knew how to quit you.", "Pablo Neruda"],
    ["You are my today and all of my tomorrows.", "Leo Christopher"],
    ["My heart is, and always will be, yours.", "Jane Austen"],
    ["Love is a smoke made with the fume of sighs.", "William Shakespeare"],
    ["I fell in love the way you fall asleep: slowly, and then all at once.", "John Green"],
    ["To love is nothing. To be loved is something. But to love and be loved, that’s everything.", "T. Tolis"],
    ["You are my sun, my moon, and all my stars.", "E. E. Cummings"],
    ["I would find you in any lifetime.", "Unknown"],
    ["Love recognizes no barriers. It jumps hurdles, leaps fences, penetrates walls.", "Maya Angelou"],
    ["I carry your heart with me (I carry it in my heart).", "E. E. Cummings"]
];

export default function getquote(){
    return loveQuotes[Math.floor(Math.random() * loveQuotes.length)]
}