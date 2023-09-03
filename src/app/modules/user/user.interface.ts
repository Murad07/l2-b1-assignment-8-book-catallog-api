export type IUser = {
  id: string;
  name: string;
  email: string;
  password: string;
  role: 'admin' | 'customer';
  contactNo: string;
  address: string;
  profileImg: string;
};
