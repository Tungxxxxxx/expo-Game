export const GET_LIST_USERS = 'GET_LIST_USERS';
export const GET_SINGLE_USER = 'GET_SINGLE_USER';
export const GET_SINGLE_USER_NOT_FOUND = 'GET_SINGLE_USER_NOT_FOUND';
export const GET_LIST_RESOURCE = 'GET_LIST_RESOURCE';
export const GET_SINGLE_RESOURCE = 'GET_SINGLE_RESOURCE';
export const GET_SINGLE_RESOURCE_NOT_FOUND = 'GET_SINGLE_RESOURCE_NOT_FOUND';
export const POST_CREATE = 'POST_CREATE';
export const PUT_UPDATE = 'PUT_UPDATE';
export const PATCH_UPDATE = 'PATCH_UPDATE';
export const DELETE_DELETE = 'DELETE_DELETE';
export const POST_REGISTER_SUCCESSFUL = 'POST_REGISTER_SUCCESSFUL';
export const POST_REGISTER_UNSUCCESSFUL = 'POST_REGISTER_UNSUCCESSFUL';
export const POST_LOGIN_SUCCESSFUL = 'POST_LOGIN_SUCCESSFUL';
export const POST_LOGIN_UNSUCCESSFUL = 'POST_LOGIN_UNSUCCESSFUL';
export const GET_DELAYED_RESPONSE = 'GET_DELAYED_RESPONSE';
export const API_CONSTANTS = [
  GET_LIST_USERS,
  GET_SINGLE_USER,
  GET_SINGLE_USER_NOT_FOUND,
  GET_LIST_RESOURCE,
  GET_SINGLE_RESOURCE,
  GET_SINGLE_RESOURCE_NOT_FOUND,
  GET_DELAYED_RESPONSE,
  POST_CREATE,
  PUT_UPDATE,
  PATCH_UPDATE,
  DELETE_DELETE,
  POST_REGISTER_SUCCESSFUL,
  POST_REGISTER_UNSUCCESSFUL,
  POST_LOGIN_SUCCESSFUL,
  POST_LOGIN_UNSUCCESSFUL,
];

export const SUCCESS = 'OK';
export const FALLURE = 'Error';

export const PATH_GET_LIST_USERS = 'https://reqres.in/api/users?page=2';
export const PATH_GET_SINGLE_USER = 'https://reqres.in/api/users/2';
export const PATH_GET_SINGLE_USER_NOT_FOUND = 'https://reqres.in/api/users/23';
export const PATH_GET_LIST_RESOURCE = 'https://reqres.in/api/unknown';
export const PATH_GET_SINGLE_RESOURCE = 'https://reqres.in/api/unknown/2';
export const PATH_GET_SINGLE_RESOURCE_NOT_FOUND = 'https://reqres.in/api/unknown/23';
export const PATH_POST_CREATE = 'https://reqres.in/api/users';
export const PATH_PUT_UPDATE = 'https://reqres.in/api/users/2';
export const PATH_PATCH_UPDATE = 'https://reqres.in/api/users/2';
export const PATH_DELETE_DELETE = 'https://reqres.in/api/users/2';
export const PATH_POST_REGISTER_SUCCESSFUL = 'https://reqres.in/api/register';
export const PATH_POST_REGISTER_UNSUCCESSFUL = 'https://reqres.in/api/register';
export const PATH_POST_LOGIN_SUCCESSFUL = 'https://reqres.in/api/login';
export const PATH_POST_LOGIN_UNSUCCESSFUL = 'https://reqres.in/api/login';
export const PATH_GET_DELAYED_RESPONSE = 'https://reqres.in/api/users?delay=3';
