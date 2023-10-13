import { FormatTitlePipe } from './format-title.pipe';

describe('FormatTitlePipe', () => {
  const pipe = new FormatTitlePipe();
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should format to include a space and upper case', () => {
    expect(pipe.transform("potato_wedge")).toBe("potato wedge");
  })

  it('should should return the string as it was', () => {
    expect(pipe.transform("potato-wedge")).toBe("potato-wedge");
  })
});
