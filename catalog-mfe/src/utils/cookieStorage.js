const CURRENCY_COOKIE_KEY = "mfe_currency";

const COOKIE_MAX_AGE = 60 * 60 * 24 * 30; // 30 days

export const getCookie = (name) => {
  const cookies = document.cookie.split("; ");

  const cookie = cookies.find((item) => item.startsWith(`${name}=`));

  if (!cookie) {
    return null;
  }

  return decodeURIComponent(cookie.substring(name.length + 1));
};

export const setCookie = (name, value, maxAge = COOKIE_MAX_AGE) => {
  document.cookie = [
    `${name}=${encodeURIComponent(value)}`,
    `max-age=${maxAge}`,
    "path=/",
    "samesite=lax",
  ].join("; ");
};

export const removeCookie = (name) => {
  document.cookie = [`${name}=`, "max-age=0", "path=/", "samesite=lax"].join(
    "; ",
  );
};

export const getCurrency = () => {
  return getCookie(CURRENCY_COOKIE_KEY) || "USD";
};

export const setCurrency = (currency) => {
  setCookie(CURRENCY_COOKIE_KEY, currency);
};

export const removeCurrency = () => {
  removeCookie(CURRENCY_COOKIE_KEY);
};
