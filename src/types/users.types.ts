export interface User {
  pathRoot: string;
  id: string;
  externalId: null;
  username: null;
  emailAddresses: EmailAddress[];
  phoneNumbers: any[];
  web3Wallets: any[];
  externalAccounts: ExternalAccount[];
  samlAccounts: any[];
  organizationMemberships: any[];
  passwordEnabled: boolean;
  firstName: string;
  lastName: string;
  fullName: string;
  primaryEmailAddressId: string;
  primaryEmailAddress: EmailAddress;
  primaryPhoneNumberId: null;
  primaryPhoneNumber: null;
  primaryWeb3WalletId: null;
  primaryWeb3Wallet: null;
  imageUrl: string;
  hasImage: boolean;
  twoFactorEnabled: boolean;
  totpEnabled: boolean;
  backupCodeEnabled: boolean;
  publicMetadata: Metadata;
  unsafeMetadata: Metadata;
  createOrganizationEnabled: boolean;
  deleteSelfEnabled: boolean;
  lastSignInAt: Date;
  updatedAt: Date;
  createdAt: Date;
  cachedSessionsWithActivities: null;
}

export interface EmailAddress {
  pathRoot: string;
  emailAddress: string;
  linkedTo: LinkedTo[];
  id: string;
  verification: Verification;
}

export interface LinkedTo {
  pathRoot: string;
  id: string;
  type: string;
}

export interface Verification {
  pathRoot: string;
  status: string;
  strategy: string;
  nonce: null;
  externalVerificationRedirectURL: null;
  attempts: null;
  expireAt: Date;
  error: null;
}

export interface ExternalAccount {
  pathRoot: string;
  providerUserId: string;
  emailAddress: string;
  approvedScopes: string;
  firstName: string;
  lastName: string;
  imageUrl: string;
  username: null;
  publicMetadata: Metadata;
  label: null;
  verification: Verification;
  id: string;
  identificationId: string;
  provider: string;
}

export interface Metadata {}
