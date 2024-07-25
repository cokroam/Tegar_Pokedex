import DOMPurify from "dompurify";

export const cleanInput = (input: string): string => {
  const scriptTagRegex = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;
  const eventAttributeRegex = /on\w+="[^"]*"/gi;
  const javascriptLinkRegex = /href="javascript:[^"]*"/gi;
  const imgTagRegex = /<img\b[^<]*(?:(?!<\/img>)<[^<]*)*<\/img>/gi;
  const generalTagRegex = /<\/?[^>]+(>|$)/g;

  if (
    scriptTagRegex.test(input) ||
    eventAttributeRegex.test(input) ||
    javascriptLinkRegex.test(input) ||
    imgTagRegex.test(input) ||
    generalTagRegex.test(input)
  ) {
    return "";
  }

  return input;
};

export const sanitizeInput = (input: string): string => {
  const cleanedInput = cleanInput(input);
  return DOMPurify.sanitize(cleanedInput);
};
