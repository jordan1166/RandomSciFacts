randomSciFacts = {
    1: 'Did you know that the Earth rotates a full 360 degrees in 23 hours, 56 minutes, and 4.09 seconds, not 24 hours?',
    2: 'Sometimes the crystalline lenses of elderly people become milky and cloudy. This is called a cataract, and it causes partial or complete loss of vision.',
    3: 'Did you know that pineapples, oranges, and tomatoes are actually berries?'
}

const keys = Object.keys(randomSciFacts)
randomKey = keys.length * Math.random() << 0;
randomFact = randomSciFacts[keys[randomKey]]
console.log(randomFact);