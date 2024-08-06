var GridFilterTypeEnum;
(function (GridFilterTypeEnum) {
    GridFilterTypeEnum["MATCH"] = "MATCH";
    GridFilterTypeEnum["RANGE"] = "RANGE";
    GridFilterTypeEnum["VALUES"] = "VALUES";
})(GridFilterTypeEnum || (GridFilterTypeEnum = {}));
var FilmList = /** @class */ (function () {
    function FilmList(films) {
        this.films = films;
        this.filters = {};
    }
    FilmList.prototype.addFilm = function (film) {
        this.films.push(film);
    };
    FilmList.prototype.removeFilm = function (name) {
        this.films = this.films.filter(function (film) { return film.name !== name; });
    };
    FilmList.prototype.applySearchValue = function (filterName, filterValue) {
        this.filters[filterName] = filterValue;
    };
    FilmList.prototype.applyFiltersValue = function (filters) {
        this.filters = filters;
    };
    FilmList.prototype.search = function () {
        var _this = this;
        return this.films.filter(function (film) {
            return Object.keys(_this.filters).every(function (filterName) {
                var filter = _this.filters[filterName];
                if (!filter)
                    return true;
                switch (filterName) {
                    case "nameFilter":
                        return (filter.type ===
                            GridFilterTypeEnum.MATCH &&
                            film.name.includes(filter.filter));
                    case "yearFilter":
                        var yearFilter = filter;
                        return (yearFilter.type === GridFilterTypeEnum.RANGE &&
                            film.year >= yearFilter.filter &&
                            film.year <= yearFilter.filterTo);
                    case "rateFilter":
                        var rateFilter = filter;
                        return (rateFilter.type === GridFilterTypeEnum.RANGE &&
                            film.rate >= rateFilter.filter &&
                            film.rate <= rateFilter.filterTo);
                    case "awardsFilter":
                        var awardsFilter = filter;
                        return awardsFilter.values.every(function (award) {
                            return film.awards.includes(award);
                        });
                    default:
                        return true;
                }
            });
        });
    };
    return FilmList;
}());
//
var films = [
    { name: "Inception", year: 2010, rate: 8.8, awards: ["Oscar", "BAFTA"] },
    { name: "The Dark Knight", year: 2008, rate: 9.0, awards: ["Oscar"] },
    {
        name: "Interstellar",
        year: 2014,
        rate: 8.6,
        awards: ["Oscar", "Golden Globe"],
    },
];
var filmList = new FilmList(films);
filmList.applySearchValue("nameFilter", {
    type: GridFilterTypeEnum.MATCH,
    filter: "Inception",
});
console.log(filmList.search());
filmList.applyFiltersValue({
    yearFilter: { type: GridFilterTypeEnum.RANGE, filter: 2011, filterTo: 2015 },
    rateFilter: { type: GridFilterTypeEnum.RANGE, filter: 8.0, filterTo: 9.0 },
});
console.log(filmList.search());
