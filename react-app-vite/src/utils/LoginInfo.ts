import jwt_decode from "jwt-decode";
interface UserInfo {
  userId: number;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
}
export const getLoginInfo = (): UserInfo | null => {
  const token = localStorage.getItem("token");
  if (token != null) {
    const userInfo: UserInfo = jwt_decode(token);
    return userInfo;
  } else {
    return null;
  }
};
