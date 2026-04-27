/**
 * 資訊股交接系統 - 資料庫
 * 以後更新「網址」、「人名」、「項目」請改這裡，不要動 App.jsx
 */

export const NEWS_DATA = {
  receivedDoc: "2026/04/27 通知舉開大畢班成長營事宜(真臺牧字第115-0137號)",
  meeting: "2026/04/22 職務會：受洗人員審查會",
};

export const GROUPS_DATA = [
  { id: 'g1', name: '資料組', leader: '王鴻志', status: '已確認', folder: 'https://drive.google.com/drive/folders/1YDc4fNyHQffbE-NC38-lfvzsQxFWnSY6?usp=sharing' },
  { id: 'g2', name: '文工組', leader: '王鴻志', status: '待核備', folder: 'https://drive.google.com/drive/folders/1Ilerr_LXjVi4dn84WsAOeNGT8vRejRE0?usp=sharing' },
  { id: 'g3', name: '書報組', leader: '張蓉惠', status: '已確認', folder: 'https://drive.google.com/drive/folders/1tnmy7oeYm9xBBaSmlYGjjsHJ9uAjUe3W?usp=sharing' },
  { id: 'g4', name: '車管組', leader: '楊忠生', status: '已確認', folder: 'https://drive.google.com/drive/folders/1WZei0srHbcd7CWZ5VZrFtGb9RE701V2M?usp=sharing' },
];

export const MEMBERSHIP_DATA = [
  { id: 'm4', name: '總會會籍系統 (MMS)', purpose: '總會專屬會籍管理系統入口', link: 'https://tjc-mms.tjc.org.tw/' },
  { id: 'm5', name: '教會實名制登入', purpose: '聚會實名制管理與簽到系統', link: 'https://checkin.tjc.church/admin/auth/login' },
  { id: 'm1', name: '信徒會籍名簿 (表三/四)', purpose: '記錄信徒基本資料與遷移', link: '#' },
  { id: 'm2', name: '遷出/入登記記錄', purpose: '追蹤信徒異動手續', link: '#' },
  { id: 'm3', name: '年底信徒統計表', purpose: '每年呈報總會之基準資料', link: 'https://docs.google.com/spreadsheets/d/1Rd4_jrObHXZrvj_6GgFqg2CuDW0QW9bH/edit?usp=sharing&ouid=113791326732780317944&rtpof=true&sd=true' },
];


export const DOCUMENT_STRUCTURE = [
  {
    category: '外部公文與公告系統',
    description: '總會與辦事處之即時公文閱覽與公告平台。',
    items: [
      { name: '總會公文閱覽系統', link: 'https://odms.tjc.org.tw/Doc/Default.aspx' },
      { name: '西區辦事處公文公告', link: 'https://sites.google.com/site/tjcwest/home-1' }
    ]
  },
  {
    category: '收發公文雲端存檔',
    description: '處理對外與對內的正式函文，依單位分類歸檔於雲端硬碟。',
    items: [
      { name: '總會公文存檔', link: 'https://drive.google.com/...' },
      { name: '西區公文存檔', link: 'https://drive.google.com/...' },
      { name: '地方教會公文', link: 'https://drive.google.com/...' }
    ]
  },
  {
    category: '各項會議記錄',
    description: '包含教會各項重要議事紀錄，需永久保存。',
    items: [
      { name: '信徒會議', link: 'https://drive.google.com/drive/folders/1SPx8s-_eYBvXOVXf-LgmwrBOg1TmfPDu?usp=sharing' },
      { name: '職務會紀錄', link: 'https://drive.google.com/drive/folders/1FZdnmfcKahiuIJv6YFN7eyb6-BdYSQwh?usp=sharing.' },
      { name: '負責人會議', link: 'https://drive.google.com/drive/folders/1Ipu4X5j9gYvoMIFn6xXnHa-fahqPI_mI?usp=sharing' }
    ]
  }
];

export const ASSETS_DATA = [
  { id: 'a1', name: '教會公印', type: '印信', keeper: '資訊股', location: '保險箱' },
  { id: 'a2', name: '行政管理電腦', type: '財產', keeper: '事務股', location: '辦公室' },
  { id: 'a3', name: '不動產所有權狀影本', type: '文件', keeper: '事務股', location: '檔案櫃' },
];
