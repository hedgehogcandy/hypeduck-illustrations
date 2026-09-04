# 프롬프트 정본

이미지 생성기에 넣는 프롬프트다. 세 블록을 순서대로 이어붙이면 한 장이 나온다:
**CHARACTER** → 장면 슬롯(Theme / Structure type / Core idea / Composition / Korean handwritten labels) → **STYLE**.

CHARACTER 블록이 오리 생김새를 문장으로 못박기 때문에 **레퍼런스 이미지 없이도 같은 오리가 나온다**.
`assets/hypeduck-logo.png`를 함께 첨부할 수 있으면 얼굴이 더 확실하게 고정되지만, 필수는 아니다.

프롬프트를 고칠 일이 있으면 이 파일만 고친다.

## CHARACTER

```text
THE CHARACTER — draw exactly this duck every time, no variations:

Silhouette: one continuous egg shape standing upright, no visible neck — the head flows straight into the body. The head half is a smooth circle, the body half widens slightly toward the bottom. Total height is roughly 1.3 times the width, and the head half takes up a little more than half of that height — big head, smaller body. Chubby, soft, no muscle or feather detail anywhere.

Head tuft: exactly two SHORT pointed feather flicks on the very top of the head, leaning to one side. Keep them small — together no taller than one fifth of the head. Never a tall flame, never a round curl, never three or more.

Eyes: BIG. Two solid black ovals, taller than wide, each about one fifth of the head's width and one quarter of its height — deliberately oversized, the most noticeable feature of the face. Placed on the upper-middle of the head, spaced about one and a half eye-widths apart, each with a single tiny white dot highlight in the upper left. NO eyelashes, NO eyebrows, NO eye outline ring — just the solid black oval and its one dot. When the duck is happy or content, replace each eye with a simple downward-curving black arc of the same width instead.

Beak: a flat wide duck bill in solid orange #FF8A00, sitting centered right between and slightly below the eyes, wider than tall, with rounded corners and a thin darker orange line separating the upper and lower bill. The bill is about one third of the head's width. Never a bird's pointed beak, never yellow, never small. Draw NO mouth line, NO smile curve, NO tongue — the bill alone is the whole mouth.

Cheeks: two soft pink oval blush patches, one on each side, just outside the eyes and level with the top of the beak. Flat pink, no shading.

Wings: two short stubby rounded wings drawn as simple curves coming off the sides of the body. No fingers, no feather separation.

Feet: two thin black legs and small solid orange webbed feet, drawn small relative to the body.

Body color: flat solid yellow #FFD400 fill across the whole head and body, absolutely uniform — no gradient, no gloss, no shading, no highlight, no darker yellow anywhere.

Outline: a single thin black hand-drawn pen line around the whole duck, even width, very slightly wobbly like it was drawn by hand.

Expression: deadpan and calm by default — serious, a little absurd, never a big open smile, never anime eyes, never a sticker-mascot grin.
```

## STYLE

```text
Everything else in the image is minimalist black hand-drawn line art on a pure white background — thin slightly wobbly pen lines, no fill, no gradients, no shadows, no paper texture, no background scenery. The duck is the ONLY element with color. Lots of empty white space, at least 35% of the canvas. Clean, absurd, product-sketch feeling. Not a PPT infographic, not a children's book illustration, not a commercial vector illustration.
```

## 조립 예시

```text
Generate one standalone 16:9 horizontal Korean article illustration.

<CHARACTER 블록 전문>

SCENE:
The duck stands holding a big magnifying glass up to one small phone-shaped card it just picked up with its other wing. Five other identical cards lie scattered on the ground, ignored.

Korean handwritten labels (exact spelling, nothing else):
orange handwritten "이건 내 거" above the picked card / red handwritten "조회수만 높음" near the scattered cards

STYLE:
<STYLE 블록 전문>

All handwritten labels must be in KOREAN (Hangul), spelled exactly as given. No Chinese, no English. Do not write a title in the corner.
```

레퍼런스 이미지를 첨부하는 경우 마지막에 한 줄 덧붙인다:

```text
The attached image is the duck mascot logo — match the duck face (eyes, beak, blush, yellow body color) to it.
```
