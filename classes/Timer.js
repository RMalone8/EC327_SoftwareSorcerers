class Timer extends Sprite {
    constructor(pos, duration, type, visible = true, font_size = 50)
    {
        super(pos, 'sprites/timer.png');
        this.duration = duration;
        this.start = 0;
        this.started = false;
        this.finished = false;
        this.timeRemaining = 0;
        this.type = type;
        this.visible = visible;
        this.font_size = font_size;
    }
    update()
    {
        if (this.started)
        {
            this.timeRemaining = Math.floor(this.duration - (Date.now() - this.start)/1000);
            if (this.timeRemaining <= 0)
            {
                this.finished = true;
            }
        }
    }
    begin()
    {
        this.start = Date.now();
        this.started = true;
        this.finished = false;
    }
    reset()
    {
        this.start = 0;
        this.timeRemaining = 0;
        this.started = false;
        this.finished = false;
    }
    draw()
    {
        if (this.visible)
        {
            ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
            ctx.font = this.font_size + 'px serif';
            ctx.textAlign = 'center';
            ctx.fillStyle = "red";
            ctx.fillText(this.timeRemaining, this.x + this.width/2 - 4, this.y + this.height/2 + 15);
        }
    }
}