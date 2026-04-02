
export class RemoteControlOperation {

    private type: string
    private target: string
    private params: object

    constructor(type: string, target: string, parameters: object) {
        this.type = type
        this.target = target
        this.params = parameters
    }

    public getType(): string {
        return this.type
    }

    public getTarget(): string {
        return this.target
    }

    public getParameters(): object {
        return this.params
    }

    public getParameter(parameterName:string): string {
        return this.params[parameterName]
    }

    toJSON(): string {
        return JSON.stringify({
            type: this.type,
            target: this.target,
            params: JSON.stringify(this.params)
        })
    }
}

export class OperationFactory {

    static createOperation(type: string, target: string, parameters: object): RemoteControlOperation {
        return new RemoteControlOperation(type, target, parameters)
    }

    static createOperationFromJSON(jsonstring: string): RemoteControlOperation {
        const parsedObject = JSON.parse(jsonstring)
        return new RemoteControlOperation(parsedObject.type, parsedObject.target, JSON.parse(parsedObject.params))
    }
}

export const operationTypes = {
    openImage: 'openImage',
    closeImage: 'closeImage',
    createNPC: 'createNPC',
    startFight: 'startFight',
    startTimer: 'startTimer',
    timerFinished: 'timerFinished',
    timerStopped: 'timerStopped'
}