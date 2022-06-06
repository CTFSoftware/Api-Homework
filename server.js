const express = require('express')
const app = express()
const cors = require('cors')
const { request } = require('express')
const PORT = 8000

app.use(cors())

const fighter = {
    'mario': {
        'fighterName' : 'Mario',
        'special' : 'Fireball',
        'up special' : 'Super Jump Punch',
        'down special' : 'Mario Tornado',
        'image' : 'https://static.wikia.nocookie.net/nintendo/images/b/b3/Mario_SSB.png/revision/latest?cb=20171026225110&path-prefix=en'
    },
    'link': {
        'fighterName' : 'Link',
        'special' : 'BoomeRang',
        'up special' : 'Spinning Slash',
        'down special' : 'Bomb',
        'image' : 'https://static.wikia.nocookie.net/nintendo/images/6/6e/Link_SSB.png/revision/latest/scale-to-width-down/130?cb=20171026231450&path-prefix=en'
    },
    'samus': {
        'fighterName' : 'Samus Aran',
        'special' : 'Charge Shot',
        'up special' : 'Screw Attack',
        'down special' : 'Bomb',
        'image' : 'https://static.wikia.nocookie.net/nintendo/images/1/18/Samus_SSB.png/revision/latest/scale-to-width-down/130?cb=20171026225726&path-prefix=en'
    },
    'star fox': {
        'fighterName' : 'Fox McCloud',
        'special' : 'Blastor Shot',
        'up special' : 'Fire Fox',
        'down special' : 'Reflector',
        'image' : 'https://ssb.wiki.gallery/images/6/61/Fox_SSB.png'
    },
    'donkey kong': {
        'fighterName' : 'Donkey Kong',
        'special' : 'Giant Punch',
        'up special' : 'Spinning Kong',
        'down special' : 'Hand Slap',
        'image' : 'https://static.wikia.nocookie.net/nintendo/images/a/a2/DK_SSB.PNG/revision/latest?cb=20090113211606&path-prefix=en'
    },
    'captain falcon': {
        'fighterName' : 'Captain Falcon',
        'special' : 'Falcon Punch',
        'up special' : 'Falcon Dive',
        'down special' : 'Falcon Kick',
        'image' : 'https://static.wikia.nocookie.net/nintendo/images/0/04/CaptainfalconSSB.png/revision/latest?cb=20160215194058&path-prefix=en'
    },
    'pikachu': {
        'fighterName' : 'Pikachu',
        'special' : 'Thunder Jolt',
        'up special' : 'Quick Attack',
        'down special' : 'Thunder',
        'image' : 'https://ssb.wiki.gallery/images/9/92/Pikachu_SSB.png'
    },
    'ness': {
        'fighterName' : 'Ness',
        'special' : 'PK Fire',
        'up special' : 'PK Thunder',
        'down special' : 'PSI Magnet',
        'image' : 'https://static.wikia.nocookie.net/nintendo/images/1/16/Ness_SSB.png/revision/latest/scale-to-width-down/130?cb=20171026230324&path-prefix=en'
    },
    'kirby': {
        'fighterName' : 'Kirby',
        'special' : 'Swallow',
        'up special' : 'Final Cutter',
        'down special' : 'Stone',
        'image' : 'https://ssb.wiki.gallery/images/f/f2/Kirby_SSB.png'
    },
    'yoshi': {
        'fighterName' : 'Yoshi',
        'special' : 'Egg Lay',
        'up special' : 'Egg Throw',
        'down special' : 'Yoshi Bomb',
        'image' : 'https://ssb.wiki.gallery/images/6/64/Yoshi_SSB.png'
    },
    'luigi': {
        'fighterName' : 'Luigi',
        'special' : 'Fireball',
        'up special' : 'Super Jump Punch',
        'down special' : 'Luigi Cyclone',
        'image' : 'https://ssb.wiki.gallery/images/5/52/Luigi_SSB.png'
    },
    'jigglypuff': {
        'fighterName' : 'Jigglypuff',
        'special' : 'Pound',
        'up special' : 'Sing',
        'down special' : 'Rest',
        'image' : 'https://static.wikia.nocookie.net/nintendo/images/3/39/Jigglypuff_SSB.gif/revision/latest?cb=20090113231659&path-prefix=en'
    },
    'unknown' : {
        'fighterName' : 'Unkown',
    }
}

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:fighterName', (req,res) => {
    const fighterName = req.params.fighterName.toLowerCase()
    if(fighter[fighterName]){
        res.json(fighter[fighterName])
    } else {
        res.json(fighter['unknown'])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log('Server is running.')
})
