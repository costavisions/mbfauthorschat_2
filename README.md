# Miami Book Fair AI Chat Assistant

## Table of Contents
1. [Introduction](#introduction)
2. [Features](#features)
3. [Prerequisites](#prerequisites)
4. [Getting Started](#getting-started)
5. [Environment Setup](#environment-setup)
6. [Project Structure](#project-structure)
7. [Development](#development)
8. [Deployment](#deployment)

## Introduction

The Miami Book Fair AI Chat Assistant is an intelligent chatbot designed to help users discover information about authors, events, and programming at the Miami Book Fair. It provides an intuitive interface for accessing event details, author information, and general fair-related queries.

## Features

- Interactive AI chat interface
- Real-time responses to queries about Miami Book Fair
- Document ingestion for up-to-date fair information
- Markdown support for formatted responses
- Supabase integration for vector storage
- OpenAI integration for natural language processing
- Modern UI with Tailwind CSS
- Full TypeScript support

## Prerequisites

Before you begin, ensure you have:
- Node.js (v18.x or later)
- npm (comes with Node.js)
- Git

You'll also need:
- OpenAI API key
- Supabase account and credentials

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/costavisions/mbf_chat_front.git
cd mbf_chat_front
```

2. Install dependencies:
```bash
npm install
```

## Environment Setup

1. Create a `.env` file in the root directory:
```env
OPENAI_API_KEY=your_openai_api_key
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Project Structure

```
mbf_chat_front/
├── app/
│   ├── api/
│   │   └── chat/
│   │   └── retrieval/
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ChatMessage.tsx
│   ├── ChatWindow.tsx
│   └── UploadDocumentsForm.tsx
├── lib/
│   └── utils.ts
├── public/
│   └── images/
├── .env
└── README.md
```

## Development

1. Start the development server:
```bash
npm run dev
```

2. Open [http://localhost:3000](http://localhost:3000) in your browser

3. To add new content to the chat assistant:
   - Use the upload form to ingest new documents
   - Content will be automatically vectorized and stored in Supabase

## Deployment

1. Build the application:
```bash
npm run build
```

2. Deploy to your hosting platform:
   - Vercel (recommended)
   - Netlify
   - Other platforms supporting Next.js

3. Configure environment variables on your hosting platform

## Support

For support, please open an issue in the GitHub repository or contact the development team.

---

Built with ❤️ for Miami Book Fair
