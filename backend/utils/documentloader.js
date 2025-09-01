// The documentLoader is an async function that fetches a given URL, 
// ensures the response is valid, and returns it in a format expected by 
// Verifiable Credentials libraries (contextUrl, documentUrl, document). 
// If the fetch fails or the JSON can’t be parsed,
//  it throws a descriptive error. It’s exported so other files in your project can use it.

async function documentLoader(url) {
  // A very basic document loader that fetches a URL
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to load document from ${url}: ${response.statusText}`);
    }
    return {
      contextUrl: null, // This is not a context document itself
      documentUrl: url,
      document: await response.json(),
    };
  } catch (error) {
    throw new Error(`Document loader error for ${url}: ${error.message}`);
  }
}

module.exports = { documentLoader };