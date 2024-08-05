interface IFilm {
  name: string;
  year: number;
  rate: number;
  awards: string[];
}

interface IFilmCategory {
  name: string;
  films: IFilm[];
}

interface Filter {
  filter: string;
}

interface RangeFilter extends Filter {
  filterTo: string;
}

interface ValueFilter {
  values: string[];
}

enum GridFilterTypeEnum {
  MATCH = "MATCH",
  RANGE = "RANGE",
  VALUES = "VALUES",
}

type GridFilterValue<T> = {
  type: GridFilterTypeEnum;
  filter: Extract<T, string | number>;
  filterTo?: Extract<T, string | number>;
};

type GridFilterSetValues<T> = {
  values: T[];
};

type FilmFilters = {
  nameFilter?: GridFilterValue<string>;
  yearFilter?: GridFilterValue<number>;
  rateFilter?: GridFilterValue<number>;
  awardsFilter?: GridFilterSetValues<string>;
};

class FilmList {
  private films: IFilm[];
  private filters: FilmFilters;

  constructor(films: IFilm[]) {
    this.films = films;
    this.filters = {};
  }

  addFilm(film: IFilm) {
    this.films.push(film);
  }

  removeFilm(name: string) {
    this.films = this.films.filter((film) => film.name !== name);
  }

  applySearchValue(
    filterName: keyof FilmFilters,
    filterValue: GridFilterValue<string | number> | GridFilterSetValues<string>
  ) {
    this.filters[filterName] = filterValue;
  }

  applyFiltersValue(filters: FilmFilters) {
    this.filters = filters;
  }

  search(): IFilm[] {
    return this.films.filter((film) => {
      return Object.keys(this.filters).every((filterName) => {
        const filter = this.filters[filterName as keyof FilmFilters];
        if (!filter) return true;

        switch (filterName) {
          case "nameFilter":
            return (
              (filter as GridFilterValue<string>).type ===
                GridFilterTypeEnum.MATCH &&
              film.name.includes(
                (filter as GridFilterValue<string>).filter as string
              )
            );
          case "yearFilter":
            const yearFilter = filter as GridFilterValue<number>;
            return (
              yearFilter.type === GridFilterTypeEnum.RANGE &&
              film.year >= (yearFilter.filter as number) &&
              film.year <= (yearFilter.filterTo as number)
            );
          case "rateFilter":
            const rateFilter = filter as GridFilterValue<number>;
            return (
              rateFilter.type === GridFilterTypeEnum.RANGE &&
              film.rate >= (rateFilter.filter as number) &&
              film.rate <= (rateFilter.filterTo as number)
            );
          case "awardsFilter":
            const awardsFilter = filter as GridFilterSetValues<string>;
            return awardsFilter.values.every((award) =>
              film.awards.includes(award)
            );
          default:
            return true;
        }
      });
    });
  }
}

// Example Usage

const films: IFilm[] = [
  { name: "Inception", year: 2010, rate: 8.8, awards: ["Oscar", "BAFTA"] },
  { name: "The Dark Knight", year: 2008, rate: 9.0, awards: ["Oscar"] },
  {
    name: "Interstellar",
    year: 2014,
    rate: 8.6,
    awards: ["Oscar", "Golden Globe"],
  },
];

const filmList = new FilmList(films);
filmList.applySearchValue("nameFilter", {
  type: GridFilterTypeEnum.MATCH,
  filter: "Inception",
});
console.log(filmList.search());

filmList.applyFiltersValue({
  yearFilter: { type: GridFilterTypeEnum.RANGE, filter: 2000, filterTo: 2015 },
  rateFilter: { type: GridFilterTypeEnum.RANGE, filter: 8.0, filterTo: 9.0 },
});
console.log(filmList.search());
