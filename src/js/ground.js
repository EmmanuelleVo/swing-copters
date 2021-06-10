const ground = {
    game: null,
    frame: {
        dx: 0,
        dy: 0,
        dw: 432,
        dh: 222,
    },
    speed: 1,

    update() {
        if(this.game.hasStarted)
            this.animation()
        this.game.renderSpriteFrameGround(this.frame)
    },

    init(game) {
        this.game = game
        this.frame.dy = this.game.canvas.height - this.frame.dh

    },

    animation() {
        this.frame.dy += this.speed

    }
}

export default ground