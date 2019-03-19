var toWords = require('../index.js');

test('should return empty String when input is null', () => {
    expect(toWords(null)).toBe('');
});

test('should return empty String when input is undefined', () => {
    expect(toWords(undefined)).toBe('');
});

test('should return empty String when input is empty string', () => {
    expect(toWords('')).toBe('');
});

test('should return empty String when input is just spaces', () => {
    expect(toWords('        ')).toBe('');
});

test('should return a single word when input is a single word with spaces at the end', () => {
    expect(toWords('Hello   ')).toBe('Hello');
});

test('should return a single word when input is a single word with spaces at the start', () => {
    expect(toWords('   Hello')).toBe('Hello');
});

test('should return a single word when input is a single word with spaces at the start and end', () => {
    expect(toWords('   Hello    ')).toBe('Hello');
});

test('should return words seperated by space when input is a camelcase string with multiple words', () => {
    expect(toWords('helloWorld')).toBe('Hello World');
});

test('should return words seperated by space when input is a camelcase string with multiple words starting with a capital letter', () => {
    expect(toWords('HelloWorld')).toBe('Hello World');
});

test('should return words seperated by space when input is a multiple camelcase strings with multiple words starting with a capital letter', () => {
    expect(toWords('HelloWorld  HowAreYou')).toBe('Hello World How Are You');
});

test('should return words seperated by space when input is a multiple camelcase strings with multiple words not starting with a capital letter', () => {
    expect(toWords('HelloWorld  howAreYou')).toBe('Hello World How Are You');
});

test('should ignore spaces at the start and end of input', () => {
    expect(toWords('   HelloWorld  howAreYou1   ')).toBe('Hello World How Are You1');
});