# Hoopscope: Data-Driven Training Platform

This repository contains the source code for the Hoopscope website, including:
- Website UI (HTML, CSS, JS)
- AI-powered basketball training features (OpenAI integration)
- Blog content and tooling
- Analytics and SEO enhancements

## Key Features
- Modern, responsive basketball analytics/training platform
- AI-driven personalized workout generator using OpenAI API
- Accessible and performant UI (uses Tailwind CSS)
- Embedded blog and dynamic content management

## Setup Notes
- All API keys must be securely managed using environment variables (never hardcoded)
- For local development, supply the OpenAI API key in your `.env` file
- Provides code+content versioning and clear documentation

## Folder Structure
- `/Code`: Source code for website, JS, and related assets
- `/BlogContent`: All blog posts and related content
- `/Changelog`: Tracks all changes, commits, and major updates
- `/Documentation`: Guides and technical documentation

## AI Integration Details
- Replaces Gemini API with OpenAI API (see `main.js` for implementation)
- Robust error handling and prompt optimization
- Accessible, user-friendly modal UI for training and blog helper features

## Contribution
- Please use pull requests and follow conventional commit messages
- Review coding guidelines in `/Documentation/CodingStandards.md`

## License
Hoopscope Technologies Inc. 2025. All Rights Reserved.
