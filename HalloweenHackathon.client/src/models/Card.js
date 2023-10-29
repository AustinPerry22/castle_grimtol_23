export class Card{
    constructor(data)
    {
        this.id = data.id
        this.type = data.type
        this.locked = true
        this.question = {}
        this.guessed = false
    }
}