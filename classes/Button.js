class Button extends Sprite {
    constructor(position, pic, resultingState)
    {
        super(position, pic);
        this.hoveredOver = false;
        this.clicked = false;
        this.resultingState = resultingState; // Stores where the button goes
    }
    check_for_activity(XPOS, YPOS, CLICKXPOS, CLICKYPOS)
    {
        if (XPOS > this.x && XPOS < this.x + this.width
            && YPOS > this.y && YPOS < this.y + this.height)
            this.hoveredOver = true;
        else
            this.hoveredOver = false;
        if (CLICKXPOS > this.x && CLICKXPOS < this.x + this.width
            && CLICKYPOS > this.y && CLICKYPOS < this.y + this.height)
            this.clicked = true;
        else
            this.clicked = false;
    }
    update() // Empty update function, nothing needs to be done
    {

    }
}

class TextButton extends Button {
    constructor(position, pic, tag)
    {
        super(position, pic, 0);
        this.word = "";
        this.tag = tag;
        this.baseWidth = this.width;
        this.baseX = this.x
    }
    update()
    {
        this.width = (this.word.length > 10) ? this.word.length*7 + this.baseWidth : this.baseWidth;
    }
    draw()
    {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        ctx.font = '80px roboto';
        ctx.textAlign = 'center';
        ctx.fillStyle = "black";
        ctx.fillText(this.word, this.x + this.width/2, this.y + this.height/2 + 20); // Draw on the text
    }
    getWord()
    {
        return this.word;
    }
    resetWord()
    {
        this.word = "";
    }
}

class SaveButton extends Button {

}