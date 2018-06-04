"use strict";
/* tslint:disable quotemark */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var chai_1 = require("chai");
var selection = tslib_1.__importStar(require("../../../src/compile/selection/selection"));
var toggle_1 = tslib_1.__importDefault(require("../../../src/compile/selection/transforms/toggle"));
var util_1 = require("../../util");
describe('Toggle Selection Transform', function () {
    var model = util_1.parseUnitModel({
        "mark": "circle",
        "encoding": {
            "x": { "field": "Horsepower", "type": "quantitative" },
            "y": { "field": "Miles_per_Gallon", "type": "quantitative" },
            "color": { "field": "Origin", "type": "nominal" }
        }
    });
    model.parseScale();
    var selCmpts = model.component.selection = selection.parseUnitSelection(model, {
        "one": { "type": "multi" },
        "two": {
            "type": "multi", "resolve": "union",
            "on": "mouseover", "toggle": "event.ctrlKey", "encodings": ["y", "color"]
        },
        "three": { "type": "multi", "toggle": false },
        "four": { "type": "multi", "toggle": null },
        "five": { "type": "single" },
        "six": { "type": "interval" }
    });
    it('identifies transform invocation', function () {
        chai_1.assert.isNotFalse(toggle_1.default.has(selCmpts['one']));
        chai_1.assert.isNotFalse(toggle_1.default.has(selCmpts['two']));
        chai_1.assert.isNotTrue(toggle_1.default.has(selCmpts['three']));
        chai_1.assert.isNotTrue(toggle_1.default.has(selCmpts['four']));
        chai_1.assert.isNotTrue(toggle_1.default.has(selCmpts['five']));
        chai_1.assert.isNotTrue(toggle_1.default.has(selCmpts['six']));
    });
    it('builds toggle signals', function () {
        var oneSg = toggle_1.default.signals(model, selCmpts['one'], []);
        chai_1.assert.sameDeepMembers(oneSg, [{
                name: 'one_toggle',
                value: false,
                on: [{
                        events: selCmpts['one'].events,
                        update: 'event.shiftKey'
                    }]
            }]);
        var twoSg = toggle_1.default.signals(model, selCmpts['two'], []);
        chai_1.assert.sameDeepMembers(twoSg, [{
                name: 'two_toggle',
                value: false,
                on: [{
                        events: selCmpts['two'].events,
                        update: 'event.ctrlKey'
                    }]
            }]);
        var signals = selection.assembleUnitSelectionSignals(model, []);
        chai_1.assert.includeDeepMembers(signals, oneSg.concat(twoSg));
    });
    it('builds modify expr', function () {
        var oneExpr = toggle_1.default.modifyExpr(model, selCmpts['one'], '');
        chai_1.assert.equal(oneExpr, 'one_toggle ? null : one_tuple, one_toggle ? null : true, one_toggle ? one_tuple : null');
        var twoExpr = toggle_1.default.modifyExpr(model, selCmpts['two'], '');
        chai_1.assert.equal(twoExpr, 'two_toggle ? null : two_tuple, two_toggle ? null : {unit: \"\"}, two_toggle ? two_tuple : null');
        var signals = selection.assembleUnitSelectionSignals(model, []);
        chai_1.assert.includeDeepMembers(signals, [
            {
                "name": "one_modify",
                "on": [
                    {
                        "events": { "signal": "one_tuple" },
                        "update": "modify(\"one_store\", " + oneExpr + ")"
                    }
                ]
            },
            {
                "name": "two_modify",
                "on": [
                    {
                        "events": { "signal": "two_tuple" },
                        "update": "modify(\"two_store\", " + twoExpr + ")"
                    }
                ]
            }
        ]);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9nZ2xlLnRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi90ZXN0L2NvbXBpbGUvc2VsZWN0aW9uL3RvZ2dsZS50ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSw4QkFBOEI7OztBQUU5Qiw2QkFBNEI7QUFDNUIsMEZBQXNFO0FBQ3RFLG9HQUFzRTtBQUN0RSxtQ0FBMEM7QUFFMUMsUUFBUSxDQUFDLDRCQUE0QixFQUFFO0lBQ3JDLElBQU0sS0FBSyxHQUFHLHFCQUFjLENBQUM7UUFDM0IsTUFBTSxFQUFFLFFBQVE7UUFDaEIsVUFBVSxFQUFFO1lBQ1YsR0FBRyxFQUFFLEVBQUMsT0FBTyxFQUFFLFlBQVksRUFBQyxNQUFNLEVBQUUsY0FBYyxFQUFDO1lBQ25ELEdBQUcsRUFBRSxFQUFDLE9BQU8sRUFBRSxrQkFBa0IsRUFBQyxNQUFNLEVBQUUsY0FBYyxFQUFDO1lBQ3pELE9BQU8sRUFBRSxFQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBQztTQUNoRDtLQUNGLENBQUMsQ0FBQztJQUVILEtBQUssQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNuQixJQUFNLFFBQVEsR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsa0JBQWtCLENBQUMsS0FBSyxFQUFFO1FBQy9FLEtBQUssRUFBRSxFQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUM7UUFDeEIsS0FBSyxFQUFFO1lBQ0wsTUFBTSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsT0FBTztZQUNuQyxJQUFJLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxlQUFlLEVBQUUsV0FBVyxFQUFFLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQztTQUMxRTtRQUNELE9BQU8sRUFBRSxFQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBQztRQUMzQyxNQUFNLEVBQUUsRUFBQyxNQUFNLEVBQUUsT0FB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QUMsNEJBQTRCLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ2xFLGFBQU0sQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLEVBQUU7WUFDakM7Z0JBQ0UsTUFBTSxFQUFFLFlBQVk7Z0JBQ3BCLElBQUksRUFBRTtvQkFDSjt3QkFDRSxRQUFRLEVBQUUsRUFBQyxRQUFRLEVBQUUsV0FBVyxFQUFDO3dCQUNqQyxRQUFRLEVBQUUsMkJBQXlCLE9BQU8sTUFBRztxQkFDOUM7aUJBQ0Y7YUFDRjtZQUNEO2dCQUNFLE1BQU0sRUFBRSxZQUFZO2dCQUNwQixJQUFJLEVBQUU7b0JBQ0o7d0JBQ0UsUUFBUSxFQUFFLEVBQUMsUUFBUSxFQUFFLFdBQVcsRUFBQzt3QkFDakMsUUFBUSxFQUFFLDJCQUF5QixPQUFPLE1BQUc7cUJBQzlDO2lCQUNGO2FBQ0Y7U0FDRixDQUFDLENBQUM7SUFDTCxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyogdHNsaW50OmRpc2FibGUgcXVvdGVtYXJrICovXG5cbmltcG9ydCB7YXNzZXJ0fSBmcm9tICdjaGFpJztcbmltcG9ydCAqIGFzIHNlbGVjdGlvbiBmcm9tICcuLi8uLi8uLi9zcmMvY29tcGlsZS9zZWxlY3Rpb24vc2VsZWN0aW9uJztcbmltcG9ydCB0b2dnbGUgZnJvbSAnLi4vLi4vLi4vc3JjL2NvbXBpbGUvc2VsZWN0aW9uL3RyYW5zZm9ybXMvdG9nZ2xlJztcbmltcG9ydCB7cGFyc2VVbml0TW9kZWx9IGZyb20gJy4uLy4uL3V0aWwnO1xuXG5kZXNjcmliZSgnVG9nZ2xlIFNlbGVjdGlvbiBUcmFuc2Zvcm0nLCBmdW5jdGlvbigpIHtcbiAgY29uc3QgbW9kZWwgPSBwYXJzZVVuaXRNb2RlbCh7XG4gICAgXCJtYXJrXCI6IFwiY2lyY2xlXCIsXG4gICAgXCJlbmNvZGluZ1wiOiB7XG4gICAgICBcInhcIjoge1wiZmllbGRcIjogXCJIb3JzZXBvd2VyXCIsXCJ0eXBlXCI6IFwicXVhbnRpdGF0aXZlXCJ9LFxuICAgICAgXCJ5XCI6IHtcImZpZWxkXCI6IFwiTWlsZXNfcGVyX0dhbGxvblwiLFwidHlwZVwiOiBcInF1YW50aXRhdGl2ZVwifSxcbiAgICAgIFwiY29sb3JcIjoge1wiZmllbGRcIjogXCJPcmlnaW5cIiwgXCJ0eXBlXCI6IFwibm9taW5hbFwifVxuICAgIH1cbiAgfSk7XG5cbiAgbW9kZWwucGFyc2VTY2FsZSgpO1xuICBjb25zdCBzZWxDbXB0cyA9IG1vZGVsLmNvbXBvbmVudC5zZWxlY3Rpb24gPSBzZWxlY3Rpb24ucGFyc2VVbml0U2VsZWN0aW9uKG1vZGVsLCB7XG4gICAgXCJvbmVcIjoge1widHlwZVwiOiBcIm11bHRpXCJ9LFxuICAgIFwidHdvXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIm11bHRpXCIsIFwicmVzb2x2ZVwiOiBcInVuaW9uXCIsXG4gICAgICBcIm9uXCI6IFwibW91c2VvdmVyXCIsIFwidG9nZ2xlXCI6IFwiZXZlbnQuY3RybEtleVwiLCBcImVuY29kaW5nc1wiOiBbXCJ5XCIsIFwiY29sb3JcIl1cbiAgICB9LFxuICAgIFwidGhyZWVcIjoge1widHlwZVwiOiBcIm11bHRpXCIsIFwidG9nZ2xlXCI6IGZhbHNlfSxcbiAgICBcImZvdXJcIjoge1widHlwZVwiOiBcIm11bHRpXCIsIFwidG9nZ2xlXCI6IG51bGx9LFxuICAgIFwiZml2ZVwiOiB7XCJ0eXBlXCI6IFwic2luZ2xlXCJ9LFxuICAgIFwic2l4XCI6IHtcInR5cGVcIjogXCJpbnRlcnZhbFwifVxuICB9KTtcblxuICBpdCgnaWRlbnRpZmllcyB0cmFuc2Zvcm0gaW52b2NhdGlvbicsIGZ1bmN0aW9uKCkge1xuICAgIGFzc2VydC5pc05vdEZhbHNlKHRvZ2dsZS5oYXMoc2VsQ21wdHNbJ29uZSddKSk7XG4gICAgYXNzZXJ0LmlzTm90RmFsc2UodG9nZ2xlLmhhcyhzZWxDbXB0c1sndHdvJ10pKTtcbiAgICBhc3NlcnQuaXNOb3RUcnVlKHRvZ2dsZS5oYXMoc2VsQ21wdHNbJ3RocmVlJ10pKTtcbiAgICBhc3NlcnQuaXNOb3RUcnVlKHRvZ2dsZS5oYXMoc2VsQ21wdHNbJ2ZvdXInXSkpO1xuICAgIGFzc2VydC5pc05vdFRydWUodG9nZ2xlLmhhcyhzZWxDbXB0c1snZml2ZSddKSk7XG4gICAgYXNzZXJ0LmlzTm90VHJ1ZSh0b2dnbGUuaGFzKHNlbENtcHRzWydzaXgnXSkpO1xuICB9KTtcblxuICBpdCgnYnVpbGRzIHRvZ2dsZSBzaWduYWxzJywgZnVuY3Rpb24oKSB7XG4gICAgY29uc3Qgb25lU2cgPSB0b2dnbGUuc2lnbmFscyhtb2RlbCwgc2VsQ21wdHNbJ29uZSddLCBbXSk7XG4gICAgYXNzZXJ0LnNhbWVEZWVwTWVtYmVycyhvbmVTZywgW3tcbiAgICAgIG5hbWU6ICdvbmVfdG9nZ2xlJyxcbiAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIG9uOiBbe1xuICAgICAgICBldmVudHM6IHNlbENtcHRzWydvbmUnXS5ldmVudHMsXG4gICAgICAgIHVwZGF0ZTogJ2V2ZW50LnNoaWZ0S2V5J1xuICAgICAgfV1cbiAgICB9XSk7XG5cbiAgICBjb25zdCB0d29TZyA9IHRvZ2dsZS5zaWduYWxzKG1vZGVsLCBzZWxDbXB0c1sndHdvJ10sIFtdKTtcbiAgICBhc3NlcnQuc2FtZURlZXBNZW1iZXJzKHR3b1NnLCBbe1xuICAgICAgbmFtZTogJ3R3b190b2dnbGUnLFxuICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgb246IFt7XG4gICAgICAgIGV2ZW50czogc2VsQ21wdHNbJ3R3byddLmV2ZW50cyxcbiAgICAgICAgdXBkYXRlOiAnZXZlbnQuY3RybEtleSdcbiAgICAgIH1dXG4gICAgfV0pO1xuXG4gICAgY29uc3Qgc2lnbmFscyA9IHNlbGVjdGlvbi5hc3NlbWJsZVVuaXRTZWxlY3Rpb25TaWduYWxzKG1vZGVsLCBbXSk7XG4gICAgYXNzZXJ0LmluY2x1ZGVEZWVwTWVtYmVycyhzaWduYWxzLCBvbmVTZy5jb25jYXQodHdvU2cpKTtcbiAgfSk7XG5cbiAgaXQoJ2J1aWxkcyBtb2RpZnkgZXhwcicsIGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IG9uZUV4cHIgPSB0b2dnbGUubW9kaWZ5RXhwcihtb2RlbCwgc2VsQ21wdHNbJ29uZSddLCAnJyk7XG4gICAgYXNzZXJ0LmVxdWFsKG9uZUV4cHIsICdvbmVfdG9nZ2xlID8gbnVsbCA6IG9uZV90dXBsZSwgb25lX3RvZ2dsZSA/IG51bGwgOiB0cnVlLCBvbmVfdG9nZ2xlID8gb25lX3R1cGxlIDogbnVsbCcpO1xuXG4gICAgY29uc3QgdHdvRXhwciA9IHRvZ2dsZS5tb2RpZnlFeHByKG1vZGVsLCBzZWxDbXB0c1sndHdvJ10sICcnKTtcbiAgICBhc3NlcnQuZXF1YWwodHdvRXhwciwgJ3R3b190b2dnbGUgPyBudWxsIDogdHdvX3R1cGxlLCB0d29fdG9nZ2xlID8gbnVsbCA6IHt1bml0OiBcXFwiXFxcIn0sIHR3b190b2dnbGUgPyB0d29fdHVwbGUgOiBudWxsJyk7XG5cbiAgICBjb25zdCBzaWduYWxzID0gc2VsZWN0aW9uLmFzc2VtYmxlVW5pdFNlbGVjdGlvblNpZ25hbHMobW9kZWwsIFtdKTtcbiAgICBhc3NlcnQuaW5jbHVkZURlZXBNZW1iZXJzKHNpZ25hbHMsIFtcbiAgICAgIHtcbiAgICAgICAgXCJuYW1lXCI6IFwib25lX21vZGlmeVwiLFxuICAgICAgICBcIm9uXCI6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcImV2ZW50c1wiOiB7XCJzaWduYWxcIjogXCJvbmVfdHVwbGVcIn0sXG4gICAgICAgICAgICBcInVwZGF0ZVwiOiBgbW9kaWZ5KFxcXCJvbmVfc3RvcmVcXFwiLCAke29uZUV4cHJ9KWBcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwibmFtZVwiOiBcInR3b19tb2RpZnlcIixcbiAgICAgICAgXCJvblwiOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJldmVudHNcIjoge1wic2lnbmFsXCI6IFwidHdvX3R1cGxlXCJ9LFxuICAgICAgICAgICAgXCJ1cGRhdGVcIjogYG1vZGlmeShcXFwidHdvX3N0b3JlXFxcIiwgJHt0d29FeHByfSlgXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgXSk7XG4gIH0pO1xufSk7XG4iXX0=