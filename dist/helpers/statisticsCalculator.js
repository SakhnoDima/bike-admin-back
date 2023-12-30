"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.statisticsCalculator = void 0;
const statisticsCalculator = (info) => {
    const rez = {
        totalBike: 0,
        totPrice: 0,
        available: 0,
        busy: 0,
    };
    for (let i = 0; i < info.length; i++) {
        rez.totalBike += info[i].totalBike;
        rez.totPrice += info[i].avgPrice * info[i].totalBike;
        switch (info[i]._id) {
            case "available":
                rez.available = info[i].totalBike;
                break;
            case "busy":
                rez.busy = info[i].totalBike;
                break;
        }
    }
    return {
        totalBike: rez.totalBike,
        available: rez.available,
        busy: rez.busy,
        avg: +(rez.totPrice / rez.totalBike).toFixed(2),
    };
};
exports.statisticsCalculator = statisticsCalculator;
//# sourceMappingURL=statisticsCalculator.js.map