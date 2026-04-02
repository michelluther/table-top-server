export class Attribute {

    private attributeId: String
    private attributeName: String
    private _short: String
    
    constructor(attributeId: String, attributeName: String, short: String ) {
        this.attributeName = attributeName
        this.attributeId = attributeId
        this._short = short
    }

    public get name(): String {
        return this.attributeName
    }

    public get short(): String {
        return this._short
    }

    public get id(): String {
        return this.attributeId
    }
  }