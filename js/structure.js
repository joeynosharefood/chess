const chessBoard = {
    h:[],
    g:[],
    f:[],
    e:[],
    d:[],
    c:[],
    b:[],
    a:[]
}
debugg = false
var lightdark = 'light'
function start(){
    gen_structure()
    render_board()
}
function gen_structure(){
    for (let column in chessBoard){
        for (let i = 0; i < 8; i++){
            chessBoard[column][i] = ''
        }
    }
}
function render_board(){
    let div = ''
    for (let column in chessBoard){
       for (let row = 1; row < 9; row++){
           div += `<div class="${column} box br-${row} ${lightdark}" id="square-${column+row}">`
           if (debugg == true){
               div += column+row
           }
           div += '</div>'
           lightdark = lightdark === 'light' ? 'dark': 'light'
       }
       lightdark = lightdark === 'dark' ? 'light': 'dark'
    }
    document.querySelector('div#game-board').innerHTML = div
}
start()