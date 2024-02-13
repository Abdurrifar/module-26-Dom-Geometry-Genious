function traingleButton() {
    const traingleBase = document.getElementById('traingle-Base')
    const traingleValue = traingleBase.value
    const base = parseFloat(traingleValue)
    console.log(base)
    

    const traingleHeight=document.getElementById('traingle-height')
    const traingleHeightValue = traingleHeight.value
    const height = parseFloat(traingleHeightValue)
    console.log(height)


    const area = .5 * base * height
    
console.log(area)

    const traingleArea = document.getElementById('traingle-area')
    traingleArea.innerText = area;
}

// ractangle

function ractangleButton() {
    const ractangleBase = document.getElementById('ractangle-Base')
    const ractangleValue = ractangleBase.value
    const base = parseFloat(ractangleValue)
    
    const ractangleLength = document.getElementById('ratangle-length')
    const lvalue = ractangleLength.value;
    const length = parseFloat(lvalue)
    
    const area = base * length
    console.log(area)


    const ractangleArea = document.getElementById('rectangle-Area')
    ractangleArea.innerText = area;
    
}