// main.js Hoopscope - Refactored for OpenAI API & Improved UX

// Usage of OpenAI API securely. API key must come from environment config (do not hardcode in JS for production!)

const OPENAI_API_URL = 'https://api.openai.com/v1/chat/completions';

// Secure API key handling - for actual deployment, use server-proxy or secret management
const getOpenAIApiKey = () => {
  // In production: DO NOT expose API keys client-side. Fetch from secure backend or use env vars.
  return window.OPENAI_API_KEY || '';
};

// Fetch with error handling
async function callOpenAIAPI(messages, temperature = 0.7, max_tokens = 512) {
  const apiKey = getOpenAIApiKey();
  if (!apiKey) throw new Error('OpenAI API key not set.');
  const res = await fetch(OPENAI_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model: 'gpt-4o',
      messages,
      temperature,
      max_tokens
    })
  });
  if (!res.ok) throw new Error(`OpenAI API error: ${res.status}`);
  const data = await res.json();
  return data.choices && data.choices[0] && data.choices[0].message.content;
}

// ---- BLOG LOGIC ----
// ... Render blog, add accessibility, lazy loading, etc. ...
// (Implementation omitted for brevity; use prior improved rendering logic)

// ---- AI Training Plan Generator ----
document.getElementById('generate-plan-btn').addEventListener('click', async () => {
  const userInput = document.getElementById('workout-prompt').value.trim();
  if (!userInput) {
    showWorkoutModal('<p role="alert" class="text-red-400">Please describe your training goals.</p>');
    return;
  }
  setBtnLoading(true);
  try {
    const prompt = `You are an expert basketball trainer and analytics coach. Give a detailed, structured basketball workout plan given this user goal: "${userInput}". Plan should have title, total duration, and phases (warmup, drills, cooldown, etc), each with exercises, descriptions, times/reps. Make it concise and clear.`;
    const resp = await callOpenAIAPI([
      {role: 'system', content:'You are a basketball AI coach.'},
      {role: 'user', content: prompt}
    ], 0.73, 700);
    showWorkoutModal(`<div class='prose prose-invert'>${typeof resp === 'string' ? resp : 'Plan unavailable.'}</div>`);
  } catch (err) {
    showWorkoutModal('<p role="alert" class="text-red-400">Could not generate plan. Please try again.</p>');
  }
  setBtnLoading(false);
});
function setBtnLoading(loading){
  document.getElementById('generate-btn-text').classList.toggle('hidden', loading);
  document.getElementById('generate-loader').classList.toggle('hidden', !loading);
}
function showWorkoutModal(html){
  const modal = document.getElementById('workout-plan-modal');
  document.getElementById('workout-plan-content').innerHTML = html;
  modal.classList.remove('hidden');
}
document.getElementById('close-workout-modal-btn').addEventListener('click',()=>{
  document.getElementById('workout-plan-modal').classList.add('hidden');
});

// ...AI Blog helper etc. would be updated similarly to use OpenAI API securely...

// ---- LAZY LOAD IMAGES ----
document.addEventListener('DOMContentLoaded',()=>{
 [...document.querySelectorAll('img:not([loading])')].forEach(img=>img.setAttribute('loading','lazy'));
});

// ---- ACCESSIBILITY ----
document.querySelectorAll('a').forEach(a=>{
  a.setAttribute('tabindex','0');
  if(!a.getAttribute('aria-label') && a.textContent){
    a.setAttribute('aria-label',a.textContent.trim());
  }
});
// Further accessibility: ensure contrast, roles, keyboard nav, alt text on all images, etc.
// This file only includes representative logic for main.js; add more as needed for blog/AI modal.