// Hoopscope AI: OpenAI Integration (gemini removed)
// API key must be set using secure server-side injection (.env, never hardcoded)

async function callOpenAI(prompt, system = null) {
  try {
    const apiUrl = "https://api.openai.com/v1/chat/completions";
    // Read API key from safe scope, never in client js in production
    const apiKey = window.HOOPSCOPE_OPENAI_API_KEY || '';
    const headers = {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${apiKey}`
    };
    const messages = system ? [{role:'system',content:system},{role:'user',content:prompt}] : [{role:'user',content:prompt}];
    const resp = await fetch(apiUrl, {method:'POST',headers,body:JSON.stringify({
      model: "gpt-3.5-turbo",
      messages,
      temperature:.8
    })});
    if (!resp.ok) throw new Error('OpenAI API error: '+resp.status);
    const data = await resp.json();
    return data.choices[0].message.content.trim();
  } catch(e) {
    console.error('OpenAI error:',e);
    return "[AI Error: Unable to get response]";
  }
}

// Image lazy loading util (for performance)
document.addEventListener('DOMContentLoaded',()=>{
  document.querySelectorAll('img').forEach(img=>{
    img.setAttribute('loading','lazy');
    img.onload=()=>img.classList.add('lazyloaded');
    img.onerror=()=>img.src='https://placehold.co/600x400/111111/444444?text=Image';
  });
})

// Modal focus trap for accessibility (outline omitted for brevity)

// Additional improvements: prompt wording, error UI, focus management in modals.
