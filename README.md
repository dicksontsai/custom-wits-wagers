# Custom Wits & Wagers

Build custom Wits & Wagers games.

## Directions

1. Fork this repo.
1. Copy from `template.json`.
1. Follow this format for your file name: `<name><yyyy><mm><dd>.json`. Example: `dickson20210919.json`.
1. Fill in your clues and answers.
1. Create a pull request. Your commits should automatically trigger a run of
   my validation script.

## Schema

The schema is:

```
{
  clues: Array<Clue>;
}
```

```
interface Clue {
  // Question
  question: string;
  // Answer, which must be a number.
  answer: number;
  // A link players can visit to read more about your answer.
  source: string;
}
```
