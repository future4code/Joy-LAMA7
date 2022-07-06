export class CustomError extends Error {
    constructor(
        public statusCode: number,
        message: string
    ) {
        super(message);
    };
};

export class InvalidInput extends CustomError {
    constructor(){
        super(422, "Entrada inválida ou vazia, verifique a documentação!")
    };
};

export class UserNotFound extends CustomError {
    constructor() {
        super(404, "Usuário não encontrado");
    };
};

export class InvalidPassword extends CustomError {
    constructor() {
        super(401, "Senha inválida");
    };
};

export class InvalidEmailPattern extends CustomError {
    constructor() {
        super(422, "Padrão de email inválido, insira um email parecido com isso: exemplo@email.com");
    };
};

export class InvalidPasswordPattern extends CustomError {
    constructor() {
        super(422, "Padrão de senha inválido, insira uma senha contendo pelo menos uma letra maiúscula, uma letra minúscula, um dígito, um caractere especial e com um comprimento de no mínimo 6 caracteres");
    };
};