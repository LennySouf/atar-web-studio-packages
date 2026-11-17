CREATE TABLE public.quote_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now(),
  name text NOT NULL CHECK (char_length(name) BETWEEN 1 AND 120),
  company text CHECK (company IS NULL OR char_length(company) <= 160),
  activity text NOT NULL CHECK (char_length(activity) BETWEEN 1 AND 80),
  email text NOT NULL CHECK (char_length(email) BETWEEN 3 AND 255),
  phone text CHECK (phone IS NULL OR char_length(phone) <= 40),
  formule text NOT NULL CHECK (char_length(formule) BETWEEN 1 AND 60),
  message text CHECK (message IS NULL OR char_length(message) <= 2000)
);

GRANT INSERT ON public.quote_requests TO anon;
GRANT ALL ON public.quote_requests TO service_role;

ALTER TABLE public.quote_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a quote request"
ON public.quote_requests
FOR INSERT
TO anon
WITH CHECK (true);