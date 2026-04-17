export type RubricEvent = {
  eventid: number;
  title: string;
  formatteddate: string;
  subtitle: string; // Location
  image: string;
  info: string; // Price
  destination: string; // URL
  upcoming: number; // 1 or 0 ... I didn't make it this way wtf rubric
};

// Please don't change your terrible code rubric thanks
export interface RubricSection {
  sectionname: string;
  array: RubricEvent[]; 
}

export interface RubricApiResponse {
  sections: RubricSection[];
}
