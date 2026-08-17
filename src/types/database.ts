export type LeadInsert = {
  name: string;
  phone: string;
  city: string;
  loan_type: string;
};

export type LeadRow = LeadInsert & {
  id: string;
  created_at: string;
};

export type Database = {
  public: {
    Tables: {
      leads: {
        Row: LeadRow;
        Insert: LeadInsert;
        Update: Partial<LeadInsert>;
        Relationships: [];
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
};
