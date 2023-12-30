interface TStatisticsInfo {
  _id: string;
  totalBike: number;
  avgPrice: number;
}

export interface IRez {
  totalBike: number;
  available: number;
  busy: number;
  avg: number;
}

export const statisticsCalculator = (info: TStatisticsInfo[]): IRez => {
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
