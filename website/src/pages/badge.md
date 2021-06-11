---
title: Markdown page example
---

# Badge

## import

```jsx
import { Badge } from '@bone-ui/badge'
```

## Basic

```jsx live
<Box spaceX-10>
  <Badge content={5}></Badge>
  <Badge content={10}></Badge>
  <Badge content={100}></Badge>
  <Badge content={999}></Badge>
</Box>
```

## Max

```jsx live
<Box spaceX-10>
  <Badge content={100} max={99}></Badge>
  <Badge content={1000} max={999}></Badge>
</Box>
```

## Content

```jsx live
<Box toLeft spaceX6>
  <Badge content={99}>
    <Avatar rounded-10 name="Bill"></Avatar>
  </Badge>
  <Badge content={100} max={99}>
    <Avatar name="Job"></Avatar>
  </Badge>

  <Badge content="hot">
    <Avatar name="Mar" bgRed200 red800></Avatar>
  </Badge>
</Box>
```

## Dot

```jsx live
<Box toLeft spaceX4>
  <Badge variant="dot">
    <Avatar rounded-4 name="Job"></Avatar>
  </Badge>

  <Badge variant="dot" top-5 right-5>
    <Avatar rounded-16 name="Job"></Avatar>
  </Badge>

  <Badge variant="dot" bottom0 top={false}>
    <Avatar rounded-16 name="Job"></Avatar>
  </Badge>
</Box>
```

## Customize style

```jsx live
<Box toCenterY spaceX4>
  <Badge content={99} bgBrand500></Badge>

  <Badge content={100} bgOrange200 orange800></Badge>
  <Badge content={100} bgCyan200 border-2 borderCyan300 cyan800></Badge>

  <Badge variant="dot" bgYellow600>
    <Avatar rounded-4 name="Job"></Avatar>
  </Badge>

  <Badge variant="dot" bgBlue400>
    <Avatar rounded-4 name="Job"></Avatar>
  </Badge>
</Box>
```
