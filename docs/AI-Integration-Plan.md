# AI Integration Plan: Gemini to OpenAI API

## Objectives
- Replace Gemini (Google) AI code with OpenAI API (e.g., GPT-4) for all AI-powered features
- Secure API key handling via environment variables (do not expose in frontend code)
- Implement backend endpoint to proxy AI requests securely if no serverless option exists
- Add robust error handling to all API calls
- Optimize AI prompts for improved relevance and basketball context

## Action Steps

1. **Frontend Integration**
   - Remove Gemini-specific functions
   - For all AI requests (workout plan, blog summarizer, Q&A):
     - POST to `/api/openai` (or similar endpoint)
     - Structure prompt as needed (context + user input)
   - Use async/await and try/catch for error management

2. **Backend Integration**
   - Deploy an `/api/openai` endpoint
     - Store the OpenAI API key in environment variable (e.g., `OPENAI_API_KEY`)
     - No API keys in frontend code
     - Validate and sanitize incoming prompts
     - Forward request to OpenAI chat/completions endpoint
     - Return result to frontend

3. **Prompt Optimization**
   - Make every prompt contextually relevant to basketball analytics
   - Use explicit instruction for structured output (JSON for plans, markdown/bullets for summaries)
   - Include user details for personalization if available

4. **Error Handling**
   - Clear frontend errors for rate limits, invalid input, or API issues
   - Log backend errors securely

5. **Testing**
   - Compare AI responses pre/post switch to ensure quality
   - User test for UX & edge case feedback

## Security Note
Do not commit API keys or .env files to public repositories.
Document API proxy setup for future devs.

## Changelog
- Gemini API removed, OpenAI integration in progress
- All endpoints funneled through secure API gateway
- Improved error messages for users
