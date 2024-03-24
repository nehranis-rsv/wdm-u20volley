export interface TeamMatch {
  teamName: string;
  teamSlag: string;
}

export interface Group {
  groupName: string;
  teams: TeamMatch[];
}
