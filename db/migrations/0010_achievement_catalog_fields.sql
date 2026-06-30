-- Add canonical award catalog metadata used by dashboard achievements.
-- Non-destructive: existing achievements keep their rows and receive defaults.

BEGIN;

ALTER TABLE public.achievements
  ADD COLUMN IF NOT EXISTS tier text,
  ADD COLUMN IF NOT EXISTS sort_order integer,
  ADD COLUMN IF NOT EXISTS image_path text,
  ADD COLUMN IF NOT EXISTS locked_description text;

ALTER TABLE public.achievements
  DROP CONSTRAINT IF EXISTS achievements_tier_check;

ALTER TABLE public.achievements
  ADD CONSTRAINT achievements_tier_check
  CHECK (tier IS NULL OR tier IN ('bronze', 'silver', 'gold', 'legacy'));

UPDATE public.achievements
SET tier = COALESCE(tier, 'legacy'),
    sort_order = COALESCE(sort_order, 999)
WHERE tier IS NULL
   OR sort_order IS NULL;

CREATE INDEX IF NOT EXISTS idx_achievements_tier_sort
  ON public.achievements(tier, sort_order);

COMMIT;
