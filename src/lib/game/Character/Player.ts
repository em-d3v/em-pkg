import Entity from "./Entity";

class Player extends Entity{
    private actions!: object;

    constructor() {
        super();
    }
    render(): any {
    }

    update(): any {
    }
    teleport(pos:{}):void{

    }

    onAction(action: string, target: any, callback: (data: any) => void): Event {
        return undefined;
    }

}

export default Player;