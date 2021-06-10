export default class Girder {
    constructor(game) {
        this.game = game
        this.speed = 1
        this.width = 408
        this.height = 33
        this.spaceBetweenGirder = 200
        this.xLeft = -Math.floor(Math.random() * 50) - 300
        this.xRight = this.xLeft + this.width + this.spaceBetweenGirder
        this.y = 0

        this.girderLeftFrame = {
            dx: 0,
            dy: 0,
            dw: this.width,
            dh: this.height,
        }
        this.girderRightFrame = {
            dx: 0,
            dy: 0,
            dw: this.width,
            dh: this.height,
        }
    }

    update() {
        this.y += this.speed
        this.render()
    }

    render() {
        // Gauche
        this.game.context.save()
        this.game.context.translate(this.xLeft, this.y)
        this.game.renderSpriteFrameGirder(this.girderLeftFrame)
        this.game.context.restore()
        // Droite
        this.game.context.save()
        this.game.context.translate(this.xRight, this.y)
        this.game.renderSpriteFrameGirder(this.girderRightFrame)
        this.game.context.restore()
    }

}