import BezierCurve from './bezier-curve';

export class CubicBezierSpline {
    /** @param {number[][]|Float32Array[]} points */
    constructor(points) {
        this.points = points;
        this.curves = new Array(points.length / 4);
        for (let i = 0; i < this.curves.length; i++)
            this.curves[i] = new BezierCurve([points[i], points[i + 1], points[i + 2], points[i + 3]]);
    }

    /** @param {number} t */
    /*@__INLINE__*/ getPointAt(t) {
        const index = Math.floor(t);
        return /*@__PURE__*/ this.curves[index].getPointAt(t - index);
    }
}

export default CubicBezierSpline;
