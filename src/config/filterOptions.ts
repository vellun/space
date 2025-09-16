type FilterOptions = {
  key: string;
  value: string;
};

export const astroObjectsCategories: FilterOptions[] = [
  { key: "all", value: "all" },
  { key: "stars", value: "stars" },
  { key: "moons", value: "moons" },
  { key: "galaxies", value: "galaxies" },
  { key: "planets", value: "planets" },
  { key: "dwarf planets", value: "dwarf planets" },
  { key: "comets", value: "comets" },
];
