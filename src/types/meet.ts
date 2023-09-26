export interface Meet {
  id: number;
  user_id: string;
  title: string;
  description: string;
  ubication: string;
  date: Date;
  photo: string;
  subject: string;
  created_at: string;
  signedup_users: userId[];
}

interface userId {
  id: string;
}
