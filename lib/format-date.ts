import { format } from "date-fns";
import { pl } from "date-fns/locale";

export const formatPLDate = (date: Date) =>
  format(date, "dd MMMM yyyy", {
    locale: pl,
  });
