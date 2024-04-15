export const getInitials = (name: string) => {
  const names = name.split(" ");

  const initials = names.map((name) => name[0]).join("");

  return initials;
};

export const nairaCurrency = new Intl.NumberFormat("en-NG", {
  style: "currency",
  currency: "NGN",
  minimumFractionDigits: 2,
});

export const usdCurrency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
});

export const nairaCurrencyFormatter = (price: number) => {
  return nairaCurrency.format(price);
};
