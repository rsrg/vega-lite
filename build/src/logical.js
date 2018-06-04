"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isLogicalOr(op) {
    return !!op.or;
}
exports.isLogicalOr = isLogicalOr;
function isLogicalAnd(op) {
    return !!op.and;
}
exports.isLogicalAnd = isLogicalAnd;
function isLogicalNot(op) {
    return !!op.not;
}
exports.isLogicalNot = isLogicalNot;
function forEachLeaf(op, fn) {
    if (isLogicalNot(op)) {
        forEachLeaf(op.not, fn);
    }
    else if (isLogicalAnd(op)) {
        for (var _i = 0, _a = op.and; _i < _a.length; _i++) {
            var subop = _a[_i];
            forEachLeaf(subop, fn);
        }
    }
    else if (isLogicalOr(op)) {
        for (var _b = 0, _c = op.or; _b < _c.length; _b++) {
            var subop = _c[_b];
            forEachLeaf(subop, fn);
        }
    }
    else {
        fn(op);
    }
}
exports.forEachLeaf = forEachLeaf;
function normalizeLogicalOperand(op, normalizer) {
    if (isLogicalNot(op)) {
        return { not: normalizeLogicalOperand(op.not, normalizer) };
    }
    else if (isLogicalAnd(op)) {
        return { and: op.and.map(function (o) { return normalizeLogicalOperand(o, normalizer); }) };
    }
    else if (isLogicalOr(op)) {
        return { or: op.or.map(function (o) { return normalizeLogicalOperand(o, normalizer); }) };
    }
    else {
        return normalizer(op);
    }
}
exports.normalizeLogicalOperand = normalizeLogicalOperand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naWNhbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sb2dpY2FsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBY0EscUJBQTRCLEVBQXVCO0lBQ2pELE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7QUFDakIsQ0FBQztBQUZELGtDQUVDO0FBRUQsc0JBQTZCLEVBQXVCO0lBQ2xELE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUM7QUFDbEIsQ0FBQztBQUZELG9DQUVDO0FBRUQsc0JBQTZCLEVBQXVCO0lBQ2xELE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUM7QUFDbEIsQ0FBQztBQUZELG9DQUVDO0FBRUQscUJBQStCLEVBQXFCLEVBQUUsRUFBbUI7SUFDdkUsSUFBSSxZQUFZLENBQUMsRUFBRSxDQUFDLEVBQUU7UUFDcEIsV0FBVyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUM7S0FDekI7U0FBTSxJQUFJLFlBQVksQ0FBQyxFQUFFLENBQUMsRUFBRTtRQUMzQixLQUFvQixVQUFNLEVBQU4sS0FBQSxFQUFFLENBQUMsR0FBRyxFQUFOLGNBQU0sRUFBTixJQUFNLEVBQUU7WUFBdkIsSUFBTSxLQUFLLFNBQUE7WUFDZCxXQUFXLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1NBQ3hCO0tBQ0Y7U0FBTSxJQUFJLFdBQVcsQ0FBQyxFQUFFLENBQUMsRUFBRTtRQUMxQixLQUFvQixVQUFLLEVBQUwsS0FBQSxFQUFFLENBQUMsRUFBRSxFQUFMLGNBQUssRUFBTCxJQUFLLEVBQUU7WUFBdEIsSUFBTSxLQUFLLFNBQUE7WUFDZCxXQUFXLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1NBQ3hCO0tBQ0Y7U0FBTTtRQUNMLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztLQUNSO0FBQ0gsQ0FBQztBQWRELGtDQWNDO0FBRUQsaUNBQTJDLEVBQXFCLEVBQUUsVUFBdUI7SUFDdkYsSUFBSSxZQUFZLENBQUMsRUFBRSxDQUFDLEVBQUU7UUFDcEIsT0FBTyxFQUFDLEdBQUcsRUFBRSx1QkFBdUIsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLFVBQVUsQ0FBQyxFQUFDLENBQUM7S0FDM0Q7U0FBTSxJQUFJLFlBQVksQ0FBQyxFQUFFLENBQUMsRUFBRTtRQUMzQixPQUFPLEVBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsdUJBQXVCLENBQUMsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxFQUF0QyxDQUFzQyxDQUFDLEVBQUMsQ0FBQztLQUN2RTtTQUFNLElBQUksV0FBVyxDQUFDLEVBQUUsQ0FBQyxFQUFFO1FBQzFCLE9BQU8sRUFBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSx1QkFBdUIsQ0FBQyxDQUFDLEVBQUUsVUFBVSxDQUFDLEVBQXRDLENBQXNDLENBQUMsRUFBQyxDQUFDO0tBQ3JFO1NBQU07UUFDTCxPQUFPLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQztLQUN2QjtBQUNILENBQUM7QUFWRCwwREFVQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB0eXBlIExvZ2ljYWxPcGVyYW5kPFQ+ID0gTG9naWNhbE5vdDxUPiB8IExvZ2ljYWxBbmQ8VD4gfCBMb2dpY2FsT3I8VD4gfCBUO1xuXG5leHBvcnQgaW50ZXJmYWNlIExvZ2ljYWxPcjxUPiB7XG4gIG9yOiBMb2dpY2FsT3BlcmFuZDxUPltdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIExvZ2ljYWxBbmQ8VD4ge1xuICBhbmQ6IExvZ2ljYWxPcGVyYW5kPFQ+W107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9naWNhbE5vdDxUPiB7XG4gIG5vdDogTG9naWNhbE9wZXJhbmQ8VD47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0xvZ2ljYWxPcihvcDogTG9naWNhbE9wZXJhbmQ8YW55Pik6IG9wIGlzIExvZ2ljYWxPcjxhbnk+IHtcbiAgcmV0dXJuICEhb3Aub3I7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0xvZ2ljYWxBbmQob3A6IExvZ2ljYWxPcGVyYW5kPGFueT4pOiBvcCBpcyBMb2dpY2FsQW5kPGFueT4ge1xuICByZXR1cm4gISFvcC5hbmQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0xvZ2ljYWxOb3Qob3A6IExvZ2ljYWxPcGVyYW5kPGFueT4pOiBvcCBpcyBMb2dpY2FsTm90PGFueT4ge1xuICByZXR1cm4gISFvcC5ub3Q7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JFYWNoTGVhZjxUPihvcDogTG9naWNhbE9wZXJhbmQ8VD4sIGZuOiAob3A6IFQpID0+IHZvaWQpIHtcbiAgaWYgKGlzTG9naWNhbE5vdChvcCkpIHtcbiAgICBmb3JFYWNoTGVhZihvcC5ub3QsIGZuKTtcbiAgfSBlbHNlIGlmIChpc0xvZ2ljYWxBbmQob3ApKSB7XG4gICAgZm9yIChjb25zdCBzdWJvcCBvZiBvcC5hbmQpIHtcbiAgICAgIGZvckVhY2hMZWFmKHN1Ym9wLCBmbik7XG4gICAgfVxuICB9IGVsc2UgaWYgKGlzTG9naWNhbE9yKG9wKSkge1xuICAgIGZvciAoY29uc3Qgc3Vib3Agb2Ygb3Aub3IpIHtcbiAgICAgIGZvckVhY2hMZWFmKHN1Ym9wLCBmbik7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGZuKG9wKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplTG9naWNhbE9wZXJhbmQ8VD4ob3A6IExvZ2ljYWxPcGVyYW5kPFQ+LCBub3JtYWxpemVyOiAobzogVCkgPT4gVCk6IExvZ2ljYWxPcGVyYW5kPFQ+IHtcbiAgaWYgKGlzTG9naWNhbE5vdChvcCkpIHtcbiAgICByZXR1cm4ge25vdDogbm9ybWFsaXplTG9naWNhbE9wZXJhbmQob3Aubm90LCBub3JtYWxpemVyKX07XG4gIH0gZWxzZSBpZiAoaXNMb2dpY2FsQW5kKG9wKSkge1xuICAgIHJldHVybiB7YW5kOiBvcC5hbmQubWFwKG8gPT4gbm9ybWFsaXplTG9naWNhbE9wZXJhbmQobywgbm9ybWFsaXplcikpfTtcbiAgfSBlbHNlIGlmIChpc0xvZ2ljYWxPcihvcCkpIHtcbiAgICByZXR1cm4ge29yOiBvcC5vci5tYXAobyA9PiBub3JtYWxpemVMb2dpY2FsT3BlcmFuZChvLCBub3JtYWxpemVyKSl9O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBub3JtYWxpemVyKG9wKTtcbiAgfVxufVxuIl19