export type NumericRange<
  start extends number,
  end extends number,
  range extends number = end,
  arr extends number[] = []
> = arr["length"] extends end
  ? range
  : NumericRange<start, end, range | arr["length"], [...arr, arr["length"]]>;
