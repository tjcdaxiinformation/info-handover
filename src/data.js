/**
 * 資訊股交接系統 - 資料庫 (2026/05/06 更新)
 */

export const VEHICLE_REPORT_LINK = "https://forms.gle/your-google-form-url"; 

// --- 本會宣布事項資料 ---
export const CHURCH_ANNOUNCEMENTS = {
  updateDate: "2026/05/06",
  // 代禱名單
  prayers: [
    { name: "病中代禱", list: "李思親、宗福勇、李慧蘭、安月美、許甜心慕、胡秀蓮、葛秀娟、何美鳳、陳勇希、曾立學、鳳秋娥、陳桂英、陳進芳慕" },
    { name: "傳道代禱", list: "張健二傳道(腦出血住院)、鍾清章傳道(修復重建)" },
    { name: "聖事工", list: "全體教會牧養、福音宣道事工求主帶領" }
  ],
  // 近期活動日程
  events: [
    { date: "5/07(四)", time: "家庭聚會", location: "楊淑娟姊妹宅" },
    { date: "5/09(六)", time: "19:00", location: "牧區聯合詩班練詩(崎頂)" },
    { date: "5/16(六)", time: "全天", location: "上午季佈道會 / 下午臨時信徒會議" },
    { date: "5/23(六)", time: "15:30", location: "宗教教育季活動 (一樓副堂)" },
    { date: "6/06-07", time: "訪問", location: "青教組訪問(新林、林口教會)" },
    { date: "7/19-21", time: "三天兩夜", location: "教會全體出訪花東 (6/20截止報名)" }
  ],
  // 財務摘要
  finance: {
    monthly: "3月份結餘：$938,173",
    status: "2026年經常費 67 萬元目標已順利達成"
  }
};

export const NEWS_DATA = {
  receivedDoc: "2024/04/26 總會通知：第 10 屆資訊人員講習開始報名",
  meeting: "2024/04/15 職務會：關於主機機房空調維護決議",
};

export const GROUPS_DATA = [
  { id: 'g1', name: '資料組', leader: '張三', folder: 'https://drive.google.com/...' },
  { id: 'g2', name: '文工組', leader: '李四', folder: 'https://drive.google.com/...' },
  { id: 'g3', name: '書報組', leader: '王五', folder: 'https://drive.google.com/...' },
  { id: 'g4', name: '圖書組', leader: '趙六', folder: 'https://drive.google.com/...' },
];

export const MEMBERSHIP_DATA = [
  { id: 'm4', name: '總會會籍系統 (MMS)', purpose: '總會專屬會籍管理系統入口', link: 'https://tjc-mms.tjc.org.tw/' },
  { id: 'm5', name: '教會實名制登入', purpose: '聚會實名制管理與簽到系統', link: 'https://checkin.tjc.church/admin/auth/login' },
  { id: 'm1', name: '西區公告系統', purpose: '西區辦事處公文公告', link: 'https://sites.google.com/site/tjcwest/home-1' },
]; 

export const DOCUMENT_STRUCTURE = [
  {
    category: '外部公文與公告',
    items: [
      { name: '總會公文閱覽', link: 'https://odms.tjc.org.tw/Doc/Default.aspx' },
      { name: '西區公文公告', link: 'https://sites.google.com/site/tjcwest/home-1' }
    ]
  }
];

export const ASSETS_DATA = [
  { id: 'a1', name: '教會公印', keeper: '股負責' },
  { id: 'a2', name: '行政管理電腦', keeper: '資訊股' },
];

