/** Format a price as USD. Appends "/mo" for rentals. */
export function formatPrice(
  price: number,
  status?: "For Sale" | "For Rent",
): string {
  const formatted = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(price);

  return status === "For Rent" ? `${formatted}/mo` : formatted;
}

/** Format a number with thousands separators, e.g. 1,250. */
export function formatNumber(value: number): string {
  return new Intl.NumberFormat("en-US").format(value);
}

/** Format an area value in square feet. */
export function formatArea(area: number): string {
  return `${formatNumber(area)} sqft`;
}

/** Join class names, ignoring falsy values. */
export function cn(
  ...classes: Array<string | false | null | undefined>
): string {
  return classes.filter(Boolean).join(" ");
}
