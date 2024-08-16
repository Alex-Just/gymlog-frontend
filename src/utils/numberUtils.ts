/**
 * Cleans and validates a string representing a floating-point number.
 * - Replaces commas with dots.
 * - Removes non-numeric characters except for the dot.
 * - Ensures there's only one dot.
 *
 * @param val - The string to validate and clean.
 * @returns The cleaned string representing a float.
 */
export const validateFloat = (val: string): string => {
  let cleanedValue = val.replace(',', '.').replace(/[^0-9.]/g, '');
  const parts = cleanedValue.split('.');
  if (parts.length > 2) {
    cleanedValue = `${parts[0]}.${parts.slice(1).join('')}`;
  }
  if (cleanedValue.endsWith('.')) {
    cleanedValue = cleanedValue.slice(0, -1);
  }
  return cleanedValue;
};
