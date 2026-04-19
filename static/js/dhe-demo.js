// ============================================================
// DHE Forecasting Demo — Interactive Portfolio Demo
// Simulates a production ML app for movie revenue forecasting
// ============================================================

// ============================================================
// SECTION 1: MOVIE DATA  (30 Sony Pictures titles)
// Revenue figures are illustrative/fictional for demo purposes
// ============================================================
const MOVIES = [

  // ── BLOCKBUSTERS ($200M+ DBO) ─────────────────────────────

  {
    id: 'tt10872600',
    title: 'Spider-Man: No Way Home',
    poster: 'https://image.tmdb.org/t/p/w185/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg',
    releaseDates: { theatrical:'2021-12-17', premium:'2022-01-11', est:'2022-02-15', vod:'2022-03-01', netflix:'2022-10-14' },
    imdbRating: 8.3,
    boxOffice: 804793477,
    predictions: {
      premium: { total:62400000, earned:59100000 },
      est:     { total:47800000, earned:45200000 },
      vod:     { total:31200000, earned:29600000 },
    },
  },

  {
    id: 'tt6320628',
    title: 'Spider-Man: Far From Home',
    poster: 'https://image.tmdb.org/t/p/w185/4q2NNj4S5dG2RLF9CpXsej7yXl.jpg',
    releaseDates: { theatrical:'2019-07-02', premium:'2019-09-17', est:'2019-10-01', vod:'2019-10-15', netflix:'2020-10-01' },
    imdbRating: 7.4,
    boxOffice: 390532085,
    predictions: {
      premium: { total:33500000, earned:32900000 },
      est:     { total:25800000, earned:25300000 },
      vod:     { total:16400000, earned:16100000 },
    },
  },

  {
    id: 'tt4633694',
    title: 'Spider-Man: Into the Spider-Verse',
    poster: 'https://image.tmdb.org/t/p/w185/iiZZdoQBEYBv6id8su7ImL0oCbD.jpg',
    releaseDates: { theatrical:'2018-12-14', premium:'2019-01-08', est:'2019-02-05', vod:'2019-02-19', netflix:'2019-10-01' },
    imdbRating: 8.4,
    boxOffice: 190241310,
    predictions: {
      premium: { total:17200000, earned:16900000 },
      est:     { total:13300000, earned:13100000 },
      vod:     { total: 8600000, earned: 8400000 },
    },
  },

  {
    id: 'tt2283362',
    title: 'Jumanji: Welcome to the Jungle',
    poster: 'https://image.tmdb.org/t/p/w185/bXrZ5iHBEjH7WMidbUDQ0U2xbmr.jpg',
    releaseDates: { theatrical:'2017-12-20', premium:'2018-02-27', est:'2018-03-27', vod:'2018-04-10', netflix:'2018-10-01' },
    imdbRating: 7.0,
    boxOffice: 404515480,
    predictions: {
      premium: { total:34100000, earned:33700000 },
      est:     { total:26300000, earned:26000000 },
      vod:     { total:16800000, earned:16600000 },
    },
  },

  {
    id: 'tt7975244',
    title: 'Jumanji: The Next Level',
    poster: 'https://image.tmdb.org/t/p/w185/jyw8VKYEiM1UDzPB7NsisUgBeJ8.jpg',
    releaseDates: { theatrical:'2019-12-13', premium:'2020-01-14', est:'2020-02-11', vod:'2020-03-03', netflix:'2020-09-15' },
    imdbRating: 6.8,
    boxOffice: 316890023,
    predictions: {
      premium: { total:27300000, earned:26900000 },
      est:     { total:21100000, earned:20800000 },
      vod:     { total:13500000, earned:13300000 },
    },
  },

  {
    id: 'tt1365519',
    title: 'Bad Boys for Life',
    poster: 'https://image.tmdb.org/t/p/w185/y95lQLnuNKdPAzw9F9Ab8kJ80c3.jpg',
    releaseDates: { theatrical:'2020-01-17', premium:'2020-03-31', est:'2020-04-28', vod:'2020-05-12', netflix:'2021-01-29' },
    imdbRating: 7.0,
    boxOffice: 206305244,
    predictions: {
      premium: { total:17600000, earned:17200000 },
      est:     { total:13600000, earned:13300000 },
      vod:     { total: 8700000, earned: 8500000 },
    },
  },

  {
    id: 'tt10671080',
    title: 'Bad Boys: Ride or Die',
    poster: 'https://image.tmdb.org/t/p/w185/oGythE98MYleE6mZlGs5oBGkux1.jpg',
    releaseDates: { theatrical:'2024-06-07', premium:'2024-07-02', est:'2024-07-30', vod:'2024-08-13', netflix:null },
    imdbRating: 6.0,
    boxOffice: 202118502,
    predictions: {
      premium: { total:17400000, earned:10800000 },
      est:     { total:13400000, earned: 7600000 },
      vod:     { total: 8600000, earned: 4300000 },
    },
  },

  {
    id: 'tt7097896',
    title: 'Venom: Let There Be Carnage',
    poster: 'https://image.tmdb.org/t/p/w185/rjkmN1dniUHVYAtwuV3Tji7FsDO.jpg',
    releaseDates: { theatrical:'2021-10-01', premium:'2021-10-15', est:'2021-11-23', vod:'2021-12-14', netflix:'2022-03-01' },
    imdbRating: 6.4,
    boxOffice: 213550366,
    predictions: {
      premium: { total:18800000, earned:17200000 },
      est:     { total:14500000, earned:13300000 },
      vod:     { total: 9400000, earned: 8600000 },
    },
  },

  {
    id: 'tt5834426',
    title: 'Venom',
    poster: 'https://image.tmdb.org/t/p/w185/2uNW4WbgBXL25BAbXGLnLqX71Sw.jpg',
    releaseDates: { theatrical:'2018-10-05', premium:'2018-11-13', est:'2018-12-11', vod:'2018-12-25', netflix:'2019-04-14' },
    imdbRating: 6.6,
    boxOffice: 213515506,
    predictions: {
      premium: { total:18600000, earned:18300000 },
      est:     { total:14300000, earned:14100000 },
      vod:     { total: 9200000, earned: 9000000 },
    },
  },

  // ── MID-TIER ($50–200M DBO) ───────────────────────────────

  {
    id: 'tt21235248',
    title: 'Ghostbusters: Frozen Empire',
    poster: 'https://image.tmdb.org/t/p/w185/n1hqbSCtyBAxaXEl1Dj3ipXJAJG.jpg',
    releaseDates: { theatrical:'2024-03-22', premium:'2024-04-16', est:'2024-05-14', vod:'2024-05-28', netflix:null },
    imdbRating: 6.2,
    boxOffice: 200654986,
    predictions: {
      premium: { total:19300000, earned:13100000 },
      est:     { total:14900000, earned: 9500000 },
      vod:     { total: 9500000, earned: 5800000 },
    },
  },

  {
    id: 'tt4513678',
    title: 'Ghostbusters: Afterlife',
    poster: 'https://image.tmdb.org/t/p/w185/sg4xJaufDiQl7caFEskBtQXfD4x.jpg',
    releaseDates: { theatrical:'2021-11-19', premium:'2021-12-07', est:'2022-01-04', vod:'2022-01-18', netflix:'2022-06-27' },
    imdbRating: 7.5,
    boxOffice: 129359225,
    predictions: {
      premium: { total:12900000, earned:11700000 },
      est:     { total: 9900000, earned: 9000000 },
      vod:     { total: 6300000, earned: 5800000 },
    },
  },

  {
    id: 'tt1464335',
    title: 'Uncharted',
    poster: 'https://image.tmdb.org/t/p/w185/sqLowacltbZLoCa4KYye64RvvdQ.jpg',
    releaseDates: { theatrical:'2022-02-18', premium:'2022-03-22', est:'2022-04-26', vod:'2022-05-10', netflix:'2022-09-27' },
    imdbRating: 6.4,
    boxOffice: 148658957,
    predictions: {
      premium: { total:13700000, earned:12400000 },
      est:     { total:10600000, earned: 9600000 },
      vod:     { total: 6800000, earned: 6200000 },
    },
  },

  {
    id: 'tt12593682',
    title: 'Bullet Train',
    poster: 'https://image.tmdb.org/t/p/w185/j8szC8OgrejDQjjMKSVXyaAjw3V.jpg',
    releaseDates: { theatrical:'2022-08-05', premium:'2022-09-06', est:'2022-10-04', vod:'2022-10-18', netflix:'2023-03-21' },
    imdbRating: 7.3,
    boxOffice: 102972362,
    predictions: {
      premium: { total:10800000, earned: 9800000 },
      est:     { total: 8400000, earned: 7600000 },
      vod:     { total: 5300000, earned: 4900000 },
    },
  },

  {
    id: 'tt26047818',
    title: 'Anyone But You',
    poster: 'https://image.tmdb.org/t/p/w185/5qHoazZiaLe7oFBok7XlUhg96f2.jpg',
    releaseDates: { theatrical:'2023-12-22', premium:'2024-01-30', est:'2024-02-27', vod:'2024-03-12', netflix:null },
    imdbRating: 6.5,
    boxOffice: 220102977,
    predictions: {
      premium: { total:20700000, earned:16400000 },
      est:     { total:15900000, earned:11200000 },
      vod:     { total:10200000, earned: 6500000 },
    },
  },

  {
    id: 'tt12844910',
    title: 'Gran Turismo',
    poster: 'https://image.tmdb.org/t/p/w185/gDzOcq0pfeCeqMBwKIJlSmQpjkZ.jpg',
    releaseDates: { theatrical:'2023-08-25', premium:'2023-09-19', est:'2023-10-17', vod:'2023-10-31', netflix:null },
    imdbRating: 7.2,
    boxOffice: 118050295,
    predictions: {
      premium: { total:12200000, earned:10400000 },
      est:     { total: 9400000, earned: 8000000 },
      vod:     { total: 6000000, earned: 5100000 },
    },
  },

  {
    id: 'tt9411972',
    title: 'Where the Crawdads Sing',
    poster: 'https://image.tmdb.org/t/p/w185/dU4HfnTEJDf9KvxGS9hgO7BVeju.jpg',
    releaseDates: { theatrical:'2022-07-15', premium:'2022-09-06', est:'2022-10-04', vod:'2022-10-18', netflix:null },
    imdbRating: 7.0,
    boxOffice: 90048862,
    predictions: {
      premium: { total: 9200000, earned: 8400000 },
      est:     { total: 7100000, earned: 6500000 },
      vod:     { total: 4500000, earned: 4100000 },
    },
  },

  {
    id: 'tt10111480',
    title: 'The Equalizer 3',
    poster: 'https://image.tmdb.org/t/p/w185/kVG8zFFYrpyYLoHChuEeOGAd6Ru.jpg',
    releaseDates: { theatrical:'2023-09-01', premium:'2023-09-26', est:'2023-10-24', vod:'2023-11-07', netflix:null },
    imdbRating: 7.0,
    boxOffice: 90963048,
    predictions: {
      premium: { total: 9100000, earned: 7800000 },
      est:     { total: 7000000, earned: 5900000 },
      vod:     { total: 4400000, earned: 3700000 },
    },
  },

  {
    id: 'tt8093700',
    title: 'The Woman King',
    poster: 'https://image.tmdb.org/t/p/w185/2r9VG6FyYzeqdbMNMMyfNingn6v.jpg',
    releaseDates: { theatrical:'2022-09-16', premium:'2022-11-01', est:'2022-11-29', vod:'2022-12-13', netflix:null },
    imdbRating: 6.9,
    boxOffice: 66025565,
    predictions: {
      premium: { total: 7100000, earned: 6400000 },
      est:     { total: 5500000, earned: 4900000 },
      vod:     { total: 3500000, earned: 3200000 },
    },
  },

  {
    id: 'tt7405458',
    title: 'A Man Called Otto',
    poster: 'https://image.tmdb.org/t/p/w185/jFC4LS5qTAT3PinzdEzINfu1CV9.jpg',
    releaseDates: { theatrical:'2022-12-30', premium:'2023-02-21', est:'2023-03-21', vod:'2023-04-04', netflix:null },
    imdbRating: 7.8,
    boxOffice: 67802468,
    predictions: {
      premium: { total: 7200000, earned: 6500000 },
      est:     { total: 5600000, earned: 5000000 },
      vod:     { total: 3500000, earned: 3200000 },
    },
  },

  {
    id: 'tt7713068',
    title: 'The Equalizer 2',
    poster: 'https://image.tmdb.org/t/p/w185/9By4zeUBVNY78vRgE7a2PVNCdxI.jpg',
    releaseDates: { theatrical:'2018-07-20', premium:'2018-09-04', est:'2018-10-02', vod:'2018-10-16', netflix:'2021-02-15' },
    imdbRating: 7.0,
    boxOffice: 102097461,
    predictions: {
      premium: { total: 9400000, earned: 9200000 },
      est:     { total: 7300000, earned: 7100000 },
      vod:     { total: 4600000, earned: 4500000 },
    },
  },

  {
    id: 'tt0455944',
    title: 'The Equalizer',
    poster: 'https://image.tmdb.org/t/p/w185/9u4yW7yPA0BQ2pv9XwiNzItwvp8.jpg',
    releaseDates: { theatrical:'2014-09-26', premium:'2014-12-09', est:'2015-01-06', vod:'2015-01-20', netflix:'2018-10-01' },
    imdbRating: 7.2,
    boxOffice: 101530738,
    predictions: {
      premium: { total: 9200000, earned: 9000000 },
      est:     { total: 7100000, earned: 7000000 },
      vod:     { total: 4500000, earned: 4400000 },
    },
  },

  {
    id: 'tt14114802',
    title: 'Devotion',
    poster: 'https://image.tmdb.org/t/p/w185/muEcm6qjbvP6HjH0uxq773oycyy.jpg',
    releaseDates: { theatrical:'2022-11-23', premium:'2022-12-23', est:'2023-01-17', vod:'2023-01-31', netflix:null },
    imdbRating: 7.2,
    boxOffice: 20327993,
    predictions: {
      premium: { total: 2600000, earned: 2400000 },
      est:     { total: 2000000, earned: 1800000 },
      vod:     { total: 1300000, earned: 1200000 },
    },
  },

  // ── UNDERPERFORMERS (<$50M DBO) ───────────────────────────

  {
    id: 'tt11057302',
    title: 'Madame Web',
    poster: 'https://image.tmdb.org/t/p/w185/rULWuutDcN5NvtiZi4FRPzRYWSh.jpg',
    releaseDates: { theatrical:'2024-02-14', premium:'2024-03-12', est:'2024-04-09', vod:'2024-04-23', netflix:'2024-09-14' },
    imdbRating: 4.3,
    boxOffice: 43010620,
    predictions: {
      premium: { total: 4500000, earned: 3600000 },
      est:     { total: 3500000, earned: 2600000 },
      vod:     { total: 2200000, earned: 1500000 },
    },
  },

  {
    id: 'tt5108870',
    title: 'Morbius',
    poster: 'https://image.tmdb.org/t/p/w185/6JjfSchsU6daXk2AKX8EEBjO3Fm.jpg',
    releaseDates: { theatrical:'2022-04-01', premium:'2022-04-19', est:'2022-05-17', vod:'2022-06-07', netflix:'2022-10-14' },
    imdbRating: 5.2,
    boxOffice: 39110016,
    predictions: {
      premium: { total: 4100000, earned: 3800000 },
      est:     { total: 3200000, earned: 2900000 },
      vod:     { total: 2000000, earned: 1900000 },
    },
  },

  {
    id: 'tt8239946',
    title: 'Kraven the Hunter',
    poster: 'https://image.tmdb.org/t/p/w185/1GvBhRxY6MELDfxFrete6BNhBB5.jpg',
    releaseDates: { theatrical:'2024-12-13', premium:'2025-01-07', est:'2025-02-04', vod:'2025-02-18', netflix:null },
    imdbRating: 5.7,
    boxOffice: 26100219,
    predictions: {
      premium: { total: 2800000, earned: 1100000 },
      est:     { total: 2100000, earned:  600000 },
      vod:     { total: 1400000, earned:  200000 },
    },
  },

  {
    id: 'tt12261214',
    title: '65',
    poster: 'https://image.tmdb.org/t/p/w185/wfwNAmlVHN3xh9oWUsrIC092d1b.jpg',
    releaseDates: { theatrical:'2023-03-10', premium:'2023-04-04', est:'2023-05-02', vod:'2023-05-16', netflix:null },
    imdbRating: 5.4,
    boxOffice: 32750756,
    predictions: {
      premium: { total: 3100000, earned: 2800000 },
      est:     { total: 2400000, earned: 2200000 },
      vod:     { total: 1500000, earned: 1400000 },
    },
  },

  {
    id: 'tt1634106',
    title: 'Bloodshot',
    poster: 'https://image.tmdb.org/t/p/w185/8WUVHemHFH2ZIP6NWkwlHWsyrEL.jpg',
    releaseDates: { theatrical:'2020-03-13', premium:'2020-03-24', est:'2020-04-28', vod:'2020-05-12', netflix:'2020-09-13' },
    imdbRating: 5.7,
    boxOffice: 10082113,
    predictions: {
      premium: { total: 4600000, earned: 4300000 },
      est:     { total: 3500000, earned: 3300000 },
      vod:     { total: 2200000, earned: 2100000 },
    },
  },

  {
    id: 'tt10060790',
    title: 'Escape Room: Tournament of Champions',
    poster: 'https://image.tmdb.org/t/p/w185/eKE4zAtBV8lQv8gzkdp4gknTGj5.jpg',
    releaseDates: { theatrical:'2021-07-16', premium:'2021-08-03', est:'2021-08-24', vod:'2021-09-07', netflix:null },
    imdbRating: 6.2,
    boxOffice: 30100014,
    predictions: {
      premium: { total: 3200000, earned: 3000000 },
      est:     { total: 2500000, earned: 2300000 },
      vod:     { total: 1600000, earned: 1500000 },
    },
  },

  {
    id: 'tt8332922',
    title: 'Peter Rabbit 2: The Runaway',
    poster: 'https://image.tmdb.org/t/p/w185/tbVZ3Sq88dZaCANlUcewQuHQOaE.jpg',
    releaseDates: { theatrical:'2021-06-11', premium:'2021-06-22', est:'2021-07-13', vod:'2021-07-27', netflix:null },
    imdbRating: 6.0,
    boxOffice: 40859997,
    predictions: {
      premium: { total: 4400000, earned: 4100000 },
      est:     { total: 3400000, earned: 3200000 },
      vod:     { total: 2100000, earned: 2000000 },
    },
  },

  {
    id: 'tt7085328',
    title: 'The Angry Birds Movie 2',
    poster: 'https://image.tmdb.org/t/p/w185/fKk4bfnouKEY5iPzYDMcVmtgDEy.jpg',
    releaseDates: { theatrical:'2019-08-13', premium:'2019-09-17', est:'2019-10-15', vod:'2019-10-29', netflix:'2020-01-14' },
    imdbRating: 6.3,
    boxOffice: 40187866,
    predictions: {
      premium: { total: 4000000, earned: 3900000 },
      est:     { total: 3100000, earned: 3000000 },
      vod:     { total: 1900000, earned: 1900000 },
    },
  },

  {
    id: 'tt20215234',
    title: 'Conclave',
    poster: 'https://image.tmdb.org/t/p/w185/oil3EZwKFp3CWxZnfGfGglesvm9.jpg',
    releaseDates: { theatrical:'2024-10-25', premium:'2024-11-19', est:'2024-12-17', vod:'2025-01-14', netflix:null },
    imdbRating: 7.4,
    boxOffice: 38074225,
    predictions: {
      premium: { total: 3900000, earned: 2400000 },
      est:     { total: 3000000, earned: 1500000 },
      vod:     { total: 1900000, earned:  700000 },
    },
  },

];

// ============================================================
// SECTION 2: UTILITIES
// ============================================================
function formatRevenue(n) {
  if (n == null) return '—';
  if (n >= 1e9) return '$' + (n / 1e9).toFixed(1) + 'B';
  if (n >= 1e6) return '$' + (n / 1e6).toFixed(1) + 'M';
  if (n >= 1e3) return '$' + Math.round(n / 1e3) + 'K';
  return '$' + n;
}

// Deterministic social metrics derived from title hash + box office scale
function computeSocial(movie) {
  let h = 0;
  for (let i = 0; i < movie.title.length; i++) h = (h * 31 + movie.title.charCodeAt(i)) >>> 0;
  const j = (n, salt) => Math.round(n * (0.82 + ((h ^ salt) % 1000) / 1000 * 0.36));
  const dbo = movie.boxOffice;
  return {
    youtube:   j(dbo * 0.210, 17),
    wiki:      j(dbo * 0.014, 31),
    instagram: j(dbo * 0.052, 47),
    facebook:  j(dbo * 0.021, 59),
    twitter:   j(dbo * 0.009, 71),
  };
}

function formatSocial(n) {
  if (n >= 1e9) return (n / 1e9).toFixed(1) + 'B';
  if (n >= 1e6) return (n / 1e6).toFixed(1) + 'M';
  if (n >= 1e3) return Math.round(n / 1e3) + 'K';
  return String(n);
}

function formatDate(isoStr) {
  if (!isoStr) return '—';
  const parts  = isoStr.split('-');
  const year   = parts[0];
  const month  = parseInt(parts[1], 10);
  const day    = parseInt(parts[2], 10);
  const months = ['Jan','Feb','Mar','Apr','May','Jun',
                  'Jul','Aug','Sep','Oct','Nov','Dec'];
  return months[month - 1] + ' ' + day + ', ' + year;
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// ============================================================
// SECTION 3: SEARCH & AUTOCOMPLETE
// ============================================================
let activeIndex    = -1;
let currentResults = [];

// Movies shown as suggestions when the search input is focused but empty
const SUGGESTIONS = [
  'Spider-Man: No Way Home',
  'Venom: Let There Be Carnage',
  'Jumanji: Welcome to the Jungle',
  'The Equalizer 3',
  'Anyone But You',
  'Ghostbusters: Afterlife',
];

function filterMovies(query) {
  if (!query.trim()) return [];
  const q = query.toLowerCase();
  return MOVIES.filter(m => m.title.toLowerCase().includes(q)).slice(0, 8);
}

function renderDropdown(results, issuggestion) {
  const dropdown = document.getElementById('dhe-search-dropdown');
  if (!results.length) {
    dropdown.hidden = true;
    return;
  }
  dropdown.innerHTML = '';
  activeIndex = -1;

  if (issuggestion) {
    const label = document.createElement('li');
    label.className = 'dhe-dropdown-label';
    label.textContent = 'Suggested';
    label.setAttribute('aria-hidden', 'true');
    dropdown.appendChild(label);
  }

  results.forEach((movie, i) => {
    const li = document.createElement('li');
    li.setAttribute('role', 'option');
    li.setAttribute('data-index', String(i));
    li.textContent = movie.title;
    li.addEventListener('mousedown', (e) => {
      e.preventDefault();
      selectMovie(movie);
    });
    dropdown.appendChild(li);
  });
  dropdown.hidden = false;
}

function showSuggestions() {
  const suggested = SUGGESTIONS
    .map(title => MOVIES.find(m => m.title === title))
    .filter(Boolean);
  currentResults = suggested;
  renderDropdown(suggested, true);
}

function updateActiveItem(items) {
  items.forEach((item, i) => {
    item.classList.toggle('dhe-dropdown-active', i === activeIndex);
  });
}

function attachSearchListeners() {
  const input    = document.getElementById('dhe-search-input');
  const dropdown = document.getElementById('dhe-search-dropdown');

  input.addEventListener('input', () => {
    if (!input.value.trim()) {
      showSuggestions();
      return;
    }
    currentResults = filterMovies(input.value);
    renderDropdown(currentResults, false);
  });

  input.addEventListener('keydown', (e) => {
    const items = dropdown.querySelectorAll('li');
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      activeIndex = Math.min(activeIndex + 1, items.length - 1);
      updateActiveItem(items);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      activeIndex = Math.max(activeIndex - 1, 0);
      updateActiveItem(items);
    } else if (e.key === 'Enter' && activeIndex >= 0 && currentResults[activeIndex]) {
      selectMovie(currentResults[activeIndex]);
    } else if (e.key === 'Escape') {
      dropdown.hidden = true;
      activeIndex = -1;
    }
  });

  input.addEventListener('blur', () => {
    setTimeout(() => { dropdown.hidden = true; }, 200);
  });

  input.addEventListener('focus', () => {
    if (!input.value.trim()) {
      showSuggestions();
    } else {
      currentResults = filterMovies(input.value);
      if (currentResults.length) renderDropdown(currentResults, false);
    }
  });
}

// ============================================================
// SECTION 4: RENDER FUNCTIONS
// ============================================================
const SOCIAL_ICONS = {
  youtube:   `<svg viewBox="0 0 24 24" width="15" height="15" xmlns="http://www.w3.org/2000/svg"><path fill="#FF0000" d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12z"/></svg>`,
  wikipedia: `<svg viewBox="0 0 24 24" width="15" height="15" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M12.09 13.119c-.936 1.932-2.217 4.548-2.853 5.728-.616 1.074-1.127.994-1.532.25C6.8 17.569 5.113 14.509 3.786 12l-.023-.013c-1.79 3.898-2.336 7.829-2.303 8.013.14.874.906 1.953 2.213 2.479C3.674 22.579 4.43 22.832 5.196 23h13.612c1.018 0 1.956-.356 2.696-.921 1.047-.819 1.62-2.029 1.437-3.154C22.898 18.516 21.97 17.21 21.06 16c-.83-1.115-1.553-2.218-1.553-2.218l-3.63-6.748-3.788 6.085zm5.882-7.832c-.527-1.092-.936-1.836-1.302-2.39-.374-.573-.775-.929-1.116-1.028-.296-.088-.529.044-.635.209-.198.306-.296 1.041-.264 1.668.014.37.092.72.207 1.004.115.28.282.519.496.68.189.143.42.205.658.185.239-.02.479-.12.698-.29.239-.183.47-.467.658-.838l-.4.8zm-8.742.9c.43-1.199.64-1.964.732-2.527.048-.285.044-.554-.018-.777-.062-.224-.19-.409-.377-.526-.186-.118-.407-.14-.62-.063-.384.134-.772.508-1.09.97-.248.363-.444.778-.552 1.202-.108.424-.124.853-.038 1.23.086.378.271.7.544.93.254.213.574.313.908.28.335-.033.672-.182.971-.41.332-.252.65-.612.94-1.109l-.4.8z"/></svg>`,
  instagram: `<svg viewBox="0 0 24 24" width="15" height="15" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="ig-g" x1="0%" y1="100%" x2="100%" y2="0%"><stop offset="0%" stop-color="#f09433"/><stop offset="50%" stop-color="#dc2743"/><stop offset="100%" stop-color="#bc1888"/></linearGradient></defs><path fill="url(#ig-g)" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>`,
  facebook:  `<svg viewBox="0 0 24 24" width="15" height="15" xmlns="http://www.w3.org/2000/svg"><path fill="#1877F2" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>`,
  twitter:   `<svg viewBox="0 0 24 24" width="15" height="15" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg>`,
};

function renderMetadata(movie) {
  const el = document.getElementById('dhe-metadata');
  const totalEarned =
    movie.predictions.premium.earned +
    movie.predictions.est.earned +
    movie.predictions.vod.earned;
  const totalForecast =
    movie.predictions.premium.total +
    movie.predictions.est.total +
    movie.predictions.vod.total;
  const totalRemaining = Math.max(totalForecast - totalEarned, 0);

  const dates = [
    { label: 'Theatrical', value: movie.releaseDates.theatrical, color: 'var(--secondary)'  },
    { label: 'Premium',    value: movie.releaseDates.premium,    color: 'var(--dhe-orange)' },
    { label: 'EST',        value: movie.releaseDates.est,        color: 'var(--dhe-cyan)'   },
    { label: 'VOD',        value: movie.releaseDates.vod,        color: 'var(--dhe-purple)' },
    { label: 'Netflix',    value: movie.releaseDates.netflix,    color: 'var(--dhe-green)'  },
  ];

  el.innerHTML = `
    <div class="dhe-metadata-inner">
      <div class="dhe-poster-wrap">
        <img
          class="dhe-poster"
          src="${escapeHtml(movie.poster)}"
          alt="${escapeHtml(movie.title)} poster"
          loading="lazy"
          onerror="this.onerror=null;this.src='/images/poster-placeholder.svg'"
        >
      </div>
      <div class="dhe-metadata-info">
        <div class="dhe-title-row">
          <h2 class="dhe-movie-title">${escapeHtml(movie.title)}</h2>
          <span class="dhe-imdb-badge">${escapeHtml(movie.id)}</span>
        </div>
        <div class="dhe-key-metrics">
          <div class="dhe-metric-item">
            <span class="dhe-metric-label">IMDb Rating</span>
            <span class="dhe-metric-val dhe-rating">&#9733; ${movie.imdbRating.toFixed(1)}</span>
          </div>
          <div class="dhe-metric-item">
            <span class="dhe-metric-label">Box Office</span>
            <span class="dhe-metric-val dhe-dbo">${formatRevenue(movie.boxOffice)}</span>
          </div>
          <div class="dhe-metric-item">
            <span class="dhe-metric-label">Digital Earned</span>
            <span class="dhe-metric-val dhe-cum-rev">${formatRevenue(totalEarned)}</span>
          </div>
          <div class="dhe-metric-item">
            <span class="dhe-metric-label">Projected Upside</span>
            <span class="dhe-metric-val dhe-remaining">+${formatRevenue(totalRemaining)}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="dhe-dates-strip">
      ${dates.filter(d => d.value).map(d => `
        <div class="dhe-date-item" style="--date-color:${d.color}">
          <span class="dhe-date-label">${d.label}</span>
          <span class="dhe-date-value">${formatDate(d.value)}</span>
        </div>
      `).join('')}
    </div>
    <div class="dhe-social-strip">
      ${(() => {
        const s = computeSocial(movie);
        return [
          { icon: SOCIAL_ICONS.youtube,   value: s.youtube,   label: 'Views'    },
          { icon: SOCIAL_ICONS.wikipedia, value: s.wiki,      label: 'Searches' },
          { icon: SOCIAL_ICONS.instagram, value: s.instagram, label: 'Likes'    },
          { icon: SOCIAL_ICONS.facebook,  value: s.facebook,  label: 'Shares'   },
          { icon: SOCIAL_ICONS.twitter,   value: s.twitter,   label: 'Posts'    },
        ].map(p => `
          <div class="dhe-social-item">
            <span class="dhe-social-icon">${p.icon}</span>
            <span class="dhe-social-value">${formatSocial(p.value)}</span>
            <span class="dhe-social-label">${p.label}</span>
          </div>
        `).join('');
      })()}
    </div>
  `;
}

function renderPredictions(movie) {
  const el = document.getElementById('dhe-predictions');
  const channels = [
    { key: 'premium', label: 'Premium', color: 'var(--dhe-orange)' },
    { key: 'est',     label: 'EST',     color: 'var(--dhe-cyan)'   },
    { key: 'vod',     label: 'VOD',     color: 'var(--dhe-purple)' },
  ];

  const rows = channels.map(ch => {
    const pred = movie.predictions[ch.key];
    const pct  = Math.min((pred.earned / pred.total) * 100, 100).toFixed(2);
    return `
      <div class="dhe-pred-row">
        <span class="dhe-pred-label" style="color:${ch.color}">${ch.label}</span>
        <div class="dhe-pred-bar-wrap">
          <div class="dhe-gauge-track">
            <div
              class="dhe-gauge-fill"
              style="width:0%;background:${ch.color}"
              data-target="${pct}"
            ></div>
          </div>
          <div class="dhe-pred-meta">
            <span class="dhe-pred-earned">${formatRevenue(pred.earned)} earned</span>
            <span class="dhe-pred-total">${formatRevenue(pred.total)} forecast</span>
          </div>
        </div>
      </div>
    `;
  }).join('');

  el.innerHTML = `
    <div class="dhe-pred-header">
      <span class="dhe-section-title">Revenue Predictions by Channel</span>
    </div>
    <div class="dhe-pred-body">
      <div class="dhe-pred-rows">${rows}</div>
    </div>
  `;

  // Animate bars — two rAF calls ensure the initial width:0% is painted first
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      el.querySelectorAll('.dhe-gauge-fill').forEach(bar => {
        bar.style.width = bar.dataset.target + '%';
      });
    });
  });
}

function selectMovie(movie) {
  document.getElementById('dhe-search-input').value = movie.title;
  document.getElementById('dhe-search-dropdown').hidden = true;
  activeIndex = -1;

  // Transition search bar from centered hero → compact top
  document.getElementById('dhe-app').classList.add('has-results');

  const results = document.getElementById('dhe-results');
  results.hidden = false;

  renderMetadata(movie);
  renderPredictions(movie);
}

// ============================================================
// SECTION 5: INIT
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  attachSearchListeners();
});
