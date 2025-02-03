export interface SignUpFields {
  username: string
  email: string
  password: string
  annualBilling: boolean
}

export interface SignUpResponse {
  message: string
  user: {
    UUID: string
    username: string
    email: string
  }
  token: string
  paymentLink: string
}

export interface LoginFields {
  username: string
  password: string
}

export interface UserProfile {
  username: string;
  email: string;
  subscriptionStatus: 'MEMBER' | 'GUEST';
  discordId: string | null;
}
