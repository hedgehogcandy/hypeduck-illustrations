# 프롬프트 정본

이미지 생성기에 넣는 프롬프트다. 아래 세 블록을 순서대로 이어붙이면 한 장이 나온다:
`DNA` → 장면 슬롯(Theme / Structure type / Core idea / Composition / Korean handwritten labels) → `RULES`.

마스코트 얼굴을 일정하게 유지하려면 `assets/hypeduck-logo.png`(또는 네 캐릭터 정면 얼굴)를 **레퍼런스 이미지로 함께 첨부**한다.
프롬프트를 고칠 일이 있으면 이 파일만 고친다.

## DNA

```text
Generate one standalone 16:9 horizontal Korean article illustration.

Visual DNA:
Pure white background. Minimalist black hand-drawn line art. Slightly wobbly pen lines. Lots of empty white space. Sparse red/orange/blue handwritten KOREAN annotations (Hangul, 2-4 words each, at most 4 labels total). Clean absurd product-sketch feeling. No gradients, no shadows, no paper texture, no complex background, no commercial vector style, no PPT infographic look, no children's illustration, no realistic UI.

Recurring IP character required:
A small chubby duck mascot whose FACE must match the attached reference logo image: bright yellow (#FFD400) round head and body with a thin black hand-drawn outline, flat orange (#FF8A00) beak, two large black oval eyes with small white highlights, tiny pink blush cheeks, one small feather tuft on top of the head, tiny thin black legs. Flat solid yellow fill, no gradients or gloss. The duck is the ONLY element with large colored fill — everything else in the scene stays black thin-line art on white. The duck must perform the core conceptual action, not decorate the scene. Keep the duck deadpan, serious, slightly bizarre — a hardworking absurd worker, not a cute sticker.
```

## RULES

```text
Color use:
Black for main line art. Yellow/orange only for the duck character itself. Orange for main flow/path/arrows. Red only for key warnings/problems/results. Blue only for secondary notes or system state.

Constraints:
One image explains only one core structure. Keep the main subject around 40%-60% of the canvas. Preserve at least 35% blank white space. All handwritten labels must be in KOREAN (Hangul), spelled exactly as given — do not invent extra text, do not write any Chinese or English words. Do not write a title in the top-left corner. Do not make it a formal diagram, course slide, or dense explainer. It should be clear but not instructional, interesting but not childish, strange but clean.
```

## 조립 예시

```text
<DNA 블록 전문>

Theme:
Warm up an aged account slowly

Structure type:
Character state

Core idea:
Don't change everything at once — warm it up over two weeks

Composition:
The duck sits on a small round stool next to a big glass jar labeled in Korean, lifting the jar's lid with one wing and raising one finger with the other, deadpan. To the right, a row of 14 small hand-drawn calendar boxes runs across the canvas — only the first two are checked.

Korean handwritten labels (exact spelling, nothing else):
red handwritten "한 번에 바꾸지 않기" left of the jar / blue handwritten "묵힌 계정" on the jar label / orange handwritten "14일 워밍업" under the calendar row

<RULES 블록 전문>
```

마지막에 레퍼런스 이미지를 첨부하고 한 줄 덧붙인다:

```text
The attached image is the duck mascot logo — match the duck face (eyes, beak, blush, colors) to it.
```
