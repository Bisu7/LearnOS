-- Create "courses" table
CREATE TABLE courses (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  progress integer NOT NULL CHECK (progress >= 0 AND progress <= 100),
  icon_name text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE courses ENABLE ROW LEVEL SECURITY;

-- Add policy: allow public read access
CREATE POLICY "Allow public read access"
ON courses
FOR SELECT
TO public
USING (true);

-- Insert exactly 4 seed rows
INSERT INTO courses (title, progress, icon_name) VALUES
('Advanced React Patterns', 78, 'Layers'),
('System Design Fundamentals', 45, 'Server'),
('TypeScript Deep Dive', 91, 'Code2'),
('Database Architecture', 33, 'Database');
