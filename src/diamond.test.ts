class Diamond {
  of(letter: string) {
    let result = [this.lineOf(letter)];

    for (
      let pads = 1, code = letter.charCodeAt(0) - 1;
      code >= 'A'.charCodeAt(0);
      pads++, code--
    ) {
      result.unshift(this.pad(pads) + this.lineOf(String.fromCharCode(code)) + this.pad(pads));
      result.push(this.pad(pads) + this.lineOf(String.fromCharCode(code)) + this.pad(pads))
    }

    return result;
  }

  private lineOf(letter: string) {
    if (letter === 'A')
      return 'A';

    const delta = letter.charCodeAt(0) - 'A'.charCodeAt(0) - 1;
    return letter + this.pad(delta * 2 + 1) + letter;
  }

  private pad(number: number) {
    return ' '.repeat(number);
  }
}

// Write tests here
test('diamond of A', () => {
  expect(new Diamond().of('A')).toEqual(['A']);
})

test('diamond of B', () => {
  expect(new Diamond().of('B')).toEqual([
    ' A ',
    'B B',
    ' A '
  ])
})

test('diamond of C', () => {
  expect(new Diamond().of('C')).toEqual([
    '  A  ',
    ' B B ',
    'C   C',
    ' B B ',
    '  A  ',
  ])
})