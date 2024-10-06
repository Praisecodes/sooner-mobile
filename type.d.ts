interface IAppSettings { }

type LanguageEntry = {
  color: string;
  url: string;
}

type ColorsTyped = Record<string, LanguageEntry>;

interface IProject {
  "name": string,
  "time": number,
  "top_language": string,
  "time_human_readable": stirng,
  "url": string
}
