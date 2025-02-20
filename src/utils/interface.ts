export interface IAppState {
    is_welcome: boolean;
    is_robox: boolean;
    updateChangeRobox: (is_robox: boolean) => void;
    updateIsWelcome: (is_welcome: boolean) => void;
    data_chat: IResponse<any>[];
    updateDataChat: (data: IResponse<any>) => void;
    updateDataChatStrem: (status: boolean) => void;
}

export interface IMessageUser {
    is_ai: boolean;
    data: string;
}

export interface IResponse<T> {
    is_mark_down: boolean;
    msg?: string;
    data: T;
    is_ai: boolean;
    is_stream?: boolean;
}

export interface IMarkDown {
    title: string;
    content_mark_down: string;
    content_html: string;
}
