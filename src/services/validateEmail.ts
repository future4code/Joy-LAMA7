export const validateEmail = (email: string): boolean => {
    const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    const result = pattern.test(email);

    return result;
};