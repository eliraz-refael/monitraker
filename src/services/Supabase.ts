import { Effect, Context } from 'effect'

class Supabase extends Context.Tag('Supabase')<
  Supabase,
  { readonly next: Effect.Effect<number> }
>() {}
