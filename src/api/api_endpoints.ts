// Login
export const LOGIN = "/staffs/loginStaff";
export const getLoginBody = (email: string, password: string) => ({
    staffEmail: email,
    staffPassword: password
});