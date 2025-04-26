import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

export async function analyzeDream(dreamData) {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    const prompt = `
      As a professional dream analyst and sleep psychologist, analyze this nightmare in detail:
      
      Frequency: ${dreamData.frequency.join(', ')}
      Timing: ${dreamData.timing.join(', ')}
      Emotions: ${dreamData.emotions.join(', ')}${dreamData.otherEmotions ? `, ${dreamData.otherEmotions}` : ''}
      Physical Reactions: ${dreamData.physicalReactions.join(', ')}${dreamData.otherReactions ? `, ${dreamData.otherReactions}` : ''}
      Dream Clarity: ${dreamData.clarity}
      Related to Recent Events: ${dreamData.isRelatedToEvents}
      ${dreamData.relatedEvents ? `Related Events: ${dreamData.relatedEvents}` : ''}
      ${dreamData.backgroundInfo ? `Background Info: ${dreamData.backgroundInfo}` : ''}
      
      Dream Description:
      ${dreamData.nightmareDescription}
      
      Provide a detailed analysis including:
      1. A brief summary of the key themes
      2. Psychological interpretation of the nightmare
      3. Analysis of key symbols and their meanings
      4. Identification of underlying psychological factors
      5. Specific, actionable recommendations to reduce nightmare frequency
      
      Format the response as a JSON object with these keys:
      {
        "summary": "Brief overview of the analysis",
        "interpretation": "Detailed psychological interpretation",
        "psychologicalFactors": [{"name": "Factor Name", "description": "Description"}],
        "symbols": [{"name": "Symbol Name", "meaning": "Symbol Meaning"}],
        "recommendations": [{"icon": "Emoji", "title": "Recommendation Title", "description": "Detailed description"}]
      }
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    let text = response.text();
	console.log("replace before")
	text = text.replace(new RegExp(/```json/gm), "").trim()
	text = text.replace(new RegExp(/```/gm), "").trim()
	console.log("replace after")
	
	// text = text.replace(/^```json|```$/g, '').trim()
	console.log("ai text : " + text)
    
    return JSON.parse(text);
  } catch (error) {
    console.error('Error analyzing dream:', error);
    throw new Error('Failed to analyze dream. Please try again later.');
  }
}