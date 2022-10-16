let root = document.querySelector(':root')
let styles = [
    dark = {
        text: '#d5d5d5',
        bg1: '#23232e',
        bg2: '#141418',
        hi: '#8950d5'
    },
    ligth = {
        text: '#1f1f1f',
        bg1: '#ccd9d9',
        bg2: '#83a8a8',
        hi: '#fb00ff'
    },
    neon = {
        text: '#fff205',
        bg1: '#003cde',
        bg2: '#004494',
        hi: '#ff1178'
    },
    purpleManiac = {
        text: '#b0f',
        bg1: '#1d0d2f',
        bg2: '#0f003f',
        hi: '#dd0870'
    },
    Pj = {
        text: '#9f009f',
        bg1: '#2d001a',
        bg2: '#200010',
        hi: '#ff00ff'
    },
    haloween = {
        text: '#ff3800',
        bg1: '#5d2d00',
        bg2: '#2d0d00',
        hi: '#f80'
    },
    xMas = {
        text: '#ddd',
        bg1: '#610',
        bg2: '#410',
        hi: '#f00'
    },
    pride = {
        text: '#000',
        bg1: 'linear-gradient(0deg, rgba(255,100,100,1) 0%, rgba(255,246,100,1) 25%, rgba(78,255,102,1) 50%, rgba(78,75,255,1) 75%, rgba(255,85,254,1) 100%)',
        bg2: '#0005',
        hi: '#fff'
    },
    naughty = {
        text: '#fff',
        bg1: "#b00b20",
        bg2: '#d1c',
        hi: '#5eecc5'
    }
]
let sNum = 0

document.querySelector('#theme').addEventListener('click', () => {
    if (styles.length-1 <= sNum) {sNum=0} else {sNum+=1}
    root.style.setProperty('--text-pri', styles[sNum].text)
    root.style.setProperty('--bg-pri', styles[sNum].bg1)
    root.style.setProperty('--bg-sec', styles[sNum].bg2)
    root.style.setProperty('--high-lig', styles[sNum].hi)
    console.log(sNum)
})

let not = document.querySelector('.notfications')
