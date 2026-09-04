# HypeDuck Illustrations

글·대본·개념을 **흰 배경 손그림 오리 일러스트**로 만드는 프롬프트 팩.
블로그·유튜브·스레드 본문 삽화, PPT용 낱장 이미지에 쓴다.

![example](docs/cover-pick.png)

- 순백 배경 · 검정 세선 손그림 · 여백 35%+
- **오리만 컬러** (노랑 `#FFD400` 몸 + 주황 `#FF8A00` 부리, 레퍼런스 얼굴 고정)
- 한국어 손글씨 주석 (빨강=경고/결과, 주황=흐름, 파랑=상태)
- 장당 메시지 1개 · 16:9

**설치도 API 키도 필요 없다.** 프롬프트 정본이 [PROMPT.md](skills/hypeduck-illustrations/PROMPT.md)에 있고,
이미지 생성이 되는 AI면 뭐든(ChatGPT·Claude·Gemini·Midjourney 등) 붙여넣어 쓰면 된다.

---

## ChatGPT에서 쓰기 (가장 쉬움)

1. [PROMPT.md](skills/hypeduck-illustrations/PROMPT.md)의 **CHARACTER 블록**을 복사해서 붙여넣는다.
2. 그리려는 장면을 5칸으로 적는다 — Theme / Structure type / Core idea / Composition / Korean handwritten labels.
3. **STYLE 블록**을 마지막에 붙인다.

CHARACTER 블록이 오리 생김새를 눈 크기·부리 폭·머리깃 개수까지 문장으로 못박기 때문에
**이미지를 첨부하지 않아도 같은 오리가 나온다.** 더 확실하게 고정하고 싶으면
[마스코트 이미지](skills/hypeduck-illustrations/assets/hypeduck-logo.png)를 같이 첨부하면 된다.

매번 붙여넣기 귀찮으면 [chatgpt-instructions.md](chatgpt-instructions.md)를 ChatGPT **프로젝트 지침**이나
**Custom GPT의 Instructions**에 통째로 넣어두면, 그다음부터는 "이 글로 일러스트 3장 뽑아줘"만 하면 된다.
마스코트 PNG까지 그 프로젝트에 올려두면 얼굴이 한층 더 안정적으로 붙는다.

## Claude Code에서 쓰기 (스킬/플러그인)

플러그인으로 설치하면 "이 글에 오리 일러스트 넣어줘" 한 마디에 Claude가
글을 읽고 → 장면을 정하고 → 프롬프트를 조립하고 → 결과를 육안 QA까지 한다.

```
/plugin marketplace add hedgehogcandy/hypeduck-illustrations
/plugin install hypeduck-illustrations@hypeduck
```

터미널에서:

```bash
claude plugin marketplace add hedgehogcandy/hypeduck-illustrations
claude plugin install hypeduck-illustrations@hypeduck
```

스킬 파일만 수동 복사:

```bash
git clone https://github.com/hedgehogcandy/hypeduck-illustrations.git
cp -R hypeduck-illustrations/skills/hypeduck-illustrations ~/.claude/skills/
```

## 다른 도구에서 쓰기

Gemini·Midjourney·Firefly 등도 같다 — CHARACTER + 장면 5칸 + STYLE을 그대로 붙여넣는다.
이미지 첨부를 지원하는 도구라면 마스코트 PNG도 같이 주면 된다.

---

## 잘 나오게 하는 요령

| 증상 | 해법 |
|---|---|
| 한글 주석에 오탈자 | 주석을 2~4어절로 짧게. 한 장에 4개 이하 |
| 그림이 설명서처럼 빽빽함 | 한 장에 메시지 하나만. 장을 쪼갠다 |
| 오리가 그냥 서 있기만 함 | 오리가 **핵심 동작의 주체**가 되게 Composition을 다시 쓴다 |
| 영어·중국어가 섞여 새겨짐 | labels에 한국어만 쓴다 |
| 얼굴이 조금씩 다름 | CHARACTER 블록을 통째로 넣었는지 확인. 그래도 흔들리면 마스코트 PNG를 첨부한다 |

## 라이선스

MIT (코드·프롬프트). 오리 마스코트 이미지는 HypeDuck 브랜드 마크 — [LICENSE](LICENSE) 참고.
