import ground from "./ground";
import gameController from "./gameController";

const player = {
    game: null,
    frame: { // player
        dx: 0,
        dy: 0,
        dw: 42,
        dh: 48,
    },
    width: 42,
    height: 48,
    x:0,
    y:0,

    speed: 0,
    maxSpeed: 3,
    acceleration: 0,

    frames: [ // propellers
        {sw: 66, sh: 18},
        {sw: 48, sh: 18},
        {sw: 24, sh: 18},
        {sw: 48, sh: 18}
    ],
    animationStep: 0,
    maxAnimationStep: 2,
    counterInterval: 0,
    maxInterval: 5,

    init(game) {
        this.game = game
        this.frame.dx = this.game.canvas.width / 2 - this.frame.dw / 2
        this.frame.dy = this.game.canvas.height - ground.frame.dh
        this.x = this.game.canvas.width / 2 - this.width / 2
        this.y = this.game.canvas.height - ground.frame.dh - this.height / 2
        this.speed = 1
    },

    update() {
        if(this.game.hasStarted) {
            /*if(this.speed < this.maxSpeed) {
                this.speed += this.game.gravity
            }*/
            this.x += this.speed
            this.checkCollisionWithEdges()
            this.checkCollisionWithObstacles()
        }
        //this.game.renderSpriteFramePlayer(this.frame)
        this.render()
    },

    render() {
        //player
        this.game.context.save()
        this.game.context.translate(this.x, this.y)
        if (this.speed > 0) {
            this.game.context.scale(-1, 1)
            this.game.context.rotate(-this.speed / this.maxSpeed)
        } else if(this.speed < 0) {
            this.game.context.scale(1, 1)
            this.game.context.rotate(this.speed / this.maxSpeed)
        }
        this.game.renderSpriteFramePlayer({
            dx: 0,
            dy: 0,
            dw: this.width,
            dh: this.height,
            }
        )
        this.game.context.restore()

        //propeller
        this.counterInterval++
        if(!(this.counterInterval % this.maxInterval)) { // si = 0
            this.counterInterval = 0
            this.animationStep = this.animationStep < this.maxAnimationStep ? this.animationStep + 1 : 0
        }
        this.game.context.save()
        this.game.context.translate(this.x, this.y)
        this.game.renderSpriteFramePropeller({
            dx: 0,
            dy: 0,
            dw: this.width,
            dh: this.height,
        })
        this.game.context.restore()

    },

    checkCollisionWithObstacles() {
        this.game.girders.forEach(girder => {
            if(this.y - this.height / 2 < girder.y + girder.height / 2 && this.y + this.height / 2 > girder.y - girder.height / 2) {
                if((this.x - this.width / 2) < girder.xLeft + girder.width || this.x + this.width / 2 > girder.xRight ) {
                    this.game.cancelAnimation()
                }
            }
        })

    },

    checkCollisionWithEdges() {
      if(this.x - this.width / 2 + 20 < 0)  {
        //this.game.cancelAnimation()
      }
      if(this.x + this.width > this.game.canvas.width) {
          //this.game.cancelAnimation()
      }
    },

    changePosition() {
        this.speed = this.speed * (-1)
    },

}

export default player