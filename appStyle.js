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
/*
--text-pri: #b6b6b6
--bg-pri: #23232e
--bg-sec: #141418
--high-lig: #8950d5
*/