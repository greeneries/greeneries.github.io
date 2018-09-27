import { CoreModule } from './core.module';

describe('CoreModule', () => {
  let coreModule: CoreModule;

  beforeEach(() => {
    coreModule = new CoreModule('happy');
  });

  it('should create an instance', () => {
    expect(coreModule).toBeTruthy();
  });
});
