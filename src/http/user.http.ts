import axios from 'axios';
import type { SignUpFields, SignUpResponse, LoginFields } from '../types/user.types';

const URL = 'http://127.0.0.1:3001';


export async function signUp(signUpFields: SignUpFields): Promise<SignUpResponse> {
  return axios.post(`${URL}/auth/signup`, signUpFields).then((response) => response.data)
}

export async function login(loginFields: LoginFields) {
  return axios.post(`${URL}/auth/login`, loginFields).then((response) => response.data)
}
