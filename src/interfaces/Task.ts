export interface  ITask {
    id: number;
    name: string;
    status: number | undefined;
    createDate: string;
}

export interface  ITaskCreate {
    name: string;
    status: number;
}