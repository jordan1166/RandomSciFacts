randomSciFacts = {
    1: 'Did you know that the Earth rotates a full 360 degrees in 23 hours, 56 minutes, and 4.09 seconds, not 24 hours?',
    2: 'Sometimes the crystalline lenses of elderly people become milky and cloudy. This is called a cataract, and it causes partial or complete loss of vision.',
    3: 'Did you know that pineapples, oranges, and tomatoes are actually berries?',
    4: 'Pure gold is so soft that it can be molded with your bare hands.',
    5: 'The Komodo dragon is a renowned giant, with the average male measuring around 8 feet long; some exceptional individuals reach 10 feet long. It is the heaviest lizard of all, with an average weight of 220 to 300 pounds.',
    6: 'The word "nuclear" is related to the nucleus of an atom. It is often used to describe the energy produced when a nucleus is split (fission) or joined with another (fusion).',
    7: 'Did you know that a cockroach can live for nine days without its head before it starves to death?',
    8: 'Did you know that the physicist Albert Einstein refused the job of president of Israel? Einstein was asked to be the president when the Israeli president died in 1952.',
    9: 'The earliest cockroach fossil is about 125–140 million years old, but not 280–300 million years old as some have speculated.',
    10: 'The original formula for 7UP contained lithium citrate, a chemical used today as a treatment for bipolar disorders. The ingredient was removed by 1950.',
    11: 'The tungsten filament inside an incandescent light bulb reaches a temperature of 4,500 degrees Fahrenheit when turned on.',
    12: 'Traces of copper are what give turquoise its distinctive blue color.',
    13: 'Starfish, like many radially symmetric animals, do not have brains.'
}

const keys = Object.keys(randomSciFacts)
randomKey = keys.length * Math.random() << 0;
randomFact = randomSciFacts[keys[randomKey]]
console.log(randomFact);