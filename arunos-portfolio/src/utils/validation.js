// Form validation utility functions

export const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export const isNotEmpty = (value) => typeof value === 'string' && value.trim().length > 0;

export const isMinLength = (value, min = 3) => typeof value === 'string' && value.trim().length >= min;

export const isMaxLength = (value, max = 500) => typeof value === 'string' && value.trim().length <= max;

export const validateContactForm = ({ name, email, message }) => {
  const errors = {};
  if (!isNotEmpty(name)) errors.name = 'Name is required';
  if (!isValidEmail(email)) errors.email = 'Please enter a valid email';
  if (!isMinLength(message, 10)) errors.message = 'Message must be at least 10 characters';
  return { isValid: Object.keys(errors).length === 0, errors };
};
