/**
 * Get a random Lady Cyd image path
 * Images are numbered 1-5 in /public/images/lady-cyd/
 * Returns path relative to public directory
 */
export function getRandomLadyCydImage(): string {
  const imageCount = 5;
  const randomNum = Math.floor(Math.random() * imageCount) + 1;
  return `/images/lady-cyd/image-${randomNum}.jpg`;
}

/**
 * Get all Lady Cyd image paths
 * Returns array of all available image paths
 */
export function getAllLadyCydImages(): string[] {
  const imageCount = 5;
  return Array.from({ length: imageCount }, (_, i) => `/images/lady-cyd/image-${i + 1}.jpg`);
}
