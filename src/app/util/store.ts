'use server';
export async function getBannerData() {
  const res = await fetch('https://api.testvalley.kr/main-banner/all');

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

export async function getShortcutData() {
  const res = await fetch('https://api.testvalley.kr/main-shortcut/all');

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

export async function getHotDealsData() {
  const res = await fetch(
    'https://api.testvalley.kr/collections?prearrangedDiscount',
  );

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}
