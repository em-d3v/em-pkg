/**
 * Interfaces
 */


/**
 *
 */
interface GameEventHandler<TSender, TArgs> {

}

interface SimplePlayerEventHandler<TArgs> {
  (args: TArgs): void
}


interface PlayerEventHandler<TSender, TArgs> {
  // on(name:string, fn(sender: TSender, args: TArgs): void ): void
  on(handler: { (name: string, data?: TArgs): void }): void
  off(handler: { (name: string, data?: TArgs): void }): void
  equip(handler: { (data?: TArgs): void }): void
  unequip(handler: { (data?: TArgs): void }): void
  pickup(handler: { (data?: TArgs): void }): void
  drop(handler: { (data?: TArgs): void }): void
  interact(handler: { (data?: TArgs): void }): void

}

interface SimpleEvtHandler<TArgs> {
  (args: TArgs): void
}

interface PlayerSignalHandler {
  (): void
}
interface DialogOption{

}
