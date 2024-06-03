abstract class Entity {
    private id!: number | string
    private name!: string
    private position!: { x: number, y: number, z: number }



    public get Id() {
        return this.id;
    }

    public set Id(id) {
        this.Id = id;
    }

    public get pos() {
        return this.position;
    }

    public get Name() {
        return this.name;
    }

    abstract render(): void | any
    abstract update(): void | any

}

export default Entity
