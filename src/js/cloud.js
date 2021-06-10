export default class Cloud {
    constructor(game) {
        this.game = game
        this.speed = 2
        this.width = 344
        this.height = 382

        this.frame= {
            dx: 0,
            dy: 0,
            dw: this.width,
            dh: this.height,
        }
    }

    update() {
        this.frame.dy += this.speed
        //this.game.height += this.speed
        this.render()
    }

    render() {
        this.game.context.save()
        this.game.context.translate(0, 0) //this.game.height
        this.game.renderSpriteFrameCloud(this.frame)
        this.game.context.restore()
    }

}