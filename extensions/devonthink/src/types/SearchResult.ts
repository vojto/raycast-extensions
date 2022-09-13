export type SearchResult = {
  id: number;
  uuid: string;
  name: string;
  score: number;
  path: string;
  tags: string[];
  numberOfHits: number;
  altitude: number;
  geolocation: string | undefined;
  latitude: number;
  interval: number;
  numberOfReplicants: number;
  batesNumber: number;
  nameWithoutExtension: string;
  state: boolean;
  annotationCount: number;
  date: string;
  characterCount: number;
  additionDate: string;
  modificationDate: string;
  rating: number;
  url: string;
  longitude: number;
  pageCount: number;
  type: string;
  excludeFromTagging: boolean;
  contentHash: string;
  location: string;
  metaData: Record<string, string>;
  stateVisibility: boolean;
  wordCount: number;
  filename: string;
  aliases: string;
  excludeFromWikiLinking: boolean;
  size: number;
  excludeFromClassification: boolean;
  referenceURL: string;
  attachmentCount: number;
  comment: string;
  numberOfDuplicates: number;
  tagType: string;
  locationGroup: string;
  height: number;
  kind: string;
  locking: boolean;
  mimeType: string;
  openingDate: string;
  unread: boolean;
  indexed: boolean;
  duration: number;
  attachedScript: string;
  excludeFromSeeAlso: boolean;
  dpi: number;
  creationDate: string;
  excludeFromSearch: boolean;
  width: number;
  label: number;
  class: string;
};
