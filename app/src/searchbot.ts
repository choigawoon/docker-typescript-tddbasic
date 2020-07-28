export class SearchBot {
    constructor() {

    }
    
    search(input: string): string {
        let query = input.split("검색!")[1].replace(/(^\s*)|(\s*$)/gi, "")
        .split(" ")
        .join("+");

        return "https://www.google.co.kr/search?q=" + query;
    }
  }
  