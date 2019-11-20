export interface Game {
  id: number;
  dateCreated: string; // date in string type
  name: string;
  image: string; // url
  platformId: number;
  priority: number;
  numberOfHoursPlayed: number;
  numberOfHoursToComplete: number;
  isComplete: boolean;
}
