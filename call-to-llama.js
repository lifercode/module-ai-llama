const { Ollama } = require('ollama'); 

const ollama = new Ollama({ host: 'http://host.docker.internal:11434' })

const callToLlama = async ({ content = 'Why is the sky blue?' }) => {
  try {
    const response = await ollama.chat({
      model: 'llama3',
      messages: [{ role: 'user', content }],
    })
  
    return response?.message?.content || ''
  } catch (error) {
    console.error('🚨 4️⃣', error?.message)
    
  }
}

module.exports = { callToLlama }