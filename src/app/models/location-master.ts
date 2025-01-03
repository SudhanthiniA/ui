export class Block {
  id: number;
  code: string;
  districtName: string;
  name: string;
  stateName: string;
  active: boolean;
}

export class Country {
  id: number;
  code: string;
  countryName: string;
  countryCode: number;
  shortName: string;
  name: string;
  currency: string;
  stateName: string;
  active: boolean;
}

export class Corporation {
  id: number;
  code: string;
  districtName: string;
  name: string;
  stateName: string;
  active: boolean;
}

export class District {
  id: number;
  code: string;
  shortName: string;
  name: string;
  stateName: string;
  active: boolean;
}

export class Location {
  id: number;
  locCode: string;
  locationCode: string;
  locationName: string;
  state: string;
  country: string;
  active: boolean;
}

export class Municipality {
  id: number;
  code: string;
  districtName: string;
  name: string;
  stateName: string;
  active: boolean;
}

export class State {
  id: number;
  stateCode: string;
  countryName: string;
  shortName: string;
  stateName: string;
  active: boolean;
}

export class Taluk {
  id: number;
  code: string;
  shortName: string;
  name: string;
  stateName: string;
  districtName: string;
  active: boolean;
}

export class Village {
  id: number;
  code: string;
  name: string;
  talukName: string;
  districtName: string;
  active: boolean;
}