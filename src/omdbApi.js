const API_KEY = "684ca942";

export async function searchMovies(title) {
  const res = await fetch(
    `https://www.omdbapi.com/?apikey=${API_KEY}&s=${encodeURIComponent(title)}`
  );
  const data = await res.json();
  return data.Search || [];
}




// Jeg brukte KI-hjelp (Claude) til å:
// finne en feil jeg ikke klarte å oppdage selv
// foreslå alternative løsninger og forklare usikkerheter
// anmbefalinger på metoder og relaterte spørsmålende 
// feilsøke og forstå error-meldinger
//Claude:https://claude.ai/share/7ca7a64d-cd77-46c2-86b6-818e3ad439eb