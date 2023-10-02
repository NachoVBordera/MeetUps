export interface Meet {
  id: number;
  user_id: string;
  title: string;
  description: string;
  ubication: string;
  date: string;
  photo: string;
  subject: string;
  created_at: string;
  signedup_users: userId[];
}

interface userId {
  id: string;
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
