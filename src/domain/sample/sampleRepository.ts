import { Sample } from './entity/Sample';

export class SampleRepository {
  private sample = {
    id: 1,
    name: 'dgt',
  };

  public findSample(): Promise<Sample> {
    return new Promise((resolve, reject) => {
      resolve(this.sample);
    });
  }
}
