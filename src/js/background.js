const background = {
    game: null,
    frame: {
        dx: 0,
        dy: 0,
        dw: 0,
        dh: 0,
    },

    init(game) {
        this.game = game
        this.frame.dw = this.game.canvas.width
        this.frame.dh = this.game.canvas.height
    },

    update() {
        this.game.renderSpriteFrameBackground(this.frame)
    },
}

export default background