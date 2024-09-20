import BezierCurve from './bezier-curve.js';

export class CubicBezierSpline {
    /** @param {number[][]|Float32Array[]} points */
    constructor(points) {
        this.points = points;
        this.curves = new Array(points.length / 4);
        for (let i = 0; i < this.curves.length; i++)
            this.curves[i] = new BezierCurve([points[4 * i], points[4 * i + 1], points[4 * i + 2], points[4 * i + 3]]);
    }

    /** @param {number} t */
    /*@__INLINE__*/ getPointAt(t) {
        const index = Math.max(0, Math.min(Math.floor(t), this.curves.length - 1));
        return /*@__PURE__*/ this.curves[index].getPointAt(t - index);
    }
}

export default CubicBezierSpline;
