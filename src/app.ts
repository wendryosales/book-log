import * as express from 'express';

export class App {
  public app: express.Application;

  constructor(expressApp = express()) {
    this.app = expressApp;

    this.config();
  }

  private config(): void {
    // middlewares
    //
    // Routes
    this.app.get('/', (_req, res) => {
      res.send({
        message: 'Success',
      });
    });
    // Error Handler
  }

  public start(PORT: number): void {
    this.app.listen(PORT, () => {
      console.log(`Running on port ${PORT}`);
    });
  }
}
