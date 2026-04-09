import { useCurrency } from "@/contexts/CurrencyContext";

const CONTACTS = {
  INR: {
    phone: "+91 88514 67220",
    phoneHref: "tel:+918851467220",
    whatsapp: "https://wa.me/918851467220",
    label: "India",
  },
  USD: {
    phone: "+1 (657) 520-1387",
    phoneHref: "tel:+16575201387",
    whatsapp: "https://wa.me/16575201387",
    label: "USA",
  },
} as const;

export const useContactInfo = () => {
  const { currency } = useCurrency();
  return CONTACTS[currency];
};
