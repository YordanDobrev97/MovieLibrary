import { getGlobalObject } from "./misc"
import { externalAPI } from './movieDbApi'

export default class FetchAPI<T> {
  private cache: Cache<T> = {};
  private global = getGlobalObject<Window>();

  public fetchMovies(): Promise<T[]> {
    const url = externalAPI;

    const options: RequestInit = {
      method: "GET"
    };

    return new Promise((resolve, reject) => {
      if (this.cache[url]) {
        return resolve(this.cache[url]);
      }

      this.global.fetch(url, options).then(async response => {
        // The request was sent successfully
        if (response.status >= 200 && response.status < 300) {
          const data = await response.json();
          this.cache[url] = data;
          resolve(data);
        } else {
          reject("Cannot fetch the movies");
        }
      });
    });
  }
}

interface Cache<T> {
  [key: string]: T[];
}


