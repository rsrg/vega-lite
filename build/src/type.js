"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** Constants and utilities for data type */
/** Data type based on level of measurement */
var Type;
(function (Type) {
    Type.QUANTITATIVE = 'quantitative';
    Type.ORDINAL = 'ordinal';
    Type.TEMPORAL = 'temporal';
    Type.NOMINAL = 'nominal';
    Type.LATITUDE = 'latitude';
    Type.LONGITUDE = 'longitude';
    Type.GEOJSON = 'geojson';
})(Type = exports.Type || (exports.Type = {}));
exports.TYPE_INDEX = {
    quantitative: 1,
    ordinal: 1,
    temporal: 1,
    nominal: 1,
    latitude: 1,
    longitude: 1,
    geojson: 1
};
function isType(t) {
    return !!exports.TYPE_INDEX[t];
}
exports.isType = isType;
exports.QUANTITATIVE = Type.QUANTITATIVE;
exports.ORDINAL = Type.ORDINAL;
exports.TEMPORAL = Type.TEMPORAL;
exports.NOMINAL = Type.NOMINAL;
exports.GEOJSON = Type.GEOJSON;
/**
 * Get full, lowercase type name for a given type.
 * @param  type
 * @return Full type name.
 */
function getFullName(type) {
    if (type) {
        type = type.toLowerCase();
        switch (type) {
            case 'q':
            case exports.QUANTITATIVE:
                return 'quantitative';
            case 't':
            case exports.TEMPORAL:
                return 'temporal';
            case 'o':
            case exports.ORDINAL:
                return 'ordinal';
            case 'n':
            case exports.NOMINAL:
                return 'nominal';
            case Type.LATITUDE:
                return 'latitude';
            case Type.LONGITUDE:
                return 'longitude';
            case exports.GEOJSON:
                return 'geojson';
        }
    }
    // If we get invalid input, return undefined type.
    return undefined;
}
exports.getFullName = getFullName;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90eXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsNENBQTRDO0FBQzVDLDhDQUE4QztBQUU5QyxJQUFpQixJQUFJLENBU3BCO0FBVEQsV0FBaUIsSUFBSTtJQUNOLGlCQUFZLEdBQW1CLGNBQWMsQ0FBQztJQUM5QyxZQUFPLEdBQWMsU0FBUyxDQUFDO0lBQy9CLGFBQVEsR0FBZSxVQUFVLENBQUM7SUFDbEMsWUFBTyxHQUFjLFNBQVMsQ0FBQztJQUUvQixhQUFRLEdBQWUsVUFBVSxDQUFDO0lBQ2xDLGNBQVMsR0FBZ0IsV0FBVyxDQUFDO0lBQ3JDLFlBQU8sR0FBYyxTQUFTLENBQUM7QUFDOUMsQ0FBQyxFQVRnQixJQUFJLEdBQUosWUFBSSxLQUFKLFlBQUksUUFTcEI7QUFNWSxRQUFBLFVBQVUsR0FBZTtJQUNwQyxZQUFZLEVBQUUsQ0FBQztJQUNmLE9BQU8sRUFBRSxDQUFDO0lBQ1YsUUFBUSxFQUFFLENBQUM7SUFDWCxPQUFPLEVBQUUsQ0FBQztJQUNWLFFBQVEsRUFBRSxDQUFDO0lBQ1gsU0FBUyxFQUFFLENBQUM7SUFDWixPQUFPLEVBQUUsQ0FBQztDQUNYLENBQUM7QUFFRixnQkFBdUIsQ0FBTTtJQUMzQixPQUFPLENBQUMsQ0FBQyxrQkFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3pCLENBQUM7QUFGRCx3QkFFQztBQUVZLFFBQUEsWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7QUFDakMsUUFBQSxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztBQUN2QixRQUFBLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO0FBQ3pCLFFBQUEsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7QUFFdkIsUUFBQSxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztBQUVwQzs7OztHQUlHO0FBQ0gscUJBQTRCLElBQWlCO0lBQzNDLElBQUksSUFBSSxFQUFFO1FBQ1IsSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUMxQixRQUFRLElBQUksRUFBRTtZQUNaLEtBQUssR0FBRyxDQUFDO1lBQ1QsS0FBSyxvQkFBWTtnQkFDZixPQUFPLGNBQWMsQ0FBQztZQUN4QixLQUFLLEdBQUcsQ0FBQztZQUNULEtBQUssZ0JBQVE7Z0JBQ1gsT0FBTyxVQUFVLENBQUM7WUFDcEIsS0FBSyxHQUFHLENBQUM7WUFDVCxLQUFLLGVBQU87Z0JBQ1YsT0FBTyxTQUFTLENBQUM7WUFDbkIsS0FBSyxHQUFHLENBQUM7WUFDVCxLQUFLLGVBQU87Z0JBQ1YsT0FBTyxTQUFTLENBQUM7WUFDbkIsS0FBSyxJQUFJLENBQUMsUUFBUTtnQkFDaEIsT0FBTyxVQUFVLENBQUM7WUFDcEIsS0FBSyxJQUFJLENBQUMsU0FBUztnQkFDakIsT0FBTyxXQUFXLENBQUM7WUFDckIsS0FBSyxlQUFPO2dCQUNWLE9BQU8sU0FBUyxDQUFDO1NBQ3BCO0tBQ0Y7SUFDRCxrREFBa0Q7SUFDbEQsT0FBTyxTQUFTLENBQUM7QUFDbkIsQ0FBQztBQTFCRCxrQ0EwQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0ZsYWd9IGZyb20gJy4vdXRpbCc7XG4vKiogQ29uc3RhbnRzIGFuZCB1dGlsaXRpZXMgZm9yIGRhdGEgdHlwZSAqL1xuLyoqIERhdGEgdHlwZSBiYXNlZCBvbiBsZXZlbCBvZiBtZWFzdXJlbWVudCAqL1xuXG5leHBvcnQgbmFtZXNwYWNlIFR5cGUge1xuICBleHBvcnQgY29uc3QgUVVBTlRJVEFUSVZFOiAncXVhbnRpdGF0aXZlJyA9ICdxdWFudGl0YXRpdmUnO1xuICBleHBvcnQgY29uc3QgT1JESU5BTDogJ29yZGluYWwnID0gJ29yZGluYWwnO1xuICBleHBvcnQgY29uc3QgVEVNUE9SQUw6ICd0ZW1wb3JhbCcgPSAndGVtcG9yYWwnO1xuICBleHBvcnQgY29uc3QgTk9NSU5BTDogJ25vbWluYWwnID0gJ25vbWluYWwnO1xuXG4gIGV4cG9ydCBjb25zdCBMQVRJVFVERTogJ2xhdGl0dWRlJyA9ICdsYXRpdHVkZSc7XG4gIGV4cG9ydCBjb25zdCBMT05HSVRVREU6ICdsb25naXR1ZGUnID0gJ2xvbmdpdHVkZSc7XG4gIGV4cG9ydCBjb25zdCBHRU9KU09OOiAnZ2VvanNvbicgPSAnZ2VvanNvbic7XG59XG5leHBvcnQgdHlwZSBCYXNpY1R5cGUgPSB0eXBlb2YgVHlwZS5RVUFOVElUQVRJVkUgfCB0eXBlb2YgVHlwZS5PUkRJTkFMIHwgdHlwZW9mIFR5cGUuVEVNUE9SQUwgfCB0eXBlb2YgVHlwZS5OT01JTkFMO1xuZXhwb3J0IHR5cGUgR2VvVHlwZSA9IHR5cGVvZiBUeXBlLkxBVElUVURFIHwgdHlwZW9mIFR5cGUuTE9OR0lUVURFIHwgdHlwZW9mIFR5cGUuR0VPSlNPTjtcblxuZXhwb3J0IHR5cGUgVHlwZSA9IEJhc2ljVHlwZSB8IEdlb1R5cGU7XG5cbmV4cG9ydCBjb25zdCBUWVBFX0lOREVYOiBGbGFnPFR5cGU+ID0ge1xuICBxdWFudGl0YXRpdmU6IDEsXG4gIG9yZGluYWw6IDEsXG4gIHRlbXBvcmFsOiAxLFxuICBub21pbmFsOiAxLFxuICBsYXRpdHVkZTogMSxcbiAgbG9uZ2l0dWRlOiAxLFxuICBnZW9qc29uOiAxXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gaXNUeXBlKHQ6IGFueSk6IHQgaXMgVHlwZSB7XG4gIHJldHVybiAhIVRZUEVfSU5ERVhbdF07XG59XG5cbmV4cG9ydCBjb25zdCBRVUFOVElUQVRJVkUgPSBUeXBlLlFVQU5USVRBVElWRTtcbmV4cG9ydCBjb25zdCBPUkRJTkFMID0gVHlwZS5PUkRJTkFMO1xuZXhwb3J0IGNvbnN0IFRFTVBPUkFMID0gVHlwZS5URU1QT1JBTDtcbmV4cG9ydCBjb25zdCBOT01JTkFMID0gVHlwZS5OT01JTkFMO1xuXG5leHBvcnQgY29uc3QgR0VPSlNPTiA9IFR5cGUuR0VPSlNPTjtcblxuLyoqXG4gKiBHZXQgZnVsbCwgbG93ZXJjYXNlIHR5cGUgbmFtZSBmb3IgYSBnaXZlbiB0eXBlLlxuICogQHBhcmFtICB0eXBlXG4gKiBAcmV0dXJuIEZ1bGwgdHlwZSBuYW1lLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0RnVsbE5hbWUodHlwZTogVHlwZXxzdHJpbmcpOiBUeXBlIHtcbiAgaWYgKHR5cGUpIHtcbiAgICB0eXBlID0gdHlwZS50b0xvd2VyQ2FzZSgpO1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSAncSc6XG4gICAgICBjYXNlIFFVQU5USVRBVElWRTpcbiAgICAgICAgcmV0dXJuICdxdWFudGl0YXRpdmUnO1xuICAgICAgY2FzZSAndCc6XG4gICAgICBjYXNlIFRFTVBPUkFMOlxuICAgICAgICByZXR1cm4gJ3RlbXBvcmFsJztcbiAgICAgIGNhc2UgJ28nOlxuICAgICAgY2FzZSBPUkRJTkFMOlxuICAgICAgICByZXR1cm4gJ29yZGluYWwnO1xuICAgICAgY2FzZSAnbic6XG4gICAgICBjYXNlIE5PTUlOQUw6XG4gICAgICAgIHJldHVybiAnbm9taW5hbCc7XG4gICAgICBjYXNlIFR5cGUuTEFUSVRVREU6XG4gICAgICAgIHJldHVybiAnbGF0aXR1ZGUnO1xuICAgICAgY2FzZSBUeXBlLkxPTkdJVFVERTpcbiAgICAgICAgcmV0dXJuICdsb25naXR1ZGUnO1xuICAgICAgY2FzZSBHRU9KU09OOlxuICAgICAgICByZXR1cm4gJ2dlb2pzb24nO1xuICAgIH1cbiAgfVxuICAvLyBJZiB3ZSBnZXQgaW52YWxpZCBpbnB1dCwgcmV0dXJuIHVuZGVmaW5lZCB0eXBlLlxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuIl19