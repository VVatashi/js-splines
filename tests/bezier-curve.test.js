import { bezierCurve1, bezierCurve2, bezierCurve3, bezierCurveN } from "../src/bezier-curve";

it.each([
    [[[0, 0], [1, 2], 0], [0, 0]],
    [[[0, 0], [1, 2], 0.5], [0.5, 1]],
    [[[0, 0], [1, 2], 1], [1, 2]],
    [[new Float32Array([0, 0]), new Float32Array([1, 2]), 0], [0, 0]],
    [[new Float32Array([0, 0]), new Float32Array([1, 2]), 0.5], [0.5, 1]],
    [[new Float32Array([0, 0]), new Float32Array([1, 2]), 1], [1, 2]],
])('expect bezierCurve1%j to be %p', (args, result) => {
    // Act
    const value = bezierCurve1(...args);

    // Assert
    expect(value).toStrictEqual(result);
});

it.each([
    [[[0, 0], [1, 2], [2, 4], 0], [0, 0]],
    [[[0, 0], [1, 2], [2, 4], 0.5], [1, 2]],
    [[[0, 0], [1, 2], [2, 4], 1], [2, 4]],
    [[new Float32Array([0, 0]), new Float32Array([1, 2]), new Float32Array([2, 4]), 0], [0, 0]],
    [[new Float32Array([0, 0]), new Float32Array([1, 2]), new Float32Array([2, 4]), 0.5], [1, 2]],
    [[new Float32Array([0, 0]), new Float32Array([1, 2]), new Float32Array([2, 4]), 1], [2, 4]],
])('expect bezierCurve2%j to be %p', (args, result) => {
    // Act
    const value = bezierCurve2(...args);

    // Assert
    expect(value).toStrictEqual(result);
});

it.each([
    [[[0, 0], [1, 2], [2, 4], [3, 8], 0], [0, 0]],
    [[[0, 0], [1, 2], [2, 4], [3, 8], 0.5], [1.5, 3.25]],
    [[[0, 0], [1, 2], [2, 4], [3, 8], 1], [3, 8]],
    [[new Float32Array([0, 0]), new Float32Array([1, 2]), new Float32Array([2, 4]), new Float32Array([3, 8]), 0], [0, 0]],
    [[new Float32Array([0, 0]), new Float32Array([1, 2]), new Float32Array([2, 4]), new Float32Array([3, 8]), 0.5], [1.5, 3.25]],
    [[new Float32Array([0, 0]), new Float32Array([1, 2]), new Float32Array([2, 4]), new Float32Array([3, 8]), 1], [3, 8]],
])('expect bezierCurve3%j to be %p', (args, result) => {
    // Act
    const value = bezierCurve3(...args);

    // Assert
    expect(value).toStrictEqual(result);
});

it.each([
    [[[[1, 2]], 0], [1, 2]],
    [[[[1, 2]], 0.5], [1, 2]],
    [[[[1, 2]], 1], [1, 2]],
    [[[[0, 0], [1, 2]], 0, { offset: 1 }], [1, 2]],
    [[[[0, 0], [1, 2]], 0.5, { offset: 1 }], [1, 2]],
    [[[[0, 0], [1, 2]], 1, { offset: 1 }], [1, 2]],
    [[[new Float32Array([1, 2])], 0], new Float32Array([1, 2])],
    [[[new Float32Array([1, 2])], 0.5], new Float32Array([1, 2])],
    [[[new Float32Array([1, 2])], 1], new Float32Array([1, 2])],
    [[[[0, 0], [1, 2], [2, 4]], 0], [0, 0]],
    [[[[0, 0], [1, 2], [2, 4]], 0.5], [1, 2]],
    [[[[0, 0], [1, 2], [2, 4]], 1], [2, 4]],
    [[[new Float32Array([0, 0]), new Float32Array([1, 2]), new Float32Array([2, 4])], 0], [0, 0]],
    [[[new Float32Array([0, 0]), new Float32Array([1, 2]), new Float32Array([2, 4])], 0.5], [1, 2]],
    [[[new Float32Array([0, 0]), new Float32Array([1, 2]), new Float32Array([2, 4])], 1], [2, 4]],
    [[[[0, 0], [1, 2]], 0], [0, 0]],
    [[[[0, 0], [1, 2]], 0.5], [0.5, 1]],
    [[[[0, 0], [1, 2]], 1], [1, 2]],
    [[[new Float32Array([0, 0]), new Float32Array([1, 2])], 0], [0, 0]],
    [[[new Float32Array([0, 0]), new Float32Array([1, 2])], 0.5], [0.5, 1]],
    [[[new Float32Array([0, 0]), new Float32Array([1, 2])], 1], [1, 2]],
    [[[[0, 0], [1, 2], [2, 4], [3, 8]], 0], [0, 0]],
    [[[[0, 0], [1, 2], [2, 4], [3, 8]], 0.5], [1.5, 3.25]],
    [[[[0, 0], [1, 2], [2, 4], [3, 8]], 1], [3, 8]],
    [[[new Float32Array([0, 0]), new Float32Array([1, 2]), new Float32Array([2, 4]), new Float32Array([3, 8])], 0], [0, 0]],
    [[[new Float32Array([0, 0]), new Float32Array([1, 2]), new Float32Array([2, 4]), new Float32Array([3, 8])], 0.5], [1.5, 3.25]],
    [[[new Float32Array([0, 0]), new Float32Array([1, 2]), new Float32Array([2, 4]), new Float32Array([3, 8])], 1], [3, 8]],
])('expect bezierCurveN%j to be %p', (args, result) => {
    // Act
    const value = bezierCurveN(...args);

    // Assert
    expect(value).toStrictEqual(result);
});
