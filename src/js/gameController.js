import player from "./player";
import ground from "./ground";

const gameController = {
    init(game) {
        window.addEventListener('click', (e) => {
            if (!game.hasStarted) {
                game.hasStarted = true
            }
            player.changePosition()
        })
    }

}

export default gameController