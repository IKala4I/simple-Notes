CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE notes (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(20) NOT NULL,
    created TIMESTAMP DEFAULT current_timestamp,
    category VARCHAR NOT NULL,
    content TEXT DEFAULT '',
    dates VARCHAR DEFAULT '',
    archived BOOLEAN DEFAULT false
);

INSERT INTO notes (name, category, content, archived)
VALUES
    ('Test new name', 'Idea', 'I gotta do sth until 5/8/2023', false),
    ('Dentist', 'Task', 'I''m gonna have a dentist appointment on the 22/4/2021, I moved it from 24/4/2021', false),
    ('New Feature', 'Idea', 'Implement new feature till 10/6/2021', true),
    ('William Gaddis', 'Quote', 'Power doesn''t co...', false),
    ('Create notes', 'Task', 'Finish task until 5/8/2023', false),
    ('Bruce Lee', 'Quote', 'It is the life of perfection which seems to be incomplete, and of fullness which seems to be empty.', true),
    ('Test update', 'Task', 'Try to update note at 5/8/2023', true),
    ('Notes on GitHub', 'Task', 'Upload notes on GitHub by 7/08/2023', false);
