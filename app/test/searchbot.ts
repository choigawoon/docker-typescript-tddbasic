import { expect, assert } from 'chai';
import { SearchBot } from '../src';

describe('SearchBot', () => {
    it('검색을 원하는 케이스 - 한글', () => {
        var bot = new SearchBot();
        assert.strictEqual(bot.search("검색! 구글링 하는 법"), "https://www.google.co.kr/search?q=구글링+하는+법");
    });

    it('검색을 원하는 케이스 - 영문', () => {
        var bot = new SearchBot();
        assert.strictEqual(bot.search("검색! how to search google"), "https://www.google.co.kr/search?q=how+to+search+google");
    });

    it('검색을 원하는 케이스 - 띄워쓰기가 안 되어 있는 경우 - 한글', () => {
        var bot = new SearchBot();
        assert.strictEqual(bot.search("검색!구글링 하는 법"), "https://www.google.co.kr/search?q=구글링+하는+법");
    });

    it('검색을 원하는 케이스 - 띄워쓰기가 안 되어 있는 경우 - 영문', () => {
        var bot = new SearchBot();
        assert.strictEqual(bot.search("검색!how to search google"), "https://www.google.co.kr/search?q=how+to+search+google");
    });
});