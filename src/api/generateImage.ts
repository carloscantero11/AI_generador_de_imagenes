// api de  Pollinations
export const generateImage = async (prompt: string): Promise<string> => {
  const encodedPrompt = encodeURIComponent(prompt);
  const imageUrl = `https://image.pollinations.ai/prompt/${encodedPrompt}`;
  return imageUrl;
};
