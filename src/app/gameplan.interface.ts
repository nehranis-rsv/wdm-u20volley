export interface Match {
  id: string;
  uuid: string;
  number: string;
  date: string;
  time: string;
  delayPossible: boolean;
  decidingMatch: boolean;
  indefinitelyRescheduled: boolean;
  gameReassessed: boolean;
  host: TeamInfo;
  team: Team[];
  matchSeries: MatchSeries;
  location: Location;
  referees: Referee[]; // Assuming there could be multiple referees, even though it's empty in the example
}

export interface TeamInfo {
  id: string;
  uuid: string;
  name: string;
  club: string;
}

export interface Team {
  number: string;
  id: string;
  uuid: string;
  seasonTeamId: string;
  name: string;
  shortName: string;
  clubCode: string;
  club: Club;
}

export interface Club {
  name: string;
  shortName: string;
}

export interface MatchSeries {
  id: string;
  uuid: string;
  allSeasonId: string;
  name: string;
  shortName: string;
  type: string;
  updated: string;
  structureUpdated: string;
  resultsUpdated: string;
  season: Season;
  hierarchy: Hierarchy[];
  fullHierarchy: FullHierarchy;
  association: Association;
}

export interface Season {
  id: string;
  uuid: string;
  name: string;
}

export interface Hierarchy {
  id: string;
  uuid: string;
  name: string;
  shortName: string;
  hierarchyLevel: number;
}

export interface FullHierarchy {
  hierarchy: Hierarchy[];
}

export interface Association {
  name: string;
  shortName: string;
}

export interface Location {
  id: string;
  name: string;
  street: string;
  extraField: string;
  postalCode: string;
  city: string;
  note: string;
}

export interface Referee {
  // Define referee properties here, assuming there would be any in the XML structure.
}
