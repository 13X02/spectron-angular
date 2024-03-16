export interface ResultModel {
    numInstances: number;
    instanceCounts: {[index:string]:number};
    processedImageURL: string;
}