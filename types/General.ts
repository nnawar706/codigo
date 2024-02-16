export interface ToastData {
    message: string;
    show: boolean;
}

export interface Language {
    id: number;
    name: string;
    label: string;
    value: string;
}

export interface OutputInfo {
    status?: {
        id: number;
        description: string;
    }
    compile_output: string;
    memory: string;
    time: string;
    stdout: string;
    stderr: string;
}