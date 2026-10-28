# Task: JSON cleanup
Status: Draft
Priority: High

## Context
- Related file: `assets\data\Collectibles_wiki_gg.json`
- New content should not include repetitions
- New content should be ~100 words max 
- Use `assets\data\Collectibles_wiki_gg.json` -> `"itemid": "c33"` as an example template

## Steps
- [ ] Rename `description_text` field into `description_base`
- [ ] Rename `description` field into `description_wiki`
- [ ] Create new `description` field
- [ ] Compare `description_base` and `description_wiki` fields text and create a new content as a brief summary of both
- [ ] Write generalized text into `description` field 

## Verification Commands
- Run `npm test src/auth/login.test.ts`
- Run `npm run lint`


#  LOG  VirtualizedList: You have a large list that is slow to update - make sure your renderItem function renders components that follow React performance best practices like PureComponent, shouldComponentUpdate, etc. {"contentLength": 11767.23828125, "dt": 5014, "prevDt": 507}