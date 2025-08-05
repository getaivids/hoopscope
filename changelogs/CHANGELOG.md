# Changelog — Hoopscope Website

## [Unreleased]
### Added
- Complete OpenAI API integration for all AI features (secure pattern, not hardcoded)
- Folder-based versioning and content organization on Google Drive
- All images set to `loading="lazy"` for performance
- Blog posts moved to `blog-content/blog-posts.json` for easier management
- Changelog, README, and docs created

### Fixed / Improved
- Responsive design tested across device sizes
- Improved contrast and accessibility: ARIA labels, `role` for alerts, keyboard navigation
- SEO metadata enhanced (keywords, OG tags)
- AI features: Error handling and prompt/response structure improved
- JavaScript moved to `main.js` and refactored for clarity, maintainability, and user feedback
- Clear alt text and error fallback on all images

### Security
- OpenAI key must use env variables/proxy — frontend will not expose keys
- API error handling expanded

### Content
- Blog posts reviewed for clarity and engagement

### Recommendations
- Add more analytics features with user data (protected)
- Expand blog topics: defensive analytics, shot selection science, training with data
- Add tests for frontend JS and API integration
