import Entity from "./Entity";

/**
 * @class Npc
 */
class Npc extends Entity {
    private _mode!: string
    private _modes!: string
    private _dialog!: {
        enabled: boolean,
        obj: object
    }
    private _trade!: {
        enable: boolean,
        table: []
    }

    constructor(settings) {
        super();
        this.id = settings.id || 0;
        this.name = settings.name || "";
        this.pos = settings.pos || {x: 0, y: 0, z: 0};
        this.actions = settings.actions || [];
        this.model = settings.model || null;
        this._trade =  settings.trades || {enable: false,table:[]};
        this._dialog =  settings.dialog || {enable: false,obj:null};
        this._mode = settings.mode || "idle";
        this.modes = settings.modes || [];
    }

    public get mode() {
        return this._mode
    }

    public set mode(m) {
        this._mode = m
    }
    public get modes() {
        return this._modes
    }

    public set modes(m) {
        this._modes = m
    }

    public get dialog() {
        return this._dialog
    }

    public set dialog(d) {
        this._dialog = d
    }

    public get trades() {
        if (this._trade.enable === false)
            return false
        else
            return this._trade
    }

    public set trades(d) {
        this.trades = d
    }

    render(): any {
    }

    update(): any {
    }

    onAction(action: string, target: any, callback: (data: any) => void): Event {
        return undefined;
    }
    onMode(mode:string,callback:(data: any)=>void):Event{
        return undefined;
    }
}

export default Npc;
