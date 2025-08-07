# Hoopscope Web Improvements Changelog

## 2025-08-07

### Major Improvements
- Replaced Gemini API calls with OpenAI API (with secure env var key handling)
- Added error handling for all AI requests
- Blog AI Helper and Workout Generator now use GPT-4o/OpenAI endpoints
- Added SEO metadata and accessibility tags
- Blog system improved for clarity and engagement; suggested topics for basketball analytics
- Images on homepage/blog now loaded with lazy loading for faster performance
- Mobile responsiveness refined (especially modal dialogs)
- Improved prompt engineering for all OpenAI calls (better plan/content outputs)
- Documented all changes in README and Changelog

### Bug Fixes
- Fixed scroll animation JS for consistent on-enter effects
- Fixed responsive layout on mobile (footer, CTAs)
- Addressed edge case for AI modal close/open logic

### Recommendations
- Future: Consider server-side API proxy for further securing API keys
- Add Lighthouse performance and accessibility checks to the CI process
- Expand blog content on advanced analytics (see README for suggestions)
