export const handleApiError = (error: unknown): Error => {
  if (error instanceof Error) {
    // Add any additional error processing logic here
    return error;
  }
  return new Error('An unknown error occurred');
};
