class Fish extends Sprite {
    constructor(position, pic, boundaries, active = true, name = "")
    {
        super(position, pic);
        this.boundaries = boundaries;
        this.move_func = Math.floor(5*Math.random());
        this.move_coefficient = 1; // Set to be either 1 or -1
        this.active = active;
        this.name = (name.trim()) ? name : "Larry";
        this.change_freq = Math.floor(Math.random()*50) + 15;
        this.stuck = 0;
        this.hoveredOver = false;
        this.flipped_image = new Image(); // Need to have a second image for going in the other direction
        this.flipped_image.src = this.pic.slice(0, this.pic.length - 4) + "-flipped.png";
        this.type = "normal";
    }
    update()
    {
        if (this.internalTimer % this.speed == 0) // Increasing the frame at a designated speed
        {
            this.frame >= this.frames - 1 ? this.frame = 0 : this.frame++;
        }
        if (this.active)
        {
            if (this.internalTimer % this.change_freq == 0)
            {
                this.move_func = Math.floor(5*Math.random());
            }
            if (this.x + this.width >= this.boundaries.rightx || this.x <= this.boundaries.leftx
                || this.y + this.height >= this.boundaries.bottomy || this.y <= this.boundaries.topy) // Are they stuck in the wall?
            {
                this.move_coefficient = this.move_coefficient*-1;
                this.stuck++;
            }
            else
            {
                this.stuck = 0;
            } 
            // Switching between move functions 
            if (this.move_func == 0)
            {
                this.x += this.move_coefficient*2;
                this.y += this.move_coefficient*5;
            }
            if (this.move_func == 1)
            {
                this.x += this.move_coefficient*4;
                this.y -= this.move_coefficient*2;
            }
            if (this.move_func == 2)
            {
                this.x += this.move_coefficient*6;
                this.y += this.move_coefficient*3;
            }
            if (this.move_func == 3)
            {
                this.x += this.move_coefficient*0.25;
                this.y += this.move_coefficient*0.25;
            }
            if (this.move_func == 4)
            {
                this.x += this.move_coefficient*8;
                this.y -= this.move_coefficient*0.5;
            }
            if (this.stuck > 25)
            {
                this.randomizePos();
            }

        }
        this.internalTimer++;
    }
    setActive()
    {
        this.active = true;
    }
    randomizePos() // Scatter them within the boundary
    {
        this.x = Math.floor(Math.random()*(this.boundaries.rightx - this.boundaries.leftx - this.width)) + this.boundaries.leftx;
        this.y = Math.floor(Math.random()*(this.boundaries.bottomy - this.boundaries.topy - this.height)) + this.boundaries.topy;
    }
    setName(name)
    {
        this.name = (name.trim()) ? name : "Todd";
    }
    check_for_activity(XPOS, YPOS) // Being hovered over?
    {
        if (XPOS > this.x && XPOS < this.x + this.width
            && YPOS > this.y && YPOS < this.y + this.height && this.active)
            this.hoveredOver = true;
        else
            this.hoveredOver = false;
    }
    draw() 
    {
        if (this.move_coefficient == 1)
        {
            ctx.drawImage(this.flipped_image, this.frame*this.sWidth, 0, this.sWidth, this.sHeight, this.x, this.y, this.width, this.height);
        }
        else
            ctx.drawImage(this.image, this.frame*this.sWidth, 0, this.sWidth, this.sHeight, this.x, this.y, this.width, this.height);
        
        if (this.hoveredOver && this.active)
        {
            ctx.font = '30px serif';
            ctx.textAlign = 'center';
            ctx.fillStyle = "white";
            ctx.fillText(this.name, this.x + this.width/2, this.y + this.height/2);
        }
    }
}

class GroundFish extends Fish { // Fish that stays on the floor of the screen
    constructor(position, pic, boundaries, active = true, name = "")
    {
        super(position, pic, boundaries, active, name)
        this.type = "ground";
    }
    randomizePos()
    {
        this.x = Math.floor(Math.random()*(this.boundaries.rightx - this.boundaries.leftx - this.width)) + this.boundaries.leftx;
        if (this.pic == "sprites/fish/Snail_Move-Sheet.png")
            this.y = 700 - this.height - 5;
        else
            this.y = 700 - this.height - 15;
    }
    update()
    {
        if (this.internalTimer % this.speed == 0)
        {
            this.frame >= this.frames - 1 ? this.frame = 0 : this.frame++;
        }
        if (this.active)
        {
            if (this.internalTimer % this.change_freq == 0)
            {
                this.move_func = Math.floor(5*Math.random());
            }
            if (this.internalTimer % this.change_freq*3 == 0)
            {
                this.move_coefficient = this.move_coefficient*-1;
            }
            if (this.x + this.width >= this.boundaries.rightx || this.x <= this.boundaries.leftx)
            {
                this.move_coefficient = this.move_coefficient*-1;
                this.stuck++;
            }
            else
            {
                this.stuck = 0;
            }
            if (this.move_func == 0)
            {
                this.x += this.move_coefficient*2;
            }
            if (this.move_func == 1)
            {
                this.x += this.move_coefficient;
            }
            if (this.move_func == 2)
            {
                this.x += this.move_coefficient*6;
            }
            if (this.move_func == 3)
            {
                this.x += this.move_coefficient*0.25;
            }
            if (this.move_func == 4)
            {
                this.x += this.move_coefficient*8;
            }
            if (this.stuck > 25)
            {
                this.randomizePos();
            }

        }
        this.internalTimer++;
    }
    setName(name)
    {
        this.name = (name.trim()) ? name : "Steven";
    }
}

