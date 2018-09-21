import { MyReversePipe } from './my-reverse.pipe';

describe('MyReversePipe', () => {
  it('create an instance', () => {
    const pipe = new MyReversePipe();
    expect(pipe).toBeTruthy();
  });
});
