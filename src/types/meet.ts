export interface Meet {
  id: number;
  created_at: string;
  description: string;
  ubication: string;
  photo: string;
  title: string;
  subject: string;
  user_id: string;
  date: string;
  meets_users: MeetsUser[];
}

export interface MeetsUser {
  id: number;
  user_id: string;
}

export interface FormMeet {
  title: string;
  description: string;
  ubication: string;
  date: string;
  photo: string;
  subject: string;
}

export interface CreatedMeet {
  user_id: string;
  title: string;
  description: string;
  ubication: string;
  date: string;
  photo: string;
  subject: string;
}
