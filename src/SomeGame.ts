import GameLoop from './GameLoop.js';

/**
 * Example of a game class that can collaborate with GameLoop. Mind that
 * only attributes, methods and other code that is relevant for this example
 * are shown here
 */
export default class Game {
  private gameloop: GameLoop;

  /**
   * Construct a new instance of this class
   */
  public constructor() {
    this.gameloop = new GameLoop(this);
  }

  /**
   * Start the game.
   */
  public start(): void {
    this.gameloop.start();
  }

  /**
   * Handles any user input that has happened since the last call
   */
  public processInput(): void {

  }

  /**
   * Advances the game simulation one step. It may run AI and physics (usually
   * in that order)
   *
   * @param elapsed the time in ms that has been elapsed since the previous
   *   call
   * @returns `true` if the game should stop animation
   */
  public update(elapsed: number): boolean { }

  /**
   * Draw the game so the player can see what happened
   */
  public render(): void {

  }
}
