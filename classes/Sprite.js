// Parent class :)
class Sprite {
    constructor(position, pic)
    {
        this.x = position.x;
        this.y = position.y;
        this.pic = pic;
        this.image = new Image();
        this.image.src = pic;
        this.width = position.width;
        this.height = position.height
        this.sWidth = position.sWidth;
        this.sHeight =  position.sHeight;
        this.frames = (position.frames) ? position.frames : 0;
        this.frame = 0;
        this.speed = (position.speed) ? position.speed : 0;
        this.internalTimer = 0;
    }
    draw()
    {
        if (this.internalTimer % this.speed == 0 && this.frames)
        {
            this.frame >= this.frames - 1 ? this.frame = 0 : this.frame++;
        }
        ctx.drawImage(this.image, this.frame*this.sWidth, 0, this.sWidth, this.sHeight, this.x, this.y, this.width, this.height);
    }
}