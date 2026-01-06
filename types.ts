// types.ts

export interface ServiceConfig {
  host: string;
  port: number;
  protocol: 'http' | 'https';
}

export interface User {
  id: string;
  email: string;
  name: string;
}

export interface CreateUserRequest {
  email: string;
  name: string;
}

export interface CreateUserResponse {
  user: User;
}

export interface GetUserResponse {
  user: User;
}

export interface UpdateUserRequest {
  email?: string;
  name?: string;
}

export interface DeleteUserRequest {
  id: string;
}

export interface SearchUsersRequest {
  query: string;
}

export interface SearchUsersResponse {
  users: User[];
}