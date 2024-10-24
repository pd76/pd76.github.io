+++
title = "My First Post"
date = 2024-10-21
description = "This is my first blog post using Zola"
[taxonomies]
tags = ["web", "rust", "static-site", "zola", "tutorial"]
[extra]
importance = 10
+++

This is the content of my first blog post.

Here's a code block:

```rust
print("Hello, Zola!")
```

Here's some SaSS `code` just for fun:
```haskell
liftError :: (MonadIO m, MonadError e' m) => (e -> e') -> ExceptT e IO a -> m a
liftError f a = do
  b <- liftIO $ runExceptT a
  let c = case b of -- this case is Bifunctor `first` method used above
        Left e -> Left (f e)
        Right x -> Right x
  liftEither c
```
