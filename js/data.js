function dataEntry(pos, piece){
    let row = pos[0]
    let column = pos[1]-1
    chessBoard[row][column] = `${piece}`
}
function dataRemove(pos){
    let row = pos[0]
    let column = pos[1]-1
    chessBoard[row][column] = ''
}