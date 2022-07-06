enum Roles {
    NORMAL = "usuário normal",
    ADMINISTRADOR = "admin"
};

export type User = {
    id: string;
    name: string;
    email: string;
    password: string;
    role: Roles
};

export type IdUser = {
    id: string
};