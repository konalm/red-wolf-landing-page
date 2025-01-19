export interface SignUpFields {
  username: string
  email: string
  password: string
}

export interface SignUpResponse {
  message: string
  user: {
    UUID: string
    username: string
    email: string
  }
  token: string
}

export interface LoginFields {
  username: string
  password: string
}
