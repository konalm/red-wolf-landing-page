import axios from 'axios';
import type { SignUpFields, SignUpResponse, LoginFields, UserProfile } from '../types/user.types';
import { API_URL } from '../constants/general.constants';

export async function signUp(signUpFields: SignUpFields): Promise<SignUpResponse> {
  return axios.post(`${API_URL}/auth/signup`, signUpFields).then((response) => response.data)
}

export async function login(loginFields: LoginFields) {
  return axios.post(`${API_URL}/auth/login`, loginFields).then((response) => response.data)
}

export async function getUserProfile(): Promise<UserProfile> {
  const token = localStorage.getItem('auth_token');

  const headers = { 
    'Authorization': `Bearer ${token}`
  }

  return axios.get(`${API_URL}/user-profile`, { headers: headers }).then((response) => response.data)
}