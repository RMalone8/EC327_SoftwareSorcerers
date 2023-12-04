class GameObj extends Sprite {
    constructor(pos, pic, mode, type)
    {
        super(pos, pic);
        this.mode = mode;
        if (this.mode == "rise")
        {
            this.y += 400;
        }
        this.clicked = false;
        this.hovered = false;
        this.type = type;
    }
    update()
    {
        if (this.mode == "float") // Float activity
        {
            this.y += Math.floor(Math.random()*8) - 3.5;
        }
        if (this.mode == "rise") // Rising activity
        {
            this.x += Math.floor(Math.random()*10) - 4.5;
            this.y -= Math.floor(Math.random()*50) + 1;
        }
        this.internalTimer++;
    }
    check_for_activity(XPOS, YPOS, CLICKXPOS, CLICKYPOS) // Are they being interacted with?
    {
        if (CLICKXPOS > this.x && CLICKXPOS < this.x + this.width
            && CLICKYPOS > this.y && CLICKYPOS < this.y + this.height)
            {
                this.clicked = true;
            }
        else
            this.clicked = false;
        if (XPOS > this.x && XPOS < this.x + this.width
                && YPOS > this.y && YPOS < this.y + this.height)
            {
                this.hovered = true;
            }
        else
            this.hovered = false;
    }
    randomizePos()
    {
        this.x = Math.floor(Math.random()*1400);
        this.y = Math.floor(Math.random()*700);
    }
}