// TDD를 위해 추가해뒀던거
export { Stack } from './stack';
export { Calculator } from './calculator';
export { SearchBot } from './searchbot';

// 업데이트 된 src/index.ts
import express from 'express';
import { WebClient } from '@slack/web-api';
import { createEventAdapter } from '@slack/events-api';
import { createServer } from 'http';
import { SearchBot } from './searchbot';

// 생성한 슬랙앱에 대한 키값들
import CONFIG from '../config/bot.json';
/* 
  {
    "SIGNING_SECRET": "XXXX",
    "BOT_USER_OAUTH_ACCESS_TOKEN": "xoxb-XXXX"
  }
 */

// 슬랙에서 슬랙앱에게 접근가능한 엔드포인트를 만들기 위해 웹서버(express)를 사용
console.log("test 시작");
const app = express();
var bot = new SearchBot();

const slackEvents = createEventAdapter(CONFIG.SIGNING_SECRET);
const webClient = new WebClient(CONFIG.BOT_USER_OAUTH_ACCESS_TOKEN);

// 메시지 이벤트 구독하기
slackEvents.on('message', async (event) => {
    console.log(event);
    if (event.text == '?하이') {
        webClient.chat.postMessage({
            text: '안녕하세요!',
            channel: event.channel,
        });
    }
    else if (event.text == '최가운') {
      webClient.chat.postMessage({
        text: '절 만들어주신 분이군요!',
        channel: event.channel,
      });
    }
    else if (event.text == '최윤슬') {
      webClient.chat.postMessage({
        text: '아가',
        channel: event.channel,
      });
    }
    else if (event.text.includes('검색!')) {
      let query = bot.search(event.text);
      webClient.chat.postMessage({
        text: query,
        channel: event.channel,
        //as_user: true
      });
    }
});

// 메지지 이벤트 엔드포인트를 express 에 등록하기
app.use('/slack/events', slackEvents.requestListener());

// express 웹 서버 실행
createServer(app).listen(3000, () => {
  console.log('run slack bot');
});