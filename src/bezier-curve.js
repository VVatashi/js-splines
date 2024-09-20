import { mix } from '../node_modules/@vvatashi/js-math-utils/src/utils.js';

/**
 * @param {number[]|Float32Array} a
 * @param {number[]|Float32Array} b
 * @param {number} t
 */
export function bezierCurve1(a, b, t) {
    const result = new Array(a.length);
    for (let i = 0; i < a.length; i++)
        result[i] = /*@__PURE__*/ mix(a[i], b[i], t);

    return result;
}

/**
 * @param {number[]|Float32Array} a
 * @param {number[]|Float32Array} b
 * @param {number[]|Float32Array} c
 * @param {number} t
 */
export function bezierCurve2(a, b, c, t) {
    const result = new Array(a.length);
    for (let i = 0; i < a.length; i++) {
        const linear = /*@__PURE__*/ Math.fround(-2 * a[i] + 2 * b[i]);
        const square = /*@__PURE__*/ Math.fround(a[i] - 2 * b[i] + c[i]);
        result[i] = /*@__PURE__*/ Math.fround(a[i] + t * (linear + t * square));
    }

    return result;
}

/**
 * @param {number[]|Float32Array} a
 * @param {number[]|Float32Array} b
 * @param {number[]|Float32Array} c
 * @param {number[]|Float32Array} d
 * @param {number} t
 */
export function bezierCurve3(a, b, c, d, t) {
    const result = new Array(a.length);
    for (let i = 0; i < a.length; i++) {
        const linear = /*@__PURE__*/ Math.fround(-3 * a[i] + 3 * b[i]);
        const square = /*@__PURE__*/ Math.fround(3 * a[i] - 6 * b[i] + 3 * c[i]);
        const cubic = /*@__PURE__*/ Math.fround(-a[i] + 3 * b[i] - 3 * c[i] + d[i]);
        result[i] = /*@__PURE__*/ Math.fround(a[i] + t * (linear + t * (square + t * cubic)));
    }

    return result;
}

/**
 * @param {number[][]|Float32Array[]} points
 * @param {number} t
 * @param {Object} options
 * @param {number} [options.offset]
 * @param {number} [options.length]
 */
export function bezierCurveN(points, t, { offset, length } = {}) {
    offset = offset || 0;
    length = length || points.length - offset;

    switch (length) {
        case 1: return points[offset];
        case 2: return /*@__PURE__*/ bezierCurve1(points[offset], points[offset + 1], t);
        case 3: return /*@__PURE__*/ bezierCurve2(points[offset], points[offset + 1], points[offset + 2], t);
        case 4: return /*@__PURE__*/ bezierCurve3(points[offset], points[offset + 1], points[offset + 2], points[offset + 3], t);

        default:
            const a = /*@__PURE__*/ bezierCurveN(points, t, { offset: offset, length: length - 1 });
            const b = /*@__PURE__*/ bezierCurveN(points, t, { offset: offset + 1, length: length - 1 });

            return /*@__PURE__*/ bezierCurve1(a, b, t);
    }
}

export class BezierCurve {
    /** @param {number[][]|Float32Array[]} points */
    constructor(points) {
        this.points = points;
    }

    /** @param {number} t */
    /*@__INLINE__*/ getPointAt(t) {
        return /*@__PURE__*/ bezierCurveN(this.points, t);
    }
}

export default BezierCurve;
