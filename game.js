const room = {height: 10, width: 10}
const state = {
    players : {},
    npcs : {}
}

function createPlayer(command){
    state.players[command.id] = {
        name: command.name,
        posX: command.posX,
        posY: command.posY
    }
}

function interactWithObject(command){
    let object = command.object
    object.interact()
}

function createNPC(command){
    state.npcs[command.id] = {
        name:command.name,
        posX:command.posX,
        posY:command.posY,
        talks: command.talks,
        interact: function(){
            console.log(this.talks[Math.floor(Math.random() * this.talks.length)])
        }
    }
}

function movePlayer(command){
    const acceptedMoves = {
        moveUp:function(){
            console.log(`Moving ${command.id} Up`)
            state.players[command.id].positionY = Math.max(state.players[command.id].positionY - 1,0)
        },
        moveDown:function(){
            console.log(`Moving ${command.id} Down`)
            state.players[command.id].positionY = Math.min(state.players[command.id].positionY + 1,room.height)
        },
        moveLeft:function(){
            console.log(`Moving ${command.id} Left`)
            state.players[command.id].positionX = Math.max(state.players[command.id].positionX - 1,0)
        },
        moveRight:function(){
            console.log(`Moving ${command.id} Right`)
            state.players[command.id].positionX = Math.min(state.players[command.id].positionX + 1,room.width)
        }
    }
    if(state.players[command.id] && acceptedMoves[command.move]){
        acceptedMoves[command.move]()
    }
}