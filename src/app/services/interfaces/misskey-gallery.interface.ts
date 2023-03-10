export interface MisskeyGallery {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    userId: string;
    user: MisskeyUser;
    title: string;
    description: string;
    fields: string[];
    files: MisskeyFile[];
}

export interface MisskeyUser {
    id: string;
    name: string;
    username: string;
    host?: string;
    avatarUrl: string;
    avatarBlurhash: string;
    isBot: boolean;
    isCat: boolean;
    onlineStatus: boolean;
}

export interface MisskeyFile {
    id: string;
    createdAt: Date;
    name: Date;
    type: string;
    md5: string;
    size: number;
    isSensitive: boolean;
    blurhash: string;
    properties: Object;
    url: string;
    thumbnailUrl: string;
    comment: string;
    folderId: string;
    folder: string;
    userId: string;
    user: MisskeyUser;
}
