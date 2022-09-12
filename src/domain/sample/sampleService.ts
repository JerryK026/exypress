import { SampleRepository } from './sampleRepository';

const sampleRepository = new SampleRepository();

export class SampleService {
  public async getSample() {
    return await sampleRepository.findSample();
  }
}
