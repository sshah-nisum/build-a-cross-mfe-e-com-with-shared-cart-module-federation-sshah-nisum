const CURRENCY_COOKIE_KEY = "mfe_currency";

export const getCookie = (name) => {
  const cookies = document.cookie.split("; ");

  const cookie = cookies.find((item) => item.startsWith(`${name}=`));

  if (!cookie) {
    return null;
  }

  return decodeURIComponent(cookie.substring(name.length + 1));
};

export const getCurrency = () => {
  return getCookie(CURRENCY_COOKIE_KEY) || "USD";
};
