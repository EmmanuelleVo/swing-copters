import background from "./background";
import ground from "./ground";
import player from "./player";
import gameController from "./gameController";
import Cloud from "./cloud";
import Girder from "./Girder";

const game = {
    canvas: document.getElementById('game'),
    context: null,
    requestId: 0,
    spriteSheetSrc: {
        sky: './assets/Backgrounds/Background Cyan.png',
        ground: './assets/Backgrounds/Ground.png',
        player: './assets/Player/Player01.png',
        clouds: './assets/Backgrounds/Clouds.png',
        girder: './assets/Obstacles/Girder.png',
    },
    spriteSheetPropellers: [
        './assets/Player/Propeller01.png',
        './assets/Player/Propeller02.png',
        './assets/Player/Propeller03.png',
    ],
    spriteGround: new Image(),
    spriteBackground: new Image(),
    spritePlayer: new Image(),
    spritePropeller: new Image(),
    spriteCloud: new Image(),
    spriteGirder: new Image(),
    hasStarted: false,
    gravity: 0.9,
    clouds: [],
    maxClouds: 4,
    frameCounter: 0,
    frameInterval: 100,
    girders: [],
    maxGirders: 8,


    init() {
        this.context = this.canvas.getContext('2d')
        this.spriteBackground.src = this.spriteSheetSrc.sky
        this.spriteGround.src = this.spriteSheetSrc.ground
        this.spritePlayer.src = this.spriteSheetSrc.player
        this.spriteCloud.src = this.spriteSheetSrc.clouds
        this.spriteGirder.src = this.spriteSheetSrc.girder

        /*for (let i = 0; i < this.spriteSheetPropellers.length; i++) {
            this.spriteSheetPropellers.forEach(propeller => {
                this.spritePropeller[i].src = propeller
            })
        }*/

        this.spriteBackground.addEventListener('load', () => {
            background.init(this)
            //this.animate()
        })
        this.spriteGround.addEventListener('load', () => {
            ground.init(this)
            //this.animate()
        })
        this.spritePlayer.addEventListener('load', () => {
            gameController.init(this)
            player.init(this)
            this.animate()
        })

    },

    animate() {
        this.requestId = window.requestAnimationFrame(() => {
            this.animate()
        })
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
        background.update()
        if (this.hasStarted) {
            if (this.frameCounter++ > this.frameInterval) {
                if (this.clouds.length >= this.maxClouds) {
                    this.clouds.splice(0, 1)
                }
                this.clouds.push(new Cloud(this))

                if (this.girders.length >= this.maxGirders) {
                    this.girders.splice(0, 1)
                }
                this.girders.push(new Girder(this))

                this.frameCounter = 0
            }
            this.clouds.forEach(cloud => {
                cloud.update()
            })
            this.girders.forEach(girder => {
                girder.update()
            })
        }
        ground.update()
        player.update()
    },

    renderSpriteFrameBackground(coordinates) {
        this.context.drawImage(
            this.spriteBackground,
            coordinates.dx,
            coordinates.dy,
            coordinates.dw,
            coordinates.dh
        )
    },
    renderSpriteFrameGround(coordinates) {
        this.context.drawImage(
            this.spriteGround,
            coordinates.dx,
            coordinates.dy,
            coordinates.dw,
            coordinates.dh
        )
    },
    renderSpriteFramePlayer(coordinates) {
        this.context.drawImage(
            this.spritePlayer,
            coordinates.dx,
            coordinates.dy,
            coordinates.dw,
            coordinates.dh
        )
    },
    renderSpriteFrameCloud(coordinates) {
        this.context.drawImage(
            this.spriteCloud,
            coordinates.dx,
            coordinates.dy,
            coordinates.dw,
            coordinates.dh
        )
    },

    renderSpriteFrameGirder(coordinates) {
        this.context.drawImage(
            this.spriteGirder,
            coordinates.dx,
            coordinates.dy,
            coordinates.dw,
            coordinates.dh
        )
    },

    renderSpriteFramePropeller(coordinates) {
        this.context.drawImage(
            this.spritePropeller,
            coordinates.dx,
            coordinates.dy,
            coordinates.dw,
            coordinates.dh
        )
    },

    cancelAnimation() {
        window.cancelAnimationFrame(this.requestId)
    }

}

game.init()

/*


const imageURL = ["foreground.jpg","background.jpg"]; // list of image URLs
const images = []; /// array to hold images.
var imageCount = 0; // number of loaded images;

// function called once all images have loaded.
function allLoaded(){
    // all images have loaded and can be rendered
    ctx.drawImage(images[1],0,0); // draw background
    ctx.drawImage(images[0],0,0); // draw foreground
}

// iterate each image URL, create, load, and add it to the images array
imageURL.forEach(src => {  // for each image url
     const image = new Image();
     image.src = src;
     image.onload = ()=>{
         imageCount += 1;
         if(imageCount === imageURL.length){ // have all loaded????
             allLoaded(); // call function to start rendering
         }
     }
     images.push(image); // add loading image to images array

});
// the image onload event will not be called until all current execution is
// complete.



 */