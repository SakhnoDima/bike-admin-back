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
export declare const statisticsCalculator: (info: TStatisticsInfo[]) => IRez;
export {};
