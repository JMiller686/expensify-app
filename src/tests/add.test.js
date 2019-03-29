const add = (a, b) => a + b;
const generateGreeting = (name = 'Anonymous') => {
    return `Hello ${name}!`
}
test('should return greeting with inputed name', () => {
    const result = generateGreeting('Josh');
    expect(result).toBe('Hello Josh!');
})

test('should return greeting with inputed name', () => {
    const result = generateGreeting();
    expect(result).toBe('Hello Anonymous!');
})

// test('should add two numbers', () => {
//     const result = add(3, 4);

//     expect(result).toBe(7);
// })