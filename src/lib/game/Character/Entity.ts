const actionTemp = {
    _name: "", onAction: () => {
    }
}

/**
 * @class Entity
 */
abstract class Entity {
    private _id!: number | string
    private _name!: string
    private _position!: { x: number, y: number, z: number }
    private _model!: any
    private _settings!: object
    private _actions!: []

    constructor() {
        this._id = 0
        this._name = ""
        this._position = {x: 0, y: 0, z: 0}
        this._model = null;
        this._settings = {}
        this._actions = []
    }

    public getAction(key: string) {
        let a
        for (a in this._actions) {
            if (a._name === key)
                return a
        }
        throw ""
    }

    public set actions(_actions) {
        this._actions = _actions
    }

    public get actions() {
        return this._actions
    }

    public get id() {
        return this._id;
    }

    /**
     *
     * @param id {!string | number}
     * @property id
     */
    public set id(id) {
        if (id)
            this._id = id;
        else
            throw "empty parameter"
    }

    public get settings() {
        return this._settings
    }

    public set settings(s) {
        this._settings = s
    }

    public get pos() {
        return this._position;
    }

    public set pos(p) {
        this._position = p
    }

    public get name() {
        return this._name;
    }

    public set name(_name) {
        this._name = _name
    }

    /**
     * @
     */
    public abstract render(): void | any

    public abstract update(): void | any

    public get model() {
        return this._model
    }

    public set model(_model: any) {
        this._model = _model
    }

    public abstract onAction(action: string, target: any, callback: (data: any) => void): Event
}

export default Entity
