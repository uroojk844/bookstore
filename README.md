# Bookstore

A Nuxt application for discovering books through the Google Books API and viewing book details.

## Run Locally

### Requirements

- Node.js 20 or newer, or [Bun](https://bun.sh/)
- A Google Books API key

Install dependencies from the project directory:

```bash
bun install
```

Create a `.env` file in the project root and add your API key:

```env
GOOGLE_BOOKS_API_KEY=your_google_books_api_key
```

Start the development server:

```bash
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The API key is read by the Nuxt server at runtime and should not be committed to source control.

To create and preview a production build:

```bash
bun run build
bun run preview
```

## Tradeoffs

- The project does not yet include proper type checks or guards around API calls. More time would have gone toward validating Google Books responses, handling malformed or missing data, and adding clearer error states.
- The implementation favors a small Nuxt structure and a direct Google Books integration so the main browsing flow could be completed quickly.

## Unfinished or Broken

- The shortlist book feature is unfinished. Saving and managing shortlisted books is not fully implemented yet.
- API responses are not fully type-checked or guarded, so unexpected Google Books data may lead to runtime issues.

## AI Tooling

Gemini was used during development to help with implementation and problem-solving. The resulting code was integrated and adapted to this project rather than copied into the README or treated as a substitute for testing.
