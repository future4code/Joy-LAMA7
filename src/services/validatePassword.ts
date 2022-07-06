export const validatePassword = (password: string): boolean => {
    const pattern = /^(?=.{6,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W).*$/;

    const result = pattern.test(password);

    return result;
};