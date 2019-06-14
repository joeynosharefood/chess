configPieces = false
var initPosition = {
    //black
    h1: 'rookdark',
    h2: 'knightdark', 
    h3: 'bishopdark',
    h4: 'queendark',
    h5: 'kingdark', 
    h6: 'bishopdark',
    h7: 'knightdark',
    h8: 'rookdark',
    
    g1: 'pawndark',
    g2: 'pawndark',
    g3: 'pawndark',
    g4: 'pawndark',
    g5: 'pawndark',
    g6: 'pawndark',
    g7: 'pawndark',
    g8: 'pawndark',

    //light
    a1: 'rookwhite',
    a2: 'knightwhite', 
    a3: 'bishopwhite',
    a4: 'queenwhite',
    a5: 'kingwhite', 
    a6: 'bishopwhite',
    a7: 'knightwhite',
    a8: 'rookwhite',
    
    b1: 'pawnwhite',
    b2: 'pawnwhite',
    b3: 'pawnwhite',
    b4: 'pawnwhite',
    b5: 'pawnwhite',
    b6: 'pawnwhite',
    b7: 'pawnwhite',
    b8: 'pawnwhite',
}
function init(){
    if  (configPieces == true){
        config()
    }else{
        for (let pos in initPosition){
            dataEntry(`${pos}`, `${initPosition[pos]}`)
            let img = `<img src="../img/${initPosition[pos]}.png" class="${initPosition[pos]} ${[pos]}" onclick="scanner('${initPosition[pos]}', '${pos}')">`
            document.getElementById(`square-${pos}`).innerHTML = img
        }
    }
}
function config(){
    let piece = 'knightwhite'
    let position_test = 'a2'
    dataEntry(`${position_test}`, `${piece}`)
    let img = `<img src='../img/${piece}.png' class ="${piece} ${position_test}" onclick="scanner('${piece}', '${position_test}')">`
    document.getElementById(`square-${position_test}`).innerHTML = img
}
