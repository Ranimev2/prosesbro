export async function fetchHome() {
  const res = await fetch(`https://latipharkat-api.my.id/api/otakudesu/home`);
  const data = res.json();
  return data;
}

export async function fetchSearch(value) {
  const res = await fetch(
    `https://kumanime.vercel.app/api/seacrh/${value}`
  );
  const data = res.json();
  return data;
}

export async function fetchDetail(slug) {
  const res = await fetch(
    `https://kumanime.vercel.app/api/anime/${slug}`
  );
  const data = res.json();
  return data;
}

export async function fetchDaftar() {
  const res = await fetch(
    "https://kumanime.vercel.app/api/populer"
  );
  const data = res.json();
  return data;
}

export async function fetchJadwal() {
  const res = await fetch(
    "https://kumanime.vercel.app/api/latest"
  );
  const data = res.json();
  return data;
}

export async function fetchEpisode(slug) {
  const url = id
    ? `https://kumanime.vercel.app/api/episode/${slug}`
    : `https://kumanime.vercel.app/api/episode/${slug}`;
  const res = await fetch(url);
  const data = res.json();
  return data;
}
