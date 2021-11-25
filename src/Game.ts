import Scene from './Scene.js';

/**
 * Main class of this Game.
 */
export default class Game {
  public static readonly GRAVITY: number = 0.0098;

  public static readonly FULL_CIRCLE: number = Math.PI * 2;

  public static readonly MIN_BALL_RADIUS: number = 25;

  public static readonly BALL_RADIUS_SCATTER: number = 25;

  public static readonly MIN_BALL_X_SPEED: number = -5;

  public static readonly BALL_X_SPEED_SCATTER: number = 10;

  public static readonly MIN_BALL_Y_SPEED: number = 0;

  public static readonly BALL_POSITION_Y_AREA: number = 0.2;

  public static readonly BALL_COLOR: string = 'blue';

  public static readonly PLAYER_RADIUS: number = 50;

  public static readonly PLAYER_COLOR: string = 'red';

  private lastTickTimeStamp: number;

  private scene: Scene;

  /**
   * Construc a new instance of this class
   *
   * @param canvas the canvas to render on
   */
  public constructor(canvas: HTMLElement) {
    this.scene = new Scene(canvas);
  }

  /**
   * Start the game.
   */
  public start(): void {
    // Start the animation
    console.log('start animation');
    // Set the last tick timestamp to current time
    this.lastTickTimeStamp = performance.now();
    requestAnimationFrame(this.step);
  }

  /**
   * This MUST be an arrow method in order to keep the `this` variable working
   * correctly. It will otherwise be overwritten by another object caused by
   * javascript scoping behaviour.
   *
   * @param timestamp a `DOMHighResTimeStamp` similar to the one returned by
   *   `performance.now()`, indicating the point in time when `requestAnimationFrame()`
   *   starts to execute callback functions
   */
  private step = (timestamp: number): void => {
    const t = timestamp - this.lastTickTimeStamp;
    this.lastTickTimeStamp = timestamp;
    const gameover = this.scene.update(t);

    this.scene.render();

    // Call this method again on the next animation frame
    if (!gameover) {
      requestAnimationFrame(this.step);
    }
  };
}
